import React, { useEffect, useState } from "react";
// import { AreaChart, Area, XAxis, YAxis } from "recharts";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { IoIosTrendingUp } from "react-icons/io";
import { BsIncognito } from "react-icons/bs";
import {
  RiMoneyCnyCircleFill,
  RiMoneyDollarCircleFill,
  RiMoneyPoundCircleFill,
  RiMoneyRupeeCircleFill,
} from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { CrashSocket } from "../../../../socket";
import {
  setMultiplier,
  setXValue,
} from "../../../../features/casino/crashSlice";
import { getRandomFiveData } from "../../../../services/CasinoServices";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function CrashGameContent() {
  const dispatch = useDispatch();
  // const [data, setData] = useState([{ time: 0, value: 1 }]);
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const { xValue, bettingStatus, multiplier, combinedData, crashStatus } =
    useSelector((state) => state.crashGame);
  const [visibleData, setVisibleData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [topXData, setTopXData] = useState();
  CrashSocket.on("multiplierUpdate", (data) => {
    dispatch(setMultiplier(data?.multiplier));
  });

  useEffect(() => {
    if (bettingStatus === true) {
      GetRendomFiveData();
    }
  }, [bettingStatus === true]);

  useEffect(() => {
    GetRendomFiveData();
  }, []);

  const GetRendomFiveData = async () => {
    await getRandomFiveData()
      .then((response) => {
        setTopXData(response?.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    if (bettingStatus === false) {
      const interval = setInterval(() => {
        const nextData = combinedData.filter((item) => {
          return (
            item?.cashoutMultiplier < multiplier ||
            item?.multiplier < multiplier
          );
        });

        if (nextData.length > 0) {
          const data = nextData.slice(currentIndex, currentIndex + 4);
          setVisibleData(data);

          setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + 4;
            return newIndex >= nextData.length ? 0 : newIndex;
          });
        }
      }, 300);

      return () => clearInterval(interval);
    }
  }, [bettingStatus === false, multiplier, currentIndex]);

  useEffect(() => {
    if (bettingStatus) {
      setVisibleData([]);
    }
  }, [bettingStatus]);

  useEffect(() => {
    CrashSocket.on("endRound", (data) => {
      dispatch(setXValue(parseFloat(data?.crashPoint)));
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch(setMultiplier(0));
    // setData([{ time: 0, value: 0 }]);
    setChartData({ labels: [], datasets: [{ data: [] }] });
  }, [bettingStatus === true]);

  // Update chart data on multiplier change
  useEffect(() => {
    if (!bettingStatus) {
      setChartData((prevData) => ({
        labels: [...prevData.labels, prevData.labels.length],
        datasets: [
          {
            data: [...prevData.datasets[0].data, multiplier],
            borderColor: "white",
            backgroundColor:
              chartData.datasets[0]?.data[
                chartData.datasets[0].data.length - 1
              ] === xValue
                ? "#4d718768"
                : "#ffa500",
            fill: true,
            // lineTension: 0.4,
            borderWidth: 5,
            pointRadius: 0,
          },
        ],
      }));
    }
  }, [multiplier]);

  // useEffect(() => {
  //   handlePlanData(xValue);
  // }, [multiplier]);

  // const handlePlanData = (targetValue) => {
  //   const interval = setInterval(() => {
  //     setData((prevData) => [
  //       ...prevData,
  //       {
  //         time: prevData.length,
  //         value: multiplier,
  //       },
  //     ]);
  //     if (xValue === targetValue) {
  //       clearInterval(interval);
  //     }
  //   }, 1000);
  // };

  const getLastValueColor = () => {
    const lastValue =
      chartData.datasets[0]?.data[chartData.datasets[0].data.length - 1];
    return lastValue === xValue ? "text-red-500" : "text-white";
  };

  // Chart.js options
  const chartOptions = {
    scales: {
      x: {
        ticks: { color: "white", font: { size: 18 } },
        grid: { display: false },
        min: 1,
      },
      y: {
        ticks: { color: "white", font: { size: 18 }, stepSize: 1 },
        min: 1,
        grid: { display: false },
      },
    },
    plugins: { legend: { display: false } },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className="w-full flex flex-col justify-center select-none relative bg-[#0f212e] rounded-tr-lg">
      <div className="mt-4 flex justify-end space-x-2 text-black text-xs font-semibold pr-3">
        {topXData?.length > 0 &&
          [...topXData].reverse()?.map((item, index) => {
            return (
              <div key={index}>
                <button
                  className={`p-2.5 ${
                    item?.crashPoint > 3 ? "bg-[#1fff20]" : "bg-white"
                  } rounded-full`}
                >{`${item?.crashPoint}x`}</button>
              </div>
            );
          })}
        {/* <button
          className={`p-2.5 ${
            TopXData?.[3] > 3 ? "bg-[#1fff20]" : "bg-white"
          } rounded-full`}
        >{`${crashStatus?.lastPulls?.length > 0 ? TopXData?.[3] : 1}x`}</button>
        <button
          className={`p-2.5 ${
            TopXData?.[2] > 3 ? "bg-[#1fff20]" : "bg-white"
          } rounded-full`}
        >{`${crashStatus?.lastPulls?.length > 0 ? TopXData?.[2] : 1}x`}</button>
        <button
          className={`p-2.5 ${
            TopXData?.[1] > 3 ? "bg-[#1fff20]" : "bg-white"
          } rounded-full`}
        >{`${crashStatus?.lastPulls?.length > 0 ? TopXData?.[1] : 1}x`}</button>
        <button
          className={`p-2.5 ${
            TopXData?.[0] > 3 ? "bg-[#1fff20]" : "bg-white"
          } rounded-full`}
        >{`${
          crashStatus?.lastPulls?.length > 0
            ? crashStatus?.lastPulls?.map((item) => {
                return item;
              })?.[0]
            : 1
        }x`}</button> */}
        <button className="px-2.5 py-2.5 text-lg bg-[#4d718768] font-semibold hover:bg-[#9abfd668] rounded-full">
          <IoIosTrendingUp color="white" />
        </button>
      </div>
      <div className="flex flex-col items-center justify-between flex-grow w-full item-center mt-10 relative">
        <div className="pr-32" style={{ width: "700px", height: "550px" }}>
          <Line id="multiplier-chart" data={chartData} options={chartOptions} />
          {/* <ResponsiveContainer width="100%" height={550}> */}

          {/* <AreaChart
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
          </AreaChart> */}
          {/* </ResponsiveContainer> */}
        </div>
        <div className="absolute top-44 flex justify-between items-center w-full px-4 text-white font-bold">
          <div className="flex-grow flex items-center justify-center abc">
            <div className="text-center">
              <p className={`text-6xl ${getLastValueColor()}`}>{multiplier}x</p>

              {chartData.datasets[0]?.data[
                chartData.datasets[0].data.length - 1
              ] === xValue && (
                <button className="bg-[#4d718768] text-xl shadow-lg px-12 pt-2 pb-3 mt-3 rounded-md">
                  Crashed
                </button>
              )}
              {bettingStatus && (
                <button className="bg-[#4d718768] text-2xl px-16 pt-3 pb-4 mt-3 rounded-md progress-bar">
                  starting in
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-col items-end space-y-1.5 xyz">
            {visibleData?.length > 0
              ? visibleData?.map((data, index) => (
                  <button
                    key={index}
                    className="py-2 px-3 border-2 border-[#4d718768] bg-[#213743] rounded-full"
                  >
                    <div className="flex items-center">
                      <BsIncognito />
                      <p className="text-[#b1bad3] text-xs">Hidden</p>
                      <RiMoneyRupeeCircleFill color="yellow" size={20} />
                      <p className="text-green-500">{data?.amount}</p>
                    </div>
                  </button>
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrashGameContent;
