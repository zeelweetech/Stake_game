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
  const [showModal, setShowModal] = useState(false);

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

  const handleButtonClick = (gameButton) => {
    if (gameButton === "Learn More") {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

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
            1536: { slidesPerView: 3, slidesPerGroup: 3 },
            1280: { slidesPerView: 3, slidesPerGroup: 3 },
            1024: { slidesPerView: 2, slidesPerGroup: 2 },
            768: { slidesPerView: 2, slidesPerGroup: 2 },
            425: { slidesPerView: 1, slidesPerGroup: 1 },
            375: { slidesPerView: 1, slidesPerGroup: 1 },
            320: { slidesPerView: 1, slidesPerGroup: 1 },
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
                    <p className="text-xs leading-5 w-36">
                      {Data.gameDescription}
                    </p>
                  </div>
                  <button
                    className="border border-white w-20 md:w-28 hover:bg-[#8aaec22c] text-xs font-semibold py-2 md:py-3 rounded-md"
                    onClick={() => handleButtonClick(Data.gameButton)}
                  >
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

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80  z-50"
          onClick={closeModal}
        >
          <div
            className="bg-[#213743] text-white  rounded-lg shadow-lg w-[90%] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl xl:max-w-xl p-4 xl:mt-[2rem] lg:mt-[1rem] md:mt-[3rem] mt-[3rem]  relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold flex items-center">
                $75k Weekly Raffle
              </h2>
              <button
                className="text-gray-400 hover:text-white"
                aria-label="Close"
                onClick={closeModal}
              >
                ✖
              </button>
            </div>

            <div className="flex justify-center">
              <img src={WeeklyRaffle} alt="" className="w-[20rem] rounded-md" />
            </div>
            <div className="flex justify-start space-x-2 text-base font-bold">
              <div className="bg-[#0F212E] w-[54px] h-[3.375rem]  px-3 py-1 -mt-16">
                <span className="flex justify-center">5</span>
                <span className=" flex justify-center text-[#B1BAD3]">
                  {" "}
                  Day{" "}
                </span>
              </div>
              <div className="bg-[#0F212E] w-[54px] h-[3.375rem]  px-3 py-1 -mt-16">
                <span className="flex justify-center">5</span>
                <span className=" flex justify-center text-[#B1BAD3]">
                  {" "}
                  Hour{" "}
                </span>
              </div>
              <div className="bg-[#0F212E] w-[54px] h-[3.375rem]  px-3 py-1 -mt-16">
                <span className="flex justify-center">5</span>
                <span className=" flex justify-center text-[#B1BAD3]">
                  {" "}
                  Min{" "}
                </span>
              </div>
              <div className="bg-[#0F212E] w-[56px] h-[3.375rem]  px-3 py-1 -mt-16">
                <span className="flex justify-center">5</span>
                <span className=" flex justify-center text-[#B1BAD3]">
                  {" "}
                  Sec{" "}
                </span>
              </div>
            </div>
            <div className="text-center bg-[#1a2c38] rounded-sm p-4">
              <div className="flex justify-between items-center ">
                <span className="text-sm font-normal text-[#B1BAD3]">
                  Next ticket
                </span>
                <span className="text-sm font-medium">₹0.00 / ₹1,000</span>
              </div>
              <div className="w-full bg-[#213743] rounded-full h-2.5 mt-2">
                <div className="bg-[#2F4553] h-4 rounded-full"></div>
              </div>
              <div className="text-sm font-normal mt-2 text-start text-[#B1BAD3]">
                Your number of entries:{" "}
                <span className="font-medium text-[#FFFFFF]">0</span>
              </div>
            </div>
            <p className="text-base font-normal  text-[#B1BAD3] leading-6 mt-3 p-1">
              Wager to earn tickets into a giveaway where anybody can win. Just
              one ticket could see you sharing in $75,000 every single week.
              With $1,000 wagered equating to one ticket, earn as many tickets
              as possible to give yourself the best chance of winning big!
              Winners drawn on live stream every Saturday 2:00pm GMT at
              www.kick.com/Eddie
            </p>
            <div className=" cursor-pointer text-center font-semibold py-[0.7rem] px-[1.25rem] bg-[#2f4553] hover:bg-[#557086] rounded">
                Read more
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SlideBar;
