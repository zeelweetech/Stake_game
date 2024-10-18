import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

function WheelGameContent() {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [finalValue, setFinalValue] = useState("Good Luck!");

  const data = [16, 16, 16, 16, 16, 16];
  const pieColors = [
    "#8b35bc",
    "#b163da",
    "#8b35bc",
    "#b163da",
    "#8b35bc",
    "#b163da",
  ];
  const rotationValues = [
    { minDegree: 0, maxDegree: 30, value: 2 },
    { minDegree: 31, maxDegree: 90, value: 1 },
    { minDegree: 91, maxDegree: 150, value: 6 },
    { minDegree: 151, maxDegree: 210, value: 5 },
    { minDegree: 211, maxDegree: 270, value: 4 },
    { minDegree: 271, maxDegree: 330, value: 3 },
    { minDegree: 331, maxDegree: 360, value: 2 },
  ];

  const chartData = {
    labels: [1, 2, 3, 4, 5, 6],
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    animation: { duration: 0 },
    rotation: rotation,
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

  const spinWheel = () => {
    if (!spinning) {
      setSpinning(true);
      setFinalValue("Good Luck!");
      let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
      let currentRotation = 0;
      let resultValue = 101;
      let count = 0;

      const rotationInterval = setInterval(() => {
        currentRotation += resultValue;
        setRotation(currentRotation);

        if (currentRotation >= 360) {
          count++;
          resultValue -= 5;
          currentRotation = 0;
        } else if (count > 15 && currentRotation === randomDegree) {
          clearInterval(rotationInterval);
          setSpinning(false);
          valueGenerator(randomDegree);
        }
      }, 10);
    }
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
    <div className="bg-[#0f212e] h-full flex flex-col items-center justify-center xl:w-[52rem] lg:w-[36.8rem]">
      <div className="w-11/12 max-w-lg mx-auto p-12 rounded-lg">
        <div className="relative">
          <Pie data={chartData} options={chartOptions} />
          <button
            className="absolute inset-0 h-1/4 w-1/4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-xl font-semibold text-orange-800 uppercase tracking-widest"
            onClick={spinWheel}
            disabled={spinning}
          >
            Spin
          </button>
        </div>
        <div className="text-center text-xl mt-6 font-medium text-white">
          {finalValue}
        </div>
      </div>
    </div>
  );
}

export default WheelGameContent;
