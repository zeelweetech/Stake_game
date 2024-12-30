import React from "react";
import bannerfavourites from "../../assets/img/bannerfavourites.png";
import SearchIcon from "@mui/icons-material/Search";
import GameTable from "../component/GameTable/index";

const Favourites = () => {
  return (
    <>
      <div className="bg-[#213743] w-full h-full">
        <div className="rounded-lg flex justify-around items-center relative max-sm:ml-5  ">
          <div className="text-white font-semibold text-xl md:text-2xl cursor-default">
            Favourites
          </div>
          <img
            src={bannerfavourites}
            alt="stakeDrake"
            className="rounded-lg max-w-full h-auto object-contain xl:ml-96 lg:ml-40 md:ml-20 max-sm:-ml-28"
          />
        </div>
      </div>
      <div className="h-full w-full bg-[#1a2c38]">
        <div className="flex justify-center items-center">
          <div className="mt-8 xl:w-[70rem] lg:w-[52.5rem] md:w-[36.5rem] mx-3 w-full relative">
            <input
              className="rounded-full text-white w-full font-semibold text-base py-2 px-10 bg-[#0f212e] duration-300 border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none focus:border-[#557086]"
              name="search"
              type="text"
              placeholder="Search your game"
            />
            <div className="absolute left-0 top-0 pt-2.5 px-3 flex items-center cursor-pointer text-[#b1bad3]">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <span className="items-center mt-6 inline-flex ml-1 font-normal text-[#B1BAD3] cursor-default">
            No favourites yet, use the
            <svg
              className="ml-2 h-4 w-4 font-normal text-[#557086] relative"
              viewBox="0 0 64 64"
              fill="currentColor"
            >
              <path d="m32.001 16 3.094 5.76c1.742 3.217 4.813 5.525 8.457 6.201l.074.012 6.425 1.146-4.505 4.72a12.013 12.013 0 0 0-3.396 8.385c0 .588.042 1.166.124 1.732l-.008-.064.88 6.453L37.6 47.68c-1.635-.808-3.563-1.282-5.599-1.282s-3.964.472-5.675 1.314l.075-.034-5.545 2.666.88-6.453c.074-.5.116-1.08.116-1.668a12.01 12.01 0 0 0-3.398-8.39l.004.005-4.505-4.854 6.425-1.146a12.152 12.152 0 0 0 8.501-6.15l.032-.063 3.094-5.626-.004.002Zm0-14.612h-.006c-1.32 0-2.466.736-3.052 1.822l-.01.018-7.599 14.292a3.532 3.532 0 0 1-2.432 1.784l-.022.004-15.998 2.88A3.474 3.474 0 0 0 0 25.603c0 .93.366 1.774.962 2.398L.96 28l11.225 11.705a3.371 3.371 0 0 1 .93 2.982l.004-.02-2.186 15.998a3.466 3.466 0 0 0 3.432 3.946h.008a3.248 3.248 0 0 0 1.644-.382l-.018.008 14.264-6.88a4.191 4.191 0 0 1 3.704.01l-.024-.01 14.053 6.88a3.15 3.15 0 0 0 1.5.374h.021-.002c.034.002.074.002.114.002a3.466 3.466 0 0 0 3.43-3.966l.002.018-2.186-15.998a3.37 3.37 0 0 1 .934-2.88l11.225-11.705a3.468 3.468 0 0 0-1.872-5.81l-.022-.003-15.998-2.88a3.534 3.534 0 0 1-2.47-1.846l-.01-.02-7.6-14.292a3.469 3.469 0 0 0-3.061-1.84h-.006l.006-.002Z" />
            </svg>
            <span className="ml-3">to favourite games.</span>
          </span>
        </div>
        <div className="flex justify-center items-center">
          <div className="xl:w-[70rem] lg:w-[53rem] md:w-[37rem] md:px-0 px-3 w-full pt-5">
            <GameTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Favourites;
