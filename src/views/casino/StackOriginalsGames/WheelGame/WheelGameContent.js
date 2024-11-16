import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import { WheelSocket } from "../../../../socket";
import { RowByRisk } from "./WheelJason";
import { useDispatch, useSelector } from "react-redux";
import {
  setFinaMultiplier,
  setMustSpin,
} from "../../../../features/casino/wheelSlice";
import toast from "react-hot-toast";
import { Wheel } from "react-custom-roulette";
import { decodedToken } from "../../../../resources/utility";
import { getWallet } from "../../../../services/LoginServices";
import { setWallet } from "../../../../features/auth/authSlice";

function WheelGameContent() {
  const dispatch = useDispatch();
  const decoded = decodedToken();
  const [isSpinning, setIsSpinning] = useState(true);
  const [segments, setSegments] = useState([]);
  const [segColors, setSegColors] = useState([]);
  const [isMdScreen, setIsMdScreen] = useState(false);
  const { wheelValue, finalmultiplier, mustSpin } = useSelector(
    (state) => state.wheelGame
  );

  useEffect(() => {
    GetWalletData();
  }, []);

  const GetWalletData = async () => {
    await getWallet({ id: decoded?.userId })
      .then((res) => {
        dispatch(setWallet(res?.currentAmount));
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
    if (mustSpin) {
      setIsSpinning(true);
    }
  }, [mustSpin]);

  console.log("finalmultiplier", finalmultiplier);
  useEffect(() => {
    WheelSocket.on("manualBetResult", (data) => {
      dispatch(setFinaMultiplier(data));
    });

    WheelSocket.on("autoBetResult", (data) => {
      console.log("auto bet data", data);
      dispatch(setFinaMultiplier(data));
    });

    WheelSocket.on("Insufficientfund", (data) => {
      toast.error(data?.message);
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

  const lowRiskButtons = (
    <>
      <button
        className={`border-b-[#406c82] border-b-8 bg-[#213743] px-20 py-3 rounded-xl ${
          finalmultiplier?.multiplier === 0
            ? "text-white bg-[#406c82] transition-colors duration-300"
            : ""
        }`}
      >
        0.00x
      </button>
      <button className="border-b-[#fcfcfc] border-b-8 bg-[#213743] px-20 py-3 rounded-xl transition-colors duration-300">
        1.20x
      </button>
      <button className="border-b-[#1fff20] border-b-8 bg-[#213743] px-20 py-3 rounded-xl transition-colors duration-300">
        1.50x
      </button>
    </>
  );
  // const lowRiskButtons = (
  //   <div className="flex justify-center gap-4 flex-wrap">
  //     <button className="border-b-[#406c82] border-b-4 bg-[#213743] rounded-xl px-4 py-2 text-sm sm:px-6 sm:py-2 sm:text-base">
  //       0.00x
  //     </button>
  //     <button className="border-b-[#fcfcfc] border-b-4 bg-[#213743] rounded-xl px-4 py-2 text-sm sm:px-6 sm:py-2 sm:text-base">
  //       1.20x
  //     </button>
  //     <button className="border-b-[#1fff20] border-b-4 bg-[#213743] rounded-xl px-4 py-2 text-sm sm:px-6 sm:py-2 sm:text-base">
  //       1.50x
  //     </button>
  //   </div>
  // );
  const mediumRiskButtons = (
    <>
      <button
        className={`border-b-[#406c82] bg-[#213743] border-b-8 rounded-xl xl:px-8 lg:px-6 md:px-2.5 sm:px-4 px-2 py-1 text-xs sm:text-sm md:text-base`}
      >
        0.00x
      </button>
      <button
        className={`border-b-[#1fff20] bg-[#213743] border-b-8 rounded-xl xl:px-8 lg:px-6 md:px-2.5 sm:px-4 px-2 py-1 text-xs sm:text-sm md:text-base`}
      >
        1.50x
      </button>
      {wheelValue?.segments === "50" ? (
        ""
      ) : (
        <button
          className={`border-b-[#fcfcfc] bg-[#213743] border-b-8 ${
            wheelValue?.segments === "30" || wheelValue?.segments === 30
              ? "px-8"
              : "px-10"
          } py-3 rounded-xl`}
        >
          {wheelValue?.segments === "10"
            ? "1.90x"
            : wheelValue?.segments === "20"
            ? "1.80x"
            : wheelValue?.segments === "30"
            ? "1.70x"
            : wheelValue?.segments === "40"
            ? "1.60x"
            : "1.70x"}
        </button>
      )}
      <button
        className={`border-b-[#e8e225] bg-[#213743] border-b-8 rounded-xl xl:px-8 lg:px-6 md:px-2.5 sm:px-4 px-2 py-1 text-xs sm:text-sm md:text-base`}
      >
        2.00x
      </button>
      <button
        className={`border-b-[#9322e3] bg-[#213743] border-b-8 ${
          wheelValue?.segments === "30" || wheelValue?.segments === 30
            ? "px-8"
            : "px-10"
        } py-3 rounded-xl`}
      >
        3.00x
      </button>
      {wheelValue?.segments === "50" ? (
        <button
          className={`border-b-[#42d7f5] bg-[#213743] border-b-8 ${
            wheelValue?.segments === "30" || wheelValue?.segments === 30
              ? "px-8"
              : "px-10"
          } py-3 rounded-xl`}
        >
          5.00x
        </button>
      ) : (
        ""
      )}
      {wheelValue?.segments === "30" || wheelValue?.segments === 30 ? (
        <button className="border-b-[#d18a2c] bg-[#213743] border-b-8 px-8 py-3 rounded-xl">
          4.00x
        </button>
      ) : (
        ""
      )}
    </>
  );
  const highRiskButtons = (
    <>
      <button className="border-b-[#406c82] bg-[#213743] border-b-8 px-32 py-3 rounded-xl">
        0.00x
      </button>
      <button className="border-b-[#de2128] bg-[#213743] border-b-8 px-32 py-3 rounded-xl">
        {wheelValue?.segments === "10"
          ? "9.90x"
          : wheelValue?.segments === "20"
          ? "19.80x"
          : wheelValue?.segments === "30"
          ? "29.70x"
          : wheelValue?.segments === "40"
          ? "39.60x"
          : wheelValue?.segments === "40"
          ? "49.50x"
          : "29.70x"}
      </button>
    </>
  );
  return (
    <div className={`bg-[#0f212e] flex flex-col justify-center items-center overflow-hidden xl:w-[44rem] xl:h-[46rem] lg:w-[38.5rem] lg:h-[46rem] md:h-[32rem] h-full mx-3 ${isMdScreen ? "md:mx-32" : "md:mx-0"}  rounded-t-lg`}>
      <div className="relative">
        <div className="relative ">
          <div  style={{ position: "relative" }}>
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={finalmultiplier?.position}
              data={segments.length > 0 ? segments : datas}
              onStopSpinning={() => {
                setIsSpinning(false);
                dispatch(setMustSpin(false));
                WheelSocket.emit("betCompleted", {
                  betId: finalmultiplier?.betId,
                  userId: decoded?.userId,
                });
              }}
              // radiusLineWidth={5}
              backgroundColors={segColors}
              textColors={["#ffffff"]}
              outerBorderColor="#132833"
              innerBorderColor="#132833"
              radiusLineColor="#132833"
              outerBorderWidth={4}
              innerRadius={90}
              customSegmentLabels={segments.map((segment, index) => ({
                text: segment.option,
                position: "outside",
                style: { fontSize: 14, fill: "#fff" },
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
                <span className="text-3xl font-bold">
                  {finalmultiplier?.multiplier}x
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-4 mt-4 text-white">
        {wheelValue?.risk === "low" && lowRiskButtons}
        {wheelValue?.risk === "medium" && mediumRiskButtons}
        {wheelValue?.risk === "high" && highRiskButtons}
      </div>
    </div>
  );
}

export default memo(WheelGameContent);
