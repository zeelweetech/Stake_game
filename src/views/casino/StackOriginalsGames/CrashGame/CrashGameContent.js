import React, { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { IoIosTrendingUp } from "react-icons/io";
import { BsIncognito } from "react-icons/bs";
import {
  RiMoneyCnyCircleFill,
  RiMoneyDollarCircleFill,
  RiMoneyPoundCircleFill,
  RiMoneyRupeeCircleFill,
} from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../../../../socket";
import { setXValue } from "../../../../features/casino/crashSlice";

function CrashGameContent({ displayData }) {
  const dispatch = useDispatch();
  const [data, setData] = useState([{ time: 0, value: 1 }]);
  const [multiplier, setMultiplier] = useState(0);
  const { gameStatusData, xValue, bettingStatus } = useSelector(
    (state) => state.crashGame
  );

  useEffect(() => {
    socket.on("endRound", (data) => {
      dispatch(setXValue(data?.crashPoint));
    });
  }, [dispatch]);

  useEffect(() => {
    socket.on("multiplierUpdate", (data) => {
      setMultiplier(data?.multiplier?.toFixed(2));
    });
  }, []);

  useEffect(() => {
    setMultiplier(0);
    setData([{ time: 0, value: 0 }]);
  }, [bettingStatus === true]);

  useEffect(() => {
    handlePlanData(xValue);
  }, [multiplier]);

  const handlePlanData = (targetValue) => {
    const interval = setInterval(() => {
      setData((prevData) => [
        ...prevData,
        { time: prevData.length, value: multiplier },
      ]);

      if (xValue === targetValue) {
        clearInterval(interval);
      }
    }, 1000);
  };
  //   if (!isCrashed) {
  //     setIsCashedOut(true);
  //     alert(`You cashed out at ${multiplier}x!`);
  //   }
  // };

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
      <div className="flex flex-col items-center justify-between flex-grow w-full item-center mt-10 relative">
        <div className="pr-32">
          <AreaChart
            width={700}
            height={550}
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
              tickFormatter={(tick) => (tick % 2 === 0 ? `${tick}s` : "")}
              stroke="#B1BAD3"
              tick={{ stroke: "#B1BAD3", strokeWidth: 1 }}
              axisLine={{ stroke: "#B1BAD3", strokeWidth: 2 }}
              domain={[0, "auto"]}
            />
            <YAxis
              tickFormatter={(tick) => `${tick.toFixed(1)}x`}
              stroke="#B1BAD3"
              tick={{ stroke: "#B1BAD3", strokeWidth: 1 }}
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
            />
          </AreaChart>
        </div>
        {/* {isCrashed && <p>The plan has crashed!</p>} */}
        <div className="absolute top-48 flex justify-between items-center w-full px-4 text-white font-bold">
          <div className="flex-grow flex items-center justify-center abc">
            <div className="text-center">
              <p className="text-6xl">{multiplier}x</p>
              <button className="bg-[#ffa500] text-2xl px-16 pt-2 pb-3 mt-3 rounded-md">
                starting in
              </button>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-1.5 xyz">
            <button className="py-2 px-3 border-2 border-[#4d718768] bg-[#213743] rounded-full">
              <div className="flex items-center">
                <BsIncognito />
                <p className="text-[#b1bad3] text-xs">Hidden</p>
                <RiMoneyPoundCircleFill color="green" size={20} />
                <p>₹10.38</p>
              </div>
            </button>
            <button className="py-2 px-3 border-2 border-[#4d718768] bg-[#213743] rounded-full">
              <div className="flex items-center">
                <BsIncognito />
                <p className="text-[#b1bad3] text-xs">Hidden</p>
                <RiMoneyRupeeCircleFill color="yellow" size={20} />
                <p>₹8,800.65</p>
              </div>
            </button>
            <button className="py-2 px-3 border-2 border-[#4d718768] bg-[#213743] rounded-full">
              <div className="flex items-center">
                <BsIncognito />
                <p className="text-[#b1bad3] text-xs">Hidden</p>
                <RiMoneyDollarCircleFill color="orange" size={20} />
                <p>₹60.05</p>
              </div>
            </button>
            <button className="py-2 px-3 border-2 border-[#4d718768] bg-[#213743] rounded-full">
              <div className="flex items-center">
                <BsIncognito />
                <p className="text-[#b1bad3] text-xs">Hidden</p>
                <RiMoneyCnyCircleFill color="#3277a8" size={20} />
                <p>₹143.54</p>
              </div>
            </button>
          </div>
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
