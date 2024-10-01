import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlinkoSocket } from "../../../../socket";
import {
  setFinalMultiplier,
  setLastMultipliers,
} from "../../../../features/casino/plinkoSlice";
import BallManager from "./game/classes/BallManager";

function PlinkoGameContent() {
  const dispatch = useDispatch();
  const canvasRef = useRef();
  const [ballManager, setBallManager] = useState();
  const { finalMultiplier, values, lastMultipliers } = useSelector(
    (state) => state.plinkoGame
  );

  PlinkoSocket.on("plinkoBetResult", (data) => {
    console.log("data", data);
    dispatch(setFinalMultiplier(data));
  });

  PlinkoSocket.on("lastFourMultipliers", (data) => {
    console.log("data *9-*-*-", data);
    dispatch(setLastMultipliers(data));
  });

  useEffect(() => {
    if (ballManager) {
      ballManager.addBall(finalMultiplier?.point);
    }
  }, [finalMultiplier?.point]);

  useEffect(() => {
    if (canvasRef.current) {
      const ballManager = new BallManager(canvasRef.current, values);
      setBallManager(ballManager);
    }
  }, [canvasRef, values]);

  return (
    <div className="h-full flex justify-center items-center select-none relative bg-[#0f212e] rounded-tr-lg xl:w-[52rem] lg:w-[35rem]">
      <div className="flex justify-center items-center mt-4 overflow-hidden absolute">
        <canvas className="xl:w-[90vw] xl:h-[90vh] xl:max-w-[800px] xl:max-h-[710px] lg:w-[90vw] lg:h-[80vh] lg:max-w-[592px] lg:max-h-[710px]" ref={canvasRef} width="800" height="710"></canvas>
      </div>
      <div className="flex flex-col relative xl:left-[21rem] xl:-top-40 lg:left-56 lg:-top-44">
        {lastMultipliers?.multipliers?.map((data, index) => (
          <button
          className='xl:w-16 lg:w-12 py-3.5 bg-red-500'
            // className={`xl:w-16 lg:w-12 py-3.5 bg-red-500 ${
            //   index === 0 ? "rounded-t-lg" : index === 3 ? "rounded-b-lg" : ""
            // }`}
          >
            {data}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PlinkoGameContent;
