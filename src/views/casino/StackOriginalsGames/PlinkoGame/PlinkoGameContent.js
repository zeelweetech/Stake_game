import React, { useEffect, useRef } from "react";
import Matter, { Engine, Render, Runner, Bodies, Composite } from "matter-js";
import { useSelector } from "react-redux";

function PlinkoGameContent() {
  const sceneRef = useRef(null);
  const values = useSelector((state) => state.plinkoGame.values);

  useEffect(() => {
    // Create an engine
    const engine = Engine.create();

    // Create a renderer
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
    const pinLines = values?.rows;
    const pinSize = 4;
    const pinGap = 30;
    const ballSize = 8;
    const ballElastity = 0.75;

    // Create pins
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
        console.log("pin", pin);

        pins.push(pin);
      }
    }
    console.log("pins", pins);

    Composite.add(engine.world, pins);

    // Create the initial ball
    const ball = Bodies.circle(worldWidth / 2, 0, ballSize, {
      restitution: ballElastity,
      render: {
        fillStyle: "red",
      },
    });
    Composite.add(engine.world, [ball]);
    console.log("ball", ball);

    // Run the renderer
    Render.run(render);

    // Create and run the runner
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

  return (
    <div className="w-full h-full flex flex-col justify-center select-none relative bg-[#0f212e] rounded-tr-lg">
      <div
        className="flex flex-col items-center justify-between flex-grow w-full item-center mt-10 relative"
        ref={sceneRef}
      ></div>
    </div>
  );
}

export default PlinkoGameContent;
