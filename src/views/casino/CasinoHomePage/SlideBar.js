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
      gameButton: "Play Now",
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
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            1280: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1024: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
        >
          {promoGame.map((Data, index) => (
            <SwiperSlide key={index} className="pl-2">
              <div className="flex justify-between items-center bg-[#213743] w-full h-52 pl-4 rounded-md hover:cursor-pointer">
                <div className="flex flex-col space-y-8 justify-around w-44">
                  <div>
                    <button className="bg-white text-black text-sm font-semibold px-1 rounded-sm">
                      Promo
                    </button>
                    <p className="text-lg font-semibold py-1">{Data.Game}</p>
                    <p className="text-xs leading-5 w-36">{Data.gameDescription}</p>
                  </div>
                  <button className="border border-white w-28 hover:bg-[#8aaec22c] text-xs font-semibold py-3 rounded-sm">
                    {Data.gameButton}
                  </button>
                </div>
                <div>
                  <img src={Data.gameImage} className="w-48 h-48" alt="Not Found" />
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
