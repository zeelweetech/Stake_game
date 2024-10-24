import React, { useEffect, useMemo, useRef, useState } from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { IoArrowUndo } from "react-icons/io5";
import { WheelSocket } from "../../../../socket";
import { RowByRisk } from "./WheelJason";
import { useDispatch, useSelector } from "react-redux";
import {
  setFinaMultiplier,
  setMustSpin,
} from "../../../../features/casino/wheelSlice";
import toast from "react-hot-toast";
// import WheelComponent from "react-wheel-of-prizes";
// import "react-wheel-of-prizes/dist/index.css";
import { Wheel } from "react-custom-roulette";

Chart.register(ArcElement, Tooltip, Legend);

function WheelGameContent() {
  const dispatch = useDispatch();
  const [finalValue, setFinalValue] = useState();
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(-90);
  const [segments, setSegments] = useState([]);
  const [segColors, setSegColors] = useState([]);
  const myChartRef = useRef(null);
  const { wheelValue, finalmultiplier, mustSpin } = useSelector(
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
  // console.log("rotationValues", rotationValues);

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
      // datalabels: {
      //   color: "#0d0c0c",
      //   formatter: (_, context) => context.chart.data.labels[context.dataIndex],
      //   font: { size: 24 },
      // },
    },
    rotation: rotation,
  };
  useEffect(() => {
    // Reset rotation to -90 degrees when component mounts or page refreshes
    setRotation(-90);
  }, []);

  // Spinner count
  let count = 0;
  let resultValue = 101;

  useEffect(() => {
    if (finalmultiplier?.multiplier) {
      setIsSpinning(true);
      setFinalValue("Good Luck!");
      let randomDegree = rotationValues?.map((item) => {
        return item?.xvalue === finalmultiplier?.multiplier;
      })?.minDegree;
      // console.log("randomDegree", randomDegree);

      const rotationInterval = setInterval(() => {
        if (!myChartRef.current) return;
        const chart = myChartRef.current;

        // Spin logic
        chart.options.rotation = chart.options.rotation + resultValue;
        chart.update();
        // console.log("rotation**", chart.options.rotation);

        if (chart.options.rotation >= 360) {
          count += 1;
          resultValue -= 5;
          chart.options.rotation = 0;
        } else if (count > 15 && chart.options.rotation === randomDegree) {
          valueGenerator(randomDegree);
          // setRotation(randomDegree);
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

  useEffect(() => {
    const segments = rotationValues?.map((item) => {
      return item?.xvalue?.toString();
    });
    setSegments(segments);
    const segColors = rotationValues?.map((item) => {
      return item?.backgroundColor;
    });
    setSegColors(segColors);
  }, [rotationValues]);
  // console.log(
  //   "segments",
  //   segments,
  //   segColors,
  //   finalmultiplier?.multiplier?.toString()
  // );
  const onFinished = () => {};
  // const WheelCom = useMemo(() => {
  //   return (
  //     <WheelComponent
  //       segments={segments}
  //       segColors={segColors}
  //       winningSegment={finalmultiplier?.multiplier?.toString() || "0"}
  //       onFinished={(winner) => onFinished(winner)}
  //       primaryColor="black"
  //       contrastColor="white"
  //       buttonText="Spin"
  //       isOnlyOnce={true}
  //     />
  //   );
  // }, [segments, segColors, finalmultiplier]);
  // const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  useEffect(() => {
    if (finalmultiplier?.multiplier) {
      if (!mustSpin) {
        setPrizeNumber(finalmultiplier?.multiplier);
        dispatch(setMustSpin(true)); // me
      }
    }
  }, [finalmultiplier?.multiplier]);
  // console.log("prizeNumberprizeNumber", mustSpin, prizeNumber);

  const datas = [{ option: "0" }, { option: "1" }, { option: "2" }];
  useEffect(() => {
    const segments = rotationValues?.map((item) => {
      return { option: item?.xvalue?.toString() };
    });
    setSegments(segments);
    const segColors = rotationValues?.map((item) => {
      return item?.backgroundColor;
    });
    setSegColors(segColors);
  }, [rotationValues]);
  // console.log("fdfdfdfdfdf", segments);

  return (
    <div className="bg-[#0f212e] flex flex-col justify-center items-center h-full xl:w-[52rem] lg:w-[36.8rem]">
      <div className="p-10 relative">
        <div className="relative">
          {/* <Doughnut
            data={data}
            options={options}
            ref={myChartRef}
            className="w-[30rem] h-[30rem]"
          /> */}
          {/* {WheelCom} */}
          {/* <WheelComponent
        segments={segments}
        segColors={segColors}
        winningSegment={finalmultiplier?.multiplier?.toString() || "0"}
        onFinished={(winner) => onFinished(winner)}
        primaryColor="black"
        contrastColor="white"
        buttonText="Spin"
        isOnlyOnce={true}
      /> */}
          <>
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={3}
              data={segments.length > 0 ? segments : datas}
              onStopSpinning={() => {
                dispatch(setMustSpin(false));
              }}
              backgroundColors={segColors}
              textColors={["#ffffff"]}
            />
            {/* <button onClick={handleSpinClick}>SPIN</button> */}
          </>
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0f212e] text-white font-semibold text-xl uppercase w-32 h-32 border-2 border-[#2f4553] flex items-center justify-center">
            {isSpinning ? "Spinning..." : finalmultiplier?.multiplier || "SPIN"}
          </div> */}
          {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[30px] border-b-[#ff4757] rotate-180"></div>
          </div> */}
        </div>
        <div className="text-center mt-4 text-lg text-white">
          <p>{finalValue}</p>
        </div>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <button className="bg-[#2c3e50] text-white px-4 py-2 rounded">
          0.00x
        </button>
        <button className="bg-[#27ae60] text-white px-4 py-2 rounded">
          1.50x
        </button>
        <button className="bg-[#bdc3c7] text-black px-4 py-2 rounded">
          1.80x
        </button>
        <button className="bg-[#f1c40f] text-black px-4 py-2 rounded">
          2.00x
        </button>
        <button className="bg-[#8e44ad] text-white px-4 py-2 rounded">
          3.00x
        </button>
      </div>
    </div>
  );
}

export default WheelGameContent;
