import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlinkoSocket } from "../../../../socket";
import {
  setFinalMultiplier,
  setLastMultipliers,
} from "../../../../features/casino/plinkoSlice";
import BallManager from "./game/classes/BallManager";
import { decodedToken } from "../../../../resources/utility";
import { setWallet } from "../../../../features/auth/authSlice";
import toast from "react-hot-toast";

function PlinkoGameContent() {
  const dispatch = useDispatch();
  const decoded = decodedToken();
  const canvasRef = useRef();
  const [ballManager, setBallManager] = useState();
  const [isMdScreen, setIsMdScreen] = useState(false);
  const { finalMultiplier, values, lastMultipliers } = useSelector(
    (state) => state.plinkoGame
  );

  useEffect(() => {
    const mdQuery = window.matchMedia(
      "(min-width: 768px) and (max-width: 1023px)"
    );

    const handleScreenChange = () => {
      setIsMdScreen(mdQuery.matches);
    };

    handleScreenChange();
    mdQuery.addListener(handleScreenChange);

    return () => {
      mdQuery.removeListener(handleScreenChange);
    };
  }, []);

  PlinkoSocket.on("Insufficientfund", (data) => {
    toast.error(data?.message);
  });

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
            className={`xl:w-16 xl:-ml-5 lg:w-12 lg:ml-64 py-3 text-black font-bold border-b border-black ${
              data?.multiplier <= 1
                ? "bg-amber-300"
                : data?.multiplier === 2 ||
                  data?.multiplier === 3 ||
                  data?.multiplier === 5
                ? "bg-amber-500"
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
<div
      className={`bg-[#0f212e] h-full ml-2 mr-2 flex flex-col md:flex-row justify-center items-center select-none relative rounded-tr-lg 
        ${isMdScreen ? "md:mx-40  rounded-t-lg" : "md:mx-0"} 
        max-sm:h-96 rounded-t-lg`}
    >
  <div className="flex justify-center items-center mb-8 md:mb-16 overflow-hidden absolute">
    <canvas
      className="md:mt-12  max-sm:mb-[6rem] xl:w-[90vw] xl:h-[90vh] xl:max-w-[800px] xl:max-h-[700px] 
                 lg:w-[90vw] lg:h-[150vh] lg:max-w-[697px] lg:max-h-[710px] 
                 md:w-[80vw] md:h-[70vh] sm:w-[90vw] sm:h-[60vh] 
                 max-w-[320px] max-h-[350px] max-[320px]:mr-9"
      ref={canvasRef}
      width="800"
      height="710"
    ></canvas>  
  </div>
    <div className="flex flex-col xl:w-80 lg:w-80 lg:mt-14 md:ml-[17rem] md:w-14 max-sm:mb-36 max-sm:ml-[19rem] max-sm:w-10 relative xl:left-[19rem] xl:-top-40 lg:left-30 lg:-top-40 md:left-[1rem] md:-top-[1rem]">
      {renderMultiplierButtons()}
    </div>
</div>
  );
}

export default PlinkoGameContent;
