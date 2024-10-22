import React, { useEffect, useRef, useState } from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { IoArrowUndo } from "react-icons/io5";
import { WheelSocket } from "../../../../socket";
import { RowByRisk } from "./WheelJason";
import { useDispatch, useSelector } from "react-redux";
import { setFinaMultiplier } from "../../../../features/casino/wheelSlice";
import toast from "react-hot-toast";
Chart.register(ArcElement, Tooltip, Legend);

function WheelGameContent() {
  const dispatch = useDispatch();
  const [finalValue, setFinalValue] = useState();
  const [isSpinning, setIsSpinning] = useState(false);
  const myChartRef = useRef(null);
  const { wheelValue, finalmultiplier } = useSelector(
    (state) => state.wheelGame
  );

  WheelSocket.on("manualBetResult", (data) => {
    dispatch(setFinaMultiplier(data));
  });
  console.log("finalmultiplier", finalmultiplier?.multiplier);

  WheelSocket.on("autoBetResult", (data) => {
    console.log("auto bet data", data);
    dispatch(setFinaMultiplier(data));
  });

  WheelSocket.on("Insufficientfund", (data) => {
    toast.error(data?.message);
  });

  // Object that stores values of minimum and maximum angle for a value
  const selectionByRisk = RowByRisk[wheelValue?.risk];
  const rotationValues =
    selectionByRisk[`segment${parseInt(wheelValue?.segments, 10)}`];
  console.log("rotationValues", rotationValues);

  // Size of each piece
  const data = {
    labels: rotationValues?.map((item) => {
      return item?.xvalue;
    }),

    datasets: [
      {
        data: rotationValues?.map((item, index, array) => {
          return array.length / 360;
        }),

        backgroundColor: rotationValues?.map((item) => {
          return item?.backgroundColor;
        }),
      },
    ],
  };

  console.log("data****", data);

  const options = {
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      tooltip: false,
      legend: { display: false },
      datalabels: {
        color: "#0d0c0c",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 24 },
      },
    },
  };

  // Spinner count
  let count = 0;
  let resultValue = 101;

  // const getTargetAngle = (multiplier) => {
  //   // Find the segment corresponding to the multiplier
  //   const segmentIndex = rotationValues.findIndex(
  //     (item) => item.xvalue === multiplier
  //   );
  //   if (segmentIndex !== -1) {
  //     // Calculate the angle based on the segment index
  //     const totalSegments = rotationValues.length;
  //     const anglePerSegment = 360 / totalSegments;
  //     const targetAngle = segmentIndex * anglePerSegment;
  //     return targetAngle;
  //   }
  //   return null; // Return null if not found
  // };

  // Spin logic
  // useEffect(() => {
  //   if (finalmultiplier?.multiplier) {
  //     setIsSpinning(true);
  //     setFinalValue("Good Luck!");
  //     let spinRounds = 3; // Number of full spins
  //     let randomDegree = Math.floor(Math.random() * 360); // Random degree for spin
  //     const targetAngle = getTargetAngle(finalmultiplier?.multiplier); // Get target angle

  //     if (targetAngle !== null) {
  //       const rotationInterval = setInterval(() => {
  //         if (!myChartRef.current) return;
  //         const chart = myChartRef.current;

  //         // Spin logic
  //         chart.options.rotation = (chart.options.rotation + resultValue) % 360; // Ensure rotation wraps around
  //         chart.update();
  //         console.log("rotation**", chart.options.rotation);

  //         // Stop condition
  //         if (
  //           spinRounds > 0 ||
  //           (chart.options.rotation >= targetAngle &&
  //             chart.options.rotation < targetAngle + 10)
  //         ) {
  //           if (chart.options.rotation >= 360) {
  //             spinRounds -= 1; // Reduce the number of spin rounds
  //             chart.options.rotation = 0; // Reset to 0
  //           }

  //           // If we reach the target angle after some rounds
  //           if (
  //             chart.options.rotation >= targetAngle &&
  //             chart.options.rotation < targetAngle + 10
  //           ) {
  //             valueGenerator(chart.options.rotation);
  //             clearInterval(rotationInterval);
  //             setIsSpinning(false);
  //             // Optionally dispatch something here if needed
  //           }
  //         }
  //       }, 10);
  //     }
  //   }
  // }, [finalmultiplier?.multiplier]);

  useEffect(() => {
    if (finalmultiplier?.multiplier) {
      setIsSpinning(true);
      setFinalValue("Good Luck!");
      let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
      const rotationInterval = setInterval(() => {
        if (!myChartRef.current) return;
        const chart = myChartRef.current;

        // Spin logic
        chart.options.rotation = chart.options.rotation + resultValue;
        chart.update();
        console.log("rotation**", chart.options.rotation);

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
          // dispatch(setFinaMultiplier());
        }
      }, 10);
    }
  }, [finalmultiplier?.multiplier]);

  const valueGenerator = (angleValue) => {
    for (let i of rotationValues) {
      if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
        setFinalValue(`Value: ${i.xvalue}`);
        break;
      }
    }
  };

  return (
    <div className="bg-[#0f212e] flex flex-col justify-center items-center h-full xl:w-[52rem] lg:w-[36.8rem]">
      <div className="p-10 relative">
        <div className="relative">
          <Doughnut
            data={data}
            options={options}
            ref={myChartRef}
            className="w-[30rem] h-[30rem]"
          />
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0f212e] text-white font-semibold text-xl uppercase w-32 h-32 border-2 border-[#2f4553]"
            // onClick={handleSpinClick}
            disabled={isSpinning}
          >
            {isSpinning ? "" : `${finalmultiplier?.multiplier || 0}x`}
          </button>
          <IoArrowUndo
            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-3xl ml-6 text-black"
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
