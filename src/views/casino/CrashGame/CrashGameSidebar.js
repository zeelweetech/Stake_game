import React from "react";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

function CrashGameSidebar() {
  return (
    <div className="w-80 flex flex-col p-3 bg-gray-500">
      <div className="flex overflow-x-auto overflow-y-hidden touch-scroll transform translate-z-0">
        <div className="bg-gray-700 flex grow rounded-full p-[5px] flex-shrink-0">
          <div className="flex grow">
            <button>Manual</button>
            <button>Auto</button>
          </div>
        </div>
      </div>
      <label className="flex-col-reverse flex item-start inline-flex relative">
        <div className="w-full flex flex-shrink-0 shadow-white rounded-sm">
          <div className="relative grow w-full flex">
            <div className="cursor-text absolute flex top-1/2 -translate-y-1/2 pointer-events-none z-2">
              <RiMoneyRupeeCircleFill color="yellow" />
            </div>
            <input className="w-full text-white bg-black" />
          </div>
          <div></div>
        </div>
        <span className="w-full inline-flex items-center font-semibold py-0 px-0 pb-2 justify-between">
          <div className="w-full inline-flex">Bet Amount</div>
          <div className="w-1/2 inline-flex item-center text-sm">
            0.0000000 BTC
          </div>
        </span>
      </label>
    </div>
  );
}

export default CrashGameSidebar;
