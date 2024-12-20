import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectTile } from "../../../../features/casino/kenoSlice";

function KenoGameContent() {
  const dispatch = useDispatch();
  const [images, setImages] = useState(Array(40).fill(null));
  const [revealed, setRevealed] = useState(Array(40).fill(false));
  const [zoomClass, setZoomClass] = useState(Array(40).fill(false));
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { selectTile } = useSelector((state) => state.kenoGame);
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

  return (
    <div className={`bg-[#0f212e] relative h-full flex flex-col items-center justify-center rounded-t-lg ${isMobile ? ' max-sm:mx-2' : 'xl:w-[52rem] lg:w-[40rem]'}`}>
      <div className={`grid ${isMobile ? 'grid-cols-8 gap-1.5' : 'grid-cols-8 gap-x-3 gap-y-1.5'} mt-3 mb-16 relative z-10 p-1.5 max-sm:w-full`}>
        {images?.map((img, index) => (
          <div
            key={index}
            className={`flex justify-center items-center w-full ${isMobile ? 'md:w-[4.35rem] p-2 md:h-[4.35rem w-[4.6rem] h-[4.35rem] ' : 'xl:w-[5.3rem] lg:w-[6.7rem] xl:h-[5.3rem] lg:h-[7rem]'} bg-[#2f4553] rounded-lg hover:-translate-y-1 hover:bg-[#688a9f] ${zoomClass[index] ? "zoom-in-out" : ""}`}
            onClick={() => handleClick(index)}
            style={{
              // backgroundColor: revealed[index] || gamesOver ? "#071824" : "#2f4553",
              backgroundColor: revealed[index] ? "#071824" : selectTile.includes(index) ? "#9000ff" : "#2f4553",
              borderBottom: selectTile.includes(index) ? "8px solid #7100c7" : "8px solid #253742",
              cursor: revealed[index] ? "not-allowed" : "pointer",
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
                className={`flex justify-center items-center ${revealed[index] ? "reveal-animation" : "hidden"} ${img.className || ""}`}
                src={img.icon}
                alt="Icon"
              />
            ) : (
              <p className="text-xl font-bold">{index + 1}</p>
            )}
          </div>
        ))}
      </div>
      <div className="w-full px-4 mb-4">
        <button className="text-[#d5dceb] text-sm py-4 bg-[#2f4553] w-full rounded-md">Select 1 - 10 numbers to play</button>
      </div>
    </div>
  );
}

export default KenoGameContent;
