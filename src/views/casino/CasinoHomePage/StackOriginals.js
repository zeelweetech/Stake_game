import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import crashGame from "../../../assets/img/crashGame.avif";
import plinkoGame from "../../../assets/img/plinkoGame.jpeg";
import minesGame from "../../../assets/img/minesGame.avif";
import limboGame from "../../../assets/img/limboGame.avif";
import dragonGame from "../../../assets/img/dragonGame.avif";
import wheelGame from "../../../assets/img/wheelGame.avif";
import { BsFire } from "react-icons/bs";

function StackOriginals({ setLoading }) {
  const navigate = useNavigate();

  const stackGame = [
    {
      gameImg: crashGame,
      gameRating: "3,733 playing",
      route: "/casino/games/crash",
    },
    {
      gameImg: plinkoGame,
      gameRating: "1,082 playing",
      route: "/casino/games/plinko",
    },
    {
      gameImg: minesGame,
      gameRating: "7,635 playing",
    },
    {
      gameImg: limboGame,
      gameRating: "8,235 playing",
    },
    {
      gameImg: dragonGame,
      gameRating: "2,345 playing",
    },
    {
      gameImg: wheelGame,
      gameRating: "5,677 playing",
    },
  ];

  const handleAllGame = (route) => {
    setLoading(true);
    navigate(route);
  };

  return (
    <div>
      <div className="flex items-center mx-3 space-x-2">
        <BsFire fontSize={20} className="text-[#b1bad3] hover:text-white" />
        <Link className="text-lg font-medium">Stack Originals</Link>
      </div>
      <div className="grid grid-cols-6 pt-4 mx-3">
        {stackGame.map((gameData, index) => (
          <div key={index} className="text-center">
            <div className="relative">
              <img
                src={gameData.gameImg}
                className="xl:w-44 lg:w-36 lg:h-48 xl:h-56 rounded-md hover:cursor-pointer transition-transform duration-300 hover:translate-y-[-10px]"
                alt="Not Found"
                onClick={() => handleAllGame(gameData?.route)}
              />
            </div>
            <div className="flex items-center mt-1">
              <span className="relative flex h-3 w-3 mr-1">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#1fff20] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1fff20]"></span>
              </span>
              <p>{gameData.gameRating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StackOriginals;
