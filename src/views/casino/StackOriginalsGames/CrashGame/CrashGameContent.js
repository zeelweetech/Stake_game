import React, { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis } from "recharts";
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
import {
  setMultiplier,
  setXValue,
} from "../../../../features/casino/crashSlice";

function CrashGameContent({ displayData }) {
  const dispatch = useDispatch();
  const [data, setData] = useState([{ time: 0, value: 1 }]);
  const {
    gameStatusData,
    xValue,
    bettingStatus,
    crashStatus,
    multiplier,
    combinedData,
  } = useSelector((state) => state.crashGame);
  const [visibleData, setVisibleData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextData = combinedData.slice(currentIndex, currentIndex + 4);
      setVisibleData(nextData);
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 4;
        return newIndex >= combinedData.length ? 0 : newIndex;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex, bettingStatus === false]);

  useEffect(() => {
    socket.on("endRound", (data) => {
      dispatch(setXValue(parseFloat(data?.crashPoint)));
    });
  }, [dispatch]);

  socket.on("multiplierUpdate", (data) => {
    dispatch(setMultiplier(data?.multiplier));
  });

  useEffect(() => {
    dispatch(setMultiplier(0));
    setData([{ time: 0, value: 0 }]);
  }, [bettingStatus === true]);

  useEffect(() => {
    handlePlanData(xValue);
  }, [multiplier]);

  const handlePlanData = (targetValue) => {
    const interval = setInterval(() => {
      setData((prevData) => [
        ...prevData,
        {
          time: prevData.length,
          value: multiplier,
        },
      ]);
      if (xValue === targetValue) {
        clearInterval(interval);
      }
    }, 1000);
  };

  const getLastValueColor = () => {
    if (data.length > 0) {
      const lastItem = data[data.length - 1];
      return lastItem.value === xValue ? "text-red-500" : "text-white";
    }
    return "text-white";
  };

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
              domain={[1, 1]}
            />
            <YAxis
              tickFormatter={(tick) => `${tick}x`}
              stroke="#B1BAD3"
              tick={{ stroke: "#B1BAD3", strokeWidth: 1 }}
              axisLine={{ stroke: "#B1BAD3", strokeWidth: 2 }}
              domain={[1, 1]}
            />
            <Area
              type="basis"
              dataKey="value"
              stroke={
                data?.length > 0
                  ? data[data.length - 1]?.value === xValue
                    ? "#4d718768"
                    : "#fff"
                  : "#fff"
              }
              fill={
                data?.length > 0
                  ? data[data.length - 1]?.value === xValue
                    ? "#4d718768"
                    : "#ffa500"
                  : "#ffa500"
              }
              strokeWidth={5}
              isAnimationActive={true}
            />
          </AreaChart>
        </div>
        <div className="absolute top-44 flex justify-between items-center w-full px-4 text-white font-bold">
          <div className="flex-grow flex items-center justify-center abc">
            <div className="text-center">
              <p className={`text-6xl ${getLastValueColor()}`}>{multiplier}x</p>
              {data?.length > 0 ? (
                data[data?.length - 1]?.value === xValue ? (
                  <button className="bg-[#4d718768] text-xl shadow-lg px-12 pt-2 pb-3 mt-3 rounded-md">
                    Crashed
                  </button>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
              {bettingStatus === true ? (
                <button className="bg-[#4d718768] text-2xl px-16 pt-3 pb-4 mt-3 rounded-md progress-bar">
                  starting in
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex flex-col items-end space-y-1.5 xyz">
            {bettingStatus === false &&
              visibleData?.map((data, index) => (
                <button
                  key={index}
                  className="py-2 px-3 border-2 border-[#4d718768] bg-[#213743] rounded-full"
                >
                  <div className="flex items-center">
                    <BsIncognito />
                    <p className="text-[#b1bad3] text-xs">Hidden</p>
                    <RiMoneyRupeeCircleFill color="yellow" size={20} />
                    <p className="text-green-500">
                      {data?.Money ? data?.Money : data?.amount}
                    </p>
                  </div>
                </button>
              ))}
            {/* <button className="py-2 px-3 border-2 border-[#4d718768] bg-[#213743] rounded-full">
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
                <RiMoneyRupeeCircleFill color="yellow" size={20} />
                <p>₹8,800.65</p>
              </div>
            </button>
            <button className="py-2 px-3 border-2 border-[#4d718768] bg-[#213743] rounded-full">
              <div className="flex items-center">
                <BsIncognito />
                <p className="text-[#b1bad3] text-xs">Hidden</p>
                <RiMoneyCnyCircleFill color="#3277a8" size={20} />
                <p>₹143.54</p>
              </div>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrashGameContent;
