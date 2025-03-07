import React, { useEffect, useState } from "react";
// import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import { Divider } from "@mui/material";
import PercentIcon from "@mui/icons-material/Percent";
import { useDispatch, useSelector } from "react-redux";
import {
  setAutoBetOnClick,
  setBoxsIndex,
  setClickedBoxes,
  setDragonAutoBetResult,
  setGameBet,
  setGameOverResult,
  setIsGameOver,
  setIsManual,
  setPreSelectTile,
  setRestor,
  setRestorData,
  setRowsIndex,
  setShowRandomField,
  setValues,
} from "../../../../features/casino/dragonTowerSlice";
// import { DragonTowerSocket } from "../../../../socket";
import { decodedToken } from "../../../../resources/utility";
import { useParams } from "react-router-dom";
import { openRegisterModel, setWallet } from "../../../../features/auth/authSlice";
import toast from "react-hot-toast";
import { getWallet } from "../../../../services/LoginServices";

function DragonSidebar({ dragonGameSocket }) {
  const dispatch = useDispatch();
  const decoded = decodedToken();
  const { id } = useParams();
  const [onProfit, setOnProfit] = useState({ win: true, lose: true });
  const [responsiveMobile, setResponsiveMobile] = useState(window.innerWidth);
  const {
    isManual,
    values = { betamount: "", difficulty: "medium" },
    showRandomField,
    gameBet,
    tileSelected,
    restor,
    restorMultiplier,
    isGameOver,
    clickedBoxes,
    rowsIndex = 0,
    autoBetOnClick,
    preSelectTile,
    dragonAutoBetResult
  } = useSelector((state) => state.dragonTowerGame);

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
    if (restor && restor.difficulty) {
      dispatch(setValues({ ...values, difficulty: restor.difficulty }));
    }
    if (restor?.restoreData?.[0]?.length > 0) {
      dispatch(setShowRandomField(true));
    } else {
      dispatch(setShowRandomField(false));
    }
  }, [restor]);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    dispatch(setValues({ ...values, [name]: value }));
    if (name === "difficulty") {
      dispatch(setClickedBoxes({}));
      dispatch(setGameOverResult());
      dispatch(setPreSelectTile([]));
    }
    dispatch(setRestorData({}));
  };

  const handleBetClick = () => {
    if (gameBet && !isGameOver) {
      dragonGameSocket.emit("cashout", {
        userId: decoded?.userId.toString(),
        gameId: id,
        betId: restor?.betId,
      });
      dispatch(setGameBet(false));
      dispatch(setIsGameOver(true));
      dispatch(setShowRandomField(false));
    } else {
      if (!localStorage.getItem("token")) {
        dispatch(openRegisterModel());
      } else {
        dragonGameSocket.emit("dragonTowerPlaceBet", {
          userId: decoded?.userId.toString(),
          gameId: id,
          betAmount: values?.betamount,
          difficulty: values?.difficulty,
          betType: "Manual",
        });
        dispatch(setGameBet(true));
        dispatch(setIsGameOver(false));
        dispatch(setShowRandomField(true));
      }
    }
  };

  const getBoxesPerRow = () => {
    switch (values.difficulty) {
      case "easy":
      case "master":
        return 4;
      case "medium":
      case "expert":
        return 3;
      case "hard":
        return 2;
      default:
        return 4;
    }
  };

  const pickRandomTile = () => {
    const rows = 9;
    let randomRowIndex = rowsIndex ? rowsIndex + 1 : 0;
    if (randomRowIndex >= rows) return;

    const boxesPerRow = getBoxesPerRow();
    const randomBoxIndex = Math.floor(Math.random() * boxesPerRow);

    while (clickedBoxes[randomRowIndex] !== undefined) {
      randomRowIndex = (randomRowIndex + 1) % rows;
    }
    dragonGameSocket.emit("selectTile", {
      userId: decoded?.userId.toString(),
      gameId: id,
      tileIndex: randomBoxIndex,
      tileStep: randomRowIndex,
    });

    const updatedClickedBoxes = {
      ...clickedBoxes,
      [randomRowIndex]: randomBoxIndex,
    };
    dispatch(setClickedBoxes(updatedClickedBoxes));
    dispatch(setRowsIndex(randomRowIndex));
    dispatch(setBoxsIndex(randomBoxIndex));
  };

  const handleOnAutoBet = () => {
    if (!localStorage.getItem("token")) {
      dispatch(openRegisterModel());
    } else {
      dragonGameSocket.emit("dragonTowerPlaceAutoBet", {
        userId: decoded?.userId,
        gameId: id,
        autoBetTiles: preSelectTile,
        betAmount: values?.betamount,
        difficulty: values?.difficulty,
        numberOfBets: dragonAutoBetResult?.currentBet > 0 ? dragonAutoBetResult?.currentBet : values?.numberofbet || "",
        onWins: parseInt(values?.onwin, 10),
        onLoss: parseInt(values?.onlose, 10),
        stopOnLoss: parseInt(values?.stoponloss, 10),
        stopOnProfit: parseInt(values?.stoponprofit, 10),
      });
      dispatch(setAutoBetOnClick(true));
    }
  };

  const handleOnStopAutoBet = () => {
    // DragonTowerSocket.emit("StopAutoBet");
    dispatch(setAutoBetOnClick(false));
  };

  return (
    <div>
      {responsiveMobile > 768 ? (
        <div className="xl:w-80 lg:w-[16.8rem] xl:mx-0 lg:mx-0 xl:mt-0 lg:mt-0 md:mt-16 md:mx-[4rem] -mx-12 m-12 flex flex-col p-3 bg-[#213743] rounded-tl-lg">
          <div className="flex overflow-x-auto overflow-y-hidden transform translate-z-0">
            <div className="bg-[#0f212e] flex grow rounded-full p-[5px] flex-shrink-0">
              <div className="flex space-x-2">
                <button
                  className={`py-2 xl:w-[8.7rem] lg:w-[7.1rem] md:w-[13.4rem] w-[11.3rem] rounded-full ${isManual ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                    }`}
                  onClick={() => dispatch(setIsManual(true))}
                >
                  Manual
                </button>
                <button
                  className={`py-2 xl:w-[8.7rem] lg:w-[7.1rem] md:w-[13.3rem] w-[11.4rem] rounded-full ${!isManual ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                    }`}
                  onClick={() => {
                    dispatch(setIsManual(false));
                    dispatch(setClickedBoxes({}));
                    dispatch(setGameOverResult());
                  }}
                >
                  Auto
                </button>
              </div>
            </div>
          </div>
          {isManual ? (
            <div>
              <div className="text-[#B1BAD3] flex justify-between font-semibold text-sm my-2 select-none">
                <label>Bet Amount</label>
                <label>₹{values?.betamount ? values?.betamount : "0.00"}</label>
              </div>
              <div className="flex border-1 rounded-md border-[#2F4553] bg-[#2F4553] group">
                <div className="relative flex">
                  {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div> */}
                  <input
                    type="number"
                    placeholder="0.00"
                    min={0}
                    name="betamount"
                    value={
                      values?.betamount
                        ? values?.betamount
                        : restor?.restoreData?.[0]?.length > 0
                          ? restor?.betAmount
                          : values?.betamount || ""
                    }
                    onChange={(e) => {
                      handleOnChange(e);
                      if (restor?.restoreData?.[0]?.length > 0) {
                        dispatch(setRestor({ betAmount: "" }));
                      }
                    }}
                    className={`xl:w-48 lg:w-36 md:w-80 pr-1.5 pl-2 py-2 rounded-l text-white border-2 focus:border-[#557086] group-hover:border-[#557086] hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none ${showRandomField
                      ? "cursor-not-allowed opacity-80"
                      : "hover:border-[#557086]"
                      }`}
                    disabled={showRandomField}
                  />
                </div>
                <button
                  className={`w-16 text-lg font-bold hover:border-[#557086] focus:outline-none ${showRandomField
                    ? "cursor-not-allowed opacity-80"
                    : "hover:bg-[#5c849e68]"
                    }`}
                  onClick={() =>
                    dispatch(
                      setValues({
                        ...values,
                        betamount: values?.betamount / 2,
                      })
                    )
                  }
                  disabled={showRandomField}
                >
                  ½
                </button>
                <Divider
                  flexItem
                  orientation="vertical"
                  sx={{ my: 1.5, backgroundColor: "#1A2c38", width: "2px" }}
                />
                <button
                  className={`w-16 text-sm font-bold hover:border-[#557086] focus:outline-none ${showRandomField
                    ? "cursor-not-allowed opacity-80"
                    : "hover:bg-[#5c849e68] "
                    }`}
                  onClick={() =>
                    dispatch(
                      setValues({
                        ...values,
                        betamount: values?.betamount * 2,
                      })
                    )
                  }
                  disabled={showRandomField}
                >
                  2×
                </button>
              </div>
              <div>
                <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mt-1 my-2 select-none">
                  <label>Difficulty</label>
                </div>
                <div
                  className={`relative flex  ${showRandomField ? "" : "hover:border-[#557086] rounded"
                    } bg-[#2F4553]`}
                >
                  <select
                    type="select"
                    name="difficulty"
                    value={values?.difficulty}
                    onChange={(e) => handleOnChange(e)}
                    className={`w-full px-2 py-2 text-white border-2 font-semibold rounded border-[#4d718768] bg-[#0f212e] 
                        hover:border-[#557086] focus:border-[#557086] focus:outline-none ${showRandomField
                        ? "cursor-not-allowed opacity-80"
                        : "cursor-pointer"
                      }`}
                    disabled={showRandomField}
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                    <option value="expert">Expert</option>
                    <option value="master">Master</option>
                  </select>
                </div>
              </div>

              {showRandomField && (
                <div>
                  <button
                    className="bg-[#2f4553] hover:bg-[#5c849e68] rounded w-full p-2 mt-2.5 select-none"
                    onClick={pickRandomTile}
                  >
                    Pick random tile
                  </button>
                  <div className="text-[#b1bad3] flex justify-between font-semibold text-m mt-3 mb-1 border-none focus:outline-none focus:border-transparent select-none">
                    <label>
                      Total Profit (
                      {tileSelected?.multiplier
                        ? tileSelected?.multiplier
                        : restor?.restoreData?.[0]?.length > 0
                          ? restorMultiplier
                          : "1.00"}
                      x )
                    </label>
                    <label>
                      ₹
                      {(
                        (values?.betamount
                          ? values?.betamount
                          : restor?.restoreData?.length > 0
                            ? restor?.betAmount
                            : 0) *
                        (tileSelected?.multiplier
                          ? tileSelected?.multiplier
                          : tileSelected?.mineLocations?.length > 0
                            ? restorMultiplier
                            : 0.0)
                      ).toFixed(2)}
                    </label>
                  </div>
                  <div
                    className="flex justify-between items-center rounded border-2 hover:border-[#557086] border-[#2F4553] bg-[#2f4553] focus:outline-none focus:border-[#557086] p-2"
                    tabIndex="0"
                  >
                    <p>
                      {(values?.betamount
                        ? values?.betamount
                        : restor?.restoreData?.[0]?.length > 0
                          ? restor?.betAmount
                          : values?.betamount) *
                        (tileSelected?.multiplier
                          ? tileSelected?.multiplier
                          : restor?.restoreData?.[0]?.length > 0
                            ? restorMultiplier
                            : 0.0)}
                    </p>
                    {/* <RiMoneyRupeeCircleFill
                      color="yellow"
                      className="text-xl"
                    /> */}
                  </div>
                </div>
              )}
              <button
                className={`${gameBet && !isGameOver
                  ? "bg-[#489649]"
                  : "bg-[#1fff20] hover:bg-[#42ed45]"
                  } text-black mt-3.5 py-3 rounded font-semibold w-full`}
                onClick={handleBetClick}
                disabled={
                  gameBet &&
                  !isGameOver &&
                  (tileSelected?.tileIndex === undefined ||
                    tileSelected?.multiplier < 1) &&
                  !restor?.currentStep > 0
                }
              >
                {gameBet && !isGameOver ? "Cashout" : "Bet"}
              </button>
            </div>
          ) : (
            <div>
              <div className="text-[#b1bad3] text-sm flex justify-between font-semibold my-2 select-none">
                <label>Bet Amount</label>
                <label>₹{values?.betamount ? values?.betamount : "0.00"}</label>
              </div>
              <div className="flex border-1 rounded-md border-[#2F4553] bg-[#2F4553] group">
                <div className="relative flex">
                  {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">₹
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div> */}
                  <input
                    className="xl:w-48 lg:w-40 md:w-80 w-64 pr-1.5 pl-2 py-2 rounded-l focus:border-[#557086] group-hover:border-[#557086] text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0.00"
                    step="0.01"
                    name="betamount"
                    value={
                      values?.betamount
                        ? values?.betamount
                        : restor?.restoreData?.[0]?.length > 0
                          ? restor?.betAmount
                          : values?.betamount || ""
                    }
                    onChange={(e) => {
                      handleOnChange(e);
                      if (restor?.restoreData?.[0]?.length > 0) {
                        dispatch(setRestor({ betAmount: "" }));
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
              <div className="text-[#b1bad3] text-sm font-semibold text-m mt-1 my-2 select-none">
                <label>Difficulty</label>
              </div>
              <div className="flex rounded bg-[#0f212e] focus:outline-none focus:border-transparent">
                <select
                  type="select"
                  name="difficulty"
                  value={values?.difficulty}
                  onChange={(e) => handleOnChange(e)}
                  className="w-full px-2 py-2 text-white font-semibold  rounded border-2 border-[#4d718768] bg-[#0f212e] 
                        hover:border-[#557086] focus:border-[#557086] focus:outline-none"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                  <option value="expert">Expert</option>
                  <option value="master">Master</option>
                </select>
              </div>
              <div className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1 mb-1 select-none">
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
                  className="w-full pr-7 pl-2 py-2 rounded border-2 focus:border-[#557086] hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                  type="number"
                  placeholder="0"
                  min={0}
                  name="numberofbet"
                  // value={values?.numberofbet || ""}
                  // onChange={(e) => handleOnChange(e)}
                  value={
                    dragonAutoBetResult?.currentBet > 0
                      ? dragonAutoBetResult?.currentBet - 1
                      : parseInt(values?.numberofbet) || ""
                  }
                  onChange={(e) => {
                    handleOnChange(e);
                    if (dragonAutoBetResult?.currentBet > 0) {
                      dispatch(setDragonAutoBetResult({ currentBet: "" }));
                    }
                  }}
                />
              </div>
              <div className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1 mb-1 select-none">
                <label>On win</label>
              </div>
              <div className="flex items-center space-x-0.5 mt-1 mb-2 rounded bg-[#2F4553]">
                <button
                  className={`${onProfit.win
                    ? "bg-[#0f212e] rounded"
                    : "rounded hover:bg-[#85afca68]"
                    } xl:px-2.5 lg:px-2.5 md:px-6 px-3.5 py-1.5 ml-0.5 rounded`}
                  onClick={() => {
                    setOnProfit({ ...onProfit, win: true });
                    dispatch(setValues({ ...values, onwin: "" }));
                  }}
                >
                  Reset
                </button>
                <button
                  className={`${onProfit.win
                    ? "hover:bg-[#85afca68] rounded"
                    : "bg-[#0f212e] rounded"
                    } xl:px-[0.3rem] lg:px-[0.2rem] md:px-4 py-1.5 lg:py-2 lg:text-sm rounded`}
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
                    className="w-[10.9rem] xl:w-[9.3rem] lg:w-[6.35rem] md:w-[14.7rem] pr-7 pl-2 py-1.5 rounded text-white border-2 focus:border-[#557086] hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0"
                    name="onwin"
                    value={values?.onwin || ""}
                    onChange={(e) => handleOnChange(e)}
                    disabled={onProfit.win}
                  />
                </div>
              </div>
              <div className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1.5 mb-1 select-none">
                <label>On Lose</label>
              </div>
              <div className="flex items-center space-x-0.5  mt-1 rounded bg-[#2F4553]">
                <div>
                  <button
                    className={`${onProfit.lose
                      ? "bg-[#0f212e] rounded"
                      : "hover:bg-[#85afca68] rounded"
                      } xl:px-2.5 lg:px-2.5 md:px-6 px-3.5 py-1.5 ml-0.5 rounded`}
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
                      ? "hover:bg-[#85afca68] rounded"
                      : "bg-[#0f212e] rounded"
                      } xl:px-[0.3rem] lg:px-[0.2rem] md:px-4 py-1.5 lg:py-2 lg:text-sm rounded `}
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
                    className="w-[10.9rem] xl:w-[9.3rem] lg:w-[6.35rem] md:w-[14.7rem] pr-7 pl-2 py-1.5 rounded text-white border-2 focus:border-[#557086] hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0"
                    name="onlose"
                    value={values?.onlose || ""}
                    onChange={(e) => handleOnChange(e)}
                    disabled={onProfit.lose}
                  />
                </div>
              </div>
              <div className="text-[#B1BAD3] font-bold flex justify-between text-xs mt-2 mb-1 select-none">
                <label>Stop on Profit</label>
                <label>
                  ₹{values?.stoponprofit ? values?.stoponprofit : "0.00"}
                </label>
              </div>
              <div className="relative flex">
                {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
              <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
            </div> */}
                <input
                  className="w-full pr-1.5 px-2 py-2 rounded text-white border-2 hover:border-[#557086] focus:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                  type="number"
                  placeholder="0.01"
                  step="0.01"
                  name="stoponprofit"
                  value={values?.stoponprofit || ""}
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
              <div className="text-[#b1bad3] flex justify-between font-bold text-xs mt-2 mb-1 select-none">
                <label>Stop on Loss</label>
                <label>
                  ₹{values?.stoponloss ? values?.stoponloss : "0.00"}
                </label>
              </div>
              <div className="relative flex">
                {/* <div className="cursor-text text-[#B1BAD3] absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
              <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
            </div> */}
                <input
                  className="w-full pr-1.5 px-2 py-2 rounded text-white border-2 hover:border-[#557086] focus:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                  type="number"
                  placeholder="0.01"
                  step="0.01"
                  name="stoponloss"
                  value={values?.stoponloss || ""}
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
              {autoBetOnClick ? (
                <button
                  className={` bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3 py-3 rounded-md font-semibold w-full focus:outline-none focus:border-transparent`}
                  onClick={() => handleOnStopAutoBet()}
                >
                  Stop Autobet
                </button>
              ) : (
                <button
                  className={`text-black ${Object.keys(preSelectTile).length > 0
                    ? "bg-[#1fff20] hover:bg-[#42ed45] cursor-pointer"
                    : "bg-[#489649] cursor-default"
                    } mt-3 py-3 rounded-md font-semibold w-full focus:outline-none focus:border-transparent`}
                  onClick={() =>
                    values?.numberofbet === undefined ||
                      values?.numberofbet === ""
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
        <div className="xl:w-80 lg:w-[16.8rem] xl:mx-0 lg:mx-0 xl:mt-0 lg:mt-0 md:mt-20 md:mx-[0.0rem] mx-3 m-12 flex flex-col p-3 bg-[#213743] rouded">
          {isManual ? (
            <div>
              <div className="text-[#B1BAD3] flex justify-between font-semibold text-sm my-2 select-none">
                <label>Bet Amount</label>
                <label>₹{values?.betamount ? values?.betamount : "0.00"}</label>
              </div>
              <div className="flex border-1 rounded-md border-[#2F4553] bg-[#2F4553] group">
                <div className="relative flex">
                  {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div> */}
                  <input
                    type="number"
                    placeholder="0.00"
                    min={0}
                    name="betamount"
                    value={
                      values?.betamount
                        ? values?.betamount
                        : restor?.restoreData?.[0]?.length > 0
                          ? restor?.betAmount
                          : values?.betamount || ""
                    }
                    onChange={(e) => {
                      handleOnChange(e);
                      if (restor?.restoreData?.[0]?.length > 0) {
                        dispatch(setRestor({ betAmount: "" }));
                      }
                    }}
                    className={`xl:w-48 lg:w-36 md:w-72 pr-1.5 pl-2 py-2 w-64 rounded-l text-white border-2 group-hover:border-[#557086] focus:border-[#557086] hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none ${showRandomField && "cursor-not-allowed opacity-80"
                      }`}
                    disabled={showRandomField}
                  />
                </div>
                <button
                  className={`w-16 text-lg font-bold hover:bg-[#5c849e68] ${showRandomField
                    ? "cursor-not-allowed opacity-80"
                    : "hover:bg-[#5c849e68]"
                    }`}
                  onClick={() =>
                    dispatch(
                      setValues({
                        ...values,
                        betamount: values?.betamount / 2,
                      })
                    )
                  }
                  disabled={showRandomField}
                >
                  ½
                </button>
                <Divider
                  flexItem
                  orientation="vertical"
                  sx={{ my: 1.5, backgroundColor: "#1A2c38", width: "2px" }}
                />
                <button
                  className={`w-16 text-sm font-bold ${showRandomField
                    ? "cursor-not-allowed opacity-80"
                    : "hover:bg-[#5c849e68]"
                    }`}
                  onClick={() =>
                    dispatch(
                      setValues({
                        ...values,
                        betamount: values?.betamount * 2,
                      })
                    )
                  }
                  disabled={showRandomField}
                >
                  2×
                </button>
              </div>
              <button
                className={`${gameBet && !isGameOver
                  ? "bg-[#489649]"
                  : "bg-[#1fff20] hover:bg-[#42ed45]"
                  } text-black mt-3.5 py-3 rounded font-semibold w-full`}
                onClick={handleBetClick}
                disabled={
                  gameBet &&
                  !isGameOver &&
                  (tileSelected?.tileIndex === undefined ||
                    tileSelected?.multiplier < 1) &&
                  !restor?.currentStep > 0
                }
              >
                {gameBet && !isGameOver ? "Cashout" : "Bet"}
              </button>
              <div>
                <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mt-1 my-2 select-none">
                  <label>Difficulty</label>
                </div>
                <div
                  className={`relative flex rounded ${showRandomField ? "" : "hover:border-[#557086]"
                    } bg-[#2F4553]`}
                >
                  <select
                    type="select"
                    name="difficulty"
                    value={values?.difficulty}
                    onChange={(e) => handleOnChange(e)}
                    className={`w-full px-2 py-2 text-white border-2 rounded border-[#4d718768] bg-[#0f212e] 
                        hover:border-[#557086] font-semibold focus:border-[#557086] focus:outline-none ${showRandomField && "cursor-not-allowed opacity-80"
                      }`}
                    disabled={showRandomField}
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                    <option value="expert">Expert</option>
                    <option value="master">Master</option>
                  </select>
                </div>
              </div>

              {showRandomField && (
                <div>
                  <button
                    className="bg-[#2f4553] hover:bg-[#5c849e68] rounded w-full p-2 mt-2.5 select-none"
                    onClick={pickRandomTile}
                  >
                    Pick random tile
                  </button>
                  <div className="text-[#b1bad3] flex justify-between font-semibold text-m mt-3 mb-1 select-none">
                    <label>
                      Total Profit (
                      {tileSelected?.multiplier
                        ? tileSelected?.multiplier
                        : restor?.restoreData?.[0]?.length > 0
                          ? restorMultiplier
                          : "1.00"}
                      x )
                    </label>
                    <label>
                      ₹
                      {(
                        (values?.betamount
                          ? values?.betamount
                          : restor?.restoreData?.length > 0
                            ? restor?.betAmount
                            : 0) *
                        (tileSelected?.multiplier
                          ? tileSelected?.multiplier
                          : tileSelected?.mineLocations?.length > 0
                            ? restorMultiplier
                            : 0.0)
                      ).toFixed(2)}
                    </label>
                  </div>
                  <div className="flex justify-between items-cente p-2 rounded text-white border-2 hover:border-[#557086] focus:border-[#557086] border-[#2F4553] bg-[#2f4553] focus:outline-none">
                    <p>
                      {(values?.betamount
                        ? values?.betamount
                        : restor?.restoreData?.[0]?.length > 0
                          ? restor?.betAmount
                          : values?.betamount) *
                        (tileSelected?.multiplier
                          ? tileSelected?.multiplier
                          : restor?.restoreData?.[0]?.length > 0
                            ? restorMultiplier
                            : 0.0)}
                    </p>
                    {/* <RiMoneyRupeeCircleFill
                      color="yellow"
                      className="text-xl"
                    /> */}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              {autoBetOnClick ? (
                <button
                  className={` bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3 py-3 rounded-md font-semibold w-full focus:outline-none focus:border-transparent`}
                  onClick={() => handleOnStopAutoBet()}
                >
                  Stop Autobet
                </button>
              ) : (
                <button
                  className={`text-black ${Object.keys(preSelectTile).length > 0
                    ? "bg-[#1fff20] hover:bg-[#42ed45] cursor-pointer"
                    : "bg-[#489649] cursor-default"
                    } mt-3 py-3 rounded font-semibold w-full focus:outline-none focus:border-transparent`}
                  onClick={() =>
                    values?.numberofbet === undefined ||
                      values?.numberofbet === ""
                      ? toast.error("Please enter a number of bets")
                      : handleOnAutoBet()
                  }
                >
                  Start Autobet
                </button>
              )}
              <div className="text-[#b1bad3] text-sm flex justify-between font-semibold my-2 select-none">
                <label>Bet Amount</label>
                <label>₹{values?.betamount ? values?.betamount : "0.00"}</label>
              </div>
              <div className="flex border-1 rounded border-[#2F4553] bg-[#2F4553] group">
                <div className="relative flex">
                  {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">₹
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div> */}
                  <input
                    className="xl:w-48 lg:w-40 md:w-64 w-60 pr-1.5 pl-2 py-2 rounded-l focus:border-[#557086] group-hover:border-[#557086] text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0.00"
                    step="0.01"
                    name="betamount"
                    value={
                      values?.betamount
                        ? values?.betamount
                        : restor?.restoreData?.[0]?.length > 0
                          ? restor?.betAmount
                          : values?.betamount || ""
                    }
                    onChange={(e) => {
                      handleOnChange(e);
                      if (restor?.restoreData?.[0]?.length > 0) {
                        dispatch(setRestor({ betAmount: "" }));
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
                  2x
                </button>
              </div>
              <div className="text-[#b1bad3] text-sm font-semibold text-m mt-1 my-2 select-none">
                <label>Difficulty</label>
              </div>
              <div className="relative flex">
                <select
                  type="select"
                  name="difficulty"
                  value={values?.difficulty}
                  onChange={(e) => handleOnChange(e)}
                  className="w-full px-2 py-2 text-white border-2 font-semibold rounded-md border-[#4d718768] bg-[#0f212e] 
                        hover:border-[#557086] focus:border-[#557086] focus:outline-none"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                  <option value="expert">Expert</option>
                  <option value="master">Master</option>
                </select>
              </div>
              <div className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1 mb-1 select-none">
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
                  className="w-full pr-7 pl-2 py-2 rounded border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                  type="number"
                  placeholder="0"
                  min={0}
                  name="numberofbet"
                  value={
                    dragonAutoBetResult?.currentBet > 0
                      ? dragonAutoBetResult?.currentBet - 1
                      : parseInt(values?.numberofbet) || ""
                  }
                  onChange={(e) => {
                    handleOnChange(e);
                    if (dragonAutoBetResult?.currentBet > 0) {
                      dispatch(setDragonAutoBetResult({ currentBet: "" }));
                    }
                  }}
                />
              </div>
              <div className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1 mb-1 select-none">
                <label>On win</label>
              </div>
              <div className="flex items-center space-x-0.5 mt-1 mb-2 rounded bg-[#2f4553]">
                <button
                  className={`${onProfit.win
                    ? "bg-[#0f212e] rounded"
                    : "rounded hover:bg-[#85afca68]"
                    } xl:px-2.5 lg:px-3.5 md:px-3 px-3 py-1.5 ml-0.5 rounded`}
                  onClick={() => {
                    setOnProfit({ ...onProfit, win: true });
                    dispatch(setValues({ ...values, onwin: "" }));
                  }}
                >
                  Reset
                </button>
                <button
                  className={`${onProfit.win
                    ? "hover:bg-[#85afca68] rounded"
                    : "bg-[#0f212e] rounded"
                    } xl:px-[0.3rem] lg:px-[0.3rem] md:px-2 px-2 py-1.5 rpunded`}
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
                    className="w-[9.69rem] xl:w-[8.8rem] lg:w-[4.89rem] md:w-[9.5rem] pr-7 pl-2 py-1.5 rounded text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0"
                    name="onwin"
                    value={values?.onwin || ""}
                    onChange={(e) => handleOnChange(e)}
                    disabled={onProfit.win}
                  />
                </div>
              </div>
              <div className="text-[#b1bad3] text-sm flex justify-between font-semibold mt-1.5 mb-1 select-none">
                <label>On Lose</label>
              </div>
              <div className="flex items-center space-x-0.5 mt-1 rounded bg-[#2f4553]">
                <div>
                  <button
                    className={`${onProfit.lose
                      ? "bg-[#0f212e] rounded"
                      : "hover:bg-[#85afca68] rounded"
                      } xl:px-2.5 lg:px-3.5 md:px-3 px-3 py-1.5 ml-0.5 rounded`}
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
                      ? "hover:bg-[#85afca68] rounded"
                      : "bg-[#0f212e] rounded"
                      } xl:px-[0.3rem] lg:px-[0.3rem] md:px-2 px-2 py-1.5 rounded`}
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
                    className="w-[9.69rem] xl:w-[8.8rem] lg:w-[4.89rem] md:w-[9.5rem] pr-7 pl-2 py-1.5 rounded text-white border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                    type="number"
                    placeholder="0"
                    name="onlose"
                    value={values?.onlose || ""}
                    onChange={(e) => handleOnChange(e)}
                    disabled={onProfit.lose}
                  />
                </div>
              </div>
              <div className="text-[#B1BAD3] font-bold flex justify-between text-xs mt-2 mb-1 select-none">
                <label>Stop on Profit</label>
                <label>
                  ₹{values?.stoponprofit ? values?.stoponprofit : "0.00"}
                </label>
              </div>
              <div className="relative flex">
                {/* <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
              <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
            </div> */}
                <input
                  className="w-full pr-1.5 px-2 py-2 text-white rounded border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                  type="number"
                  placeholder="0.01"
                  step="0.01"
                  name="stoponprofit"
                  value={values?.stoponprofit || ""}
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
              <div className="text-[#b1bad3] flex justify-between font-bold text-xs mt-2 mb-1 select-none">
                <label>Stop on Loss</label>
                <label>
                  ₹{values?.stoponloss ? values?.stoponloss : "0.00"}
                </label>
              </div>
              <div className="relative flex">
                {/* <div className="cursor-text text-[#B1BAD3] absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
              <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
            </div> */}
                <input
                  className="w-full pr-1.5 px-2 py-2 text-white rounded border-2 hover:border-[#557086] border-[#2F4553] bg-[#0f212e] focus:outline-none"
                  type="number"
                  placeholder="0.01"
                  step="0.01"
                  name="stoponloss"
                  value={values?.stoponloss || ""}
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
            </div>
          )}
          <div className="flex overflow-x-auto overflow-y-hidden transform translate-z-0">
            <div className="bg-[#0f212e] flex grow rounded-full p-[5px] flex-shrink-0 mt-3">
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

export default DragonSidebar;
