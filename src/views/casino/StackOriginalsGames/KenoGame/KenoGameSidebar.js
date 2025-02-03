import React, { useEffect, useState } from "react";
// import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { Divider } from "@mui/material";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import PercentIcon from "@mui/icons-material/Percent";
import {
  openRegisterModel,
  setWallet,
} from "../../../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { decodedToken } from "../../../../resources/utility";
import toast from "react-hot-toast";
import { getWallet } from "../../../../services/LoginServices";
import kenoTileSelect from "../../../../assets/Sound/kenoGameSound.wav"
// import { KenoSocket } from "../../../../socket";
import {
  setIsSwiper,
  setKenoStatusData,
  setMunulGameResult,
  setSelectTile,
  setStopAutoBet,
  setValues,
} from "../../../../features/casino/kenoSlice";
import { useParams } from "react-router-dom";

function KenoGameSidebar({ kenoGameSocket }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const decoded = decodedToken();
  const [onProfit, setOnProfit] = useState({ win: true, lose: true });
  const [responsiveMobile, setResponsiveMobile] = useState(window.innerWidth);
  const [fundsToastShown, setFundsToastShown] = useState(false);
  const {
    isSwiper,
    values = { betamount: "", risk: "Medium" },
    kenoStatusData,
    stopAutoBet,
    selectTile,
    munulGameResult
  } = useSelector((state) => state.kenoGame);

  // useEffect(() => {
  //   const handleResize = () => setResponsiveMobile(window.innerWidth);
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  useEffect(() => {
    GetWalletData();
  }, []);

  const GetWalletData = async () => {
    await getWallet({ id: decoded?.userId })
      .then((res) => {
        const wallet =
          parseFloat(res?.currentAmount) + parseFloat(res?.bonusAmount);
        dispatch(setWallet(wallet.toFixed(2)));
      })
      .catch((err) => { });
  };

  useEffect(() => {
    const handleInsufficientFunds = (data) => {
      if (!fundsToastShown) {
        toast.error(data?.message);
        setFundsToastShown(true);
        // dispatch(setCompleteBetStatus(false));
      }
    };
    kenoGameSocket.on("Insufficientfund", handleInsufficientFunds);

    const resetToastFlag = () => {
      setFundsToastShown(false);
    };

    return () => {
      resetToastFlag();
      kenoGameSocket.off("Insufficientfund", handleInsufficientFunds);
    };
  }, [fundsToastShown]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    dispatch(setValues({ ...values, [name]: value }));
  };

  const handleOnManualBet = () => {
    if (!localStorage.getItem("token")) {
      dispatch(openRegisterModel());
    } else {
      kenoGameSocket.emit("kenoPlaceBet", {
        gameId: id,
        userId: decoded?.userId,
        betAmount: values?.betamount ? values?.betamount : 0,
        risk: values?.risk,
        selectedNumbers: selectTile,
        betType: "Manual",
      });
    }
  };

  const handleOnAutoBet = () => {
    if (!localStorage.getItem("token")) {
      dispatch(openRegisterModel());
    } else {
      // kenoGameSocket.emit("limboPlaceBet", {
      //   userId: decoded?.userId,
      //   betAmount: values?.betamount ? values?.betamount : 0,
      //   multiplier: values?.multiplier ? values?.multiplier : 2,
      //   autoBetCount:
      //     kenoStatusData?.autoBetRound > 0
      //       ? kenoStatusData?.autoBetRound - 1
      //       : parseInt(values?.autoBetCount) || "",
      //   onWins: parseInt(values?.onwin, 10),
      //   onLoss: parseInt(values?.onlose, 10),
      //   stopOnProfit: parseInt(values?.stoponprofit, 10),
      //   stopOnLoss: parseInt(values?.stoponloss, 10),
      //   betType: "Auto",
      // });
      dispatch(setStopAutoBet(true));
    }
  };

  const handleOnStopAutoBet = () => {
    kenoGameSocket.emit("stopAutoBet", { userId: decoded?.userId });
    dispatch(setStopAutoBet(false));
  };

  const handleAutoPick = async () => {
    const totalBoxes = 40;
    const selectedBoxes = new Set();

    while (selectedBoxes.size < 10) {
      const randomIndex = Math.floor(Math.random() * totalBoxes);
      if (!selectedBoxes.has(randomIndex)) {
        selectedBoxes.add(randomIndex);
        const audio = new Audio(kenoTileSelect);
        audio.play();
        dispatch(setSelectTile(Array.from(selectedBoxes)));
        await new Promise((resolve) => setTimeout(resolve, 200));
      }
    }
  };

  return (
    <div>
      {responsiveMobile > 768 ? (
        <div className="xl:w-80 lg:w-[18.75rem] max-sm:mx-3 flex flex-col p-3 rounded-tr-lg">
          <div className="flex overflow-x-auto overflow-y-hidden transform translate-z-0">
            <div className="bg-[#0f212e] flex grow rounded-full p-[5px] flex-shrink-0">
              <div className="flex space-x-2">
                <button
                  className={`py-2 xl:w-[8.65rem] lg:w-[8.07rem] md:w-[10.7rem] w-[11rem] rounded-full ${isSwiper ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                    }`}
                  onClick={() => dispatch(setIsSwiper(true))}
                >
                  Manual
                </button>
                <button
                  className={`py-2 xl:w-[8.73rem] lg:w-[8.07rem] md:w-[11rem] w-[10.3rem] rounded-full ${!isSwiper ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                    }`}
                  onClick={() => dispatch(setIsSwiper(false))}
                >
                  Auto
                </button>
              </div>
            </div>
          </div>
          {isSwiper ? (
            <div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mt-2 mb-1 select-none">
                <label>Bet Amount</label>
                <label>₹{values?.betamount ? values?.betamount : "0.00"}</label>
              </div>
              <div className="flex border-1 rounded border-[#2F4553] bg-[#2F4553] group">
                <div className="relative flex">
                  {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div> */}
                  <input
                    className="xl:w-48 h-[2.4375rem] lg:w-40 md:w-72 max-sm:w-[15rem] max-[320px]:w-[12rem] pr-1.5 pl-2 py-2 rounded-l text-white border-2 focus:border-[#557086] group-hover:border-[#557086] hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0.00"
                    min={0}
                    name="betamount"
                    value={values?.betamount}
                    onChange={(e) => handleOnChange(e)}
                  />
                </div>
                <button
                  className="w-16 text-lg font-bold hover:bg-[#5c849e68]"
                  onClick={() =>
                    dispatch(
                      setValues({
                        ...values,
                        betamount: values?.betamount / 2,
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
                  className="w-16 text-sm font-bold hover:bg-[#5c849e68]"
                  onClick={() =>
                    dispatch(
                      setValues({
                        ...values,
                        betamount: values?.betamount * 2,
                      })
                    )
                  }
                >
                  2×
                </button>
              </div>
              <div className="text-[#b1bad3] text-sm font-semibold text-m mt-2 mb-1 select-none">
                <label>Risk</label>
              </div>
              <div className="flex rounded bg-[#0f212e] focus:outline-none focus:border-transparent">
                <select
                  type="select"
                  name="risk"
                  value={values?.risk}
                  onChange={(e) => handleOnChange(e)}
                  className="w-full px-2 py-2 text-white border-2 font-semibold rounded border-[#4d718768] bg-[#0f212e] 
                        hover:border-[#557086] focus:border-[#557086] focus:outline-none"
                >
                  <option>Classic</option>
                  <option>Low</option>
                  <option value="Medium">Medium</option>
                  <option>High</option>
                </select>
              </div>
              <button
                className="bg-[#2f4553] hover:bg-[#5c849e68] w-full rounded-sm py-2.5 my-3 font-bold text-sm"
                onClick={handleAutoPick}
              >
                Auto Pick
              </button>
              <button
                className="bg-[#2f4553] hover:bg-[#5c849e68] w-full rounded-sm py-2.5 font-bold text-sm"
                onClick={() => {
                  dispatch(setMunulGameResult())
                  dispatch(setSelectTile([]))
                }}
              >
                Clear Table
              </button>
              <button
                className={`${selectTile?.length > 0
                  ? "bg-[#1fff20] hover:bg-[#42ed45]"
                  : "bg-[#46a147]"
                  } text-black mt-3.5 py-3 rounded font-semibold w-full`}
                onClick={() => handleOnManualBet()}
              // disabled={selectTile.length > 0}
              >
                Bet
              </button>
            </div>
          ) : (
            <div>
              <div>
                <div className="text-[#b1bad3] text-sm flex justify-between font-semibold my-2 select-none">
                  <label>Bet Amount</label>
                  <label>
                    ₹
                    {kenoStatusData?.currentBetAmount
                      ? Number(kenoStatusData.currentBetAmount).toFixed(2)
                      : values?.betamount || "0.00"}
                  </label>
                </div>
                <div className="flex border-1 rounded border-[#2F4553] bg-[#2F4553] group">
                  <div className="relative flex">
                    {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                  <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                </div> */}
                    <input
                      className="xl:w-48 lg:w-40 md:w-72 sm:w-0 max-[425px]:w-72 max-[375px]:w-64 max-[320px]:w-48 pr-1.5 pl-2 py-2 rounded-l text-white border-2 focus:border-[#557086] group-hover:border-[#557086] hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                      type="number"
                      placeholder="0.00"
                      step="0.01"
                      min={0}
                      name="betamount"
                      value={
                        kenoStatusData?.currentBetAmount
                          ? Number(kenoStatusData.currentBetAmount).toFixed(2)
                          : values?.betamount
                      }
                      onChange={(e) => {
                        handleOnChange(e);
                        if (kenoStatusData?.currentBetAmount) {
                          dispatch(setKenoStatusData({ currentBetAmount: "" }));
                        }
                      }}
                    />
                  </div>
                  <button
                    className="w-16 text-lg font-bold hover:bg-[#5c849e68]"
                    onClick={() =>
                      dispatch(
                        setValues({
                          ...values,
                          betamount: values?.betamount / 2,
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
                    className="w-16 text-sm font-bold hover:bg-[#5c849e68]"
                    onClick={() =>
                      dispatch(
                        setValues({
                          ...values,
                          betamount: values?.betamount * 2,
                        })
                      )
                    }
                  >
                    2×
                  </button>
                </div>
                <div className="text-[#b1bad3] text-sm font-semibold text-m mt-2 mb-1 select-none">
                  <label>Risk</label>
                </div>
                <div className="flex rounded bg-[#0f212e] focus:outline-none focus:border-transparent">
                  <select
                    type="select"
                    name="risk"
                    value={values?.risk}
                    onChange={(e) => handleOnChange(e)}
                    className="w-full px-2 py-2 text-white border-2 font-semibold rounded border-[#4d718768] bg-[#0f212e] 
                        hover:border-[#557086] focus:border-[#557086] focus:outline-none"
                  >
                    <option>Classic</option>
                    <option>Low</option>
                    <option value="Medium">Medium</option>
                    <option>High</option>
                  </select>
                </div>
                <div className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1 mb-1 select-none">
                  <label>Number of Bets</label>
                </div>
                <div className="relative flex">
                  <div className="absolute flex top-1/2 right-1 -translate-y-1/2 pointer-events-none z-2">
                    <AllInclusiveIcon
                      className="mx-1"
                      style={{
                        fontSize: 18,
                        color: "#B1BAD3",
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  </div>
                  <input
                    className="xl:w-[18.5rem] lg:w-[15rem] md:w-[22.5rem] max-sm:w-[23.1rem] max-[375px]:w-[20rem] max-[320px]:w-[16.5rem] pr-7 pl-2 py-2 rounded text-white border-2 border-[#2F4553] bg-[#0f212e] focus:outline-none focus:border-[#557086] hover:border-[#557086] !focus:border-[#557086]"
                    type="number"
                    placeholder="0"
                    min={0}
                    name="autoBetCount"
                    value={
                      kenoStatusData?.autoBetRound > 0
                        ? kenoStatusData?.autoBetRound - 1
                        : parseInt(values?.autoBetCount) || ""
                    }
                    onChange={(e) => {
                      handleOnChange(e);
                      if (kenoStatusData?.autoBetRound > 0) {
                        dispatch(setKenoStatusData({ autoBetRound: "" }));
                      }
                    }}
                  />
                </div>
              </div>
              <label className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1 mb-1 select-none">
                On win
              </label>
              <div className="flex items-center space-x-0.5 mt-1 mb-2 rounded bg-[#2F4553]">
                <button
                  className={`${onProfit.win
                    ? "bg-[#0f212e] rounded"
                    : "hover:bg-[#85afca68] rounded"
                    }xl:px-2 lg:px-2 md:px-2 px-2 py-1.5 ml-0.5 rounded`}
                  onClick={() => {
                    setOnProfit({ ...onProfit, win: true });
                    dispatch(setValues({ ...values, onwin: "" }));
                  }}
                >
                  Reset
                </button>
                <button
                  className={`${onProfit.win
                    ? "hover:bg-[#85afca68]"
                    : "bg-[#0f212e] rounded"
                    } px-[0.20rem] py-1.5 rounded`}
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
                    className="xl:w-[9.115rem] lg:w-[5.84rem] md:w-[12.2rem] max-sm:w-[12.8rem] max-[375px]:w-[9.6rem] max-[320px]:w-[6.2rem] pr-7 pl-2 py-1.5 rounded text-white border-2 focus:border-[#557086] hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0"
                    name="onwin"
                    value={values?.onwin}
                    onChange={(e) => handleOnChange(e)}
                    disabled={onProfit.win}
                  />
                </div>
              </div>
              <label className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1.5 mb-1 select-none">
                On Lose
              </label>
              <div className="flex items-center space-x-0.5 mt-1 rounded bg-[#2F4553]">
                <div>
                  <button
                    className={`${onProfit.lose
                      ? "bg-[#0f212e] rounded"
                      : "hover:bg-[#85afca68] rounded"
                      } px-2 py-1.5 ml-0.5 rounded`}
                    onClick={() => {
                      setOnProfit({ ...onProfit, lose: true });
                      dispatch(setValues({ ...values, onlose: "" }));
                    }}
                  >
                    Reset
                  </button>
                </div>
                <div>
                  <button
                    className={`${onProfit.lose
                      ? "hover:bg-[#85afca68]"
                      : "bg-[#0f212e] rounded"
                      } px-[0.20rem] py-1.5 rounded`}
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
                    className="xl:w-[9.115rem] lg:w-[5.84rem] md:w-[12.2rem] max-sm:w-[12.8rem] max-[375px]:w-[9.6rem] max-[320px]:w-[6.2rem] pr-7 max-[390px]:w-[5rem] pl-2 py-1.5 rounded text-white border-2 focus:border-[#557086] hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0"
                    name="onlose"
                    value={values?.onlose}
                    onChange={(e) => handleOnChange(e)}
                    disabled={onProfit.lose}
                  />
                </div>
              </div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mt-2 mb-1 select-none">
                <label>Stop on Profit</label>
                <label>
                  ₹{values?.stoponprofit ? values?.stoponprofit : "0.00"}
                </label>
              </div>
              <div className="relative flex">
                {/* <div className="cursor-text text-xl absolute flex top-1/2 right-3.5 -translate-y-1/2 pointer-events-none z-2">
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div> */}
                <input
                  className="w-full pr-1.5 px-2 py-2 rounded text-white border-2 border-[#2F4553] bg-[#0f212e] focus:outline-none focus:border-[#557086] hover:border-[#557086] !focus:border-[#557086]"
                  type="number"
                  placeholder="0.01"
                  step="0.01"
                  name="stoponprofit"
                  value={values?.stoponprofit}
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mt-2 mb-1 select-none">
                <label>Stop on Loss</label>
                <label>
                  ₹{values?.stoponloss ? values?.stoponloss : "0.00"}
                </label>
              </div>
              <div className="relative flex">
                {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div> */}
                <input
                  className="w-full pr-1.5 px-2 py-2 rounded text-white border-2 border-[#2F4553] bg-[#0f212e] focus:outline-none focus:border-[#557086] hover:border-[#557086] !focus:border-[#557086]"
                  type="number"
                  placeholder="0.01"
                  step="0.01"
                  name="stoponloss"
                  value={values?.stoponloss}
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
              {stopAutoBet ? (
                <button
                  className="bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3 py-3 rounded font-semibold w-full"
                  onClick={() => handleOnStopAutoBet()}
                >
                  Stop Autobet
                </button>
              ) : (
                <button
                  className={`${selectTile.length > 0
                    ? "bg-[#1fff20] hover:bg-[#42ed45]"
                    : "bg-[#46a147]"
                    } text-black mt-3 py-3 rounded font-semibold w-full`}
                  onClick={() =>
                    values?.autoBetCount === undefined ||
                      values?.autoBetCount === ""
                      ? toast.error("Please enter a number of bets")
                      : handleOnAutoBet()
                  }
                >
                  Start Autobet
                </button>
              )}
            </div>
          )}
        </div>
      ) : null}

      {responsiveMobile <= 768 ? (
        <div className="xl:w-80 lg:w-[16.8rem] max-sm:mx-3 flex flex-col p-3 bg-[#213743]">
          {isSwiper ? (
            <div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mb-2 select-none">
                <label>Bet Amount</label>
                <label>₹{values?.betamount ? values?.betamount : "0.00"}</label>
              </div>
              <div className="flex border-1 rounded border-[#2F4553] bg-[#2F4553] group">
                <div className="relative flex">
                  {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div> */}
                  <input
                    className="xl:w-48 lg:w-40 md:w-64 max-sm:w-[15rem] max-[320px]:w-[12rem] pr-1.5 pl-2 py-2 rounded-l text-white border-2 focus:border-[#557086] group-hover:border-[#557086] hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0.00"
                    min={0}
                    name="betamount"
                    value={values?.betamount}
                    onChange={(e) => handleOnChange(e)}
                  />
                </div>
                <button
                  className="w-16 text-lg font-bold hover:bg-[#5c849e68]"
                  onClick={() =>
                    dispatch(
                      setValues({
                        ...values,
                        betamount: values?.betamount / 2,
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
                  className="w-16 text-sm font-bold hover:bg-[#5c849e68]"
                  onClick={() =>
                    dispatch(
                      setValues({
                        ...values,
                        betamount: values?.betamount * 2,
                      })
                    )
                  }
                >
                  2×
                </button>
              </div>
              <button
                className={`${selectTile.length > 0
                  ? "bg-[#1fff20] hover:bg-[#42ed45]"
                  : "bg-[#46a147]"
                  } text-black mt-3.5 py-3 rounded font-semibold w-full`}
                onClick={() => handleOnManualBet()}
                disabled={selectTile.length > 0}
              >
                Bet
              </button>
              <div className="text-[#b1bad3] text-sm font-semibold text-m mt-2 mb-1 select-none">
                <label>Risk</label>
              </div>
              <div className="flex rounded bg-[#0f212e] focus:outline-none focus:border-transparent">
                <select
                  type="select"
                  name="risk"
                  value={values?.risk}
                  onChange={(e) => handleOnChange(e)}
                  className="w-full px-2 py-2 text-white border-2 font-semibold rounded border-[#4d718768] bg-[#0f212e] 
                        hover:border-[#557086] focus:border-[#557086] focus:outline-none"
                >
                  <option>Classic</option>
                  <option>Low</option>
                  <option value="Medium">Medium</option>
                  <option>High</option>
                </select>
              </div>
              {/* <button className="bg-[#2f4553] hover:bg-[#5c849e68] w-full rounded-sm py-2.5 my-3 font-bold text-sm" onClick={handleAutoPick}>Auto Pick</button> */}
              {/* <button className="bg-[#2f4553] hover:bg-[#5c849e68] w-full rounded-sm py-2.5 font-bold text-sm" onClick={() => dispatch(setSelectTile([]))}>Clear Table</button> */}
            </div>
          ) : (
            <div>
              <div>
                {stopAutoBet ? (
                  <button
                    className="bg-[#1fff20] hover:bg-[#42ed45] text-black py-3 rounded font-semibold w-full"
                    onClick={() => handleOnStopAutoBet()}
                  >
                    Stop Autobet
                  </button>
                ) : (
                  <button
                    className={`${selectTile.length > 0
                      ? "bg-[#1fff20] hover:bg-[#42ed45]"
                      : "bg-[#46a147]"
                      } text-black mt-3 py-3 rounded font-semibold w-full`}
                    onClick={() => handleOnAutoBet()}
                  >
                    Start Autobet
                  </button>
                )}
                <div className="text-[#b1bad3] text-sm flex justify-between font-semibold my-2 select-none">
                  <label>Bet Amount</label>
                  <label>
                    ₹
                    {kenoStatusData?.currentBetAmount
                      ? Number(kenoStatusData.currentBetAmount).toFixed(2)
                      : values?.betamount || "0.00"}
                  </label>
                </div>
                <div className="flex border-1 rounded border-[#2F4553] bg-[#2F4553] group">
                  <div className="relative flex">
                    {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                    <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                    </div> */}
                    <input
                      className="xl:w-48 lg:w-40 md:w-72 sm:w-0 max-[425px]:w-72 max-[375px]:w-64 max-[320px]:w-48 pr-1.5 pl-2 py-2 rounded-l text-white border-2 focus:border-[#557086] group-hover:border-[#557086] hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                      type="number"
                      placeholder="0.00"
                      step="0.01"
                      min={0}
                      name="betamount"
                      value={
                        kenoStatusData?.currentBetAmount
                          ? Number(kenoStatusData.currentBetAmount).toFixed(2)
                          : values?.betamount
                      }
                      onChange={(e) => {
                        handleOnChange(e);
                        if (kenoStatusData?.currentBetAmount) {
                          dispatch(setKenoStatusData({ currentBetAmount: "" }));
                        }
                      }}
                    />
                  </div>
                  <button
                    className="w-16 text-lg font-bold hover:bg-[#5c849e68]"
                    onClick={() =>
                      dispatch(
                        setValues({
                          ...values,
                          betamount: values?.betamount / 2,
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
                    className="w-16 text-sm font-bold hover:bg-[#5c849e68]"
                    onClick={() =>
                      dispatch(
                        setValues({
                          ...values,
                          betamount: values?.betamount * 2,
                        })
                      )
                    }
                  >
                    2×
                  </button>
                </div>
                <div className="text-[#b1bad3] text-sm font-semibold text-m mt-2 mb-1 select-none">
                  <label>Risk</label>
                </div>
                <div className="flex rounded bg-[#0f212e] focus:outline-none focus:border-transparent">
                  <select
                    type="select"
                    name="risk"
                    value={values?.risk}
                    onChange={(e) => handleOnChange(e)}
                    className="w-full px-2 py-2 text-white border-2 font-semibold rounded border-[#4d718768] bg-[#0f212e] 
                        hover:border-[#557086] focus:border-[#557086] focus:outline-none"
                  >
                    <option>Classic</option>
                    <option>Low</option>
                    <option value="Medium">Medium</option>
                    <option>High</option>
                  </select>
                </div>
                <div className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1 mb-1 select-none">
                  <label>Number of Bets</label>
                </div>
                <div className="relative flex">
                  <div className="absolute flex top-1/2 right-1 -translate-y-1/2 pointer-events-none z-2">
                    <AllInclusiveIcon
                      className="mx-1"
                      style={{
                        fontSize: 18,
                        color: "#B1BAD3",
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  </div>
                  <input
                    className="xl:w-[18.5rem] lg:w-[15rem] md:w-[22.5rem] max-sm:w-[23.1rem] max-[375px]:w-[20rem] max-[320px]:w-[16.5rem] pr-7 pl-2 py-2 rounded text-white border-2 border-[#2F4553] bg-[#0f212e] focus:outline-none focus:border-[#557086] hover:border-[#557086] !focus:border-[#557086]"
                    type="number"
                    placeholder="0"
                    min={0}
                    name="autoBetCount"
                    value={
                      kenoStatusData?.autoBetRound > 0
                        ? kenoStatusData?.autoBetRound - 1
                        : parseInt(values?.autoBetCount) || ""
                    }
                    onChange={(e) => {
                      handleOnChange(e);
                      if (kenoStatusData?.autoBetRound > 0) {
                        dispatch(setKenoStatusData({ autoBetRound: "" }));
                      }
                    }}
                  />
                </div>
              </div>
              <label className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1 mb-1 select-none">
                On win
              </label>
              <div className="flex items-center space-x-0.5 mt-1 mb-2 rounded bg-[#2F4553]">
                <button
                  className={`${onProfit.win
                    ? "bg-[#0f212e] rounded"
                    : "hover:bg-[#85afca68] rounded"
                    }xl:px-2 lg:px-2 md:px-2 px-2 py-1.5 ml-0.5 rounded`}
                  onClick={() => {
                    setOnProfit({ ...onProfit, win: true });
                    dispatch(setValues({ ...values, onwin: "" }));
                  }}
                >
                  Reset
                </button>
                <button
                  className={`${onProfit.win
                    ? "hover:bg-[#85afca68]"
                    : "bg-[#0f212e] rounded"
                    } px-[0.20rem] py-1.5 rounded`}
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
                    className="xl:w-[9rem] lg:w-[4.7rem] md:w-[13.115rem] max-sm:w-[12.8rem] max-[375px]:w-[9.6rem] max-[320px]:w-[6.2rem] pr-7 pl-2 py-1.5 rounded text-white border-2 focus:border-[#557086] hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0"
                    name="onwin"
                    value={values?.onwin}
                    onChange={(e) => handleOnChange(e)}
                    disabled={onProfit.win}
                  />
                </div>
              </div>
              <label className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1.5 mb-1 select-none">
                On Lose
              </label>
              <div className="flex items-center space-x-0.5  mt-1 rounded  bg-[#2F4553]">
                <div>
                  <button
                    className={`${onProfit.lose
                      ? "bg-[#0f212e] rounded"
                      : "hover:bg-[#85afca68] rounded"
                      } px-2 py-1.5 ml-0.5 rounded`}
                    onClick={() => {
                      setOnProfit({ ...onProfit, lose: true });
                      dispatch(setValues({ ...values, onlose: "" }));
                    }}
                  >
                    Reset
                  </button>
                </div>
                <div>
                  <button
                    className={`${onProfit.lose
                      ? "hover:bg-[#85afca68]"
                      : "bg-[#0f212e] rounded"
                      } px-[0.20rem] py-1.5 rounded`}
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
                    className="xl:w-[9rem] lg:w-[4.7rem] md:w-[13.115rem] max-sm:w-[12.8rem] max-[375px]:w-[9.6rem] max-[320px]:w-[6.2rem] pr-7 pl-2 py-1.5 rounded text-white border-2 focus:border-[#557086] hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0"
                    name="onlose"
                    value={values?.onlose}
                    onChange={(e) => handleOnChange(e)}
                    disabled={onProfit.lose}
                  />
                </div>
              </div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mt-2 mb-1 select-none">
                <label>Stop on Profit</label>
                <label>
                  ₹{values?.stoponprofit ? values?.stoponprofit : "0.00"}
                </label>
              </div>
              <div className="relative flex">
                {/* <div className="cursor-text text-xl absolute flex top-1/2 right-3.5 -translate-y-1/2 pointer-events-none z-2">
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div> */}
                <input
                  className="w-full pr-1.5 px-2 py-2 rounded text-white border-2 border-[#2F4553] bg-[#0f212e] focus:outline-none focus:border-[#557086] hover:border-[#557086] !focus:border-[#557086]"
                  type="number"
                  placeholder="0.01"
                  step="0.01"
                  name="stoponprofit"
                  value={values?.stoponprofit}
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mt-2 mb-1 select-none">
                <label>Stop on Loss</label>
                <label>
                  ₹{values?.stoponloss ? values?.stoponloss : "0.00"}
                </label>
              </div>
              <div className="relative flex">
                {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div> */}
                <input
                  className="w-full pr-1.5 px-2 py-2 rounded text-white border-2 border-[#2F4553] bg-[#0f212e] focus:outline-none focus:border-[#557086] hover:border-[#557086] !focus:border-[#557086]"
                  type="number"
                  placeholder="0.01"
                  step="0.01"
                  name="stoponloss"
                  value={values?.stoponloss}
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
            </div>
          )}
          <div className="flex overflow-x-auto overflow-y-hidden transform translate-z-0 mt-3">
            <div className="bg-[#0f212e] flex grow rounded-full p-[5px] flex-shrink-0">
              <div className="flex space-x-2 w-full">
                <button
                  className={`py-2 rounded-full transition-all ${isSwiper ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                    }
                            xl:w-[8.7rem] lg:w-[5rem] md:w-[10.7rem] w-full`}
                  onClick={() => dispatch(setIsSwiper(true))}
                >
                  Manual
                </button>
                <button
                  className={`py-2 rounded-full transition-all ${!isSwiper ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                    }
                            xl:w-[8.5rem] lg:w-[6.68rem] md:w-[10.7rem] w-full`}
                  onClick={() => dispatch(setIsSwiper(false))}
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

export default KenoGameSidebar;
