import React from "react";
import mainbarBGimage from "../../assets/img/MainbarBG.png";
import { FaRegStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import StackCasino from "../../assets/img/StackCasino.png";
import SportBook from "../../assets/img/SportBook.png";
import casinoCard from "../../assets/img/card.png";
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { Tooltip } from "recharts";

function Mainbar() {
  //   const InfoTooltip = `All bets settled on the sportsbook return a 3x (three times) faster rate of progression compared to Casino (1x progression). Voided bets are excluded.`;
  return (
    <div className="w-full">
      <div
        className="h-80 w-[96.8rem] flex justify-evenly items-center"
        style={{
          backgroundImage: `url(${mainbarBGimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            border: "8px solid transparent",
            borderImage: "linear-gradient(to bottom, #213743, #0f212e) 1",
          }}
        >
          <div className="bg-[#0f212e] w-80 p-5 border border-[#2f4553]">
            <div className="flex justify-between items-center">
              <p>UserName</p>
              <FaRegStar size={22} color="#2f4553" />
            </div>
            <div className="flex justify-between mt-10">
              <div className="flex items-center space-x-2.5">
                <Link className="text-sm font-medium">Your VIP Progress</Link>
                <FaArrowRight size={13} className="mt-1" color="#b1bad3" />
              </div>
              <div className="flex items-center space-x-1">
                <p className="text-sm font-medium">0.00%</p>
                {/* <Tooltip title={InfoTooltip}> */}
                <InfoIcon fontSize="small" className="text-[#b1bad3]" />
                {/* </Tooltip> */}
              </div>
            </div>
            <div className="relative w-full my-2.5 h-[0.625em]">
              <div
                className="h-full w-full shadow-lg rounded-[10px]"
                style={{ right: "100%", backgroundColor: "#2f4553" }}
              ></div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center space-x-1">
                <FaRegStar size={18} color="#2f4553" />
                <p className="text-sm text-[#b1bad3] font-medium">None</p>
              </div>
              <div className="flex items-center space-x-1">
                {/* <Tooltip title={InfoTooltip}> */}
                <FaRegStar size={18} color="#2f4553" />
                {/* </Tooltip> */}
                <p className="text-sm text-[#b1bad3] font-medium">Bronze</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex space-x-5">
            <div className="bg-[#1a2c38] hover:cursor-pointer transition-transform duration-300 hover:translate-y-[-8px]">
              <img
                src={StackCasino}
                className="w-80 h-56"
                alt="Not Found"
                style={{
                  border: "3px solid transparent",
                  borderImage:
                    "linear-gradient(to bottom, #017aff, transparent) 1",
                }}
              />
              <div className="flex items-center px-3 py-2.5 space-x-2">
                <img src={casinoCard} className="w-4 h-4" alt="Not Found" />
                <p>Casino</p>
              </div>
            </div>
            <div className="bg-[#1a2c38] hover:cursor-pointer transition-transform duration-300 hover:translate-y-[-8px]">
              <img
                src={SportBook}
                className="w-80 h-56"
                alt="Not Found"
                style={{
                  border: "3px solid transparent",
                  borderImage:
                    "linear-gradient(to bottom, #00ca51, transparent) 1",
                }}
              />
              <div className="flex items-center px-4 py-2.5 space-x-2">
                <SportsBasketballIcon
                  className="text-[#b1bad3]"
                  sx={{ fontSize: 20 }}
                />
                <p>sportsbook</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainbar;
