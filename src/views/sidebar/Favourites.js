import React, { useEffect, useRef, useState } from "react";
import bannerfavourites from "../../assets/img/bannerfavourites.png";
import SearchIcon from "@mui/icons-material/Search";
import GameTable from "../component/GameTable/index";
import { useNavigate } from "react-router-dom";
import { searchGames } from "../../services/GameServices";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";

const Favourites = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const dropdownRef = useRef();
  const { isChatOpen } = useSelector((state) => state.chat);
  const { isBetslipOpen } = useSelector((state) => state.betslip);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const clearSearch = () => {
    setSearch("");
    setSearchResult([]);
    setDropdown(false);
  };

  const getContainerClass = () => {
    if (windowWidth <= 768) {
      return isChatOpen || isBetslipOpen ? 'w-[90%]' : 'w-full';
    }
    return 'w-full max-w-[50rem]';
  };

  return (
    <div className="relative">
      {dropdown && (
        <div className="fixed inset-0 bg-[#213743] opacity-50 z-40 pointer-events-none"></div>
      )}
      <div className={`relative ${dropdown ? "opacity-60" : ""}`}>
        <div className={`bg-[#213743] w-full`}>
          <div className="rounded-lg flex flex-col md:flex-row justify-between items-center relative p-4">
            <div className="text-white font-semibold text-xl md:text-2xl cursor-default">
              favourite
            </div>
            <img
              src={bannerfavourites}
              alt="Favourites Banner"
              className="rounded-lg max-w-full h-auto object-contain mt-4 md:mt-0 md:max-w-[40%] lg:max-w-[30%] xl:max-w-[25%]"
            />
          </div>
        </div>

        {/* Search Section */}
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
          {/* </div> */}
          {/* Search Dropdown */}
          {dropdown && (
            <div
              ref={dropdownRef}
              className=" bg-[#0f212e] border border-[#213743] flex space-x-4 rounded-md p-5 my-2 w-full z-50"            >
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

          {/* No Favorites Message */}
          <div className="flex justify-center px-4 py-6">
            <span className="text-[#B1BAD3] text-center flex items-center flex-wrap justify-center md:text-sm">
              <span>No Favourites use the</span>
              <svg
                className="h-4 w-4 mx-2 text-[#557086]"
                viewBox="0 0 64 64"
                fill="currentColor"
              >
                <path d="m32.001 16 3.094 5.76c1.742 3.217 4.813 5.525 8.457 6.201l.074.012 6.425 1.146-4.505 4.72a12.013 12.013 0 0 0-3.396 8.385c0 .588.042 1.166.124 1.732l-.008-.064.88 6.453L37.6 47.68c-1.635-.808-3.563-1.282-5.599-1.282s-3.964.472-5.675 1.314l.075-.034-5.545 2.666.88-6.453c.074-.5.116-1.08.116-1.668a12.01 12.01 0 0 0-3.398-8.39l.004.005-4.505-4.854 6.425-1.146a12.152 12.152 0 0 0 8.501-6.15l.032-.063 3.094-5.626-.004.002Zm0-14.612h-.006c-1.32 0-2.466.736-3.052 1.822l-.01.018-7.599 14.292a3.532 3.532 0 0 1-2.432 1.784l-.022.004-15.998 2.88A3.474 3.474 0 0 0 0 25.603c0 .93.366 1.774.962 2.398L.96 28l11.225 11.705a3.371 3.371 0 0 1 .93 2.982l.004-.02-2.186 15.998a3.466 3.466 0 0 0 3.432 3.946h.008a3.248 3.248 0 0 0 1.644-.382l-.018.008 14.264-6.88a4.191 4.191 0 0 1 3.704.01l-.024-.01 14.053 6.88a3.15 3.15 0 0 0 1.5.374h.021-.002c.034.002.074.002.114.002a3.466 3.466 0 0 0 3.43-3.966l.002.018-2.186-15.998a3.37 3.37 0 0 1 .934-2.88l11.225-11.705a3.468 3.468 0 0 0-1.872-5.81l-.022-.003-15.998-2.88a3.534 3.534 0 0 1-2.47-1.846l-.01-.02-7.6-14.292a3.469 3.469 0 0 0-3.061-1.84h-.006l.006 .002Z" />
              </svg>
              <span>to favourite games.</span>
            </span>
          </div>

          {/* Game Table */}
          <div className="flex justify-center">
            <div className={getContainerClass()}>
              <GameTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourites; 