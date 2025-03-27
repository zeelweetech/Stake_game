import React, { useState } from "react";

const UnhashServerSeed = () => {
    const [activeTooltip, setActiveTooltip] = useState(0);

    const handleCopy = (id) => {
        navigator.clipboard.writeText("");
        setActiveTooltip(id);
        setTimeout(() => {
            setActiveTooltip(0);
        }, 2000);
    };
    return (
        <div className="bg-[#0F212E] p-[24px] rounded-lg w-full top-0">
            {/* Server Seed (Hashed) Input */}
            <label className="text-[#b1bad3] text-sm block pb-1 font-bold">
                Server Seed (Hashed)
            </label>
            <div className="flex ">
                <input
                    type="text"
                    className="w-full bg-[#0F212E] text-white p-[7px] rounded-l outline-none border-2 border-[#2f4553] hover:border-[#557086] focus:border-[#557086] duration-300"
                />
                <button className="inline-flex relative items-center gap-2 justify-center rounded-r font-semibold bg-[#00ff00] text-black hover:text-black text-sm leading-none shadow-md py-[13px] px-[16px] min-w-[12ch]">
                    Unhash
                </button>
            </div>

            {/* Server Seed Output */}
            <label className="text-[#b1bad3] font-bold block text-sm mt-4 pb-1">
                Server Seed
            </label>
            <div className="flex">
                <div className="relative flex w-full">
                    <input
                        type="text"
                        value="N/A"
                        disabled
                        className="w-full p-[7px] rounded-l font-semibold text-white border-2 bg-[#2F4553] hover:border-[#557086] border-[#2F4553] duration-200 focus:outline-none"
                    />
                </div>
                <div className="relative ">
                    <button
                        className="py-[0.8125rem] px-[1rem] h-[2.7rem] w-[2.875rem] rounded-r flex justify-center items-center text-sm font-bold bg-[#2F4553] hover:bg-[#557086]"
                        onClick={() => handleCopy(2)}
                    >
                        <span>
                            <svg fill="white" viewBox="0 0 64 64" className="w-3.5 h-3.5">
                                <path d="M61.334 64H16V12.986h45.334V64ZM2.666 0v45.466H9.28V6.506h38.96V0H2.666Z" />
                            </svg>
                        </span>
                    </button>
                    {activeTooltip === 2 && (
                        <div className="absolute left-1/2 w-20 h-10 -mt-24 transform -translate-x-1/2 bg-white text-[#0f212e] text-sm font-semibold px-2 py-1 rounded opacity-100 pointer-events-auto transition-opacity duration-200 flex justify-center items-center">
                            Copied!
                            <div className="tooltip-arrow w-3 h-3 bg-white rotate-45 absolute bottom-[-5px] left-1/2 transform -translate-x-1/2"></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UnhashServerSeed;
