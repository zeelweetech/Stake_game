import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Divider from "@mui/material/Divider";

function Fairness({ setShowFairness }) {
  const [activeButton, setActiveButton] = useState("seeds");
  const [selectedGame, setSelectedGame] = useState("mines");
  const [value, setValue] = useState(0);
  const [activeTooltip, setActiveTooltip] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleIncrement = () => {
    setValue((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setValue((prev) => prev - 1);
  };

  const handleCopy = (id) => {
    navigator.clipboard.value.writeText("");
    setActiveTooltip(id);
    setTimeout(() => {
      setActiveTooltip(0);
    }, 2000);
  };

  const handleFairnessClose = () => {
    setShowFairness(false);
  };

  const isScreenSmall = window.innerWidth < 768;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleFairnessClose}
    >
      <div
        className={`bg-scroll flex justify-center items-center z-10 absolute xl:-mt-[0rem] lg:mt-[3rem] md:-mt-[3rem] max-sm:mx-5 mt-[3rem] ${
          isScreenSmall
            ? "md:-mt-[47rem] flex justify-center items-center -mt-[20rem]"
            : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#1a2c38] text-white rounded-t-xl shadow-lg w-full relative">
          <div className="flex justify-between items-center p-4 h-16 rounded-t-lg">
            <h2 className="text-base font-semibold flex justify-center items-center gap-2 select-none">
              <span>
                <svg
                  className="w-4 h-4 text-[#b1bad3]"
                  fill="currentColor"
                  viewBox="0 0 64 64"
                >
                  <path d="M54.727 15.006h3.12V8.37H34.654V2.61H27.99v5.758H4.746v6.637h4.505L0 37.452c0 7.037 5.704 12.741 12.741 12.741 7.038 0 12.741-5.704 12.741-12.741l-9.25-22.446h11.73v39.745h-9.303v6.638h25.165V54.75h-9.171V15.006h13.115l-9.25 22.446c0 7.037 5.703 12.741 12.74 12.741C58.297 50.193 64 44.489 64 37.452l-9.273-22.446ZM5.334 37.452l7.411-17.887 7.357 17.887H5.334Zm38.492 0 7.357-17.887 7.463 17.887h-14.82Z" />
                </svg>
              </span>
              Fairness
            </h2>
            <button
              className="text-gray-400 hover:text-white w-4 h-4 p-4 flex justify-center items-center"
              aria-label="Close"
              onClick={handleFairnessClose}
            >
              ✖
            </button>
          </div>

          <div className="flex justify-center items-center h-[3.375rem]">
            <div className="flex space-x-[0.3125rem] bg-[#0f212e] p-[5px] h-[3.375rem] rounded-full text-sm">
              <button
                onClick={() => setActiveButton("seeds")}
                className={`py-[0.9375rem] px-[1.25rem] w-[4.9161rem] h-[2.75rem] rounded-full flex justify-center items-center font-semibold ${
                  activeButton === "seeds"
                    ? "text-white bg-[#2f4553]"
                    : "hover:bg-[#2f4553]"
                }`}
              >
                Seeds
              </button>
              <button
                onClick={() => setActiveButton("verify")}
                className={`py-[0.9375rem] px-[1.25rem] w-[4.749rem] h-[2.75rem] rounded-full flex justify-center items-center font-semibold ${
                  activeButton === "verify"
                    ? "text-white bg-[#2f4553]"
                    : "hover:bg-[#2f4553]"
                }`}
              >
                Verify
              </button>
            </div>
          </div>

          {activeButton === "seeds" && (
            <div className="p-4 md:w-[31.25rem] md:h-[16.6rem] w-[20rem]">
              <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mb-1">
                <label>Active Client Seed</label>
              </div>
              <div className="flex group">
                <div className="relative flex">
                  <input
                    type="text"
                    value="5937139efe8bdf83"
                    disabled
                    className="md:w-[26.2rem] w-[15rem] p-[0.4375rem] rounded-l text-white border-2 bg-[#2F4553] group-hover:border-[#557086] border-[#2F4553] focus:outline-none"
                  />
                </div>
                <div className="relative group">
                  <button
                    className="py-[0.8125rem] px-[1rem] h-[2.7rem] w-[2.875rem] rounded-r flex justify-center items-center text-sm font-bold bg-[#2F4553] hover:bg-[#557086]"
                    onClick={() => handleCopy(1)}
                  >
                    <span>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="w-4 h-4"
                      >
                        <path d="M61.334 64H16V12.986h45.334V64ZM2.666 0v45.466H9.28V6.506h38.96V0H2.666Z" />
                      </svg>
                    </span>
                  </button>
                  {activeTooltip === 1 && (
                    <div className="absolute left-1/2 w-20 h-10 -mt-24 transform -translate-x-1/2 bg-white text-[#0f212e] text-sm font-semibold px-2 py-1 rounded opacity-100 pointer-events-auto transition-opacity duration-200 flex justify-center items-center">
                      Copied!
                      <div className="tooltip-arrow w-3 h-3 bg-white rotate-45 absolute bottom-[-5px] left-1/2 transform -translate-x-1/2"></div>
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mt-3 mb-1">
                  <label>Active Server Seed (Hashed)</label>
                </div>
                <div className="flex group">
                  <div className="relative flex">
                    <input
                      type="text"
                      value="5937139efe8bdf83"
                      disabled
                      className="md:w-[26.2rem] w-[15rem] p-[0.4375rem] rounded-l text-white border-2 bg-[#2F4553] group-hover:border-[#557086] border-[#2F4553] focus:outline-none"
                    />
                  </div>
                  <div className="relative group">
                    <button
                      className="py-[0.8125rem] px-[1rem] h-[2.7rem] w-[2.875rem] rounded-r flex justify-center items-center text-sm font-bold bg-[#2F4553] hover:bg-[#557086]"
                      onClick={() => handleCopy(2)}
                    >
                      <span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 64 64"
                          className="w-4 h-4"
                        >
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
              <div className="mb-6">
                <div className="text-[#b1bad3] flex justify-between font-semibold text-ss mt-3 mb-1  ">
                  <label>Total Bets Made With Pair</label>
                </div>
                <div className="relative flex">
                  <input
                    type="number"
                    value="0"
                    disabled
                    className="md:w-[29.25rem] h-[2.4375rem] w-[18rem] p-[0.4375rem] rounded text-white border-2 bg-[#2F4553] hover:border-[#557086] border-[#2F4553] focus:outline-none"
                  />
                </div>
              </div>
              <div className="bg-[#0F212E] rounded-b-xl p-4 md:w-[31.25rem] w-[20rem] h-[13.3rem] -ml-4 -mt-4">
                <h1 className="flex justify-center items-center font-semibold">
                  Rotate Seed Pair
                </h1>
                <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mt-3 mb-1">
                  <label>
                    New Client Seed <span className="text-[#ED4163]">*</span>
                  </label>
                </div>

                <div className="relative flex rounded">
                  <input
                    type="text"
                    className="md:w-[22.2842rem] w-[15rem] h-[2.5rem] p-[0.4375rem] rounded-l text-white border-2 bg-[#0F212E] border-[#2f4553] hover:border-[#557086] focus:outline-none"
                  />
                  <button className=" md:w-[7.0925rem] w-[5.0925rem] h-[2.5rem] bg-[#00E701] hover:bg-[#1fff20] rounded-r text-black py-[0.8125rem] px-[1rem] flex justify-center items-center font-semibold  ">
                    Change
                  </button>
                </div>
                <div className="text-[#b1bad3] flex justify-between font-semibold text-sm mt-3 mb-1">
                  <label>Next Server Seed (Hashed)</label>
                </div>
                <div className="flex group">
                  <div className="relative flex">
                    <input
                      type="text"
                      value="5937139efe8bdf83"
                      disabled
                      className="md:w-[26.2rem] w-[15rem] p-[0.4375rem] rounded-l text-white border-2 bg-[#2F4553] group-hover:border-[#557086] border-[#2F4553] focus:outline-none"
                    />
                  </div>
                  <div className="relative group">
                    <button
                      className="py-[0.8125rem] px-[1rem] h-[2.7rem] w-[2.875rem] rounded-r flex justify-center items-center text-sm font-bold bg-[#2F4553] hover:bg-[#557086]"
                      onClick={() => handleCopy(3)}
                    >
                      <span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 64 64"
                          className="w-4 h-4"
                        >
                          <path d="M61.334 64H16V12.986h45.334V64ZM2.666 0v45.466H9.28V6.506h38.96V0H2.666Z" />
                        </svg>
                      </span>
                    </button>
                    {activeTooltip === 3 && (
                      <div className="absolute left-1/2 w-20 h-10 -mt-24 transform -translate-x-1/2 bg-white text-[#0f212e] text-sm font-semibold px-2 py-1 rounded opacity-100 pointer-events-auto transition-opacity duration-200 flex justify-center items-center">
                        Copied!
                        <div className="tooltip-arrow w-3 h-3 bg-white rotate-45 absolute bottom-[-5px] left-1/2 transform -translate-x-1/2"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          <div>
            {activeButton === "verify" && (
              <div className="flex justify-center w-full">
                <div className="w-full overflow-auto xl:max-h-[530px] lg:max-h-[400px] md:max-h-[400px] max-h-[350px]">
                  <div className="flex flex-col items-center bg-[#1a2c38] p-4 text-white w-full">
                    <div className="flex flex-col items-center p-4 justify-center md:w-[29.25rem] md:h-[12.5rem] w-full h-[12.5rem] rounded-md border-2 border-dotted border-[#2f4553]">
                      <p className="text-gray-400 text-sm select-none">
                        More inputs are required to verify result
                      </p>
                      <style>
                        {`
                            @keyframes spin {
                              0%, to { transform: translateY(-50%) scale(.4) }
                              25% { transform: translate(-1.15rem, -50%) scale(1) }
                              50% { transform: translateY(-50%) scale(1.5) }
                              75% { transform: translate(1.15rem, -50%) scale(1) }
                            }
                            .spin-one {
                              animation: spin 0.8s infinite linear;
                            }
                            .spin-two {
                              animation: spin 0.8s -.4s infinite linear;
                            }
                          `}
                      </style>
                      <div className="flex mt-5">
                        <div className="relative w-3 h-3 rounded-full bg-current spin-one"></div>
                        <div className="relative w-3 h-3 rounded-full bg-current spin-two"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-4 bg-[#0f212E] overflow-auto max-h-screen">
                    <label className="block mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                      Game
                    </label>
                    <select
                      className="w-full p-2.5 font-semibold bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                      value={selectedGame}
                      onChange={(e) => setSelectedGame(e.target.value)}
                    >
                      <option value="mines">Mines</option>
                      <option value="crash">Crash</option>
                      <option value="keno">Keno</option>
                      <option value="dragontower">DragonTower</option>
                      <option value="plinko">Plinko</option>
                      <option value="limbo">Limbo</option>
                      <option value="wheel">Wheel</option>
                      <option value="slide">Slide</option>
                    </select>

                    {selectedGame === "mines" ? (
                      <>
                        <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                          Client Seed
                        </label>
                        <input
                          type="text"
                          className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                        />

                        <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                          Server Seed
                        </label>
                        <input
                          type="text"
                          className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                        />

                        <label className="block mt-2 mb-2 text-sm font-medium text-[#B1BaD3] select-none">
                          Nonce
                        </label>
                        <div className="flex rounded group bg-[#2F4553]">
                          <input
                            className="w-full p-2.5 rounded-s-md text-white border-2 border-[#2F4553] group-hover:border-[#557086] bg-[#0f212e] focus:outline-none"
                            type="number"
                            value={value}
                            onChange={handleChange}
                          />
                          <button
                            className="w-16 hover:bg-[#557086]"
                            onClick={handleDecrement}
                          >
                            <KeyboardArrowDownIcon fontSize="small" />
                          </button>
                          <Divider
                            flexItem
                            orientation="vertical"
                            sx={{
                              my: 1.5,
                              backgroundColor: "#1A2c38",
                              width: "2px",
                            }}
                          />
                          <button
                            className="w-16 hover:bg-[#557086]"
                            onClick={handleIncrement}
                          >
                            <KeyboardArrowUpIcon fontSize="small" />
                          </button>
                        </div>
                        <label className="block mt-2 mb-2 text-sm font-medium text-[#B1BaD3] select-none">
                          Mines
                        </label>
                        <select className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="18">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                        </select>
                        <div className="text-[#B1BaD3] text-sm font-semibold hover:text-white flex justify-center mt-2">
                          View Calculation Breakdown
                        </div>
                      </>
                    ) : selectedGame === "crash" ? (
                      <>
                        <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                          Hash
                        </label>
                        <input
                          type="text"
                          className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                        />
                        <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                          Seed
                        </label>
                        <input
                          type="text"
                          className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                        />
                        <div className="text-[#B1BaD3] text-sm font-semibold hover:text-white flex justify-center mt-2">
                          View Calculation Breakdown
                        </div>
                      </>
                    ) : selectedGame === "plinko" ? (
                      <>
                        <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                          Client Seed
                        </label>
                        <input
                          type="text"
                          className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                        />

                        <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                          Server Seed
                        </label>
                        <input
                          type="text"
                          className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                        />

                        <label className="block mt-2 mb-2 text-sm font-medium text-[#B1BaD3] select-none">
                          Nonce
                        </label>
                        <div className="flex rounded group bg-[#2F4553]">
                          <input
                            className="w-full p-2.5 rounded-s-md text-white border-2 border-[#2F4553] group-hover:border-[#557086] bg-[#0f212e] focus:outline-none"
                            type="number"
                            value={value}
                            onChange={handleChange}
                          />
                          <button
                            className="w-16 hover:bg-[#557086]"
                            onClick={handleDecrement}
                          >
                            <KeyboardArrowDownIcon fontSize="small" />
                          </button>
                          <Divider
                            flexItem
                            orientation="vertical"
                            sx={{
                              my: 1.5,
                              backgroundColor: "#1A2c38",
                              width: "2px",
                            }}
                          />
                          <button
                            className="w-16 hover:bg-[#557086]"
                            onClick={handleIncrement}
                          >
                            <KeyboardArrowUpIcon fontSize="small" />
                          </button>
                        </div>

                        <label className="block mt-2 mb-2 text-sm font-medium hover:text-white text-[#B1BaD3] select-none">
                          Risk
                        </label>
                        <select className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm">
                          <option value="low">Low</option>
                          <option value="mediun">Mediun</option>
                          <option value="high">High</option>
                        </select>

                        <label className="block mt-2 mb-2 text-sm font-medium text-[#B1BaD3] select-none">
                          Rows
                        </label>
                        <select className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm">
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                        </select>
                        <div className="text-[#B1BaD3] text-sm hover:text-white font-semibold flex justify-center mt-2">
                          View Calculation Breakdown
                        </div>
                      </>
                    ) : selectedGame === "wheel" ? (
                      <>
                        <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                          Client Seed
                        </label>
                        <input
                          type="text"
                          className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                        />

                        <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                          Server Seed
                        </label>
                        <input
                          type="text"
                          className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                        />

                        <label className="block mt-2 mb-2 text-sm font-medium text-[#B1BaD3] select-none">
                          Nonce
                        </label>
                        <div className="flex rounded group bg-[#2F4553]">
                          <input
                            className="w-full p-2.5 rounded-s-md text-white border-2 border-[#2F4553] group-hover:border-[#557086] bg-[#0f212e] focus:outline-none"
                            type="number"
                            value={value}
                            onChange={handleChange}
                          />
                          <button
                            className="w-16 hover:bg-[#557086]"
                            onClick={handleDecrement}
                          >
                            <KeyboardArrowDownIcon fontSize="small" />
                          </button>
                          <Divider
                            flexItem
                            orientation="vertical"
                            sx={{
                              my: 1.5,
                              backgroundColor: "#1A2c38",
                              width: "2px",
                            }}
                          />
                          <button
                            className="w-16 hover:bg-[#557086]"
                            onClick={handleIncrement}
                          >
                            <KeyboardArrowUpIcon fontSize="small" />
                          </button>
                        </div>
                        <label className="block mt-2 mb-2 text-sm font-medium text-[#B1BaD3] select-none">
                          Risk
                        </label>
                        <select className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm">
                          <option>Low</option>
                          <option value="mediun">Mediun</option>
                          <option value="high">High</option>
                        </select>

                        <label className="block mt-2 mb-2 text-sm font-medium text-[#B1BaD3] select-none">
                          Segment
                        </label>
                        <select className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm">
                          <option value="10">10</option>
                          <option value="20">20</option>
                          <option value="30">30</option>
                          <option value="40">40</option>
                          <option value="50">50</option>
                        </select>
                        <div className="text-[#B1BaD3] hover:text-white text-sm font-semibold flex justify-center mt-2">
                          View Calculation Breakdown
                        </div>
                      </>
                    ) : selectedGame === "dragontower" ? (
                      <>
                        <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                          Client Seed
                        </label>
                        <input
                          type="text"
                          className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                        />

                        <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                          Server Seed
                        </label>
                        <input
                          type="text"
                          className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                        />

                        <label className="block mt-2 mb-2 text-sm font-medium text-[#B1BaD3] select-none">
                          Nonce
                        </label>
                        <div className="flex rounded group bg-[#2F4553]">
                          <input
                            className="w-full p-2.5 rounded-s-md text-white border-2 border-[#2F4553] group-hover:border-[#557086] bg-[#0f212e] focus:outline-none"
                            type="number"
                            value={value}
                            onChange={handleChange}
                          />
                          <button
                            className="w-16 hover:bg-[#557086]"
                            onClick={handleDecrement}
                          >
                            <KeyboardArrowDownIcon fontSize="small" />
                          </button>
                          <Divider
                            flexItem
                            orientation="vertical"
                            sx={{
                              my: 1.5,
                              backgroundColor: "#1A2c38",
                              width: "2px",
                            }}
                          />
                          <button
                            className="w-16 hover:bg-[#557086]"
                            onClick={handleIncrement}
                          >
                            <KeyboardArrowUpIcon fontSize="small" />
                          </button>
                        </div>
                        <label className="block mt-2 mb-2 text-sm font-medium text-[#B1BaD3] select-none">
                          Difficulty
                        </label>
                        <select className="w-full p-2.5 font-semibold bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm">
                          <option value="easy">Easy</option>
                          <option value="mediun">Mediun</option>
                          <option value="hard">Hard</option>
                          <option value="expert">Expert</option>
                          <option value="master">Master</option>
                        </select>
                        <div className="text-[#B1BaD3] hover:text-white text-sm font-semibold flex justify-center mt-2">
                          View Calculation Breakdown
                        </div>
                      </>
                    ) : selectedGame === "slide" ? (
                      <>
                        <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                          Hash
                        </label>
                        <input
                          type="text"
                          className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                        />
                        <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                          Seed
                        </label>
                        <input
                          type="text"
                          className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                        />
                        <div className="text-[#B1BaD3] hover:text-white text-sm font-semibold flex justify-center mt-2">
                          View Calculation Breakdown
                        </div>
                      </>
                    ) : (
                      <>
                        <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                          Client Seed
                        </label>
                        <input
                          type="text"
                          className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                        />

                        <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                          Server Seed
                        </label>
                        <input
                          type="text"
                          className="w-full p-2.5 bg-[#0F212E] border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                        />

                        <label className="block mt-2 mb-2 text-sm font-medium text-[#B1BaD3] select-none">
                          Nonce
                        </label>
                        <div className="flex rounded group bg-[#2F4553]">
                          <input
                            className="w-full p-2.5 rounded-s-md text-white border-2 border-[#2F4553] group-hover:border-[#557086] bg-[#0f212e] focus:outline-none"
                            type="number"
                            value={value}
                            onChange={handleChange}
                          />
                          <button
                            className="w-16 hover:bg-[#557086]"
                            onClick={handleDecrement}
                          >
                            <KeyboardArrowDownIcon fontSize="small" />
                          </button>
                          <Divider
                            flexItem
                            orientation="vertical"
                            sx={{
                              my: 1.5,
                              backgroundColor: "#1A2c38",
                              width: "2px",
                            }}
                          />
                          <button
                            className="w-16 hover:bg-[#557086]"
                            onClick={handleIncrement}
                          >
                            <KeyboardArrowUpIcon fontSize="small" />
                          </button>
                        </div>
                        <div className="text-[#B1BaD3] hover:text-white text-sm font-semibold flex justify-center mt-2">
                          View Calculation Breakdown
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fairness;
