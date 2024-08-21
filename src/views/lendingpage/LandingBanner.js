import React from "react";
import Stakermen from "../../assets/img/Stakermen.webp";
import facebook from "../../assets/img/facebook.png";
import google from "../../assets/img/google.png";

function LandingBanner() {
  return (
    <div className="bg-[#0f212e]">
      <div className="flex flex-col lg:flex-row justify-evenly items-center lg:space-x-4 space-y-8 lg:space-y-0">
        <div className="space-y-4 text-center">
          <p className="text-white font-semibold text-lg lg:text-xl md:mt-6">
            Play Smarter
          </p>
          <button className="bg-[#1475e1] hover:bg-[#396ca8] text-white rounded-full px-12 lg:px-14 xl:px-20 py-2.5">
            Register instantly
          </button>
          <div className="text-center">
            <hr className="w-2/3 lg:w-7/12 mt-8 border-[0.1px] border-[#7c85a3] mx-auto"></hr>
            <p className="bg-[#0f212e] text-[#b1bad3] w-10 text-xs text-center -mt-2 mb-6 mx-auto">
              OR
            </p>
          </div>
          <div className="flex justify-center space-x-3">
            <button className="bg-[#2f4553] hover:bg-[#47687d] px-2 py-2.5 rounded-md">
              <img src={facebook} className="w-7 h-4" alt="Not Found" />
            </button>
            <button className="bg-[#2f4553] hover:bg-[#47687d] px-1.5 py-2.5 rounded-md">
              <img src={google} className="w-8 h-4" alt="Not Found" />
            </button>
          </div>
        </div>
        <div>
          <img
            src={Stakermen}
            className="w-full lg:w-[34rem] xl:w-[40rem] h-72"
            alt="Not Found"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingBanner;
