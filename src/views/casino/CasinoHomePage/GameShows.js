import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGift } from "react-icons/fa6";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Divider } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";


function GameShows({ allGames, isLobby }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const swiperRef = useRef(null);
  const navButtonsRef = useRef(null);
  const dispatch = useDispatch();
  const allGame = useSelector((state) => state.allGame);
  const { isChatOpen } = useSelector((state) => state.chat);
  const { isBetslipOpen } = useSelector((state) => state.betslip);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleAllGame = (gameName, id) => {
    setLoading(true);
    navigate(`/casino/${gameName}/${id}`);
  };

  const getVisibleGamesCount = () => {
    const screenWidth = window.innerWidth;
    const isDrawerOpen = isChatOpen || isBetslipOpen;

    if (screenWidth <= 425) {
      return 3; // Always show 3 games on smaller screens
    } else if (screenWidth <= 768) {
      return isDrawerOpen ? 3 : 4; // Show 3/4 games on mobile
    } else if (screenWidth >= 1024) {
      return isDrawerOpen ? 4 : 7; // Show 4/7 games on large screens
    } else {
      return isDrawerOpen ? 4 : 5; // Show 4/5 games on medium screens
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.update();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update swiper when drawer state changes
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.slidesPerView = getVisibleGamesCount();
      swiperRef.current.swiper.params.slidesPerGroup = 1;
      swiperRef.current.swiper.update();
    }
  }, [isChatOpen, isBetslipOpen]);

  return (
    <div className={`${!isLobby && "flex justify-center select-none"}`}>
      <div className={`${!isLobby && "flex flex-col items-start mt-10"}`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center mx-3 space-x-2">
            <FaGift
              fontSize="small"
              className="text-[#b1bad3] hover:text-white"
            />
            <Link className="text-lg font-medium text-white select-text">Game Shows</Link>
          </div>
          {isLobby && (
            <div ref={navButtonsRef}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  border: "1px solid",
                  borderColor: "#b1bad3",
                  borderRadius: 2,
                  bgcolor: "#1a2c38",
                  color: "#b1bad3",
                  "& svg": {
                    m: 1,
                  },
                }}
              >
                <ArrowBackIosIcon
                  fontSize="small"
                  className="cursor-pointer prev-arrow"
                />
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ borderColor: "#b1bad3" }}
                />
                <ArrowForwardIosIcon
                  fontSize="small"
                  className="cursor-pointer next-arrow"
                />
              </Box>
            </div>
          )}
        </div>

        <div className="mx-5 relative mt-3">
          {isLobby ? (
            <Swiper
              slidesPerView={getVisibleGamesCount()}
              slidesPerGroup={1}
              navigation
              modules={[Navigation]}
              ref={swiperRef}
              spaceBetween={15}
              breakpoints={{
                320: {
                  slidesPerView: 3,
                  slidesPerGroup: 1,
                },
                375: {
                  slidesPerView: 3,
                  slidesPerGroup: 1,
                },
                425: {
                  slidesPerView: 3,
                  slidesPerGroup: 1,
                },
                640: {
                  slidesPerView: isChatOpen || isBetslipOpen ? 3 : 4,
                  slidesPerGroup: 1,
                },
                768: {
                  slidesPerView: isChatOpen || isBetslipOpen ? 3 : 4,
                  slidesPerGroup: 1,
                },
                1024: {
                  slidesPerView: isChatOpen || isBetslipOpen ? 4 : 7,
                  slidesPerGroup: 1,
                },
              }}
            >
              {allGame?.allGame?.games?.map((gameShows, index) =>
                gameShows?.gameType === "GameShows" ? (
                  <SwiperSlide key={index}>
                    <div className="text-center">
                      <img
                        src={gameShows.gameImage}
                        className={`${
                          windowWidth <= 425 
                            ? 'w-24 h-32' // Smaller size for 425px and below
                            : 'xl:w-44 lg:w-36 lg:h-48 xl:h-56'
                        } rounded-md hover:cursor-pointer transition-transform duration-300 hover:translate-y-[-10px]`}
                        alt="Not Found"
                        onClick={() => handleAllGame(gameShows?.gameName, gameShows?.id)}
                      />
                      <div className="flex items-center mt-1">
                        <span className="relative flex h-3 w-3 mr-1">
                          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#1fff20] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1fff20]"></span>
                        </span>
                        <p>{gameShows?.gameRating}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ) : null
              )}
            </Swiper>
          ) : (
            <div className={`grid ${
              windowWidth <= 425
                ? 'grid-cols-3'
                : windowWidth >= 1024 
                  ? isChatOpen || isBetslipOpen 
                    ? 'md:grid-cols-4' 
                    : 'md:grid-cols-6'
                  : windowWidth <= 768 
                    ? 'grid-cols-4' 
                    : isChatOpen || isBetslipOpen 
                      ? 'md:grid-cols-3' 
                      : 'md:grid-cols-4'
            } gap-x-2 md:gap-x-4 gap-y-5 px-2 md:px-0`}>
              {allGame?.allGame?.games?.map((gameShows, index) =>
                gameShows?.gameType === "GameShows" ? (
                  <div key={index}>
                    <div className="text-center">
                      <img
                        src={gameShows.gameImage}
                        className={`${'xl:w-48 lg:w-36 lg:h-48 xl:h-64'
                        } rounded-md hover:cursor-pointer transition-transform duration-300 hover:translate-y-[-10px]`}
                        alt="Not Found"
                        onClick={() => handleAllGame(gameShows?.gameName, gameShows?.id)}
                      />
                      <div className="flex items-center mt-1">
                        <span className="relative flex h-3 w-3 mr-1">
                          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#1fff20] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1fff20]"></span>
                        </span>
                        <p>{gameShows?.gameRating}</p>
                      </div>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GameShows;


// useEffect(() => {
//   if (swiperRef.current && swiperRef.current.swiper) {
//     const prevButton = navButtonsRef.current.querySelector(".prev-arrow");
//     const nextButton = navButtonsRef.current.querySelector(".next-arrow");
//     swiperRef.current.swiper.params.navigation.prevEl = prevButton;
//     swiperRef.current.swiper.params.navigation.nextEl = nextButton;
//     swiperRef.current.swiper.navigation.init();
//     swiperRef.current.swiper.navigation.update();
//     swiperRef.current.swiper.params.slidesPerView = getVisibleGamesCount();
//     swiperRef.current.swiper.params.slidesPerGroup = getVisibleGamesCount();
//   }
// }, []);