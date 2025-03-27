import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Divider from "@mui/material/Divider";

const Calculation = () => {
  const [selectedGame, setSelectedGame] = useState("");

  // Single state for all games
  const [gameInputs, setGameInputs] = useState({
    mines: {
      clientSeed: "",
      serverSeed: "",
      nonce: 0
    },
    crash: {
      hash: "",
      seed: ""
    },
    keno: {
      clientSeed: "",
      serverSeed: "",
      nonce: 0
    },
    plinko: {
      clientSeed: "",
      serverSeed: "",
      nonce: 0,
      risk: "low",
      rows: "8"
    },
    wheel: {
      clientSeed: "",
      serverSeed: "",
      nonce: 0,
      risk: "low",
      segments: "10"
    },
    dragontower: {
      clientSeed: "",
      serverSeed: "",
      nonce: 0,
      difficulty: "easy"
    },
    slide: {
      hash: "",
      seed: ""
    },
    limbo: {
      clientSeed: "",
      serverSeed: "",
      nonce: 0
    }
  });

  // Generic handler for input changes
  const handleInputChange = (game, field, value) => {
    setGameInputs(prev => ({
      ...prev,
      [game]: {
        ...prev[game],
        [field]: value
      }
    }));
  };

  // Generic handlers for nonce increment/decrement
  const handleNonceIncrement = (game) => {
    setGameInputs(prev => ({
      ...prev,
      [game]: {
        ...prev[game],
        nonce: prev[game].nonce + 1
      }
    }));
  };

  const handleNonceDecrement = (game) => {
    setGameInputs(prev => ({
      ...prev,
      [game]: {
        ...prev[game],
        nonce: prev[game].nonce - 1
      }
    }));
  };

  return (
    <div className="flex justify-center w-full">
      <div className="w-full bg-[#0f212E] rounded-lg">
        <div className="w-full p-[24px]">
          <div className="xl:mx-[175px] lg:mx-[25.281px] md:mx-[6.96875px]">
            <label className="block mb-2 text-sm font-medium select-none text-[#B1BaD3]">
              Game
            </label>
            <select
              className="w-full pl-[7px] py-[7px] pr-[28px] font-semibold bg-[#0F212E] border-2 text-white hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
              value={selectedGame}
              onChange={(e) => setSelectedGame(e.target.value)}
            >
              <option></option>
              <option value="mines">mines</option>
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
                  value={gameInputs.mines.clientSeed}
                  onChange={(e) => handleInputChange('mines', 'clientSeed', e.target.value)}
                  className="w-full p-2.5 bg-[#0F212E] text-white border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                />

                <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                  Server Seed
                </label>
                <input
                  type="text"
                  value={gameInputs.mines.serverSeed}
                  onChange={(e) => handleInputChange('mines', 'serverSeed', e.target.value)}
                  className="w-full p-2.5 bg-[#0F212E] text-white border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                />

                <label className="block mt-2 mb-2 text-sm font-medium text-[#B1BaD3] select-none">
                  Nonce
                </label>
                <div className="flex rounded group bg-[#2F4553]">
                  <input
                    className="w-full p-2.5 rounded-s-md text-white border-2 border-[#2F4553] group-hover:border-[#557086] bg-[#0f212e] focus:outline-none"
                    type="number"
                    value={gameInputs.mines.nonce}
                    onChange={(e) => handleInputChange('mines', 'nonce', Number(e.target.value))}
                  />
                  <button
                    className="w-16 hover:bg-[#557086] text-white"
                    onClick={() => handleNonceDecrement('mines')}
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
                    className="w-16 hover:bg-[#557086] text-white"
                    onClick={() => handleNonceIncrement('mines')}
                  >
                    <KeyboardArrowUpIcon fontSize="small" />
                  </button>
                </div>
              </>
            ) : selectedGame === "crash" ? (
              <>
                <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                  Hash
                </label>
                <input
                  type="text"
                  value={gameInputs.crash.hash}
                  onChange={(e) => handleInputChange('crash', 'hash', e.target.value)}
                  className="w-full p-2.5 bg-[#0F212E] text-white border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                />
                <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                  Seed
                </label>
                <input
                  type="text"
                  value={gameInputs.crash.seed}
                  onChange={(e) => handleInputChange('crash', 'seed', e.target.value)}
                  className="w-full p-2.5 bg-[#0F212E] text-white border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                />
              </>
            ) : selectedGame === "keno" ? (
              <>
                <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                  Client Seed
                </label>
                <input
                  type="text"
                  value={gameInputs.keno.clientSeed}
                  onChange={(e) => handleInputChange('keno', 'clientSeed', e.target.value)}
                  className="w-full p-2.5 bg-[#0F212E] text-white border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                />

                <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                  Server Seed
                </label>
                <input
                  type="text"
                  value={gameInputs.keno.serverSeed}
                  onChange={(e) => handleInputChange('keno', 'serverSeed', e.target.value)}
                  className="w-full p-2.5 bg-[#0F212E] text-white border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                />

                <label className="block mt-2 mb-2 text-sm font-medium text-[#B1BaD3] select-none">
                  Nonce
                </label>
                <div className="flex rounded group bg-[#2F4553]">
                  <input
                    className="w-full p-2.5 rounded-s-md text-white border-2 border-[#2F4553] group-hover:border-[#557086] bg-[#0f212e] focus:outline-none"
                    type="number"
                    value={gameInputs.keno.nonce}
                    onChange={(e) => handleInputChange('keno', 'nonce', Number(e.target.value))}
                  />
                  <button
                    className="w-16 hover:bg-[#557086] text-white"
                    onClick={() => handleNonceDecrement('keno')}
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
                    className="w-16 hover:bg-[#557086] text-white"
                    onClick={() => handleNonceIncrement('keno')}
                  >
                    <KeyboardArrowUpIcon fontSize="small" />
                  </button>
                </div>
              </>
            ) : selectedGame === "plinko" ? (
              <>
                <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                  Client Seed
                </label>
                <input
                  type="text"
                  value={gameInputs.plinko.clientSeed}
                  onChange={(e) => handleInputChange('plinko', 'clientSeed', e.target.value)}
                  className="w-full p-2.5 bg-[#0F212E] text-white border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                />

                <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                  Server Seed
                </label>
                <input
                  type="text"
                  value={gameInputs.plinko.serverSeed}
                  onChange={(e) => handleInputChange('plinko', 'serverSeed', e.target.value)}
                  className="w-full p-2.5 bg-[#0F212E] text-white border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                />

                <label className="block mt-2 mb-2 text-sm font-medium text-[#B1BaD3] select-none">
                  Nonce
                </label>
                <div className="flex rounded group bg-[#2F4553]">
                  <input
                    className="w-full p-2.5 rounded-s-md text-white border-2 border-[#2F4553] group-hover:border-[#557086] bg-[#0f212e] focus:outline-none"
                    type="number"
                    value={gameInputs.plinko.nonce}
                    onChange={(e) => handleInputChange('plinko', 'nonce', Number(e.target.value))}
                  />
                  <button
                    className="w-16 hover:bg-[#557086] text-white"
                    onClick={() => handleNonceDecrement('plinko')}
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
                    className="w-16 hover:bg-[#557086] text-white"
                    onClick={() => handleNonceIncrement('plinko')}
                  >
                    <KeyboardArrowUpIcon fontSize="small" />
                  </button>
                </div>

                <label className="block mt-2 mb-2 text-sm font-medium hover:text-white text-[#B1BaD3] select-none">
                  Risk
                </label>
                <select
                  className="w-full p-2.5 bg-[#0F212E] text-white border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                  value={gameInputs.plinko.risk}
                  onChange={(e) => handleInputChange('plinko', 'risk', e.target.value)}
                >
                  <option value="low">Low</option>
                  <option value="mediun">Mediun</option>
                  <option value="high">High</option>
                </select>

                <label className="block mt-2 mb-2 text-sm font-medium text-[#B1BaD3] select-none">
                  Rows
                </label>
                <select
                  className="w-full p-2.5 bg-[#0F212E] text-white border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                  value={gameInputs.plinko.rows}
                  onChange={(e) => handleInputChange('plinko', 'rows', e.target.value)}
                >
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
              </>
            ) : selectedGame === "wheel" ? (
              <>
                <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                  Client Seed
                </label>
                <input
                  type="text"
                  value={gameInputs.wheel.clientSeed}
                  onChange={(e) => handleInputChange('wheel', 'clientSeed', e.target.value)}
                  className="w-full p-2.5 bg-[#0F212E] text-white border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                />

                <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                  Server Seed
                </label>
                <input
                  type="text"
                  value={gameInputs.wheel.serverSeed}
                  onChange={(e) => handleInputChange('wheel', 'serverSeed', e.target.value)}
                  className="w-full p-2.5 bg-[#0F212E] text-white border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                />

                <label className="block mt-2 mb-2 text-sm font-medium text-[#B1BaD3] select-none">
                  Nonce
                </label>
                <div className="flex rounded group bg-[#2F4553]">
                  <input
                    className="w-full p-2.5 rounded-s-md text-white border-2 border-[#2F4553] group-hover:border-[#557086] bg-[#0f212e] focus:outline-none"
                    type="number"
                    value={gameInputs.wheel.nonce}
                    onChange={(e) => handleInputChange('wheel', 'nonce', Number(e.target.value))}
                  />
                  <button
                    className="w-16 hover:bg-[#557086] text-white"
                    onClick={() => handleNonceDecrement('wheel')}
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
                    className="w-16 hover:bg-[#557086] text-white"
                    onClick={() => handleNonceIncrement('wheel')}
                  >
                    <KeyboardArrowUpIcon fontSize="small" />
                  </button>
                </div>
                <label className="block mt-2 mb-2 text-sm font-medium text-[#B1BaD3] select-none">
                  Risk
                </label>
                <select
                  className="w-full p-2.5 bg-[#0F212E] text-white border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                  value={gameInputs.wheel.risk}
                  onChange={(e) => handleInputChange('wheel', 'risk', e.target.value)}
                >
                  <option value="low">Low</option>
                  <option value="mediun">Mediun</option>
                  <option value="high">High</option>
                </select>

                <label className="block mt-2 mb-2 text-sm font-medium text-[#B1BaD3] select-none">
                  Segment
                </label>
                <select
                  className="w-full p-2.5 bg-[#0F212E] text-white border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                  value={gameInputs.wheel.segments}
                  onChange={(e) => handleInputChange('wheel', 'segments', e.target.value)}
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                  <option value="50">50</option>
                </select>
              </>
            ) : selectedGame === "dragontower" ? (
              <>
                <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                  Client Seed
                </label>
                <input
                  type="text"
                  value={gameInputs.dragontower.clientSeed}
                  onChange={(e) => handleInputChange('dragontower', 'clientSeed', e.target.value)}
                  className="w-full p-2.5 bg-[#0F212E] text-white border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                />

                <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                  Server Seed
                </label>
                <input
                  type="text"
                  value={gameInputs.dragontower.serverSeed}
                  onChange={(e) => handleInputChange('dragontower', 'serverSeed', e.target.value)}
                  className="w-full p-2.5 bg-[#0F212E] text-white border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                />

                <label className="block mt-2 mb-2 text-sm font-medium text-[#B1BaD3] select-none">
                  Nonce
                </label>
                <div className="flex rounded group bg-[#2F4553]">
                  <input
                    className="w-full p-2.5 rounded-s-md text-white border-2 border-[#2F4553] group-hover:border-[#557086] bg-[#0f212e] focus:outline-none"
                    type="number"
                    value={gameInputs.dragontower.nonce}
                    onChange={(e) => handleInputChange('dragontower', 'nonce', Number(e.target.value))}
                  />
                  <button
                    className="w-16 hover:bg-[#557086] text-white"
                    onClick={() => handleNonceDecrement('dragontower')}
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
                    className="w-16 hover:bg-[#557086] text-white"
                    onClick={() => handleNonceIncrement('dragontower')}
                  >
                    <KeyboardArrowUpIcon fontSize="small" />
                  </button>
                </div>
                <label className="block mt-2 mb-2 text-sm font-medium text-[#B1BaD3] select-none">
                  Difficulty
                </label>
                <select
                  className="w-full p-2.5 font-semibold bg-[#0F212E] text-white border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                  value={gameInputs.dragontower.difficulty}
                  onChange={(e) => handleInputChange('dragontower', 'difficulty', e.target.value)}
                >
                  <option value="easy">Easy</option>
                  <option value="mediun">Mediun</option>
                  <option value="hard">Hard</option>
                  <option value="expert">Expert</option>
                  <option value="master">Master</option>
                </select>
              </>
            ) : selectedGame === "slide" ? (
              <>
                <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                  Hash
                </label>
                <input
                  type="text"
                  value={gameInputs.slide.hash}
                  onChange={(e) => handleInputChange('slide', 'hash', e.target.value)}
                  className="w-full p-2.5 bg-[#0F212E] text-white border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                />
                <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                  Seed
                </label>
                <input
                  type="text"
                  value={gameInputs.slide.seed}
                  onChange={(e) => handleInputChange('slide', 'seed', e.target.value)}
                  className="w-full p-2.5 bg-[#0F212E] text-white border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                />
              </>
            ) : selectedGame === "limbo" ? (
              <>
                <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                  Client Seed
                </label>
                <input
                  type="text"
                  value={gameInputs.limbo.clientSeed}
                  onChange={(e) => handleInputChange('limbo', 'clientSeed', e.target.value)}
                  className="w-full p-2.5 bg-[#0F212E] text-white border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                />

                <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                  Server Seed
                </label>
                <input
                  type="text"
                  value={gameInputs.limbo.serverSeed}
                  onChange={(e) => handleInputChange('limbo', 'serverSeed', e.target.value)}
                  className="w-full p-2.5 bg-[#0F212E] text-white border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                />

                <label className="block mt-2 mb-2 text-sm font-medium text-[#B1BaD3] select-none">
                  Nonce
                </label>
                <div className="flex rounded group bg-[#2F4553]">
                  <input
                    className="w-full p-2.5 rounded-s-md text-white border-2 border-[#2F4553] group-hover:border-[#557086] bg-[#0f212e] focus:outline-none"
                    type="number"
                    value={gameInputs.limbo.nonce}
                    onChange={(e) => handleInputChange('limbo', 'nonce', Number(e.target.value))}
                  />
                  <button
                    className="w-16 hover:bg-[#557086] text-white"
                    onClick={() => handleNonceDecrement('limbo')}
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
                    className="w-16 hover:bg-[#557086] text-white"
                    onClick={() => handleNonceIncrement('limbo')}
                  >
                    <KeyboardArrowUpIcon fontSize="small" />
                  </button>
                </div>
              </>
            ) : (
              <>
                <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                  Client Seed
                </label>
                <input
                  type="text"
                  className="w-full p-2.5 bg-[#0F212E] text-white border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                />

                <label className="block mt-2 mb-2 text-sm font-medium select-none text-[#B1BaD3]">
                  Server Seed
                </label>
                <input
                  type="text"
                  className="w-full p-2.5 bg-[#0F212E] border-2 text-white hover:border-[#557086] border-[#2F4553] focus:outline-none rounded text-sm"
                />

                <label className="block mt-2 mb-2 text-sm font-medium text-[#B1BaD3] select-none">
                  Nonce
                </label>
                <div className="flex rounded group bg-[#2F4553]">
                  <input
                    className="w-full p-2.5 rounded-s-md text-white border-2 border-[#2F4553] group-hover:border-[#557086] bg-[#0f212e] focus:outline-none"
                    type="number"
                    value={0}
                    readOnly
                  />
                  <button
                    className="px-[20px] py-[15px] hover:bg-[#557086]"
                  >
                    <svg fill="white" viewBox="0 0 64 64" className="w-4 h-4">
                      <path d="M32.271 49.763 9.201 26.692l6.928-6.93 16.145 16.145 16.144-16.144 6.93 6.929-23.072 23.07h-.005Z"></path>
                    </svg>
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
                    className="px-[20px] py-[15px] hover:bg-[#557086]"
                  >
                    <svg fill="white" viewBox="0 0 64 64" className="w-4 h-4">
                      <path d="M32.271 17 9.201 40.071 16.128 47l16.145-16.145L48.418 47l6.93-6.929L32.275 17h-.005Z"></path>
                    </svg>
                  </button>
                </div>
              </>
            )}
            <div className="flex flex-col items-center mt-4 text-white w-full">
              <div className="flex flex-col items-center p-4 justify-center md:h-[12.5rem] w-full h-[12.5rem] rounded-md border-2 border-dotted border-[#2f4553]">
                <p className="text-gray-400 text-sm font-normal select-none">
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
            <div className="flex flex-col items-center mt-4 text-white w-full">
              <div className="flex flex-col items-center p-4 justify-center md:h-[12.5rem] w-full h-[12.5rem] rounded-md">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculation;
