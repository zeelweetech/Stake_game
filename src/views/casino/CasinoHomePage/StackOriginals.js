import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFire } from "react-icons/bs";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Divider } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { decodedToken } from "../../../resources/utility";
import {
  CrashSocket,
  DragonTowerSocket,
  LimboSocket,
  MineSocket,
  PlinkoSocket,
  WheelSocket,
} from "../../../socket";
import { useDispatch, useSelector } from "react-redux";
import { getAllGames } from "../../../services/GameServices";
import { setAllGame } from "../../../features/casino/allGameSlice";

function StackOriginals({ isLobby }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const swiperRef = useRef(null);
  const navButtonsRef = useRef(null);
  const decoded = decodedToken();
  const dispatch = useDispatch();
  const allGame = useSelector((state) => state.allGame);

  const handleAllGame = (gameName, id) => {
    setLoading(true);
    navigate(`/casino/${gameName}/${id}`);
    
    switch (gameName) {
      case "Crash":
        return CrashSocket.emit("joinGame", {
          userId: decoded?.userId,
          gameId: id,
        });
      case "Plinko":
        return PlinkoSocket.emit("joinGame", {
          userId: decoded?.userId,
          gameId: id,
        });
      case "Mines":
        return MineSocket.emit("joinGame", {
          userId: decoded?.userId,
          gameId: id,
        });
      case "DragonTower":
        return DragonTowerSocket.emit("joinGame", {
          userId: decoded?.userId,
          gameId: id,
        });
      case "Limbo":
        return LimboSocket.emit("joinGame", {
          userId: decoded?.userId,
          gameId: id,
        });
      case "Wheel":
        return WheelSocket.emit("joinGame", {
          userId: decoded?.userId,
          gameId: id,
        });
      default:
        break;
    }
  };
  useEffect(() => {
    GetAllGames();
  }, []);

  const GetAllGames = async () => {
    await getAllGames()
      .then((response) => {
        dispatch(setAllGame(response))
      })
      .catch((error) => {
        console.log("error", error);
      });
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
    <div className={`${!isLobby && "flex justify-center"}`}>
      <div className={`${!isLobby && "flex flex-col items-start mt-10"}`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center mx-3 space-x-2">
            <BsFire fontSize={20} className="text-[#b1bad3] hover:text-white" />
            <Link className="text-lg font-medium text-white">Listor Originals</Link>
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
              slidesPerView={6}
              slidesPerGroup={6}
              navigation
              modules={[Navigation]}
              ref={swiperRef}
              spaceBetween={15}
              breakpoints={{
                320: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                },
                375: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                },
                425: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                },
                640: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
                768: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                },
                1024: {
                  slidesPerView: 6,
                  slidesPerGroup: 6,
                },
              }}
            >
              {allGame?.allGame?.games?.map((gameData, index) =>
                gameData?.gameType === "casino" ||
                  gameData?.gameType === "Casino" ? (
                  <SwiperSlide key={index}>
                    <div className="text-center">
                      <img
                        src={gameData.gameImage}
                        className="xl:w-44 lg:w-36 lg:h-48 xl:h-56 rounded-md hover:cursor-pointer transition-transform duration-300 hover:translate-y-[-10px]"
                        alt="Not Found"
                        onClick={() =>
                          handleAllGame(gameData?.gameName, gameData?.id)
                        }
                      />
                      <div className="flex items-center mt-1">
                        <span className="relative flex h-3 w-3 mr-1">
                          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#1fff20] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1fff20]"></span>
                        </span>
                        <p>{gameData?.gameRating}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ) : null
              )}
            </Swiper>
          ) : (
            <div className="grid grid-cols-3 md:grid-cols-6 gap-x-2 md:gap-x-4 gap-y-5 px-2 md:px-0">
              {allGame?.allGame?.games?.map((gameData, index) =>
                gameData?.gameType === "casino" ||
                  gameData?.gameType === "Casino" ? (
                  <div key={index}>
                    <div className="text-center">
                      <img
                        src={gameData.gameImage}
                        className="xl:w-44 lg:w-36 lg:h-48 xl:h-56 rounded-md hover:cursor-pointer transition-transform duration-300 hover:translate-y-[-10px]"
                        alt="Not Found"
                        onClick={() =>
                          handleAllGame(gameData?.gameName, gameData?.id)
                        }
                      />
                      <div className="flex items-center mt-1">
                        <span className="relative flex h-3 w-3 mr-1">
                          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#1fff20] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1fff20]"></span>
                        </span>
                        <p>{gameData?.gameRating}</p>
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

export default StackOriginals;
