import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import { useSelector } from "react-redux";
import Dailyrace from "./SlideBarPages/Dailyrace";
import Christmas from "./SlideBarPages/Christmas"
import Weeklyraffle from "./SlideBarPages/Weeklyraffle";
import DailyRaces from "../../../assets/img/DailyRaces.jpg";
import WeeklyRaffle from "../../../assets/img/WeeklyRaffle.png";
import ConquerCasino from "../../../assets/img/ConquerCasino.jpg";
import StackEddie from "../../../assets/img/StackEddie.jpg";
import ChaosCollecter from "../../../assets/img/ChaosCollecter.jpg";
import LevelUp from "../../../assets/img/LevelUp.jpg";
import MultiplierRace from "../../../assets/img/MultiplierRace.jpg";
import ChristmasRace from "../../../assets/img/ChristmasRace.png";

function SlideBar() {
  const { isBetslipOpen } = useSelector((state) => state.betslip);
  const { isChatOpen } = useSelector((state) => state.chat);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedGame, setSelectedGame] = useState(null);

  // Load selected game from localStorage on mount
  useEffect(() => {
    const savedGame = localStorage.getItem("selectedGame");
    if (savedGame) {
      setSelectedGame(savedGame);
    }
  }, []);

  // Store selected game in localStorage whenever it changes
  useEffect(() => {
    if (selectedGame) {
      localStorage.setItem("selectedGame", selectedGame);
    } else {
      localStorage.removeItem("selectedGame");
    }
  }, [selectedGame]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    {
      Game: "$10 Million Christmas Race",
      gameDescription: "Race To The New Year Read More",
      gameButton: "Race Now",
      gameImage: ChristmasRace,
    },
  ];

  const handleButtonClick = (game) => {
    setSelectedGame(game);
  };

  const handleClose = () => {
    setSelectedGame(null);
  };

  const getMenuContainerClass = () => {
    if (windowWidth <= 425) return "w-full max-w-[22rem]";
    if (windowWidth <= 768) return isChatOpen || isBetslipOpen ? "w-full max-w-[20rem]" : "w-full max-w-[38rem]";
    if (windowWidth <= 1024) return isChatOpen || isBetslipOpen ? "w-full max-w-[33rem]" : "w-full max-w-[85%]";
    return isChatOpen || isBetslipOpen ? "w-full max-w-[57rem]" : "w-full max-w-[80rem]";
  };

  return (
    <div className="w-full">
      <div className={`${getMenuContainerClass()} mx-auto`}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={8}
          breakpoints={{
            1536: { slidesPerView: 3, slidesPerGroup: 3 },
            1280: { slidesPerView: isChatOpen || isBetslipOpen ? 2 : 3, slidesPerGroup: isChatOpen || isBetslipOpen ? 2 : 3 },
            1024: { slidesPerView: isChatOpen || isBetslipOpen ? 1 : 2, slidesPerGroup: isChatOpen || isBetslipOpen ? 1 : 2 },
            768: { slidesPerView: isChatOpen || isBetslipOpen ? 1 : 2, slidesPerGroup: isChatOpen || isBetslipOpen ? 1 : 2 },
            425: { slidesPerView: 1, slidesPerGroup: 1 },
            375: { slidesPerView: 1, slidesPerGroup: 1 },
            320: { slidesPerView: 1, slidesPerGroup: 1 },
          }}
        >
          {promoGame.map((Data, index) => (
            <SwiperSlide key={index} className="flex justify-center text-white pt-6">
              <div className="flex md:flex-row justify-between items-center bg-[#213743] h-56 md:h-[13.75rem] rounded-md hover:cursor-pointer w-full max-w-md md:max-w-none">
                {/* Left Section (Text + Button) */}
                <div className="flex flex-col justify-between lg:w-52 md:w-44 p-3 h-full">
                  <div>
                    <button className="bg-white text-black text-sm font-semibold px-1 rounded-sm">Promo</button>
                    <p className="text-lg font-semibold py-1 break-words">{Data.Game}</p>
                    <p className="text-xs leading-5  break-words">{Data.gameDescription}</p>
                  </div>
                  <button
                    className="border border-white w-full sm:w-28 md:w-28 hover:bg-[#8aaec22c] text-xs font-semibold py-2 md:py-3 rounded-md mt-auto"
                    onClick={() => handleButtonClick(Data.Game)}
                  >
                    {Data.gameButton}
                  </button>
                </div>

                {/* Right Section (Image) */}
                <div className="flex justify-center w-full md:w-auto">
                  <img
                    src={Data.gameImage}
                    className="h-[180px] md:h-[170px] lg:w-48 lg:h-48  max-[320px]:h-[150px] rounded-md object-cover"
                    alt="Not Found"
                  />
                </div>
              </div>
            </SwiperSlide>

          ))}
        </Swiper>
      </div>
      {selectedGame === "Daily Races" && <Dailyrace onClose={handleClose} />}
      {selectedGame === "Weekly Raffle" && <Weeklyraffle onClose={handleClose} />}
      {selectedGame === "$10 Million Christmas Race" && <Christmas onClose={handleClose} />}
    </div>
  );
}

export default SlideBar;  
