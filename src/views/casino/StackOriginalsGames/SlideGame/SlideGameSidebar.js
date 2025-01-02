import React, { useEffect, useState } from "react";
// import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { Divider } from "@mui/material";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import PercentIcon from "@mui/icons-material/Percent";
import { BsIncognito } from "react-icons/bs";
import { IoInfiniteSharp } from "react-icons/io5";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import {
  openRegisterModel,
  setWallet,
} from "../../../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { decodedToken } from "../../../../resources/utility";
import toast from "react-hot-toast";
import { getWallet } from "../../../../services/LoginServices";
import { SlideSocket } from "../../../../socket";
import { BoardControlModel, setCombinedData, setIsSwiper, setSlideStatusData, setStopAutoBet, setValues } from "../../../../features/casino/slideSlice";
import { getRandomData } from "../../../../services/CasinoServices";

function KenoGameSidebar() {
  const dispatch = useDispatch();
  const decoded = decodedToken();
  const [onProfit, setOnProfit] = useState({ win: true, lose: true });
  const [responsiveMobile, setResponsiveMobile] = useState(window.innerWidth);
  const [fundsToastShown, setFundsToastShown] = useState(false);
  const [randomData, setRandomData] = useState([]);
  const { isSwiper, values = { betamount: "" }, stopAutoBet, slideStatusData, combinedData, multiplier, isboardControl } = useSelector((state) => state.slideGame)

  useEffect(() => {
    const handleResize = () => setResponsiveMobile(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const data = async () => {
      try {
        const res = await getRandomData();
        setRandomData(res?.users);
      } catch (err) {
        console.log("error", err);
      }
    };
    data();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getRandomData();
      setRandomData([]);

      setTimeout(() => {
        setRandomData(res?.users);
      }, 200);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    if (
      slideStatusData?.players?.length > 0 ||
      slideStatusData?.autoBets?.length > 0
    ) {
      const playersdata = slideStatusData?.players || [];
      const AutoData = slideStatusData?.autoBets || [];
      const mergedData = [...playersdata, ...AutoData, ...randomData];
      dispatch(setCombinedData(mergedData));
    } else if (randomData) {
      const mergedData = [...randomData];
      dispatch(setCombinedData(mergedData));
    }
  }, [slideStatusData, randomData]);

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
    SlideSocket.on("Insufficientfund", handleInsufficientFunds);

    const resetToastFlag = () => {
      setFundsToastShown(false);
    };

    return () => {
      resetToastFlag();
      SlideSocket.off("Insufficientfund", handleInsufficientFunds);
    };
  }, [fundsToastShown]);

  SlideSocket.on("WalletNotFound", (data) => {
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
      SlideSocket.emit("limboPlaceBet", {
        userId: decoded?.userId,
        betAmount: values?.betamount ? values?.betamount : 0,
        multiplier: values?.multiplier ? values?.multiplier : 2,
        betType: "Manual",
      });
    }
  };

  const handleOnAutoBet = () => {
    if (!localStorage.getItem("token")) {
      dispatch(openRegisterModel());
    } else {
      SlideSocket.emit("limboPlaceBet", {
        userId: decoded?.userId,
        betAmount: values?.betamount ? values?.betamount : 0,
        multiplier: values?.multiplier ? values?.multiplier : 2,
        autoBetCount:
          slideStatusData?.autoBetRound > 0
            ? slideStatusData?.autoBetRound - 1
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
    SlideSocket.emit("stopAutoBet", { userId: decoded?.userId });
    dispatch(setStopAutoBet(false));
  };

  return (
    <div>
      {responsiveMobile > 768 ? (
        <div className="xl:w-80 lg:w-[18.75rem] max-sm:mx-3 flex flex-col p-3">
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
              <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mt-2 mb-1">
                <label>Bet Amount</label>
                <label>₹{values?.betamount ? values?.betamount : "0.00"}</label>
              </div>
              <div className="flex border-1 rounded border-[#2F4553] bg-[#2F4553]">
                <div className="relative flex">
                  {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div> */}
                  <input
                    className="xl:w-48 h-[2.4375rem] lg:w-40 md:w-72 max-sm:w-[15rem] max-[320px]:w-[12rem] pr-1.5 pl-2 py-2 rounded-l text-white border-2 border-[#2F4553] bg-[#0f212e] focus:outline-none focus:border-[#557086] hover:border-[#557086] !focus:border-[#557086]"
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
              <div className="text-[#b1bad3] text-sm font-semibold text-m mt-2 mb-1">
                <label>Target Multiplier</label>
              </div>
              <div className="flex rounded bg-[#0f212e] focus:outline-none focus:border-transparent">
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
              <button
                className={`${
                  // bettingStatus === false
                  //   ? "bg-[#489649]"
                  "bg-[#1fff20] hover:bg-[#42ed45]"
                  } text-black mt-3.5 py-3 rounded font-semibold w-full`}
                onClick={() => handleOnManualBet()}
              // disabled={slideStatusData.actualMultiplier > 1}
              >
                Bet
              </button>
              <div className="bg-[#0f212e] px-2 py-1 rounded-sm mt-4 overflow-y-auto h-[23rem]">
                {combinedData?.length > 0
                  ? combinedData?.map((item, index) => (
                    <div
                      className="flex justify-between fadeIn"
                      key={index}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center">
                        <BsIncognito />
                        <p className="text-[#b1bad3] font-semibold text-xs">
                          {item.username}
                        </p>
                      </div>
                      <div>
                        {item?.multiplier < multiplier
                          ? item?.multiplier
                          : item?.cashoutMultiplier < multiplier
                            ? `${item?.cashoutMultiplier}x`
                            : "-"}
                      </div>
                      <div className="flex items-center">
                        <div className="flex">
                          {/* <RiMoneyRupeeCircleFill color="yellow" /> */}
                          <div
                            className={`${item.cashoutMultiplier ||
                              item?.multiplier === "-"
                              ? "text-white font-bold"
                              : item.cashoutMultiplier < multiplier ||
                                item?.multiplier < multiplier
                                ? "text-[#1fff20]"
                                : "text-white font-semibold"
                              }`}
                          >
                            ₹{item?.amount}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                  : ""}
              </div>
            </div>
          ) : (
            <div>
              <div className="flex grow p-[5px] flex-shrink-0 mt-2 text-sm">
                <div className="flex">
                  <button
                    className={`py-3 rounded-s xl:w-[8.9rem] lg:w-[7.2rem] font-semibold ${isboardControl
                      ? "bg-[#0f212e] text-[#b1bad3]"
                      : "bg-[#4d718768] hover:bg-[#85afca68]"
                      }`}
                    onClick={() => dispatch(BoardControlModel(true))}
                  >
                    Controls
                  </button>
                  <button
                    className={`py-3 rounded-e xl:w-[8.9rem] lg:w-[7.2rem] font-semibold ${!isboardControl
                      ? "bg-[#0f212e] text-[#b1bad3]"
                      : "bg-[#4d718768] hover:bg-[#85afca68]"
                      }`}
                    onClick={() => dispatch(BoardControlModel(false))}
                  >
                    Leaderboard
                  </button>
                </div>
              </div>
              {isboardControl ? (
                <div>
                  <div className="text-[#b1bad3] text-sm flex justify-between font-semibold my-1">
                    <label>Bet Amount</label>
                    <label>
                      ₹
                      {values?.betamount ? values?.betamount : "0.00"}
                    </label>
                  </div>
                  <div className="flex border-1 rounded border-[#2F4553] bg-[#2F4553]">
                    <div className="relative flex">
                      {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                    <RiMoneyRupeeCircleFill
                      color="yellow"
                      className="text-xl"
                    />
                  </div> */}
                      <input
                        className="xl:w-48 h-[2.4375rem] lg:w-40 md:w-72 max-sm:w-[15rem] max-[320px]:w-[12rem] pr-1.5 pl-2 py-2 rounded-l text-white border-2 border-[#2F4553] bg-[#0f212e] focus:outline-none focus:border-[#557086] hover:border-[#557086] !focus:border-[#557086]"
                        type="number"
                        placeholder="0.00"
                        min={0}
                        name="betamount"
                        value={values?.betamount}
                        onChange={(e) => handleOnChange(e)}
                      />
                    </div>
                    <button
                      className="w-16 hover:bg-[#5c849e68] text-lg font-bold focus:outline-none"
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
                      className="w-16 hover:bg-[#5c849e68] text-sm font-bold focus:outline-none"
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
                  <div className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-3 mb-1">
                    <label>Target Multiplier</label>
                    <label>Number of Bets</label>
                  </div>
                  <div className="flex justify-between mb-2">
                    <input
                      className="xl:w-36 lg:w-16 px-2 py-2 rounded-l-md text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                      type="number"
                      min={1.01}
                      placeholder="1.01"
                      name="cashout"
                      value={values?.cashout || ""}
                      onChange={(e) => handleOnChange(e)}
                      onBlur={(e) => {
                        if (!e.target.value) {
                          handleOnChange({
                            target: { name: "cashout", value: "2.00" },
                          });
                        }
                      }}
                    />
                    <div className="relative flex space-x-2">
                      <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                        <IoInfiniteSharp className="text-xl" />
                      </div>
                      <input
                        className="xl:w-36 lg:w-[5.5rem] pr-7 pl-2 py-2 rounded text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                        type="number"
                        placeholder="0"
                        min={0}
                        name="numberofbet"
                        value={values?.numberofbet}
                        onChange={(e) => handleOnChange(e)}
                      />
                    </div>
                  </div>
                  <label className="text-[#b1bad3] font-semibold text-sm">
                    On win
                  </label>
                  <div className="flex items-center space-x-0.5 my-1 rounded bg-[#4d718768]">
                    <button
                      className={`${onProfit.win
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
                  <label className="text-[#b1bad3] font-semibold text-sm">
                    On Lose
                  </label>
                  <div className="flex items-center space-x-0.5 mt-1 rounded bg-[#4d718768]">
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
                      className={`relative flex ${onProfit.lose
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
                  <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mt-3 mb-1">
                    <label>Stop on Profit</label>
                    <label>
                      ₹
                      {values?.stoponprofit
                        ? values?.stoponprofit
                        : "0.00"}
                    </label>
                  </div>
                  <div className="relative flex">
                    {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                  <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                </div> */}
                    <input
                      className="w-full pr-1.5 px-2 py-2.5 rounded text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                      type="number"
                      placeholder="0.01"
                      step="0.01"
                      name="stoponprofit"
                      value={values?.stoponprofit}
                      onChange={(e) => handleOnChange(e)}
                    />
                  </div>
                  <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mt-2 mb-1">
                    <label>Stop on Loss</label>
                    <label>
                      ₹
                      {values?.stoponloss
                        ? values?.stoponloss
                        : "0.00"}
                    </label>
                  </div>
                  <div className="relative flex">
                    {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                  <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                </div> */}
                    <input
                      className="w-full pr-1.5 px-2 py-2.5 rounded text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                      type="number"
                      placeholder="0.01"
                      step="0.01"
                      name="stoponloss"
                      value={values?.stoponloss}
                      onChange={(e) => handleOnChange(e)}
                    />
                  </div>
                  <div>
                    {stopAutoBet ? (
                      <button
                        className={` bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3.5 py-3 rounded-md font-semibold w-full`}
                        onClick={() => handleOnStopAutoBet()}
                      >
                        Stop Autobet
                      </button>
                    ) : (
                      <button
                        className={`${
                          // bettingStatus === false
                          // ? "bg-[#489649]"
                          "bg-[#1fff20] hover:bg-[#42ed45]"
                          } text-black mt-3 py-3 rounded-md font-semibold w-full`}
                        onClick={() => handleOnAutoBet()}
                      >
                        Start Autobet
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="bg-[#0f212e] px-2 py-1 rounded-sm mt-2 text-base overflow-y-auto h-[28rem]">
                    {combinedData?.length > 0
                      ? combinedData?.map((item, index) => (
                        <div
                          className="flex justify-between"
                          key={index}
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className="flex items-center">
                            <BsIncognito />
                            <p className="text-[#b1bad3]">{item.username}</p>
                          </div>
                          <div>
                            {item?.multiplier < multiplier
                              ? item?.multiplier
                              : item?.cashoutMultiplier < multiplier
                                ? `${item?.cashoutMultiplier}x`
                                : "-"}
                          </div>
                          <div className="flex items-center font-bold">
                            <div
                              className={`${item?.cashoutMultiplier ||
                                item?.multiplier === "-"
                                ? "text-white"
                                : item?.cashoutMultiplier ||
                                  item?.multiplier < multiplier
                                  ? "text-[#1fff20]"
                                  : "text-white"
                                }`}
                            >
                              <div className="flex">
                                {/* <RiMoneyRupeeCircleFill color="yellow" /> */}
                                <div>₹{item?.amount}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                      : ""}
                  </div>
                  {stopAutoBet ? (
                    <button
                      className={`bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3.5 py-3.5 rounded-md font-semibold w-full`}
                      onClick={() => handleOnStopAutoBet()}
                    >
                      Stop Autobet
                    </button>
                  ) : (
                    <button
                      className={`bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3.5 py-3.5 rounded-md font-semibold w-full`}
                      onClick={() => handleOnAutoBet()}
                    >
                      Start Autobet
                    </button>
                  )}
                </div>
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
              <div className="flex border-1 rounded border-[#2F4553] bg-[#2F4553]">
                <div className="relative flex">
                  {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div> */}
                  <input
                    className="xl:w-48 lg:w-40 md:w-72 max-sm:w-[15rem] max-[320px]:w-[12rem] pr-1.5 pl-2 py-2 rounded-l-md text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
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
                className={`${
                  // bettingStatus === false
                  //   ? "bg-[#489649]"
                  "bg-[#1fff20] hover:bg-[#42ed45]"
                  } text-black mt-3.5 py-3 rounded font-semibold w-full`}
                onClick={() => handleOnManualBet()}
              // disabled={slideStatusData.actualMultiplier > 1}
              >
                Bet
              </button>
              <div className="text-[#b1bad3] text-sm font-semibold text-m mt-2 mb-1">
                <label>Risk</label>
              </div>
              <div className="flex rounded bg-[#0f212e] focus:outline-none focus:border-transparent">
                <select
                  type="select"
                  name="risk"
                  value={values?.risk}
                  onChange={(e) => handleOnChange(e)}
                  className="w-full px-2 py-2 text-white rounded border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                >
                  <option>Classic</option>
                  <option>Low</option>
                  <option value='medium'>Medium</option>
                  <option>High</option>
                </select>
              </div>
              <button className="bg-[#2f4553] w-full rounded-sm py-2.5 my-3 font-bold text-sm">Auto Pick</button>
              <button className="bg-[#2f4553] w-full rounded-sm py-2.5 font-bold text-sm">Clear Table</button>
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
                    className={`${
                      // bettingStatus === false
                      //   ? "bg-[#489649]"
                      "bg-[#1fff20] hover:bg-[#42ed45]"
                      } text-black mt-3 py-3 rounded font-semibold w-full`}
                    onClick={() => handleOnAutoBet()}
                  >
                    Start Autobet
                  </button>
                )}
                <div className="text-[#b1bad3] text-sm flex justify-between font-semibold my-2">
                  <label>Bet Amount</label>
                  <label>
                    ₹
                    {slideStatusData?.currentBetAmount
                      ? Number(slideStatusData.currentBetAmount).toFixed(2)
                      : values?.betamount || "0.00"}
                  </label>
                </div>
                <div className="flex border-1 rounded border-[#2F4553] bg-[#2F4553]">
                  <div className="relative flex">
                    {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                    <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                    </div> */}
                    <input
                      className="xl:w-48 lg:w-40 md:w-72 sm:w-0 max-[425px]:w-72 max-[375px]:w-64 max-[320px]:w-48 pr-1.5 pl-2 py-2 rounded-l-md text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                      type="number"
                      placeholder="0.00"
                      step="0.01"
                      min={0}
                      name="betamount"
                      value={
                        slideStatusData?.currentBetAmount
                          ? Number(slideStatusData.currentBetAmount).toFixed(2)
                          : values?.betamount
                      }
                      onChange={(e) => {
                        handleOnChange(e);
                        if (slideStatusData?.currentBetAmount) {
                          dispatch(
                            setSlideStatusData({ currentBetAmount: "" })
                          );
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
                <div className="text-[#b1bad3] text-sm font-semibold text-m mt-2 mb-1">
                  <label>Risk</label>
                </div>
                <div className="flex rounded bg-[#0f212e] focus:outline-none focus:border-transparent">
                  <select
                    type="select"
                    name="risk"
                    value={values?.risk}
                    onChange={(e) => handleOnChange(e)}
                    className="w-full px-2 py-2 text-white rounded border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                  >
                    <option>Classic</option>
                    <option>Low</option>
                    <option value='medium'>Medium</option>
                    <option>High</option>
                  </select>
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
                    className="xl:w-[18.5rem] lg:w-[15rem] md:w-[22.5rem] max-sm:w-[23.1rem] max-[375px]:w-[20rem] max-[320px]:w-[16.5rem] pr-7 pl-2 py-2 rounded text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0"
                    min={0}
                    name="autoBetCount"
                    value={
                      slideStatusData?.autoBetRound > 0
                        ? slideStatusData?.autoBetRound - 1
                        : parseInt(values?.autoBetCount) || ""
                    }
                    onChange={(e) => {
                      handleOnChange(e);
                      if (slideStatusData?.autoBetRound > 0) {
                        dispatch(setSlideStatusData({ autoBetRound: "" }));
                      }
                    }}
                  />
                </div>
              </div>
              <label className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1 mb-1">
                On win
              </label>
              <div className="flex items-center space-x-0.5 border-2 mt-1 mb-2 rounded border-[#4d718768] bg-[#4d718768]">
                <button
                  className={`${onProfit.win
                    ? "bg-[#0f212e] rounded"
                    : "hover:bg-[#85afca68] rounded"
                    }xl:px-2 lg:px-2 md:px-2 px-2 py-2 rounded-sm`}
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
                    className="xl:w-[9rem] lg:w-[4.7rem] md:w-[13rem] max-sm:w-[12.8rem] max-[375px]:w-[9.6rem] max-[320px]:w-[6.2rem] pr-7 pl-2 py-1.5 rounded text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
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
              <div className="flex items-center space-x-0.5 border-2 mt-1 rounded border-[#4d718768] bg-[#4d718768]">
                <div>
                  <button
                    className={`${onProfit.lose
                      ? "bg-[#0f212e] rounded"
                      : "hover:bg-[#85afca68] rounded"
                      } px-2 py-2 rounded-sm`}
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
                      ? "bg-[#4d718768] hover:bg-[#85afca68]"
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
                    className="xl:w-[9rem] lg:w-[4.7rem] md:w-[13rem] max-sm:w-[12.8rem] max-[375px]:w-[9.6rem] max-[320px]:w-[6.2rem] pr-7  pl-2 py-1.5 rounded text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0"
                    name="onlose"
                    value={values?.onlose}
                    onChange={(e) => handleOnChange(e)}
                    disabled={onProfit.lose}
                  />
                </div>
              </div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mt-2 mb-1">
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
                  className="w-full pr-1.5 px-2 py-2 rounded text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                  type="number"
                  placeholder="0.01"
                  step="0.01"
                  name="stoponprofit"
                  value={values?.stoponprofit}
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mt-2 mb-1">
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
                  className="w-full pr-1.5 px-2 py-2 rounded text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
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
