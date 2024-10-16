import React, { useState } from "react";
import { Divider, TextField } from "@mui/material";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoInfiniteSharp } from "react-icons/io5";
import PercentIcon from "@mui/icons-material/Percent";
import { useDispatch, useSelector } from "react-redux";
import {
  setGameBet,
  setGamesOver,
  setMineValue,
} from "../../../../features/casino/minesSlice";
import { MineSocket } from "../../../../socket";
import { decodedToken } from "../../../../resources/utility";
import { useParams } from "react-router-dom";

function MinesGameSidebar() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isManual, setIsManual] = useState(true);
  const [onProfit, setOnProfit] = useState({ win: true, lose: true });
  const [autoBetOnClick, setAutoBetOnClick] = useState(false);
  const [showFields, setShowFields] = useState(false);
  const {
    bettingStatus,
    mineValue = { betamount: "", mines: 1 },
    gameBet,
    minesBetStatus,
    tileSelect,
    restored,
  } = useSelector((state) => state.minesGame);
  const decoded = decodedToken();

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    dispatch(setMineValue({ ...mineValue, [name]: value }));
  };

  const onStartGame = () => {
    dispatch(setGameBet(true));
    dispatch(setGamesOver(false));
  };

  MineSocket.on("cashoutSuccess", (data) => {
    console.log("cashoutSuccess data", data);
  });

  const handleBetClick = () => {
    if (!gameBet) {
      onStartGame(mineValue.betamount);
      setShowFields(true);

      MineSocket.emit("minePlaceBet", {
        userId: decoded?.userId.toString(),
        gameId: id,
        totalMines: mineValue?.mines,
        betAmount: mineValue?.betamount,
      });
    } else {
      dispatch(setGamesOver(true));
      dispatch(setGameBet(false));
      setShowFields(false);
      MineSocket.emit("cashout", {
        userId: decoded?.userId.toString(),
        gameId: id,
      });
    }
  };

  const gems = 25 - mineValue?.mines || 0;

  const pickRandomTile = () => {
    const index = Math.floor(Math.random() * 25);
    MineSocket.emit("selectTile", {
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
                value={mineValue?.betamount}
                onChange={(e) => handleOnChange(e)}
                className={`xl:w-48 lg:w-36 pr-9 pl-2 py-2 rounded-s-md text-white bg-[#0f212e] ${
                  minesBetStatus && "cursor-not-allowed"
                }`}
                disabled={minesBetStatus}
              />
            </div>
            <button
              className={`w-16 text-xs hover:bg-[#5c849e68] ${
                minesBetStatus && "cursor-not-allowed"
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
              1/2
            </button>
            <Divider
              flexItem
              orientation="vertical"
              sx={{ my: 1, backgroundColor: "rgba(0, 0, 0, 0.12)" }}
            />
            <button
              className={`w-16 text-xs hover:bg-[#5c849e68] ${
                minesBetStatus && "cursor-not-allowed"
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

          {showFields || restored?.mineLocations?.length > 0  ? (
            <div>
              <div className="flex space-x-2">
                <div>
                  <div className="text-[#b1bad3] flex justify-between font-semibold text-m mt-3 mb-1">
                    <label>Mines</label>
                  </div>
                  <div className="bg-[#2f4553] border border-[#0e2433] xl:w-36 lg:w-[7.4rem] p-2 mt-2.5">
                    {mineValue?.mines}
                  </div>
                </div>
                <div>
                  <div className="text-[#b1bad3] flex justify-between font-semibold text-m mt-3 mb-1">
                    <label>Gems</label>
                  </div>
                  <div className="bg-[#2f4553] border border-[#0e2433] xl:w-36 lg:w-[7.4rem] p-2 mt-2.5">
                    {gems}
                  </div>
                </div>
              </div>
              <div className="text-[#b1bad3] flex justify-between font-semibold text-m mt-3 mb-1">
                <label>
                  Total Profit (
                  {tileSelect?.multiplier ? tileSelect?.multiplier : "0.00"}x)
                </label>
                <label>$0.00</label>
              </div>
              <div className="flex justify-between items-center bg-[#2f4553] border border-[#0e2433] rounded p-2">
                <p>0.000000000</p>
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div>
              <button
                className="bg-[#2f4553] border border-[#0e2433] w-full p-2 mt-2.5"
                // onClick={pickRandomTile}
                onClick={pickRandomTile}
              >
                Pick random tile
              </button>
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
                  className="w-full px-2 py-2 text-white border-2 rounded-md border-[#4d718768] bg-[#0f212e]"
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
              </div>
            </div>
          )}

          <button
            className={`${
              gameBet ? "bg-[#489649]" : "bg-[#1fff20] hover:bg-[#42ed45]"
            } text-black mt-3.5 py-3 rounded-md font-semibold w-full`}
            onClick={handleBetClick}
          >
            {gameBet ? "Cashout" : "Bet"}
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
                // value={crashValues?.betamount}
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
            <label>Mines</label>
          </div>
          <div className="relative flex">
            <select
              type="select"
              name="mines"
              value={mineValue?.mines}
              onChange={(e) => handleOnChange(e)}
              className="w-full px-2 py-1.5 text-white border-2 rounded-md border-[#4d718768] bg-[#0f212e]"
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
              // value={crashValues?.numberofbet}
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
              } px-5 py-1.5 rounded-md`}
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
              } px-[0.47rem] py-1.5`}
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
                className="w-28 pr-5 pl-2 py-1.5 rounded-md text-white bg-[#0f212e]"
                type="number"
                placeholder="0"
                name="onwin"
                // value={crashValues?.onwin}
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
                } px-5 py-1.5 rounded-md`}
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
                } px-[0.47rem] py-1.5`}
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
                className="w-28 pr-7 pl-2 py-1.5 rounded-md text-white bg-[#0f212e]"
                type="number"
                placeholder="0"
                name="onlose"
                // value={crashValues?.onlose}
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
              // value={crashValues?.stoponprofit}
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
              // value={crashValues?.stoponloss}
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

export default MinesGameSidebar;
