import React, { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis } from "recharts";

function CrashGameContent() {
  const array = [
    { time: 0, value: 0 },
    { time: 0.5, value: 0.25 },
    { time: 1, value: 0.75 },
    { time: 1.5, value: 0.9 },
    { time: 2, value: 1 },
    { time: 2.5, value: 1.25 },
    { time: 3, value: 1.75 },
    { time: 3.5, value: 1.9 },
    { time: 4, value: 2 },
    { time: 4.5, value: 2.5 },
    { time: 5, value: 3 },
  ];
  const [data, setData] = useState([]);
  const [isCrashed, setIsCrashed] = useState(false);
  // console.log("data", data);

  useEffect(() => {
    handlePlanData(7);
  }, []);

  const handlePlanData = (targetValue) => {
    if (!isCrashed) {
      let increment = 0;
      let time = 0;
      const newData = [{ time: 0, value: 0 }];

      const interval = setInterval(() => {
        increment += 0.25;
        time += 0.5;

        newData.push({ time: time, value: increment });
        console.log("newData", newData);
        // console.log("increment", increment);

        setData([...newData]);

        if (increment === targetValue) {
          clearInterval(interval);
          setIsCrashed(true);
        }
      }, 1000);
    }
  };

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
    <div className="min-h-[433px] w-full flex flex-col justify-center flex-grow select-none relative overflow-hidden mx-auto custom-top-right-radius bg-[#0f212e]">
      <div></div>
      <div className="flex flex-col items-center justify-between flex-grow w-full">
        <div className="flex justify-center item-center h-full">
          <AreaChart
            width={800}
            height={600}
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
              interval="preserveStartEnd"
              stroke="#B1BAD3" // Set the color of the X-axis line
              tick={{ stroke: "#B1BAD3", strokeWidth: 1 }} // Set the color and thickness of the tick marks
              axisLine={{ stroke: "#B1BAD3", strokeWidth: 2 }}
            />
            <YAxis
              tickFormatter={(tick) => `${tick}x`}
              stroke="#B1BAD3" // Set the color of the Y-axis line
              tick={{ stroke: "#B1BAD3", strokeWidth: 1 }} // Set the color and thickness of the tick marks
              axisLine={{ stroke: "#B1BAD3", strokeWidth: 2 }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#fff"
              fill="#ffa500"
              strokeWidth={5}
              isAnimationActive={true}
              // animationDuration={1000}
            />
          </AreaChart>
          {/* {isCrashed && <p>The plan has crashed!</p>} */}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default CrashGameContent;
