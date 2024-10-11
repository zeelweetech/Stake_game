import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import bombIcon from "../../../../assets/img/bomb.svg";
import diamondIcon from "../../../../assets/img/Diamond.png";
import { decodedToken } from "../../../../resources/utility";
import { MineSocket } from "../../../../socket";
import { useParams } from "react-router-dom";
import {
  setGamesOver,
  setGameBet,
  setTileSelect,
  setGameStart,
} from "../../../../features/casino/minesSlice";

function MinesGameContent() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [images, setImages] = useState(Array(25).fill(null));
  const [revealed, setRevealed] = useState(Array(25).fill(false));
  const [zoomClass, setZoomClass] = useState(Array(25).fill(false));
  const { mineValue, gameBet, gamesOver, gameStart } = useSelector(
    (state) => state.minesGame
  );
  const decoded = decodedToken();

  useEffect(() => {
    MineSocket.on("gameRestored", (data) => {
      console.log("gameRestored data", data);
    });
  });

  MineSocket.on("gameStarted", (data) => {
    console.log("gameStarted data", data);
    dispatch(setGameStart(data));
    setImages(Array(25).fill(null));
    setRevealed(Array(25).fill(false));
    setZoomClass(Array(25).fill(false));
  });

  MineSocket.on("tileSelected", (data) => {
    console.log("tileSelected data", data);
    dispatch(setTileSelect(data));
    handleTileSelection(data.tileIndex, data.isBomb);
  });

  const handleTileSelection = (index, isBomb) => {
    const newImages = [...images];
    const newRevealed = [...revealed];
    const newZoomClass = [...zoomClass];

    newZoomClass[index] = true;
    setZoomClass(newZoomClass);

    setTimeout(() => {
      newImages[index] = isBomb ? bombIcon : diamondIcon;
      newRevealed[index] = true;
      setImages(newImages);
      setRevealed(newRevealed);

      if (isBomb) {
        dispatch(setGamesOver(true));
        dispatch(setGameBet(false));
        revealAll(newImages);
      }
    }, 900);
  };

  MineSocket.on("gameOver", (data) => {
    console.log("gameOver data", data);
    const { clickedMine, remainingMines } = data;

    handleGameOver(clickedMine, remainingMines);
  });

  const handleGameOver = (clickedMine, remainingMines) => {
    const newImages = [...images];
    const newRevealed = [...revealed];

    newImages[clickedMine] = bombIcon;
    newRevealed[clickedMine] = true;

    remainingMines.forEach((mineIndex) => {
      newImages[mineIndex] = bombIcon;
      newRevealed[mineIndex] = true;

    });

    revealAll(newImages);

    setImages(newImages);
    setRevealed(newRevealed);

    dispatch(setGamesOver(true));
    dispatch(setGameBet(false));
  };

  const revealAll = (newImages) => {
    const newRevealed = [...revealed];

    for (let i = 0; i < 25; i++) {
      if (!newRevealed[i]) {
        newImages[i] = newImages[i] || diamondIcon;
        newRevealed[i] = true;
      }
    }

    setImages(newImages);
    setRevealed(newRevealed);
  };

  const handleClick = (index) => {
    if (gamesOver || revealed[index]) return;

    MineSocket.emit("selectTile", {
      userId: decoded?.userId.toString(),
      gameId: id,
      tileIndex: index,
      betId: gameStart?.betId,
    });
  };

  return (
    <div className="bg-[#0f212e] h-full flex flex-col items-center justify-center xl:w-[52rem] lg:w-[37rem]">
      <div className="grid grid-cols-5 gap-2.5">
        {images.map((img, index) => (
          <div
            key={index}
            className={`flex justify-center items-center xl:w-28 lg:w-[6.5rem] xl:h-28 lg:h-[6.5rem] bg-[#2f4553] rounded-lg hover:-translate-y-1.5 hover:bg-[#688a9f] ${
              zoomClass[index] ? "zoom-in-out" : ""
            }`}
            onClick={() => handleClick(index)}
            style={{
              backgroundColor:
                revealed[index] || gamesOver ? "#071824" : "#2f4553",
              opacity: revealed[index] ? 1 : gamesOver ? 0.8 : 1,
              cursor: revealed[index] ? "default" : "pointer",
            }}
          >
            {img && (
              <img
                height={revealed[index] ? 100 : 80}
                width={revealed[index] ? 100 : 80}
                className={`flex justify-center items-center ${
                  revealed[index] || gamesOver ? "opacity-100" : "opacity-45"
                }`}
                src={img}
                alt="Icon"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MinesGameContent;
