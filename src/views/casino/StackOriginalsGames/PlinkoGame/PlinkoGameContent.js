import React, { useEffect, useRef } from "react";
import Matter, { Engine, Render, Runner, Bodies, Composite } from "matter-js";
import { useSelector } from "react-redux";

function PlinkoGameContent() {
  const sceneRef = useRef(null);
  const values = useSelector((state) => state.plinkoGame.values);

  const rowXButton = {
    8: [
      { xValue: "0.2x" },
      { xValue: "0.3x" },
      { xValue: "1.5x" },
      { xValue: "4x" },
      { xValue: "29x" },
    ],
    9: [
      { xValue: "0.2x" },
      { xValue: "0.6x" },
      { xValue: "2x" },
      { xValue: "7x" },
      { xValue: "43x" },
    ],
    // Add other rows similarly
  };

  useEffect(() => {
    const engine = Engine.create();

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        wireframes: false,
        background: "#0f212e",
      },
    });

    const worldWidth = 800;
    const startPins = 3;
    const pinLines = values?.rows || 8;
    const pinSize = 4;
    const pinGap = 30;
    const ballSize = 8;
    const ballElastity = 0.75;

    const pins = [];
    for (let l = 0; l < pinLines; l++) {
      const linePins = startPins + l;
      const lineWidth = linePins * pinGap;
      for (let i = 0; i < linePins; i++) {
        const pin = Bodies.circle(
          worldWidth / 2 - lineWidth / 2 + i * pinGap,
          100 + l * pinGap,
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

    Composite.add(engine.world, pins);

    const ball = Bodies.circle(worldWidth / 2, 0, ballSize, {
      restitution: ballElastity,
      render: {
        fillStyle: "red",
      },
    });
    Composite.add(engine.world, [ball]);

    Render.run(render);

    const runner = Runner.create();
    Runner.run(runner, engine);

    return () => {
      Render.stop(render);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, [values]);

  const buttons = rowXButton[values.rows] || [];

  return (
    <div className="w-full h-full flex flex-col justify-center select-none relative bg-[#0f212e] rounded-tr-lg">
      <div
        className="flex flex-col items-center justify-between flex-grow w-full item-center mt-10 relative"
        ref={sceneRef}
      ></div>
      <div className="flex flex-wrap mt-4">
        {buttons.map((item, index) => (
          <button key={index} className="bg-gray-700 text-white px-4 py-2 m-1 rounded">
            {item.xValue}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PlinkoGameContent;
