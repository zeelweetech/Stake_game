import React, { useState } from "react";
import Overview from "./fairnesspages/Overview"
import Implementation from "./fairnesspages/Implementation"
import Conversions from "./fairnesspages/Conversions"
import GameEvents from "./fairnesspages/GameEvents";
import UnhashServerSeed from "./fairnesspages/UnhashServerSeed";
import Calculation from "./fairnesspages/Calculation";

const Fairness = () => {
  const [activeLink, setActiveLink] = useState("Overview");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const links = [
    { label: "Overview" },
    { label: "Implementation" },
    { label: "Conversions" },
    { label: "Game Events" },
    { label: "Unhash Server Seed" },
    { label: "Calculation" },
  ];

  const renderContent = () => {
    switch (activeLink) {
      case "Overview":
        return <Overview />;
      case "Implementation":
        return <Implementation />;
      case "Conversions":
        return <Conversions />;
      case "Game Events":
        return <GameEvents />
      case "Unhash Server Seed":
        return <UnhashServerSeed />
      case "Calculation":
        return <Calculation />;
      default:
        return null;
    }
  };
  return (
    <>
      <div className="flex flex-col gap-y-6 px-4 xl:px-[2.5294rem] lg:px-[30.72px] md:px-[23.04px]">
        <div className="text-white flex justify-between pt-6 2xl:mx-32">
          <h1 className="text-xl font-semibold flex items-center gap-3 cursor-default">
            <svg
              viewBox="0 0 64 64"
              fill="currentColor"
              className="w-5 h-5 text-[#b1bad3]"
            >
              <path d="M54.727 15.006h3.12V8.37H34.654V2.61H27.99v5.758H4.746v6.637h4.505L0 37.452c0 7.037 5.704 12.741 12.741 12.741 7.038 0 12.741-5.704 12.741-12.741l-9.25-22.446h11.73v39.745h-9.303v6.638h25.165V54.75h-9.171V15.006h13.115l-9.25 22.446c0 7.037 5.703 12.741 12.74 12.741C58.297 50.193 64 44.489 64 37.452l-9.273-22.446ZM5.334 37.452l7.411-17.887 7.357 17.887H5.334Zm38.492 0 7.357-17.887 7.463 17.887h-14.82Z" />
            </svg>
            Provably Fair
          </h1>
        </div>

        <div className="2xl:mx-32 h-full">
          <div className="flex flex-col lg:flex-row justify-center gap-y-2">
            {/* Mobile Dropdown Button */}
            <div className="lg:hidden relative w-full">
              <div className="flex flex-row gap-x-2">
                <button
                  className="bg-[#0f212e] px-5 py-[0.9375rem] rounded"
                  onClick={() => setActiveLink("Overview")}
                >
                  <svg
                    fill="white"
                    viewBox="0 0 64 64"
                    className="w-3.5 h-3.5"
                  >
                    <path d="M36.998 53.995 16 32.998 36.998 12l6.306 6.306L28.61 33l14.694 14.694L36.998 54v-.005Z"></path>
                  </svg>
                </button>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="bg-[#0f212e] text-white font-medium rounded text-sm px-5 py-[0.9375rem] text-center inline-flex items-center"
                  type="button"
                >
                  {activeLink}
                  <svg
                    className={`w-2.5 h-2.5 ms-3 transition-transform text-[#B1BAD3] ${isDropdownOpen ? "rotate-180 hover:text-white" : ""
                      }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </div>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <>
                  <div className="border-x-8 border-x-transparent border-b-[10px] bottom-[-14px] left-32 absolute -translate-x-1/2 border-b-white"></div>
                  <div className="absolute z-10 w-[151px] bg-white divide-y divide-gray-700 rounded shadow mt-3 flex left-14">
                    <ul className="py-1 text-[14px] font-semibold text-[#2F4553]">
                      {links.map((link, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveLink(link.label);
                              setIsDropdownOpen(false);
                            }}
                            className={`block p-[12px] ${activeLink === link.label ? "text-[#1475E1]" : "text-[#2F4553]"
                              }`}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>

                  </div>
                </>
              )}
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block bg-[#0f212e] md:w-[176px] h-full flex-shrink-0 py-2 rounded-md">
              <div className="bg-[#0f212e]">
                {links.map((link, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveLink(link.label)}
                    className={`w-full text-sm p-2 md:px-[1.25rem] md:py-[0.9375rem] cursor-pointer ${activeLink === link.label
                      ? "bg-[#071824] text-white font-bold border-l-[0.1875rem] border-[#1475e1]"
                      : "bg-[#0f212e] text-white font-bold hover:bg-[#071824]"
                      }`}
                  >
                    {link.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:ml-6">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fairness;
