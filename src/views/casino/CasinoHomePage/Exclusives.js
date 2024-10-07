import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsBookmarkStarFill } from "react-icons/bs";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Divider } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Exclusives({ allGames, isLobby }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const swiperRef = useRef(null);
  const navButtonsRef = useRef(null);

  const handleAllGame = (gameName, id) => {
    setLoading(true);
    navigate(`/casino/${gameName}/${id}`);
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const prevButton = navButtonsRef.current.querySelector(".prev-arrow");
      const nextButton = navButtonsRef.current.querySelector(".next-arrow");
      swiperRef.current.swiper.params.navigation.prevEl = prevButton;
      swiperRef.current.swiper.params.navigation.nextEl = nextButton;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center mx-3 mt-8 space-x-2">
          <BsBookmarkStarFill
            fontSize="small"
            className="text-[#b1bad3] hover:text-white"
          />
          <Link className="text-lg font-medium">Stake Exclusives</Link>
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

      <div className="relative mt-3">
        {isLobby ? (
          <Swiper
            slidesPerView={6}
            slidesPerGroup={6}
            navigation
            modules={[Navigation]}
            ref={swiperRef}
          >
            {allGames?.games?.map((exclusives, index) =>
              exclusives?.gameType === "StackExclusives" ? (
                <SwiperSlide key={index}>
                  <div className="text-center">
                    <img
                      src={exclusives.gameImage}
                      className="xl:w-44 lg:w-36 lg:h-48 xl:h-56 rounded-md hover:cursor-pointer transition-transform duration-300 hover:translate-y-[-10px]"
                      alt="Not Found"
                      onClick={() => handleAllGame(exclusives?.gameName, exclusives?.id)}
                    />
                    <div className="flex items-center mt-1">
                      <span className="relative flex h-3 w-3 mr-1">
                        <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#1fff20] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1fff20]"></span>
                      </span>
                      <p>{exclusives?.gameRating}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null
            )}
          </Swiper>
        ) : (
          <div className="grid grid-cols-6 gap-x-4 gap-y-5">
            {allGames?.games?.map((exclusives, index) =>
              exclusives?.gameType === "StackExclusives" ? (
                <div key={index}>
                  <div className="text-center">
                    <img
                      src={exclusives.gameImage}
                      className="xl:w-44 lg:w-36 lg:h-48 xl:h-56 rounded-md hover:cursor-pointer transition-transform duration-300 hover:translate-y-[-10px]"
                      alt="Not Found"
                      onClick={() => handleAllGame(exclusives?.gameName, exclusives?.id)}
                    />
                    <div className="flex items-center mt-1">
                      <span className="relative flex h-3 w-3 mr-1">
                        <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#1fff20] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1fff20]"></span>
                      </span>
                      <p>{exclusives?.gameRating}</p>
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Exclusives;


