import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { decodedToken } from "../../resources/utility";
import { FaRegStar } from "react-icons/fa";
import { getMedalsProgress } from "../../services/LoginServices";
import GetStatistic from "./PageView/StatisticData";
import Trophies from "./PageView/Trophies";
import Raffles from "./PageView/Raffles";
import Races from "./PageView/Races";

const Statistic = ({ closeStatistic }) => {
  const [gameMenu, setGameMenu] = useState("Statistic");
  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(false);
  const decoded = decodedToken();
  const userId = decoded?.userId;

  const menuItems = [
    { label: "Statistic" },
    { label: "Trophies" },
    { label: "Races" },
    { label: "Raffles" },
  ];

  useEffect(() => {
    if (userId) {
      getVipProgress();
    }
  }, [userId]);

  const getVipProgress = async () => {
    try {
      setLoading(true);
      const response = await getMedalsProgress({ userId });
      setProgressData(response || []);
    } catch (error) {
      console.error("Failed to fetch VIP progress: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open
      onClose={closeStatistic}
      maxWidth="sm"
      fullWidth
      sx={{
        width: { xs: "95%", sm: "90%", md: "60%" },
        margin: "auto",
        color: "white",
        borderRadius: "10px",
      }}
    >
      <div className="bg-[#1a2c38]">
        <DialogTitle sx={{ color: "#b1bad3" }}>
          <div className="flex justify-between items-center w-full">
            <h1 className="text-lg flex items-center space-x-2">
              <LegendToggleIcon />
              <span>Statistic</span>
            </h1>
            <IconButton onClick={closeStatistic} sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>

        <DialogContent sx={{ backgroundColor: "#1a2c38", color: "#b1bad3" }}>
          <div>
            <div>
              <div className="flex justify-between items-center">
                <p>{progressData?.userName || "User"}</p>
              </div>
              <div className="flex justify-between mt-10">
                <div className="flex items-center space-x-2.5">
                  <Link className="text-sm font-medium">Your VIP Progress</Link>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="text-sm font-medium">
                    {progressData?.vipProgress || "0.00%"}
                  </p>
                </div>
              </div>

              <div className="relative w-full my-2.5 h-[0.625em] bg-[#2f4553] rounded-[10px]">
                <div
                  className="h-full shadow-lg rounded-[10px]"
                  style={{
                    width: progressData?.vipProgress || "0%",
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
          {!progressData && <p>No progress data available.</p>}
        </DialogContent>

        <div className="flex justify-center ">
          <div>
            <DialogContent sx={{ color: "white" }}>
              <div className="bg-[#0f212e] flex rounded-full p-[3px] md:p-[4px] space-x-1 font-bold md:w-[25rem] w-[15rem] overflow-x-auto md:overflow-x-hidden scrollbar-thin">
                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    className={`py-2 md:px-5 px-3 rounded-full ${
                      gameMenu === item.label ? "bg-[#4d718768]" : ""
                    }`}
                    onClick={() => {
                      setGameMenu(item.label);
                      // if (item.label === "Statistic") ;
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </DialogContent>

            <div className="flex justify-center">
              <DialogContent
                sx={{ backgroundColor: "#1a2c38", color: "#b1bad3" }}
              >
                {gameMenu === "Statistic" ? (
                  <GetStatistic userId={userId} />
                ) : gameMenu === "Trophies" ? (
                  <Trophies />
                ) : gameMenu === "Races" ? (
                  <Races />
                ) : gameMenu === "Raffles" ? (
                  <Raffles />
                ) : (
                  <LegendToggleIcon
                    sx={{ fontSize: "120px", color: "#b1bad3" }}
                  />
                )}
              </DialogContent>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default Statistic;
