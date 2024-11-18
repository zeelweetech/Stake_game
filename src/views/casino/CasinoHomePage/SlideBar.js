import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import DailyRaces from "../../../assets/img/DailyRaces.jpg";
import WeeklyRaffle from "../../../assets/img/WeeklyRaffle.png";
import ConquerCasino from "../../../assets/img/ConquerCasino.jpg";
import StackEddie from "../../../assets/img/StackEddie.jpg";
import ChaosCollecter from "../../../assets/img/ChaosCollecter.jpg";
import LevelUp from "../../../assets/img/LevelUp.jpg";
import MultiplierRace from "../../../assets/img/MultiplierRace.jpg";
import { style } from "@mui/system";

function SlideBar() {
  const [swiperState, setSwiperState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const promoGame = [
    {
      Game: "Daily Races",
      gameDescription: "Play in our $100,000 Daily Races Read More",
      gameButton: "Race Now",
      gameImage: DailyRaces,
    },
    {
      Game: "Weekly Raffle",
      gameDescription: "Share in $75,000 each week Read More",
      gameButton: "Learn More",
      gameImage: WeeklyRaffle,
    },
    {
      Game: "Conquer the Casino",
      gameDescription: "Win a share in $50,000 every week Read More",
      gameButton: "Play Now ",
      gameImage: ConquerCasino,
    },
    {
      Game: "Listor vs Eddie",
      gameDescription: "Win a share in $30,000 every week Read More",
      gameButton: "Play Now",
      gameImage: StackEddie,
    },
    {
      Game: "Chaos Collector",
      gameDescription: "Win a share in $10,000 every week Read More",
      gameButton: "Play Now",
      gameImage: ChaosCollecter,
    },
    {
      Game: "The Level Up",
      gameDescription: "Win a share in $20,000 every week Read More",
      gameButton: "Play Now",
      gameImage: LevelUp,
    },
    {
      Game: "Multiplier Race",
      gameDescription: "Win a share in $10,000 every week Read More",
      gameButton: "Play Now",
      gameImage: MultiplierRace,
    },
  ];

  return (
    <div className="w-full max-w-screen-xl relative">
      <div className="flex items-center">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={3}
          slidesPerGroup={3}
          onSlideChange={(swiper) => {
            setSwiperState({
              isBeginning: swiper.isBeginning,
              isEnd: swiper.isEnd,
            });
          }}
          breakpoints={{
            1536: {

              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1280: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1024: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            425: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            375: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }}
        >
          {promoGame.map((Data, index) => (
            <SwiperSlide key={index} className="pl-2">
                <div className="flex flex-col md:flex-row justify-between items-center bg-[#213743] xl:w-full lg:w-[28.5rem] md:w-[21.2rem] md:h-52 w-full h-auto px-2 py-2 rounded-md hover:cursor-pointer">
                  <div className="flex flex-col space-y-4 md:space-y-8 justify-around w-full md:w-44">
                    <div>
                      <button className="bg-white text-black text-sm font-semibold px-2 rounded-md">
                        Promo
                      </button>
                      <p className="text-base md:text-lg font-bold py-1">{Data.Game}</p>
                      <p className="text-sm font-medium leading-5 xl:w-44 w-52 md:w-44">{Data.gameDescription}</p>
                    </div>
                    <button className="border border-white w-20 md:w-28 hover:bg-[#8aaec22c] text-xs font-semibold py-2 md:py-3 rounded-md">
                      {Data.gameButton}
                    </button>
                  </div>
                  <div className="mt-4">
                    <img src={Data.gameImage} className="xl:w-72 xl:h-56 xl:-mt-0 xl:ml-0 lg:w-72 lg:h-52 lg:-mt-0 lg:ml-0 md:h-52 md:-mt-0 md:ml-0 w-44 h-44 -mt-[10.5rem] ml-56" alt="Not Found" />
                  </div>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideBar;
