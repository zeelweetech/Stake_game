import React from "react";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

function CrashGameSidebar() {
  return (
    <div className="w-80 flex flex-col p-3 bg-[#213743]">
      <div className="flex overflow-x-auto overflow-y-hidden touch-scroll transform translate-z-0">
        <div className="bg-[#0f212e] flex grow rounded-full p-1.5 flex-shrink-0">
          <div className="flex grow ">
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
            <input className="rounded-tr-none rounded-br-none pr-2 p-2 p-spacingEm-0-5 w-full text-white bg-[#0f212e] border border-solid border-gray-500 shadow-none tracking-input" />
          </div>
          <div className="inline-flex">
            <button className="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-grey-400 text-white betterhover:hover:bg-grey-300 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none py-[0.8125rem] px-[1rem] shadow-none">
              1/2
            </button>
            <div className="relative">
              <div className="absolute w-[2px] left-[-1px] top-[25%] bottom-[25%] bg-input-button-divider"></div>
            </div>
            <button className="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-grey-400 text-white betterhover:hover:bg-grey-300 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none py-[0.8125rem] px-[1rem] shadow-none">
              2x
            </button>
          </div>
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
