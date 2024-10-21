import React, { useEffect, useRef, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { IoArrowUndo } from "react-icons/io5";
import { WheelSocket } from "../../../../socket";
Chart.register(ArcElement, Tooltip, Legend);

function WheelGameContent() {
  const [finalValue, setFinalValue] = useState(
    "Click On The Spin Button To Start"
  );
  const [isSpinning, setIsSpinning] = useState(false);
  const myChartRef = useRef(null);

  WheelSocket.on("manualBetResult", (data) => {
    console.log("manal bet data", data);
  });

  WheelSocket.on("autoBetResult", (data) => {
    console.log("auto bet data", data);
  });

  // Object that stores values of minimum and maximum angle for a value
  const rotationValues = [
    { minDegree: 0, maxDegree: 30, value: 2 },
    { minDegree: 31, maxDegree: 90, value: 1 },
    { minDegree: 91, maxDegree: 150, value: 6 },
    { minDegree: 151, maxDegree: 210, value: 5 },
    { minDegree: 211, maxDegree: 270, value: 4 },
    { minDegree: 271, maxDegree: 330, value: 3 },
    { minDegree: 331, maxDegree: 360, value: 2 },
  ];

  // Size of each piece
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7],
    datasets: [
      {
        data: [16, 16, 16, 16, 16, 16, 16],
        backgroundColor: [
          "#8b35bc",
          "#b163da",
          "#8b35bc",
          "#b163da",
          "#8b35bc",
          "#b163da",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      tooltip: false,
      legend: { display: false },
      datalabels: {
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 24 },
      },
    },
  };

  // Spinner count
  let count = 0;
  let resultValue = 101;

  useEffect(() => {}, []);

  // Spin logic
  const handleSpinClick = () => {
    setIsSpinning(true);
    setFinalValue("Good Luck!");
    let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
    const rotationInterval = setInterval(() => {
      if (!myChartRef.current) return;
      const chart = myChartRef.current;

      // Spin logic
      chart.options.rotation = chart.options.rotation + resultValue;
      chart.update();

      if (chart.options.rotation >= 360) {
        count += 1;
        resultValue -= 5;
        chart.options.rotation = 0;
      } else if (count > 15 && chart.options.rotation === randomDegree) {
        valueGenerator(randomDegree);
        clearInterval(rotationInterval);
        count = 0;
        resultValue = 101;
        setIsSpinning(false);
      }
    }, 10);
  };

  const valueGenerator = (angleValue) => {
    for (let i of rotationValues) {
      if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
        setFinalValue(`Value: ${i.value}`);
        break;
      }
    }
  };

  return (
    <div className="flex justify-center items-cente h-full">
      <div className="w-96 p-10  relative">
        <div className="relative">
          <Pie data={data} options={options} ref={myChartRef} />
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400 hover:bg-yellow-300 text-orange-700 font-semibold text-xl uppercase px-4 py-2"
            onClick={handleSpinClick}
            disabled={isSpinning}
          >
            {isSpinning ? "Spinning..." : "Spin"}
          </button>
          {/* <img
            src="https://cutewallpaper.org/24/yellow-arrow-png/155564497.jpg"
            alt="spinner arrow"
            className="absolute top-1/2 right-0 transform -translate-y-1/2 w-16"
          /> */}
          <IoArrowUndo
            className="absolute top-1/2 right-0 transform -translate-y-1/2 w-24 ml-6"
            style={{ width: "50px" }}
          />
        </div>
        <div className="text-center mt-4 text-lg text-gray-700">
          <p>{finalValue}</p>
        </div>
      </div>
    </div>
  );
}

export default WheelGameContent;
