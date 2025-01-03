import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectTile } from "../../../../features/casino/kenoSlice";
import kenoDaimond from "../../../../assets/svg/kenoDaimond.svg";
import { rowFileConfigs } from "./KenoJson";

function KenoGameContent() {
  const dispatch = useDispatch();
  // const [images, setImages] = useState(Array(40).fill(null));
  // const [revealed, setRevealed] = useState(Array(40).fill(false));
  // const [zoomClass, setZoomClass] = useState(Array(40).fill(false));
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { selectTile, images, revealed, zoomClass, values } = useSelector(
    (state) => state.kenoGame
  );
  // const decoded = decodedToken();

  const handleClick = (index) => {
    // if (gamesOver || revealed[index] || (isManual && !gameBet)) return;
    if (revealed[index]) return;

    if (selectTile.includes(index)) {
      dispatch(setSelectTile(selectTile.filter((tile) => tile !== index)));
    } else {
      if (selectTile.length < 10) {
        dispatch(setSelectTile([...selectTile, index]));
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
            className="text-white font-bold py-1 max-sm:w-[1.65rem] text-sm bg-[#2f4553] xl:w-[3.85rem] xl:py-4 lg:w-[2.9rem] lg:py-2 md:w-[1.88rem] md:py-2.5 rounded "
            style={{
              fontSize:
                window.innerWidth >= 320 && window.innerWidth <= 425
                  ? "0.5rem"
                  : window.innerWidth <= 768
                  ? "0.59rem"
                  : undefined,
            }}
          >
            {value}
          </button>
        ) : null
      );
    };

    switch (values?.risk) {
      case "Classic":
        return (
          <div className="w-full flex xl:space-x-3 lg:space-x-2 md:space-x-1 max-sm:space-x-1">
            {xValueButton(config.Classic)}
          </div>
        );
      case "Low":
        return (
          <div className="w-full flex xl:space-x-3 lg:space-x-2  md:space-x-1 max-sm:space-x-1">
            {xValueButton(config.Low)}
          </div>
        );
      case "Medium":
        return (
          <div className="w-full flex xl:space-x-3 lg:space-x-2  md:space-x-1 max-sm:space-x-1">
            {xValueButton(config.Medium)}
          </div>
        );
      case "High":
        return (
          <div className="w-full flex xl:space-x-3 lg:space-x-2  md:space-x-1 max-sm:space-x-1">
            {xValueButton(config.High)}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`bg-[#0f212e] relative h-full flex flex-col items-center justify-center rounded-t-lg lg:p-4 md:p-1.5 ${
        isMobile ? " max-sm:mx-3" : "xl:w-[52rem] lg:w-[39rem]"
      }`}
    >
      <div
        className={`grid ${
          isMobile
            ? "grid-cols-8 gap-1.5"
            : "grid-cols-8 xl:gap-x-3 lg:gap-x-2 md:gap-x-3 gap-x-3 gap-y-1.5"
        } relative z-10 p-1.5 max-sm:w-full`}
      >
        {images?.map((img, index) => (
          <div
            key={index}
            className={`flex justify-center items-center w-full ${
              isMobile
                ? "md:w-[2.6rem] p-2 md:h-[2.7rem] w-[2.4rem] h-[2.5431rem] "
                : "xl:w-[5.3rem] lg:w-[4.2rem] xl:h-[5.3rem] lg:h-[4.2rem]"
            } bg-[#2f4553] rounded-lg hover:-translate-y-1 hover:bg-[#688a9f]  ${
              zoomClass[index] ? "zoom-in-out" : ""
            }`}
            onClick={() => handleClick(index)}
            style={{
              // backgroundColor: revealed[index] || gamesOver ? "#071824" : "#2f4553",
              backgroundColor: revealed[index]
                ? ""
                : selectTile?.includes(index)
                ? "#9000ff"
                : "#2f4553",
              borderBottom: selectTile?.includes(index)
                ? "8px solid #7100c7"
                : "8px solid #253742",
              cursor: revealed[index] ? "not-allowed" : "pointer",
              opacity:
                selectTile.length < 10
                  ? "1"
                  : selectTile?.includes(index)
                  ? "1"
                  : "0.6",
            }}
          >
            {img ? (
              <img
                style={{
                  width: img.size,
                  height: img.size,
                  opacity: img.opacity || 1,
                }}
                // className={`flex justify-center items-center ${revealed[index] || gamesOver ? "reveal-animation" : "hidden"} ${img.className || ""}`}
                className={`flex justify-center items-center ${
                  revealed[index] ? "reveal-animation" : "hidden"
                } ${img.className || ""}`}
                src={img.icon}
                alt="Icon"
              />
            ) : (
              <p className="xl:text-xl lg::text-xl md:text-sm text-xs font-bold">
                {index + 1}
              </p>
            )}
          </div>
        ))}
      </div>
      {selectTile.length > 0 ? (
        <div className="w-full flex justify-center items-center flex-col pt-2">
          <div className="px-4 md:px-0 max-sm:px-0.5 mb-3">
            {renderButtons()}
          </div>
          {/* </div> */}
          <div className=" xl:w-[50.5rem] lg:w-[37.5rem] md:w-[23.2rem] w-[21rem] px-1 mb-2.5 flex">
            {Array.from({ length: Math.min(selectTile.length + 1, 11) }).map(
              (_, index) => (
                <button
                  key={index}
                  className="text-white font-bold xl:text-[1.2rem] lg:text-[0.6695rem] md:text-[0.7rem] text-[0.6rem] xl:py-4 lg:py-4 md:py-2 py-1 bg-[#2f4553] w-full flex items-center justify-center"
                >
                  {index}x
                  <img
                    src={kenoDaimond}
                    className="xl:w-4 xl:h-4 lg:w-3 lg:h-3 md:w-2.5 md:h-2.5 w-2 h-2 mx-1"
                    style={{ filter: "grayscale(100%)" }}
                    alt="Not Found"
                  />
                </button>
              )
            )}
          </div>
        </div>
      ) : (
        <div className="w-full px-4 mb-4 lg:mt-14 md:mt-8 mt-10">
          <button className="text-[#d5dceb] text-sm py-2 bg-[#2f4553] font-semibold w-full rounded-md">
            Select 1 - 10 numbers to play
          </button>
        </div>
      )}
    </div>
  );
}

export default KenoGameContent;
