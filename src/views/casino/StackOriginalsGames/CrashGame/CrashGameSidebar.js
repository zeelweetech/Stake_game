import { Divider } from "@mui/material";
import React, { useState } from "react";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { RiMoneyCnyCircleFill } from "react-icons/ri";
import { BsIncognito } from "react-icons/bs";
import { VscLink } from "react-icons/vsc";
import PercentIcon from "@mui/icons-material/Percent";
import { useDispatch } from "react-redux";
import { openRegisterModel } from "../../../../features/auth/authSlice";

function CrashGameSidebar() {
  const dispatch = useDispatch();
  const [isManual, setIsManual] = useState(true);
  const [autoControlMode, setAutoControlMode] = useState(true);
  const [onProfit, setOnProfit] = useState({ win: true, lose: true });

  const BetProfit = [
    {
      Totalx: "2.32x",
      CurrenciesMoneyIcon: <RiMoneyRupeeCircleFill color="yellow" />,
      Money: "₹58,000.06",
    },
    {
      Totalx: "1.27x",
      CurrenciesMoneyIcon: <RiMoneyDollarCircleFill color="orange" />,
      Money: "₹88,000.65",
    },
    {
      Totalx: "-",
      CurrenciesMoneyIcon: <RiMoneyRupeeCircleFill color="yellow" />,
      Money: "₹28,000.06",
    },
    {
      Totalx: "3.75x",
      CurrenciesMoneyIcon: <RiMoneyPoundCircleFill color="green" />,
      Money: "₹34,000.06",
    },
    {
      Totalx: "0.84x",
      CurrenciesMoneyIcon: <RiMoneyCnyCircleFill color="#3277a8" />,
      Money: "₹12,000.06",
    },
    {
      Totalx: "-",
      CurrenciesMoneyIcon: <RiMoneyPoundCircleFill color="green" />,
      Money: "₹86,000.10",
    },
    {
      Totalx: "2.00x",
      CurrenciesMoneyIcon: <RiMoneyCnyCircleFill color="#3277a8" />,
      Money: "₹43,000.05",
    },
    {
      Totalx: "1.56x",
      CurrenciesMoneyIcon: <RiMoneyDollarCircleFill color="orange" />,
      Money: "₹67,000.09",
    },
    {
      Totalx: "0.84x",
      CurrenciesMoneyIcon: <RiMoneyCnyCircleFill color="#3277a8" />,
      Money: "₹12,000.06",
    },
    {
      Totalx: "-",
      CurrenciesMoneyIcon: <RiMoneyDollarCircleFill color="orange" />,
      Money: "₹86,000.10",
    },
    {
      Totalx: "2.00x",
      CurrenciesMoneyIcon: <RiMoneyCnyCircleFill color="#3277a8" />,
      Money: "₹43,000.05",
    },
    {
      Totalx: "1.56x",
      CurrenciesMoneyIcon: <RiMoneyRupeeCircleFill color="yellow" />,
      Money: "₹67,000.09",
    },
    {
      Totalx: "0.84x",
      CurrenciesMoneyIcon: <RiMoneyCnyCircleFill color="#3277a8" />,
      Money: "₹12,000.06",
    },
    {
      Totalx: "-",
      CurrenciesMoneyIcon: <RiMoneyPoundCircleFill color="green" />,
      Money: "₹86,000.10",
    },
    {
      Totalx: "2.00x",
      CurrenciesMoneyIcon: <RiMoneyDollarCircleFill color="orange" />,
      Money: "₹43,000.05",
    },
    {
      Totalx: "1.56x",
      CurrenciesMoneyIcon: <RiMoneyRupeeCircleFill color="yellow" />,
      Money: "₹67,000.09",
    },
  ];

  return (
    <div className="w-80 flex flex-col p-3 bg-[#213743] rounded-tl-lg">
      <div className="flex overflow-x-auto overflow-y-hidden transform translate-z-0">
        <div className="bg-[#0f212e] flex grow rounded-full p-[5px] flex-shrink-0">
          <div className="flex space-x-2">
            <button
              className={`py-2 w-[8.6rem] rounded-full ${
                isManual ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
              }`}
              onClick={() => setIsManual(true)}
            >
              Manual
            </button>
            <button
              className={`py-2 w-[8.6rem] rounded-full ${
                !isManual ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
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
                type="number"
                placeholder="0.00"
                min={0}
                className="w-48 pr-9 pl-2 py-2 rounded-s-md text-white bg-[#0f212e]"
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
          <div className="text-[#b1bad3] font-semibold text-xs mt-3 mb-1">
            <label>Cashout At</label>
          </div>
          <div className="flex border-2 rounded-md border-[#4d718768] bg-[#4d718768]">
            <input
              type="number"
              min={1.01}
              placeholder="1.01"
              className="w-48 px-2 py-2 rounded-s-md text-white bg-[#0f212e]"
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
              type="text"
              value={0.0}
              className="w-full px-2 py-2 text-white border-2 rounded-md border-[#4d718768] bg-[#0f212e]"
            />
          </div>
          <button
            className="bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3.5 py-3 rounded-md font-semibold w-full"
            onClick={() => {
              if (!localStorage.getItem("token")) {
                dispatch(openRegisterModel());
              }
            }}
          >
            Bet
          </button>
          <div className="flex justify-between mt-3">
            <div className="flex items-center space-x-1 font-semibold">
              <SupervisorAccountIcon className="text-[#b1bad3]" />
              <p>320</p>
            </div>
            <div className="flex items-center space-x-1 font-semibold">
              <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              <p>₹2,71,354.66</p>
            </div>
          </div>
          <div className="bg-[#0f212e] px-2 py-1 rounded-sm mt-3 overflow-y-auto h-64">
            {BetProfit.map((profitData) => (
              <div className="flex justify-between">
                <div className="flex items-center">
                  <BsIncognito />
                  <p className="text-[#b1bad3]">Hidden</p>
                </div>
                <div>{profitData?.Totalx}</div>
                <div className="flex items-center">
                  {profitData?.CurrenciesMoneyIcon}
                  {profitData?.Money}
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
                  autoControlMode
                    ? "bg-[#0f212e] text-[#b1bad3]"
                    : "bg-[#4d718768] hover:bg-[#85afca68]"
                }`}
                onClick={() => setAutoControlMode(true)}
              >
                Controls
              </button>
              <button
                className={`py-3 rounded-e-md w-[8.9rem] font-semibold ${
                  !autoControlMode
                    ? "bg-[#0f212e] text-[#b1bad3]"
                    : "bg-[#4d718768] hover:bg-[#85afca68]"
                }`}
                onClick={() => setAutoControlMode(false)}
              >
                Leaderboard
              </button>
            </div>
          </div>
          {autoControlMode ? (
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
                    type="number"
                    placeholder="0.00"
                    step="0.01"
                    className="w-48 pr-9 pl-2 py-2.5 rounded-s-md text-white bg-[#0f212e]"
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
                    type="number"
                    min={1.01}
                    placeholder="1.01"
                    className="w-20 px-2 py-2.5 rounded-s-md text-white bg-[#0f212e]"
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
                    <VscLink className="text-xl" />
                  </div>
                  <input
                    type="number"
                    placeholder="0"
                    min={0}
                    className="w-28 pr-7 pl-2 py-2.5 rounded-md  text-white bg-[#0f212e]"
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
                    type="number"
                    placeholder="0"
                    className="w-28 pr-7 pl-2 py-2.5 rounded-md text-white bg-[#0f212e]"
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
                    type="number"
                    placeholder="0"
                    className="w-28 pr-7 pl-2 py-2.5 rounded-md text-white bg-[#0f212e]"
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
                  type="number"
                  placeholder="0.01"
                  step="0.01"
                  className="w-full pr-8 px-2 py-2.5 text-white border-2 rounded-md border-[#4d718768] bg-[#0f212e]"
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
                  type="number"
                  placeholder="0.01"
                  step="0.01"
                  className="w-full pr-8 px-2 py-2.5 text-white border-2 rounded-md border-[#4d718768] bg-[#0f212e]"
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
                  type="text"
                  value={0.0}
                  className="w-full px-2 py-2.5 text-white border-2 rounded-md border-[#4d718768] bg-[#0f212e]"
                />
              </div>
              <button
                className="bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3 py-3 rounded-md font-semibold w-full"
                onClick={() => {
                  if (!localStorage.getItem("token")) {
                    dispatch(openRegisterModel());
                  }
                }}
              >
                Start Autobet
              </button>
            </div>
          ) : (
            <div>
              <div className="flex justify-between mt-3">
                <div className="flex items-center space-x-1 font-semibold">
                  <SupervisorAccountIcon className="text-[#b1bad3]" />
                  <p>371</p>
                </div>
                <div className="flex items-center space-x-1 font-semibold">
                  <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                  <p>₹1,71,054.12</p>
                </div>
              </div>
              <div className="bg-[#0f212e] px-2 py-1 rounded-sm mt-3 text-base overflow-y-auto h-[23rem]">
                {BetProfit.map((profitData) => (
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <BsIncognito />
                      <p className="text-[#b1bad3]">Hidden</p>
                    </div>
                    <div>{profitData?.Totalx}</div>
                    <div className="flex items-center">
                      {profitData?.CurrenciesMoneyIcon}
                      {profitData?.Money}
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
                  value={0.0}
                  className="w-full px-2 py-2 text-white border-2 rounded-md border-[#4d718768] bg-[#0f212e]"
                />
              </div>
              <button className="bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3.5 py-3 rounded-md font-semibold w-full">
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
