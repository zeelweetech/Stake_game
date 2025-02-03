import React, { useState, useEffect } from "react";
import { Divider } from "@mui/material";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoInfiniteSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { openRegisterModel } from "../../../../features/auth/authSlice";
import {
  setCompleteBetStatus,
  setFinalMultiplier,
  setStopAutoBet,
  setValues,
} from "../../../../features/casino/plinkoSlice";
// import { PlinkoSocket } from "../../../../socket";
import { decodedToken } from "../../../../resources/utility";
import toast from "react-hot-toast";

function PlinkoGameSidebar({ plinkoGameSocket }) {
  const dispatch = useDispatch();
  const decoded = decodedToken();
  const [isManual, setIsManual] = useState(true);
  const [isMdScreen, setIsMdScreen] = useState(false);
  const [responsiveMobile, setResponsiveMobile] = useState(window.innerWidth);
  const {
    values = { betamount: "", risk: "medium", rows: 16, numberofbets: "" },
    stopAutoBet,
    completeBetStatus,
    finalMultiplier,
  } = useSelector((state) => state.plinkoGame);

  useEffect(() => {
    const handleResize = () => setResponsiveMobile(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const mdQuery = window.matchMedia(
      "(min-width: 768px) and (max-width: 1023px)"
    );

    const handleScreenChange = () => {
      setIsMdScreen(mdQuery.matches);
    };
    handleScreenChange();
    mdQuery.addListener(handleScreenChange);

    return () => {
      mdQuery.removeListener(handleScreenChange);
    };
  }, []);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    dispatch(setValues({ ...values, [name]: value }));
  };

  const handleOnBet = (name) => {
    if (!localStorage.getItem("token")) {
      dispatch(openRegisterModel());
    } else {
      plinkoGameSocket.emit("plinkoPlaceBet", {
        userId: decoded.userId,
        betAmount: values?.betamount ? values?.betamount : 0,
        rows: values?.rows,
        riskLevel: values?.risk,
        autoBetCount:
          name === "autoBet" && finalMultiplier?.remainingBets === 1
            ? values?.numberofbets || ""
            : finalMultiplier?.remainingBets
              ? parseInt(finalMultiplier?.remainingBets) - 1
              : values?.numberofbets,
      });
      dispatch(setCompleteBetStatus(true));
      if (name === "manualBet") {
      } else if (name === "autoBet") {
        dispatch(setStopAutoBet(true));
        // dispatch(setValues({ numberofbets: "" }))
      }
    }
  };

  const handleOnStopAutoBet = () => {
    plinkoGameSocket.emit("stopAutoBet", { userId: decoded?.userId });
    dispatch(setStopAutoBet(false));
    dispatch(setCompleteBetStatus(false));
  };

  return (
    <div>
      {responsiveMobile > 768 ? (
        <div
          className={`ml-2 max-sm:mr-2 xl:w-80 lg:w-[16.8rem] flex flex-col p-3 bg-[#213743] ${isMdScreen ? "md:mx-40" : "md:mx-0 rounded-tl-lg"
            } `}
        >
          <div className="flex overflow-x-auto overflow-y-hidden transform translate-z-0">
            <div className="bg-[#0f212e] flex grow rounded-full p-[4px] flex-shrink-0">
              <div className="flex space-x-2">
                <button
                  className={`py-2 xl:w-[8.7rem] lg:w-[7.1rem] md:w-[10.4rem] w-[10.4rem] rounded-full ${isManual ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                    }`}
                  onClick={() => setIsManual(true)}
                >
                  Manual
                </button>
                <button
                  className={`py-2 xl:w-[8.8rem] lg:w-[7.2rem] md:w-[11.4rem] w-[10.4rem] rounded-full ${!isManual ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
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
              <div className=" text-[#b1bad3] flex justify-between font-semibold my-1 select-none">
                <label>Bet Amount</label>
                <label>₹{values?.betamount ? values?.betamount : "0.00"}</label>
              </div>
              <div className="flex border-1 rounded border-[#4d718768] bg-[#4d718768] group">
                <div className="relative flex">
                  {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl " />
              </div> */}
                  <input
                    type="number"
                    placeholder="0.00"
                    min={0}
                    name="betamount"
                    value={values?.betamount}
                    onChange={(e) => handleOnChange(e)}
                    className={`xl:w-48 lg:w-36 pr-1.5 pl-2 py-2 md:w-[13rem] sm:w-[10rem] w-60 rounded-l text-white border-2 hover:border-[#557086] focus:hover:border-[#557086] group-hover:border-[#557086] border-[#2F4553] focus:border-[#557086] bg-[#0f212e] focus:outline-none ${completeBetStatus && "cursor-not-allowed"
                      }`}
                    disabled={completeBetStatus}
                  />
                </div>
                <button
                  className={`w-16 text-sm font-bold hover:bg-[#5c849e68] hover:border-[#557086] ${completeBetStatus && "cursor-not-allowed"
                    }`}
                  onClick={() =>
                    dispatch(
                      setValues({
                        ...values,
                        betamount: values?.betamount / 2,
                      })
                    )
                  }
                  disabled={completeBetStatus}
                >
                  ½
                </button>
                <Divider
                  flexItem
                  orientation="vertical"
                  sx={{ my: 1.5, backgroundColor: "#1A2c38", width: "2px" }}
                />
                <button
                  className={`w-16 text-base hover:bg-[#5c849e68] hover:border-[#557086] hover:rounded-r ${completeBetStatus && "cursor-not-allowed"
                    }`}
                  onClick={() =>
                    dispatch(
                      setValues({
                        ...values,
                        betamount: values?.betamount * 2,
                      })
                    )
                  }
                  disabled={completeBetStatus}
                >
                  2×
                </button>
              </div>
              <div className="text-[#b1bad3] font-semibold text-m mt-3 mb-1 select-none">
                <label>Risk </label>
              </div>
              <div className="flex relative">
                <select
                  type="select"
                  name="risk"
                  value={values?.risk}
                  onChange={(e) => handleOnChange(e)}
                  className={`w-full px-2 py-2 border-2 rounded border-[#4d718768] bg-[#0f212e] 
                        hover:border-[#557086] focus:border-[#557086] focus:outline-none ${completeBetStatus && "cursor-not-allowed"
                    }`}
                  disabled={completeBetStatus}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-m mt-3 mb-1 select-none">
                <label>Rows</label>
              </div>
              <div className="relative flex">
                <select
                  type="select"
                  name="rows"
                  value={values?.rows}
                  onChange={(e) => handleOnChange(e)}
                  className={`w-full px-2 py-2 border-2 rounded border-[#4d718768] bg-[#0f212e] 
                        hover:border-[#557086] focus:border-[#557086] focus:outline-none ${completeBetStatus && "cursor-not-allowed"
                    }`}
                  disabled={completeBetStatus}
                >
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                  <option value={13}>13</option>
                  <option value={14}>14</option>
                  <option value={15}>15</option>
                  <option value={16}>16</option>
                </select>
              </div>
              <button
                className="bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3.5 py-3 rounded font-semibold w-full"
                onClick={() => {
                  handleOnBet("manualBet");
                }}
              >
                Bet
              </button>
            </div>
          ) : (
            <div>
              <div>
                <div className="text-[#b1bad3] flex justify-between font-semibold my-1 select-none">
                  <label>Bet Amount</label>
                  <label>
                    ₹{values?.betamount ? values?.betamount : "0.00"}
                  </label>
                </div>
                <div className="flex border-1 rounded border-[#4d718768] bg-[#4d718768] group">
                  <div className="relative flex">
                    {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                  <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                </div> */}
                    <input
                      type="number"
                      placeholder="0.00"
                      step="0.01"
                      min={0}
                      name="betamount"
                      value={values?.betamount}
                      onChange={(e) => handleOnChange(e)}
                      className={`w-48 pr-1.5 pl-2 py-2 rounded-l text-white border-2 hover:border-[#557086] focus:hover:border-[#557086] group-hover:border-[#557086] border-[#2F4553] focus:border-[#557086] bg-[#0f212e] focus:outline-none ${completeBetStatus && "cursor-not-allowed"
                        }`}
                      disabled={completeBetStatus}
                    />
                  </div>
                  <button
                    className={`w-16 text-sm font-bold hover:bg-[#5c849e68] hover:border-[#557086] ${completeBetStatus && "cursor-not-allowed"
                      }`}
                    onClick={() =>
                      dispatch(
                        setValues({
                          ...values,
                          betamount: values?.betamount / 2,
                        })
                      )
                    }
                    disabled={completeBetStatus}
                  >
                    ½
                  </button>
                  <Divider
                    flexItem
                    orientation="vertical"
                    sx={{ my: 1.5, backgroundColor: "#1A2c38", width: "2px" }}
                  />
                  <button
                    className={`w-16 text-base hover:bg-[#5c849e68] hover:border-[#557086] hover:rounded-r`}
                    onClick={() =>
                      dispatch(
                        setValues({
                          ...values,
                          betamount: values?.betamount * 2,
                        })
                      )
                    }
                    disabled={completeBetStatus}
                  >
                    2×
                  </button>
                </div>
                <div className="text-[#b1bad3] font-semibold text-m mt-3 mb-1 select-none">
                  <label>Risk</label>
                </div>
                <div className="flex relative">
                  <select
                    type="select"
                    name="risk"
                    value={values?.risk}
                    onChange={(e) => handleOnChange(e)}
                    className={`w-full px-2 py-2 border-2 rounded border-[#4d718768] bg-[#0f212e] 
                        hover:border-[#557086] focus:border-[#557086] focus:outline-none`}
                    disabled={completeBetStatus}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                <div className="text-[#b1bad3] flex justify-between font-semibold text-m mt-3 mb-1 select-none">
                  <label>Rows</label>
                </div>
                <div className="relative flex">
                  <select
                    type="select"
                    name="rows"
                    value={values?.rows}
                    onChange={(e) => handleOnChange(e)}
                    className={`w-full px-2 py-2 border-2 rounded border-[#4d718768] bg-[#0f212e] 
                        hover:border-[#557086] focus:border-[#557086] focus:outline-none`}
                    disabled={completeBetStatus}
                  >
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                    <option value={13}>13</option>
                    <option value={14}>14</option>
                    <option value={15}>15</option>
                    <option value={16}>16</option>
                  </select>
                </div>
                <div className="text-[#b1bad3] justify-between font-semibold mt-3 mb-1 select-none">
                  <label>Number of Bets</label>
                </div>
                <div className="justify-between mb-2">
                  <div className="relative flex">
                    <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                      <IoInfiniteSharp className="text-xl" />
                    </div>
                    <input
                      type="number"
                      placeholder="0"
                      min={0}
                      name="numberofbets"
                      value={
                        finalMultiplier?.remainingBets === 1
                          ? values?.numberofbets || ""
                          : finalMultiplier?.remainingBets
                            ? parseInt(finalMultiplier?.remainingBets) - 1
                            : values?.numberofbets
                      }
                      onChange={(e) => handleOnChange(e)}
                      className={`w-full pr-7 pl-2 py-2.5 rounded text-white border-2 hover:border-[#557086] focus:hover:border-[#557086] group-hover:border-[#557086] border-[#2F4553] focus:border-[#557086] bg-[#0f212e] focus:outline-none`}
                      disabled={completeBetStatus}
                    />
                  </div>
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
                    className="bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3 py-3 rounded-md font-semibold w-full"
                    onClick={() =>
                      values?.numberofbets === "" || 0
                        ? toast.error("Please enter a number of bets")
                        : handleOnBet("autoBet")
                    }
                  >
                    Start Autobet
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      ) : null}

      {responsiveMobile <= 768 ? (
        <div
          className={` max-sm:mx-3 xl:w-80 lg:w-[16.8rem] flex flex-col p-2 bg-[#213743] ${isMdScreen ? "md:-ml-[0rem]" : ""
            } `}
        >
          {isManual ? (
            <div>
              <div className=" text-[#b1bad3] flex justify-between font-semibold text-m mt-3 mb-1 select-none">
                <label>Bet Amount</label>
                <label>₹{values?.betamount ? values?.betamount : "0.00"}</label>
              </div>
              <div className="flex rounded border-[#4d718768] bg-[#4d718768] group">
                <div className="relative flex">
                  {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                      <RiMoneyRupeeCircleFill color="yellow" className="text-xl " />
                    </div> */}
                  <input
                    type="number"
                    placeholder="0.00"
                    min={0}
                    name="betamount"
                    value={values?.betamount}
                    onChange={(e) => handleOnChange(e)}
                    className={`xl:w-48 lg:w-36 pr-1.5 pl-2 py-2 md:w-[16rem] sm:w-[10rem] w-64 rounded-l text-white border-2 hover:border-[#557086] focus:hover:border-[#557086] group-hover:border-[#557086] border-[#2F4553] focus:border-[#557086] bg-[#0f212e] focus:outline-none ${completeBetStatus && "cursor-not-allowed"
                      }`}
                    disabled={completeBetStatus}
                  />
                </div>
                <button
                  className={`w-16 text-xs hover:bg-[#5c849e68] ${completeBetStatus && "cursor-not-allowed"
                    }`}
                  onClick={() =>
                    dispatch(
                      setValues({
                        ...values,
                        betamount: values?.betamount / 2,
                      })
                    )
                  }
                  disabled={completeBetStatus}
                >
                  ½
                </button>
                <Divider
                  flexItem
                  orientation="vertical"
                  sx={{ my: 1.5, backgroundColor: "#1A2c38", width: "2px" }}
                />
                <button
                  className={`w-16 text-xs hover:bg-[#5c849e68] ${completeBetStatus && "cursor-not-allowed"
                    }`}
                  onClick={() =>
                    dispatch(
                      setValues({
                        ...values,
                        betamount: values?.betamount * 2,
                      })
                    )
                  }
                  disabled={completeBetStatus}
                >
                  2×
                </button>
              </div>
              <button
                className="bg-[#1fff20] hover:bg-[#42ed45] text-black font-bold mt-3.5 py-3 rounded w-full"
                onClick={() => {
                  handleOnBet("manualBet");
                }}
              >
                Bet
              </button>
              <div className="text-[#b1bad3] font-semibold text-m mt-3 mb-1 select-none">
                <label>Risk </label>
              </div>
              <div className="flex relative">
                <select
                  type="select"
                  name="risk"
                  value={values?.risk}
                  onChange={(e) => handleOnChange(e)}
                  className={`w-full px-2 py-2 border-2 rounded border-[#4d718768] bg-[#0f212e] 
                        hover:border-[#557086] focus:border-[#557086] focus:outline-none ${completeBetStatus && "cursor-not-allowed"
                    }`}
                  disabled={completeBetStatus}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-m mt-3 mb-1 select-none">
                <label>Rows</label>
              </div>
              <div className="relative flex">
                <select
                  type="select"
                  name="rows"
                  value={values?.rows}
                  onChange={(e) => handleOnChange(e)}
                  className={`w-full px-2 py-2 border-2 rounded border-[#4d718768] bg-[#0f212e] 
                        hover:border-[#557086] focus:border-[#557086] focus:outline-none ${completeBetStatus && "cursor-not-allowed"
                    }`}
                  disabled={completeBetStatus}
                >
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                  <option value={13}>13</option>
                  <option value={14}>14</option>
                  <option value={15}>15</option>
                  <option value={16}>16</option>
                </select>
              </div>
              <div className="flex overflow-x-auto overflow-y-hidden transform translate-z-0 mt-3">
                <div className="bg-[#0f212e] flex grow rounded-full p-[5px] flex-shrink-0">
                  <div className="flex space-x-2 w-full">
                    <button
                      className={`py-2 rounded-full transition-all ${isManual ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                        }
                        xl:w-[8.7rem] lg:w-[4rem] md:w-[10.94rem] w-full`}
                      onClick={() => setIsManual(true)}
                    >
                      Manual
                    </button>
                    <button
                      className={`py-2 rounded-full transition-all ${!isManual ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                        }
                      xl:w-[8.5rem] lg:w-[6.68rem] md:w-[10.94rem] w-full`}
                      onClick={() => setIsManual(false)}
                    >
                      Auto
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-m">
              <div>
                {stopAutoBet ? (
                  <button
                    className="bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3 py-3 rounded font-semibold w-full"
                    onClick={() => handleOnStopAutoBet()}
                  >
                    Stop Autobet
                  </button>
                ) : (
                  <button
                    className="bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3 py-3 rounded font-semibold w-full"
                    onClick={() =>
                      values?.numberofbets === "" || 0
                        ? toast.error("Please enter a number of bets")
                        : handleOnBet("autoBet")
                    }
                  >
                    Start Autobet
                  </button>
                )}
                <div className="text-[#b1bad3] flex justify-between font-semibold my-1 select-none">
                  <label>Bet Amount</label>
                  <label>
                    ₹{values?.betamount ? values?.betamount : "0.00"}
                  </label>
                </div>
                <div className="flex rounded border-[#4d718768] bg-[#4d718768] group">
                  <div className="relative flex">
                    {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                        <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                      </div> */}
                    <input
                      type="number"
                      placeholder="0.00"
                      step="0.01"
                      min={0}
                      name="betamount"
                      value={values?.betamount}
                      onChange={(e) => handleOnChange(e)}
                      className={`w-64 pr-1.5 pl-2 py-2.5 rounded-l text-white border-2 hover:border-[#557086] focus:hover:border-[#557086] group-hover:border-[#557086] border-[#2F4553] focus:border-[#557086] bg-[#0f212e] focus:outline-none ${completeBetStatus && "cursor-not-allowed"
                        }`}
                      disabled={completeBetStatus}
                    />
                  </div>
                  <button
                    className={`w-16 hover:bg-[#5c849e68] ${completeBetStatus && "cursor-not-allowed"
                      }`}
                    onClick={() =>
                      dispatch(
                        setValues({
                          ...values,
                          betamount: values?.betamount / 2,
                        })
                      )
                    }
                    disabled={completeBetStatus}
                  >
                    ½
                  </button>
                  <Divider
                    flexItem
                    orientation="vertical"
                    sx={{ my: 1.5, backgroundColor: "#1A2c38", width: "2px" }}
                  />
                  <button
                    className={`w-16 hover:bg-[#5c849e68] hover:rounded-r`}
                    onClick={() =>
                      dispatch(
                        setValues({
                          ...values,
                          betamount: values?.betamount * 2,
                        })
                      )
                    }
                    disabled={completeBetStatus}
                  >
                    2×
                  </button>
                </div>
                <div className="text-[#b1bad3] font-semibold text-m mt-3 mb-1 select-none">
                  <label>Risk</label>
                </div>
                <div className="flex relative">
                  <select
                    type="select"
                    name="risk"
                    value={values?.risk}
                    onChange={(e) => handleOnChange(e)}
                    className={`w-full px-2 py-2 border-2 rounded border-[#4d718768] bg-[#0f212e] 
                        hover:border-[#557086] focus:border-[#557086] focus:outline-none`}
                    disabled={completeBetStatus}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                <div className="text-[#b1bad3] flex justify-between font-semibold text-m mt-3 mb-1 select-none">
                  <label>Rows</label>
                </div>
                <div className="relative flex">
                  <select
                    type="select"
                    name="rows"
                    value={values?.rows}
                    onChange={(e) => handleOnChange(e)}
                    className={`w-full px-2 py-2 border-2 rounded border-[#4d718768] bg-[#0f212e] 
                        hover:border-[#557086] focus:border-[#557086] focus:outline-none`}
                    disabled={completeBetStatus}
                  >
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                    <option value={13}>13</option>
                    <option value={14}>14</option>
                    <option value={15}>15</option>
                    <option value={16}>16</option>
                  </select>
                </div>
                <div className="text-[#b1bad3] justify-between font-semibold mt-3 mb-1 select-none">
                  <label>Number of Bets</label>
                </div>
                <div className="justify-between mb-2">
                  <div className="relative flex">
                    <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                      <IoInfiniteSharp className="text-xl" />
                    </div>
                    <input
                      type="number"
                      placeholder="0"
                      min={0}
                      name="numberofbets"
                      value={
                        finalMultiplier?.remainingBets === 1
                          ? values?.numberofbets || ""
                          : finalMultiplier?.remainingBets
                            ? parseInt(finalMultiplier?.remainingBets) - 1
                            : values?.numberofbets
                      }
                      onChange={(e) => handleOnChange(e)}
                      className={`w-full pr-7 pl-2 py-2.5 rounded text-white border-2 hover:border-[#557086] focus:hover:border-[#557086] group-hover:border-[#557086] border-[#2F4553] focus:border-[#557086] bg-[#0f212e] focus:outline-none`}
                      disabled={completeBetStatus}
                    />
                  </div>
                </div>
                <div className="flex overflow-x-auto overflow-y-hidden transform translate-z-0 mt-3">
                  <div className="bg-[#0f212e] flex grow rounded-full p-[5px] flex-shrink-0">
                    <div className="flex space-x-2 w-full">
                      <button
                        className={`py-2 rounded-full transition-all ${isManual ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                          }
                          xl:w-[8.7rem] lg:w-[4rem] md:w-[10.94rem] w-full`}
                        onClick={() => setIsManual(true)}
                      >
                        Manual
                      </button>
                      <button
                        className={`py-2 rounded-full transition-all ${!isManual ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                          }
                                        xl:w-[8.5rem] lg:w-[6.68rem] md:w-[10.94rem] w-full`}
                        onClick={() => setIsManual(false)}
                      >
                        Auto
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default PlinkoGameSidebar;
