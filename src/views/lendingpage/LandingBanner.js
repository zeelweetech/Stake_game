import React from "react";
import Stakermen from "../../assets/img/Stakermen.webp"

function LandingBanner() {
  return (
    <div className="bg-[#0f212e] mt-16">
      <div className="flex justify-evenly items-center">
        <div className="space-y-2">
          <p className="text-white text-center font-semibold text-xl">Play Smarter</p>
          <button className="bg-[#1475e1] hover:bg-[#396ca8] text-white rounded-full px-20 py-2.5">Register instantly</button>
        </div>
        <div>
          <img src={Stakermen} className="w-[40rem] h-72" alt="Not Found" />
        </div>
      </div>
    </div>
  )
}

export default LandingBanner;
