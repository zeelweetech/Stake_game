import React from "react";
import card from "../../assets/img/card.png";
import casino from "../../assets/img/casino.avif";
import sports from "../../assets/img/sports.avif";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import Mastercard from "../../assets/img/Mastercard.png";
import Applepay from "../../assets/img/Applepay.png";
import Gpay from "../../assets/img/Gpay.png";
import Samsung from "../../assets/img/Samsung.png";

function LandingDetails() {
  return (
    <div className="bg-[#1a2c38] pb-10">
      <div>
        <div className="flex flex-col md:flex-row justify-center space-y-7 md:space-y-0 md:space-x-7 px-4">
          <div className="mt-4 w-full sm:w-1/2 md:w-1/2 lg:w-[27rem] xl:w-[36rem] hover:cursor-pointer">
            <div className="flex space-x-1 items-center">
              <img src={card} className="w-4 h-4" alt="Casino Icon" />
              <p className="text-white font-semibold text-lg sm:text-base md:text-lg hover:text-[#b1bad3]">
                Casino
              </p>
            </div>
            <img
              src={casino}
              className="w-full md:h-60 lg:h-60 xl:h-72 h-40 rounded-md mt-4 hover:cursor-pointer transition-transform duration-300 hover:translate-y-[-5px]"
              alt="Casino"
            />
            <p className="text-white my-3 sm:text-base md:text-lg">
              Leading Online Casino
            </p>
            <p className="text-[#b1bad3] text-sm">
              Browse our giant range of casino games as Stake offers a fair and
              fun online gambling experience. Play Slots, Live Casino, Blackjack,
              Baccarat, Roulette, and thousands of classic casino games right
              from your browser, including your favourite Stake Originals.
            </p>
            <button
              type="button"
              className="bg-[#1475e1] hover:bg-[#396ca8] rounded-md text-sm text-white py-3 w-full mt-3 font-semibold"
            >
              Go to Casino
            </button>
          </div>

          <div className="mt-4 w-full sm:w-1/2 md:w-1/2 lg:w-[27rem] xl:w-[36rem] hover:cursor-pointer">
            <div className="flex space-x-1 items-center mt-4 ">
              <SportsBaseballIcon
                className="text-[#b1bad3] "
                sx={{ fontSize: 20 }}
              />
              <p className="text-white font-semibold text-lg sm:text-base md:text-lg hover:text-[#b1bad3]">
                Sports
              </p>
            </div>
            <img
              src={sports}
              className="w-full md:h-60 lg:h-60 xl:h-72 h-40 rounded-md mt-4 hover:cursor-pointer transition-transform duration-300 hover:translate-y-[-5px]"
              alt="Sports"
            />
            <p className="text-white my-3 sm:text-base md:text-lg">
              Best Sports Betting Online
            </p>
            <p className="text-[#b1bad3] text-sm">
              Bet on your favourite teams, players, and leagues from all around
              the world on our sports betting platform. Gamble on a wide range
              of sports betting options for live sports across MMA, Basketball,
              Soccer, and more for an unbeatable sports betting experience.
            </p>
            <button
              type="button"
              className="bg-[#1475e1] hover:bg-[#396ca8] rounded-md text-sm text-white py-3 w-full mt-3 font-semibold"
            >
              Go to Sportsbook
            </button>
          </div>
        </div>

        <div className="flex justify-center px-4">
          <div className="flex flex-col sm:flex-row md:w-[40rem] lg:w-[55rem] xl:w-[74rem] justify-between px-5 items-center py-4 mt-5 bg-[#0f212e] rounded-sm space-y-4 sm:space-y-0">
            <p className="text-white font-semibold text-center sm:text-left">
              No Crypto? No problem.
            </p>
            <div className="flex justify-center items-center space-x-4 md:space-x-4">
              <img src={Mastercard} className="w-8 h-4 md:w-14 md:h-7" alt="Mastercard" />
              <img src={Applepay} className="w-10 h-9 md:w-16 md:h-16" alt="Apple Pay" />
              <img src={Gpay} className="w-12 h-4 md:w-16 md:h-7" alt="Google Pay" />
              <img src={Samsung} className="w-16 h-4 md:w-24 md:h-8 ml-5" alt="Samsung Pay" />
            </div>
            <button className="bg-[#2f4553] hover:bg-[#53768c] rounded-sm text-sm md:text-base font-semibold text-white px-4 md:px-4 lg:px-10 py-2 md:py-3 lg:py-4">
              Buy Crypto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingDetails;
