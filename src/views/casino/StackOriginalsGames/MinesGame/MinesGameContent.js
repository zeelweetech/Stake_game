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
  setRestored,
  // setImages,
} from "../../../../features/casino/minesSlice";

function MinesGameContent() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [images, setImages] = useState(Array(25).fill(null));
  const [revealed, setRevealed] = useState(Array(25).fill(false));
  const [zoomClass, setZoomClass] = useState(Array(25).fill(false));
  const { gamesOver, gameStart, tileSelect, gameBet } = useSelector(
    (state) => state.minesGame
  );
  const decoded = decodedToken();

  useEffect(() => {
    MineSocket.emit("joinGame", {
      userId: decoded?.userId,
      gameId: id,
    });

    MineSocket.on("gameRestored", (data, currentMultiplier) => {
      console.log("gameRestored data *-*-*-*-*--*-*", data, currentMultiplier);
      dispatch(setRestored(data, currentMultiplier));

      const newImages = [...images];
      const newRevealed = [...revealed];

      data.mineLocations.forEach(({ tileIndex, isMine, selected }) => {
        if (selected === 1) {
          newImages[tileIndex] = { icon: diamondIcon, size: 100 };
          newRevealed[tileIndex] = true;
        }

        if (isMine) {
          newImages[tileIndex] = { icon: bombIcon, size: 100 };
          newRevealed[tileIndex] = true;
        }
      });

      // dispatch(setImages(newImages));
      setImages(newImages);
      setRevealed(newRevealed);
    });
  }, []);

  MineSocket.on("gameStarted", (data) => {
    console.log("gameStarted data", data);
    dispatch(setGameStart(data));
    // dispatch(setImages(Array(25).fill(null)));
    setImages(Array(25).fill(null));
    setRevealed(Array(25).fill(false));
    setZoomClass(Array(25).fill(false));
  });

  // game tile selected event
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
      newImages[index] = isBomb
        ? { icon: bombIcon, size: 100 }
        : { icon: diamondIcon, size: 100 };
      newRevealed[index] = true;
      // dispatch(setImages(newImages));
      setImages(newImages);
      setRevealed(newRevealed);

      if (isBomb) {
        dispatch(setGamesOver(true));
        dispatch(setGameBet(false));
        revealAll(newImages);
      }
    }, 900);
  };

  // game Over event
  MineSocket.on("gameOver", (data) => {
    console.log("gameOver data", data);
    const { clickedMine, remainingMines } = data;

    handleGameOver(clickedMine, remainingMines);
  });

  const handleGameOver = (clickedMine, remainingMines) => {
    // const newImages = Array(25)
    //   .fill(null)
    //   .map((_, index) => {
    //     // console.log('index -*/*/589+55498**-+', index);
    //     if (index === clickedMine) {
    //       return { icon: bombIcon, size: 100 };
    //     } else if (remainingMines.includes(index)) {
    //       return { icon: bombIcon, size: 70 };
    //     } else {
    //       return { icon: diamondIcon, size: 100 };
    //     }
    //   });
    const newImages = [...images];
    const newRevealed = [...revealed];

    newImages[clickedMine] = { icon: bombIcon, size: 100 };
    newRevealed[clickedMine] = true;

    remainingMines.forEach((mineIndex) => {
      newImages[mineIndex] = { icon: bombIcon, size: 70 };
      newRevealed[mineIndex] = false;
    });

    setImages(newImages);
    setRevealed(newRevealed);

    setTimeout(() => {
      remainingMines.forEach((mineIndex) => {
        // newImages[mineIndex] = bombIcon;
        newRevealed[mineIndex] = true;
        // newImages[mineIndex].size = 70;
      });

      revealAll(newImages);

      // dispatch(setImages(newImages));
      setImages(newImages);
      setRevealed(newRevealed);

      dispatch(setGamesOver(true));
      dispatch(setGameBet(false));
    }, 2000);
  };

  const revealAll = (newImages) => {
    const newRevealed = [...revealed];

    for (let i = 0; i < 25; i++) {
      if (!newRevealed[i]) {
        newImages[i] = newImages[i] || { icon: diamondIcon, size: 80 }
        newRevealed[i] = true;
      }
    }

    // dispatch(setImages(newImages));
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
      <div className="">
        {tileSelect && !gameBet && (
          <div className="mt-4 text-yellow-300">
            Multiplier: {tileSelect.multiplier}
          </div>
        )}
      </div>
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
                // height={revealed[index] ? 100 : 80}
                // width={revealed[index] ? 100 : 80}
                style={{ width: img.size, height: img.size }}
                className={`flex justify-center items-center ${
                  revealed[index] || gamesOver ? "opacity-100 reveal" : "opacity-50 hidden"
                }`}
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



// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import bombIcon from "../../../../assets/img/bomb.svg";
// import diamondIcon from "../../../../assets/img/Diamond.png";
// import { decodedToken } from "../../../../resources/utility";
// import { MineSocket } from "../../../../socket";
// import { useParams } from "react-router-dom";
// import {
//   setGamesOver,
//   setGameBet,
//   setTileSelect,
//   setGameStart,
//   setRestored,
// } from "../../../../features/casino/minesSlice";

// function MinesGameContent() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const [images, setImages] = useState(Array(25).fill(null));
//   const [revealed, setRevealed] = useState(Array(25).fill(false));
//   const [fadeStates, setFadeStates] = useState(Array(25).fill(false)); // Track fade states
//   const { gamesOver, gameStart, tileSelect, gameBet } = useSelector(
//     (state) => state.minesGame
//   );
//   const decoded = decodedToken();

//   useEffect(() => {
//     MineSocket.emit("joinGame", {
//       userId: decoded?.userId,
//       gameId: id,
//     });

//     MineSocket.on("gameRestored", (data, currentMultiplier) => {
//       console.log("gameRestored data", data, currentMultiplier);
//       dispatch(setRestored(data, currentMultiplier));

//       const newImages = [...images];
//       const newRevealed = [...revealed];

//       data.mineLocations.forEach(({ tileIndex, isMine, selected }) => {
//         if (selected === 1) {
//           newImages[tileIndex] = { icon: diamondIcon, size: 100 };
//           newRevealed[tileIndex] = true;
//         }

//         if (isMine) {
//           newImages[tileIndex] = { icon: bombIcon, size: 100 };
//           newRevealed[tileIndex] = true;
//         }
//       });

//       setImages(newImages);
//       setRevealed(newRevealed);
//     });
//   }, []);

//   MineSocket.on("gameStarted", (data) => {
//     console.log("gameStarted data", data);
//     dispatch(setGameStart(data));
//     setImages(Array(25).fill(null));
//     setRevealed(Array(25).fill(false));
//     setFadeStates(Array(25).fill(false)); // Reset fade states
//   });

//   MineSocket.on("tileSelected", (data) => {
//     console.log("tileSelected data", data);
//     dispatch(setTileSelect(data));
//     handleTileSelection(data.tileIndex, data.isBomb);
//   });

//   const handleTileSelection = (index, isBomb) => {
//     const newImages = [...images];
//     const newRevealed = [...revealed];

//     newImages[index] = isBomb
//       ? { icon: bombIcon, size: 100 }
//       : { icon: diamondIcon, size: 100 };
//     newRevealed[index] = true;

//     setImages(newImages);
//     setRevealed(newRevealed);

//     if (isBomb) {
//       dispatch(setGamesOver(true));
//       dispatch(setGameBet(false));
//       revealAll(newImages);
//     }
//   };

//   MineSocket.on("gameOver", (data) => {
//     console.log("gameOver data", data);
//     const { clickedMine, remainingMines } = data;
//     handleGameOver(clickedMine, remainingMines);
//   });

//   const handleGameOver = (clickedMine, remainingMines) => {
//     const newImages = [...images];
//     const newRevealed = [...revealed];

//     newImages[clickedMine] = { icon: bombIcon, size: 100 };
//     newRevealed[clickedMine] = true;

//     remainingMines.forEach((mineIndex) => {
//       newImages[mineIndex] = { icon: bombIcon, size: 70 };
//       newRevealed[mineIndex] = false;
//     });

//     setImages(newImages);
//     setRevealed(newRevealed);

//     // Set fade states for the mines to be revealed
//     const newFadeStates = Array(25).fill(false);
//     remainingMines.forEach((mineIndex) => {
//       newFadeStates[mineIndex] = true; // Set fade-out for mines
//     });
//     newFadeStates[clickedMine] = true; // Set clicked mine to fade-out
//     setFadeStates(newFadeStates);

//     // Delay before revealing remaining mines
//     setTimeout(() => {
//       remainingMines.forEach((mineIndex) => {
//         newRevealed[mineIndex] = true; // Reveal all mines
//       });

//       revealAll(newImages);
//       setImages(newImages);
//       setRevealed(newRevealed);
//       setFadeStates(Array(25).fill(false)); // Reset fade states after reveal

//       dispatch(setGamesOver(true));
//       dispatch(setGameBet(false));
//     }, 2000); // Adjust this duration for the desired effect
//   };

//   const revealAll = (newImages) => {
//     const newRevealed = [...revealed];

//     for (let i = 0; i < 25; i++) {
//       if (!newRevealed[i]) {
//         newImages[i] = newImages[i] || { icon: diamondIcon, size: 80 };
//         newRevealed[i] = true;
//       }
//     }

//     setImages(newImages);
//     setRevealed(newRevealed);
//   };

//   const handleClick = (index) => {
//     if (gamesOver || revealed[index]) return;

//     MineSocket.emit("selectTile", {
//       userId: decoded?.userId.toString(),
//       gameId: id,
//       tileIndex: index,
//       betId: gameStart?.betId,
//     });
//   };

//   return (
//     <div className="bg-[#0f212e] h-full flex flex-col items-center justify-center xl:w-[52rem] lg:w-[37rem]">
//       <div className="">
//         {tileSelect && !gameBet && (
//           <div className="mt-4 text-yellow-300">
//             Multiplier: {tileSelect.multiplier}
//           </div>
//         )}
//       </div>
//       <div className="grid grid-cols-5 gap-2.5">
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className={`flex justify-center items-center xl:w-28 lg:w-[6.5rem] xl:h-28 lg:h-[6.5rem] bg-[#2f4553] rounded-lg hover:-translate-y-1.5 hover:bg-[#688a9f]`}
//             onClick={() => handleClick(index)}
//             style={{
//               backgroundColor:
//                 revealed[index] || gamesOver ? "#071824" : "#2f4553",
//               opacity: revealed[index] ? 1 : gamesOver ? 0.8 : 1,
//               cursor: revealed[index] ? "default" : "pointer",
//             }}
//           >
//             {img && (
//               <img
//                 style={{ width: img.size, height: img.size }}
//                 className={`flex justify-center items-center ${
//                   revealed[index] ? "opacity-100 fade-in" : "opacity-50"
//                 } ${fadeStates[index] ? "fade-out" : ""}`} // Apply fade-out class based on state
//                 src={img.icon}
//                 alt="Icon"
//               />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MinesGameContent;
