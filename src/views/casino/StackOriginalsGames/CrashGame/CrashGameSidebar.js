import React, { useEffect, useState } from "react";
import { Divider } from "@mui/material";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { BsIncognito } from "react-icons/bs";
import PercentIcon from "@mui/icons-material/Percent";
import { useDispatch, useSelector } from "react-redux";
import { openRegisterModel } from "../../../../features/auth/authSlice";
import { IoInfiniteSharp } from "react-icons/io5";
import { socket } from "../../../../socket";
import {
  BoardControlModel,
  setBettingStatus,
  setCombinedData,
  setCrashStatus,
  setCrashValues,
  setGameStatusData,
  SwiperModel,
} from "../../../../features/casino/crashSlice";
import {
  decodedToken,
  getRandomNumber,
  shuffleArray,
} from "../../../../resources/utility";
import { generateRandomBetProfit } from "../../../component/GenerateRandomBetProfit";

function CrashGameSidebar() {
  const dispatch = useDispatch();
  const decoded = decodedToken();
  const BetProfit = generateRandomBetProfit();
  const [onProfit, setOnProfit] = useState({ win: true, lose: true });
  const {
    isSwiper,
    isboardControl,
    crashValues,
    gameStatusData,
    bettingStatus,
    combinedData,
  } = useSelector((state) => state.crashGame);

  socket.on("bettingStarted", (data) => {
    dispatch(setBettingStatus(data?.status));
  });
  socket.on("bettingClosed", (data) => {
    dispatch(setBettingStatus(data?.status));
  });
  socket.on("gameStatus", (data) => {
    dispatch(setGameStatusData(data));
  });
  socket.on("gameEnded", (data) => {
    dispatch(setCrashStatus(data));
  });
  socket.on("Insufficientfund", (data) => {
    console.log("dataaaaaa", data);
  });

  useEffect(() => {
    const playersdata = gameStatusData?.players || [];
    const randomizedBetProfit = shuffleArray([...BetProfit]);
    const randomDataLength = getRandomNumber(10, 100);
    const limitedBetProfit = randomizedBetProfit.slice(0, randomDataLength);
    const mergedData = [...limitedBetProfit, ...playersdata];
    if (bettingStatus === true) {
      dispatch(setCombinedData([]));
    } else {
      dispatch(setCombinedData(mergedData));
    }
  }, [bettingStatus === false]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    dispatch(setCrashValues({ ...crashValues, [name]: value }));
  };

  const handleOnManualBet = () => {
    if (!localStorage.getItem("token")) {
      dispatch(openRegisterModel());
    } else {
      socket.emit(
        "placeBet",
        isSwiper === true
          ? {
              userId: decoded?.userId,
              amount: crashValues?.betamount
                ? parseInt(crashValues?.betamount, 10)
                : 0,
              cashoutMultiplier: parseInt(crashValues?.cashout, 10),
              betType: "Manual",
            }
          : {
              userId: decoded?.userId,
              amount: crashValues?.betamount
                ? parseInt(crashValues?.betamount, 10)
                : 0,
              cashoutMultiplier: parseInt(crashValues?.cashout, 10),
              numberOfBets: parseInt(crashValues?.numberofbet, 10),
              onWins: parseInt(crashValues?.onwin, 10),
              onLoss: parseInt(crashValues?.onlose, 10),
              stopOnProfit: parseInt(crashValues?.stoponprofit, 10),
              stopOnLoss: parseInt(crashValues?.stoponloss, 10),
              betType: "Auto",
            }
      );
    }
  };

  return (
    <div className="w-80 flex flex-col p-3 bg-[#213743] rounded-tl-lg">
      <div className="flex overflow-x-auto overflow-y-hidden transform translate-z-0">
        <div className="bg-[#0f212e] flex grow rounded-full p-[5px] flex-shrink-0">
          <div className="flex space-x-2">
            <button
              className={`py-2 w-[8.6rem] rounded-full ${
                isSwiper ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
              }`}
              onClick={() => dispatch(SwiperModel(true))}
            >
              Manual
            </button>
            <button
              className={`py-2 w-[8.6rem] rounded-full ${
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
          <div className="text-[#b1bad3] flex justify-between font-semibold text-xs mt-3 mb-1">
            <label>Bet Amount</label>
            <label>$0.00</label>
          </div>
          <div className="flex border-2 rounded-md border-[#4d718768] bg-[#4d718768]">
            <div className="relative flex">
              <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div>
              <input
                className="w-48 pr-9 pl-2 py-2 rounded-s-md text-white bg-[#0f212e]"
                type="number"
                placeholder="0.00"
                min={0}
                name="betamount"
                value={crashValues?.betamount}
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            <button
              className="w-16 hover:bg-[#5c849e68]"
              onClick={() =>
                dispatch(
                  setCrashValues({
                    ...crashValues,
                    betamount: crashValues?.betamount / 2,
                  })
                )
              }
            >
              1/2
            </button>
            <Divider
              flexItem
              orientation="vertical"
              sx={{ my: 1, backgroundColor: "rgba(0, 0, 0, 0.12)" }}
            />
            <button
              className="w-16 hover:bg-[#5c849e68]"
              onClick={() =>
                dispatch(
                  setCrashValues({
                    ...crashValues,
                    betamount: crashValues?.betamount * 2,
                  })
                )
              }
            >
              2x
            </button>
          </div>
          <div className="text-[#b1bad3] font-semibold text-xs mt-3 mb-1">
            <label>Cashout At</label>
          </div>
          <div className="flex border-2 rounded-md border-[#4d718768] bg-[#4d718768]">
            <input
              className="w-48 px-2 py-2 rounded-s-md text-white bg-[#0f212e]"
              type="number"
              min={1.01}
              placeholder="1.01"
              name="cashout"
              value={crashValues?.cashout}
              onChange={(e) => handleOnChange(e)}
            />
            <button className="w-16 hover:bg-[#5c849e68]">
              <KeyboardArrowDownIcon fontSize="small" />
            </button>
            <Divider
              flexItem
              orientation="vertical"
              sx={{ my: 1, backgroundColor: "rgba(0, 0, 0, 0.12)" }}
            />
            <button className="w-16 hover:bg-[#5c849e68]">
              <KeyboardArrowUpIcon fontSize="small" />
            </button>
          </div>
          <div className="text-[#b1bad3] flex justify-between font-semibold text-xs mt-3 mb-1">
            <label>Profit on Win</label>
            <label>0.00000000 BTC</label>
          </div>
          <div className="relative flex">
            <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
              <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
            </div>
            <input
              className="w-full px-2 py-2 text-white border-2 rounded-md border-[#4d718768] bg-[#0f212e]"
              type="text"
              placeholder="0"
              value={crashValues?.betamount * crashValues?.cashout || 0}
              disabled
            />
          </div>
          <button
            className={`${
              bettingStatus === false
                ? "bg-[#489649]"
                : "bg-[#1fff20] hover:bg-[#42ed45]"
            } text-black mt-3.5 py-3 rounded-md font-semibold w-full`}
            onClick={() => handleOnManualBet()}
            disabled={bettingStatus === false}
          >
            Bet
          </button>
          <div className="flex justify-between mt-3">
            <div className="flex items-center space-x-1 font-semibold">
              <SupervisorAccountIcon className="text-[#b1bad3]" />
              <p>
                {bettingStatus === true
                  ? 0
                  : gameStatusData?.players
                  ? combinedData?.length + gameStatusData?.players?.length
                  : combinedData?.length}
              </p>
            </div>
            <div className="flex items-center space-x-1 font-semibold">
              <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              <p>
                {bettingStatus === true
                  ? 0
                  : gameStatusData?.players
                  ? (
                      combinedData?.reduce((acc, item) => {
                        return (
                          acc +
                          (item?.Money
                            ? parseFloat(item.Money.replace(/[^0-9.-]+/g, ""))
                            : 0)
                        );
                      }, 0) +
                      gameStatusData?.players?.reduce((acc, item) => {
                        return acc + (item?.amount || 0);
                      }, 0)
                    ).toFixed(2)
                  : combinedData
                      ?.reduce((acc, item) => {
                        return (
                          acc +
                          (item?.Money
                            ? parseFloat(item.Money.replace(/[^0-9.-]+/g, ""))
                            : 0)
                        );
                      }, 0)
                      .toFixed(2)}
              </p>
            </div>
          </div>
          <div className="bg-[#0f212e] px-2 py-1 rounded-sm mt-3 overflow-y-auto h-64">
            {combinedData?.map((item, index) => (
              <div className="flex justify-between" key={index}>
                <div className="flex items-center">
                  <BsIncognito />
                  <p className="text-[#b1bad3]">
                    {item.username ? item.username : "Hidden"}
                  </p>
                </div>
                <div>
                  {item.Totalx ? item.Totalx : `${item.cashoutMultiplier}x`}
                </div>
                <div className="flex items-center">
                  {item.CurrenciesMoneyIcon ? (
                    <>
                      {item.CurrenciesMoneyIcon}
                      {item.Money}
                    </>
                  ) : (
                    <div>
                      <RiMoneyRupeeCircleFill color="yellow" />
                      <>₹{item.amount}</>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-xs">
          <div className="flex grow p-[5px] flex-shrink-0 mt-2">
            <div className="flex">
              <button
                className={`py-3 rounded-s-md w-[8.9rem] font-semibold ${
                  isboardControl
                    ? "bg-[#0f212e] text-[#b1bad3]"
                    : "bg-[#4d718768] hover:bg-[#85afca68]"
                }`}
                onClick={() => dispatch(BoardControlModel(true))}
              >
                Controls
              </button>
              <button
                className={`py-3 rounded-e-md w-[8.9rem] font-semibold ${
                  !isboardControl
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
              <div className="text-[#b1bad3] flex justify-between font-semibold my-1">
                <label>Bet Amount</label>
                <label>$0.00</label>
              </div>
              <div className="flex border-2 rounded-md border-[#4d718768] bg-[#4d718768]">
                <div className="relative flex">
                  <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                    <RiMoneyRupeeCircleFill
                      color="yellow"
                      className="text-xl"
                    />
                  </div>
                  <input
                    className="w-48 pr-9 pl-2 py-2.5 rounded-s-md text-white bg-[#0f212e]"
                    type="number"
                    placeholder="0.00"
                    step="0.01"
                    name="betamount"
                    value={crashValues?.betamount}
                    onChange={(e) => handleOnChange(e)}
                  />
                </div>
                <button className="w-16 hover:bg-[#5c849e68]">1/2</button>
                <Divider
                  flexItem
                  orientation="vertical"
                  sx={{ my: 1, backgroundColor: "rgba(0, 0, 0, 0.12)" }}
                />
                <button className="w-16 hover:bg-[#5c849e68]">2x</button>
              </div>
              <div className="text-[#b1bad3] flex justify-between font-semibold mt-3 mb-1">
                <label>Cashout At</label>
                <label>Number of Bets</label>
              </div>
              <div className="flex justify-between mb-2">
                <div className="flex border-2 w-44 rounded-md border-[#4d718768] bg-[#4d718768]">
                  <input
                    className="w-20 px-2 py-2.5 rounded-s-md text-white bg-[#0f212e]"
                    type="number"
                    min={1.01}
                    placeholder="1.01"
                    name="cashout"
                    value={crashValues?.cashout}
                    onChange={(e) => handleOnChange(e)}
                  />
                  <button className="w-12 hover:bg-[#5c849e68]">
                    <KeyboardArrowDownIcon fontSize="small" />
                  </button>
                  <Divider
                    flexItem
                    orientation="vertical"
                    sx={{ my: 1, backgroundColor: "rgba(0, 0, 0, 0.12)" }}
                  />
                  <button className="w-12 hover:bg-[#5c849e68]">
                    <KeyboardArrowUpIcon fontSize="small" />
                  </button>
                </div>
                <div className="relative flex">
                  <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                    <IoInfiniteSharp className="text-xl" />
                  </div>
                  <input
                    className="w-28 pr-7 pl-2 py-2.5 rounded-md  text-white bg-[#0f212e]"
                    type="number"
                    placeholder="0"
                    min={0}
                    name="numberofbet"
                    value={crashValues?.numberofbet}
                    onChange={(e) => handleOnChange(e)}
                  />
                </div>
              </div>
              <label className="text-[#b1bad3] font-semibold text-xs">
                On win
              </label>
              <div className="flex items-center space-x-0.5 border-2 mt-1 mb-2 rounded-md border-[#4d718768] bg-[#4d718768]">
                <button
                  className={`${
                    onProfit.win
                      ? "bg-[#0f212e]"
                      : "bg-[#4d718768] hover:bg-[#85afca68]"
                  } px-5 py-2.5 rounded-md`}
                  onClick={() => {
                    setOnProfit({ ...onProfit, win: true });
                  }}
                >
                  Reset
                </button>
                <button
                  className={`${
                    onProfit.win
                      ? "bg-[#4d718768] hover:bg-[#85afca68]"
                      : "bg-[#0f212e] rounded-md"
                  } px-[0.95rem] py-2.5`}
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
                    className="w-28 pr-7 pl-2 py-2.5 rounded-md text-white bg-[#0f212e]"
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
              <div className="flex items-center space-x-0.5 border-2 mt-1 rounded-md border-[#4d718768] bg-[#4d718768]">
                <div>
                  <button
                    className={`${
                      onProfit.lose
                        ? "bg-[#0f212e]"
                        : "bg-[#4d718768] hover:bg-[#85afca68]"
                    } px-5 py-2.5 rounded-md`}
                    onClick={() => {
                      setOnProfit({ ...onProfit, lose: true });
                    }}
                  >
                    Reset
                  </button>
                </div>
                <div>
                  <button
                    className={`${
                      onProfit.lose
                        ? "bg-[#4d718768] hover:bg-[#85afca68]"
                        : "bg-[#0f212e] rounded-md"
                    } px-[0.95rem] py-2.5`}
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
                    className="w-28 pr-7 pl-2 py-2.5 rounded-md text-white bg-[#0f212e]"
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
                <label>0.00000000 BTC</label>
              </div>
              <div className="relative flex">
                <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                  <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                </div>
                <input
                  className="w-full pr-8 px-2 py-2.5 text-white border-2 rounded-md border-[#4d718768] bg-[#0f212e]"
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
                <label>0.00000001 BTC</label>
              </div>
              <div className="relative flex">
                <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                  <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                </div>
                <input
                  className="w-full pr-8 px-2 py-2.5 text-white border-2 rounded-md border-[#4d718768] bg-[#0f212e]"
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
                <label>0.00000000 BTC</label>
              </div>
              <div className="relative flex">
                <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                  <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                </div>
                <input
                  className="w-full px-2 py-2.5 text-white border-2 rounded-md border-[#4d718768] bg-[#0f212e]"
                  type="text"
                  placeholder="0"
                  name="profitonwin"
                  value={crashValues?.betamount * crashValues?.cashout || 0}
                  disabled
                />
              </div>
              <button
                className={`${
                  bettingStatus === false
                    ? "bg-[#489649]"
                    : "bg-[#1fff20] hover:bg-[#42ed45]"
                } text-black mt-3 py-3 rounded-md font-semibold w-full`}
                onClick={() => handleOnManualBet()}
                disabled={bettingStatus === false}
              >
                Start Autobet
              </button>
            </div>
          ) : (
            <div>
              <div className="flex justify-between mt-3">
                <div className="flex items-center space-x-1 font-semibold">
                  <SupervisorAccountIcon className="text-[#b1bad3]" />
                  <p>
                    {bettingStatus === true
                      ? 0
                      : gameStatusData?.players
                      ? combinedData?.length + gameStatusData?.players?.length
                      : combinedData?.length}
                  </p>
                </div>
                <div className="flex items-center space-x-1 font-semibold">
                  <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                  <p>
                    {bettingStatus === true
                      ? 0
                      : gameStatusData?.players
                      ? (
                          combinedData?.reduce((acc, item) => {
                            return (
                              acc +
                              (item?.Money
                                ? parseFloat(
                                    item.Money.replace(/[^0-9.-]+/g, "")
                                  )
                                : 0)
                            );
                          }, 0) +
                          gameStatusData?.players?.reduce((acc, item) => {
                            return acc + (item?.amount || 0);
                          }, 0)
                        ).toFixed(2)
                      : combinedData
                          ?.reduce((acc, item) => {
                            return (
                              acc +
                              (item?.Money
                                ? parseFloat(
                                    item.Money.replace(/[^0-9.-]+/g, "")
                                  )
                                : 0)
                            );
                          }, 0)
                          .toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="bg-[#0f212e] px-2 py-1 rounded-sm mt-3 text-base overflow-y-auto h-[23rem]">
                {combinedData?.map((item, index) => (
                  <div className="flex justify-between" key={index}>
                    <div className="flex items-center">
                      <BsIncognito />
                      <p className="text-[#b1bad3]">
                        {item.username ? item.username : "Hidden"}
                      </p>
                    </div>
                    <div>
                      {item.Totalx ? item.Totalx : `${item.cashoutMultiplier}x`}
                    </div>
                    <div className="flex items-center">
                      {item.CurrenciesMoneyIcon ? (
                        <>
                          {item.CurrenciesMoneyIcon}
                          {item.Money}
                        </>
                      ) : (
                        <div>
                          <RiMoneyRupeeCircleFill color="yellow" />
                          <>₹{item.amount}</>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-xs mt-2 mb-1.5">
                <label>Profit on Win</label>
                <label>0.00000000 BTC</label>
              </div>
              <div className="relative flex">
                <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                  <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                </div>
                <input
                  type="text"
                  className="w-full px-2 py-2 text-white border-2 rounded-md border-[#4d718768] bg-[#0f212e]"
                  placeholder="0"
                  name="profitonwin"
                  value={crashValues?.betamount * crashValues?.cashout || 0}
                  disabled
                />
              </div>
              <button
                className={`${
                  bettingStatus === false
                    ? "bg-[#489649]"
                    : "bg-[#1fff20] hover:bg-[#42ed45]"
                } text-black mt-3.5 py-3 rounded-md font-semibold w-full`}
              >
                Start Autobet
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CrashGameSidebar;
