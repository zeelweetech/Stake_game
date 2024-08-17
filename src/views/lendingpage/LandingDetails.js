import React from "react";
import card from "../../assets/img/card.png";
import casino from "../../assets/img/casino.avif";
import stakeDrake from "../../assets/img/stakeDrake.png";
import draker from "../../assets/img/draker.avif";
import Mastercard from "../../assets/img/Mastercard.png";
import Applepay from "../../assets/img/Applepay.png";
import Gpay from "../../assets/img/Gpay.png";
import Samsung from "../../assets/img/Samsung.png";

function LandingDetails() {
  return (
    <div className="bg-[#1a2c38] pb-10">
      <div>
        <div className=" flex justify-center">
          <div className="mt-4 w-[36rem]">
            <div className="flex space-x-2 items-center">
              <img src={card} className="w-5 h-5" alt="Not Found" />
              <p className="text-white font-semibold text-lg">Casino</p>
            </div>
            <img
              src={casino}
              className="h-60 w-[36rem] rounded-md mt-2"
              alt="Not Found"
            />
            <p className="text-white my-3">Leading Online Casino</p>
            <p className="text-[#b1bad3] text-sm">
              Browse our giant range of casino games as Stake offers a fair and
              fun online gambling experience. Play Slots, Live Casino,
              Blackjack, Baccarat, Roulette, and thousands of classic casino
              games right from your browser, including your favourite Stake
              Originals.
            </p>
            <button
              type="button"
              className="bg-[#1475e1] hover:bg-[#396ca8] text-white py-2 w-[35.9rem] mt-3 font-semibold"
            >
              Go to Casino
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex md:w-[40rem] lg:w-[55rem] xl:w-[74rem] justify-center md:space-x-14 lg:space-x-44 xl:space-x-80 items-center mt-8 bg-[#0f212e] rounded-sm">
            <button className="bg-[#2f4553] hover:bg-[#53768c] rounded-sm text-sm font-semibold text-white px-5 py-3">
              Learn More
            </button>
            <img src={stakeDrake} className="w-48" alt="Not Found" />
            <img src={draker} className="w-44 h-[5.5rem]" alt="Not Found" />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex md:w-[40rem] lg:w-[55rem] xl:w-[74rem] justify-center md:space-x-14 lg:space-x-44 xl:space-x-60 items-center py-4 mt-5 bg-[#0f212e] rounded-sm">
            <p className="text-white font-semibold">No Crypto? No problem.</p>
            <div className="flex justify-center items-center space-x-8">
              <img src={Mastercard} className="w-14 h-7" alt="Not Found" />
              <img src={Applepay} className="w-16 h-16" alt="Not Found" />
              <img src={Gpay} className="w-16 h-7" alt="Not Found" />
              <img src={Samsung} className="w-20 h-8" alt="Not Found" />
            </div>
            <button className="bg-[#2f4553] hover:bg-[#53768c] rounded-sm text-sm font-semibold text-white px-7 py-3">
              Buy Crypto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingDetails;
