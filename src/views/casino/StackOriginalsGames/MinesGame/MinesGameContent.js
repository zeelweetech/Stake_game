import React, { useState, useEffect } from "react";
import DiamondEffect from "../../../../assets/Sound/winSound.wav";
import bombIcon from "../../../../assets/img/bomb.svg";
import diamondIcon from "../../../../assets/img/Diamond.png";
import { useSelector } from "react-redux";

function MinesGameContent() {
  const [gameOver, setGameOver] = useState(false);
  const [randomMines, setRandomMines] = useState([]);
  const [images, setImages] = useState(Array(25).fill(null));
  const mineValue = useSelector((state) => state.minesGame);

  console.log("mineValue -------------", mineValue);
  

  // useEffect(() => {
  //   // const totalBombs = 25 - rows;
  //   const mines = [];
  //   while (mines.length < 3) {
  //     const rand = Math.floor(Math.random() * 25);
  //     if (!mines.includes(rand)) {
  //       mines.push(rand);
  //     }
  //   }
  //   setRandomMines(mines);
  // }, []);

  const handleClick = (index) => {
    if (gameOver || images[index]) return;

    const newImages = [...images];

    if (randomMines.includes(index)) {
      // alert("You Lost!");
      setGameOver(true);
      newImages[index] = bombIcon;
    } else {
      newImages[index] = diamondIcon;
      const sound = new Audio(DiamondEffect);
      sound.play();
    }

    setImages(newImages);
  };

  return (
    <div className="bg-[#0f212e] h-full flex items-center justify-center px-36 ">
      <div className="grid grid-cols-5 gap-2.5">
        {images.map((img, index) => (
          <div
            key={index}
            className="w-28 h-28 bg-[#2f4553] rounded-lg hover:-translate-y-1.5 hover:bg-[#688a9f]"
            onClick={() => handleClick(index)}
          >
            {img && <img height={80} width={80} src={img} alt="Icon" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MinesGameContent;
