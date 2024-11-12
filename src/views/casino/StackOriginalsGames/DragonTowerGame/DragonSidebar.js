import React, { useEffect, useState } from "react";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoInfiniteSharp } from "react-icons/io5";
import { Divider } from "@mui/material";
import PercentIcon from "@mui/icons-material/Percent";
import { useDispatch, useSelector } from "react-redux";
import {
  setGameBet,
  setIsGameOver,
  setShowRandomField,
  setValues,
} from "../../../../features/casino/dragonTowerSlice";
import { DragonTowerSocket } from "../../../../socket";
import { decodedToken } from "../../../../resources/utility";
import { useParams } from "react-router-dom";
import { openRegisterModel } from "../../../../features/auth/authSlice";

function DragonSidebar() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isManual, setIsManual] = useState(true);
  const [onProfit, setOnProfit] = useState({ win: true, lose: true });
  const [autoBetOnClick, setAutoBetOnClick] = useState(false);
  const {
    values = { betamount: "", difficulty: "medium" },
    bettingStatus,
    showRandomField,
    gameBet,
    tileSelected,
    restor,
    restorMultiplier,
    isGameOver
  } = useSelector((state) => state.dragonTowerGame);
  const decoded = decodedToken();

  useEffect(() => {
    if (restor && restor.difficulty) {
      dispatch(setValues({ ...values, difficulty: restor.difficulty }));
    }
  }, [restor, dispatch]);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    dispatch(setValues({ ...values, [name]: value }));
  };

  const handleBetClick = () => {
    if (gameBet || restor?.restoreData?.length > 0) {
      DragonTowerSocket.emit("cashout", {
        userId: decoded?.userId.toString(),
        gameId: id,
        betId: restor?.betId,
      });
      dispatch(setGameBet(false));
      dispatch(setShowRandomField(false));
      dispatch(setIsGameOver(true))
    } else {
      if (!localStorage.getItem("token")) {
        dispatch(openRegisterModel());
      } else {
        DragonTowerSocket.emit("dragonTowerPlaceBet", {
          userId: decoded?.userId.toString(),
          gameId: id,
          betAmount: values?.betamount,
          difficulty: values?.difficulty,
          betType: "Manual",
        });
        dispatch(setGameBet(true));
        dispatch(setIsGameOver(false))
        dispatch(setShowRandomField(true));
      }
    }
  };

  const pickRandomTile = () => {
    const index = Math.floor(Math.random() * 25);
    DragonTowerSocket.emit("selectTile", {
      userId: decoded?.userId.toString(),
      gameId: id,
      tileIndex: index,
    });
  };

  return (
    <div className="xl:w-80 lg:w-[16.8rem] flex flex-col p-3 bg-[#213743] rounded-tl-lg">
      <div className="flex overflow-x-auto overflow-y-hidden transform translate-z-0">
        <div className="bg-[#0f212e] flex grow rounded-full p-[5px] flex-shrink-0">
          <div className="flex space-x-2">
            <button
              className={`py-2 xl:w-[8.6rem] lg:w-[7.05rem] rounded-full ${
                isManual ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
              }`}
              onClick={() => setIsManual(true)}
            >
              Manual
            </button>
            <button
              className={`py-2 xl:w-[8.6rem] lg:w-[7.1rem] rounded-full ${
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
          <div className="text-[#b1bad3] flex justify-between font-semibold text-m mt-3 mb-1">
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
                name="betamount"
                value={values?.betamount || ""}
                onChange={(e) => handleOnChange(e)}
                className={`xl:w-48 lg:w-36 pr-9 pl-2 py-2 rounded-s-md text-white bg-[#0f212e] ${
                  showRandomField && "cursor-not-allowed opacity-80"
                }`}
                disabled={showRandomField}
              />
            </div>
            <button
              className={`w-16 text-xs ${
                showRandomField
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
              1/2
            </button>
            <Divider
              flexItem
              orientation="vertical"
              sx={{ my: 1, backgroundColor: "rgba(0, 0, 0, 0.12)" }}
            />
            <button
              className={`w-16 text-xs ${
                showRandomField
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
              2x
            </button>
          </div>

          <div>
            <div className="text-[#b1bad3] flex justify-between font-semibold text-m mt-3 mb-1">
              <label>Difficulty</label>
            </div>
            <div className="relative flex">
              <select
                type="select"
                name="difficulty"
                value={values?.difficulty}
                onChange={(e) => handleOnChange(e)}
                className={`w-full px-2 py-2 text-white border-2 rounded-md border-[#4d718768] bg-[#0f212e] ${
                  showRandomField && "cursor-not-allowed opacity-80"
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

          {/* showRandomField || restor?.restoreData?.length > 0 || */}
          {showRandomField || restor?.restoreData?.[0]?.length > 0 && (
            <div>
              <button
                className="bg-[#2f4553] hover:bg-[#5c849e68] border border-[#0e2433] w-full p-2 mt-2.5"
                onClick={pickRandomTile}
              >
                Pick random tile
              </button>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-m mt-3 mb-1">
                <label>
                  Total Profit (
                  {tileSelected?.multiplier
                    ? tileSelected?.multiplier
                    : restor?.restoreData?.[0]?.length > 0
                    ? restorMultiplier
                    : "1.00"}
                  x )
                </label>
                <label>$0.00</label>
              </div>
              <div className="flex justify-between items-center bg-[#2f4553] border border-[#0e2433] rounded p-2">
                <p>
                  {(values?.betamount
                    ? values?.betamount
                    : restor?.restoreData?.length > 0
                    ? restor?.betAmount
                    : 0) *
                    (tileSelected?.multiplier
                      ? tileSelected?.multiplier
                      : tileSelected?.mineLocations?.length > 0
                      ? restorMultiplier
                      : 0.0)}
                </p>
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div>
            </div>
          )}

          <button
            className={`${
              gameBet || restor?.restoreData?.[0]?.length > 0 ? "bg-[#489649]" : "bg-[#1fff20] hover:bg-[#42ed45]"
            } text-black mt-3.5 py-3 rounded-md font-semibold w-full`}
            onClick={handleBetClick}
          >
            {gameBet || restor?.restoreData?.[0]?.length > 0 ? "Cashout" : "Bet"}
          </button>
        </div>
      ) : (
        <div>
          <div className="text-[#b1bad3] text-sm flex justify-between font-semibold my-1">
            <label>Bet Amount</label>
            <label>0.00000000 BTC</label>
          </div>
          <div className="flex border-2 rounded-md border-[#4d718768] bg-[#4d718768]">
            <div className="relative flex">
              <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div>
              <input
                className="xl:w-48 lg:w-40 pr-9 pl-2 py-1 rounded-s-md text-white bg-[#0f212e]"
                type="number"
                placeholder="0.00"
                step="0.01"
                name="betamount"
                value={values?.betamount || ""}
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
          <div className="text-[#b1bad3] text-sm flex justify-between font-semibold text-m mt-1.5 mb-1">
            <label>Difficulty</label>
          </div>
          <div className="relative flex">
            <select
              type="select"
              name="mines"
              value={values?.difficulty}
              onChange={(e) => handleOnChange(e)}
              className="w-full px-2 py-1.5 text-white border-2 rounded-md border-[#4d718768] bg-[#0f212e]"
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
              <option>Expert</option>
              <option>Master</option>
            </select>
          </div>
          <div className="text-[#b1bad3] text-sm flex justify-between font-semibold text-m mt-1.5 mb-1">
            <label>Number of Bets</label>
          </div>
          <div className="relative flex">
            <div className="cursor-text absolute flex top-1/2 right-2 -translate-y-1/2 pointer-events-none z-2">
              <IoInfiniteSharp className="text-xl" />
            </div>
            <input
              className="w-full pr-7 pl-2 py-1.5 rounded-md  text-white bg-[#0f212e]"
              type="number"
              placeholder="0"
              min={0}
              name="numberofbet"
              value={values?.numberofbet || ""}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div className="text-[#b1bad3] text-sm flex justify-between font-semibold text-m mt-1.5 mb-1">
            <label>On win</label>
          </div>
          <div className="flex items-center space-x-0.5 border-2 mt-1 mb-2 rounded-md border-[#4d718768] bg-[#4d718768]">
            <button
              className={`${
                onProfit.win
                  ? "bg-[#0f212e]"
                  : "bg-[#4d718768] hover:bg-[#85afca68]"
              } px-3.5 py-1.5 rounded-md`}
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
              } px-[0.3rem] py-1.5`}
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
                className="w-20 pr-5 pl-2 py-1.5 rounded-md text-white bg-[#0f212e]"
                type="number"
                placeholder="0"
                name="onwin"
                value={values?.onwin || ""}
                onChange={(e) => handleOnChange(e)}
                disabled={onProfit.win}
              />
            </div>
          </div>
          <div className="text-[#b1bad3] text-sm flex justify-between font-semibold text-m mt-1.5 mb-1">
            <label>On Lose</label>
          </div>
          <div className="flex items-center space-x-0.5 border-2 mt-1 rounded-md border-[#4d718768] bg-[#4d718768]">
            <div>
              <button
                className={`${
                  onProfit.lose
                    ? "bg-[#0f212e]"
                    : "bg-[#4d718768] hover:bg-[#85afca68]"
                } px-3.5 py-1.5 rounded-md`}
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
                } px-[0.3rem] py-1.5`}
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
                className="w-20 pr-7 pl-2 py-1.5 rounded-md text-white bg-[#0f212e]"
                type="number"
                placeholder="0"
                name="onlose"
                value={values?.onlose || ""}
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
              className="w-full pr-8 px-2 py-1.5 text-white border-2 rounded-md border-[#4d718768] bg-[#0f212e]"
              type="number"
              placeholder="0.01"
              step="0.01"
              name="stoponprofit"
              value={values?.stoponprofit || ""}
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
              className="w-full pr-8 px-2 py-1.5 text-white border-2 rounded-md border-[#4d718768] bg-[#0f212e]"
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
              className={` bg-[#1fff20] hover:bg-[#42ed45] text-black mt-3 py-3 rounded-md font-semibold w-full`}
              // onClick={() => handleOnCancelAutoBet()}
            >
              Cancel Autobet
            </button>
          ) : (
            <button
              className={`${
                bettingStatus === false
                  ? "bg-[#489649]"
                  : "bg-[#1fff20] hover:bg-[#42ed45]"
              } text-black mt-3 py-3 rounded-md font-semibold w-full`}
              // onClick={() => handleOnAutoBet()}
            >
              Start Autobet
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default DragonSidebar;
