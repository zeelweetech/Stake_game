import React, { useEffect, useState } from "react";
import { Divider } from "@mui/material";
// import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import PercentIcon from "@mui/icons-material/Percent";
import { useDispatch, useSelector } from "react-redux";
import {
  setAutoBet,
  setAutoBetResult,
  setGameBet,
  setGamesOver,
  setIsManual,
  setMineValue,
  setRestored,
  // setRevealed,
  setShowFields,
} from "../../../../features/casino/minesSlice";
// import { MineSocket } from "../../../../socket";
import { decodedToken } from "../../../../resources/utility";
import { useParams } from "react-router-dom";
import {
  openRegisterModel,
  setWallet,
} from "../../../../features/auth/authSlice";
import { getWallet } from "../../../../services/LoginServices";
import toast from "react-hot-toast";

function MinesGameSidebar({ mineGameSocket }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [onProfit, setOnProfit] = useState({ win: true, lose: true });
  const [selectedTiles, setSelectedTiles] = useState([]);
  const [responsiveMobile, setResponsiveMobile] = useState(window.innerWidth);
  const {
    isManual,
    mineValue = { betamount: "", mines: 3 },
    gameBet,
    minesBetStatus,
    tileSelect,
    restored,
    restoredMultiplier,
    showFields,
    gamesOver,
    autoBet,
    preSelectTile,
    autoBetResult,
  } = useSelector((state) => state.minesGame);
  const decoded = decodedToken();

  useEffect(() => {
    const handleResize = () => setResponsiveMobile(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    GetWalletData();

    if (restored?.mineLocations?.length > 0) {
      dispatch(setShowFields(true));
    } else {
      dispatch(setShowFields(false));
    }
  }, [restored]);

  const GetWalletData = async () => {
    await getWallet({ id: decoded?.userId })
      .then((res) => {
        const wallet =
          parseFloat(res?.currentAmount) + parseFloat(res?.bonusAmount);
        dispatch(setWallet(wallet.toFixed(2)));
      })
      .catch((err) => { });
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    dispatch(setMineValue({ ...mineValue, [name]: value }));
  };

  const handleBetClick = () => {
    if (gameBet && !gamesOver) {
      mineGameSocket.emit("cashout", {
        userId: decoded?.userId.toString(),
        gameId: id,
      });
      dispatch(setGamesOver(true));
      dispatch(setGameBet(false));
      dispatch(setShowFields(false));
    } else {
      if (!localStorage.getItem("token")) {
        dispatch(openRegisterModel());
      } else {
        // onStartGame(mineValue.betamount);
        mineGameSocket.emit("minePlaceBet", {
          userId: decoded?.userId.toString(),
          gameId: id,
          totalMines: mineValue?.mines,
          betAmount: mineValue?.betamount,
        });
        dispatch(setGameBet(true));
        dispatch(setGamesOver(false));
        dispatch(setShowFields(true));
      }
    }
  };

  const handleOnAutoBet = () => {
    if (!localStorage.getItem("token")) {
      dispatch(openRegisterModel());
    } else {
      mineGameSocket.emit("StartAutoBet", {
        userId: decoded?.userId,
        gameId: id,
        preSelectedTiles: preSelectTile,
        totalMines: parseInt(mineValue?.mines, 10),
        betAmount: parseInt(mineValue?.betamount, 10) || 0,
        numberOfBets:
          autoBetResult?.round > 0
            ? autoBetResult.round
            : mineValue?.numberofbet || "",
        onWins: parseInt(mineValue?.onwin, 10),
        onLoss: parseInt(mineValue?.onlose, 10),
        stopOnLoss: parseInt(mineValue?.stoponloss, 10),
        stopOnProfit: parseInt(mineValue?.stoponprofit, 10),
      });
      dispatch(setAutoBet(true));
    }
  };

  const handleOnStopAutoBet = () => {
    mineGameSocket.emit("StopAutoBet");
    dispatch(setAutoBet(false));
  };

  const pickRandomTile = () => {
    let index = Math.floor(Math.random() * 25);

    while (selectedTiles.includes(index)) {
      index = Math.floor(Math.random() * 25);
    }

    mineGameSocket.emit("selectTile", {
      userId: decoded?.userId.toString(),
      gameId: id,
      tileIndex: index,
    });

    setSelectedTiles([...selectedTiles, index]);
  };

  const gems = 25 - mineValue?.mines || 0;

  return (
    <div>
      {responsiveMobile > 768 ? (
        <div className="flex flex-col xl:w-80 lg:w-[17.8rem] p-3 xl:ml-0 xl:mr-0 lg:ml-0 lg:mr-0 md:ml-32 md:mr-[8.3rem] max-sm:mx-2 bg-[#213743] rounded-tl-lg">
          <div className="flex overflow-x-auto overflow-y-hidden transform translate-z-0">
            <div className="bg-[#0f212e] flex grow rounded-full p-[5px] flex-shrink-0">
              <div className="flex space-x-2">
                <button
                  className={`py-2 xl:w-[8.7rem] lg:w-[7.09rem] md:w-[12rem] w-[11rem] rounded-full ${isManual ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                    }`}
                  onClick={() => dispatch(setIsManual(true))}
                >
                  Manual
                </button>
                <button
                  className={`py-2 xl:w-[8.7rem] lg:w-[8.1rem] md:w-[13.3rem] w-[11.7rem] rounded-full ${!isManual ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                    }`}
                  onClick={() => dispatch(setIsManual(false))}
                >
                  Auto
                </button>
              </div>
            </div>
          </div>
          {isManual ? (
            <div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mt-3 mb-1 select-none">
                <label>Bet Amount</label>
                <label>
                  ₹{mineValue?.betamount ? mineValue?.betamount : "0.00"}
                </label>
              </div>
              <div
                className={`flex border-1 rounded-md border-[#2F4553] bg-[#2F4553] group`}
              >
                <div className="relative flex ">
                  {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                  <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                  </div> */}
                  <input
                    type="number"
                    placeholder="0.00"
                    min={0}
                    name="betamount"
                    value={
                      mineValue?.betamount
                        ? mineValue?.betamount
                        : restored?.mineLocations?.length > 0
                          ? restored?.betAmount
                          : mineValue?.betamount || ""
                    }
                    onChange={(e) => {
                      handleOnChange(e);
                      if (restored?.mineLocations?.length > 0) {
                        dispatch(setRestored({ betAmount: "" }));
                      }
                    }}
                    className={`xl:w-48 lg:w-36 pr-1.5 pl-2 py-1.5 md:w-[20rem] rounded-l text-white border-2 focus:border-[#557086] group-hover:border-[#557086] hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none ${showFields && "cursor-not-allowed"
                      }`}
                    disabled={showFields}
                  />
                </div>
                <button
                  className={`w-16 text-sm font-bold hover:bg-[#5c849e68] hover:border-[#557086] ${showFields && "cursor-not-allowed"
                    }`}
                  onClick={() =>
                    dispatch(
                      setMineValue({
                        ...mineValue,
                        betamount: mineValue?.betamount / 2,
                      })
                    )
                  }
                  disabled={showFields}
                >
                  ½
                </button>
                <Divider
                  flexItem
                  orientation="vertical"
                  sx={{ my: 1.5, backgroundColor: "#1A2c38", width: "2px" }}
                />
                <button
                  className={`w-16 text-base hover:bg-[#5c849e68] hover:border-[#557086] ${showFields && "cursor-not-allowed"
                    } `}
                  onClick={() =>
                    dispatch(
                      setMineValue({
                        ...mineValue,
                        betamount: mineValue?.betamount * 2,
                      })
                    )
                  }
                  disabled={showFields}
                >
                  2×
                </button>
              </div>

              {showFields ? (
                <div>
                  <div className="flex space-x-2 ">
                    <div>
                      <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mt-3 mb-1 select-none">
                        <label>Mines</label>
                      </div>
                      <div
                        className="bg-[#2f4553] font-bold rounded border-2 hover:border-[#557086] border-[#2F4553] focus:border-[#557086] focus:outline-none xl:w-36 lg:w-[7.4rem] p-1.5 mt-2.5"
                        tabIndex={0}
                      >
                        {restored?.mineLocations?.length > 0
                          ? restored?.mines
                          : mineValue?.mines
                            ? mineValue?.mines
                            : restored?.mines}
                      </div>
                    </div>
                    <div>
                      <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mt-3 mb-1 select-none">
                        <label>Gems</label>
                      </div>
                      <div
                        className="bg-[#2f4553] font-bold rounded border-2 hover:border-[#557086] border-[#2F4553] focus:border-[#557086] focus:outline-none xl:w-36 lg:w-[7.4rem] p-1.5 mt-2.5"
                        tabIndex={0}
                      >
                        {restored?.mineLocations?.length > 0
                          ? 25 - restored?.mines
                          : mineValue?.mines
                            ? gems
                            : 25 - restored?.mines}
                      </div>
                    </div>
                  </div>
                  <div className="text-[#b1bad3] flex justify-between font-semibold text-m mt-3 mb-1 select-none">
                    <label>
                      Total Profit (
                      {tileSelect?.multiplier
                        ? tileSelect?.multiplier
                        : restored?.mineLocations?.length > 0
                          ? restoredMultiplier
                          : "1.00"}
                      )
                    </label>
                    <label>
                      ₹
                      {(
                        (mineValue?.betamount
                          ? mineValue?.betamount
                          : restored?.mineLocations?.length > 0
                            ? restored?.betAmount
                            : 0) *
                        (tileSelect?.multiplier
                          ? tileSelect?.multiplier
                          : restored?.mineLocations?.length > 0
                            ? restoredMultiplier
                            : 0.0)
                      ).toFixed(2)}
                    </label>
                  </div>
                  <div
                    className="flex justify-between items-center bg-[#2f4553] border-2 hover:border-[#557086] focus-within:border-[#557086] border-[#2F4553] focus:outline-none rounded p-2"
                    tabIndex={0}
                  >
                    <p>
                      {(
                        (mineValue?.betamount
                          ? mineValue?.betamount
                          : restored?.mineLocations?.length > 0
                            ? restored?.betAmount
                            : 0) *
                        (tileSelect?.multiplier
                          ? tileSelect?.multiplier
                          : restored?.mineLocations?.length > 0
                            ? restoredMultiplier
                            : 0.0)
                      ).toFixed(2)}
                    </p>
                    {/* <RiMoneyRupeeCircleFill color="yellow" className="text-xl" /> */}
                  </div>
                  <button
                    className="bg-[#2f4553] hover:bg-[#5c849e68] rounded w-full p-2 mt-2.5"
                    onClick={pickRandomTile}
                  >
                    Pick random tile
                  </button>
                </div>
              ) : (
                <div>
                  <div className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1.5 mb-1 select-none">
                    <label>Mines</label>
                  </div>
                  {/* <div className="relative flex">
                    <select
                      type="select"
                      name="mines"
                      value={mineValue?.mines}
                      onChange={(e) => handleOnChange(e)}
                      className="w-full px-2 py-2 text-white border-2 rounded-md border-[#4d718768] hover:border-[#557086] bg-[#0f212e] focus:border-transparent focus:outline-none"
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                    </select>
                  </div> */}
                  <div className="relative flex">
                    <select
                      type="select"
                      name="mines"
                      value={mineValue?.mines}
                      onChange={(e) => handleOnChange(e)}
                      className="w-full px-2 py-1.5 text-white border-2 rounded border-[#4d718768] bg-[#0f212e] 
                        hover:border-[#557086] focus:border-[#557086] focus:outline-none"
                    >
                      {Array.from({ length: 24 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              <button
                className={`${gameBet && !gamesOver
                    ? "bg-[#489649]"
                    : "bg-[#1fff20] hover:bg-[#42ed45]"
                  } text-black mt-3.5 py-3 rounded font-semibold w-full`}
                onClick={() => handleBetClick()}
                // disabled={gameBet && !gamesOver && tileSelect?.tileIndex === undefined}
                disabled={
                  gameBet &&
                  !gamesOver &&
                  tileSelect?.tileIndex === undefined &&
                  !restored?.totalSelectedTiles > 0
                }
              >
                {gameBet && !gamesOver ? "Cashout" : "Bet"}
              </button>
            </div>
          ) : (
            <div>
              <div className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-3 mb-1 select-none">
                <label>Bet Amount</label>
                <label>
                  ₹{mineValue?.betamount ? mineValue?.betamount : "0.00"}
                </label>
              </div>
              <div className="flex border-1 rounded border-[#2F4553] bg-[#2F4553] group">
                <div className="relative flex">
                  {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                  <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
                  </div> */}
                  <input
                    className="xl:w-48 xl:ml-0 lg:w-40 lg:ml-0 pr-1.5 pl-2 py-1.5 md:w-[20rem] rounded-s-sm focus:border-[#557086] group-hover:border-[#557086] text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0.00"
                    step="0.01"
                    name="betamount"
                    value={
                      mineValue?.betamount
                        ? mineValue?.betamount
                        : restored?.mineLocations?.length > 0
                          ? restored?.betAmount
                          : mineValue?.betamount || ""
                    }
                    onChange={(e) => {
                      handleOnChange(e);
                      if (restored?.mineLocations?.length > 0) {
                        dispatch(setRestored({ betAmount: "" }));
                      }
                    }}
                  />
                </div>
                <button
                  className={`w-16 text-sm font-bold hover:bg-[#5c849e68] group-hover:border-[#557086] ${minesBetStatus && "cursor-not-allowed"
                    }`}
                  onClick={() =>
                    dispatch(
                      setMineValue({
                        ...mineValue,
                        betamount: mineValue?.betamount / 2,
                      })
                    )
                  }
                  disabled={minesBetStatus}
                >
                  ½
                </button>
                <Divider
                  flexItem
                  orientation="vertical"
                  sx={{ my: 1.5, backgroundColor: "#1A2c38", width: "2px" }}
                />
                <button
                  className={`w-16 text-base hover:bg-[#5c849e68] group-hover:border-[#557086] ${minesBetStatus && "cursor-not-allowed"
                    } `}
                  onClick={() =>
                    dispatch(
                      setMineValue({
                        ...mineValue,
                        betamount: mineValue?.betamount * 2,
                      })
                    )
                  }
                  disabled={minesBetStatus}
                >
                  2x
                </button>
              </div>
              <div className="text-[#b1bad3] text-sm flex justify-between font-semibold text-m mt-1.5 mb-1 select-none">
                <label>Mines</label>
              </div>
              <div className="relative flex">
                <select
                  type="select"
                  name="mines"
                  value={mineValue?.mines}
                  onChange={(e) => handleOnChange(e)}
                  className="w-full px-2 py-1.5 text-white font-bold  rounded border-2 border-[#4d718768] bg-[#0f212e] 
                        hover:border-[#557086] focus:border-[#557086] focus:outline-none"
                >
                  {/* <div>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                  <option value={13}>13</option>
                  <option value={14}>14</option>
                  <option value={15}>15</option>
                  <option value={16}>16</option>
                  <option value={17}>17</option>
                  <option value={18}>18</option>
                  <option value={19}>19</option>
                  <option value={20}>20</option>
                  <option value={21}>21</option>
                  <option value={22}>22</option>
                  <option value={23}>23</option>
                  <option value={24}>24</option>
                  </div> */}
                  {Array.from({ length: 24 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1.5 mb-1 select-none">
                <label>Number of Bets</label>
              </div>
              <div className="relative flex rounded-md">
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
                  className="w-full pr-7 pl-2 py-1.5 font-bold rounded-md focus:border-[#557086] text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                  type="number"
                  placeholder="0"
                  min={0}
                  name="numberofbet"
                  value={
                    autoBetResult?.round > 0
                      ? autoBetResult.round
                      : mineValue?.numberofbet || ""
                  }
                  onChange={(e) => {
                    handleOnChange(e);
                    if (autoBetResult?.round > 0) {
                      dispatch(setAutoBetResult({ round: "" }));
                    }
                  }}
                />
              </div>
              <div className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1.5 mb-1 select-none">
                <label>On win</label>
              </div>
              <div className="flex items-center space-x-0.5 mt-1 mb-2 rounded bg-[#4d718768]">
                <button
                  className={`${onProfit.win
                      ? "bg-[#0f212e] rounded"
                      : "rounded hover:bg-[#85afca68]"
                    } px-3.5 py-1.5 ml-0.5 rounded`}
                  onClick={() => {
                    setOnProfit({ ...onProfit, win: true });
                    dispatch(setMineValue({ onwin: "" }));
                  }}
                >
                  Reset
                </button>
                <button
                  className={`${onProfit.win
                      ? "hover:bg-[#85afca68]"
                      : "bg-[#0f212e] rounded"
                    } px-[0.3rem] py-1.5 rounded`}
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
                  <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2 ">
                    <PercentIcon fontSize="small" />
                  </div>
                  <input
                    className="w-20 pr-7 pl-2 py-1.5 xl:w-[8.215rem] lg:w-[5.8rem] md:w-[14rem] rounded text-white border-2 focus:border-[#557086] hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0"
                    name="onwin"
                    value={mineValue?.onwin}
                    onChange={(e) => handleOnChange(e)}
                    disabled={onProfit.win}
                  />
                </div>
              </div>
              <div className="text-[#b1bad3] text-sm flex justify-between font-semibold text-m mt-1.5 mb-1 select-none">
                <label>On Lose</label>
              </div>
              <div className="flex items-center space-x-0.5 mt-1 rounded-md bg-[#4d718768]">
                <div>
                  <button
                    className={`${onProfit.lose
                        ? "bg-[#0f212e] rounded"
                        : "hover:bg-[#85afca68] rounded"
                      } px-3.5 py-1.5 ml-0.5 rounded`}
                    onClick={() => {
                      setOnProfit({ ...onProfit, lose: true });
                      dispatch(setMineValue({ onlose: "" }));
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
                      } px-[0.3rem] py-1.5`}
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
                    className="w-20 pr-7 pl-2 py-1.5 xl:w-[8.215rem] lg:w-[5.8rem] md:w-[14rem] rounded text-white border-2 focus:border-[#557086] hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0"
                    name="onlose"
                    value={mineValue?.onlose}
                    onChange={(e) => handleOnChange(e)}
                    disabled={onProfit.lose}
                  />
                </div>
              </div>
              <div className="text-[#b1bad3] flex justify-between font-bold text-xs mt-2 mb-1 select-none">
                <label>Stop on Profit</label>
                <label>
                  ₹{mineValue?.stoponprofit ? mineValue?.stoponprofit : "0.00"}
                </label>
              </div>
              <div className="relative flex">
                {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
              <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
            </div> */}
                <input
                  className="w-full pr-1.5 px-2 py-1.5 rounded text-white border-2 focus:border-[#557086] hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                  type="number"
                  placeholder="0.01"
                  step="0.01"
                  name="stoponprofit"
                  value={mineValue?.stoponprofit}
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
              <div className="text-[#b1bad3] flex justify-between font-bold text-xs mt-2 mb-1 select-none">
                <label>Stop on Loss</label>
                <label>
                  ₹{mineValue?.stoponloss ? mineValue?.stoponloss : "0.00"}
                </label>
              </div>
              <div className="relative flex">
                {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
              <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
            </div> */}
                <input
                  className="w-full pr-1.5 px-2 py-1.5 rounded text-white border-2 focus:border-[#557086]  hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                  type="number"
                  placeholder="0.01"
                  step="0.01"
                  name="stoponloss"
                  value={mineValue?.stoponloss}
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
                  className={`${preSelectTile?.length > 0
                      ? "bg-[#1fff20] hover:bg-[#42ed45] cursor-pointer"
                      : "bg-[#489649] cursor-default"
                    } text-black mt-3 py-3 rounded font-semibold w-full focus:outline-none focus:border-transparent md:block hidden`}
                  onClick={() =>
                    mineValue?.numberofbet === undefined ||
                      mineValue?.numberofbet === ""
                      ? toast.error("Please enter a number of bets")
                      : handleOnAutoBet()
                  }
                // disabled={preSelectTile?.length > 0}
                >
                  Start Autobet
                </button>
              )}
            </div>
          )}
        </div>
      ) : null}

      {responsiveMobile <= 768 ? (
        <div className="flex flex-col xl:w-80 lg:w-[17.8rem] p-3  max-sm:mx-2 bg-[#213743]">
          {isManual ? (
            <div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-m mt-3 mb-1">
                <label>Bet Amount</label>
                <label>
                  ₹{mineValue?.betamount ? mineValue?.betamount : "0.00"}
                </label>
              </div>
              <div
                className={`flex border-1 rounded-md border-[#4d718768] bg-[#4d718768] group`}
              >
                <div className="relative flex ">
                  {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div> */}
                  <input
                    type="number"
                    placeholder="0.00"
                    min={0}
                    name="betamount"
                    value={
                      mineValue?.betamount
                        ? mineValue?.betamount
                        : restored?.mineLocations?.length > 0
                          ? restored?.betAmount
                          : mineValue?.betamount || ""
                    }
                    onChange={(e) => {
                      handleOnChange(e);
                      if (restored?.mineLocations?.length > 0) {
                        dispatch(setRestored({ betAmount: "" }));
                      }
                    }}
                    className={`xl:w-48 lg:w-36 pr-1.5 pl-2 py-2 md:w-[17rem] w-64 rounded-s-md text-white border-2 group-hover:border-[#557086] focus:border-[#557086] hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none ${showFields && "cursor-not-allowed"
                      }`}
                    disabled={showFields}
                  />
                </div>
                <button
                  className={`w-16 text-xl hover:bg-[#5c849e68] group-hover:border-[#557086] ${showFields && "cursor-not-allowed"
                    }`}
                  onClick={() =>
                    dispatch(
                      setMineValue({
                        ...mineValue,
                        betamount: mineValue?.betamount / 2,
                      })
                    )
                  }
                  disabled={showFields}
                >
                  ½
                </button>
                <Divider
                  flexItem
                  orientation="vertical"
                  sx={{ my: 1.5, backgroundColor: "#1A2c38", width: "2px" }}
                />
                <button
                  className={`w-16 text-base hover:bg-[#5c849e68] group-hover:border-[#557086] ${showFields && "cursor-not-allowed"
                    } `}
                  onClick={() =>
                    dispatch(
                      setMineValue({
                        ...mineValue,
                        betamount: mineValue?.betamount * 2,
                      })
                    )
                  }
                  disabled={showFields}
                >
                  2×
                </button>
              </div>
              <button
                className={`${gameBet && !gamesOver
                    ? "bg-[#489649]"
                    : "bg-[#1fff20] hover:bg-[#42ed45]"
                  } text-black mt-3.5 py-3 rounded font-semibold w-full`}
                onClick={() => handleBetClick()}
                disabled={
                  gameBet &&
                  !gamesOver &&
                  tileSelect?.tileIndex === undefined &&
                  !restored?.totalSelectedTiles > 0
                }
              >
                {gameBet && !gamesOver ? "Cashout" : "Bet"}
              </button>

              {showFields ? (
                <div>
                  <div className="flex space-x-2">
                    <div className="w-full">
                      <div className="text-[#b1bad3] flex justify-between font-semibold text-m mt-2 mb-1">
                        <label>Mines</label>
                      </div>
                      <div className="bg-[#2f4553] font-bold rounded border-2 hover:border-[#557086] border-[#2F4553] focus:border-[#557086] focus:outline-none w-full sm:w-[11rem] md:w-44 lg:w-[7.4rem] xl:w-36 p-2 mt-2.5">
                        {restored?.mineLocations?.length > 0
                          ? restored?.mines
                          : mineValue?.mines
                            ? mineValue?.mines
                            : restored?.mines}
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="text-[#b1bad3] flex justify-between font-semibold text-m mt-2 mb-1">
                        <label>Gems</label>
                      </div>
                      <div className="bg-[#2f4553] font-bold rounded border-2 hover:border-[#557086] border-[#2F4553] focus:border-[#557086] focus:outline-none w-full sm:w-[11rem] md:w-44 lg:w-[7.4rem] xl:w-36 p-2 mt-2.5">
                        {restored?.mineLocations?.length > 0
                          ? 25 - restored?.mines
                          : mineValue?.mines
                            ? gems
                            : 25 - restored?.mines}
                      </div>
                    </div>
                  </div>

                  <div className="text-[#b1bad3] flex justify-between font-semibold text-m mt-3 mb-1">
                    <label>
                      Total Profit (
                      {tileSelect?.multiplier
                        ? tileSelect?.multiplier
                        : restored?.mineLocations?.length > 0
                          ? restoredMultiplier
                          : "1.00"}
                      )
                    </label>
                    <label>
                      ₹
                      {(
                        (mineValue?.betamount
                          ? mineValue?.betamount
                          : restored?.mineLocations?.length > 0
                            ? restored?.betAmount
                            : 0) *
                        (tileSelect?.multiplier
                          ? tileSelect?.multiplier
                          : restored?.mineLocations?.length > 0
                            ? restoredMultiplier
                            : 0.0)
                      ).toFixed(2)}
                    </label>
                  </div>
                  <div className="flex justify-between items-center bg-[#2f4553] border-2 hover:border-[#557086] focus-within:border-[#557086] border-[#2F4553] focus:outline-none rounded p-2">
                    <p>
                      {(
                        (mineValue?.betamount
                          ? mineValue?.betamount
                          : restored?.mineLocations?.length > 0
                            ? restored?.betAmount
                            : 0) *
                        (tileSelect?.multiplier
                          ? tileSelect?.multiplier
                          : restored?.mineLocations?.length > 0
                            ? restoredMultiplier
                            : 0.0)
                      ).toFixed(2)}
                    </p>
                    {/* <RiMoneyRupeeCircleFill color="yellow" className="text-xl" /> */}
                  </div>
                  {/* <button
                    className="bg-[#2f4553] border-2 hover:border-[#557086] focus-within:border-[#557086] border-[#2F4553] focus:outline-none rounded w-full p-2 mt-2.5"
                    onClick={pickRandomTile}
                  >
                    Pick random tile
                  </button> */}
                </div>
              ) : (
                <div>
                  <div className="text-[#b1bad3] flex justify-between font-semibold text-m mt-3 mb-1">
                    <label>Mines</label>
                  </div>
                  <div className="relative flex">
                    <select
                      type="select"
                      name="mines"
                      value={mineValue?.mines}
                      onChange={(e) => handleOnChange(e)}
                      className="w-full px-2 py-2 text-white border-2 rounded-md border-[#4d718768] bg-[#0f212e] 
                        hover:border-[#557086] focus:border-[#557086] focus:outline-none"
                    >
                      {/* <div>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      </div> */}
                      {Array.from({ length: 24 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
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
                  className={`${preSelectTile?.length > 0
                      ? "bg-[#1fff20] hover:bg-[#42ed45] cursor-pointer"
                      : "bg-[#489649] cursor-default"
                    } text-black mt-3 py-3 rounded font-semibold w-full focus:outline-none focus:border-transparent md:block hidden`}
                  onClick={() =>
                    mineValue?.numberofbet === undefined ||
                      mineValue?.numberofbet === ""
                      ? toast.error("Please enter a number of bets")
                      : handleOnAutoBet()
                  }
                // disabled={preSelectTile?.length > 0}
                >
                  Start Autobet
                  {/* {console.log("preSelectTile", preSelectTile)} */}
                </button>
              )}
              <div className="text-[#b1bad3] text-sm flex justify-between font-semibold my-1">
                <label>Bet Amount</label>
                <label>
                  ₹{mineValue?.betamount ? mineValue?.betamount : "0.00"}
                </label>
              </div>
              <div className="flex border-1 rounded border-[#2F4553] bg-[#2F4553] group">
                <div className="relative flex">
                  {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div> */}
                  <input
                    className="xl:w-48 lg:w-40 pr-1.5 pl-2 py-2 md:w-[17rem] w-64 rounded-s text-white border-2 group-hover:border-[#557086] focus:border-[#557086] hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0.00"
                    step="0.01"
                    name="betamount"
                    value={
                      mineValue?.betamount
                        ? mineValue?.betamount
                        : restored?.mineLocations?.length > 0
                          ? restored?.betAmount
                          : mineValue?.betamount || ""
                    }
                    onChange={(e) => {
                      handleOnChange(e);
                      if (restored?.mineLocations?.length > 0) {
                        dispatch(setRestored({ betAmount: "" }));
                      }
                    }}
                  />
                </div>
                <button
                  className={`w-16 text-xl hover:bg-[#5c849e68] group-hover:border-[#557086] ${minesBetStatus && "cursor-not-allowed"
                    }`}
                  onClick={() =>
                    dispatch(
                      setMineValue({
                        ...mineValue,
                        betamount: mineValue?.betamount / 2,
                      })
                    )
                  }
                  disabled={minesBetStatus}
                >
                  ½
                </button>
                <Divider
                  flexItem
                  orientation="vertical"
                  sx={{ my: 1.5, backgroundColor: "#1A2c38", width: "2px" }}
                />
                <button
                  className={`w-16 text-base hover:bg-[#5c849e68] group-hover:border-[#557086] ${minesBetStatus && "cursor-not-allowed"
                    } `}
                  onClick={() =>
                    dispatch(
                      setMineValue({
                        ...mineValue,
                        betamount: mineValue?.betamount * 2,
                      })
                    )
                  }
                  disabled={minesBetStatus}
                >
                  2×
                </button>
              </div>

              <div className="text-[#b1bad3] text-sm flex justify-between font-semibold text-m mt-1.5 mb-1">
                <label>Mines</label>
              </div>
              <div className="relative flex">
                <select
                  type="select"
                  name="mines"
                  value={mineValue?.mines}
                  onChange={(e) => handleOnChange(e)}
                  className="w-full px-2 py-1.5 text-white font-bold rounded border-2 border-[#4d718768] bg-[#0f212e] 
                        hover:border-[#557086] focus:border-[#557086] focus:outline-none"
                >
                  {/* <div>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                  <option value={13}>13</option>
                  <option value={14}>14</option>
                  <option value={15}>15</option>
                  <option value={16}>16</option>
                  <option value={17}>17</option>
                  <option value={18}>18</option>
                  <option value={19}>19</option>
                  <option value={20}>20</option>
                  <option value={21}>21</option>
                  <option value={22}>22</option>
                  <option value={23}>23</option>
                  <option value={24}>24</option>
                </div> */}
                  {Array.from({ length: 24 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
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
                  className="w-full pr-7 pl-2 py-1.5 rounded  text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                  type="number"
                  placeholder="0"
                  min={0}
                  name="numberofbet"
                  value={mineValue?.numberofbet}
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
              <div className="text-[#b1bad3] text-sm flex justify-between font-semibold text-m mt-1.5 mb-1">
                <label>On win</label>
              </div>
              <div className="flex items-center space-x-0.5 mt-1 mb-2 rounded bg-[#2F4553]">
                <button
                  className={`${onProfit.win
                      ? "bg-[#0f212e] rounded"
                      : "hover:bg-[#85afca68]"
                    } px-3.5 py-1.5 ml-0.5 rounded`}
                  onClick={() => {
                    setOnProfit({ ...onProfit, win: true });
                    dispatch(setMineValue({ onwin: "" }));
                  }}
                >
                  Reset
                </button>
                <button
                  className={`${onProfit.win
                      ? "hover:bg-[#85afca68]"
                      : "bg-[#0f212e] rounded"
                    } px-[0.3rem] py-1.5`}
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
                  <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2 ">
                    <PercentIcon fontSize="small" />
                  </div>
                  <input
                    className="w-[10.2rem] pr-7 pl-2 py-1.5 xl:w-[8rem] lg:w-[5.8rem] md:w-[12.202rem] rounded text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0"
                    name="onwin"
                    value={mineValue?.onwin}
                    onChange={(e) => handleOnChange(e)}
                    disabled={onProfit.win}
                  />
                </div>
              </div>
              <div className="text-[#b1bad3] text-sm flex justify-between font-semibold text-m mt-1.5 mb-1">
                <label>On Lose</label>
              </div>
              <div className="flex items-center space-x-0.5 mt-1 rounded bg-[#2F4553]">
                <div>
                  <button
                    className={`${onProfit.lose
                        ? "bg-[#0f212e] rounded-sm"
                        : "hover:bg-[#85afca68] rounded"
                      } px-3.5 py-1.5 ml-0.5 rounded-sm`}
                    onClick={() => {
                      setOnProfit({ ...onProfit, lose: true });
                      dispatch(setMineValue({ onlose: "" }));
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
                      } px-[0.3rem] py-2`}
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
                    className="w-[10.2rem] pr-7 pl-2 py-1.5 xl:w-[8rem] lg:w-[5.8rem] md:w-[12.202rem] rounded text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0"
                    name="onlose"
                    value={mineValue?.onlose}
                    onChange={(e) => handleOnChange(e)}
                    disabled={onProfit.lose}
                  />
                </div>
              </div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-xs mt-3 mb-1">
                <label>Stop on Profit</label>
                <label>
                  ₹{mineValue?.stoponprofit ? mineValue?.stoponprofit : "0.00"}
                </label>
              </div>
              <div className="relative flex">
                {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
              <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
            </div> */}
                <input
                  className="w-full pr-1.5 px-2 py-1.5 rounded text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                  type="number"
                  placeholder="0.01"
                  step="0.01"
                  name="stoponprofit"
                  value={mineValue?.stoponprofit}
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-xs mt-3 mb-1">
                <label>Stop on Loss</label>
                <label>
                  ₹{mineValue?.stoponloss ? mineValue?.stoponloss : "0.00"}
                </label>
              </div>
              <div className="relative flex">
                {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
              <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
            </div> */}
                <input
                  className="w-full pr-1.5 px-2 py-1.5 rounded text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                  type="number"
                  placeholder="0.01"
                  step="0.01"
                  name="stoponloss"
                  value={mineValue?.stoponloss}
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
            </div>
          )}
          <div className="flex overflow-x-auto overflow-y-hidden transform translate-z-0 mt-3">
            <div className="bg-[#0f212e] flex grow rounded-full p-[5px] flex-shrink-0">
              <div className="flex space-x-2 w-full">
                <button
                  className={`py-2 rounded-full transition-all ${isManual ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                    }
                    xl:w-[8.7rem] lg:w-[4rem] md:w-[10.7rem] w-full`}
                  onClick={() => dispatch(setIsManual(true))}
                >
                  Manual
                </button>
                <button
                  className={`py-2 rounded-full transition-all ${!isManual ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                    }
                    xl:w-[8.5rem] lg:w-[6.68rem] md:w-[10.7rem] w-full`}
                  onClick={() => dispatch(setIsManual(false))}
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

export default MinesGameSidebar;
