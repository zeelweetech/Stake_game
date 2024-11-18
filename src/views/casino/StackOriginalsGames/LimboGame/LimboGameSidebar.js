import React, { useEffect, useState } from "react";
import {
  setStopAutoBet,
  setValues,
  SwiperModel,
} from "../../../../features/casino/limboSlice";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { Divider } from "@mui/material";
import { IoInfiniteSharp } from "react-icons/io5";
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
  const { isSwiper, values, limboStatusData, stopAutoBet } = useSelector(
    (state) => state.limboGame
  );
  const [onProfit, setOnProfit] = useState({ win: true, lose: true });

  useEffect(() => {
    GetWalletData();
  }, []);

  const GetWalletData = async () => {
    await getWallet({ id: decoded?.userId })
      .then((res) => {
        dispatch(setWallet(res?.currentAmount));
      })
      .catch((err) => { });
  };

  LimboSocket.on("Insufficientfund", (data) => {
    toast.error(data?.message);
  });
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
      dispatch(
        setValues({
          betamount: "",
        })
      );
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
        autoBetCount: values?.numberofbet
          ? parseInt(values?.numberofbet, 10)
          : 1,
        onWins: parseInt(values?.onwin, 10),
        onLoss: parseInt(values?.onlose, 10),
        stopOnProfit: parseInt(values?.stoponprofit, 10),
        stopOnLoss: parseInt(values?.stoponloss, 10),
        betType: "Auto",
      });
      dispatch(setStopAutoBet(true));
      dispatch(
        setValues({
          betamount: "",
          autoBetCount: "",
          onWins: "",
          onLoss: "",
          stopOnProfit: "",
          stopOnLoss: "",
        })
      );
    }
  };

  const handleOnStopAutoBet = () => {
    console.log("%%%%%%%");
    LimboSocket.emit("stopAutoBet", { userId: decoded?.userId });
    dispatch(setStopAutoBet(false));
  };

  return (
    <div className="xl:w-80 xl:mx-0 lg:w-[16.8rem] lg:mx-0 md:mx-40 max-sm:mx-3 flex flex-col p-3 bg-[#213743] rounded-b-lg">
      <div className="flex overflow-x-auto overflow-y-hidden transform translate-z-0">
        <div className="bg-[#0f212e] flex grow rounded-full p-[5px] flex-shrink-0">
          <div className="flex space-x-2">
            <button
              className={`py-2 xl:w-[8.8rem] lg:w-[7.5rem] md:w-[10.7rem] w-[11rem] rounded-full ${isSwiper ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                }`}
              onClick={() => dispatch(SwiperModel(true))}
            >
              Manual
            </button>
            <button
              className={`py-2 xl:w-[8.6rem] lg:w-[6.68rem] md:w-[11rem] w-[10.3rem] rounded-full ${!isSwiper ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
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
          <div className="text-[#b1bad3] flex justify-between font-semibold mt-3 mb-1">
            <label>Bet Amount</label>
            <label>₹{values?.betamount ? values?.betamount : '0.00'}</label>
          </div>
          <div className="flex border-2 rounded-md border-[#4d718768] bg-[#4d718768]">
            <div className="relative flex">
              <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div>
              <input
                className="xl:w-48 lg:w-40 md:w-72 max-sm:w-[15rem] max-[320px]:w-[12rem] pr-9 pl-2 py-2 rounded-s-md text-white bg-[#0f212e]"
                type="number"
                placeholder="0.00"
                min={0}
                name="betamount"
                value={values?.betamount}
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            <button
              className="w-16 hover:bg-[#5c849e68]"
              onClick={() =>
                dispatch(
                  setValues({
                    ...values,
                    betamount: values?.betamount / 2,
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
                  setValues({
                    ...values,
                    betamount: values?.betamount * 2,
                  })
                )
              }
            >
              2x
            </button>
          </div>
          <div className="text-[#b1bad3] flex justify-between font-semibold text-xs mt-3 mb-1">
            <label>Profit on Win</label>
            <label>₹{values?.betamount * (values?.multiplier) ? values?.betamount * (values?.multiplier) : '0.00'}</label>
          </div>
          <div className="relative flex">
            <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
              <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
            </div>
            <input
              className="w-full px-2 py-2 text-white border-2 rounded-md border-[#4d718768] bg-[#0f212e]"
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
        <div className="text-xs">
          <div>
            <div className="text-[#b1bad3] flex justify-between font-semibold mt-3 mb-1">
              <label>Bet Amount</label>
              <label>₹{values?.betamount ? values?.betamount : '0.00'}</label>
            </div>
            <div className="flex border-2 rounded-md border-[#4d718768] bg-[#4d718768] ">
              <div className="relative flex">
                <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                  <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                </div>
                <input
                  className="xl:w-48 lg:w-40 md:w-72 sm:w-0 max-[425px]:w-72 max-[375px]:w-64 max-[320px]:w-48 pr-9 pl-2 py-3 rounded-s-md text-xs text-white bg-[#0f212e]"
                  type="number"
                  placeholder="0.00"
                  step="0.01"
                  name="betamount"
                  value={values?.betamount}
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
              <button
                className="w-16 hover:bg-[#5c849e68]"
                onClick={() =>
                  dispatch(
                    setValues({
                      ...values,
                      betamount: values?.betamount / 2,
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
                    setValues({
                      ...values,
                      betamount: values?.betamount * 2,
                    })
                  )
                }
              >
                2x
              </button>
            </div>
            <div className="text-[#b1bad3] font-semibold mt-3 mb-1">
              <label>Number of Bets</label>
            </div>
            <div className="flex justify-between rounded-md border-2 border-[#4d718768] bg-[#4d718768] mb-2 ">
              <div className="relative flex">
                <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                  <IoInfiniteSharp className="text-xl" />
                </div>
                <input
                  className="xl:w-[18.2rem] lg:w-[15rem] md:w-[22.5rem] max-sm:w-[23.1rem] max-[375px]:w-[20rem] max-[320px]:w-[16.5rem] pr-7 pl-2 py-2.5 rounded-md  text-white bg-[#0f212e]"
                  type="number"
                  placeholder="0"
                  min={0}
                  name="numberofbet"
                  value={
                    limboStatusData?.autoBetRound ? limboStatusData?.autoBetRound : values?.numberofbet
                  }
                  onChange={(e) => handleOnChange(e)}
                // disabled={limboStatusData?.autoBetRound}
                />
              </div>
            </div>
            <label className="text-[#b1bad3] font-semibold text-xs">
              On win
            </label>
            <div className="flex items-center space-x-0.5 border-2 mt-1 mb-2 rounded-md border-[#4d718768] bg-[#4d718768]">
              <button
                className={`${onProfit.win
                  ? "bg-[#0f212e]"
                  : "bg-[#4d718768] hover:bg-[#85afca68]"
                  } px-5 py-2.5 rounded-md`}
                onClick={() => {
                  setOnProfit({ ...onProfit, win: true });
                  dispatch(setValues({ onwin: '' }))
                }}
              >
                Reset
              </button>
              <button
                className={`${onProfit.win
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
                className={`relative flex ${onProfit.win
                  ? "opacity-50 pointer-events-none cursor-not-allowed"
                  : ""
                  }`}
              >
                <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                  <PercentIcon fontSize="small" />
                </div>
                <input
                  className="xl:w-[7.9rem] lg:w-[4.7rem] md:w-[12.2rem] max-sm:w-[12.8rem] max-[375px]:w-[9.6rem] max-[320px]:w-[6.2rem] pr-7 pl-2 py-2.5 rounded-md text-white bg-[#0f212e]"
                  type="number"
                  placeholder="0"
                  name="onwin"
                  value={values?.onwin}
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
                  className={`${onProfit.lose
                    ? "bg-[#0f212e]"
                    : "bg-[#4d718768] hover:bg-[#85afca68]"
                    } px-5 py-2.5 rounded-md`}
                  onClick={() => {
                    setOnProfit({ ...onProfit, lose: true });
                    dispatch(setValues({ onlose: '' }))
                  }}
                >
                  Reset
                </button>
              </div>
              <div>
                <button
                  className={`${onProfit.lose
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
                className={`relative flex ${onProfit.lose
                  ? "opacity-50 pointer-events-none cursor-not-allowed"
                  : ""
                  }`}
              >
                <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                  <PercentIcon fontSize="small" />
                </div>
                <input
                  className="xl:w-[7.9rem] lg:w-[4.7rem]  md:w-[12.2rem] max-sm:w-[12.8rem] max-[375px]:w-[9.6rem]  max-[320px]:w-[6.2rem]  pr-7 pl-2 py-2.5 rounded-md border-1 text-white bg-[#0f212e]"
                  type="number"
                  placeholder="0"
                  name="onlose"
                  value={values?.onlose}
                  onChange={(e) => handleOnChange(e)}
                  disabled={onProfit.lose}
                />
              </div>
            </div>
            <div className="text-[#b1bad3] flex justify-between font-semibold text-xs mt-3 mb-1">
              <label>Stop on Profit</label>
              <label>₹{values?.stoponprofit ? values?.stoponprofit : '0.00'}</label>
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
                value={values?.stoponprofit}
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            <div className="text-[#b1bad3] flex justify-between font-semibold text-xs mt-3 mb-1">
              <label>Stop on Loss</label>
              <label>₹{values?.stoponloss ? values?.stoponloss : '0.00'}</label>
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
                onClick={() => handleOnAutoBet()}
              >
                Start Autobet
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default LimboGameSidebar;
