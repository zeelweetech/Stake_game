import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Bodies,
  Body,
  Composite,
  Engine,
  Events,
  IEventCollision,
  Render,
  Runner,
  World,
} from "matter-js";
import { useDispatch, useSelector } from "react-redux";
import { HighRow, LowRow, MediumRow, rowXButton } from "./RowXButton";
import { config } from "./config";
import { getMultiplierByLinesQnt } from "./config/multipliers";
import { getRandomNumber } from "../../../../resources/utility";
import { PlinkoSocket } from "../../../../socket";
import { setFinalMultiplier } from "../../../../features/casino/plinkoSlice";
import { MultiplierValues } from "./@types";

function PlinkoGameContent() {
  const sceneRef = useRef(null);
  const dispatch = useDispatch();
  const engine = Engine.create();
  const { finalMultiplier, values } = useSelector((state) => state.plinkoGame);
  const {
    pins: pinsConfig,
    colors: colorsConfig,
    ball: ballConfig,
    engine: engineConfig,
    world: worldConfig,
  } = config;
  const worldWidth = worldConfig.width;
  const worldHeight = worldConfig.height;

  PlinkoSocket.on("plinkoBetResult", (data) => {
    dispatch(setFinalMultiplier(data?.finalMultiplier));
  });

  useEffect(() => {
    engine.gravity.y = engineConfig.engineGravity;
    const element = sceneRef.current;
    const render = Render.create({
      element: element,
      bounds: {
        max: {
          y: worldHeight,
          x: worldWidth,
        },
        min: {
          y: 0,
          x: 0,
        },
      },
      options: {
        background: colorsConfig.background,
        hasBounds: true,
        width: worldWidth,
        height: worldHeight,
        wireframes: false,
      },
      engine,
    });
    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);
    return () => {
      World.clear(engine.world, true);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, [values?.rows]);

  const pins = [];

  for (let l = 0; l < values?.rows; l++) {
    const linePins = pinsConfig.startPins + l;
    const lineWidth = linePins * pinsConfig.pinGap;
    for (let i = 0; i < linePins; i++) {
      const pinX =
        worldWidth / 2 -
        lineWidth / 2 +
        i * pinsConfig.pinGap +
        pinsConfig.pinGap / 2;

      const pinY =
        worldWidth / values?.rows + l * pinsConfig.pinGap + pinsConfig.pinGap;

      const pin = Bodies.circle(pinX, pinY, pinsConfig.pinSize, {
        label: `pin-${i}`,
        render: {
          fillStyle: "white",
        },
        isStatic: true,
      });
      pins.push(pin);
    }
  }

  const addBall = useCallback(
    (ballValue) => {
      const multiplierBody = multipliersBodies?.find((multiplier) => {
        return Number(multiplier?.label?.split("-")[1]) === ballValue;
      });
      console.log("multiplierBody", multiplierBody);

      if (!multiplierBody) {
        console.error("Multiplier body not found for");
        return;
      }

      const ballX = multiplierBody.position.x;

      // const minBallX =
      //   worldWidth / 2 - pinsConfig.pinSize * 3 + pinsConfig.pinGap;
      // const maxBallX =
      //   worldWidth / 2 -
      //   pinsConfig.pinSize * 3 -
      //   pinsConfig.pinGap +
      //   pinsConfig.pinGap / 2;

      // const ballX = getRandomNumber(minBallX, maxBallX);
      const ball = Bodies.circle(ballX, 20, ballConfig.ballSize, {
        restitution: 1,
        friction: 0.6,
        label: `ball-${ballValue}`,
        id: new Date().getTime(),
        frictionAir: 0.05,
        collisionFilter: {
          group: -1,
        },
        render: {
          fillStyle: "red",
        },
        isStatic: false,
      });
      Composite.add(engine.world, ball);
    },
    [values?.rows]
  );

  const leftWall = Bodies.rectangle(
    worldWidth / 3 - pinsConfig.pinSize * pinsConfig.pinGap - pinsConfig.pinGap,
    worldWidth / 2 - pinsConfig.pinSize,
    worldWidth * 2,
    40,
    {
      angle: 90,
      render: {
        visible: false,
      },
      isStatic: true,
    }
  );
  const rightWall = Bodies.rectangle(
    worldWidth -
      pinsConfig.pinSize * pinsConfig.pinGap -
      pinsConfig.pinGap -
      pinsConfig.pinGap / 2,
    worldWidth / 2 - pinsConfig.pinSize,
    worldWidth * 2,
    40,
    {
      angle: -90,
      render: {
        visible: false,
      },
      isStatic: true,
    }
  );
  const floor = Bodies.rectangle(0, worldWidth + 10, worldWidth * 10, 40, {
    label: "block-1",
    render: {
      visible: false,
    },
    isStatic: true,
  });

  const multipliers = getMultiplierByLinesQnt(values?.rows);

  const multipliersBodies = [];

  let lastMultiplierX =
    worldWidth / 2 - (pinsConfig.pinGap / 2) * values?.rows - pinsConfig.pinGap;

  function generateTextTexture(text) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 20; // Set canvas width
    canvas.height = 20; // Set canvas height

    ctx.fillStyle = "orange"; // Background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black"; // Text color
    ctx.font = "12px Arial"; // Font size and style
    ctx.fillText(text, 2, 10); // Text and position

    return canvas.toDataURL(); // Convert canvas to image data URL
  }

  multipliers?.forEach((multiplier) => {
    const blockSize = 20; // height and width
    const multiplierBody = Bodies.rectangle(
      lastMultiplierX + 20,
      worldWidth / values?.rows +
        values?.rows * pinsConfig.pinGap +
        pinsConfig.pinGap,
      blockSize,
      blockSize,
      {
        label: multiplier.label,
        isStatic: true,
        render: {
          // visible: false,
          fillStyle: "orange", // Color of the rectangle
          // text: {
          //   content: Number(multiplier?.label.split("-")[1]), // Set the text as the label
          //   color: "black", // Color of the text
          //   size: 10, // Size of the text
          // },
          sprite: {
            xScale: 1,
            yScale: 1,
            texture: generateTextTexture(multiplier?.label.split("-")[1]),
          },
        },
      }
    );

    lastMultiplierX += pinsConfig.pinGap;
    multipliersBodies.push(multiplierBody);
  });

  Composite.add(engine.world, [
    ...pins,
    ...multipliersBodies,
    leftWall,
    rightWall,
    floor,
  ]);

  function bet(betValue) {
    addBall(betValue);
  }

  useEffect(() => {
    if (finalMultiplier) {
      bet(finalMultiplier);
    }
  }, [finalMultiplier]);
  console.log("finalMultiplier**", finalMultiplier);

  async function onCollideWithMultiplier(ball, multiplier) {
    ball.collisionFilter.group = 2;
    World.remove(engine.world, ball);
    // removeInGameBall();
    const ballValue = ball.label.split("-")[1];
    const multiplierValue = MultiplierValues;
    // setLastMultipliers((prev) => [multiplierValue, prev[0], prev[1], prev[2]]);

    if (+ballValue <= 0) return;
  }

  async function onBodyCollision(event) {
    const pairs = event.pairs;
    for (const pair of pairs) {
      const { bodyA, bodyB } = pair;

      if (bodyB.label.includes("ball") && bodyA.label.includes("block")) {
        await onCollideWithMultiplier(bodyB, bodyA);
      }
    }
  }

  Events.on(engine, "collisionActive", onBodyCollision);

  return (
    <div
      div
      className="h-full flex flex-col justify-center select-none relative bg-[#0f212e] rounded-tr-lg xl:w-[52rem] lg:w-[39.5rem]"
    >
      <div
        className="flex justify-center items-center mt-4  overflow-hidden"
        ref={sceneRef}
      ></div>
    </div>
  );
}

