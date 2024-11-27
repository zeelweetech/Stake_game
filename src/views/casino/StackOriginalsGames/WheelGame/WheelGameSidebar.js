import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decodedToken } from "../../../../resources/utility";
import {
  setAutoBet,
  setFinaMultiplier,
  setIsBetInProgress,
  setMustSpin,
  setWheelValue,
} from "../../../../features/casino/wheelSlice";
import { Divider } from "@mui/material";
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import PercentIcon from "@mui/icons-material/Percent";
import { openRegisterModel } from "../../../../features/auth/authSlice";
import { WheelSocket } from "../../../../socket";
import { useParams } from "react-router-dom";
import wheelSound from "../../../../assets/Sound/wheelSound.wav"
import toast from "react-hot-toast";

function WheelGameSidebar() {
  const dispatch = useDispatch();
  const decoded = decodedToken();
  const { id } = useParams();
  const [isManual, setIsManual] = useState(true);
  const [onProfit, setOnProfit] = useState({ win: true, lose: true });
  const [responsiveMobile, setResponsiveMobile] = useState(window.innerWidth)
  const { wheelValue, finalmultiplier, isBetInProgress, autoBet } = useSelector((state) => state.wheelGame);

  useEffect(() => {
    const handleResize = () => setResponsiveMobile(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    dispatch(setWheelValue({ ...wheelValue, [name]: value }));
  };

  const handleOnManualBet = () => {
    if (!localStorage.getItem("token")) {
      dispatch(openRegisterModel());
    } else {
      dispatch(setIsBetInProgress(true))
      WheelSocket.emit("manualBet", {
        userId: decoded?.userId,
        gameId: id,
        betAmount: wheelValue?.betamount
          ? parseInt(wheelValue?.betamount, 10)
          : 0,
        risk: wheelValue?.risk,
        segment: parseInt(wheelValue?.segments, 10),
      });
      const audio = new Audio(wheelSound);
      audio.play();

      dispatch(setMustSpin(false));
      // dispatch(
      //   setWheelValue({
      //     betamount: "",
      //     risk: wheelValue?.risk,
      //     segments: wheelValue?.segments,
      //   })
      // );
    }
  };

  const handleOnAutoBet = () => {
    if (!localStorage.getItem("token")) {
      dispatch(openRegisterModel());
    } else {
      WheelSocket.emit("autoBet", {
        userId: decoded?.userId,
        gameId: id,
        betAmount: wheelValue?.betamount
          ? parseInt(wheelValue?.betamount, 10)
          : 0,
        risk: wheelValue?.risk,
        segment: parseInt(wheelValue?.segments, 10),
        numberOfBets: finalmultiplier?.remainingBets > 0
          ? finalmultiplier.remainingBets - 1
          : wheelValue?.numberofbet || "",
        onWin: parseInt(wheelValue?.onwin, 10),
        onLoss: parseInt(wheelValue?.onloss, 10),
        stopOnLoss: parseInt(wheelValue?.stoponloss, 10),
        stopOnProfit: parseInt(wheelValue?.stoponprofit, 10),
      });
      const audio = new Audio(wheelSound);
      audio.play();
      dispatch(setAutoBet(true));
      // dispatch(
      //   setWheelValue({
      //     betamount: "",
      //     numberofbet: "",
      //     stoponloss: "",
      //     stoponprofit: "",
      //     onwin: "",
      //     onloss: "",
      //     risk: wheelValue?.risk,
      //     segments: wheelValue?.segments,
      //   })
      // );
    }
  };

  const handleOnStopAutoBet = () => {
    WheelSocket.emit("pauseAutoBet");
    dispatch(setAutoBet(false));
  };

  return (
    <div>
      {responsiveMobile > 768 ? (
        <div className="xl:w-80 lg:w-[16.8rem] xl:mx-0 lg:mx-0 xl:mt-0 lg:mt-0 md:mx-[8rem] md:mt-32 mx-3 flex flex-col p-3 bg-[#213743]">
          <div className="flex overflow-x-auto overflow-y-hidden transform translate-z-0">
            <div className="bg-[#0f212e] flex grow rounded-full p-[5px] flex-shrink-0">
              <div className="flex space-x-2 overflow-hidden">
                <button
                  className={`py-2 xl:w-[8.7rem] lg:w-[7.08rem] md:w-[12.81rem] w-[11.12rem] rounded-full ${isManual ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                    }`}
                  onClick={() => setIsManual(true)}
                >
                  Manual
                </button>
                <button
                  className={`py-2 xl:w-[8.65rem] lg:w-[7.1rem] md:w-[12.9rem] w-[11.12rem] rounded-full ${!isManual ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                    }`}
                  onClick={() => setIsManual(false)}
                >
                  Auto
                </button>
              </div>
            </div>
          </div>
          {isManual ? (
            <div>
              <div className="text-[#B1BAD3] flex justify-between font-semibold text-sm my-2">
                <label>Bet Amount</label>
                <label>₹{wheelValue?.betamount ? wheelValue?.betamount : '0.00'}</label>
              </div>
              <div className="flex border-1 rounded-md border-[#2F4553] bg-[#2F4553]">
                <div className="relative flex">
                  {/* <div className="cursor-text text-xl absolute flex top-1/2 right-3.5 -translate-y-1/2 pointer-events-none z-2">
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div> */}
                  <input
                    type="number"
                    placeholder="0.00"
                    min={0}
                    name="betamount"
                    value={wheelValue?.betamount}
                    onChange={(e) => handleOnChange(e)}
                    className={`xl:w-48 lg:w-36 md:w-80 w-64 pr-1.5 pl-2 py-2 rounded-l-md text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none`}
                  // disabled={minesBetStatus}
                  />
                </div>
                <button
                  className={`w-16 text-lg font-bold hover:bg-[#5c849e68]`}
                  //     ${
                  //    minesBetStatus && "cursor-not-allowed"
                  //  }
                  onClick={() =>
                    dispatch(
                      setWheelValue({
                        ...wheelValue,
                        betamount: wheelValue?.betamount / 2,
                      })
                    )
                  }
                // disabled={minesBetStatus}
                >
                  ½
                </button>
                <Divider
                  flexItem
                  orientation="vertical"
                  sx={{ my: 1.5, backgroundColor: "#1A2c38", width: "2px" }}
                />
                <button
                  className={`w-16 text-sm font-bold hover:bg-[#5c849e68]`}
                  //   ${
                  //   minesBetStatus && "cursor-not-allowed"
                  // }
                  onClick={() =>
                    dispatch(
                      setWheelValue({
                        ...wheelValue,
                        betamount: wheelValue?.betamount * 2,
                      })
                    )
                  }
                // disabled={minesBetStatus}
                >
                  2×
                </button>
              </div>
              <div className="text-[#b1bad3] font-semibold text-m mt-1 my-2">
                <label>Risk </label>
              </div>
              <div className="flex border-2 rounded-md hover:border-[#557086] border-[#2F4553] bg-[#2F4553]">
                <select
                  type="select"
                  name="risk"
                  value={wheelValue?.risk}
                  onChange={(e) => handleOnChange(e)}
                  className={`w-full px-2 py-2 text-white rounded bg-[#0f212e] focus:outline-none focus:border-transparent`}
                //   ${
                //   completeBetStatus && "cursor-not-allowed"
                // }
                // disabled={completeBetStatus}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div>
                <div className="text-[#b1bad3] flex justify-between font-semibold text-m mt-1 my-2 ">
                  <label>Segments</label>
                </div>
                <div className="relative flex rounded-md ">
                  <select
                    type="select"
                    name="segments"
                    value={wheelValue?.segments}
                    onChange={(e) => handleOnChange(e)}
                    className="w-full px-2 py-2 text-white  rounded border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                  >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={40}>40</option>
                    <option value={50}>50</option>
                  </select>
                </div>
              </div>
              <button
                className={`${isBetInProgress ? "bg-[#298629]" : "bg-[#1fff20] hover:bg-[#42ed45]"} text-black mt-3.5 py-3 rounded font-semibold w-full md:block hidden`}
                onClick={() => handleOnManualBet()}
                disabled={isBetInProgress}
              >
                {/* {gameBet ? "Cashout" : "Bet"} */}
                Bet
              </button>
            </div>
          ) : (
            <div>
              <div className="text-[#b1bad3] text-sm flex justify-between font-semibold my-2">
                <label>Bet Amount</label>
                <label>₹{finalmultiplier?.betAmount ? Number(finalmultiplier?.betAmount).toFixed(2) : wheelValue?.betamount || '0.00'}</label>
              </div>
              <div className="flex border-1 rounded-md border-[#2F4553] bg-[#2F4553]">
                <div className="relative flex">
                  {/* <div className="cursor-text text-xl absolute flex top-1/2 right-3.5 -translate-y-1/2 pointer-events-none z-2">
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div> */}
                  <input
                    className="xl:w-48 lg:w-40 md:w-80 pr-1.5 pl-2 py-2 rounded-l-md text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0.00"
                    step="0.01"
                    min={0}
                    name="betamount"
                    value={finalmultiplier?.betAmount ? Number(finalmultiplier?.betAmount).toFixed(2) : wheelValue?.betamount}
                    onChange={(e) => {handleOnChange(e)
                      if (finalmultiplier?.betAmount) {
                        dispatch(setFinaMultiplier({ betAmount: '' }))
                      }
                    }}  
                  />
                </div>
                <button
                  className="w-16 text-lg font-bold hover:bg-[#5c849e68]"
                  onClick={() =>
                    dispatch(
                      setWheelValue({
                        ...wheelValue,
                        betamount: wheelValue?.betamount / 2,
                      })
                    )
                  }
                >
                  ½
                </button>
                <Divider
                  flexItem
                  orientation="vertical"
                  sx={{ my: 1.5, backgroundColor: "#1A2c38", width: "2px" }}
                />
                <button
                  className="w-16  text-sm font-bold hover:bg-[#5c849e68]"
                  onClick={() =>
                    dispatch(
                      setWheelValue({
                        ...wheelValue,
                        betamount: wheelValue?.betamount * 2,
                      })
                    )
                  }
                >
                  2×
                </button>
              </div>
              <div className="text-[#b1bad3] font-semibold mt-1 my-2">
                <label>Risk </label>
              </div>
              <div className="flex border-2 rounded-md hover:border-[#557086] border-[#2F4553] bg-[#2F4553]">
                <select
                  type="select"
                  name="risk"
                  value={wheelValue?.risk}
                  onChange={(e) => handleOnChange(e)}
                  className={`w-full px-2 py-2 text-white rounded bg-[#0f212e] focus:outline-none focus:border-transparent`}
                //   ${
                //   completeBetStatus && "cursor-not-allowed"
                // }
                // disabled={completeBetStatus}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div>
                <div className="text-[#b1bad3] flex justify-between font-semibold text-m mt-1 my-2">
                  <label>Segments</label>
                </div>
                <div className="relative flex  rounded-md">
                  <select
                    type="select"
                    name="segments"
                    value={wheelValue?.segments}
                    onChange={(e) => handleOnChange(e)}
                    className="w-full px-2 py-2 text-white rounded border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                  >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={40}>40</option>
                    <option value={50}>50</option>
                  </select>
                </div>
              </div>
              <div className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1 mb-1">
                <label>Number of Bets</label>
              </div>
              <div className="relative flex rounded-md">
                <div className="absolute flex top-1/2 right-1 -translate-y-1/2 pointer-events-none z-2">
                  <AllInclusiveIcon className="mx-1" style={{ fontSize: 18, color: "#B1BAD3", width: "20px", height: "20px" }} />
                </div>
                <input
                  className="w-full pr-7 pl-2 py-2 text-white rounded border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                  type="number"
                  placeholder="0"
                  min={0}
                  name="numberofbet"
                  // value={wheelValue?.numberofbet}
                  // value={finalmultiplier?.remainingBets === 1 ? wheelValue?.numberofbet || ""
                  //   : (finalmultiplier?.remainingBets ? parseInt(finalmultiplier?.remainingBets) : wheelValue?.numberofbet)}
                  value={
                    finalmultiplier?.remainingBets > 0
                      ? finalmultiplier.remainingBets - 1 
                      : wheelValue?.numberofbet || ""
                  }
                  onChange={(e) => {
                    handleOnChange(e);

                    if (finalmultiplier?.remainingBets > 0) {
                      dispatch(setFinaMultiplier({ remainingBets: '' }));
                    }
                  }}
                />
              </div>
              <div className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1 mb-1">
                <label>On win</label>
              </div>
              <div className="flex items-center space-x-0.5 border-2 mt-1 mb-2 rounded border-[#4d718768] bg-[#4d718768]">
                <button
                  className={`${onProfit.win
                    ? "bg-[#0f212e] rounded"
                    : "rounded hover:bg-[#85afca68]"
                    } xl:px-2 lg:px-2 md:px-6 px-2 py-1.5 rounded-sm`}
                  onClick={() => {
                    setOnProfit({ ...onProfit, win: true });
                    dispatch(setWheelValue({ ...wheelValue, onwin: "" }))
                  }}
                >
                  Reset
                </button>
                <button
                  className={`${onProfit.win
                    ? "hover:bg-[#85afca68]"
                    : "bg-[#0f212e] rounded-sm"
                    } px-[0.20rem] py-1.5`}
                  onClick={() => {
                    setOnProfit({ ...onProfit, win: false });
                  }}
                >
                  Increase by:
                </button>
                <div
                  className={`relative flex ${onProfit.win
                    ? "opacity-50 pointer-events-none cursor-not-allowed"
                    : ""
                    }`}
                >
                  <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                    <PercentIcon fontSize="small" />
                  </div>
                  <input
                    className="w-[10.7rem] pr-7 pl-2 py-1.5 xl:w-36 lg:w-[5.8rem] md:w-[15.3rem] rounded text-white bg-[#0f212e] focus:outline-non"
                    type="number"
                    placeholder="0"
                    name="onwin"
                    value={wheelValue?.onwin}
                    onChange={(e) => handleOnChange(e)}
                    disabled={onProfit.win}
                  />
                </div>
              </div>
              <div className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1.5 mb-1">
                <label>On Lose</label>
              </div>
              <div className="flex items-center space-x-0.5 border-2 mt-1 rounded border-[#4d718768] bg-[#4d718768]">
                <div>
                  <button
                    className={`${onProfit.lose
                      ? "bg-[#0f212e] rounded"
                      : "hover:bg-[#85afca68] rounded"
                      } xl:px-2 lg:px-2 md:px-6 px-2 py-1.5 rounded`}
                    onClick={() => {
                      setOnProfit({ ...onProfit, lose: true });
                      dispatch(setWheelValue({ ...wheelValue, onlose: "" }))
                    }}
                  >
                    Reset
                  </button>
                </div>
                <div>
                  <button
                    className={`${onProfit.lose
                      ? "hover:bg-[#85afca68]"
                      : "bg-[#0f212e] rounded-sm"
                      } px-[0.20rem] py-1.5`}
                    onClick={() => {
                      setOnProfit({ ...onProfit, lose: false });
                    }}
                  >
                    Increase by:
                  </button>
                </div>
                <div
                  className={`relative flex ${onProfit.lose
                    ? "opacity-50 pointer-events-none cursor-not-allowed"
                    : ""
                    }`}
                >
                  <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                    <PercentIcon fontSize="small" />
                  </div>
                  <input
                    className="w-[10.7rem] pr-7 pl-2 py-1.5 xl:w-36 rounded lg:w-[5.8rem] md:w-[15.3rem] text-white bg-[#0f212e] focus:outline-none focus:border-transparent"
                    type="number"
                    placeholder="0"
                    name="onlose"
                    value={wheelValue?.onlose}
                    onChange={(e) => handleOnChange(e)}
                    disabled={onProfit.lose}
                  />
                </div>
              </div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-xs mt-2 mb-1">
                <label>Stop on Profit</label>
                <label>₹{wheelValue?.stoponprofit ? wheelValue?.stoponprofit : '0.00'}</label>
              </div>
              <div className="relative flex">
                {/* <div className="cursor-text text-xl text-[#B1BAD3] absolute flex top-1/2 right-3.5 -translate-y-1/2 pointer-events-none z-2">
              <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
            </div> */}
                <input
                  className="w-full pr-1.5 px-2 py-2 text-white border-2 rounded-md border-[#4d718768] bg-[#0f212e] focus:outline-none"
                  type="number"
                  placeholder="0.01"
                  step="0.01"
                  name="stoponprofit"
                  value={wheelValue?.stoponprofit}
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-xs mt-2 mb-1">
                <label>Stop on Loss</label>
                <label>₹{wheelValue?.stoponloss ? wheelValue?.stoponloss : '0.00'}</label>
              </div>
              <div className="relative flex border-1 rounded-md border-[#2F4553] bg-[#2F4553]">
                {/* <div className="cursor-text text-xl text-[#B1BAD3] absolute flex top-1/2 right-3.5 -translate-y-1/2 pointer-events-none z-2">
              <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
            </div> */}
                <input
                  className="w-full pr-1.5 px-2 py-2 text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                  type="number"
                  placeholder="0.01"
                  step="0.01"
                  name="stoponloss"
                  value={wheelValue?.stoponloss}
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
              {autoBet ? (
                <button
                  className={` bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3 py-3 rounded-md font-semibold w-full`}
                  onClick={() => handleOnStopAutoBet()}
                >
                  Stop Autobet
                </button>
              ) : (
                <button
                  className={`${
                    // bettingStatus === false
                    //   ? "bg-[#489649]"
                    //   :
                    "bg-[#1fff20] hover:bg-[#42ed45]"
                    } text-black mt-3 py-3 rounded-md font-semibold w-full focus:outline-none focus:border-transparent md:block hidden`}
                  onClick={() =>
                    wheelValue?.numberofbet === undefined || wheelValue?.numberofbet === ""
                      ? toast.error("Please enter a number of bets")
                      : handleOnAutoBet()}
                >
                  Start Autobet
                </button>
              )}
            </div>
          )}
        </div>
      ) : null}

      {responsiveMobile <= 768 ? (
        <div className="xl:w-80 lg:w-[16.8rem] xl:mx-0 lg:mx-0 xl:mt-0 lg:mt-0 md:mx-[8rem] md:mt-32 mx-3 flex flex-col p-3 bg-[#213743]">
          {isManual ? (
            <div>
              <div className="text-[#B1BAD3] flex justify-between font-semibold text-sm mb-2">
                <label>Bet Amount</label>
                <label>₹{wheelValue?.betamount ? wheelValue?.betamount : '0.00'}</label>
              </div>
              <div className="flex border-1 rounded-md border-[#2F4553] bg-[#2F4553]">
                <div className="relative flex">
                  {/* <div className="cursor-text text-xl absolute flex top-1/2 right-3.5 -translate-y-1/2 pointer-events-none z-2">
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div> */}
                  <input
                    type="number"
                    placeholder="0.00"
                    min={0}
                    name="betamount"
                    value={wheelValue?.betamount}
                    onChange={(e) => handleOnChange(e)}
                    className={`xl:w-48 lg:w-36 md:w-80 w-64 pr-1.5 pl-2 py-2 rounded-l-md text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none`}
                  // disabled={minesBetStatus}
                  />
                </div>
                <button
                  className={`w-16 text-lg font-bold hover:bg-[#5c849e68]`}
                  //     ${
                  //    minesBetStatus && "cursor-not-allowed"
                  //  }
                  onClick={() =>
                    dispatch(
                      setWheelValue({
                        ...wheelValue,
                        betamount: wheelValue?.betamount / 2,
                      })
                    )
                  }
                // disabled={minesBetStatus}
                >
                  ½
                </button>
                <Divider
                  flexItem
                  orientation="vertical"
                  sx={{ my: 1.5, backgroundColor: "#1A2c38", width: "2px" }}
                />
                <button
                  className={`w-16 text-sm font-bold hover:bg-[#5c849e68]`}
                  //   ${
                  //   minesBetStatus && "cursor-not-allowed"
                  // }
                  onClick={() =>
                    dispatch(
                      setWheelValue({
                        ...wheelValue,
                        betamount: wheelValue?.betamount * 2,
                      })
                    )
                  }
                // disabled={minesBetStatus}
                >
                  2×
                </button>
              </div>
              <button
                className={`${isBetInProgress ? "bg-[#298629]" : "bg-[#1fff20] hover:bg-[#42ed45]"} text-black mt-3.5 py-3 rounded font-semibold w-full`}
                onClick={() => handleOnManualBet()}
                disabled={isBetInProgress}
              >
                {/* {gameBet ? "Cashout" : "Bet"} */}
                Bet
              </button>
              <div className="flex justify-center space-x-2 mt-1">
                <div className="w-full">
                  <div className="text-[#b1bad3] font-semibold text-m mt-1 my-1">
                    <label>Risk </label>
                  </div>
                  <div className="flex border-2 rounded-md hover:border-[#557086] border-[#2F4553] bg-[#2F4553]">
                    <select
                      type="select"
                      name="risk"
                      value={wheelValue?.risk}
                      onChange={(e) => handleOnChange(e)}
                      className={`w-full px-2 py-2 text-white rounded bg-[#0f212e] focus:outline-none focus:border-transparent`}
                    //   ${
                    //   completeBetStatus && "cursor-not-allowed"
                    // }
                    // disabled={completeBetStatus}
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <div className="text-[#b1bad3] flex justify-between font-semibold text-m mt-1 my-1">
                    <label>Segments</label>
                  </div>
                  <div className="relative flex rounded-md">
                    <select
                      type="select"
                      name="segments"
                      value={wheelValue?.segments}
                      onChange={(e) => handleOnChange(e)}
                      className="w-full px-2 py-2 text-white  rounded border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    >
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={30}>30</option>
                      <option value={40}>40</option>
                      <option value={50}>50</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {autoBet ? (
                <button
                  className={` bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3 py-3 rounded-md font-semibold w-full`}
                  onClick={() => handleOnStopAutoBet()}
                >
                  Stop Autobet
                </button>
              ) : (
                <button
                  className={`${
                    // bettingStatus === false
                    //   ? "bg-[#489649]"
                    //   :
                    "bg-[#1fff20] hover:bg-[#42ed45]"
                    } text-black mt-3 py-3 rounded-md font-semibold w-full focus:outline-none focus:border-transparent`}
                  onClick={() =>
                    wheelValue?.numberofbet === undefined || wheelValue?.numberofbet === ""
                      ? toast.error("Please enter a number of bets")
                      : handleOnAutoBet()}
                >
                  Start Autobet
                </button>
              )}
              <div className="text-[#b1bad3] text-sm flex justify-between font-semibold my-2">
                <label>Bet Amount</label>
                <label>₹{finalmultiplier?.betAmount ? Number(finalmultiplier?.betAmount).toFixed(2) : wheelValue?.betamount || '0.00'}</label>
              </div>
              <div className="flex border-1 rounded-md border-[#2F4553] bg-[#2F4553]">
                <div className="relative flex">
                  {/* <div className="cursor-text text-xl absolute flex top-1/2 right-3.5 -translate-y-1/2 pointer-events-none z-2">
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div> */}
                  <input
                    className="xl:w-48 lg:w-40 md:w-80 pr-1.5 pl-2 py-2 rounded-l-md text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0.00"
                    step="0.01"
                    min={0}
                    name="betamount"
                    value={finalmultiplier?.betAmount ? Number(finalmultiplier?.betAmount).toFixed(2) : wheelValue?.betamount}
                    onChange={(e) => {handleOnChange(e)
                      if (finalmultiplier?.betAmount) {
                        dispatch(setFinaMultiplier({ betAmount: '' }))
                      }
                    }}
                  />
                </div>
                <button
                  className="w-16 text-lg font-bold hover:bg-[#5c849e68]"
                  onClick={() =>
                    dispatch(
                      setWheelValue({
                        ...wheelValue,
                        betamount: wheelValue?.betamount / 2,
                      })
                    )
                  }
                >
                  ½
                </button>
                <Divider
                  flexItem
                  orientation="vertical"
                  sx={{ my: 1.5, backgroundColor: "#1A2c38", width: "2px" }}
                />
                <button
                  className="w-16  text-sm font-bold hover:bg-[#5c849e68]"
                  onClick={() =>
                    dispatch(
                      setWheelValue({
                        ...wheelValue,
                        betamount: wheelValue?.betamount * 2,
                      })
                    )
                  }
                >
                  2×
                </button>
              </div>
              <div className="flex justify-center space-x-2 mt-1">
                <div className="w-full">
                  <div className="text-[#b1bad3] font-semibold text-m mt-1 my-1">
                    <label>Risk </label>
                  </div>
                  <div className="flex border-2 rounded-md hover:border-[#557086] border-[#2F4553] bg-[#2F4553]">
                    <select
                      type="select"
                      name="risk"
                      value={wheelValue?.risk}
                      onChange={(e) => handleOnChange(e)}
                      className={`w-full px-2 py-2 text-white rounded bg-[#0f212e] focus:outline-none focus:border-transparent`}
                    //   ${
                    //   completeBetStatus && "cursor-not-allowed"
                    // }
                    // disabled={completeBetStatus}
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <div className="text-[#b1bad3] flex justify-between font-semibold text-m mt-1 my-1">
                    <label>Segments</label>
                  </div>
                  <div className="relative flex rounded-md">
                    <select
                      type="select"
                      name="segments"
                      value={wheelValue?.segments}
                      onChange={(e) => handleOnChange(e)}
                      className="w-full px-2 py-2 text-white  rounded border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    >
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={30}>30</option>
                      <option value={40}>40</option>
                      <option value={50}>50</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1 mb-1">
                <label>Number of Bets</label>
              </div>
              <div className="relative flex rounded-md">
                <div className="absolute flex top-1/2 right-1 -translate-y-1/2 pointer-events-none z-2">
                  <AllInclusiveIcon className="mx-1" style={{ fontSize: 18, color: "#B1BAD3", width: "20px", height: "20px" }} />
                </div>
                <input
                  className="w-full pr-7 pl-2 py-2 text-white rounded border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                  type="number"
                  placeholder="0"
                  min={0}
                  name="numberofbet"
                  value={
                    finalmultiplier?.remainingBets > 0
                      ? finalmultiplier.remainingBets
                      : wheelValue?.numberofbet || ""
                  }
                  onChange={(e) => {
                    handleOnChange(e);

                    if (finalmultiplier?.remainingBets > 0) {
                      dispatch(setFinaMultiplier({ remainingBets: '' }));
                    }
                  }}
                />
              </div>

              <div className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1 mb-1">
                <label>On win</label>
              </div>
              <div className="flex items-center space-x-0.5 border-2 mt-1 mb-2 rounded border-[#4d718768] bg-[#4d718768]">
                <button
                  className={`${onProfit.win
                    ? "bg-[#0f212e] rounded"
                    : "rounded hover:bg-[#85afca68]"
                    } xl:px-2 lg:px-2 md:px-6 px-2 py-1.5 rounded-sm`}
                  onClick={() => {
                    setOnProfit({ ...onProfit, win: true });
                    dispatch(setWheelValue({ onwin: "" }))
                  }}
                >
                  Reset
                </button>
                <button
                  className={`${onProfit.win
                    ? "hover:bg-[#85afca68]"
                    : "bg-[#0f212e] rounded-sm"
                    } px-[0.20rem] py-1.5`}
                  onClick={() => {
                    setOnProfit({ ...onProfit, win: false });
                  }}
                >
                  Increase by:
                </button>
                <div
                  className={`relative flex ${onProfit.win
                    ? "opacity-50 pointer-events-none cursor-not-allowed"
                    : ""
                    }`}
                >
                  <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                    <PercentIcon fontSize="small" />
                  </div>
                  <input
                    className="w-[10.7rem] pr-7 pl-2 py-1.5 xl:w-36 lg:w-[5.8rem] md:w-[15.3rem] rounded text-white bg-[#0f212e] focus:outline-non"
                    type="number"
                    placeholder="0"
                    name="onwin"
                    value={wheelValue?.onwin}
                    onChange={(e) => handleOnChange(e)}
                    disabled={onProfit.win}
                  />
                </div>
              </div>
              <div className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1.5 mb-1">
                <label>On Lose</label>
              </div>
              <div className="flex items-center space-x-0.5 border-2 mt-1 rounded border-[#4d718768] bg-[#4d718768]">
                <div>
                  <button
                    className={`${onProfit.lose
                      ? "bg-[#0f212e] rounded"
                      : "hover:bg-[#85afca68] rounded"
                      } xl:px-2 lg:px-2 md:px-6 px-2 py-1.5 rounded`}
                    onClick={() => {
                      setOnProfit({ ...onProfit, lose: true });
                    }}
                  >
                    Reset
                  </button>
                </div>
                <div>
                  <button
                    className={`${onProfit.lose
                      ? "hover:bg-[#85afca68]"
                      : "bg-[#0f212e] rounded-sm"
                      } px-[0.20rem] py-1.5`}
                    onClick={() => {
                      setOnProfit({ ...onProfit, lose: false });
                      dispatch(setWheelValue({ onlose: "" }))
                    }}
                  >
                    Increase by:
                  </button>
                </div>
                <div
                  className={`relative flex ${onProfit.lose
                    ? "opacity-50 pointer-events-none cursor-not-allowed"
                    : ""
                    }`}
                >
                  <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                    <PercentIcon fontSize="small" />
                  </div>
                  <input
                    className="w-[10.7rem] pr-7 pl-2 py-1.5 xl:w-36 rounded lg:w-[5.8rem] md:w-[15.3rem] text-white bg-[#0f212e] focus:outline-none focus:border-transparent"
                    type="number"
                    placeholder="0"
                    name="onlose"
                    value={wheelValue?.onlose}
                    onChange={(e) => handleOnChange(e)}
                    disabled={onProfit.lose}
                  />
                </div>
              </div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-xs mt-2 mb-1">
                <label>Stop on Profit</label>
                <label>₹{wheelValue?.stoponprofit ? wheelValue?.stoponprofit : '0.00'}</label>
              </div>
              <div className="relative flex">
                {/* <div className="cursor-text text-xl text-[#B1BAD3] absolute flex top-1/2 right-3.5 -translate-y-1/2 pointer-events-none z-2">
              <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
            </div> */}
                <input
                  className="w-full pr-1.5 px-2 py-2 text-white border-2 rounded-md border-[#4d718768] bg-[#0f212e] focus:outline-none"
                  type="number"
                  placeholder="0.01"
                  step="0.01"
                  name="stoponprofit"
                  value={wheelValue?.stoponprofit}
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-xs mt-2 mb-1">
                <label>Stop on Loss</label>
                <label>₹{wheelValue?.stoponloss ? wheelValue?.stoponloss : '0.00'}</label>
              </div>
              <div className="relative flex border-1 rounded-md border-[#2F4553] bg-[#2F4553]">
                {/* <div className="cursor-text text-xl text-[#B1BAD3] absolute flex top-1/2 right-3.5 -translate-y-1/2 pointer-events-none z-2">
              <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
            </div> */}
                <input
                  className="w-full pr-1.5 px-2 py-2 text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                  type="number"
                  placeholder="0.01"
                  step="0.01"
                  name="stoponloss"
                  value={wheelValue?.stoponloss}
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
            </div>
          )}
          <div className="flex overflow-x-auto overflow-y-hidden transform translate-z-0 mt-3">
            <div className="bg-[#0f212e] flex grow rounded-full p-[5px] flex-shrink-0">
              <div className="flex space-x-2 overflow-hidden">
                <button
                  className={`py-2 xl:w-[8.7rem] lg:w-[7.08rem] md:w-[12.81rem] w-[11.12rem] rounded-full ${isManual ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                    }`}
                  onClick={() => setIsManual(true)}
                >
                  Manual
                </button>
                <button
                  className={`py-2 xl:w-[8.65rem] lg:w-[7.1rem] md:w-[12.9rem] w-[11.12rem] rounded-full ${!isManual ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                    }`}
                  onClick={() => setIsManual(false)}
                >
                  Auto
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default WheelGameSidebar;
