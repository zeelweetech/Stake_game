import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
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
  setRestored,
  setRestoredMultiplier,
  setShowFields,
} from "../../../../features/casino/minesSlice";
import toast from "react-hot-toast";

function MinesGameContent() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [images, setImages] = useState(Array(25).fill(null));
  const [revealed, setRevealed] = useState(Array(25).fill(false));
  const [zoomClass, setZoomClass] = useState(Array(25).fill(false));
  const [cashoutResult, setCashoutResult] = useState(null);
  const { gamesOver, gameStart, tileSelect, mineValue, gameBet, restored } =
    useSelector((state) => state.minesGame);
  const decoded = decodedToken();

  useEffect(() => {
    MineSocket.emit("joinGame", {
      userId: decoded?.userId,
      gameId: id,
    });

    MineSocket.on("gameRestored", (data, currentMultiplier) => {
      dispatch(setRestored(data));
      dispatch(setRestoredMultiplier(currentMultiplier));

      const newImages = [...images];
      const newRevealed = [...revealed];

      data.mineLocations.forEach(({ tileIndex, isMine, selected }) => {
        if (selected === 1 && !isMine) {
          newImages[tileIndex] = { icon: diamondIcon, size: 100 };
          newRevealed[tileIndex] = true;
        } else if (isMine) {
          newImages[tileIndex] = { icon: bombIcon, size: 100 };
          newRevealed[tileIndex] = true;
        }
      });

      setImages(newImages);
      setRevealed(newRevealed);
    });
  }, []);

  MineSocket.on("Insufficientfund", (fundData) => {
    toast.apply("Insufficientfund data");
  });

  MineSocket.on("gameStarted", (data) => {
    dispatch(setGameStart(data));
    setImages(Array(25).fill(null));
    setRevealed(Array(25).fill(false));
    setZoomClass(Array(25).fill(false));
  });

  // game tile selected event
  MineSocket.on("tileSelected", (data) => {
    dispatch(setTileSelect(data));
    handleTileSelection(data.tileIndex, data.isBomb);
  });

  const handleTileSelection = (index, isBomb) => {
    const newImages = [...images];
    const newRevealed = [...revealed];

    setTimeout(() => {
      newImages[index] = isBomb
        ? { icon: bombIcon, size: 100 }
        : { icon: diamondIcon, size: 100 };
      newRevealed[index] = true;
      setImages(newImages);
      setRevealed(newRevealed);

      if (isBomb) {
        dispatch(setGamesOver(true));
        dispatch(setGameBet(false));
        revealAll(newImages);
      }
    }, 800);
  };

  // game Over event
  MineSocket.on("gameOver", (data) => {
    const { clickedMine, remainingMines } = data;
    handleGameOver(clickedMine, remainingMines);
    dispatch(setShowFields(false));
  });

  const handleGameOver = (clickedMine, remainingMines) => {
    const newImages = [...images];
    const newRevealed = [...revealed];

    newImages[clickedMine] = {
      icon: bombIcon,
      size: 90,
      opacity: 1,
      className: "bomb-blast",
    };
    newRevealed[clickedMine] = true;

    remainingMines.forEach((mineIndex) => {
      if (mineIndex !== clickedMine) {
        newImages[mineIndex] = { icon: bombIcon, size: 60, opacity: 0.5 };
        newRevealed[mineIndex] = true;
      }
    });

    setTimeout(() => {
      revealAll(newImages);
      setImages(newImages);
      setRevealed(newRevealed);

      dispatch(setGamesOver(true));
      dispatch(setGameBet(false));
    }, 1000);
  };

  const revealAll = (newImages) => {
    const newRevealed = [...revealed];

    for (let i = 0; i < 25; i++) {
      if (!newRevealed[i]) {
        newImages[i] = newImages[i] || {
          icon: diamondIcon,
          size: 80,
          opacity: 0.5,
        };
        newRevealed[i] = true;
      }
    }

    setImages(newImages);
    setRevealed(newRevealed);
  };

  MineSocket.on("cashoutSuccess", (data) => {
    setCashoutResult(data);

    const newImages = Array(25).fill(null);
    const newRevealed = Array(25).fill(false);

    const bombPositions = placeBombs(
      25,
      mineValue?.mines,
      tileSelect.tileIndex
    );
    bombPositions.forEach((index) => {
      newImages[index] = { icon: bombIcon, size: 60, opacity: 0.5 };
      newRevealed[index] = true;
    });

    for (let i = 0; i < 25; i++) {
      if (!bombPositions.includes(i)) {
        newImages[i] = { icon: diamondIcon, size: 90, opacity: 0.5 };
        newRevealed[i] = true;
      }
    }

    setImages(newImages);
    setRevealed(newRevealed);
  });

  const placeBombs = (totalTiles, bombCount, selectedTileIndex) => {
    const bombPositions = new Set();
    while (
      bombPositions.size < (restored?.mines ? restored?.mines : bombCount)
    ) {
      const randomIndex = Math.floor(Math.random() * totalTiles);
      if (randomIndex !== selectedTileIndex) {
        bombPositions.add(randomIndex);
      }
    }
    return Array.from(bombPositions);
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
    <div className="bg-[#0f212e] h-full flex flex-col items-center justify-center xl:w-[52rem] lg:w-[36.8rem]">
      {cashoutResult && !gameBet && (
        <div className="mt-4 w-40 py-5 space-y-3 rounded-lg bg-[#1a2c38] text-center border-4 border-[#1fff20] text-[#1fff20] absolute z-20">
          <p className="text-3xl font-medium">{cashoutResult?.multiplier}x</p>
          <div className="flex items-center justify-center space-x-1">
            <p>0.00000000</p>
            <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
          </div>
        </div>
      )}
      <div className="grid grid-cols-5 gap-2.5 relative z-10">
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
              cursor: revealed[index] ? "default" : "pointer",
            }}
          >
            {img && (
              <img
                style={{
                  width: img.size,
                  height: img.size,
                  opacity: img.opacity || 1,
                }}
                className={`flex justify-center items-center ${
                  revealed[index] || gamesOver ? "reveal-animation" : "hidden"
                } ${img.className || ""}`}
                src={img.icon}
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