export default PlinkoGameContent;

// const sceneRef = useRef(null);
// const [selectedXValue, setSelectedXValue] = useState(null);
// const values = useSelector((state) => state.plinkoGame.values);
// console.log("selectedXValue", selectedXValue);

// useEffect(() => {
//   setSelectedXValue(0.5);
// }, [values?.rows === "8"]);

// useEffect(() => {
//   const engine = Engine?.create();

//   const { width, height } = sceneRef.current.getBoundingClientRect();
//   const render = Render?.create({
//     element: sceneRef.current,
//     engine: engine,
//     options: {
//       width: width,
//       height: height,
//       wireframes: false,
//       background: "#0f212e",
//       // Padding: '0px 10px'
//     },
//   });

//   const worldWidth = width * 1.1;
//   const startPins = 3;
//   const pinLines = values?.rows || 8;
//   const maxRenderHeight = height;
//   const margin = 50;
//   const availableHeight = maxRenderHeight - margin;
//   const pinGap = availableHeight / pinLines;
//   const pinSize = pinGap / 8;
//   const ballSize = pinSize * 2;
//   const ballElastity = 0.75;
//   // engine.gravity.y = 1.0;

//   const LowData = LowRow?.map((item) => {
//     return values?.rows === "8"
//       ? item?.rowEight?.filter((roweight) => {
//           return selectedXValue === roweight?.xValue;
//         })?.[0]
//       : "";
//   })?.[0]?.xValue;

//   console.log("LowData", LowData);

