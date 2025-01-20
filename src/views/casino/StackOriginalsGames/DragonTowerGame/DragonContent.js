import React, { useEffect, useMemo, useRef, useState } from "react";
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
// import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { DragonTowerSocket } from "../../../../socket";
import { useParams } from "react-router-dom";
import { decodedToken } from "../../../../resources/utility";
import { setBoxsIndex, setClickedBoxes, setCompleteFundStatus, setGameBet, setGameOverResult, setIsGameOver, setPreSelectTile, setRestodMultiplier, setRestor, setRestorData, setRowsIndex, setShowRandomField, setTileSelected } from "../../../../features/casino/dragonTowerSlice";
import toast from "react-hot-toast";
import dragontowerSound from "../../../../assets/Sound/dragontowerSound.wav";
import dragontowerbombSound from "../../../../assets/Sound/dragontowerbomb.wav";
import { setWallet } from "../../../../features/auth/authSlice";

function DragonContent() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [cashoutResult, setCashoutResult] = useState(null);
  const [cashoutVisible, setCashoutVisible] = useState(false);
  const [fundsToastShown, setFundsToastShown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const gameOverProcessedRef = useRef(false);
  const {
    isManual,
    values,
    gameBet,
    isGameOver,
    gameOverResult,
    rowsIndex,
    boxsIndex,
    clickedBoxes,
    restorData,
    preSelectTile,
  } = useSelector((state) => state.dragonTowerGame);
  const decoded = decodedToken();

  DragonTowerSocket.on("walletBalance", (data) => {
    console.log("wallet data ", data);

    dispatch(setWallet(data?.walletBalance))
    // dispatch(setWallet(data.walletBalance.toFixed(2)))
  });

  useEffect(() => {
    const handleInsufficientFunds = (data) => {
      if (!fundsToastShown) {
        toast.error(data?.message);
        setFundsToastShown(true);
        dispatch(setCompleteFundStatus(false));
        dispatch(setShowRandomField(false));
        dispatch(setGameBet(false));
      }
    };
    DragonTowerSocket.on("Insufficientfund", handleInsufficientFunds);

    const resetToastFlag = () => {
      setFundsToastShown(false);
    };

    return () => {
      resetToastFlag();
      DragonTowerSocket.off("Insufficientfund", handleInsufficientFunds);
    };
  }, [fundsToastShown]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const resetGame = () => {
    dispatch(setClickedBoxes({}));
    setCashoutResult(null);
    setCashoutVisible(false);
    dispatch(setGameOverResult(null));
    dispatch(setRowsIndex(undefined));
    dispatch(setBoxsIndex(undefined));
    dispatch(setIsGameOver(false));
  };

  useEffect(() => {
    DragonTowerSocket.emit("joinGame", {
      userId: decoded?.userId,
      gameId: id,
    });

    DragonTowerSocket.on("gameRestored", (data, currentMultiplier) => {
      dispatch(setRestor(data));
      dispatch(setRestodMultiplier(currentMultiplier));
      dispatch(setRestorData(data.restoreData));
      dispatch(setRowsIndex(data.currentStep - 1));

      dispatch(setGameBet(true));

      const initialClickedBoxes = {};
      for (let i = 0; i < data.currentStep; i++) {
        initialClickedBoxes[i] = data.restoreData[i]?.findIndex(
          (value) => value === 1
        );
      }
      dispatch(setClickedBoxes(initialClickedBoxes));
    });
  }, []);

  DragonTowerSocket.on("gameStarted", (data) => {
    console.log("gameStarted data", data);

    setCashoutVisible(false);
    resetGame();
    gameOverProcessedRef.current = false;
  });

  DragonTowerSocket.on("tileSelected", (data) => {
    console.log("tileSelected data", data);
    dispatch(setTileSelected(data));
  });

  DragonTowerSocket.on("gameOver", (data) => {
    handleGameOverResult();
    if (!gameOverProcessedRef.current) {
      dispatch(setIsGameOver(true));
      dispatch(setTileSelected({}));
      dispatch(setShowRandomField(false));
      setCashoutVisible(false);
      gameOverProcessedRef.current = true;

      console.log("Game Over audio :");
      const audio = new Audio(dragontowerbombSound);
      audio.play();
    }
  });

  const handleGameOverResult = () => {
    let maxSkullBoxes;

    if (values.difficulty === "easy" || values.difficulty === "master") {
      maxSkullBoxes = 2;
    } else if (
      values.difficulty === "medium" ||
      values.difficulty === "expert"
    ) {
      maxSkullBoxes = 1;
    } else if (values.difficulty === "hard") {
      maxSkullBoxes = 0;
    } else {
      maxSkullBoxes = 1;
    }

    const randomEggBoxes = Array.from({ length: rows }, (_, rowIndex) => {
      if (rowIndex < rowsIndex) {
        const boxIndices = new Set();
        while (boxIndices.size < maxSkullBoxes) {
          const randomIndex = Math.floor(Math.random() * boxesPerRow);
          if (
            randomIndex !== clickedBoxes[rowIndex] &&
            !boxIndices.has(randomIndex)
          ) {
            boxIndices.add(randomIndex);
          }
        }
        return Array.from(boxIndices);
      }

      if (rowIndex > rowsIndex) {
        const randomEggIndices = new Set();
        while (randomEggIndices.size < maxSkullBoxes + 1) {
          const randomIndex = Math.floor(Math.random() * boxesPerRow);
          randomEggIndices.add(randomIndex);
        }
        return Array.from(randomEggIndices);
      }
      return [];
    });

    dispatch(
      setGameOverResult({
        skullRowIndex: rowsIndex,
        skullBoxIndex: boxsIndex,
        eggRows: randomEggBoxes,
      })
    );
  };

  DragonTowerSocket.on("cashoutSuccess", (data) => {
    setCashoutResult(data);
    setCashoutVisible(true);
    dispatch(setTileSelected({}));
    handleGameOverResult();
    // dispatch(setIsGameOver(true));
  });

  const handleBoxClick = (rowIndex, boxIndex) => {
    const isRowActive = isManual && gameBet && (rowIndex === 0 || clickedBoxes[rowIndex - 1] !== undefined);

    if (gameBet && !isGameOver && isRowActive) {
      if (
        // clickedBoxes[rowIndex] !== undefined ||
        rowIndex < rowsIndex + 1 ||
        (isManual && !gameBet)
      ) {
        return;
      }

      if (isManual) {
        DragonTowerSocket.emit("selectTile", {
          userId: decoded?.userId.toString(),
          gameId: id,
          tileIndex: boxIndex,
          tileStep: rowIndex,
        });

        const audio = new Audio(dragontowerSound);
        audio.play();
      }

      const updatedClickedBoxes = { ...clickedBoxes, [rowIndex]: boxIndex };
      dispatch(setClickedBoxes(updatedClickedBoxes));
      dispatch(setRowsIndex(rowIndex));
      dispatch(setBoxsIndex(boxIndex));
    }

    if (!isManual) {
      if (rowIndex > 0 && preSelectTile[rowIndex - 1] === undefined) {
        return;
      }

      const updatedClickedBoxes = { ...preSelectTile };
      if (updatedClickedBoxes[rowIndex] === boxIndex) {
        delete updatedClickedBoxes[rowIndex];
      } else {
        updatedClickedBoxes[rowIndex] = boxIndex;
      }
      dispatch(setPreSelectTile(updatedClickedBoxes));

      const audio = new Audio(dragontowerSound);
      audio.play();
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

  const eggImage = EggImages(values.difficulty);
  const skullImage = SkullImages(values.difficulty);

  return (
    <div
      className={`dragonBackImage max-sm:mx-3 flex flex-col items-center bg-cover ${isMobile ? "rounded-t-lg" : "rounded-tr-lg"
        }`}
    >
      <div
        className="
            xl:w-[51rem] xl:h-[46rem] xl:mx-0 xl:py-8 xl:max-w-full
            lg:h-[46rem] lg:w-[41rem] lg:mx-0 lg:max-w-full
            md:h-[30rem] md:mx-[-4rem] md:max-w-96 
            sm:mx-[2rem] mx-[-6rem] h-[28rem]"
      >
        <div className="flex flex-col items-center relative">
          <div className="flex justify-center">
            <img
              src={dragonFrame}
              className="w-[25rem] h-[96] sm:w-60 sm:h-64 xl:-mt-3 md:mt-3 md:w-[30rem] md:h-[28.5rem] lg:w-[39rem] lg:h-[40rem] xl:w-[39rem] xl:h-[40rem]"
              alt="Not Found"
            />
          </div>
          {cashoutVisible && !gameBet && gameOverResult && (
            <div className="xl:mt-80 lg:mt-80 md:mt-56 mt-52 w-40 py-5 space-y-3 rounded-lg bg-[#1a2c38] text-center border-4 border-[#1fff20] text-[#1fff20] absolute z-20">
              <p className="text-3xl font-medium">
                {cashoutResult?.multiplier}x
              </p>
              <div className="flex items-center justify-center space-x-1">
                <p>
                  {cashoutResult?.winAmount ? cashoutResult?.winAmount : "0.00"}
                  ₹
                </p>
                {/* <RiMoneyRupeeCircleFill color="yellow" className="text-xl" /> */}
              </div>
            </div>
          )}
          <div
            className={`flex flex-col xl:gap-3 lg:gap-3 md:gap-2 gap-3 bg-[#182433] xl:w-[30.6rem] lg:w-[30.58rem] lg:h-[30rem] md:w-[18.8rem] p-3 xl:mt-[-31.2rem] lg:mt-[-31.2rem] md:mt-[-23rem] md:h-[22rem] md:mx-[3.1rem] w-[19.6rem] h-[21.2rem] -mt-[22.2rem] border-2 border-gray-800 shadow-lg`}
          >
            {(() => {
              const rowElements = [];
              for (let rowIndex = rows - 1; rowIndex >= 0; rowIndex--) {
                const boxElements = [];
                for (let boxIndex = 0; boxIndex < boxesPerRow; boxIndex++) {
                  const isRestoredEgg = restorData[rowIndex]?.[boxIndex] === 1;
                  const isSelected = clickedBoxes[rowIndex] === boxIndex;
                  const isHighlighted =
                    !isManual && preSelectTile[rowIndex] === boxIndex;
                  const imageToShow = isHighlighted
                    ? null // No image when highlighted
                    : isGameOver
                      ? rowIndex === gameOverResult?.skullRowIndex &&
                        boxIndex === gameOverResult?.skullBoxIndex
                        ? skullImage
                        : gameOverResult?.eggRows[rowIndex]?.includes(boxIndex) ||
                          isRestoredEgg ||
                          isSelected ||
                          rowIndex === gameOverResult?.skullRowIndex
                          ? eggImage
                          : Boxsvg
                      : isRestoredEgg
                        ? eggImage
                        : isSelected
                          ? eggImage
                          : Boxsvg;
                  const isRowActive = isManual && gameBet && (rowIndex === 0 || clickedBoxes[rowIndex - 1] !== undefined);
                  boxElements.push(
                    <div
                      key={`${rowIndex}-${boxIndex}`}
                      className={`rounded-md w-full xl:h-10 lg:h-10 md:h-[1.80rem] h-6 flex justify-center items-center cursor-pointer ${isGameOver
                        ? "bg-[#213743]"
                        : (gameBet && rowIndex === 0) ||
                          clickedBoxes[rowIndex - 1] !== undefined
                          ? "bg-[#00e701] w-10"
                          : "bg-[#213743]"
                        } ${clickedBoxes[rowIndex] !== undefined
                          ? "bg-[#213743] opacity-100"
                          : isGameOver && isManual
                            ? "opacity-50"
                            : "opacity-100"
                        } ${isSelected
                          ? "opacity-100"
                          : isGameOver && isManual
                            ? "opacity-50"
                            : "opacity-100"
                        }  ${isRowActive && isManual
                          ? "bg-[#00e701]"
                          : "bg-[#213743]"
                        } ${!isManual && preSelectTile[rowIndex] === boxIndex
                          ? "bg-[#9000ff] border-2 border-[#7100c7]"
                          : ""
                        }`}
                      onClick={() => handleBoxClick(rowIndex, boxIndex)}
                    >
                      {imageToShow && (
                        <img
                          src={imageToShow}
                          alt="Not Found"
                          className="w-auto h-full object-cover rounded-md"
                        />
                      )}
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
