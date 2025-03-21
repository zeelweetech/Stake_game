import React, { useEffect, useState } from "react";
import { Divider } from "@mui/material";
// import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { BsIncognito } from "react-icons/bs";
import PercentIcon from "@mui/icons-material/Percent";
import { useDispatch, useSelector } from "react-redux";
import {
  openRegisterModel,
  setWallet,
} from "../../../../features/auth/authSlice";
import { IoInfiniteSharp } from "react-icons/io5";
// import { CrashSocket } from "../../../../socket";
import {
  BoardControlModel,
  setBettingStatus,
  setCombinedData,
  setCrashStatus,
  setCrashValues,
  setGameStatusData,
  SwiperModel,
} from "../../../../features/casino/crashSlice";
import { decodedToken } from "../../../../resources/utility";
import toast from "react-hot-toast";
import { getRandomData } from "../../../../services/CasinoServices";
import { getWallet } from "../../../../services/LoginServices";

const CrashGameSidebar = ({ crashGameSocket }) => {
  const dispatch = useDispatch();
  const decoded = decodedToken();
  const [onClickStatus, setOnClickStatus] = useState(false);
  const [autoBetOnClick, setAutoBetOnClick] = useState(false);
  const [betAmount, setBetAmount] = useState();
  const [randomData, setRandomData] = useState([]);
  const [fundsToastShown, setFundsToastShown] = useState(false);
  const [responsiveMobile, setResponsiveMobile] = useState(window.innerWidth);
  const [onProfit, setOnProfit] = useState({ win: true, lose: true });
  const {
    isSwiper,
    isboardControl,
    crashValues,
    gameStatusData,
    bettingStatus,
    combinedData,
    multiplier,
  } = useSelector((state) => state.crashGame);

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
      .catch((err) => { });
  };

  useEffect(() => {
    const handleInsufficientFunds = (data) => {
      if (!fundsToastShown) {
        toast.error(data?.message);
        setFundsToastShown(true);
      }
    };
    crashGameSocket.on("Insufficientfund", handleInsufficientFunds);

    const resetToastFlag = () => {
      setFundsToastShown(false);
    };

    return () => {
      resetToastFlag();
      crashGameSocket.off("Insufficientfund", handleInsufficientFunds);
    };
  }, [fundsToastShown]);

  useEffect(() => {
    crashGameSocket.on("bettingStarted", (data) => {
      dispatch(setBettingStatus(data?.status));
    });
    crashGameSocket.on("bettingClosed", (data) => {
      dispatch(setBettingStatus(data?.status));
    });
    // crashGameSocket.on("gameEnded", (data) => {
    //   dispatch(setCrashStatus(data));
    // });
    crashGameSocket.on("gameStatus", (data) => {
      dispatch(setGameStatusData(data));
      const betData =
        data?.autoBets?.length > 0 &&
        data?.autoBets?.filter((item) => {
          return item?.userId === decoded?.userId;
        })?.[0];
      setBetAmount(betData);
    });
    crashGameSocket.on("inActiveUser", (data) => {
      toast.error(data?.message);
    });
  }, []);

  useEffect(() => {
    if (!betAmount?.amount) {
      dispatch(
        setCrashValues({
          betamount: "",
          cashout: "2.00",
          numberofbet: "",
          onwin: "",
          onlose: "",
          stoponprofit: "",
          stoponloss: "",
        })
      );
      setAutoBetOnClick(false);
    }
  }, [!betAmount?.amount]);

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
    if (bettingStatus) {
      fetchData();
    }
  }, [bettingStatus]);

  useEffect(() => {
    if (bettingStatus === false) {
      setOnClickStatus(false);
    }
  }, [bettingStatus === false]);

  useEffect(() => {
    if (
      gameStatusData?.players?.length > 0 ||
      gameStatusData?.autoBets?.length > 0
    ) {
      const playersdata = gameStatusData?.players || [];
      const AutoData = gameStatusData?.autoBets || [];
      const mergedData = [...playersdata, ...AutoData, ...randomData];
      dispatch(setCombinedData(mergedData));
    } else if (randomData) {
      const mergedData = [...randomData];
      dispatch(setCombinedData(mergedData));
    }
  }, [gameStatusData, randomData]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    dispatch(setCrashValues({ ...crashValues, [name]: value }));
  };

  const handleOnManualBet = () => {
    if (!localStorage.getItem("token")) {
      dispatch(openRegisterModel());
    } else {
      crashGameSocket.emit("placeBet", {
        userId: decoded?.userId,
        amount: crashValues?.betamount
          ? parseInt(crashValues?.betamount, 10)
          : 0,
        cashoutMultiplier: crashValues?.cashout
          ? parseInt(crashValues?.cashout, 10)
          : 2.0,
        betType: "Manual",
      });
      dispatch(
        setCrashValues({
          betamount: "",
          // cashout: "",
        })
      );
      setOnClickStatus(true);
    }
  };

  const handleOnAutoBet = () => {
    if (!localStorage.getItem("token")) {
      dispatch(openRegisterModel());
    } else {
      crashGameSocket.emit("placeBet", {
        userId: decoded?.userId,
        amount: crashValues?.betamount
          ? parseInt(crashValues?.betamount, 10)
          : 0,
        cashoutMultiplier: crashValues?.cashout
          ? parseInt(crashValues?.cashout, 10)
          : 2.0,
        numberOfBets: crashValues?.numberofbet
          ? parseInt(crashValues?.numberofbet, 10)
          : 1,
        onWins: parseInt(crashValues?.onwin, 10),
        onLoss: parseInt(crashValues?.onlose, 10),
        stopOnProfit: parseInt(crashValues?.stoponprofit, 10),
        stopOnLoss: parseInt(crashValues?.stoponloss, 10),
        betType: "Auto",
      });
      setAutoBetOnClick(true);
    }
  };

  const handleOnCancelBet = () => {
    const BetId = gameStatusData?.players?.find((item) => {
      return item?.userId === decoded?.userId && item?.betId;
    });

    crashGameSocket.emit("cancelBet", {
      userId: decoded?.userId,
      betId: BetId?.betId,
    });
    setOnClickStatus(false);
  };

  const BetId = gameStatusData?.players?.find((item) => {
    return item?.userId === decoded?.userId && item?.betId;
  });

  crashGameSocket.emit("betCompleted", {
    betId: BetId?.betId,
    userId: decoded?.userId,
  });

  const handleOnCancelAutoBet = () => {
    const BetId = gameStatusData?.autoBets?.find((item) => {
      return item?.userId === decoded?.userId && item?.betId;
    });

    crashGameSocket.emit("cancelBet", {
      userId: decoded?.userId,
      betId: BetId?.betId,
    });
    setAutoBetOnClick(false);
    dispatch(
      setCrashValues({
        betamount: "",
        cashout: "",
        numberofbet: "",
        onwin: "",
        onlose: "",
        stoponprofit: "",
        stoponloss: "",
      })
    );
  };

  return (
    <div>
      {responsiveMobile > 768 ? (
        <div className="flex flex-col xl:w-80 lg:w-[16.8rem] p-3 bg-[#213743] rounded-tl-lg">
          <div className="md:hidden block mb-5">
            {autoBetOnClick ? (
              <button
                className={` bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3.5 py-3 rounded-md font-semibold w-full`}
                onClick={() => handleOnCancelAutoBet()}
              >
                Cancel Autobet
              </button>
            ) : (
              <button
                className={`${bettingStatus === false
                    ? "bg-[#489649]"
                    : "bg-[#1fff20] hover:bg-[#42ed45]"
                  } text-black mt-3 py-3 rounded font-semibold w-full`}
                onClick={() => handleOnAutoBet()}
              >
                Start Autobet
              </button>
            )}
          </div>
          <div className="flex overflow-x-auto overflow-y-hidden transform translate-z-0">
            <div className="bg-[#0f212e] flex grow rounded-full p-[5px] flex-shrink-0">
              <div className="flex space-x-2">
                <button
                  className={`py-2 xl:w-[8.7rem] lg:w-[7.1rem] md:w-44 w-[10.3rem] rounded-full ${isSwiper ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                    }`}
                  onClick={() => dispatch(SwiperModel(true))}
                >
                  Manual
                </button>
                <button
                  className={`py-2 xl:w-[8.7rem] lg:w-[7.1rem] md:w-44 w-[10.3rem] rounded-full ${!isSwiper ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
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
              <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mt-3 mb-1 select-none">
                <label>Bet Amount</label>
                <label>
                  ₹{crashValues?.betamount ? crashValues?.betamount : "0.00"}
                </label>
              </div>
              <div className="flex border-1 rounded border-[#2F4553] bg-[#2F4553] group">
                <div className="relative flex">
                  {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                </div> */}
                  <input
                    className="xl:w-48 lg:w-40 pr-1.5 pl-2 py-2 rounded-l text-white border-2 hover:border-[#557086] focus:hover:border-[#557086] group-hover:border-[#557086] border-[#2F4553] focus:border-[#557086] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0.00"
                    min={0}
                    name="betamount"
                    value={crashValues?.betamount}
                    onChange={(e) => handleOnChange(e)}
                  />
                </div>
                <button
                  className="w-16 hover:bg-[#5c849e68] text-sm font-semibold hover:border-[#557086]"
                  onClick={() =>
                    dispatch(
                      setCrashValues({
                        ...crashValues,
                        betamount: crashValues?.betamount / 2,
                      })
                    )
                  }
                >
                  ½
                </button>
                <Divider
                  flexItem
                  orientation="vertical"
                  sx={{ my: 1, backgroundColor: "rgba(0, 0, 0, 0.12)" }}
                />
                <button
                  className="w-16 hover:bg-[#5c849e68] text-sm font-semibold hover:border-[#557086] hover:rounded-r"
                  onClick={() =>
                    dispatch(
                      setCrashValues({
                        ...crashValues,
                        betamount: crashValues?.betamount * 2,
                      })
                    )
                  }
                >
                  2×
                </button>
              </div>
              <div className="text-[#b1bad3] font-semibold text-sm mt-3 mb-1 select-none">
                <label>Cashout At</label>
              </div>
              <div className="flex border-1 rounded-md border-[#2F4553] bg-[#2F4553] relative group">
                <input
                  className={`xl:w-48 lg:w-40 px-2 py-2 md:w-60 rounded-l-md text-white border-2 ${crashValues?.cashout < 1.01
                      ? "border-[#ed4163]"
                      : "border-[#2F4553] hover:border-[#557086]"
                    } bg-[#0f212e] focus:outline-none focus:border-[#557086] group-hover:border-[#557086]`}
                  type="number"
                  min={1.01}
                  placeholder="2.00"
                  name="cashout"
                  value={crashValues?.cashout}
                  onChange={(e) => handleOnChange(e)}
                />
                {crashValues?.cashout < 1.01 && (
                  <div className="absolute bottom-full left-0 mb-6 text-black bg-white font-semibold px-2 py-2 text-sm rounded shadow-lg">
                    this must be greater than or equal to 1.01
                  </div>
                )}
                <button
                  className="w-16 hover:bg-[#5c849e68] hover:border-[#557086]"
                  onClick={() => {
                    const cashoutValue =
                      parseFloat(crashValues?.cashout) || 2.0;
                    if (cashoutValue > 1.01) {
                      dispatch(
                        setCrashValues({
                          ...crashValues,
                          cashout: (cashoutValue - 1.0).toFixed(2),
                        })
                      );
                    }
                  }}
                >
                  <KeyboardArrowDownIcon fontSize="small" />
                </button>
                <Divider
                  flexItem
                  orientation="vertical"
                  sx={{ my: 1.5, backgroundColor: "rgba(0, 0, 0, 0.12)" }}
                />
                <button
                  className="w-16 hover:bg-[#5c849e68] hover:border-[#557086] hover:rounded-r"
                  onClick={() => {
                    const cashoutValue =
                      parseFloat(crashValues?.cashout) || 2.0;
                    dispatch(
                      setCrashValues({
                        ...crashValues,
                        cashout: (cashoutValue + 1.0).toFixed(2),
                      })
                    );
                  }}
                >
                  <KeyboardArrowUpIcon fontSize="small" />
                </button>
              </div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mt-3 mb-1 select-none">
                <label>Profit on Win</label>
                <label>
                  ₹
                  {crashValues?.betamount * crashValues?.cashout
                    ? crashValues?.betamount * crashValues?.cashout
                    : "0.00" || 0}
                </label>
              </div>
              <div className="relative flex">
                {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
              <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
            </div> */}
                <input
                  className={`w-full px-2 py-2 rounded text-white border-2 
              hover:border-[#557086] border-[#2F4553] bg-[#2F4553] 
              focus:outline-none focus:border-[#557086]`}
                  type="text"
                  placeholder="0.00"
                  value={
                    crashValues?.betamount * crashValues?.cashout || "0.00"
                  }
                  Disabled
                />
              </div>
              {multiplier > 1 ? (
                <button
                  className={`bg-[#489649] text-black mt-3.5 py-3 rounded font-semibold w-full `}
                  onClick={() => setOnClickStatus(false)}
                >
                  Bet (Next Round)
                </button>
              ) : onClickStatus ? (
                <button
                  className={`bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3.5 py-3 rounded font-semibold w-full`}
                  onClick={() => handleOnCancelBet()}
                >
                  Cancel
                </button>
              ) : (
                <button
                  className={`${bettingStatus === false
                      ? "bg-[#489649]"
                      : "bg-[#1fff20] hover:bg-[#42ed45]"
                    } text-black mt-3.5 py-3 rounded font-semibold w-full`}
                  onClick={() => handleOnManualBet()}
                  disabled={bettingStatus === false}
                >
                  Bet
                </button>
              )}

              <div className="flex justify-between mt-3 select-none">
                <div className="flex items-center space-x-1 font-semibold">
                  <SupervisorAccountIcon className="text-[#b1bad3]" />
                  <p>{combinedData?.length}</p>
                </div>
                <div className="flex items-center space-x-1 font-semibold select-none">
                  {/* <RiMoneyRupeeCircleFill color="yellow" className="text-xl" /> */}
                  <p>
                    ₹
                    {combinedData
                      ?.reduce((acc, item) => {
                        const amount = item?.amount
                          ? String(item?.amount)
                          : "0";
                        const parsedAmount = parseFloat(
                          amount.replace(/[^0-9.-]+/g, "")
                        );
                        return acc + (isNaN(parsedAmount) ? 0 : parsedAmount);
                      }, 0)
                      .toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="bg-[#0f212e] px-2 py-1 rounded-sm mt-3 overflow-y-auto h-64 select-none">
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
            <div className="text-xs">
              <div className="flex grow p-[5px] flex-shrink-0  mt-2">
                <div className="flex">
                  <button
                    className={`py-3 rounded-s xl:w-[8.9rem] lg:w-[7.2rem]  font-semibold ${isboardControl
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
                  <div className="text-[#b1bad3] flex justify-between font-semibold my-1 select-none">
                    <label>Bet Amount</label>
                    <label>
                      ₹
                      {crashValues?.betamount ? crashValues?.betamount : "0.00"}
                    </label>
                  </div>
                  <div className="flex border-1 rounded border-[#2F4553] bg-[#2F4553] group">
                    <div className="relative flex">
                      {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                    <RiMoneyRupeeCircleFill
                      color="yellow"
                      className="text-xl"
                    />
                  </div> */}
                      <input
                        className="xl:w-48 lg:w-40 pr-1.5 pl-2 py-2.5 rounded-l-md text-white border-2 hover:border-[#557086] border-[#2F4553] group-hover:border-[#557086] focus:border-[#557086] bg-[#0f212e] focus:outline-none"
                        type="number"
                        placeholder="0.00"
                        step="0.01"
                        name="betamount"
                        value={
                          betAmount?.amount
                            ? betAmount?.amount
                            : crashValues?.betamount
                        }
                        onChange={(e) => handleOnChange(e)}
                      />
                    </div>
                    <button
                      className="w-16 hover:bg-[#5c849e68] text-lg font-bold hover:border-[#557086] focus:outline-none"
                      onClick={() =>
                        dispatch(
                          setCrashValues({
                            ...crashValues,
                            betamount: crashValues?.betamount / 2,
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
                      className="w-16 hover:bg-[#5c849e68] text-sm font-bold rounded-r hover:border-[#557086] focus:outline-none"
                      onClick={() =>
                        dispatch(
                          setCrashValues({
                            ...crashValues,
                            betamount: crashValues?.betamount * 2,
                          })
                        )
                      }
                    >
                      2×
                    </button>
                  </div>
                  <div className="text-[#b1bad3] flex justify-between font-semibold mt-3 mb-1 select-none">
                    <label>Cashout At</label>
                    <label>Number of Bets</label>
                  </div>
                  <div className="flex justify-between mb-2">
                    <div className="flex border-1 w-44 rounded border-[#4d718768] bg-[#4d718768] group">
                      <input
                        className={`xl:w-20 lg:w-16 px-2 py-2.5 rounded-l-md text-white border-2 ${crashValues?.cashout < 1.01
                            ? "border-[#ed4163]"
                            : "border-[#2F4553] hover:border-[#557086]"
                          } hover:border-[#557086] focus:border-[#557086] border-[#2F4553] group-hover:border-[#557086] bg-[#0f212e] focus:outline-none`}
                        type="number"
                        min={1.01}
                        placeholder="1.01"
                        name="cashout"
                        value={crashValues?.cashout}
                        onChange={(e) => handleOnChange(e)}
                      />
                      {crashValues?.cashout < 1.01 && (
                        <div className="absolute bottom-full left-0 mb-6 text-black bg-white font-semibold px-2 py-2 text-sm rounded shadow-lg">
                          this must be greater than or equal to 1.01
                        </div>
                      )}
                      <button
                        className="w-10 hover:bg-[#5c849e68]"
                        onClick={() => {
                          const cashoutValue =
                            parseFloat(crashValues?.cashout) || 2.0;
                          if (cashoutValue > 1.01) {
                            dispatch(
                              setCrashValues({
                                ...crashValues,
                                cashout: (cashoutValue - 1.0).toFixed(2),
                              })
                            );
                          }
                        }}
                      >
                        <KeyboardArrowDownIcon fontSize="small" />
                      </button>
                      <Divider
                        flexItem
                        orientation="vertical"
                        sx={{ my: 1, backgroundColor: "#1A2c38", width: "2px" }}
                      />
                      <button
                        className="w-10 hover:bg-[#5c849e68] rounded-r"
                        onClick={() => {
                          const cashoutValue =
                            parseFloat(crashValues?.cashout) || 2.0;
                          dispatch(
                            setCrashValues({
                              ...crashValues,
                              cashout: (cashoutValue + 1.0).toFixed(2),
                            })
                          );
                        }}
                      >
                        <KeyboardArrowUpIcon fontSize="small" />
                      </button>
                    </div>
                    <div className="relative flex space-x-2">
                      <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                        <IoInfiniteSharp className="text-xl" />
                      </div>
                      <input
                        className="xl:w-32 lg:w-[5.5rem] pr-7 pl-2 py-2.5 rounded text-white border-2 hover:border-[#557086] border-[#2F4553] focus:border-[#557086] bg-[#0f212e] focus:outline-none"
                        type="number"
                        placeholder="0"
                        min={0}
                        name="numberofbet"
                        value={
                          betAmount?.placedBets
                            ? crashValues?.numberofbet - betAmount?.placedBets
                            : crashValues?.numberofbet
                        }
                        onChange={(e) => handleOnChange(e)}
                      // onChange={(e) => {
                      //   handleOnChange(e);
                      //   if (autoBetResult?.round > 0) {
                      //     dispatch(setAutoBetResult({ round: "" }));
                      //   }
                      // }}
                      />
                    </div>
                  </div>
                  <label className="text-[#b1bad3] font-semibold text-xs select-none">
                    On win
                  </label>
                  <div className="flex items-center space-x-0.5 border-2 mt-1 mb-2 rounded-md border-[#4d718768] bg-[#4d718768]">
                    <button
                      className={`${onProfit.win
                          ? "bg-[#0f212e]"
                          : "hover:bg-[#85afca68] rounded"
                        } px-5 py-2.5 rounded`}
                      onClick={() => {
                        setOnProfit({ ...onProfit, win: true });
                        dispatch(setCrashValues({ onwin: "" }));
                      }}
                    >
                      Reset
                    </button>
                    <button
                      className={`${onProfit.win
                          ? "hover:bg-[#85afca68]"
                          : "bg-[#0f212e] rounded-sm"
                        } px-[0.95rem] py-2.5 rounded`}
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
                        className="xl:w-[7.9rem] lg:w-[4.7rem] pr-7 pl-2 py-2.5 rounded text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                        type="number"
                        placeholder="0"
                        name="onwin"
                        value={crashValues?.onwin}
                        onChange={(e) => handleOnChange(e)}
                        disabled={onProfit.win}
                      />
                    </div>
                  </div>
                  <label className="text-[#b1bad3] font-semibold text-xs select-none">
                    On Lose
                  </label>
                  <div className="flex items-center space-x-0.5 border-2 mt-1 rounded-md border-[#4d718768] bg-[#4d718768]">
                    <div>
                      <button
                        className={`${onProfit.lose
                            ? "bg-[#0f212e] rounded"
                            : "hover:bg-[#85afca68] rounded"
                          } px-5 py-2.5 rounded`}
                        onClick={() => {
                          setOnProfit({ ...onProfit, lose: true });
                          dispatch(setCrashValues({ onlose: "" }));
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
                          } px-[0.95rem] py-2.5 rounded`}
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
                        className="xl:w-[7.9rem] lg:w-[4.7rem] pr-7 pl-2 py-2.5 rounded text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                        type="number"
                        placeholder="0"
                        name="onlose"
                        value={crashValues?.onlose}
                        onChange={(e) => handleOnChange(e)}
                        disabled={onProfit.lose}
                      />
                    </div>
                  </div>
                  <div className="text-[#b1bad3] flex justify-between font-semibold text-xs mt-3 mb-1 select-none">
                    <label>Stop on Profit</label>
                    <label>
                      ₹
                      {crashValues?.stoponprofit
                        ? crashValues?.stoponprofit
                        : "0.00"}
                    </label>
                  </div>
                  <div className="relative flex">
                    {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                  <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                </div> */}
                    <input
                      className="w-full pr-1.5 px-2 py-2.5 rounded text-white border-2 hover:border-[#557086] focus:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                      type="number"
                      placeholder="0.01"
                      step="0.01"
                      name="stoponprofit"
                      value={crashValues?.stoponprofit}
                      onChange={(e) => handleOnChange(e)}
                    />
                  </div>
                  <div className="text-[#b1bad3] flex justify-between font-semibold text-xs mt-2 mb-1 select-none">
                    <label>Stop on Loss</label>
                    <label>
                      ₹
                      {crashValues?.stoponloss
                        ? crashValues?.stoponloss
                        : "0.00"}
                    </label>
                  </div>
                  <div className="relative flex">
                    {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                  <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                </div> */}
                    <input
                      className="w-full pr-1.5 px-2 py-2.5 rounded text-white border-2 focus:border-[#557086] hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                      type="number"
                      placeholder="0.01"
                      step="0.01"
                      name="stoponloss"
                      value={crashValues?.stoponloss}
                      onChange={(e) => handleOnChange(e)}
                    />
                  </div>
                  <div className="text-[#b1bad3] flex justify-between font-semibold text-xs mt-2 mb-1">
                    <label>Profit on Win</label>
                    <label>
                      ₹
                      {crashValues?.betamount * crashValues?.cashout
                        ? crashValues?.betamount * crashValues?.cashout
                        : "0.00" || 0}
                    </label>
                  </div>
                  <div className="relative flex">
                    {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                  <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                </div> */}
                    <input
                      className="w-full px-2 py-2.5 rounded text-white border-2 focus:border-[#557086] hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                      type="text"
                      placeholder="0"
                      name="profitonwin"
                      value={
                        crashValues?.betamount * crashValues?.cashout || "0.00"
                      }
                      Disabled
                    />
                  </div>
                  <div>
                    {autoBetOnClick ? (
                      <button
                        className={` bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3.5 py-3 rounded-md font-semibold w-full`}
                        onClick={() => handleOnCancelAutoBet()}
                      >
                        Cancel Autobet
                      </button>
                    ) : (
                      <button
                        className={`${bettingStatus === false
                            ? "bg-[#489649]"
                            : "bg-[#1fff20] hover:bg-[#42ed45]"
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
                  <div className="flex justify-between mt-3">
                    <div className="flex items-center space-x-1 font-semibold">
                      <SupervisorAccountIcon className="text-[#b1bad3]" />
                      <p>{combinedData?.length}</p>
                    </div>
                    <div className="flex items-center space-x-1 font-semibold">
                      {/* <RiMoneyRupeeCircleFill color="yellow" className="text-xl" /> */}
                      <p>
                        ₹
                        {combinedData
                          ?.reduce((acc, item) => {
                            const amount = item?.amount
                              ? String(item?.amount)
                              : "0";
                            const parsedAmount = parseFloat(
                              amount.replace(/[^0-9.-]+/g, "")
                            );
                            return (
                              acc + (isNaN(parsedAmount) ? 0 : parsedAmount)
                            );
                          }, 0)
                          .toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#0f212e] px-2 py-1 rounded-sm mt-3 text-base overflow-y-auto h-[23rem]">
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
                  <div className="text-[#b1bad3] flex justify-between font-semibold text-xs mt-2 mb-1.5">
                    <label>Profit on Win</label>
                    <label>0.00 ₹</label>
                  </div>
                  <div className="relative flex">
                    {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                  <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                </div> */}
                    <input
                      type="text"
                      className="w-full px-2 py-2 rounded-md text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                      placeholder="0"
                      name="profitonwin"
                      value={
                        crashValues?.betamount * crashValues?.cashout || "0.00"
                      }
                      disabled
                    />
                  </div>
                  <div className="md:block hidden">
                    {autoBetOnClick ? (
                      <button
                        className={` bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3.5 py-3 rounded-md font-semibold w-full`}
                        onClick={() => handleOnCancelAutoBet()}
                      >
                        Cancel Autobet
                      </button>
                    ) : (
                      <button
                        className={`bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3.5 py-3 rounded-md font-semibold w-full`}
                        onClick={() => handleOnAutoBet()}
                      >
                        Start Autobet
                      </button>
                    )}
                  </div>
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
              {multiplier > 1 ? (
                <button
                  className={`bg-[#489649] text-black mt-3.5 py-3 rounded font-semibold w-full`}
                  onClick={() => setOnClickStatus(false)}
                >
                  Bet (Next Round)
                </button>
              ) : onClickStatus ? (
                <button
                  className={`bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3.5 py-3 rounded-md font-semibold w-full`}
                  onClick={() => handleOnCancelBet()}
                >
                  Cancel
                </button>
              ) : (
                <button
                  className={`${bettingStatus === false
                      ? "bg-[#489649]"
                      : "bg-[#1fff20] hover:bg-[#42ed45]"
                    } text-black mt-3.5 py-3 rounded font-semibold w-full`}
                  onClick={() => handleOnManualBet()}
                  disabled={bettingStatus === false}
                >
                  Bet
                </button>
              )}
              <div className="text-[#b1bad3] flex justify-between font-semibold text-xs mt-3 mb-1 select-none">
                <label>Bet Amount</label>
                <label>
                  ₹{crashValues?.betamount ? crashValues?.betamount : "0.00"}
                </label>
              </div>
              <div className="flex border-1 rounded border-[#2F4553] bg-[#2F4553] group">
                {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div> */}
                <input
                  className="px-2 py-2 w-[16.5rem] rounded-l text-white border-2 focus:hover:border-[#557086] group-hover:border-[#557086] hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                  type="number"
                  placeholder="0.00"
                  min={0}
                  name="betamount"
                  value={crashValues?.betamount}
                  onChange={(e) => handleOnChange(e)}
                />
                <button
                  className="w-[3.3rem] hover:bg-[#5c849e68] text-lg font-semibold hover:border-[#557086]"
                  onClick={() =>
                    dispatch(
                      setCrashValues({
                        ...crashValues,
                        betamount: crashValues?.betamount / 2,
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
                  className="w-[3.4rem] hover:bg-[#5c849e68] text-sm font-semibold hover:border-[#557086] focus:border-[#557086]"
                  onClick={() =>
                    dispatch(
                      setCrashValues({
                        ...crashValues,
                        betamount: crashValues?.betamount * 2,
                      })
                    )
                  }
                >
                  2×
                </button>
              </div>
              <div className="text-[#b1bad3] font-semibold text-xs mt-3 mb-1 select-none">
                <label>Cashout At</label>
              </div>
              <div className="flex border-1 rounded border-[#2F4553] bg-[#2F4553] group">
                <input
                  className="px-2 py-2 w-[16.5rem] rounded-l text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:border-[#557086] group-hover:border-[#557086] focus:outline-none"
                  type="number"
                  min={1.01}
                  placeholder="1.01"
                  name="cashout"
                  value={crashValues?.cashout || ""}
                  onChange={(e) => handleOnChange(e)}
                  onBlur={(e) => {
                    if (!e.target.value) {
                      handleOnChange({
                        target: { name: "cashout", value: "2.00" },
                      });
                    }
                  }}
                />
                <button
                  className="w-[3.3rem] hover:bg-[#5c849e68] hover:border-[#557086]"
                  onClick={() => {
                    const cashoutValue =
                      parseFloat(crashValues?.cashout) || 2.0;
                    if (cashoutValue > 1.01) {
                      dispatch(
                        setCrashValues({
                          ...crashValues,
                          cashout: (cashoutValue - 1.0).toFixed(2),
                        })
                      );
                    }
                  }}
                >
                  <KeyboardArrowDownIcon fontSize="small" />
                </button>
                <Divider
                  flexItem
                  orientation="vertical"
                  sx={{ my: 1.5, backgroundColor: "#1A2c38", width: "2px" }}
                />
                <button
                  className="w-[3.4rem] hover:bg-[#5c849e68] hover:border-[#557086]"
                  onClick={() => {
                    const cashoutValue =
                      parseFloat(crashValues?.cashout) || 2.0;
                    dispatch(
                      setCrashValues({
                        ...crashValues,
                        cashout: (cashoutValue + 1.0).toFixed(2),
                      })
                    );
                  }}
                >
                  <KeyboardArrowUpIcon fontSize="small" />
                </button>
              </div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-xs mt-3 mb-1">
                <label>Profit on Win</label>
                <label>
                  ₹
                  {crashValues?.betamount * crashValues?.cashout
                    ? crashValues?.betamount * crashValues?.cashout
                    : "0.00" || 0}
                </label>
              </div>
              <div className="relative flex">
                {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
              <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
            </div> */}
                <input
                  className="w-full px-2 py-2 rounded-md text-white border-2 hover:border-[#557086] focus:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                  type="text"
                  placeholder="0"
                  value={crashValues?.betamount * crashValues?.cashout || 0}
                  disabled
                />
              </div>
              <div className="flex justify-between mt-3">
                <div className="flex items-center space-x-1 font-semibold">
                  <SupervisorAccountIcon className="text-[#b1bad3]" />
                  <p>{combinedData?.length}</p>
                </div>
                <div className="flex items-center space-x-1 font-semibold">
                  {/* <RiMoneyRupeeCircleFill color="yellow" className="text-xl" /> */}
                  <p>
                    ₹
                    {combinedData
                      ?.reduce((acc, item) => {
                        const amount = item?.amount
                          ? String(item?.amount)
                          : "0";
                        const parsedAmount = parseFloat(
                          amount.replace(/[^0-9.-]+/g, "")
                        );
                        return acc + (isNaN(parsedAmount) ? 0 : parsedAmount);
                      }, 0)
                      .toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="bg-[#0f212e] px-2 py-1 rounded-sm mt-3 overflow-y-auto h-64">
                {combinedData?.length > 0
                  ? combinedData?.map((item, index) => (
                    <div
                      className="flex justify-between fadeIn"
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
                        <div className="flex">
                          {/* <RiMoneyRupeeCircleFill color="yellow" /> */}
                          <div
                            className={`${item.cashoutMultiplier ||
                                item?.multiplier === "-"
                                ? "text-white"
                                : item.cashoutMultiplier < multiplier ||
                                  item?.multiplier < multiplier
                                  ? "text-[#1fff20]"
                                  : "text-white"
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
            <div className="text-xs">
              {isboardControl ? (
                <div>
                  {autoBetOnClick ? (
                    <button
                      className={` bg-[#1fff20] hover:bg-[#42ed45] text-black py-3 rounded font-semibold w-full`}
                      onClick={() => handleOnCancelAutoBet()}
                    >
                      Cancel Autobet
                    </button>
                  ) : (
                    <button
                      className={`${bettingStatus === false
                          ? "bg-[#489649]"
                          : "bg-[#1fff20] hover:bg-[#42ed45]"
                        } text-black py-3 rounded font-semibold w-full`}
                      onClick={() => handleOnAutoBet()}
                    >
                      Start Autobet
                    </button>
                  )}
                  <div className="text-[#b1bad3] flex justify-between font-semibold my-1">
                    <label>Bet Amount</label>
                    <label>
                      ₹
                      {crashValues?.betamount ? crashValues?.betamount : "0.00"}
                    </label>
                  </div>
                  <div className="flex border-1 rounded border-[#2F4553] bg-[#2F4553] group">
                    <div className="relative flex">
                      {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                    <RiMoneyRupeeCircleFill
                      color="yellow"
                      className="text-xl"
                    />
                  </div> */}
                      <input
                        className="w-[16.5rem] pr-1.5 pl-2 py-2.5 rounded-l-md text-white border-2 hover:border-[#557086] group-hover:border-[#557086] focus:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                        type="number"
                        placeholder="0.00"
                        step="0.01"
                        name="betamount"
                        value={
                          betAmount?.amount
                            ? betAmount?.amount
                            : crashValues?.betamount
                        }
                        onChange={(e) => handleOnChange(e)}
                      />
                    </div>
                    <button
                      className="w-[3.4rem] hover:bg-[#5c849e68] text-lg font-bold"
                      onClick={() =>
                        dispatch(
                          setCrashValues({
                            ...crashValues,
                            betamount: crashValues?.betamount / 2,
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
                      className="w-[3.4rem] hover:bg-[#5c849e68] text-sm font-bold"
                      onClick={() =>
                        dispatch(
                          setCrashValues({
                            ...crashValues,
                            betamount: crashValues?.betamount * 2,
                          })
                        )
                      }
                    >
                      2×
                    </button>
                  </div>
                  <div className="text-[#b1bad3] flex justify-between font-semibold mt-3 mb-1">
                    <label>Cashout At</label>
                    <label>Number of Bets</label>
                  </div>
                  <div className="flex justify-center mb-2">
                    <div className="flex border-1 w-full rounded border-[#2F4553] bg-[#2F4553] group">
                      <input
                        className="md:w-36 w-full px-2 py-2.5 rounded-s-md text-white border-2 hover:border-[#557086] focus:border-[#557086] group-hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                        type="number"
                        min={1.01}
                        placeholder="1.01"
                        name="cashout"
                        value={crashValues?.cashout || ""}
                        onChange={(e) => handleOnChange(e)}
                        onBlur={(e) => {
                          if (!e.target.value) {
                            handleOnChange({
                              target: { name: "cashout", value: "2.00" },
                            });
                          }
                        }}
                      />
                      <button
                        className="w-12 hover:bg-[#5c849e68]"
                        onClick={() => {
                          const cashoutValue =
                            parseFloat(crashValues?.cashout) || 2.0;
                          if (cashoutValue > 1.01) {
                            dispatch(
                              setCrashValues({
                                ...crashValues,
                                cashout: (cashoutValue - 1.0).toFixed(2),
                              })
                            );
                          }
                        }}
                      >
                        <KeyboardArrowDownIcon fontSize="small" />
                      </button>
                      <Divider
                        flexItem
                        orientation="vertical"
                        sx={{
                          my: 1.5,
                          backgroundColor: "#1A2c38",
                          width: "2px",
                        }}
                      />
                      <button
                        className="w-12 hover:bg-[#5c849e68]"
                        onClick={() => {
                          const cashoutValue =
                            parseFloat(crashValues?.cashout) || 2.0;
                          dispatch(
                            setCrashValues({
                              ...crashValues,
                              cashout: (cashoutValue + 1.0).toFixed(2),
                            })
                          );
                        }}
                      >
                        <KeyboardArrowUpIcon fontSize="small" />
                      </button>
                    </div>
                    <div className="relative flex space-x-2">
                      <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                        <IoInfiniteSharp className="text-xl" />
                      </div>
                      <input
                        className="md:w-28 w-28 pr-7 pl-2 py-2.5 rounded text-white border-2 hover:border-[#557086] focus:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                        type="number"
                        placeholder="0"
                        min={0}
                        name="numberofbet"
                        value={
                          // crashValues?.numberofbet
                          betAmount?.placedBets
                            ? crashValues?.numberofbet - betAmount?.placedBets
                            : crashValues?.numberofbet
                        }
                        onChange={(e) => handleOnChange(e)}
                      />
                    </div>
                  </div>
                  <label className="text-[#b1bad3] font-semibold text-xs">
                    On win
                  </label>
                  <div className="flex items-center space-x-0.5 mt-1 mb-2 rounded bg-[#2F4553]">
                    <button
                      className={`${onProfit.win
                          ? "bg-[#0F212E] rounded"
                          : "hover:bg-[#85afca68] rounded"
                        } px-5 ml-0.5 py-2.5 rounded-sm`}
                      onClick={() => {
                        setOnProfit({ ...onProfit, win: true });
                        dispatch(setCrashValues({ onwin: "" }));
                      }}
                    >
                      Reset
                    </button>
                    <button
                      className={`${onProfit.win
                          ? "hover:bg-[#85afca68]"
                          : "bg-[#0f212e] rounded-sm"
                        } px-[0.95rem] py-2.5`}
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
                        className="md:w-[11.9rem] w-[9.6rem] pr-7 pl-2 py-2.5 rounded text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                        type="number"
                        placeholder="0"
                        name="onwin"
                        value={crashValues?.onwin}
                        onChange={(e) => handleOnChange(e)}
                        disabled={onProfit.win}
                      />
                    </div>
                  </div>
                  <label className="text-[#b1bad3] font-semibold text-xs">
                    On Lose
                  </label>
                  <div className="flex items-center space-x-0.5 mt-1 rounded bg-[#2F4553]">
                    <div>
                      <button
                        className={`${onProfit.lose
                            ? "bg-[#0f212e] rounded-sm"
                            : "hover:bg-[#85afca68] rounded"
                          } px-5 py-2.5 ml-0.5 rounded-sm`}
                        onClick={() => {
                          setOnProfit({ ...onProfit, lose: true });
                          dispatch(setCrashValues({ onlose: "" }));
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
                          } px-[0.95rem] py-2.5`}
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
                        className="md:w-[11.9rem] w-[9.6rem] pr-7 pl-2 py-2.5 rounded text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                        type="number"
                        placeholder="0"
                        name="onlose"
                        value={crashValues?.onlose}
                        onChange={(e) => handleOnChange(e)}
                        disabled={onProfit.lose}
                      />
                    </div>
                  </div>
                  <div className="text-[#b1bad3] flex justify-between font-semibold text-xs mt-3 mb-1">
                    <label>Stop on Profit</label>
                    <label>
                      ₹
                      {crashValues?.stoponprofit
                        ? crashValues?.stoponprofit
                        : "0.00"}
                    </label>
                  </div>
                  <div className="relative flex">
                    {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                  <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                </div> */}
                    <input
                      className="w-full pr-1.5 px-2 py-2.5 rounded text-white border-2 hover:border-[#557086] focus:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                      type="number"
                      placeholder="0.01"
                      step="0.01"
                      name="stoponprofit"
                      value={crashValues?.stoponprofit}
                      onChange={(e) => handleOnChange(e)}
                    />
                  </div>
                  <div className="text-[#b1bad3] flex justify-between font-semibold text-xs mt-3 mb-1">
                    <label>Stop on Loss</label>
                    <label>
                      ₹
                      {crashValues?.stoponloss
                        ? crashValues?.stoponloss
                        : "0.00"}
                    </label>
                  </div>
                  <div className="relative flex">
                    {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                  <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                </div> */}
                    <input
                      className="w-full pr-1.5 px-2 py-2.5 rounded text-white border-2 hover:border-[#557086] focus:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                      type="number"
                      placeholder="0.01"
                      step="0.01"
                      name="stoponloss"
                      value={crashValues?.stoponloss}
                      onChange={(e) => handleOnChange(e)}
                    />
                  </div>
                  <div className="text-[#b1bad3] flex justify-between font-semibold text-xs mt-3 mb-1">
                    <label>Profit on Win</label>
                    <label>
                      ₹
                      {crashValues?.betamount * crashValues?.cashout
                        ? crashValues?.betamount * crashValues?.cashout
                        : "0.00" || 0}
                    </label>
                  </div>
                  <div className="relative flex">
                    {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                  <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                </div> */}
                    <input
                      className="w-full px-2 py-2.5 rounded text-white border-2 hover:border-[#557086] focus:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                      type="text"
                      placeholder="0"
                      name="profitonwin"
                      value={crashValues?.betamount * crashValues?.cashout || 0}
                      Disabled
                    />
                  </div>
                </div>
              ) : (
                <div>
                  {autoBetOnClick ? (
                    <button
                      className={` bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3.5 py-3 rounded font-semibold w-full`}
                      onClick={() => handleOnCancelAutoBet()}
                    >
                      Cancel Autobet
                    </button>
                  ) : (
                    <button
                      className={`bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3.5 py-3 rounded font-semibold w-full`}
                      onClick={() => handleOnAutoBet()}
                    >
                      Start Autobet
                    </button>
                  )}
                  <div className="flex justify-between mt-3">
                    <div className="flex items-center space-x-1 font-semibold">
                      <SupervisorAccountIcon className="text-[#b1bad3]" />
                      <p>{combinedData?.length}</p>
                    </div>
                    <div className="flex items-center space-x-1 font-semibold">
                      {/* <RiMoneyRupeeCircleFill color="yellow" className="text-xl" /> */}
                      <p>
                        ₹
                        {combinedData
                          ?.reduce((acc, item) => {
                            const amount = item?.amount
                              ? String(item?.amount)
                              : "0";
                            const parsedAmount = parseFloat(
                              amount.replace(/[^0-9.-]+/g, "")
                            );
                            return (
                              acc + (isNaN(parsedAmount) ? 0 : parsedAmount)
                            );
                          }, 0)
                          .toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#0f212e] px-2 py-1 rounded-sm mt-3 text-base overflow-y-auto h-[23rem]">
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
                          <div className="flex items-center">
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
                  <div className="text-[#b1bad3] flex justify-between font-semibold text-xs mt-2 mb-1.5">
                    <label>Profit on Win</label>
                    <label>0.00000000 ₹</label>
                  </div>
                  <div className="relative flex">
                    {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                    <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                    </div> */}
                    <input
                      type="text"
                      className="w-full px-2 py-2 rounded text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                      placeholder="0"
                      name="profitonwin"
                      value={crashValues?.betamount * crashValues?.cashout || 0}
                      disabled
                    />
                  </div>
                </div>
              )}
              <div className="flex justify-center items-center grow p-[5px] flex-shrink-0 mt-2">
                <div className="flex">
                  <button
                    className={`py-3 rounded-s w-[10rem] font-semibold ${isboardControl
                        ? "bg-[#0f212e] text-[#b1bad3]"
                        : "bg-[#4d718768] hover:bg-[#85afca68]"
                      }`}
                    onClick={() => dispatch(BoardControlModel(true))}
                  >
                    Controls
                  </button>
                  <button
                    className={`py-3 rounded-e- w-[10rem] font-semibold ${!isboardControl
                        ? "bg-[#0f212e] text-[#b1bad3]"
                        : "bg-[#4d718768] hover:bg-[#85afca68]"
                      }`}
                    onClick={() => dispatch(BoardControlModel(false))}
                  >
                    Leaderboard
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="flex overflow-x-auto overflow-y-hidden transform translate-z-0 mt-3">
            <div className="bg-[#0f212e] flex grow rounded-full p-[5px] flex-shrink-0">
              <div className="flex space-x-2 w-full">
                <button
                  className={`py-2 rounded-full transition-all ${isSwiper ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                    }
                            xl:w-[8.7rem] lg:w-[4rem] md:w-[10.7rem] w-full`}
                  onClick={() => dispatch(SwiperModel(true))}
                >
                  Manual
                </button>
                <button
                  className={`py-2 rounded-full transition-all ${!isSwiper ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
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
};

export default CrashGameSidebar;
