import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlinkoSocket } from "../../../../socket";
import {
  setCompleteBetStatus,
  setFinalMultiplier,
  setLastMultipliers,
} from "../../../../features/casino/plinkoSlice";
import BallManager from "./game/classes/BallManager";
import { decodedToken } from "../../../../resources/utility";
import { setWallet } from "../../../../features/auth/authSlice";
import toast from "react-hot-toast";
import { getWallet } from "../../../../services/LoginServices";
import { useParams } from "react-router-dom";

function PlinkoGameContent() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const decoded = decodedToken();
  const canvasRef = useRef();
  const [ballManager, setBallManager] = useState();
  const [isMdScreen, setIsMdScreen] = useState(false);
  const { finalMultiplier, values, lastMultipliers } = useSelector(
    (state) => state.plinkoGame
  );

  useEffect(() => {
    PlinkoSocket.emit("joinGame", {
      userId: decoded?.userId,
      gameId: id,
    });
  }, []);

  useEffect(() => {
    GetWalletData();
  }, []);

  const GetWalletData = async () => {
    await getWallet({ id: decoded?.userId })
      .then((res) => {
        const wallet =
          parseFloat(res?.currentAmount) + parseFloat(res?.bonusAmount);
        dispatch(setWallet(wallet.toFixed(2)));
      })
      .catch((err) => {});
  };

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
    dispatch(setCompleteBetStatus(false));
  });

  PlinkoSocket.on("plinkoBetResult", (data) => {
    dispatch(setFinalMultiplier(data));
  });

  PlinkoSocket.on("walletBalance", (data) => {
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
      className={`bg-[#0f212e] xl:w-[45rem] lg:w-[41rem] h-full flex flex-col md:flex-row justify-center items-center select-none relative 
        ${isMdScreen ? "md:mx-40 rounded-t-lg" : "md:mx-0"} 
        max-sm:h-96 rounded-t-lg`}
    >
     <div className="flex justify-center items-center mb-8 md:mb-16 overflow-hidden absolute">
        <canvas
          className="md:mt-12 max-sm:mb-[6rem] xl:w-[90vw] xl:h-[90vh] xl:max-w-[800px] xl:max-h-[700px] 
                  lg:w-[90vw] lg:h-[150vh] lg:max-w-[697px] lg:max-h-[710px] 
                  md:w-[80vw] md:h-[70vh] mt-28 sm:h-[20rem]
                  max-w-[450px] max-h-[430px] sm:w-[400px] max-sm:w-[100%] max-sm:h-[30rem]"
          ref={canvasRef}
        width="800"
        height="710"
      ></canvas>
      </div>
       {/* <div className="flex justify-center items-center mb-8 md:mb-16 overflow-hidden absolute">
        <canvas
          className={`${
            values?.rows === "8" || values?.rows === 8
              ? `max-sm:w-[207%] max-sm:h-[38rem] mt-[-10rem] md:w-[99vw] md:h-[85vh] md:-mt-28 lg:min-w-[1149px] lg:w-[109vw] lg:max-h-[1221px] lg:h-[150vh]`
              : values?.rows === "9" || values?.rows === 9
              ? `max-sm:w-[191%] max-sm:h-[34rem] max-sm:mb-[9rem] md:w-[99vw] md:h-[91vh] md:mt-32 sm:mt-12 lg:max-w-[1149px] lg:w-[109vw] lg:max-h-[1221px] lg:h-[150vh]`
              : values?.rows === "10" || values?.rows === 10
              ? `max-sm:w-[175%] max-sm:h-[515px] max-sm:mb-[7rem] md:w-[99vw] md:h-[91vh] md:mt-32 lg:max-w-[1149px] lg:w-[109vw] lg:max-h-[1221px] lg:h-[150vh]`
              : values?.rows === "11" || values?.rows === 11
              ? `max-sm:w-[160%] max-sm:h-[460px] max-sm:mb-[6rem] md:w-[99vw] md:h-[91vh] md:mt-32 lg:max-w-[1149px] lg:w-[109vw] lg:max-h-[1221px] lg:h-[150vh]`
              : values?.rows === "12" || values?.rows === 12
              ? `max-sm:w-[145%] max-sm:h-[440px] max-sm:mb-[6rem] md:w-[99vw] md:h-[91vh] md:mt-32 lg:max-w-[1149px] lg:w-[109vw] lg:max-h-[1221px] lg:h-[150vh]`
              : values?.rows === "13" || values?.rows === 13
              ? `max-sm:w-[130%] max-sm:h-[430px] max-sm:mb-[5rem] md:w-[99vw] md:h-[95vh] md:mt-20 lg:max-w-[1149px] lg:w-[110vw] lg:max-h-[1221px] lg:h-[155vh]`
              : values?.rows === "14" || values?.rows === 14
              ? `max-sm:w-[120%] max-sm:h-[460px] max-sm:mb-[3.5rem] md:w-[99vw] md:h-[95vh] md:mt-18 lg:max-w-[1149px] lg:w-[110vw] lg:max-h-[1221px] lg:h-[155vh]`
              : values?.rows === "15" || values?.rows === 15
              ? `max-sm:w-[130%] max-sm:h-[430px] max-sm:mb-[4rem] md:w-[99vw] md:h-[95vh] md:mt-16 lg:max-w-[1149px] lg:w-[110vw] lg:max-h-[1221px] lg:h-[155vh]`
              : values?.rows === "16" || values?.rows === 16
              ? `max-sm:w-[130%] max-sm:h-[420px] max-sm:mb-[2rem] md:w-[99vw] md:h-[95vh] md:mt-14 lg:max-w-[1149px] lg:w-[110vw] lg:max-h-[1221px] lg:h-[155vh]`
              : ""
            }`}
          ref={canvasRef}
          width="800"
          height="510"
        ></canvas>
      </div> */}
      <div className="flex flex-col xl:w-80 lg:w-80 lg:mt-14 md:ml-[17rem] md:w-14 max-sm:mb-36 max-sm:ml-[19rem] max-sm:w-10 relative xl:left-[19rem] xl:-top-40 lg:left-30 lg:-top-40 md:left-[1rem] md:-top-[1rem]">
        {renderMultiplierButtons()}
      </div>
    </div>
  );
}

export default PlinkoGameContent;
