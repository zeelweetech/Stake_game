import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlinkoSocket } from "../../../../socket";
import {
  setFinalMultiplier,
  setLastMultipliers,
} from "../../../../features/casino/plinkoSlice";
import BallManager from "./game/classes/BallManager";
import { decodedToken } from "../../../../resources/utility";
import { setWallet } from "../../../../features/auth/authSlice";

function PlinkoGameContent() {
  const dispatch = useDispatch();
  const decoded = decodedToken();
  const canvasRef = useRef();
  const [ballManager, setBallManager] = useState();
  const { finalMultiplier, values, lastMultipliers } = useSelector(
    (state) => state.plinkoGame
  );

  PlinkoSocket.on("plinkoBetResult", (data) => {
    dispatch(setFinalMultiplier(data));
  });

  PlinkoSocket.on("walletBalance", (data) => {
    console.log("data", data);
    dispatch(setWallet(data?.walletBalance));
  });

  useEffect(() => {
    if (ballManager) {
      ballManager.addBall(finalMultiplier, lastMultipliers, decoded);
    }
  }, [finalMultiplier?.point]);

  useEffect(() => {
    if (canvasRef.current) {
      const ballManager = new BallManager(canvasRef.current, values, dispatch);
      setBallManager(ballManager);
    }
  }, [canvasRef, values]);

  const renderMultiplierButtons = () => {
    if (Array.isArray(lastMultipliers)) {
      return lastMultipliers
        ?.slice(0, 4)
        ?.reverse()
        ?.map((data, index) => (
          <button
            key={index}
            className={`xl:w-16 lg:w-12 py-3.5 text-black text-bold border-b border-black ${
              data?.multiplier <= 1
                ? "bg-amber-300"
                : data?.multiplier === 2 || 3 || 5
                ? "bg-amber-500"
                : data?.multiplier > 5
                ? "bg-red-600"
                : "bg-red-600"
            } ${
              index === 0 ? "rounded-t-xl" : index === 3 ? "rounded-b-xl" : ""
            }`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            {data?.multiplier}x
          </button>
        ));
    }
    return null;
  };

  return (
    <div className="h-full flex justify-center items-center select-none relative bg-[#0f212e] rounded-tr-lg xl:w-[52rem] lg:w-[35rem]">
      <div className="flex justify-center items-center mt-4 overflow-hidden absolute">
        <canvas
          className="xl:w-[90vw] xl:h-[90vh] xl:max-w-[800px] xl:max-h-[710px] lg:w-[90vw] lg:h-[80vh] lg:max-w-[592px] lg:max-h-[710px]"
          ref={canvasRef}
          width="800"
          height="710"
        ></canvas>
      </div>
      <div className="flex flex-col relative xl:left-[21rem] xl:-top-40 lg:left-56 lg:-top-44">
        {renderMultiplierButtons()}
      </div>
    </div>
  );
}

export default PlinkoGameContent;
