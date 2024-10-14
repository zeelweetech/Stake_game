import React, { useEffect, useState } from "react";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { LimboSocket } from "../../../../socket";
import { useDispatch, useSelector } from "react-redux";
import {
  setLimboStatusData,
  setValues,
} from "../../../../features/casino/limboSlice";
import {
  getGameRandomFiveData,
  getRandomFiveData,
} from "../../../../services/CasinoServices";
import { decodedToken } from "../../../../resources/utility";
import { IoIosTrendingUp } from "react-icons/io";
import { useParams } from "react-router-dom";

function LimboGameContent() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [displayedMultiplier, setDisplayedMultiplier] = useState(1.0);
  const { values, limboStatusData } = useSelector((state) => state.limboGame);
  const [topXData, setTopXData] = useState();

  LimboSocket.on("limbobetResult", (data) => {
    console.log("data", data);
    dispatch(setLimboStatusData(data));
  });
  console.log("limboStatusData", limboStatusData);

  useEffect(() => {
    if (
      Math.floor(displayedMultiplier) ===
      Math.floor(limboStatusData.actualMultiplier)
    ) {
      GetRendomFiveData();
      setDisplayedMultiplier(1.0)
    }
  }, [
    Math.floor(displayedMultiplier) ===
      Math.floor(limboStatusData.actualMultiplier),
  ]);

  useEffect(() => {
    GetRendomFiveData();
  }, []);

  const GetRendomFiveData = async () => {
    await getGameRandomFiveData({ id: id })
      .then((response) => {
        console.log("resssss", response);

        setTopXData(response?.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    if (limboStatusData?.actualMultiplier) {
      let currentMultiplier = 1.0;
      const targetMultiplier = parseFloat(limboStatusData.actualMultiplier);

      const interval = setInterval(() => {
        if (currentMultiplier < targetMultiplier) {
          currentMultiplier += 0.01; // Increment by 0.01
          setDisplayedMultiplier(currentMultiplier.toFixed(2));
        } else {
          clearInterval(interval);
        }
      }, 5);
      return () => clearInterval(interval);
    }
  }, [limboStatusData?.actualMultiplier]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    let updatedValues = { ...values };

    if (name === "multiplier") {
      const winchance = (1 / value) * 100;
      updatedValues = {
        ...values,
        multiplier: value,
        winchance: winchance.toFixed(2),
      };
    } else if (name === "winchance") {
      const multiplier = 1 / (value / 100);
      updatedValues = {
        ...values,
        winchance: value,
        multiplier: multiplier.toFixed(2),
      };
    }
    dispatch(setValues(updatedValues));
  };

  const getLastValueColor = () => {
    return Math.floor(limboStatusData?.actualMultiplier) ===
      values?.multiplier ||
      Math.floor(limboStatusData?.actualMultiplier) > values?.multiplier
      ? "text-green-500"
      : Math.floor(limboStatusData?.actualMultiplier) < values?.multiplier
      ? "text-red-500"
      : "text-white";
  };

  return (
    <div className="xl:w-[52rem] lg:w-[37rem] h-full flex flex-col justify-center select-none relative bg-[#0f212e] rounded-tr-lg">
      <div className="mt-4 flex justify-end space-x-2 text-black text-xs font-semibold pr-3">
        {topXData?.length > 0 &&
          [...topXData].reverse()?.map((item, index) => {
            return (
              <div key={index}>
                <button
                  className={`p-2.5 ${
                    limboStatusData.selectedMultiplier <
                    limboStatusData.actualMultiplier
                      ? "bg-[#1fff20]"
                      : "bg-white"
                  } rounded-full`}
                >{`${item?.multiplier}x`}</button>
              </div>
            );
          })}
        <button className="px-2.5 py-2.5 text-lg bg-[#4d718768] font-semibold hover:bg-[#9abfd668] rounded-full">
          <IoIosTrendingUp color="white" />
        </button>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <p className={`text-9xl font-bold ${getLastValueColor()}`}>
          {displayedMultiplier}x
        </p>
      </div>

      <div className="pb-3">
        <div className="flex justify-around bg-[#213743] mx-5 px-2 pt-1 pb-4">
          <div>
            <div className="text-[#b1bad3] font-semibold my-1">
              <label>Target Multiplier</label>
            </div>
            <div className="flex relative">
              <div className="cursor-text absolute flex right-4 translate-y-[4rem] pointer-events-none z-2">
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div>
              <input
                className="w-[23.5rem] pr-9 pl-2 py-2.5 border border-[#b1bad3] rounded-md text-white bg-[#0f212e]"
                type="number"
                placeholder="0.00"
                step="0.01"
                name="multiplier"
                min={1.0}
                max={99.99}
                value={values?.multiplier}
                onChange={(e) => handleOnChange(e)}
              />
            </div>
          </div>
          <div>
            <div className="text-[#b1bad3] font-semibold my-1">
              <label>Win Chance</label>
            </div>
            <div className="flex">
              <div className="cursor-text absolute flex top-1/2 left-96 translate-y-[4rem] pointer-events-none z-2">
                <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
              </div>
              <input
                className="w-[23.5rem] pr-9 pl-2 py-2.5 border border-[#b1bad3] rounded-md text-white bg-[#0f212e]"
                type="number"
                placeholder="0.00"
                step="0.01"
                name="winchance"
                value={values?.winchance} // Calculate winchance if multiplier exists
                onChange={(e) => handleOnChange(e)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LimboGameContent;
