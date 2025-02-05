import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMunulGameResult, setSelectTile } from "../../../../features/casino/kenoSlice";
import kenoDaimond from "../../../../assets/svg/kenoDaimond.svg";
import { rowFileConfigs } from "./KenoJson";
import kenoTileSelect from "../../../../assets/Sound/kenoGameSound.wav"
// import { KenoSocket } from "../../../../socket";
import kenoDaimonds from "../../../../assets/img/kenoDaimond.png"

function KenoGameContent({ kenoGameSocket }) {
  const dispatch = useDispatch();
  // const [images, setImages] = useState(Array(40).fill(null));
  // const [revealed, setRevealed] = useState(Array(40).fill(false));
  // const [zoomClass, setZoomClass] = useState(Array(40).fill(false));
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { selectTile, images, revealed, zoomClass, values, munulGameResult } = useSelector((state) => state.kenoGame);
  // const decoded = decodedToken()

  kenoGameSocket.on('gameResult', (data) => {
    // console.log("data , ", data);
    dispatch(setMunulGameResult(data))
  })

  // console.log('munulGameResult : ', munulGameResult?.matches);
  console.log('selectTile', selectTile);

  const handleClick = (index) => {
    if (revealed[index]) return;

    if (selectTile.includes(index + 1)) {
      dispatch(setSelectTile(selectTile.filter((tile) => tile !== index + 1)));
    } else {
      if (selectTile.length < 10) {
        const audio = new Audio(kenoTileSelect);
        audio.play();
        dispatch(setSelectTile([...selectTile, index + 1]));
      }
    }
  };

  const renderButtons = () => {
    const length = selectTile.length;

    if (length === 0) {
      return null;
    }

    const config = rowFileConfigs[length];

    if (!config) {
      return null;
    }

    const xValueButton = (configArray) => {
      return configArray.map((value, index) =>
        index < length + 1 ? (
          <button
            key={index}
            className="text-white font-bold py-2 md:py-4 bg-[#2f4553] w-full rounded-md"
          >
            {value}
          </button>
        ) : null
      );
    };

    switch (values?.risk) {
      case "Classic":
        return (
          <div className="w-full flex xl:space-x-3 lg:space-x-2 space-x-1 text-[10px] md:text-[10px] lg:text-xs xl:text-base">
            {xValueButton(config.Classic)}
          </div>
        );
      case "Low":
        return (
          <div className="w-full flex xl:space-x-3 lg:space-x-2 space-x-1 text-[10px] md:text-[10px] lg:text-xs xl:text-base">
            {xValueButton(config.Low)}
          </div>
        );
      case "Medium":
        return (
          <div className="w-full flex xl:space-x-3 lg:space-x-2 space-x-1 text-[10px] md:text-[10px] lg:text-xs xl:text-base">
            {xValueButton(config.Medium)}
          </div>
        );
      case "High":
        return (
          <div className="w-full flex xl:space-x-3 lg:space-x-2 space-x-1 text-[10px] md:text-[10px] lg:text-xs xl:text-base">
            {xValueButton(config.High)}
          </div>
        );
      default:
        return null;
    }
  };

  const getRandomIndices = (count, max, exclude, selectTile) => {
    const indices = [];
    while (indices.length < count) {
      const randomIndex = Math.floor(Math.random() * max) + 1;
      if (!indices.includes(randomIndex) && !exclude.includes(randomIndex) && !selectTile.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    return indices;
  }

  const renderImages = () => {
    let randomIndices = [];

    randomIndices = getRandomIndices(10 - munulGameResult?.matches?.length, images.length, munulGameResult?.matches, selectTile);

    return images?.map((img, index) => {
      const isMatch = munulGameResult?.matches?.includes(index + 1);
      const isRandomRed = randomIndices.includes(index + 1);
      return (
        <div
          key={index}
          className={`flex justify-center items-center w-full ${isMobile
            ? "md:w-[2.6rem] p-0.5 md:p-2 md:h-[2.7rem] w-[2.5431rem] h-[2.5431rem] "
            : "xl:w-[5.3rem] lg:w-[4.2rem] xl:h-[5.3rem] lg:h-[4.2rem]"
            } bg-[#2f4553] rounded-lg hover:-translate-y-1 hover:bg-[#688a9f] ${zoomClass[index] ? "zoom-in-out" : ""
            } ${isRandomRed ? 'text-red-500' : ''}`}
          onClick={() => handleClick(index)}
          style={{
            backgroundColor: isMatch
              ? "#071824"
              : revealed[index + 1]
                ? "#071824"
                : selectTile?.includes(index + 1)
                  ? "#9000ff"
                  : isRandomRed ? "#071824" : "#2f4553",
            // borderBottom: selectTile?.includes(index + 1)
            //   ? "8px solid #7100c7"
            //   : "8px solid #253742",
            border: isMatch && !isMobile ? "8px solid #9000ff" : isMobile && isMatch ? "4px solid #9000ff" : "",
            cursor: revealed[index + 1] ? "not-allowed" : "pointer",
            opacity:
              selectTile?.length < 10
                ? "1"
                : selectTile?.includes(index + 1)
                  ? "1"
                  : isRandomRed ? '0.5' : "0.6",
          }}
        >
          {isMatch ? (
            <img
              className={`flex justify-center items-center w-32 h-8 md:w-32 md:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16`}
              src={kenoDaimonds}
              alt="Keno Diamond"
            />
          ) : (
            <p className="lg:text-xl font-bold text-xl">{index + 1}</p>
          )}
        </div>
      );
    });
  };

  // {cashoutVisible && !gameBet && gameOverResult && (
  //   <div className="xl:mt-80 lg:mt-80 md:mt-56 mt-52 w-40 py-5 space-y-3 rounded-lg bg-[#1a2c38] text-center border-4 border-[#1fff20] text-[#1fff20] absolute z-20">
  //     <p className="text-3xl font-medium">
  //       {cashoutResult?.multiplier}x
  //     </p>
  //     <div className="flex items-center justify-center space-x-1">
  //       <p>
  //         {cashoutResult?.winAmount ? cashoutResult?.winAmount : "0.00"}
  //         ₹
  //       </p>
  //       {/* <RiMoneyRupeeCircleFill color="yellow" className="text-xl" /> */}
  //     </div>
  //   </div>
  // )}

  return (
    <div
      className={`bg-[#0f212e] relative h-full flex flex-col items-center justify-center lg:p-4 md:p-1.5 ${isMobile
        ? " max-sm:mx-3 rounded-t-lg"
        : "xl:w-[51rem] lg:w-[39rem] rounded-tr-lg"
        }`}
    >
      {/* main game content  */}
      <div
        className={`grid ${isMobile
          ? "grid-cols-8 gap-1.5"
          : "grid-cols-8 xl:gap-x-3 lg:gap-x-2 md:gap-x-3 gap-x-3 gap-y-1.5"
          } relative z-10 p-1.5 max-sm:w-full`}
      >
        {renderImages()}
      </div>

      {/* multiplier boxes */}
      {selectTile?.length > 0 ? (
        <div className="w-full pt-2">
          <div className="xl:px-4 lg:px-1 px-0 mb-3">{renderButtons()}</div>

          <div className="w-full xl:px-4 lg:px-1 px-0 mb-4 flex">
            {Array.from({ length: Math.min(selectTile.length + 1, 11) }).map(
              (_, index) => (
                <button
                  key={index}
                  className={`text-white text-[10px] md:text-xs lg:text-xs xl:text-base font-bold py-2 md:py-4 ${munulGameResult?.matches?.length === index ? "bg-[#557086]" : "bg-[#2f4553]"} w-full flex items-center justify-center`}
                >
                  {index}x
                  <img
                    src={kenoDaimond}
                    className="xl:w-4 xl:h-4 lg:w-3 lg:h-3 md:w-2 md:h-2 w-2 h-2 ml-1"
                    style={{ filter: munulGameResult?.matches?.length === index ? "" : "grayscale(100%)" }}
                    alt="Not Found"
                  />
                </button>
              )
            )}
          </div>
        </div>
      ) : (
        <div className="w-full px-4 mb-4 lg:mt-14 md:mt-8 mt-10">
          <button className="text-[#d5dceb] text-sm md:py-2 xl:py-4 lg:py-3 py-2 bg-[#2f4553] font-semibold w-full rounded-md">
            Select 1 - 10 numbers to play
          </button>
        </div>
      )}
    </div>
  );
}

export default KenoGameContent;