//   const pins = [];
//   for (let l = 0; l < pinLines; l++) {
//     const linePins = startPins + l;
//     const lineWidth = linePins * pinGap;
//     for (let i = 0; i < linePins; i++) {
//       const pin = Bodies?.circle(
//         worldWidth / 2 - lineWidth / 2 + i * pinGap,
//         margin / 2 + l * pinGap,
//         pinSize,
//         {
//           isStatic: true,
//           render: {
//             fillStyle: "white",
//           },
//         }
//       );
//       pins.push(pin);
//     }
//   }

//   Composite?.add(engine.world, pins);

//   // Add Ball and Play Sound
//   const ball = Bodies.circle(LowData, 0, ballSize, {
//     restitution: ballElastity,
//     render: { fillStyle: "red" },
//   });

//   Composite.add(engine.world, ball);

//   // const ball = Bodies?.circle(worldWidth / 2, 0, ballSize, {
//   //   restitution: ballElastity,
//   //   render: {
//   //     fillStyle: "red",
//   //   },
//   // });
//   // Composite?.add(engine.world, [ball]);

//   Render?.run(render);

//   const runner = Runner?.create();
//   Runner?.run(runner, engine);

//   return () => {
//     Render?.stop(render);
//     Composite?.clear(engine.world, false);
//     Engine?.clear(engine);
//     render?.canvas.remove();
//     render.textures = {};
//   };
// }, [values, selectedXValue]);

