import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import { WheelSocket } from "../../../../socket";
import { RowByRisk } from "./WheelJason";
import { useDispatch, useSelector } from "react-redux";
import {
  setAutoBet,
  setFinaMultiplier,
  setIsBetInProgress,
  setIsSpinning,
  setMustSpin,
  setWheelValue,
} from "../../../../features/casino/wheelSlice";
import toast from "react-hot-toast";
import { Wheel } from "react-custom-roulette";
import { decodedToken } from "../../../../resources/utility";
import { getWallet } from "../../../../services/LoginServices";
import { setWallet } from "../../../../features/auth/authSlice";

function WheelGameContent() {
  const dispatch = useDispatch();
  const decoded = decodedToken();
  const [segments, setSegments] = useState([]);
  const [segColors, setSegColors] = useState([]);
  // const [isMdScreen, setIsMdScreen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [fundsToastShown, setFundsToastShown] = useState(false);
  const { wheelValue, finalmultiplier, mustSpin, isSpinning } = useSelector(
    (state) => state.wheelGame
  );

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

  WheelSocket.on("autoBetStop", () => {
    dispatch(setAutoBet(false));
  });

  WheelSocket.on("walletBalance", (data) => {
    dispatch(setWallet(data?.walletBalance));
  });

  // useEffect(() => {
  //   const mdQuery = window.matchMedia(
  //     "(min-width: 768px) and (max-width: 1023px)"
  //   );

  //   const handleScreenChange = () => {
  //     setIsMdScreen(mdQuery.matches);
  //   };

  //   handleScreenChange();
  //   mdQuery.addListener(handleScreenChange);

  //   return () => {
  //     mdQuery.removeListener(handleScreenChange);
  //   };
  // }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (mustSpin) {
      dispatch(setIsSpinning(true));
    }
  }, [mustSpin]);

  useEffect(() => {
    const handleInsufficientFunds = (data) => {
      if (!fundsToastShown) {
        toast.error(data?.message);
        setFundsToastShown(true);
        dispatch(setIsBetInProgress(false));
      }
    };
    WheelSocket.on("Insufficientfund", handleInsufficientFunds);

    const resetToastFlag = () => {
      setFundsToastShown(false);
    };

    return () => {
      resetToastFlag();
      WheelSocket.off("Insufficientfund", handleInsufficientFunds);
    };
  }, [fundsToastShown]);

  useEffect(() => {
    WheelSocket.on("manualBetResult", (data) => {
      dispatch(setFinaMultiplier(data));
    });

    WheelSocket.on("autoBetResult", (data) => {
      dispatch(setFinaMultiplier(data));
    });
  }, []);

  useEffect(() => {
    if (finalmultiplier?.multiplier) {
      if (!mustSpin) {
        dispatch(setMustSpin(true));
      }
    } else if (finalmultiplier?.multiplier === 0) {
      dispatch(setMustSpin(true));
    }
  }, [finalmultiplier]);

  const datas = [{ option: "" }, { option: "" }, { option: "" }];

  useEffect(() => {
    const selectionByRisk = RowByRisk[wheelValue?.risk];
    const rotationValues =
      selectionByRisk[`segment${parseInt(wheelValue?.segments, 10)}`];
    const segments = rotationValues?.map((item) => {
      return { option: "" };
    });
    setSegments(segments);
    const segColors = rotationValues?.map((item) => {
      return item?.backgroundColor;
    });
    setSegColors(segColors);
  }, [wheelValue]);

  const xvalue =
    RowByRisk[wheelValue?.risk]["segment" + wheelValue?.segments][
      finalmultiplier?.position
    ]?.xvalue;
  const buttons = String(xvalue);
  console.log("buttons value ", buttons);

  const handleWheelStop = () => {
    dispatch(setIsSpinning(false));
    dispatch(setMustSpin(false));

    WheelSocket.emit("betCompleted", {
      betId: finalmultiplier?.betId,
      userId: decoded?.userId,
    });
    dispatch(setIsBetInProgress(false));
    if (finalmultiplier?.remainingBets === 1) {
      dispatch(setAutoBet(false));
    }
  };

  const lowRiskButtons = (
    <>
      <button
        className={`group relative inline-block overflow-hidden font-medium border-b-[#406c82] border-b-8 bg-[#213743] cursor-help rounded-lg xl:px-20 xl:py-2 lg:px-16 lg:py-2 md:px-8 md:py-2 px-11 py-1 text-xs sm:text-sm md:text-base lg:text-lg
          ${buttons.includes("0") && "bg-[#406c82]"}
        `}
      >
        <span className="absolute left-0 right-0 bottom-0 flex h-0 w-full translate-y-0 transform bg-[#406c82] transition-all duration-300 ease-out group-hover:h-full text-[#FFFFFF]"></span>
        <span className="relative">0.00×</span>
      </button>

      <button
        className={`border-b-[#d5e8f2] group relative inline-block overflow-hidden font-medium border-b-8 bg-[#213743] cursor-help rounded-lg xl:px-20 xl:py-2 lg:px-16 lg:py-2 md:px-8 md:py-2 px-11 py-1 text-xs sm:text-sm md:text-base lg:text-lg ${
          buttons.includes("1.2") && "bg-[#d5e8f2]"
        }`}
      >
        <span className="absolute left-0 right-0 bottom-0 flex h-0 w-full translate-y-0 transform bg-[#d5e8f2] transition-all duration-300 ease-out group-hover:h-full text-[#FFFFFF]"></span>
        <span className="relative">1.20×</span>
      </button>

      <button
        className={`group relative inline-block overflow-hidden font-medium border-b-[#1fff20] border-b-8 bg-[#213743] cursor-help rounded-lg xl:px-20 xl:py-2 lg:px-16 lg:py-2 md:px-8 md:py-2 px-11 py-1 text-xs sm:text-sm md:text-base lg:text-lg ${
          buttons.includes("1.5") && "bg-[#1fff20]"
        }`}
      >
        <span className="absolute left-0 right-0 bottom-0 flex h-0 w-full translate-y-0 transform bg-[#1fff20] transition-all duration-300 ease-out group-hover:h-full text-[#FFFFFF]"></span>
        <span className="relative group-hover:text-white -mt-2">1.50×</span>
      </button>
    </>
  );

  const mediumRiskButtons = (
    <>
      <button
        className={`border-b-[#406c82] group relative inline-block overflow-hidden font-medium bg-[#213743] cursor-help border-b-8 rounded-lg xl:px-8 xl:h-12 xl:mt-5 lg:px-6 lg:h-12 lg:mt-10 md:px-2 md:h-11 mt-2 sm:px-4 h-9 px-2.5 py-1 text-xs sm:text-sm md:text-base
          ${buttons.includes("0") && "bg-[#406c82]"} py-3 rounded-lg`}
      >
        <span className="absolute left-0 right-0 bottom-0 flex h-0 w-full translate-y-0 transform bg-[#406c82] transition-all duration-300 ease-out group-hover:h-full text-[#FFFFFF]"></span>
        <span className="relative">0.00x</span>
      </button>
      <button
        className={`border-b-[#1fff20] group relative inline-block overflow-hidden font-medium bg-[#213743] cursor-help border-b-8 rounded-lg xl:px-8 xl:h-12 xl:mt-5 lg:px-6 lg:h-12 lg:mt-10 md:px-2 md:h-11 mt-2 sm:px-4 h-9 px-2.5 py-1 text-xs sm:text-sm md:text-base
          ${
            buttons.includes("1.5") ? "bg-[#1fff20]" : "bg-[#213743]"
          } py-3 rounded-lg`}
      >
        <span className="absolute left-0 right-0 bottom-0 flex h-0 w-full translate-y-0 transform bg-[#1fff20] transition-all duration-300 ease-out group-hover:h-full text-[#FFFFFF]"></span>
        <span className="relative">1.50x</span>
      </button>
      {wheelValue?.segments === "50" ? (
        ""
      ) : (
        <button
          className={`border-b-[#d5e8f2] group relative inline-block overflow-hidden font-medium bg-[#213743] cursor-help border-b-8 rounded-lg xl:px-8 xl:h-12 xl:mt-5 lg:px-6 lg:h-12 lg:mt-10 md:px-2 md:h-11 mt-2 sm:px-4 h-9 px-2.5 py-1 text-xs sm:text-sm md:text-base${
            wheelValue?.segments === "30" || wheelValue?.segments === 30
              ? "px-8"
              : "px-10"
          } ${
            buttons.includes("1.9")
              ? "bg-[#d5e8f2]"
              : buttons.includes("1.8")
              ? "bg-[#d5e8f2]"
              : buttons.includes("1.7")
              ? "bg-[#d5e8f2]"
              : buttons.includes("1.6")
              ? "bg-[#d5e8f2]"
              : "bg-[#213743]"
          } py-3 rounded-lg`}
        >
          {wheelValue?.segments === "10" ? (
            <div>
              <span
                className={`absolute left-0 right-0 bottom-0 flex h-0 w-full translate-y-0 transform bg-[#d5e8f2] transition-all duration-300 ease-out group-hover:h-full text-[#FFFFFF] ${
                  handleWheelStop && finalmultiplier?.multiplier === 0 ? "" : ""
                }`}
              ></span>
              <span className="relative">1.90x</span>
            </div>
          ) : wheelValue?.segments === "20" ? (
            <div>
              <span className="absolute left-0 right-0 bottom-0 flex h-0 w-full translate-y-0 transform bg-[#d5e8f2] transition-all duration-300 ease-out group-hover:h-full text-[#FFFFFF]"></span>
              <span className="relative">1.80x</span>
            </div>
          ) : wheelValue?.segments === "30" ? (
            <div>
              <span className="absolute left-0 right-0 bottom-0 flex h-0 w-full translate-y-0 transform bg-[#d5e8f2] transition-all duration-300 ease-out group-hover:h-full text-[#FFFFFF]"></span>
              <span className="relative">1.70x</span>
            </div>
          ) : wheelValue?.segments === "40" ? (
            <div>
              <span className="absolute left-0 right-0 bottom-0 flex h-0 w-full translate-y-0 transform bg-[#d5e8f2] transition-all duration-300 ease-out group-hover:h-full text-[#FFFFFF]"></span>
              <span className="relative">1.60x</span>
            </div>
          ) : (
            <div>
              <span className="absolute left-0 right-0 bottom-0 flex h-0 w-full translate-y-0 transform bg-[#d5e8f2] transition-all duration-300 ease-out group-hover:h-full text-[#FFFFFF]"></span>
              <span className="relative">1.70x</span>
            </div>
          )}
        </button>
      )}
      <button
        className={`border-b-[#e8e225] group relative inline-block overflow-hidden font-medium bg-[#213743] cursor-help border-b-8 rounded-lg xl:px-8 xl:h-12 xl:mt-5 lg:px-6 lg:h-12 lg:mt-10 md:px-2 md:h-11 mt-2 sm:px-2 h-9 px-2.5 py-1 text-xs sm:text-sm md:text-base ${
          wheelValue?.segments === "30" || wheelValue?.segments === 30 ? "" : ""
        } ${buttons.includes("2") && "bg-[#e8e225]"}`}
      >
        <span className="absolute left-0 right-0 bottom-0 flex h-0 w-full translate-y-0 transform bg-[#e8e225] transition-all duration-300 ease-out group-hover:h-full text-[#FFFFFF]"></span>
        <span className="relative">2.00x</span>
      </button>
      <button
        className={`border-b-[#9322e3] group relative inline-block overflow-hidden font-medium bg-[#213743] cursor-help border-b-8 rounded-lg xl:px-8 xl:h-12 xl:mt-5 lg:px-6 lg:h-12 lg:mt-10 md:px-2 md:h-11 mt-2 sm:px-4 h-9 px-2.5 py-1 text-xs sm:text-sm md:text-base ${
          buttons.includes("3") && "bg-[#9322e3]"
        }`}
      >
        <span className="absolute left-0 right-0 bottom-0 flex h-0 w-full translate-y-0 transform bg-[#9322e3] transition-all duration-300 ease-out group-hover:h-full text-[#FFFFFF]"></span>
        <span className="relative">3.00x</span>
      </button>
      {wheelValue?.segments === "50" ? (
        <button
          className={`border-b-[#007bff] group relative inline-block overflow-hidden font-medium bg-[#213743] cursor-help border-b-8 rounded-lg xl:px-8 xl:h-12 xl:mt-5 lg:px-6 lg:h-12 lg:mt-10 md:px-2 md:h-11 mt-2 sm:px-4 h-9 px-2.5 py-1 text-xs sm:text-sm md:text-base ${
            buttons.includes("5") && "bg-[#007bff]"
          }`}
        >
          <span className="absolute left-0 right-0 bottom-0 flex h-0 w-full translate-y-0 transform bg-[#007bff] transition-all duration-300 ease-out group-hover:h-full text-[#FFFFFF]"></span>
          <span className="relative">5.00x</span>
        </button>
      ) : (
        ""
      )}
      {wheelValue?.segments === "30" || wheelValue?.segments === 30 ? (
        <button
          className={`border-b-[#d18a2c] group relative inline-block overflow-hidden font-medium bg-[#213743] cursor-help border-b-8 rounded-lg xl:px-8 xl:h-12 xl:mt-5 lg:px-6 lg:h-12 lg:mt-10 md:px-2 md:h-11 mt-2 sm:px-4 h-9 px-2.5 py-1 text-xs sm:text-sm md:text-base ${
            buttons.includes("4") && "bg-[#d18a2c]"
          }`}
        >
          <span className="absolute left-0 right-0 bottom-0 flex h-0 w-full translate-y-0 transform bg-[#d18a2c] transition-all duration-300 ease-out group-hover:h-full text-[#FFFFFF]"></span>
          <span className="relative">4.00x</span>
        </button>
      ) : (
        ""
      )}
    </>
  );

  const highRiskButtons = (
    <>
      <button
        className={`border-b-[#406c82] group relative inline-block overflow-hidden font-medium bg-[#213743] cursor-help border-b-8 px-14 xl:px-36  md:px-12 lg:px-28 py-1 rounded-lg text-xs sm:text-sm md:text-base lg:text-lg ${
          buttons.includes("0") && "bg-[#406c82]"
        }`}
      >
        <span className="absolute left-0 right-0 bottom-0 flex h-0 w-full translate-y-0 transform bg-[#406c82] transition-all duration-300 ease-out group-hover:h-full text-[#FFFFFF]"></span>
        <span className="relative">0.00x</span>
      </button>
      <button
        className={`border-b-[#de2128] group relative inline-block overflow-hidden font-medium bg-[#213743] cursor-help border-b-8 px-14 xl:px-36  md:px-12 lg:px-28 py-1 rounded-lg text-xs sm:text-sm md:text-base lg:text-lg
        ${
          buttons.includes("9.9")
            ? "bg-[#de2128]"
            : buttons.includes("19.8")
            ? "bg-[#de2128]"
            : buttons.includes("29.7")
            ? "bg-[#de2128]"
            : buttons.includes("39.6")
            ? "bg-[#de2128]"
            : buttons.includes("49.5")
            ? "bg-[#de2128]"
            : "bg-[#213743]"
        }`}
      >
        {wheelValue?.segments === "10" ? (
          <div className={`${buttons.includes("9.9") && "bg-[#de2128]"}`}>
            <span className="absolute left-0 right-0 bottom-0 flex h-0 w-full translate-y-0 transform bg-[#de2128] transition-all duration-300 ease-out group-hover:h-full text-[#FFFFFF]"></span>
            <span className="relative">9.90x</span>
          </div>
        ) : wheelValue?.segments === "20" ? (
          <div className={`${buttons.includes("19.8") && "bg-[#de2128]"}`}>
            <span className="absolute left-0 right-0 bottom-0 flex h-0 w-full translate-y-0 transform bg-[#de2128] transition-all duration-300 ease-out group-hover:h-full text-[#FFFFFF]"></span>
            <span className="relative">19.80x</span>
          </div>
        ) : wheelValue?.segments === "30" ? (
          <div className={`${buttons.includes("29.7") && "bg-[#de2128]"}`}>
            <span className="absolute left-0 right-0 bottom-0 flex h-0 w-full translate-y-0 transform bg-[#de2128] transition-all duration-300 ease-out group-hover:h-full text-[#FFFFFF]"></span>
            <span className="relative">29.70x</span>
          </div>
        ) : wheelValue?.segments === "40" ? (
          <div className={`${buttons.includes("39.6") && "bg-[#de2128]"}`}>
            <span className="absolute left-0 right-0 bottom-0 flex h-0 w-full translate-y-0 transform bg-[#de2128] transition-all duration-300 ease-out group-hover:h-full text-[#FFFFFF]"></span>
            <span className="relative">39.60x</span>
          </div>
        ) : wheelValue?.segments === "40" ? (
          <div className={`${buttons.includes("49.5") && "bg-[#de2128]"}`}>
            <span className="absolute left-0 right-0 bottom-0 flex h-0 w-full translate-y-0 transform bg-[#de2128] transition-all duration-300 ease-out group-hover:h-full text-[#FFFFFF]"></span>
            <span className="relative">49.50x</span>
          </div>
        ) : (
          <div className={`${buttons.includes("49.5") && "bg-[#de2128]"}`}>
            <span className="absolute left-0 right-0 bottom-0 flex h-0 w-full translate-y-0 transform bg-[#de2128] transition-all duration-300 ease-out group-hover:h-full text-[#FFFFFF]"></span>
            <span className="relative">49.50x</span>
          </div>
        )}
      </button>
    </>
  );

  return (
    <div
      className={`bg-[#0f212e] flex flex-col justify-center items-center overflow-hidden max-sm:mx-3 -mt-0.2 
        xl:w-[51rem] xl:h-[46rem] xl:ml-0
        lg:w-[41rem] lg:h-[46rem] lg:ml-0
        md:h-[32rem] md:w-[24rem] md:ml-[1.5rem]
        h-full ${isMobile ? "rounded-t-lg" : "rounded-tr-lg"}`}
    >
      <div className="relative">
        <div className="relative">
          <div style={{ position: "relative" }}>
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={finalmultiplier?.position}
              data={segments.length > 0 ? segments : datas}
              onStopSpinning={handleWheelStop}
              spinDuration={0.1}
              disableInitialAnimation={true}
              backgroundColors={segColors}
              textColors={["#ffffff"]}
              outerBorderColor="#132833"
              innerBorderColor="#132833"
              radiusLineColor="#132833"
              outerBorderWidth={4}
              innerRadius={90}
              customSegmentLabels={segments.map((segment) => ({
                text: segment.option,
                position: "outside",
                style: {
                  fontSize: 14,
                  fill: "#fff",
                },
              }))}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {!isSpinning && (
                <span className="text-2xl md:text-3xl font-bold">
                  {finalmultiplier?.multiplier}x
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-2 mb-2 xl:mt-16 lg:mt-16 md:mt-0 text-white font-bold">
        {wheelValue?.risk === "low" && lowRiskButtons}
        {wheelValue?.risk === "medium" && mediumRiskButtons}
        {wheelValue?.risk === "high" && highRiskButtons}
      </div>
    </div>
  );
}

export default memo(WheelGameContent);
