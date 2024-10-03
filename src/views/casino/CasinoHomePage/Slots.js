import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
import Filter7Icon from "@mui/icons-material/Filter7";
import crashGame from "../../../assets/img/crashGame.avif";
import plinkoGame from "../../../assets/img/plinkoGame.jpeg";
import minesGame from "../../../assets/img/minesGame.avif";
import limboGame from "../../../assets/img/limboGame.avif";
import wheelGame from "../../../assets/img/wheelGame.avif";
import dragonGame from "../../../assets/img/dragonGame.avif";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Divider } from "@mui/material";

function Slots() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const slotsGames = [
    { slotImg: crashGame, gameRating: "67589" },
    { slotImg: plinkoGame, gameRating: "67589" },
    { slotImg: minesGame, gameRating: "67589" },
    { slotImg: limboGame, gameRating: "67589" },
    { slotImg: wheelGame, gameRating: "67589" },
    { slotImg: dragonGame, gameRating: "67589" },
    { slotImg: dragonGame, gameRating: "67589" },
  ];

  const handleAllGame = (gameName, id) => {
    setLoading(true);
    navigate(`/casino/${gameName}/${id}`);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center mx-3 mt-8 space-x-2">
          <Filter7Icon
            fontSize="small"
            className="text-[#b1bad3] hover:text-white"
          />
          <Link className="text-lg font-medium">Slots</Link>
        </div>
        <div className="relative mr-8">
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
            <ArrowBackIosIcon fontSize='small'/>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ borderColor: "#b1bad3" }}
            />
            <ArrowForwardIosIcon fontSize='small'/>
          </Box>
        </div>
      </div>

      <div className="relative">
        {/* Swiper container */}
        {/* <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          className="mx-3 pt-4"
        > */}
        <div className="grid grid-cols-6 pt-4 mx-3">
          {slotsGames.map((slots, index) => (
            // <SwiperSlide key={index} className="text-center">
            <div key={index} className="text-center">
              <div className="relative">
                <img
                  src={slots.slotImg}
                  className="xl:w-44 lg:w-36 lg:h-48 xl:h-56 rounded-md hover:cursor-pointer transition-transform duration-300 hover:translate-y-[-10px]"
                  alt="Not Found"
                  onClick={() => handleAllGame(slots?.gameName, slots?.id)}
                />
              </div>
              <div className="flex items-center mt-1 justify-center">
                <span className="relative flex h-3 w-3 mr-1">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#1fff20] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1fff20]"></span>
                </span>
                <p>{slots.gameRating}</p>
              </div>
            </div>
            // </SwiperSlide>
          ))}
        </div>
        {/* </Swiper> */}
      </div>
    </div>
  );
}

export default Slots;
