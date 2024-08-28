import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import crashGame from "../../../assets/img/crashGame.avif";
import plinkoGame from "../../../assets/img/plinkoGame.jpeg";
import minesGame from "../../../assets/img/minesGame.avif";
import limboGame from "../../../assets/img/limboGame.avif";
import dragonGame from "../../../assets/img/dragonGame.avif";
import wheelGame from "../../../assets/img/wheelGame.avif";
import DailyRaces from "../../../assets/img/DailyRaces.jpg";
import WeeklyRaffle from "../../../assets/img/WeeklyRaffle.png";
import ConquerCasino from "../../../assets/img/ConquerCasino.jpg";
import StackEddie from "../../../assets/img/StackEddie.jpg";
import ChaosCollecter from "../../../assets/img/ChaosCollecter.jpg";
import LevelUp from "../../../assets/img/LevelUp.jpg";
import MultiplierRace from "../../../assets/img/MultiplierRace.jpg";
import Loader from "../../component/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from 'swiper/modules';

function CasinoHomePage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const stackGame = [
    {
      gameImg: crashGame,
      gameRating: "3,733 playing",
      route: "/casino/games/crash",
    },
    {
      gameImg: plinkoGame,
      gameRating: "1,082 playing",
    },
    {
      gameImg: minesGame,
      gameRating: "7,635 playing",
    },
    {
      gameImg: limboGame,
      gameRating: "8,235 playing",
    },
    {
      gameImg: dragonGame,
      gameRating: "2,345 playing",
    },
    {
      gameImg: wheelGame,
      gameRating: "5,677 playing",
    },
  ];

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
      Game: "Stack vs Eddie",
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

  const handleAllGame = (route) => {
    setLoading(true);
    navigate(route);
  };

  return (
    <div className="flex justify-center h-screen bg-[#1a2c38]">
      {loading ? (
        <Loader />
      ) : (
        <div className="text-white pt-6">
          <div className="flex justify-center items-center">
            <div className="w-full max-w-[75rem] px-1">
              <Swiper navigation={true} modules={[Navigation]} slidesPerView={3} className="custom-swiper">
                {promoGame.map((Data, index) => (
                  <SwiperSlide className="pl-2">
                    <div
                      key={index}
                      className="flex justify-between items-center bg-[#213743] w-[23.9rem] h-52 pl-4 rounded-md"
                    >
                      <div className="flex flex-col justify-around w-44">
                        <div>
                          <button className="bg-white text-black text-sm font-semibold px-1 rounded-sm">
                            Promo
                          </button>
                          <p className="text-lg font-semibold py-1">
                            {Data.Game}
                          </p>
                          <p className="text-xs leading-5 w-36">
                            {Data.gameDescription}
                          </p>
                        </div>
                        <button className="border border-white px-6 text-xs font-semibold py-3 rounded-sm">
                          {Data.gameButton}
                        </button>
                      </div>
                      <div>
                        <img
                          src={Data.gameImage}
                          className="w-48 h-48"
                          alt="Not Found"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          

          <div className="flex justify-center items-center py-10 space-x-6">
            {stackGame.map((gameData, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <img
                    src={gameData.gameImg}
                    className="w-44 h-56 rounded-md hover:cursor-pointer transition-transform duration-300 hover:translate-y-[-10px]"
                    alt="Not Found"
                    onClick={() => handleAllGame(gameData.route)}
                  />
                </div>
                <div className="flex items-center mt-1">
                  <span className="relative flex h-3 w-3 mr-1">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#1fff20] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1fff20]"></span>
                  </span>
                  <p>{gameData.gameRating}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CasinoHomePage;
