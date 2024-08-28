import React, { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { IoIosTrendingUp } from "react-icons/io";

function CrashGameContent() {
  const [data, setData] = useState([{ time: 0, value: 1 }]);
  const [isCrashed, setIsCrashed] = useState(false);
  const [multiplier, setMultiplier] = useState(1);
  const [isCashedOut, setIsCashedOut] = useState(false);
  console.log("data", data);

  useEffect(() => {
    startGame();
  }, []);

  const startGame = () => {
    setIsCrashed(false);
    setIsCashedOut(false);
    setMultiplier(1);
    setData([{ time: 0, value: 1 }]);
    const randomCrashValue = 2;
    handlePlanData(randomCrashValue);
  };

  const generateRandomCrashValue = () => {
    return parseFloat((Math.random() * (50 - 1.2) + 1.2).toFixed(2));
  };

  const handlePlanData = (targetValue) => {
    let increment = 1;
    let time = 0;

    const interval = setInterval(() => {
      if (isCrashed || isCashedOut) {
        clearInterval(interval);
        return;
      }

      increment += increment * 0.015;
      time += 1;

      console.log("increment", increment);
      console.log("time", time);

      setMultiplier(increment.toFixed(2));

      setData((prevData) => [
        ...prevData,
        { time: time, value: parseFloat(increment.toFixed(2)) },
      ]);

      if (increment >= targetValue) {
        clearInterval(interval);
        setIsCrashed(true);
      }
    }, 300);
  };

  const handleCashOut = () => {
    if (!isCrashed) {
      setIsCashedOut(true);
      alert(`You cashed out at ${multiplier}x!`);
    }
  };

  // const array = [
  //   { time: 0, value: 0 },
  //   { time: 0.5, value: 0.25 },
  //   { time: 1, value: 0.75 },
  //   { time: 1.5, value: 0.9 },
  //   { time: 2, value: 1 },
  //   { time: 2.5, value: 1.25 },
  //   { time: 3, value: 1.75 },
  //   { time: 3.5, value: 1.9 },
  //   { time: 4, value: 2 },
  //   { time: 4.5, value: 2.5 },
  //   { time: 5, value: 3 },
  // ];
  // const [data, setData] = useState([]);
  // const [isCrashed, setIsCrashed] = useState(false);

  // useEffect(() => {
  //   handlePlanData(17);
  // }, []);

  // const handlePlanData = (targetValue) => {
  //   if (!isCrashed) {
  //     let increment = 0;
  //     let time = 0;
  //     const newData = [{ time: 0, value: 0 }];

  //     const interval = setInterval(() => {
  //       increment += 0.25;
  //       time += 0.5;

  //       newData.push({ time: time, value: increment });
  //       console.log("newData", newData);
  //       // console.log("increment", increment);

  //       setData([...newData]);

  //       if (increment === targetValue) {
  //         clearInterval(interval);
  //         setIsCrashed(true);
  //       }
  //     }, 500);
  //   }
  // };

  // const customTickFormatter = (tick) => {
  //   // Shift the labels dynamically
  //   if (tick % 2 === 0 && tick <= 8) {
  //     return `${tick}s`; // Show only multiples of 2 and up to 8s
  //   } else if (tick > 8) {
  //     // Shift the labels as time progresses beyond 8 seconds
  //     return `${tick}s`;
  //   }
  //   return ""; // Return an empty string for all other ticks
  // };

  return (
    <div className="w-full h-full flex flex-col justify-center select-none relative bg-[#0f212e] rounded-tr-lg">
      <div className="mt-4 flex justify-end space-x-2 text-black text-xs font-semibold pr-3">
        <button className="p-2.5 bg-white rounded-full">7.09x</button>
        <button className="p-2.5 bg-white rounded-full">1.76x</button>
        <button className="p-2.5 bg-white rounded-full">1.56x</button>
        <button className="p-2.5 bg-[#1fff20] rounded-full">45.87x</button>
        <button className="p-2.5 bg-[#1fff20] rounded-full">3.15x</button>
        <button className="px-2.5 py-2.5 text-lg bg-[#4d718768] font-semibold hover:bg-[#9abfd668] rounded-full">
          <IoIosTrendingUp color="white" />
        </button>
      </div>
      <div className="flex flex-col items-center justify-between flex-grow w-full item-center mt-10 pr-14 relative">
        <ResponsiveContainer width={700} height={550}>
          <AreaChart
            // width={700}
            // height={550}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis
              dataKey="time"
              tickFormatter={(tick) => `${tick}s`}
              // interval="preserveStartEnd"
              stroke="#B1BAD3" // Set the color of the X-axis line
              tick={{ stroke: "#B1BAD3", strokeWidth: 1 }} // Set the color and thickness of the tick marks
              axisLine={{ stroke: "#B1BAD3", strokeWidth: 2 }}
              domain={[0, "auto"]}
            />
            <YAxis
              tickFormatter={(tick) => `${tick.toFixed(1)}x`}
              stroke="#B1BAD3" // Set the color of the Y-axis line
              tick={{ stroke: "#B1BAD3", strokeWidth: 1 }} // Set the color and thickness of the tick marks
              axisLine={{ stroke: "#B1BAD3", strokeWidth: 2 }}
              domain={[1, "auto"]}
            />
            <Area
              type="basis"
              dataKey="value"
              stroke="#fff"
              fill="#ffa500"
              strokeWidth={5}
              isAnimationActive={true}
              // animationDuration={1000}
            />
          </AreaChart>
        </ResponsiveContainer>
        {/* {isCrashed && <p>The plan has crashed!</p>} */}
        <div className="absolute top-48 flex flex-col justify-center text-white font-bold">
          <p className="text-6xl text-center">{multiplier}x</p>
          <button className="bg-[#ffa500] text-2xl px-16 pt-2 pb-3 mt-3 rounded-md">
            starting in
          </button>
          {/* <div className="flex justify-end">
            <button className="p-2.5 bg-white rounded-full">1.56x</button>
          </div> */}
        </div>
      </div>
      <div className="flex justify-end items-center mb-0.5">
        <p>Network Status</p>
        <span className="relative flex h-3 w-3 ml-2 mt-2">
          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#1fff20] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1fff20]"></span>
        </span>
      </div>
    </div>
  );
}

export default CrashGameContent;
