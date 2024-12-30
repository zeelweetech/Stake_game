import React from "react";
import bannerfavourites from "../../assets/img/bannerfavourites.png";
import SearchIcon from "@mui/icons-material/Search";
import GameTable from "../component/GameTable/index";

const Recent = () => {
  return (
    <>
      <div className="bg-[#213743] w-full">
        <div className="rounded-lg flex justify-around items-center relative max-sm:ml-5  ">
          <div className="text-white font-semibold text-xl md:text-2xl cursor-default">
            Recent
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
              className="rounded-full text-white w-full font-semibold text-base py-2 px-10 bg-[#0f212e] duration-300 border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none focus:border-[#557086] border:outline-none"
              name="search"
              type="text"
              placeholder="Search your game"
            />
            <div className="absolute left-0 top-0 pt-2.5 px-3 flex items-center cursor-pointer text-[#557086]">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <span className="items-center mt-6 inline-flex ml-1 font-normal text-[#B1BAD3] cursor-default">
            Recent Games
          </span>
        </div>
        <div className="flex justify-center items-center">
          <div className="xl:w-[70rem] lg:w-[53rem] md:w-[37rem] md:px-0 px-3 w-full pt-5 ">
            <GameTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Recent;
