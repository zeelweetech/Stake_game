import React, { useEffect, useState } from "react";
import mainbarBGimage from "../../assets/img/MainbarBG.png";
import { FaRegStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import StackCasino from "../../assets/img/StackCasino.png";
import SportBook from "../../assets/img/SportBook.png";
import casinoCard from "../../assets/img/card.png";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import { decodedToken } from "../../resources/utility";
import VIP from "../Profile/Vip";
import { getMedalsProgress } from "../../services/LoginServices";
import { useSelector } from "react-redux";

function Mainbar() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showVIP, setShowVIP] = useState(false);
  const decoded = decodedToken();
  const { isBetslipOpen } = useSelector((state) => state.betslip);
  const { isChatOpen } = useSelector((state) => state.chat);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    getUserProgress();
  }, [userId]);
  const handleToggle = () => {
    setShowVIP((prev) => !prev); // Toggle the state
  };
  const getUserProgress = async () => {
    try {
      const response = await getMedalsProgress({
        userId: decoded?.userId,
      });
      setProgressData(response || []);
      setLoading(false);
    } catch (error) {
      // console.error("Failed to fetch users: ", error);
      setLoading(false);
    }
  };

  const getVIPProgressWidth = () => {
    if (windowWidth <= 425) {
      return "w-[20rem]";
    } else if (windowWidth <= 768) {
      return isChatOpen || isBetslipOpen ? "w-[16rem]" : "w-[22rem]";
    } else if (windowWidth <= 1024) {
      return isChatOpen || isBetslipOpen ? "w-[18rem]" : "w-96";
    } else {
      return isChatOpen || isBetslipOpen ? "w-[20.5rem]" : "w-[20.5rem]";
    }
  };

  return (
    <div className="w-full">
      <div
        className={`h-auto flex flex-col lg:flex-row justify-evenly items-center p-4 ${
          isBetslipOpen || isChatOpen
            ? "flex xl:flex-row lg:flex-col md:flex-col gap-y-5"
            : ""
        }`}
        style={{
          backgroundImage: `url(${mainbarBGimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            width: "Auto",
            border: "8px solid transparent",
            borderImage: "linear-gradient(to bottom, #213743, #0f212e) 1",
          }}
          className="mb-6 lg:mb-0"
        >
          <div
            className={`${getVIPProgressWidth()}  bg-[#0f212e] max-80 md:w-[23rem] p-6 border text-white border-[#2f4553]`}
          >
            <div className="flex justify-between font-semibold cursor-default items-center">
              <p>{progressData?.userName || "User"}</p>
              <FaRegStar size={22} color="#2f4553" />
            </div>
            <div className="flex justify-between mt-10">
              <div
                className="flex items-center space-x-2.5 cursor-pointer group"
                onClick={handleToggle}
              >
                <p className="text-sm text-white font-medium transform transition-transform duration-100 ease-in group-hover:translate-x-2">
                  Your VIP Progress
                </p>
                <FaArrowRight
                  size={13}
                  className="text-[#b1bad3] mt-1 font-bold group-hover:text-white group-hover:translate-x-2 transition-transform duration-100 ease-in"
                />
              </div>
              {showVIP && <VIP closeVip={handleToggle} />}
              <div className="flex items-center space-x-1 relative">
                <p className="text-sm font-medium cursor-default">
                  {progressData?.vipProgress || "0.00%"}
                </p>
                <div className="group relative flex items-center">
                  <InfoIcon fontSize="small" className="text-[#b1bad3]" />
                  <div
                    id="tooltip-top"
                    role="tooltip"
                    className="absolute bottom-full left-[-1rem] text-sm -translate-x-1/2 mb-3 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity bg-white text-[#0f212e] font-semibold rounded-md px-2 py-0.5 z-10 w-max max-w-xs xl:-ml-0 lg:-ml-0 md:-ml-0 -ml-[6rem]"
                  >
                    <p className="overflow-hidden line-clamp-3.5">
                      All bets settled on the sportsbook return a 3x (three
                      times) faster rate of progression compared to Casino (1x
                      progression). Voided bets are excluded.
                    </p>
                    <div className="tooltip-arrow w-3 h-3 bg-white rotate-45 absolute bottom-[-6px] xl:left-[11.6rem] lg:left-[11.6rem] md:left-[11.6rem] left-[17.5rem] transform -translate-x-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full my-2.5 h-[0.625em] bg-[#2f4553] rounded-[10px]">
              <div
                className={`h-full shadow-lg rounded-[10px]`}
                style={{
                  width: progressData?.vipProgress
                    ? progressData.vipProgress
                    : "0%",
                  backgroundColor: progressData?.vipProgress
                    ? "#1475e1"
                    : "#2f4553",
                }}
              ></div>
            </div>
            <div className="flex justify-between cursor-default">
              <div className="flex items-center space-x-1">
                <FaRegStar
                  size={18}
                  color={
                    progressData?.medal === "Bronze"
                      ? "#c69c6d"
                      : progressData?.medal === "Silver"
                      ? "#b2cccc"
                      : progressData?.medal === "Gold"
                      ? "#fed100"
                      : progressData?.medal === "Platinum"
                      ? "#6fdde7"
                      : "#2f4553"
                  }
                />
                <p className="text-sm text-[#b1bad3] font-medium">
                  {progressData?.medal || "None"}
                </p>
              </div>
              <div className="flex items-center space-x-1">
                <FaRegStar
                  size={18}
                  color={
                    progressData?.nextMedal === "Bronze"
                      ? "#c69c6d"
                      : progressData?.nextMedal === "Silver"
                      ? "#b2cccc"
                      : progressData?.nextMedal === "Gold"
                      ? "#fed100"
                      : progressData?.nextMedal === "Platinum"
                      ? "#6fdde7"
                      : "#2f4553"
                  }
                />
                <p className="text-sm text-[#b1bad3] font-medium">
                  {progressData?.nextMedal || "Bronze"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`flex md:flex-row md:space-x-1 md:space-y-0 ${
            isBetslipOpen || isChatOpen ? "flex flex-row" : ""
          } `}
        >
          <div
            className="bg-[#1a2c38] h-full hover:cursor-pointer transition-transform duration-300 hover:translate-y-[-8px] mx-3"
            onClick={() => navigate("/casino/home")}
          >
            <img
              src={StackCasino}
              className="xl:w-80 xl:h-56 lg:w-72 lg:h-52 md:w-72 h-40 md:h-52"
              alt="Not Found"
              style={{
                border: "3px solid transparent",
                borderImage:
                  "linear-gradient(to bottom, #017aff, transparent) 1",
              }}
            />
            <div className="flex items-center px-3 py-2.5 space-x-2">
              <img src={casinoCard} className="w-4 h-4 " alt="Not Found" />
              <p>Casino</p>
            </div>
          </div>
          <div
            className="bg-[#1a2c38]  hover:cursor-pointer transition-transform duration-300 hover:translate-y-[-8px]"
            onClick={() => navigate("/ComeSoon")}
          >
            <img
              src={SportBook}
              className="xl:w-80 xl:h-56 lg:w-72 lg:h-52 md:w-72 h-40 md:h-52"
              alt="Not Found"
              style={{
                border: "3px solid transparent",
                borderImage:
                  "linear-gradient(to bottom, #00ca51, transparent) 1",
              }}
            />
            <div className="flex items-center px-4 py-1 space-x-2">
              <SportsBasketballIcon
                className="text-[#b1bad3]"
                sx={{ fontSize: 20 }}
              />
              <p>Sportsbook</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainbar;
