import React, { useEffect, useState } from "react";
import Boxsvg from "../../../../assets/svg/DragonTowerBox.svg";
import dragonFrame from "../../../../assets/img/dragonFrame.jpg";
import easyEgg from "../../../../assets/img/easyEgg.svg";
import mediumEgg from "../../../../assets/img/mediumEgg.svg";
import masterEgg from "../../../../assets/img/masterEgg.svg";
import expertEgg from "../../../../assets/img/expertEgg.svg";
import hardEgg from "../../../../assets/img/hardEgg.svg";
import { useSelector } from "react-redux";

function DragonContent() {
  const [boxArray, setBoxArray] = useState([]);
  const [clickedBoxes, setClickedBoxes] = useState({});
  const { values, gameBet } = useSelector((state) => state.dragonTowerGame);

  useEffect(() => {
    const rows = 9;
    let boxesPerRow = 4;

    switch (values.difficulty) {
      case "easy":
      case "master":
        boxesPerRow = 4;
        break;
      case "medium":
      case "expert":
        boxesPerRow = 3;
        break;
      case "hard":
        boxesPerRow = 2;
        break;
      default:
        boxesPerRow = 4;
        break;
    }

    const newArray = Array(rows).fill(Array(boxesPerRow).fill(null));
    setBoxArray(newArray);
  }, [values.difficulty]);

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

  const eggImageSrc = EggImages(values.difficulty);

  const handleBoxClick = (rowIndex, boxIndex) => {
    if (gameBet) {
      console.log("rowIndex ::::::::::", rowIndex);
      console.log("boxIndex  ************", boxIndex);
      setClickedBoxes((prev) => ({
        ...prev,
        [rowIndex]: boxIndex,
      }));
    }
  };

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
            {boxArray.reverse().map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-3">
                {row.map((_, boxIndex) => (
                  <div
                    key={`${rowIndex}-${boxIndex}`}
                    className={`bg-[#213743] hover:cursor-pointer rounded-md w-full h-10 flex justify-center items-center ${
                      clickedBoxes[rowIndex] === boxIndex
                        ? "bg-[#00e701] text-[#00b801]"
                        : ""
                    }`}
                    onClick={() => handleBoxClick(rowIndex, boxIndex)}
                  >
                    <img
                      src={
                        clickedBoxes[rowIndex] === boxIndex
                          ? eggImageSrc
                          : Boxsvg
                      }
                      alt="Not Found"
                      className="w-auto h-full object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DragonContent;
