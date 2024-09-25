import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsFire } from "react-icons/bs";
import { getAllGames } from "../../../services/GameServices";

function StackOriginals({ setLoading }) {
  const navigate = useNavigate();
  const [allGames, setAllGames] = useState();

  const handleAllGame = (gameName, id) => {
    setLoading(true);
    navigate(`/casino/${gameName}/${id}`);
  };

  useEffect(() => {
    GetAllGames();
  }, []);

  const GetAllGames = async () => {
    await getAllGames()
      .then((response) => {
        console.log("response", response);
        setAllGames(response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div>
      <div className="flex items-center mx-3 space-x-2">
        <BsFire fontSize={20} className="text-[#b1bad3] hover:text-white" />
        <Link className="text-lg font-medium">Stack Originals</Link>
      </div>
      <div className="grid grid-cols-6 pt-4 mx-3">
        {allGames?.games?.map((gameData, index) => (
          <div key={index} className="text-center">
            <div className="relative">
              <img
                src={gameData?.gameImage}
                className="xl:w-44 lg:w-36 lg:h-48 xl:h-56 rounded-md hover:cursor-pointer transition-transform duration-300 hover:translate-y-[-10px]"
                alt="Not Found"
                onClick={() => handleAllGame(gameData?.gameName, gameData?.id)}
              />
            </div>
            <div className="flex items-center mt-1">
              <span className="relative flex h-3 w-3 mr-1">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#1fff20] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1fff20]"></span>
              </span>
              <p>{gameData?.gameRating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StackOriginals;
