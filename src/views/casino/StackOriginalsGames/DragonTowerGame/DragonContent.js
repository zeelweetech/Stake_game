import React, { useEffect, useState } from "react";
import Boxsvg from "../../../../assets/svg/DragonTowerBox.svg";
import dragonFrame from "../../../../assets/img/dragonFrame.jpg";
import easyEgg from "../../../../assets/img/easyEgg.svg";
import mediumEgg from "../../../../assets/img/mediumEgg.svg";
import masterEgg from "../../../../assets/img/masterEgg.svg";
import expertEgg from "../../../../assets/img/expertEgg.svg";
import hardEgg from "../../../../assets/img/hardEgg.svg";
import easySkull from "../../../../assets/svg/easySkull.svg";
import mediumSkull from "../../../../assets/svg/mediumSkull.svg";
import masterSkull from "../../../../assets/svg/masterSkull.svg";
import expertSkull from "../../../../assets/svg/expertSkull.svg";
import hardSkull from "../../../../assets/svg/hardSkull.svg";
import { useDispatch, useSelector } from "react-redux";
import { DragonTowerSocket } from "../../../../socket";
import { useParams } from "react-router-dom";
import { decodedToken } from "../../../../resources/utility";
import {
  setRestodMultiplier,
  setRestor,
  setShowRandomField,
  setTileSelected,
} from "../../../../features/casino/dragonTowerSlice";
import toast from "react-hot-toast";

function DragonContent() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [clickedBoxes, setClickedBoxes] = useState({});
  const [isGameOver, setIsGameOver] = useState(false);
  const { values, gameBet } = useSelector((state) => state.dragonTowerGame);
  const decoded = decodedToken();

  useEffect(() => {
    DragonTowerSocket.emit("joinGame", {
      userId: decoded?.userId,
      gameId: id,
    });

    DragonTowerSocket.on("gameRestored", (data, currentMultiplier) => {
      console.log("gameRestored data *-*-*-*-*--*-*", data, currentMultiplier);
      dispatch(setRestor(data));
      dispatch(setRestodMultiplier(currentMultiplier));
    });
  }, []);

  const handleBoxClick = (rowIndex, boxIndex) => {
    if (gameBet && !isGameOver) {
      if (clickedBoxes[rowIndex] !== undefined) {
        return;
      }

      DragonTowerSocket.emit("selectTile", {
        userId: decoded?.userId.toString(),
        gameId: id,
        tileIndex: boxIndex,
        tileStep: rowIndex,
      });

      console.log("rowIndex ::::::::::", rowIndex);
      console.log("boxIndex  ************", boxIndex);
      setClickedBoxes((prev) => ({
        ...prev,
        [rowIndex]: boxIndex,
      }));
    }
  };

  DragonTowerSocket.on("Insufficientfund", (fundData) => {
    console.log("fundData ********", fundData);
    toast.apply("Insufficientfund data");
  });

  DragonTowerSocket.on("gameStarted", (data) => {
    console.log("gameStarted data", data);
    // dispatch(setGameStart(data));
  });

  DragonTowerSocket.on("tileSelected", (data) => {
    console.log("tileSelected data", data);
    dispatch(setTileSelected(data));
  });

  DragonTowerSocket.on("gameOver", (data) => {
    console.log("gameOver data", data);
    setIsGameOver(true);
  });

  DragonTowerSocket.on("cashoutSuccess", (data) => {
    console.log("cashoutSuccess data", data);
  });

  DragonTowerSocket.on("walletBalance", (data) => {
    console.log("walletBalance data", data);
    // dispatch(setWallet(data?.walletBalance));
  });

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

  const boxesPerRow = getBoxesPerRow();
  const rows = 9;

  const EggImages = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return easyEgg;
      case "medium":
        return mediumEgg;
      case "hard":
        return hardEgg;
      case "master":
        return masterEgg;
      default:
        return expertEgg;
    }
  };

  const SkullImages = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return easySkull;
      case "medium":
        return mediumSkull;
      case "hard":
        return hardSkull;
      case "master":
        return masterSkull;
      default:
        return expertSkull;
    }
  };

  const eggImageSrc = EggImages(values.difficulty);
  const skullImageSrc = SkullImages(values.difficulty);

  return (
    <div className="flex flex-col items-center bg-cover">
      <div className="dragonBackImage xl:w-[52rem] lg:w-[36.8rem] pt-14 pb-14">
        <div className="flex flex-col items-center">
          <div className="flex justify-center">
            <img
              src={dragonFrame}
              className="w-[39rem] h-[40rem]"
              alt="Not Found"
            />
          </div>

          <div
            className={`flex flex-col gap-3 bg-[#182433] lg:w-[28.9rem] xl:w-[30.6rem] p-3 mt-[-31.5rem] border-2 border-gray-800 shadow-lg`}
          >
            {(() => {
              const rowElements = [];
              const lastClickedRowIndex = Math.max(...Object.keys(clickedBoxes).map(Number));
              for (let rowIndex = rows - 1; rowIndex >= 0; rowIndex--) {
                const boxElements = [];
                for (let boxIndex = 0; boxIndex < boxesPerRow; boxIndex++) {
                  boxElements.push(
                    <div
                      key={`${rowIndex}-${boxIndex}`}
                      className={`rounded-md w-full h-10 flex justify-center items-center ${
                        isGameOver
                          ? "cursor-not-allowed bg-[#213743]"
                          : (gameBet && rowIndex === 0) ||
                            clickedBoxes[rowIndex - 1] !== undefined
                          ? "bg-[#00e701] text-[#00b801]"
                          : "cursor-not-allowed bg-[#213743]"
                      } ${
                        clickedBoxes[rowIndex] !== undefined
                          ? "bg-[#213743]"
                          : ""
                      }`}
                      onClick={() => handleBoxClick(rowIndex, boxIndex)}
                    >
                      <img
                        src={
                          isGameOver && clickedBoxes[lastClickedRowIndex] === boxIndex && lastClickedRowIndex === rowIndex
                            ? skullImageSrc
                            : clickedBoxes[rowIndex] === boxIndex
                            ? eggImageSrc
                            : Boxsvg
                        }
                        alt="Not Found"
                        className="w-auto h-full object-cover rounded-md"
                      />
                    </div>
                  );
                }
                rowElements.push(
                  <div key={rowIndex} className="flex gap-3">
                    {boxElements}
                  </div>
                );
              }
              return rowElements;
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DragonContent;
