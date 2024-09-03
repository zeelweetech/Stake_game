import React, { useEffect, useRef } from "react";
import Matter, { Engine, Render, Runner, Bodies, Composite } from "matter-js";
import { useSelector } from "react-redux";
import { rowXButton } from "./RowXButton";

function PlinkoGameContent() {
  const sceneRef = useRef(null);
  const values = useSelector((state) => state.plinkoGame.values);

  useEffect(() => {
    const engine = Engine?.create();

    const render = Render?.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        wireframes: false,
        background: "#0f212e",
      },
    });

    const worldWidth = 860;
    const startPins = 3;
    const pinLines = values?.rows || 8;
    const maxRenderHeight = 600;
    const margin = 50;
    const availableHeight = maxRenderHeight - margin;
    const pinGap = availableHeight / pinLines;
    const pinSize = pinGap / 8;
    const ballSize = pinSize * 2;
    const ballElastity = 0.75;

    const pins = [];
    for (let l = 0; l < pinLines; l++) {
      const linePins = startPins + l;
      const lineWidth = linePins * pinGap;
      for (let i = 0; i < linePins; i++) {
        const pin = Bodies?.circle(
          worldWidth / 2 - lineWidth / 2 + i * pinGap,
          margin / 2 + l * pinGap, // starting y-position with margin
          pinSize,
          {
            isStatic: true,
            render: {
              fillStyle: "white",
            },
          }
        );
        pins.push(pin);
      }
    }

    Composite?.add(engine.world, pins);

    const ball = Bodies?.circle(worldWidth / 2, 0, ballSize, {
      restitution: ballElastity,
      render: {
        fillStyle: "red",
      },
    });
    Composite?.add(engine.world, [ball]);

    Render?.run(render);

    const runner = Runner?.create();
    Runner?.run(runner, engine);

    return () => {
      Render?.stop(render);
      Composite?.clear(engine.world, false);
      Engine?.clear(engine);
      render?.canvas.remove();
      render.textures = {};
    };
  }, [values]);

  return (
    <div className="h-full flex flex-col justify-center select-none relative bg-[#0f212e] rounded-tr-lg">
      <div
        className="flex justify-center items-center mt-4"
        ref={sceneRef}
      ></div>
      <div className="flex justify-center -mt-8">
        {rowXButton.map((item) => (
          <div
            className={`${
              values.rows === "11"
                ? "mr-[0rem]"
                : values.rows === "12"
                ? "ml-[0.67rem]"
                : values.rows === "13"
                ? "ml-[0.3rem]"
                : values.rows === "14"
                ? "ml-[0.22rem]"
                : values.rows === "15"
                ? "ml-[0.18rem]"
                : "ml-[0.15rem]"
            } `}
          >
            {values.rows === "8"
              ? item.rowEight?.map((data) => (
                  <button
                    className="text-black text-xs font-medium ml-1.5 rounded w-[4.1rem] py-1.5 shadow-lg"
                    style={{
                      backgroundColor: data.bgColor,
                      borderBottomColor: data.animatBgColor || "gray",
                      borderBottomWidth: "4px",
                      borderStyle: "solid",
                    }}
                  >
                    {data.xValue}
                  </button>
                ))
              : values.rows === "9"
              ? item.rowNine?.map((data) => (
                  <button
                    className="text-black text-xs font-medium ml-1.5 rounded w-14 py-1.5 shadow-lg"
                    style={{
                      backgroundColor: data.bgColor,
                      borderBottomColor: data.animatBgColor || "gray",
                      borderBottomWidth: "4px",
                      borderStyle: "solid",
                    }}
                  >
                    {data.xValue}
                  </button>
                ))
              : values.rows === "10"
              ? item.rowTen?.map((data) => (
                  <button
                    className="text-black text-xs font-medium ml-1.5 rounded w-[3.1rem] py-1.5 shadow-lg"
                    style={{
                      backgroundColor: data.bgColor,
                      borderBottomColor: data.animatBgColor || "gray",
                      borderBottomWidth: "4px",
                      borderStyle: "solid",
                    }}
                  >
                    {data.xValue}
                  </button>
                ))
              : values.rows === "11"
              ? item.rowEleven?.map((data) => (
                  <button
                    className="text-black text-xs font-medium ml-1.5 rounded w-[2.79rem] py-1.5 shadow-lg"
                    style={{
                      backgroundColor: data.bgColor,
                      borderBottomColor: data.animatBgColor || "gray",
                      borderBottomWidth: "4px",
                      borderStyle: "solid",
                    }}
                  >
                    {data.xValue}
                  </button>
                ))
              : values.rows === "12"
              ? item.rowTwelve?.map((data) => (
                  <button
                    className="text-black text-xs font-medium ml-1.5 rounded w-[2.55rem] py-1.5 shadow-lg"
                    style={{
                      backgroundColor: data.bgColor,
                      borderBottomColor: data.animatBgColor || "gray",
                      borderBottomWidth: "4px",
                      borderStyle: "solid",
                    }}
                  >
                    {data.xValue}
                  </button>
                ))
              : values.rows === "13"
              ? item.rowThirteen?.map((data) => (
                  <button
                    className="text-black text-xs font-medium ml-1.5 rounded w-[2.3rem] py-1.5 shadow-lg"
                    style={{
                      backgroundColor: data.bgColor,
                      borderBottomColor: data.animatBgColor || "gray",
                      borderBottomWidth: "4px",
                      borderStyle: "solid",
                    }}
                  >
                    {data.xValue}
                  </button>
                ))
              : values.rows === "14"
              ? item.rowFourteen?.map((data) => (
                  <button
                    className="text-black text-xs font-medium ml-1.5 rounded w-[2.1rem] py-1.5 shadow-lg"
                    style={{
                      backgroundColor: data.bgColor,
                      borderBottomColor: data.animatBgColor || "gray",
                      borderBottomWidth: "4px",
                      borderStyle: "solid",
                    }}
                  >
                    {data.xValue}
                  </button>
                ))
              : values.rows === "15"
              ? item.rowFifteen?.map((data) => (
                  <button
                    className="text-black text-xs font-medium ml-1.5 rounded w-[1.94rem] py-1.5 shadow-lg"
                    style={{
                      backgroundColor: data.bgColor,
                      borderBottomColor: data.animatBgColor || "gray",
                      borderBottomWidth: "4px",
                      borderStyle: "solid",
                    }}
                  >
                    {data.xValue}
                  </button>
                ))
              : item.rowSixteen?.map((data) => (
                  <button
                    className="text-black text-xs font-medium ml-1.5 rounded w-[1.8rem] py-1.5 shadow-lg"
                    style={{
                      backgroundColor: data.bgColor,
                      borderBottomColor: data.animatBgColor || "gray",
                      borderBottomWidth: "4px",
                      borderStyle: "solid",
                    }}
                  >
                    {data.xValue}
                  </button>
                ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlinkoGameContent;
