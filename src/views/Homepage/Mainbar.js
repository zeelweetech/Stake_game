import React from "react";
import mainbarBGimage from "../../assets/img/MainbarBG.png";
import { FaRegStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import { Tooltip } from "recharts";

function Mainbar() {
  //   const InfoTooltip = `All bets settled on the sportsbook return a 3x (three times) faster rate of progression compared to Casino (1x progression). Voided bets are excluded.`;
  return (
    <div className="w-full">
      <div
        className="h-80 w-[96.8rem]"
        style={{ backgroundImage: `url(${mainbarBGimage})` }}
      >
        <div>
          <div className="bg-[#0f212e] w-80  py-2">
            <div className="flex justify-between items-center">
              <p>radihoc</p>
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
      </div>
    </div>
  );
}

export default Mainbar;
