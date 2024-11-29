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
import { Tooltip } from "recharts";
import { decodedToken } from "../../resources/utility";
import { getMedalsProgress } from "../../services/LoginServices";

function Mainbar() {
  //   const InfoTooltip = `All bets settled on the sportsbook return a 3x (three times) faster rate of progression compared to Casino (1x progression). Voided bets are excluded.`;
  const { userId } = useParams();
  const navigate = useNavigate();
  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(false);
  const decoded = decodedToken();

  useEffect(() => {
    getUserProgress();
  }, [userId]);

  const getUserProgress = async () => {
    try {
      const response = await getMedalsProgress({
        userId: decoded?.userId,
      });
      setProgressData(response || []);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch users: ", error);
      setLoading(false);
    }
  };
  return (
    <div className="w-full">
      <div
        className="h-auto xl:w-full lg:w-full flex flex-col lg:flex-row justify-evenly items-center p-4"
        style={{
          backgroundImage: `url(${mainbarBGimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            border: "8px solid transparent",
            borderImage: "linear-gradient(to bottom, #213743, #0f212e) 1",
          }}
          className="mb-6 lg:mb-0"
        >
          <div className="bg-[#0f212e] xl:w-[20.5rem] w-[20.5rem] md:w-80 p-5 border border-[#2f4553]">
            <div className="flex justify-between items-center">
              <p>{progressData?.userName || "User"}</p>
              <FaRegStar size={22} color="#2f4553" />
            </div>
            <div className="flex justify-between mt-10">
              <div className="flex items-center space-x-2.5">
                <Link className="text-sm font-medium">Your VIP Progress</Link>
                <FaArrowRight size={13} className="mt-1" color="#b1bad3" />
              </div>
              <div className="flex items-center space-x-1">
                <p className="text-sm font-medium">
                  {progressData?.vipProgress || "0.00%"}
                </p>
                <InfoIcon fontSize="small" className="text-[#b1bad3]" />
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
            <div className="flex justify-between">
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

        <div className="flex md:flex-row space-x-2  md:space-x-5 md:space-y-0">
          <div className="bg-[#1a2c38] hover:cursor-pointer  transition-transform duration-300 hover:translate-y-[-8px]" onClick={() => navigate("/casino/home")}>
            <img
              src={StackCasino}
              className=" md:w-80 h-40 md:h-56  "
              alt="Not Found"
              style={{
                border: "3px solid transparent",
                borderImage:
                  "linear-gradient(to bottom, #017aff, transparent) 1",
              }}
            />
            <div className="flex items-center px-3 py-2.5 space-x-">
              <img src={casinoCard} className="w-4 h-4 " alt="Not Found" />
              <p>Casino</p>
            </div>
          </div>
          <div className="bg-[#1a2c38] hover:cursor-pointer transition-transform duration-300 hover:translate-y-[-8px]" onClick={() => navigate("/ComeSoon")}>
            <img
              src={SportBook}
              className="md:w-80 h-40 md:h-56 "
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
