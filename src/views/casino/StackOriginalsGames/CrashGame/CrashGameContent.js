import React, { useEffect, useRef, useState } from "react";
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
  Chart,
  LineController,
} from "chart.js";

import { IoIosTrendingUp } from "react-icons/io";
import { BsIncognito } from "react-icons/bs";
import {
  RiMoneyRupeeCircleFill,
} from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { CrashSocket } from "../../../../socket";
import {
  setCrashStatus,
  setMultiplier,
  setXValue,
} from "../../../../features/casino/crashSlice";
import { getRandomFiveData } from "../../../../services/CasinoServices";
import { ResponsiveContainer } from "recharts";
import { setWallet } from "../../../../features/auth/authSlice";
import { decodedToken } from "../../../../resources/utility";
import { useParams } from "react-router-dom";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  LineController
);

function CrashGameContent() {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const [data, setData] = useState([{ time: 0, value: 1 }]);
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const { xValue, bettingStatus, multiplier, combinedData, crashStatus } =
    useSelector((state) => state.crashGame);
  const [visibleData, setVisibleData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [topXData, setTopXData] = useState();
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [chartRefData, setChartRefData] = useState();
  const decoded = decodedToken();

  // CrashSocket.on("multiplierUpdate", (data) => {
  //   dispatch(setMultiplier(data?.multiplier));
  // });

  useEffect(() => {
    CrashSocket.emit("joinGame", {
      userId: decoded?.userId,
      gameId: id,
    });
  }, [])

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

  CrashSocket.on("endRound", (data) => {
    dispatch(setXValue(parseFloat(data?.crashPoint)));
  });

  // *****************************************
  CrashSocket.on("walletBalance", (data) => {
    dispatch(setWallet(data?.walletBalance));
  });

  useEffect(() => {
    dispatch(setMultiplier(1));
    setChartData({ labels: [], datasets: [{ data: [] }] });
    chartRefData?.update();
  }, [bettingStatus === true]);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy existing chart instance if it exists to avoid conflicts
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create gradient fill for the chart background
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(1, "rgba(255, 165, 0, 0.5)");
    gradient.addColorStop(0, "rgba(255, 165, 0, 0)");

    // const gray = ctx.createLinearGradient(0.1, 10, 0.4, 400);
    // gray.addColorStop(1, "#4d718768");
    // gray.addColorStop(0, "#4d718769");

    const data = {
      labels: [1],
      datasets: [
        {
          label: "Smooth Curved Line",
          data: [1],
          borderColor: "rgba(255, 255, 255, 1)",
          borderWidth: 6,
          fill: true,
          backgroundColor: gradient,
          // backgroundColor: multiplier === xValue ? gray : gradient,
          tension: 0.5,
          pointRadius: 0,
          pointBackgroundColor: "rgba(255, 255, 255, 1)",
        },
      ],
    };

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: { display: true, color: "#fff" },
            ticks: { color: "#fff" },
            grid: { display: false },
            min: 2,
          },
          y: {
            title: { display: true, color: "#fff" },
            ticks: { color: "#fff" },
            grid: { display: false },
            min: 1,
          },
        },
        animation: { duration: 0 },
        plugins: { legend: { display: false } },
      },
    });

    // Listen for multiplier updates from the server
    CrashSocket.on("multiplierUpdate", (data) => {
      const xValue = chartInstance.current.data.labels.length + 1;
      const newMultiplier = parseFloat(data.multiplier);

      if (!isNaN(newMultiplier)) {
        const lastMultiplier =
          chartInstance.current.data.datasets[0].data[
          chartInstance.current.data.datasets[0].data.length - 1
          ];
        const smoothMultiplier = lastMultiplier * 0.9 + newMultiplier * 0.1;

        let tempDataSet = {
          ...chartInstance.current.data.datasets[0],
          data: [
            ...chartInstance.current.data.datasets[0].data,
            smoothMultiplier,
          ],
        };

        let tempData = {
          ...chartInstance.current.data,
          datasets: [tempDataSet],
        };

        chartInstance.current.data = tempData;
        chartInstance.current.data.labels.push(xValue);
        chartInstance.current.options.scales.y.max = Math.max(
          ...data.multipliers
        );

        chartInstance.current.data.datasets[0].pointRadius =
          chartInstance.current.data.datasets[0].data.map((val, index) =>
            index === chartInstance.current.data.datasets[0].data.length - 1
              ? 6
              : 0
          );

        dispatch(setMultiplier(newMultiplier));
        chartInstance.current.update("silent");
      } else {
        console.error("Invalid multiplier:", data);
      }
    });
    setChartRefData(chartInstance.current);
    CrashSocket.on("gameEnded", () => {
      chartInstance.current.data.labels = [1];
      chartInstance.current.data.datasets[0].data = [1];
      // if (bettingStatus === true) {
      //   chartInstance.current.update();
      // }
      // dispatch(setMultiplier(1));
      dispatch(setCrashStatus(data));
    });

    // Cleanup: Destroy the chart and CrashSocket listeners on component unmount
    return () => {
      chartInstance.current.destroy();
      CrashSocket.off("multiplierUpdate");
      CrashSocket.off("gameEnded");
    };
  }, []);

  // Update chart data on multiplier change
  // useEffect(() => {
  //   if (!bettingStatus) {
  //     setChartData((prevData) => ({
  //       labels: [...prevData.labels, prevData.labels.length + 1],
  //       datasets: [
  //         {
  //           data: [...prevData.datasets[0].data, multiplier],
  //           borderColor: "rgba(255, 255, 255, 1)",
  //           backgroundColor: (ctx) => {
  //             const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 400);
  //             gradient.addColorStop(0, "rgba(255, 165, 0, 0.5)"); // Bright orange
  //             gradient.addColorStop(1, "rgba(255, 165, 0, 0)"); // Transparent
  //             return gradient;
  //           },
  //           // chartData.datasets[0]?.data[
  //           //   chartData.datasets[0].data.length - 1
  //           // ] === xValue
  //           //   ? "#4d718768"
  //           //   : "#ffa500",
  //           fill: true,
  //           tension: 0.6,
  //           // lineTension: 0.4,
  //           borderWidth: 6,
  //           pointRadius: 0,
  //         },
  //       ],
  //     }));
  //   }
  // }, [multiplier]);

  // const getLastValueColor = () => {
  //   const lastValue =
  //     chartData.datasets[0]?.data[chartData.datasets[0].data.length - 1];
  //   return lastValue === xValue ? "text-red-500" : "text-white";
  // };

  // Chart.js options
  // const chartOptions = {
  //   scales: {
  //     x: {
  //       ticks: { color: "white", font: { size: 18 } },
  //       grid: { display: false },
  //       min: 1,
  //     },
  //     y: {
  //       ticks: { color: "white", font: { size: 18 } },
  //       min: 1,
  //       grid: { display: false },
  //     },
  //   },
  //   plugins: { legend: { display: false } },
  //   maintainAspectRatio: false,
  //   responsive: true,
  //   animation: {
  //     duration: 0, // Disable default animation for immediate updates
  //   },
  // };

  return (
    <div className="xl:max-w-[52rem] md:w-full md:h-full flex flex-col justify-center select-none relative bg-[#0f212e] rounded-tr-lg ">
      <div className="mt-4 flex justify-end space-x-2 text-black text-xs font-semibold pr-3">
        {topXData?.length > 0 &&
          [...topXData].reverse()?.map((item, index) => {
            return (
              <div key={index}>
                <button
                  className={`p-2.5 ${item?.crashPoint > 3 ? "bg-[#1fff20]" : "bg-white"
                    } rounded-full text-xs`}
                >
                  {`${item?.crashPoint}`}
                </button>
              </div>
            );
          })}
        <button className="px-2.5 py-2.5 text-lg bg-[#4d718768] font-semibold hover:bg-[#9abfd668] rounded-full">
          <IoIosTrendingUp color="white" />
        </button>
      </div>
      <div className="flex flex-col items-center justify-between flex-grow w-full xl:max-w-[55rem] lg:max-w-[41rem] md:max-w-[25rem] item-center mt-10 relative">
        <div
          className="xl:pl-4 lg:pl-2 xl:pr-8 lg:pr-6 xl:h-[35rem] lg:h-[34rem] md:h-[20rem] sm:max-w-full max-w-[95vw] sm:h-[20rem]"
        >
          <canvas ref={chartRef} className=" h-[20rem] xl:w-full lg:w-full md:w-full w-[100rem]"></canvas>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col items-center w-full px-4 text-white font-bold text-center">
          <div className="flex-grow flex items-center justify-center">
            <div>
              <p
                className={`text-4xl sm:text-5xl ${multiplier === xValue ? "text-red-500" : "text-white"
                  }`}
              >
                {multiplier}x
              </p>
              {multiplier === xValue && (
                <button className="bg-[#4d718768] text-lg sm:text-xl shadow-lg xl:px-8 lg:px-8 md:px-8 px-8 pt-2 pb-3 mt-3 rounded-md">
                  Crashed
                </button>
              )}
              {bettingStatus && (
                <button className="bg-[#4d718768] text-lg sm:text-2xl xl:px-6 px-4 pt-3 pb-4 mt-3 rounded-md progress-bar">
                  starting in
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-col items-end space-y-1.5 xl:ml-[33rem] lg:ml-[31rem] md:ml-[15rem] sm:ml-32 ml-52">
            {visibleData?.length > 0
              ? visibleData?.map((data, index) => (
                <button
                  key={index}
                  className="py-1 px-1 border-1 border-[#4d718768] bg-[#213743] rounded-full"
                >
                  <div className="flex items-center space-x-1">
                    <BsIncognito />
                    <p className="text-[#b1bad3] text-xs">Hidden</p> ₹
                    {/* <RiMoneyRupeeCircleFill color="yellow" size={10} /> */}
                    <p className="text-[#00F701]">{data?.amount}</p>
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
