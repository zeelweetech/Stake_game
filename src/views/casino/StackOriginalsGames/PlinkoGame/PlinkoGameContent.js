import React, { useEffect, useRef } from "react";
import Matter, { Engine, Render, Runner, Bodies, Composite } from "matter-js";
import { useSelector } from "react-redux";
import { rowXButton } from "./RowXButton";

function PlinkoGameContent() {
  const sceneRef = useRef(null);
  const values = useSelector((state) => state.plinkoGame.values);

  useEffect(() => {
    const engine = Engine?.create();

    const { width, height } = sceneRef.current.getBoundingClientRect();
    const render = Render?.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: "#0f212e",
        // Padding: '0px 10px'
      },
    });

    const worldWidth = width * 1.1;
    const startPins = 3;
    const pinLines = values?.rows || 8;
    const maxRenderHeight = height;
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
          margin / 2 + l * pinGap,
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
    <div className="h-full flex flex-col justify-center select-none relative bg-[#0f212e] rounded-tr-lg xl:w-[52rem] lg:w-[39.5rem]">
      <div
        className="flex justify-center items-center mt-4 w-full h-full max-w-[800px] max-h-[600px] overflow-hidden"
        ref={sceneRef}
      ></div>
      <div className="flex justify-center -mt-8">
        {rowXButton?.map((item) => (
          <div>
            {values.risk === "Low"
              ? item.Low?.map((data) => (
                  <div
                    className={`${
                      values.rows === "8"
                        ? "xl:mr-[1.5rem] "
                        : values.rows === "9"
                        ? "xl:mr-5"
                        : values.rows === "10"
                        ? "xl:mr-3"
                        : values.rows === "11"
                        ? "xl:mr-[0.22rem] lg:-mr-[0.1rem]"
                        : values.rows === "12"
                        ? "xl:ml-[0.1rem] lg:ml-[0.4rem]"
                        : values.rows === "13"
                        ? "xl:ml-[0.1rem] lg:ml-[0.6rem]"
                        : values.rows === "14"
                        ? "xl:ml-[1px] lg:ml-[1rem]"
                        : values.rows === "15"
                        ? "xl:ml-[6px] lg:ml-[1.1rem]"
                        : "xl:ml-[6px] lg:ml-6"
                    } `}
                  >
                    {values.rows === "8"
                      ? data?.rowEight?.map((data) => (
                          <button
                            className="text-black text-xs font-medium ml-1.5 rounded w-[4rem] py-1.5 shadow-lg"
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
                      ? data.rowNine?.map((data) => (
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
                      ? data.rowTen?.map((data) => (
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
                      ? data.rowEleven?.map((data) => (
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
                      ? data.rowTwelve?.map((data) => (
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
                      ? data.rowThirteen?.map((data) => (
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
                      ? data.rowFourteen?.map((data) => (
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
                      ? data.rowFifteen?.map((data) => (
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
                      : data.rowSixteen?.map((data) => (
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
                ))
              : values.risk === "Medium"
              ? item.Medium?.map((data) => (
                  <div
                    className={`${
                      values.rows === "8"
                        ? "xl:mr-[1.5rem] "
                        : values.rows === "9"
                        ? "xl:mr-5"
                        : values.rows === "10"
                        ? "xl:mr-3"
                        : values.rows === "11"
                        ? "xl:mr-[0.22rem] lg:-mr-[0.1rem]"
                        : values.rows === "12"
                        ? "xl:ml-[0.1rem] lg:ml-[0.4rem]"
                        : values.rows === "13"
                        ? "xl:ml-[0.1rem] lg:ml-[0.6rem]"
                        : values.rows === "14"
                        ? "xl:ml-[1px] lg:ml-[1rem]"
                        : values.rows === "15"
                        ? "xl:ml-[6px] lg:ml-[1.1rem]"
                        : "xl:ml-[6px] lg:ml-6"
                    } `}
                  >
                    {values.rows === "8"
                      ? data?.rowEight?.map((data) => (
                          <button
                            className="text-black text-xs font-medium ml-1.5 rounded w-[4rem] py-1.5 shadow-lg"
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
                      ? data.rowNine?.map((data) => (
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
                      ? data.rowTen?.map((data) => (
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
                      ? data.rowEleven?.map((data) => (
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
                      ? data.rowTwelve?.map((data) => (
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
                      ? data.rowThirteen?.map((data) => (
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
                      ? data.rowFourteen?.map((data) => (
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
                      ? data.rowFifteen?.map((data) => (
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
                      : data.rowSixteen?.map((data) => (
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
                ))
              : item.High?.map((data) => (
                  <div
                    className={`${
                      values.rows === "8"
                        ? "xl:mr-[1.5rem] "
                        : values.rows === "9"
                        ? "xl:mr-5"
                        : values.rows === "10"
                        ? "xl:mr-3"
                        : values.rows === "11"
                        ? "xl:mr-[0.22rem] lg:-mr-[0.1rem]"
                        : values.rows === "12"
                        ? "xl:ml-[0.1rem] lg:ml-[0.4rem]"
                        : values.rows === "13"
                        ? "xl:ml-[0.1rem] lg:ml-[0.6rem]"
                        : values.rows === "14"
                        ? "xl:ml-[1px] lg:ml-[1rem]"
                        : values.rows === "15"
                        ? "xl:ml-[6px] lg:ml-[1.1rem]"
                        : "xl:ml-[6px] lg:ml-6"
                    } `}
                  >
                    {values.rows === "8"
                      ? data?.rowEight?.map((data) => (
                          <button
                            className="text-black text-xs font-medium ml-1.5 rounded w-[4rem] py-1.5 shadow-lg"
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
                      ? data.rowNine?.map((data) => (
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
                      ? data.rowTen?.map((data) => (
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
                      ? data.rowEleven?.map((data) => (
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
                      ? data.rowTwelve?.map((data) => (
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
                      ? data.rowThirteen?.map((data) => (
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
                      ? data.rowFourteen?.map((data) => (
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
                      ? data.rowFifteen?.map((data) => (
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
                      : data.rowSixteen?.map((data) => (
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
        ))}
      </div>
    </div>
  );
}

export default PlinkoGameContent;
