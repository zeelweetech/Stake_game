import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlinkoSocket } from "../../../../socket";
import { setFinalMultiplier } from "../../../../features/casino/plinkoSlice";
import BallManager from "./game/classes/BallManager";

function PlinkoGameContent() {
  const dispatch = useDispatch();
  const canvasRef = useRef();
  const [ballManager, setBallManager] = useState();
  const { finalMultiplier, values } = useSelector((state) => state.plinkoGame);

  PlinkoSocket.on("plinkoBetResult", (data) => {
    console.log("data", data);
    dispatch(setFinalMultiplier(data));
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
    <div
      div
      className="h-full flex flex-col justify-center select-none relative bg-[#0f212e] rounded-tr-lg xl:w-[52rem] lg:w-[39.5rem]"
    >
      <div className="flex justify-center items-center mt-4  overflow-hidden">
        <canvas ref={canvasRef} width="800" height="710"></canvas>
      </div>
    </div>
  );
}

export default PlinkoGameContent;
