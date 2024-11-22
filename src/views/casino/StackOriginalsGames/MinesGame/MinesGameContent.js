import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import bombIcon from "../../../../assets/img/bomb.svg";
import diamondIcon from "../../../../assets/img/Diamond.png";
import { decodedToken } from "../../../../resources/utility";
import { MineSocket } from "../../../../socket";
import { useParams } from "react-router-dom";
import winSound from "../../../../assets/Sound/winSound.wav"
import bombSound from "../../../../assets/Sound/bombSound.wav"
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
import { setWallet } from "../../../../features/auth/authSlice";

function MinesGameContent() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [images, setImages] = useState(Array(25).fill(null));
  const [revealed, setRevealed] = useState(Array(25).fill(false));
  const [zoomClass, setZoomClass] = useState(Array(25).fill(false));
  const [cashoutResult, setCashoutResult] = useState(null);
  const [firstMineIndex, setFirstMineIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const {
    gamesOver,
    gameStart,
    tileSelect,
    mineValue,
    gameBet,
    restored
  } = useSelector((state) => state.minesGame);
  const decoded = decodedToken();

  // console.log("mineValue", mineValue?.mines);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      dispatch(setGameBet(true));
    });
  }, []);

  MineSocket.on("Insufficientfund", (fundData) => {
    toast.apply("Insufficient funds");
  });

  MineSocket.on("walletBalance", (data) => {
    // console.log("data *******", data);
    dispatch(setWallet(data?.walletBalance));
  });

  MineSocket.on("gameStarted", (data) => {
    dispatch(setGameStart(data));
    setImages(Array(25).fill(null));
    setRevealed(Array(25).fill(false));
    setZoomClass(Array(25).fill(false));
  });

  // game tile selected event
  MineSocket.on("tileSelected", (data) => {
    console.log('data data data', data);
    
    dispatch(setTileSelect(data));
    handleTileSelection(data.tileIndex, data.isBomb);
  });

  // game Over event
  const handleTileSelection = (index, isBomb) => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] = isBomb
        ? { icon: bombIcon, size: isMobile ? 60 : 100 }
        : { icon: diamondIcon, size: isMobile ? 60 : 100 };
      return newImages;
    });

    setRevealed((prevRevealed) => {
      const newRevealed = [...prevRevealed];
      newRevealed[index] = true;
      return newRevealed;
    });

    if (isBomb) {
      dispatch(setGamesOver(true));
      dispatch(setGameBet(false));
      revealAll();

    }
  };

  MineSocket.on("gameOver", (data) => {
    const { clickedMine, remainingMines } = data;
    handleGameOver(clickedMine, remainingMines);
    dispatch(setShowFields(false));
    dispatch(setTileSelect({}))
    setCashoutResult(false)
  });

  const handleGameOver = (clickedMine, remainingMines) => {
    const newImages = [...images];
    const newRevealed = [...revealed];

    newImages[clickedMine] = {
      icon: bombIcon,
      size: isMobile ? 60 : 90,
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

    // const audio = new Audio(bombSound);
    // audio.play();

    setTimeout(() => {
    revealAll(newImages);
    setImages(newImages);
    setRevealed(newRevealed);
    }, 1000);

    dispatch(setGamesOver(true));
    dispatch(setGameBet(false));
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
      tileSelect?.tileIndex
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
    dispatch(setTileSelect());
  });

  const placeBombs = (totalTiles, bombCount, selectedTileIndex) => {
    const bombPositions = new Set();
    while (bombPositions.size < (restored?.mines ? restored?.mines : bombCount)) {
      const randomIndex = Math.floor(Math.random() * totalTiles);
      if (randomIndex !== selectedTileIndex) {
        bombPositions.add(randomIndex);
      }
    }
    return Array.from(bombPositions);
  };

  const handleClick = (index) => {
    if (gamesOver || revealed[index]) return;

    const audio = new Audio(winSound);
    audio.play();

    MineSocket.emit("selectTile", {
      userId: decoded?.userId.toString(),
      gameId: id,
      tileIndex: index,
      betId: gameStart?.betId,
    });
  };

  return (
    <div className={`bg-[#0f212e] h-full flex flex-col items-center justify-center rounded-t-lg ${isMobile ? 'md:ml-32 md:mr-[8.3rem] max-sm:mx-2' : 'xl:w-[44rem] lg:w-[37.5rem]'}`}>
      {cashoutResult && !gameBet && (
        <div className={`mt-4 ${isMobile ? 'w-32' : 'w-40'} py-5 space-y-3 rounded-lg bg-[#1a2c38] text-center border-4 border-[#1fff20] text-[#1fff20] absolute z-20`}>
          <p className="text-3xl font-medium">{cashoutResult?.multiplier}x</p>
          <div className="flex items-center justify-center space-x-1">
            <p>{(parseFloat(mineValue?.betamount) * parseFloat(cashoutResult?.multiplier)).toFixed(2) || '0.00'} ₹</p>
            {/* <RiMoneyRupeeCircleFill color="yellow" className="text-xl" /> */}
          </div>
        </div>
      )}
      <div className={`grid ${isMobile ? 'grid-cols-5 gap-1.5' : 'grid-cols-5 gap-2.5'} relative z-10`}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`flex justify-center items-center ${isMobile ? 'md:w-20 md:h-[4.2rem] w-[3.9rem] h-[4.2rem]' : 'xl:w-28 lg:w-[6.7rem] xl:h-28 lg:h-[7rem]'} bg-[#2f4553] rounded-lg hover:-translate-y-1 hover:bg-[#688a9f] ${zoomClass[index] ? "zoom-in-out" : ""}`}
            onClick={() => handleClick(index)}
            style={{
              backgroundColor: revealed[index] || gamesOver ? "#071824" : "#2f4553",
              cursor: revealed[index] ? "pointer" : "not-allowed",
            }}
          >
            {img && (
              <img
                style={{
                  width: img.size,
                  height: img.size,
                  opacity: img.opacity || 1,
                }}
                className={`flex justify-center items-center ${revealed[index] || gamesOver ? "reveal-animation" : "hidden"} ${img.className || ""}`}
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
