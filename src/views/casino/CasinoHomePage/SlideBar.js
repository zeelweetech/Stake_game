import React, { useState, useEffect } from "react";
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
import ChristmasRace from "../../../assets/img/ChristmasRace.png";
import { useSelector } from "react-redux";

function SlideBar() {
  const [swiperState, setSwiperState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const [LearnMore, setLearnMore] = useState(false);
  const [Racenow, setRaceNow] = useState(false);
  // const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  // const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);
  const { isBetslipOpen, isType } = useSelector((state) => state.betslip);
  const { isChatOpen } = useSelector((state) => state.chat);
  const { openMenubar } = useSelector((state) => state.auth);

  const initialTime = {
    days: 5,
    hours: 2,
    minutes: 1,
    seconds: 10,
  };
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const countdown = () => {
      let { days, hours, minutes, seconds } = timeLeft;

      if (seconds > 0) {
        seconds--;
      } else {
        seconds = 59;
        if (minutes > 0) {
          minutes--;
        } else {
          minutes = 59;
          if (hours > 0) {
            hours--;
          } else {
            hours = 23;
            if (days > 0) {
              days--;
            }
          }
        }
      }

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(countdown, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

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
      gameButton: "Race now",
      gameImage: ChristmasRace,
    },
  ];

  const handleButtonClick = (gameButton) => {
    if (gameButton === "Learn More") {
      setLearnMore(true);
    } else if (gameButton === "Race now") {
      setRaceNow(true);
    }
  };

  const closeLearnMore = () => {
    setLearnMore(false);
  };

  const closeRacenow = () => {
    setRaceNow(false);
  };

  // const toggleLeftDrawer = () => {
  //   setIsLeftDrawerOpen(!isLeftDrawerOpen);
  // };

  // const toggleRightDrawer = () => {
  //   setIsRightDrawerOpen(!isRightDrawerOpen);
  // };

  return (
    <div className={`${isBetslipOpen || isChatOpen ? "max-w-[53rem] pr-4" : ""} mx-auto`}>
      <div className="flex items-center justify-center">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={0}
          className="w-full"
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
              spaceBetween: 8
            },
            1280: { 
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 8
            },
            1024: { 
              slidesPerView: isBetslipOpen || isChatOpen ? 2 : 2,
              slidesPerGroup: 2,
              spaceBetween: 8
            },
            768: { 
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 8
            },
            425: { slidesPerView: 1, slidesPerGroup: 1 },
            375: { slidesPerView: 1, slidesPerGroup: 1 },
            320: { slidesPerView: 1, slidesPerGroup: 1 }
          }}
        >
          {promoGame.map((Data, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="flex flex-col md:flex-row justify-between items-center bg-[#213743] w-full h-auto md:h-[13.75rem] rounded-md hover:cursor-pointer">
                <div className="flex flex-col space-y-4 justify-around w-full md:w-44 p-4">
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
                <div className="flex justify-center p-4">
                  <img
                    src={Data.gameImage}
                    className="w-full h-auto md:w-48 md:h-48 rounded-md"
                    alt="Not Found"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {LearnMore && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          onClick={closeLearnMore}
        >
          <div
            className="bg-[#213743] text-white rounded-lg shadow-lg w-[90%] max-w-lg p-4 relative overflow-auto xl:max-h-[680px] lg:max-h-[600px] max-h-[600px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold flex items-center">
                $75k Weekly Raffle
              </h2>
              <button
                className="text-gray-400 hover:text-white"
                aria-label="Close"
                onClick={closeLearnMore}
              >
                ✖
              </button>
            </div>
            <div className="flex justify-center">
              <img src={WeeklyRaffle} alt="" className="w-[20rem] rounded-md" />
            </div>
            <div className="flex justify-start space-x-2 text-base font-bold">
              {Object.entries(timeLeft).map(([key, value]) => (
                <div key={key} className="bg-[#0F212E] w-[54px] h-[3.375rem] px-3 py-1 -mt-16">
                  <span className="flex justify-center">{value}</span>
                  <span className="flex justify-center text-[#B1BAD3]">
                    {key.charAt(0).toUpperCase() + key.slice(1, 3)}{" "}
                  </span>
                </div>
              ))}
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
            <p className="text-base font-normal text-[#B1BAD3] leading-6 mt-3 p-1">
              Wager to earn tickets into a giveaway where anybody can win. Just
              one ticket could see you sharing in $75,000 every single week.
              With $1,000 wagered equating to one ticket, earn as many tickets
              as possible to give yourself the best chance of winning big!
              Winners drawn on live stream every Saturday 2:00pm GMT at
              www.kick.com/Eddie
            </p>
            <div className="cursor-pointer text-center font-semibold py-[0.7rem] px-[1.25rem] bg-[#2f4553] hover:bg-[#557086] rounded">
              Read more
            </div>
          </div>
        </div>
      )}

      {Racenow && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          onClick={closeRacenow}
        >
          <div
            className="bg-[#213743] text-white rounded-lg shadow-lg w-[90%] max-w-lg p-4 relative overflow-auto xl:max-h-[670px] lg:max-h-[600px] max-h-[600px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold flex items-center">
                $10 Million Christmas Race
              </h2>
              <button
                className="text-gray-400 hover:text-white"
                aria-label="Close"
                onClick={closeRacenow}
              >
                ✖
              </button>
            </div>

            <div className="flex justify-center">
              <img
                src={ChristmasRace}
                alt=""
                className="w-[20rem] rounded-md"
              />
            </div>
            <div className="flex justify-start space-x-2 text-base font-bold">
              {Object.entries(timeLeft).map(([key, value]) => (
                <div key={key} className="bg-[#0F212E] w-[54px] h-[3.375rem] px-3 py-1 -mt-16">
                  <span className="flex justify-center">{value}</span>
                  <span className="flex justify-center text-[#B1BAD3]">
                    {key.charAt(0).toUpperCase() + key.slice(1, 3)}{" "}
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-[#1a2c38] text-white rounded-sm shadow-md p-4 flex items-center justify-between space-x-4">
              <div className="text-center flex-1">
                <p className="text-sm font-normal text-[#B1BAD3]">
                  Your Position
                </p>
                <p className="text-base font-medium">-</p>
              </div>
              <div className="border-l border-[#557086] h-8"></div>
              <div className="text-center flex-1">
                <p className="text-sm font-normal text-[#B1BAD3]">
                  Your Current Prize
                </p>
                <p className="text-base font-medium">₹0.00</p>
              </div>
              <div className="border-l border-[#557086] h-8"></div>
              <div className="relative text-center flex-1 group">
                <p className="text-sm font-normal text-[#B1BAD3]">
                  Your Wagered
                </p>
                <p className="text-base font-medium">₹0.00</p>

                <div className="absolute left-1/2 w-20 h-9 -mt-[4.2rem] transform -translate-x-1/2 bg-white text-[#0f212e] text-sm font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 flex justify-center items-center">
                  ₹0.00
                  <div className="tooltip-arrow w-3 h-3 bg-white rotate-45 absolute bottom-[-5px] left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>
            </div>

            <p className="text-base font-normal text-[#B1BAD3] leading-6 mt-3 p-1">
              Join Stake's $10m Christmas Race! Over the next 30 days, every bet
              you place - whether in sports or casino - helps you climb the
              leaderboard and secure a spot among the top 25,000 racers. The
              higher you rank, the bigger your prize! Once the race ends, all
              prizes will be instantly credited to your balance in BTC. Get in
              on the action and race your way to incredible rewards this holiday
              season!
            </p>
            <div className="cursor-pointer text-center font-semibold py-[0.7rem] px-[1.25rem] bg-[#2f4553] hover:bg-[#557086] rounded">
              Read more
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SlideBar; 