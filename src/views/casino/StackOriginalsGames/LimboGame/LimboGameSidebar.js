import React, { useEffect, useState } from "react";
import {
  setLimboStatusData,
  setStopAutoBet,
  setValues,
  SwiperModel,
} from "../../../../features/casino/limboSlice";
// import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { Divider } from "@mui/material";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import PercentIcon from "@mui/icons-material/Percent";
import {
  openRegisterModel,
  setWallet,
} from "../../../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { LimboSocket } from "../../../../socket";
import { decodedToken } from "../../../../resources/utility";
import toast from "react-hot-toast";
import { getWallet } from "../../../../services/LoginServices";

function LimboGameSidebar() {
  const dispatch = useDispatch();
  const decoded = decodedToken();
  const [onProfit, setOnProfit] = useState({ win: true, lose: true });
  const [responsiveMobile, setResponsiveMobile] = useState(window.innerWidth);
  const [fundsToastShown, setFundsToastShown] = useState(false);
  const { isSwiper, values, limboStatusData, stopAutoBet } = useSelector(
    (state) => state.limboGame
  );

  useEffect(() => {
    const handleResize = () => setResponsiveMobile(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      .catch((err) => {});
  };

  useEffect(() => {
    const handleInsufficientFunds = (data) => {
      if (!fundsToastShown) {
        toast.error(data?.message);
        setFundsToastShown(true);
        // dispatch(setCompleteBetStatus(false));
      }
    };
    LimboSocket.on("Insufficientfund", handleInsufficientFunds);

    const resetToastFlag = () => {
      setFundsToastShown(false);
    };

    return () => {
      resetToastFlag();
      LimboSocket.off("Insufficientfund", handleInsufficientFunds);
    };
  }, [fundsToastShown]);

  LimboSocket.on("WalletNotFound", (data) => {
    toast.error(data?.message);
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    dispatch(setValues({ ...values, [name]: value }));
  };

  const handleOnManualBet = () => {
    if (!localStorage.getItem("token")) {
      dispatch(openRegisterModel());
    } else {
      LimboSocket.emit("limboPlaceBet", {
        userId: decoded?.userId,
        betAmount: values?.betamount ? values?.betamount : 0,
        multiplier: values?.multiplier ? values?.multiplier : 2,
        betType: "Manual",
      });
      // dispatch(
      //   setValues({
      //     betamount: "",
      //   })
      // );
    }
  };

  const handleOnAutoBet = () => {
    if (!localStorage.getItem("token")) {
      dispatch(openRegisterModel());
    } else {
      LimboSocket.emit("limboPlaceBet", {
        userId: decoded?.userId,
        betAmount: values?.betamount ? values?.betamount : 0,
        multiplier: values?.multiplier ? values?.multiplier : 2,
        autoBetCount:
          limboStatusData?.autoBetRound > 0
            ? limboStatusData?.autoBetRound - 1
            : parseInt(values?.autoBetCount) || "",
        onWins: parseInt(values?.onwin, 10),
        onLoss: parseInt(values?.onlose, 10),
        stopOnProfit: parseInt(values?.stoponprofit, 10),
        stopOnLoss: parseInt(values?.stoponloss, 10),
        betType: "Auto",
      });
      dispatch(setStopAutoBet(true));
    }
  };

  const handleOnStopAutoBet = () => {
    LimboSocket.emit("stopAutoBet", { userId: decoded?.userId });
    dispatch(setStopAutoBet(false));
  };

  return (
    <div>
      {responsiveMobile > 768 ? (
        <div className="xl:w-80 xl:mx-0 lg:w-[16.8rem] lg:mx-0 md:mx-40 max-sm:mx-3 flex flex-col p-3">
          <div className="flex overflow-x-auto overflow-y-hidden transform translate-z-0">
            <div className="bg-[#0f212e] flex grow rounded-full p-[5px] flex-shrink-0">
              <div className="flex space-x-2">
                <button
                  className={`py-2 xl:w-[8.65rem] lg:w-[7.5rem] md:w-[10.7rem] w-[11rem] rounded-full ${
                    isSwiper ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                  }`}
                  onClick={() => dispatch(SwiperModel(true))}
                >
                  Manual
                </button>
                <button
                  className={`py-2 xl:w-[8.73rem] lg:w-[6.68rem] md:w-[11rem] w-[10.3rem] rounded-full ${
                    !isSwiper ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                  }`}
                  onClick={() => dispatch(SwiperModel(false))}
                >
                  Auto
                </button>
              </div>
            </div>
          </div>
          {isSwiper ? (
            <div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-sm my-2">
                <label>Bet Amount</label>
                <label>₹{values?.betamount ? values?.betamount : "0.00"}</label>
              </div>
              <div className="flex border-1 rounded-md border-[#2F4553] bg-[#2F4553] group">
                <div className="relative flex">
                  {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div> */}
                  <input
                    className="xl:w-48 lg:w-40 md:w-72 max-sm:w-[15rem] max-[320px]:w-[12rem] pr-1.5 pl-2 py-1.5 rounded-l text-white border-2 focus:border-[#557086] group-hover:border-[#557086] hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0.00"
                    min={0}
                    name="betamount"
                    value={values?.betamount}
                    onChange={(e) => handleOnChange(e)}
                  />
                </div>
                <button
                  className="w-16 text-lg font-bold hover:bg-[#5c849e68] hover:border-[#557086]"
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
                  className="w-16 text-sm font-bold hover:bg-[#5c849e68] hover:border-[#557086]"
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
              <div className="text-[#b1bad3] flex justify-between items-center font-semibold text-m mt-1 my-2">
                <label>Profit on Win</label>
                <label>
                  ₹
                  {values?.betamount * values?.multiplier
                    ? values?.betamount * values?.multiplier
                    : "0.00"}
                </label>
              </div>
              <div className="relative flex">
                {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
              <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
            </div> */}
                <input
                  className="w-full p-[0.4375rem] py-1.5 rounded text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#2F4553] focus:outline-none"
                  type="text"
                  placeholder="0"
                  value={values?.betamount * (values?.multiplier || 2.0) || 0}
                  disabled
                />
              </div>
              <button
                className={`${
                  // bettingStatus === false
                  //   ? "bg-[#489649]"
                  "bg-[#1fff20] hover:bg-[#42ed45]"
                } text-black mt-3.5 py-3 rounded-md font-semibold w-full`}
                onClick={() => handleOnManualBet()}
                // disabled={limboStatusData.actualMultiplier > 1}
              >
                Bet
              </button>
            </div>
          ) : (
            <div>
              <div>
                <div className="text-[#b1bad3] text-sm flex justify-between font-semibold my-2">
                  <label>Bet Amount</label>
                  <label>
                    ₹
                    {limboStatusData?.currentBetAmount
                      ? Number(limboStatusData.currentBetAmount).toFixed(2)
                      : values?.betamount || "0.00"}
                  </label>
                </div>
                <div className="flex border-1 rounded-md border-[#2F4553] bg-[#2F4553] group">
                  <div className="relative flex">
                    {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                  <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                </div> */}
                    <input
                      className="xl:w-48 lg:w-40 md:w-72 sm:w-0 max-[425px]:w-72 max-[375px]:w-64 max-[320px]:w-48 pr-1.5 pl-2 py-1.5 rounded-l text-white border-2 focus:border-[#557086] group-hover:border-[#557086] hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                      type="number"
                      placeholder="0.00"
                      step="0.01"
                      min={0}
                      name="betamount"
                      value={
                        limboStatusData?.currentBetAmount
                          ? Number(limboStatusData.currentBetAmount).toFixed(2)
                          : values?.betamount
                      }
                      onChange={(e) => {
                        handleOnChange(e);
                        if (limboStatusData?.currentBetAmount) {
                          dispatch(
                            setLimboStatusData({ currentBetAmount: "" })
                          );
                        }
                      }}
                    />
                  </div>
                  <button
                    className="w-16 text-lg font-bold hover:bg-[#5c849e68] hover:border-[#557086]"
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
                    className="w-16 text-sm font-bold hover:bg-[#5c849e68] hover:border-[#557086]"
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
                <div className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1 mb-1">
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
                    className="xl:w-[18.5rem] lg:w-[15rem] md:w-[22.5rem] max-sm:w-[23.1rem] max-[375px]:w-[20rem] max-[320px]:w-[16.5rem] pr-7 pl-2 py-1.5 rounded text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0"
                    min={0}
                    name="autoBetCount"
                    value={
                      limboStatusData?.autoBetRound > 0
                        ? limboStatusData?.autoBetRound - 1
                        : parseInt(values?.autoBetCount) || ""
                    }
                    onChange={(e) => {
                      handleOnChange(e);
                      if (limboStatusData?.autoBetRound > 0) {
                        dispatch(setLimboStatusData({ autoBetRound: "" }));
                      }
                    }}
                  />
                </div>
              </div>
              <label className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1 mb-1">
                On win
              </label>
              <div className="flex items-center space-x-0.5 mt-1 mb-2 rounded bg-[#4d718768]">
                <button
                  className={`${
                    onProfit.win
                      ? "bg-[#0f212e] rounded"
                      : "hover:bg-[#85afca68] rounded"
                  } px-2 py-1.5 ml-0.5 rounded`}
                  onClick={() => {
                    setOnProfit({ ...onProfit, win: true });
                    dispatch(setValues({ ...values, onwin: "" }));
                  }}
                >
                  Reset
                </button>
                <button
                  className={`${
                    onProfit.win
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
                  className={`relative flex ${
                    onProfit.win
                      ? "opacity-50 pointer-events-none cursor-not-allowed"
                      : ""
                  }`}
                >
                  <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                    <PercentIcon fontSize="small" />
                  </div>
                  <input
                    className="xl:w-[9.166rem] lg:w-[5.84rem] md:w-[12.2rem] max-sm:w-[12.8rem] max-[375px]:w-[9.6rem] max-[320px]:w-[6.2rem] pr-7 pl-2 py-1.5 rounded text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0"
                    name="onwin"
                    value={values?.onwin}
                    onChange={(e) => handleOnChange(e)}
                    disabled={onProfit.win}
                  />
                </div>
              </div>
              <label className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1.5 mb-1">
                On Lose
              </label>
              <div className="flex items-center space-x-0.5 rounded bg-[#4d718768]">
                <div>
                  <button
                    className={`${
                      onProfit.lose
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
                    className={`${
                      onProfit.lose
                        ? "hover:bg-[#85afca68]"
                        : "bg-[#0f212e] rounded-sm"
                    } px-[0.20rem] py-1.5 rounded`}
                    onClick={() => {
                      setOnProfit({ ...onProfit, lose: false });
                    }}
                  >
                    Increase by:
                  </button>
                </div>
                <div
                  className={`relative flex ${
                    onProfit.lose
                      ? "opacity-50 pointer-events-none cursor-not-allowed"
                      : ""
                  }`}
                >
                  <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                    <PercentIcon fontSize="small" />
                  </div>
                  <input
                    className="xl:w-[9.166rem] lg:w-[5.84rem] md:w-[12.2rem] max-sm:w-[12.8rem] max-[375px]:w-[9.6rem] max-[320px]:w-[6.2rem] pr-7 max-[390px]:w-[5rem] pl-2 py-1.5 rounded text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0"
                    name="onlose"
                    value={values?.onlose}
                    onChange={(e) => handleOnChange(e)}
                    disabled={onProfit.lose}
                  />
                </div>
              </div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-xs mt-2 mb-1">
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
                  className="w-full pr-1.5 px-2 py-2 rounded-md text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                  type="number"
                  placeholder="0.01"
                  step="0.01"
                  name="stoponprofit"
                  value={values?.stoponprofit}
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-xs mt-2 mb-1">
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
                  className="w-full pr-1.5 px-2 py-2 text-white rounded-md border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
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
                  className="bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3 py-3 rounded-md font-semibold w-full"
                  onClick={() => handleOnStopAutoBet()}
                >
                  Stop Autobet
                </button>
              ) : (
                <button
                  className={`${
                    // bettingStatus === false
                    //   ? "bg-[#489649]"
                    "bg-[#1fff20] hover:bg-[#42ed45]"
                  } text-black mt-3 py-3 rounded-md font-semibold w-full`}
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
              <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mb-2">
                <label>Bet Amount</label>
                <label>₹{values?.betamount ? values?.betamount : "0.00"}</label>
              </div>
              <div className="flex border-1 rounded-md border-[#2F4553] bg-[#2F4553] group">
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
                  className="w-16 text-lg font-bold hover:bg-[#5c849e68] hover:border-[#557086] focus:outline-none"
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
                  className="w-16 text-sm font-bold hover:bg-[#5c849e68] hover:border-[#557086] focus:outline-none"
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
                className={`${
                  // bettingStatus === false
                  //   ? "bg-[#489649]"
                  "bg-[#1fff20] hover:bg-[#42ed45]"
                } text-black mt-3.5 py-3 rounded font-semibold w-full focus:outline-none`}
                onClick={() => handleOnManualBet()}
                // disabled={limboStatusData.actualMultiplier > 1}
              >
                Bet
              </button>
              <div className="text-[#b1bad3] flex justify-between items-center font-semibold text-m mt-2 mb-1">
                <label>Profit on Win</label>
                <label>
                  ₹
                  {values?.betamount * values?.multiplier
                    ? values?.betamount * values?.multiplier
                    : "0.00"}
                </label>
              </div>
              <div className="relative flex">
                {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
              <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
            </div> */}
                <input
                  className="w-full h-[2.4375rem] p-[0.4375rem] rounded-md text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#2F4553] focus:outline-none"
                  type="text"
                  placeholder="0"
                  value={values?.betamount * (values?.multiplier || 2.0) || 0}
                  disabled
                />
              </div>
            </div>
          ) : (
            <div>
              <div>
                {stopAutoBet ? (
                  <button
                    className="bg-[#1fff20] hover:bg-[#42ed45] text-black py-3 rounded-md font-semibold w-full"
                    onClick={() => handleOnStopAutoBet()}
                  >
                    Stop Autobet
                  </button>
                ) : (
                  <button
                    className={`${
                      // bettingStatus === false
                      //   ? "bg-[#489649]"
                      "bg-[#1fff20] hover:bg-[#42ed45]"
                    } text-black mt-3 py-3 rounded font-semibold w-full focus:outline-none`}
                    onClick={() => handleOnAutoBet()}
                  >
                    Start Autobet
                  </button>
                )}
                <div className="text-[#b1bad3] text-sm flex justify-between font-semibold my-2">
                  <label>Bet Amount</label>
                  <label>
                    ₹
                    {limboStatusData?.currentBetAmount
                      ? Number(limboStatusData.currentBetAmount).toFixed(2)
                      : values?.betamount || "0.00"}
                  </label>
                </div>
                <div className="flex border-1 rounded-md border-[#2F4553] bg-[#2F4553] group">
                  <div className="relative flex">
                    {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                    <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                    </div> */}
                    <input
                      className="xl:w-48 lg:w-40 md:w-64 sm:w-0 max-[425px]:w-72 max-[375px]:w-64 max-[320px]:w-48 pr-1.5 pl-2 py-1.5 rounded-l text-white border-2 focus:border-[#557086] group-hover:border-[#557086] hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                      type="number"
                      placeholder="0.00"
                      step="0.01"
                      min={0}
                      name="betamount"
                      value={
                        limboStatusData?.currentBetAmount
                          ? Number(limboStatusData.currentBetAmount).toFixed(2)
                          : values?.betamount
                      }
                      onChange={(e) => {
                        handleOnChange(e);
                        if (limboStatusData?.currentBetAmount) {
                          dispatch(
                            setLimboStatusData({ currentBetAmount: "" })
                          );
                        }
                      }}
                    />
                  </div>
                  <button
                    className="w-16 text-lg font-bold hover:bg-[#5c849e68] hover:border-[#557086] focus:outline-none"
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
                    className="w-16 text-sm font-bold hover:bg-[#5c849e68] hover:border-[#557086] focus:outline-none"
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
                <div className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1 mb-1">
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
                    className="xl:w-[18.5rem] lg:w-[15rem] md:w-[22.5rem] max-sm:w-[23.1rem] max-[375px]:w-[20rem] max-[320px]:w-[16.5rem] pr-7 pl-2 py-1.5 rounded text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0"
                    min={0}
                    name="autoBetCount"
                    value={
                      limboStatusData?.autoBetRound > 0
                        ? limboStatusData?.autoBetRound - 1
                        : parseInt(values?.autoBetCount) || ""
                    }
                    onChange={(e) => {
                      handleOnChange(e);
                      if (limboStatusData?.autoBetRound > 0) {
                        dispatch(setLimboStatusData({ autoBetRound: "" }));
                      }
                    }}
                  />
                </div>
              </div>
              <label className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1 mb-1">
                On win
              </label>
              <div className="flex items-center space-x-0.5 mt-1 mb-2 rounded-md bg-[#2F4553]">
                <button
                  className={`${
                    onProfit.win
                      ? "bg-[#0f212e] rounded"
                      : "hover:bg-[#85afca68]"
                  } px-2 ml-0.5 py-1.5 rounded-sm`}
                  onClick={() => {
                    setOnProfit({ ...onProfit, win: true });
                    dispatch(setValues({ ...values, onwin: "" }));
                  }}
                >
                  Reset
                </button>
                <button
                  className={`${
                    onProfit.win
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
                  className={`relative flex ${
                    onProfit.win
                      ? "opacity-50 pointer-events-none cursor-not-allowed"
                      : ""
                  }`}
                >
                  <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                    <PercentIcon fontSize="small" />
                  </div>
                  <input
                    className="xl:w-[9rem] lg:w-[4.7rem] md:w-[11.5rem] max-sm:w-[12.8rem] max-[375px]:w-[9.6rem] max-[320px]:w-[6.2rem] pr-7 pl-2 py-1.5 rounded text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0"
                    name="onwin"
                    value={values?.onwin}
                    onChange={(e) => handleOnChange(e)}
                    disabled={onProfit.win}
                  />
                </div>
              </div>
              <label className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1.5 mb-1">
                On Lose
              </label>
              <div className="flex items-center space-x-0.5 mt-1 rounded bg-[#2F4553]">
                <div>
                  <button
                    className={`${
                      onProfit.lose
                        ? "bg-[#0f212e] rounded-sm"
                        : "hover:bg-[#85afca68] rounded"
                    } px-2 py-1.5 ml-0.5 rounded-sm`}
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
                    className={`${
                      onProfit.lose
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
                  className={`relative flex ${
                    onProfit.lose
                      ? "opacity-50 pointer-events-none cursor-not-allowed"
                      : ""
                  }`}
                >
                  <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                    <PercentIcon fontSize="small" />
                  </div>
                  <input
                    className="xl:w-[9rem] lg:w-[4.7rem] md:w-[11.5rem] max-sm:w-[12.8rem] max-[375px]:w-[9.6rem] max-[320px]:w-[6.2rem] pr-7 pl-2 py-1.5 rounded text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0"
                    name="onlose"
                    value={values?.onlose}
                    onChange={(e) => handleOnChange(e)}
                    disabled={onProfit.lose}
                  />
                </div>
              </div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-xs mt-2 mb-1">
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
                  className="w-full h-l pr-1.5 px-2 py-1.5 rounded-md text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                  type="number"
                  placeholder="0.01"
                  step="0.01"
                  name="stoponprofit"
                  value={values?.stoponprofit}
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-xs mt-2 mb-1">
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
                  className="w-full pr-1.5 px-2 py-1.5 text-white rounded-md border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
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
                  className={`py-2 rounded-full transition-all ${
                    isSwiper ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                  }
                  xl:w-[8.7rem] lg:w-[4rem] md:w-[10.7rem] w-full`}
                  onClick={() => dispatch(SwiperModel(true))}
                >
                  Manual
                </button>
                <button
                  className={`py-2 rounded-full transition-all ${
                    !isSwiper ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                  }
                  xl:w-[8.5rem] lg:w-[6.68rem] md:w-[10.7rem] w-full`}
                  onClick={() => dispatch(SwiperModel(false))}
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

export default LimboGameSidebar;
