import { useEffect, useState } from "react";
import { getMedalsProgress } from "../../../services/LoginServices";
import {
  FaRegStar,
  // FaArrowRight
} from "react-icons/fa";
import InfoIcon from "@mui/icons-material/Info";
import { CircularProgress } from "@mui/material";
import { decodedToken } from "../../../resources/utility";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
// import casino from "../../../assets/img/casino.avif";
import card from "../../../assets/img/card.png";
import { Link } from "react-router-dom";

const Progress = () => {
  const [progressData, setProgressData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [gameMenu, setGameMenu] = useState("Progress");

  const decoded = decodedToken();
  const userId = decoded?.userId;

  useEffect(() => {
    if (userId) {
      getVipProgress();
    }
  }, [userId]);

  const getVipProgress = async () => {
    try {
      const response = await getMedalsProgress({
        userId: userId,
      });
      setProgressData(response || {});
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch VIP progress: ", error);
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center">
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <>
          {gameMenu === "Progress" && (
            <div
              style={{
                border: "8px solid transparent",
                borderImage: "linear-gradient(to bottom, #213743, #0f212e) 1",
              }}
              className="mb-6"
            >
              <div className="bg-[#0f212e] w-full md:w-80 px-5 py-7 border text-white border-[#2f4553]">
                <div className="flex justify-between items-center">
                  <p>{progressData?.userName || "User"}</p>
                  <FaRegStar size={22} color="#2f4553" />
                </div>
                <div className="flex justify-between mt-10">
                  <div className="flex items-center space-x-2.5">
                    <Link className="text-sm font-medium">
                      Your VIP Progress
                    </Link>
                    {/* <FaArrowRight
                                            size={13}
                                            className="mt-1"
                                            color="#b1bad3"
                                        /> */}
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="text-sm font-medium">
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
                          times) faster rate of progression compared to Casino
                          (1x progression). Voided bets are excluded.
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
          )}
        </>
      )}

      <div className="justify-start text-left">
        <p className="font-bold p-2 md:text-sm text-sm">
          Want to achieve the next level?
        </p>

        {/* Casino Section */}
        <div className="flex items-center justify-start space-x-5 mb-2">
          <div className="bg-[#0f212e] p-2 rounded-lg">
            <img src={card} alt="Casino Icon" />
          </div>
          <div>
            <p className="text-sm font-bold">Wager on Casino</p>
            <p className="text-sm">Play & wager on any casino games</p>
          </div>
        </div>

        {/* Sportsbook Section */}
        <div className="flex items-center justify-start space-x-5 mb-3">
          <div className="bg-[#0f212e] p-2 rounded-lg">
            <SportsBaseballIcon
              className="text-[#b1bad3]"
              sx={{ fontSize: 20 }}
            />
          </div>
          <div>
            <p className="text-sm font-bold">Bet on Sportsbook</p>
            <p className="text-sm">Place bets on upcoming & live sports</p>
          </div>
        </div>

        {/* x3 Section */}
        <div className="flex items-center justify-start space-x-5 mb-4">
          <div className="bg-[#0f212e] p-2 rounded-lg">
            <div className="text-[#b1bad3] font-semibold text-xl">x3</div>
          </div>
          <div>
            <p className="text-sm font-bold">Bet on Sportsbook</p>
            <p className="text-sm">Place bets on upcoming & live sports</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
