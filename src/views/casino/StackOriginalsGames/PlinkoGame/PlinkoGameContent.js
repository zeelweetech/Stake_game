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
  const [fundsToastShown, setFundsToastShown] = useState(false);
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

  useEffect(() => {
    const handleInsufficientFunds = (data) => {
      if (!fundsToastShown) {
        toast.error(data?.message);
        setFundsToastShown(true);
        dispatch(setCompleteBetStatus(false));
      }
    };
    PlinkoSocket.on("Insufficientfund", handleInsufficientFunds);

    const resetToastFlag = () => {
      setFundsToastShown(false);
    };

    return () => {
      resetToastFlag();
      PlinkoSocket.off("Insufficientfund", handleInsufficientFunds);
    };
  }, [fundsToastShown]);

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
      className={`bg-[#0f212e] xl:w-[51rem] lg:w-[41rem] md:w-[24rem] max-sm:mx-3 h-full flex flex-col justify-center select-none relative
        ${isMdScreen ? "rounded-t-xl" : "rounded-tr-xl"} `}
    >
      <div className="flex justify-center items-center mb-8 md:mb-16 overflow-hidden absolute">
        <canvas
          className="max-sm:mb-[6rem] xl:w-[90vw] xl:h-[90vh] xl:max-w-[800px] xl:max-h-[700px] xl:-ml-0
                  lg:w-[90vw] lg:h-[150vh] lg:max-w-[697px] lg:max-h-[710px] lg:-ml-0
                  md:w-[80vw] md:h-[70vh] mt-28 sm:h-[20rem] md:mt-12 md:-ml-8 
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
              ? `max-sm:w-[207%] max-sm:h-[39rem] mt-[-8rem] md:w-[107vw] md:h-[92vh] md:-mt-28 lg:min-w-[1149px] lg:w-[109vw] xl:max-h-[1221px] xl:h-[125vh] xl:mt-[-12rem]`
              : values?.rows === "9" || values?.rows === 9
              ? `max-sm:w-[191%] max-sm:h-[36rem] max-sm:mb-[8rem] md:w-[100vw] md:h-[82vh] md:mt-[-6rem] sm:mt-12 lg:max-w-[1149px] lg:w-[109vw] lg:max-h-[1221px] lg:h-[150vh]`
              : values?.rows === "10" || values?.rows === 10
              ? `max-sm:w-[175%] max-sm:h-[530px] max-sm:mb-[7rem] md:w-[92vw] md:h-[76vh] md:mt-[-5rem] lg:max-w-[1149px] lg:w-[109vw] lg:max-h-[1221px] lg:h-[150vh]`
              : values?.rows === "11" || values?.rows === 11
              ? `max-sm:w-[168%] max-sm:h-[475px] md:w-[84vw] md:h-[68vh] md:mt-[2rem] lg:max-w-[1149px] lg:w-[109vw] lg:max-h-[1221px] lg:h-[150vh]`
              : values?.rows === "12" || values?.rows === 12
              ? `max-sm:w-[150%] max-sm:h-[430px] max-sm:mt-4 max-sm:mb-[1.5rem] md:w-[81vw] md:h-[63vh] md:mt-[1rem] lg:max-w-[1149px] lg:w-[109vw] lg:max-h-[1221px] lg:h-[150vh]`
              : values?.rows === "13" || values?.rows === 13
              ? `max-sm:w-[140%] max-sm:h-[415px] md:w-[72vw] md:h-[60vh] md:mt-[2rem] lg:max-w-[1149px] lg:w-[110vw] lg:max-h-[1221px] lg:h-[155vh]`
              : values?.rows === "14" || values?.rows === 14
              ? `max-sm:w-[130%] max-sm:h-[383px] max-sm:mt-[1.8rem] md:w-[68vw] md:h-[55vh] md:mt-[4rem] lg:max-w-[1149px] lg:w-[110vw] lg:max-h-[1221px] lg:h-[155vh]`
              : values?.rows === "15" || values?.rows === 15
              ? `max-sm:w-[125%] max-sm:h-[370px] max-sm:mt-[1rem] md:w-[65vw] md:h-[53vh] md:mt-[5rem] lg:max-w-[1149px] lg:w-[110vw] lg:max-h-[1221px] lg:h-[155vh]`
              : values?.rows === "16" || values?.rows === 16
              ? `max-sm:w-[125%] max-sm:h-[350px] max-sm:mb-[5rem] md:w-[70vw] md:h-[61vh] md:mt-[0.5rem] lg:max-w-[1149px] lg:w-[110vw] lg:max-h-[1221px] lg:h-[155vh]`
              : ""
            }`}
          ref={canvasRef}
          width="800"
          height="510"
        ></canvas>
      </div> */}
      <div className="flex flex-col lg:mt-14 md:ml-[17rem] md:w-14 max-sm:mb-36 max-sm:ml-[19rem] max-sm:w-10 relative xl:left-[15rem] xl:-top-40 lg:left-30 lg:-top-40 md:left-[1rem] md:-top-[1rem]">
        {renderMultiplierButtons()}
      </div>
    </div>
  );
}

export default PlinkoGameContent;
