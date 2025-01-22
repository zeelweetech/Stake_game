import React, { useEffect, useRef, useState } from "react";
import bannerfavourites from "../../assets/img/bannerfavourites.png";
import SearchIcon from "@mui/icons-material/Search";
import GameTable from "../component/GameTable/index";
import { useNavigate } from "react-router-dom";
import { searchGames } from "../../services/GameServices";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
const Favourites = () => {
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
  const clearSearch = () => {
    setSearch("");
    setSearchResult([]);
    setDropdown(false);
  };

  return (
    <>
      <div className="bg-[#213743] w-full">
        <div className="rounded-lg flex flex-col md:flex-row justify-between items-center relative p-4">
          <h1 className="text-white font-semibold text-xl md:text-2xl cursor-default">
            Favourites
          </h1>
          <img
            src={bannerfavourites}
            alt="Favourites Banner"
            className="rounded-lg max-w-full h-auto object-contain mt-4 md:mt-0 md:max-w-[40%] lg:max-w-[30%] xl:max-w-[25%]"
          />
        </div>
      </div>
      <div className="h-full w-full bg-[#1a2c38]">
        <div className="flex justify-center items-center">
          <div className="mt-8 md:mx-auto lg:mx-auto xl:mx-16 text-white font-bold pt-6 container mx-auto relative">
            <input
              className="border-2 rounded-full w-full md:w-auto xl:w-full lg:w-full py-2 px-10 bg-[#0f212e] border-[#213743] hover:border-[#1b3d50] focus:outline-[#1b3d50]"
              value={search}
              type="text"
              placeholder="Search your game"
              onChange={handleSearch}
              onFocus={() => setDropdown(true)}
            />
            <div className="absolute left-0 top-0 pt-9 px-3 flex items-center cursor-pointer text-[#557086]">
              <SearchIcon />
            </div>
            {search && (
              <div
                className="absolute right-0 top-0 pt-7 px-3 flex items-center cursor-pointer text-[#557086]"
              >
                <IconButton onClick={clearSearch} sx={{ color: "white" }}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </div>
            )}
            {dropdown && searchResult.length > 0 && (
              <div ref={dropdownRef} className="bg-[#0f212e] border border-[#213743] flex space-x-4 rounded-md p-5 my-2 w-full z-50">
                {searchResult.map((game) => (
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
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <span className="mt-6 inline-flex font-normal text-[#B1BAD3] cursor-default">
            No Favourites use the
            <svg
              className="ml-2 h-4 w-4 font-normal text-[#557086] relative"
              viewBox="0 0 64 64"
              fill="currentColor"
            >
              <path d="m32.001 16 3.094 5.76c1.742 3.217 4.813 5.525 8.457 6.201l.074.012 6.425 1.146-4.505 4.72a12.013 12.013 0 0 0-3.396 8.385c0 .588.042 1.166.124 1.732l-.008-.064.88 6.453L37.6 47.68c-1.635-.808-3.563-1.282-5.599-1.282s-3.964.472-5.675 1.314l.075-.034-5.545 2.666.88-6.453c.074-.5.116-1.08.116-1.668a12.01 12.01 0 0 0-3.398-8.39l.004.005-4.505-4.854 6.425-1.146a12.152 12.152 0 0 0 8.501-6.15l.032-.063 3.094-5.626-.004.002Zm0-14.612h-.006c-1.32 0-2.466.736-3.052 1.822l-.01.018-7.599 14.292a3.532 3.532 0 0 1-2.432 1.784l-.022.004-15.998 2.88A3.474 3.474 0 0 0 0 25.603c0 .93.366 1.774.962 2.398L.96 28l11.225 11.705a3.371 3.371 0 0 1 .93 2.982l.004-.02-2.186 15.998a3.466 3.466 0 0 0 3.432 3.946h.008a3.248 3.248 0 0 0 1.644-.382l-.018.008 14.264-6.88a4.191 4.191 0 0 1 3.704.01l-.024-.01 14.053 6.88a3.15 3.15 0 0 0 1.5.374h.021-.002c.034.002.074.002.114.002a3.466 3.466 0 0 0 3.43-3.966l.002.018-2.186-15.998a3.37 3.37 0 0 1 .934-2.88l11.225-11.705a3.468 3.468 0 0 0-1.872-5.81l-.022-.003-15.998-2.88a3.534 3.534 0 0 1-2.47-1.846l-.01-.02-7.6-14.292a3.469 3.469 0 0 0-3.061-1.84h-.006l.006 .002Z" />
            </svg>
            <span className="ml-3">to favourite games.</span>
          </span>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-[50rem] pt-5 px-3">
            <GameTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Favourites;