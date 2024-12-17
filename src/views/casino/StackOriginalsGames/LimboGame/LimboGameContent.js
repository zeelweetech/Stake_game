import React, { useEffect, useState } from "react";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { LimboSocket } from "../../../../socket";
import { useDispatch, useSelector } from "react-redux";
import {
  setLimboStatusData,
  setStopAutoBet,
  setValues,
} from "../../../../features/casino/limboSlice";
import {
  getGameRandomFiveData,
  getRandomFiveData,
} from "../../../../services/CasinoServices";
import { IoIosTrendingUp } from "react-icons/io";
import { useParams } from "react-router-dom";
import { setWallet } from "../../../../features/auth/authSlice";
import { decodedToken } from "../../../../resources/utility";

function LimboGameContent() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const decoded = decodedToken();
  const [displayedMultiplier, setDisplayedMultiplier] = useState(1.0);
  const { values, limboStatusData } = useSelector((state) => state.limboGame);
  const [topXData, setTopXData] = useState([]);

  useEffect(() => {
    LimboSocket.emit("joinGame", {
      userId: decoded?.userId,
      gameId: id,
    });
  }, [])

  LimboSocket.on("limbobetResult", (data) => {
    dispatch(setLimboStatusData(data));
  });

  LimboSocket.on("walletBalance", (data) => {
    dispatch(setWallet(data?.walletBalance));
  });

  LimboSocket.on("autoBetStop", (data) => {
    dispatch(setStopAutoBet(false));
  })

  useEffect(() => {
    GetRendomFiveData();
  }, []);

  const GetRendomFiveData = async () => {
    await getGameRandomFiveData({ id: id })
      .then((response) => {
        setTopXData(response?.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    if (limboStatusData?.actualMultiplier) {
      const targetMultiplier = parseFloat(limboStatusData.actualMultiplier);
      const totalDuration = 1000;
      const incrementCount = totalDuration / 3;
      const incrementValue = targetMultiplier / incrementCount;

      let currentMultiplier = 1.0;
      const interval = setInterval(() => {
        if (currentMultiplier < targetMultiplier) {
          currentMultiplier += incrementValue;
          setDisplayedMultiplier(Number(currentMultiplier.toFixed(2)));
          if (displayedMultiplier === limboStatusData.actualMultiplier) {
          }
        } else {
          setDisplayedMultiplier(targetMultiplier.toFixed(2));
          clearInterval(interval);
          GetRendomFiveData()

          LimboSocket.emit("betCompleted", {
            betId: limboStatusData?.betId,
            userId: decoded?.userId,
          });
        }
      }, 3);

      if (limboStatusData?.autoBetRound === 1) {
        dispatch(setStopAutoBet(false));
      }

      return () => clearInterval(interval);
    }
  }, [limboStatusData?.actualMultiplier]);

  // useEffect(() => {
  //   if (limboStatusData?.actualMultiplier) {
  //     const targetMultiplier = parseFloat(limboStatusData.actualMultiplier);
  //     const incrementCount = 50; // Set the number of increments for smoother transition (e.g., 50 steps)
  //     const incrementValue = targetMultiplier / incrementCount;

  //     let currentMultiplier = 1.0;
  //     const interval = setInterval(() => {
  //       if (currentMultiplier < targetMultiplier) {
  //         currentMultiplier += incrementValue;
  //         setDisplayedMultiplier(currentMultiplier.toFixed(2));
  //       } else {
  //         clearInterval(interval);
  //       }
  //     }, 5); 

  //     return () => clearInterval(interval);
  //   }
  // }, [limboStatusData?.actualMultiplier]);

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
    if (displayedMultiplier === 1.0) {
      return "text-white";
    }
    const targetMultiplier = parseFloat(values?.multiplier || 2);
    const actualMultiplier = parseFloat(limboStatusData?.actualMultiplier);

    if (Math.floor(displayedMultiplier) === Math.floor(actualMultiplier)) {
      if (actualMultiplier >= targetMultiplier) {
        return "text-green-500";
      }
      else {
        return "text-red-500";
      }
    }
    return "text-white";
  };

  return (
    <div className="xl:w-[52rem] xl:mx-0 lg:w-[41rem] lg:mx-0 md:mx-40  max-sm:mx-3 h-full  flex flex-col justify-center select-none relative bg-[#0f212e]  rounded-t-lg">
      <div className="mt-4 flex justify-end space-x-2 text-black text-xs font-semibold pr-3">
        {topXData?.length > 0 &&
          [...topXData].reverse()?.map((item, index) => {
            return (
              <div key={index}>
                <button
                  className={`p-2.5 ${item?.isWin === true ? "bg-[#1fff20]" : "bg-white"
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
        <p className={`xl:text-9xl lg:text-9xl md:text-8xl text-8xl font-bold ${getLastValueColor()}`}>
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
              {/* <div className="cursor-text absolute flex right-4 translate-y-[4rem] pointer-events-none z-2">
                <RiMoneyRupeeCircleFill
                  color="yellow"
                  className="text-xl -mt-[3.2rem]"
                />
              </div> */}
              <input
                className="w-[23.5rem] xl:w-96 lg:w-64 md:w-40 max-sm:w-36 max-[320px]:w-32 pr-1.5 pl-2 py-2 border-2 border-[#2f4553] hover:border-[#557086] focus:border-[#557086]  rounded-md text-white bg-[#0f212e] outline-none"
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
              {/* <div className="cursor-text absolute flex right-4 translate-y-[4rem] pointer-events-none z-2">
                <RiMoneyRupeeCircleFill
                  color="yellow"
                  className="text-xl -mt-[3.3rem] mr-8"
                />
              </div> */}
              <input
                className="w-[23.5rem] xl:w-96 lg:w-64 md:w-40 max-sm:w-36 max-[320px]:w-32 pr-1.5 pl-2 py-2 border-2 border-[#2f4553] hover:border-[#557086] focus:border-[#557086] rounded-md text-white bg-[#0f212e] outline-none"
                type="number"
                placeholder="0.00"
                step="0.01"
                min={0}
                name="winchance"
                value={values?.winchance}
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
