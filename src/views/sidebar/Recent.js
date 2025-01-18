import React from "react";
import bannerfavourites from "../../assets/img/bannerfavourites.png";
import SearchIcon from "@mui/icons-material/Search";
import GameTable from "../component/GameTable/index";

const Recent = () => {
  return (
    <>
      <div className="bg-[#213743] w-full">
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
        <div className="flex justify-center items-center">
          <div className="mt-8 w-full max-w-[70rem] mx-3 relative">
            <input
              className="rounded-full text-white w-full font-semibold text-base py-2 px-10 bg-[#0f212e] duration-300 border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none focus:border-[#557086]"
              name="search"
              type="text"
              placeholder="Search your game"
            />
            <div className="absolute left-0 top-0 pt-2.5 px-3 flex items-center cursor-pointer text-[#557086]">
              <SearchIcon />
            </div>
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
    </>
  );
};

export default Recent;