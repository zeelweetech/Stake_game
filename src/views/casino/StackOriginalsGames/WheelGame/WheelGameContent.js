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

  return (
    <div className="bg-[#0f212e] flex flex-col justify-center items-center h-full xl:w-[52rem] lg:w-[36.8rem]">
      <div className="p-10 relative">
        <div className="relative">
          <div style={{ position: "relative" }}>
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
      <div className="flex justify-center space-x-4 mt-4">
        <button className="bg-[#2c3e50] text-white px-4 py-2 rounded">
          0.00x
        </button>
        <button className="bg-[#27ae60] text-white px-4 py-2 rounded">
          1.50x
        </button>
        <button className="bg-[#bdc3c7] text-black px-4 py-2 rounded">
          1.80x
        </button>
        <button className="bg-[#f1c40f] text-black px-4 py-2 rounded">
          2.00x
        </button>
        <button className="bg-[#8e44ad] text-white px-4 py-2 rounded">
          3.00x
        </button>
      </div>
    </div>
  );
}

export default memo(WheelGameContent);
