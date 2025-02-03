import React, { useEffect, useState } from "react";

function SlideGameContent({ slideGameSocket }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [skullPosition, setSkullPosition] = useState({ rowIndex: null, boxIndex: null });

  // Create grid structure - 5 rows with 3 boxes each
  const gridStructure = [
    [0, 1, 2], // row 0
    [0, 1, 2], // row 1
    [0, 1, 2], // row 2
    [0, 1, 2], // row 3
    [0, 1, 2], // row 4
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Handle autoBetResult event
    const handleAutoBetResult = (data) => {
      console.log("Received data:", data);
      if (data.lostIndex) {
        const rowIndex = parseInt(data.lostIndex.key);
        const boxIndex = data.lostIndex.value;
        console.log(`Setting skull at row ${rowIndex}, box ${boxIndex}`);
        setSkullPosition({ rowIndex, boxIndex });
      }
    };

    // Subscribe to autoBetResult event
    window.addEventListener("autoBetResult", (e) => handleAutoBetResult(e.detail));

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("autoBetResult", (e) => handleAutoBetResult(e.detail));
    };
  }, []);

  const renderBox = (rowIndex, boxIndex) => {
    const isSkull = skullPosition.rowIndex === rowIndex && skullPosition.boxIndex === boxIndex;

    return (
      <div
        key={`${rowIndex}-${boxIndex}`}
        className="w-20 h-20 bg-gray-700 m-1 rounded flex items-center justify-center"
      >
        {isSkull && (
          <img
            src="/images/skull.png"
            alt="Skull"
            className="w-16 h-16 object-contain"
          />
        )}
      </div>
    );
  };

  return (
    <div
      className={`xl:w-[51rem] lg:w-[39rem] max-sm:mx-3 h-full text-center flex flex-col justify-center select-none relative bg-[#0f212e] ${isMobile ? "rounded-t-lg" : "rounded-tr-lg"
        } `}
    >
      <div className="flex flex-col items-center p-4">
        {gridStructure.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((_, boxIndex) => renderBox(rowIndex, boxIndex))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlideGameContent;
