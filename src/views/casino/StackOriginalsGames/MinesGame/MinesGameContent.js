import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DiamondEffect from "../../../../assets/Sound/winSound.wav";
import bombIcon from "../../../../assets/img/bomb.svg";
import diamondIcon from "../../../../assets/img/Diamond.png";

function MinesGameContent() {
  const [gameOver, setGameOver] = useState(false);
  const [randomMines, setRandomMines] = useState([]);
  const [images, setImages] = useState(Array(25).fill(null));
  const [revealed, setRevealed] = useState(Array(25).fill(false));
  const { mineValue } = useSelector((state) => state.minesGame);

  useEffect(() => {
    const totalDiamonds = Math.max(0, 25 - mineValue.mines);
    const totalBombs = mineValue.mines;

    const bombs = new Set();
    while (bombs.size < totalBombs) {
      const rand = Math.floor(Math.random() * 25);
      bombs.add(rand);
    }

    setRandomMines(Array.from(bombs));
    resetGame();
  }, [mineValue.mines]);

  const resetGame = () => {
    setGameOver(false);
    setImages(Array(25).fill(null));
    setRevealed(Array(25).fill(false));
  };

  const handleClick = (index) => {
    if (gameOver || revealed[index]) return;

    const newImages = [...images];
    const newRevealed = [...revealed];

    if (randomMines.includes(index)) {
      setGameOver(true);
      newImages[index] = bombIcon;
      newRevealed[index] = true;
      revealAll(newImages);
    } else {
      newImages[index] = diamondIcon;
      const sound = new Audio(DiamondEffect);
      sound.play();
      newRevealed[index] = true;
    }

    setImages(newImages);
    setRevealed(newRevealed);
  };

  const revealAll = (newImages) => {
    const newRevealed = [...revealed];

    randomMines.forEach((mineIndex) => {
      newImages[mineIndex] = bombIcon;
      newRevealed[mineIndex] = true;
    });

    for (let i = 0; i < 25; i++) {
      if (!randomMines.includes(i) && !newImages[i]) {
        newImages[i] = diamondIcon;
        newRevealed[i] = true;
      }
    }

    setImages(newImages);
    setRevealed(newRevealed);
  };

  return (
    <div className="bg-[#0f212e] h-full flex flex-col items-center justify-center xl:w-[52rem] lg:w-[37rem]">
      <div className="grid grid-cols-5 gap-2.5">
        {images.map((img, index) => (
          <div
            key={index}
            className="flex justify-center items-center xl:w-28 lg:w-[6.5rem] xl:h-28 lg:h-[6.5rem] bg-[#2f4553] rounded-lg hover:-translate-y-1.5 hover:bg-[#688a9f]"
            onClick={() => handleClick(index)}
            style={{
              opacity: revealed[index] ? 1 : gameOver ? 0.3 : 1,
              cursor: revealed[index] ? "default" : "pointer",
            }}
          >
            {img && <img height={80} className="flex justify-center items-center" width={80} src={img} alt="Icon" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MinesGameContent;
