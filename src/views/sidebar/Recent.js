import React, { useEffect, useRef, useState } from "react";
import bannerfavourites from "../../assets/img/bannerfavourites.png";
import SearchIcon from "@mui/icons-material/Search";
import GameTable from "../component/GameTable/index";
import { useNavigate } from "react-router-dom";
import { searchGames } from "../../services/GameServices";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
const Recent = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef()

  const handleSearch = async (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    setDropdown(true);

    if (searchTerm.trim() === "") {
      setSearchResult([]);
      setDropdown(false);
      return;
    }
    setDropdown(true)
    try {
      const response = await searchGames({ game: searchTerm });
      if (response && Array.isArray(response.games)) {
        setSearchResult(response.games);
      } else {
        console.error("Unexpected response format:", response);
        setSearchResult([]);
      }
    } catch (error) {
      console.error("Error searching games:", error);
      setSearchResult([]);
    }
  };

  const handleGameSelect = (game) => {
    navigate(`/casino/${game.gameName}/${game.id}`);
  };
  const clearSearch = () => {
    setSearch("");
    setSearchResult([]);
    setDropdown(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative">
      {dropdown && (
        <div className="fixed inset-0 bg-[#213743] opacity-50 z-40 pointer-events-none"></div>
      )}
      <div className={`relative ${dropdown ? "opacity-60" : ""}`}>

        <div className={`bg-[#213743] w-full`}>
          <div className="rounded-lg flex flex-col md:flex-row justify-between items-center relative p-4">
            <div className="text-white font-semibold text-xl md:text-2xl cursor-default">
              Recent
            </div>
            <img
              src={bannerfavourites}
              alt="stakeDrake"
              className="rounded-lg max-w-full h-auto object-contain mt-4 md:mt-0 md:max-w-[40%] lg:max-w-[30%] xl:max-w-[25%]"
            />
          </div>
        </div>
        <div className="h-full w-full bg-[#1a2c38]">
          <div className="px-4 md:px-8 pt-8 max-w-7xl mx-auto relative">
            <div className="relative">
              <input
                className="border-2 rounded-full w-full py-2 px-10 bg-[#0f212e] border-[#213743] hover:border-[#1b3d50] focus:outline-[#1b3d50] text-white"
                value={search}
                type="text"
                placeholder="Search your game"
                onChange={handleSearch}
                onFocus={() => setDropdown(true)}
              />
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-[#557086]" />
            </div>
            {search && (
              <div
                className="absolute right-7 top-8 pt-1 px-3 flex items-center cursor-pointer text-[#557086]"
              >
                <IconButton onClick={clearSearch} sx={{ color: "white" }}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </div>
            )}
            {dropdown && (
              <div ref={dropdownRef} className=" bg-[#0f212e] border border-[#213743] flex space-x-4 rounded-md p-5 my-2 w-full z-50">
                {Array.isArray(searchResult) && searchResult.length > 0 ? (
                  searchResult.map((game) => (
                    <div
                      key={game.id}
                      onClick={() => handleGameSelect(game)}
                      className="cursor-pointer"
                    >
                      <img
                        src={game.gameImage}
                        alt={game.gameName}
                        className="w-32 h-44 rounded-md"
                      />
                    </div>
                  ))
                  ) : (
                  <div className="text-white flex justify-center items-center py-1">
                    Game is not found
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <span className="mt-6 inline-flex font-normal text-[#B1BAD3] cursor-default">
            Recent Games
          </span>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-[50rem] pt-5 px-3">
            <GameTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
