import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import crashGame from "../../../assets/img/crashGame.avif";
import plinkoGame from "../../../assets/img/plinkoGame.jpeg"
import minesGame from "../../../assets/img/minesGame.avif"
import limboGame from '../../../assets/img/limboGame.avif'
import wheelGame from '../../../assets/img/wheelGame.avif'
import dragonGame from '../../../assets/img/dragonGame.avif'
import { FaGift } from "react-icons/fa6";

function GameShows() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const gameShowsGames = [
      { gameShowsImg: plinkoGame, gameRating: '67589' },
      { gameShowsImg: minesGame, gameRating: '67589' },
    { gameShowsImg: crashGame, gameRating: '67589' },
    { gameShowsImg: wheelGame, gameRating: '67589' },
    { gameShowsImg: dragonGame, gameRating: '67589' },
    { gameShowsImg: limboGame, gameRating: '67589' },
  ];

  const handleAllGame = (gameName, id) => {
    setLoading(true);
    navigate(`/casino/${gameName}/${id}`);
  };

  return (
    <div>
      <div className="flex items-center mx-3 mt-10 space-x-2">
        <FaGift
          fontSize="small"
          className="text-[#b1bad3] hover:text-white"
        />
        <Link className="text-lg font-medium">Game Shows</Link>
      </div>
      <div className="grid grid-cols-6 pt-4 mx-3">
        {gameShowsGames?.map((gameShows, index) => (
          <div key={index} className="text-center">
            <div className="relative">
              <img
                src={gameShows?.gameShowsImg}
                className="xl:w-44 lg:w-36 lg:h-48 xl:h-56 rounded-md hover:cursor-pointer transition-transform duration-300 hover:translate-y-[-10px]"
                alt="Not Found"
                onClick={() => handleAllGame(gameShows?.gameName, gameShows?.id)}
              />
            </div>
            <div className="flex items-center mt-1">
              <span className="relative flex h-3 w-3 mr-1">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#1fff20] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1fff20]"></span>
              </span>
              <p>{gameShows?.gameRating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameShows;