// return (
//   <div className="h-full flex flex-col justify-center select-none relative bg-[#0f212e] rounded-tr-lg xl:w-[52rem] lg:w-[39.5rem]">
//     <div
//       className="flex justify-center items-center mt-4 w-full h-full max-w-[800px] max-h-[600px] overflow-hidden"
//       ref={sceneRef}
//     ></div>
//     <div className="flex justify-center -mt-8">
//       <div>
//         {values?.risk === "low"
//           ? LowRow?.map((data) => (
//               <div
//                 className={`${
//                   values?.rows === "8"
//                     ? "xl:mr-[1.5rem] "
//                     : values?.rows === "9"
//                     ? "xl:mr-5"
//                     : values?.rows === "10"
//                     ? "xl:mr-3"
//                     : values?.rows === "11"
//                     ? "xl:mr-[0.22rem] lg:-mr-[0.1rem]"
//                     : values?.rows === "12"
//                     ? "xl:ml-[0.1rem] lg:ml-[0.4rem]"
//                     : values?.rows === "13"
//                     ? "xl:ml-[0.1rem] lg:ml-[0.6rem]"
//                     : values?.rows === "14"
//                     ? "xl:ml-[1px] lg:ml-[1rem]"
//                     : values?.rows === "15"
//                     ? "xl:ml-[6px] lg:ml-[1.1rem]"
//                     : "xl:ml-[6px] lg:ml-6"
//                 } `}
//               >
//                 {values?.rows === "8"
//                   ? data?.rowEight?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-[4rem] py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {data?.xValue}x
//                       </button>
//                     ))
//                   : values?.rows === "9"
//                   ? data?.rowNine?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-14 py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {data?.xValue}x
//                       </button>
//                     ))
//                   : values?.rows === "10"
//                   ? data?.rowTen?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-[3.1rem] py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {data?.xValue}x
//                       </button>
//                     ))
//                   : values?.rows === "11"
//                   ? data?.rowEleven?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-[2.79rem] py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {data?.xValue}x
//                       </button>
//                     ))
//                   : values?.rows === "12"
//                   ? data?.rowTwelve?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-[2.55rem] py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {data?.xValue}x
//                       </button>
//                     ))
//                   : values?.rows === "13"
//                   ? data?.rowThirteen?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-[2.3rem] py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {data?.xValue}x
//                       </button>
//                     ))
//                   : values?.rows === "14"
//                   ? data?.rowFourteen?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-[2.1rem] py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {data?.xValue}x
//                       </button>
//                     ))
//                   : values?.rows === "15"
//                   ? data?.rowFifteen?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-[1.94rem] py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {data?.xValue}x
//                       </button>
//                     ))
//                   : data?.rowSixteen?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-[1.8rem] py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {data?.xValue}x
//                       </button>
//                     ))}
//               </div>
//             ))
//           : values?.risk === "medium"
//           ? MediumRow?.map((data) => (
//               <div
//                 className={`${
//                   values?.rows === "8"
//                     ? "xl:mr-[1.5rem] "
//                     : values?.rows === "9"
//                     ? "xl:mr-5"
//                     : values?.rows === "10"
//                     ? "xl:mr-3"
//                     : values?.rows === "11"
//                     ? "xl:mr-[0.22rem] lg:-mr-[0.1rem]"
//                     : values?.rows === "12"
//                     ? "xl:ml-[0.1rem] lg:ml-[0.4rem]"
//                     : values?.rows === "13"
//                     ? "xl:ml-[0.1rem] lg:ml-[0.6rem]"
//                     : values?.rows === "14"
//                     ? "xl:ml-[1px] lg:ml-[1rem]"
//                     : values?.rows === "15"
//                     ? "xl:ml-[6px] lg:ml-[1.1rem]"
//                     : "xl:ml-[6px] lg:ml-6"
//                 } `}
//               >
//                 {values?.rows === "8"
//                   ? data?.rowEight?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-[4rem] py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {console.log("data?.xValue", data?.xValue)}
//                         {data?.xValue}xx
//                       </button>
//                     ))
//                   : values?.rows === "9"
//                   ? data?.rowNine?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-14 py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {data?.xValue}x
//                       </button>
//                     ))
//                   : values?.rows === "10"
//                   ? data?.rowTen?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-[3.1rem] py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {data?.xValue}x
//                       </button>
//                     ))
//                   : values?.rows === "11"
//                   ? data?.rowEleven?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-[2.79rem] py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {data?.xValue}x
//                       </button>
//                     ))
//                   : values?.rows === "12"
//                   ? data?.rowTwelve?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-[2.55rem] py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {data?.xValue}x
//                       </button>
//                     ))
//                   : values?.rows === "13"
//                   ? data?.rowThirteen?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-[2.3rem] py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {data?.xValue}x
//                       </button>
//                     ))
//                   : values?.rows === "14"
//                   ? data?.rowFourteen?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-[2.1rem] py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {data?.xValue}x
//                       </button>
//                     ))
//                   : values?.rows === "15"
//                   ? data?.rowFifteen?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-[1.94rem] py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {data?.xValue}x
//                       </button>
//                     ))
//                   : data?.rowSixteen?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-[1.8rem] py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {data?.xValue}x
//                       </button>
//                     ))}
//               </div>
//             ))
//           : HighRow?.map((data) => (
//               <div
//                 className={`${
//                   values?.rows === "8"
//                     ? "xl:mr-[1.5rem] "
//                     : values?.rows === "9"
//                     ? "xl:mr-5"
//                     : values?.rows === "10"
//                     ? "xl:mr-3"
//                     : values?.rows === "11"
//                     ? "xl:mr-[0.22rem] lg:-mr-[0.1rem]"
//                     : values?.rows === "12"
//                     ? "xl:ml-[0.1rem] lg:ml-[0.4rem]"
//                     : values?.rows === "13"
//                     ? "xl:ml-[0.1rem] lg:ml-[0.6rem]"
//                     : values?.rows === "14"
//                     ? "xl:ml-[1px] lg:ml-[1rem]"
//                     : values?.rows === "15"
//                     ? "xl:ml-[6px] lg:ml-[1.1rem]"
//                     : "xl:ml-[6px] lg:ml-6"
//                 } `}
//               >
//                 {values?.rows === "8"
//                   ? data?.rowEight?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-[4rem] py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {data?.xValue}x
//                       </button>
//                     ))
//                   : values?.rows === "9"
//                   ? data?.rowNine?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-14 py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {data?.xValue}x
//                       </button>
//                     ))
//                   : values?.rows === "10"
//                   ? data?.rowTen?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-[3.1rem] py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {data?.xValue}x
//                       </button>
//                     ))
//                   : values?.rows === "11"
//                   ? data?.rowEleven?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-[2.79rem] py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {data?.xValue}x
//                       </button>
//                     ))
//                   : values?.rows === "12"
//                   ? data?.rowTwelve?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-[2.55rem] py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {data?.xValue}x
//                       </button>
//                     ))
//                   : values?.rows === "13"
//                   ? data?.rowThirteen?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-[2.3rem] py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {data?.xValue}x
//                       </button>
//                     ))
//                   : values?.rows === "14"
//                   ? data?.rowFourteen?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-[2.1rem] py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {data?.xValue}x
//                       </button>
//                     ))
//                   : values?.rows === "15"
//                   ? data?.rowFifteen?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-[1.94rem] py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {data?.xValue}x
//                       </button>
//                     ))
//                   : data?.rowSixteen?.map((data) => (
//                       <button
//                         className="text-black text-xs font-medium ml-1.5 rounded w-[1.8rem] py-1.5 shadow-lg"
//                         style={{
//                           backgroundColor: data?.bgColor,
//                           borderBottomColor: data?.animatBgColor || "gray",
//                           borderBottomWidth: "4px",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         {data?.xValue}x
//                       </button>
//                     ))}
//               </div>
//             ))}
//       </div>
//     </div>
//   </div>
// );
