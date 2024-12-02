import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { decodedToken } from "../../resources/utility";
import { FaRegStar } from "react-icons/fa";
import { getMedalsProgress } from "../../services/LoginServices";
import { getStatisticsData } from "../../services/InProfileServices";
import GetStatistic from "./PageView/StatisticData";
// import { getMedalsProgress, getStatisticsData } from "../../services/InProfileServices";

const Statistic = () => {
  const [open, setOpen] = useState(true);
  const [gameMenu, setGameMenu] = useState("Statistic");
  const { userId: paramUserId } = useParams();
  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [statistic, setStatistic] = useState(null);

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
      // fetchStatistics();
    }
  }, [userId]);

  const getVipProgress = async () => {
    try {
      setLoading(true);
      const response = await getMedalsProgress({ userId });
      console.log("++++++++++++", response);

      setProgressData(response || []);
    } catch (error) {
      console.error("Failed to fetch VIP progress: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      maxWidth="sm"
      fullWidth
      sx={{
        width: { xs: "95%", sm: "90%", md: "60%" },
        margin: "auto",
        color: "white",
        borderRadius: "10px",
        // backgroundColor: '#2f4553'
      }}
    >
      <div className="bg-[#1a2c38]">
      <DialogTitle sx={{ color: "#b1bad3" }}>
        <div className="flex justify-between items-center w-full">
          <h1 className="text-lg flex items-center space-x-2">
            <LegendToggleIcon />
            <span>Statistic</span>
          </h1>
          <IconButton onClick={() => setOpen(false)} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>

      <DialogContent sx={{  color: "#b1bad3" }}>
        {loading ? (
          <p>Loading...</p>
        ) : progressData ? (
          <>
            <div className="flex justify-between">
              <p>{progressData.userName || "User"}</p>
              <p>{progressData.vipProgress || "0.00%"}</p>
            </div>
            <div className="relative w-full my-2.5 h-[0.625em] bg-[#2f4553] rounded-[10px]">
              <div
                className="h-full shadow-lg rounded-[10px]"
                style={{
                  width: progressData.vipProgress || "0%",
                  backgroundColor: "#1475e1",
                }}
              ></div>
            </div>
          </>
        ) : (
          <p>No progress data available.</p>
        )}
      </DialogContent>
      <div className="flex justify-center">
        <div>
          <DialogContent sx={{ color: "white" }}>
            <div className="bg-[#0f212e] flex rounded-full p-[4px] space-x-1 font-bold w-[25rem]">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  className={`py-2 lg:px-5 rounded-full ${gameMenu === item.label ? "bg-[#4d718768]" : ""}`}
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

          <DialogContent sx={{ backgroundColor: "#1a2c38", color: "#b1bad3" }}>
            {gameMenu === "Statistic" ? (
              <GetStatistic userId={userId} />
            ) : (
              <LegendToggleIcon sx={{ fontSize: "120px", color: "#b1bad3" }} />
            )}
          </DialogContent>
        </div>
      </div>
      </div>
    </Dialog>
  );
};

export default Statistic;



// import {
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   FormControl,
//   IconButton,
//   Menu,
//   MenuItem,
//   TextField,
//   Typography,
// } from "@mui/material";
// import LegendToggleIcon from "@mui/icons-material/LegendToggle";
// import { useEffect, useState } from "react";
// import CloseIcon from "@mui/icons-material/Close";
// import { getMedalsProgress } from "../../services/LoginServices";
// import { Link, useParams } from "react-router-dom";
// import { decodedToken } from "../../resources/utility";
// import { FaRegStar } from "react-icons/fa";

// const Statistic = () => {
//   const [open, setOpen] = useState(true);
//   const [gameMenu, setGameMenu] = useState("Statistic");
//   const { userId } = useParams();
//   const [progressData, setProgressData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const decoded = decodedToken();

//   const menuItems = [
//     { label: "Statistic" },
//     { label: "Trophies" },
//     { label: "Races" },
//     { label: "Raffles" },
//   ];

//   useEffect(() => {
//     getVipProgress();
//   }, [userId]);

//   const getVipProgress = async () => {
//     try {
//       const response = await getMedalsProgress({
//         userId: decoded?.userId,
//       });
//       setProgressData(response || []);
//       setLoading(false);
//     } catch (error) {
//       console.error("Failed to fetch users: ", error);
//       setLoading(false);
//     }
//   };

//   return (
//     <Dialog
//       open={open}
//       onClose={() => setOpen(false)}
//       maxWidth="sm"
//       fullWidth
//       sx={{
//         color: "white",
//         borderRadius: 0,
//       }}
//     >
//       <DialogTitle sx={{ backgroundColor: "#1a2c38", color: "#b1bad3" }}>
//         <div className="flex justify-between items-center w-full">
//           <h1 className="text-lg flex items-center space-x-2">
//             <span className="mr-2">
//               <LegendToggleIcon />
//             </span>
//             Statistic
//           </h1>
//           <IconButton onClick={() => setOpen(false)} sx={{ color: "white" }}>
//             <CloseIcon />
//           </IconButton>
//         </div>
//       </DialogTitle>

//       <DialogContent sx={{ backgroundColor: "#1a2c38", color: "#b1bad3" }}>
//         <div>
//           <div>
//             <div className="flex justify-between items-center">
//               <p>{progressData?.userName || "User"}</p>
//             </div>
//             <div className="flex justify-between mt-10">
//               <div className="flex items-center space-x-2.5">
//                 <Link className="text-sm font-medium">Your VIP Progress</Link>
//               </div>
//               <div className="flex items-center space-x-1">
//                 <p className="text-sm font-medium">
//                   {progressData?.vipProgress || "0.00%"}
//                 </p>
//               </div>
//             </div>

//             <div className="relative w-full my-2.5 h-[0.625em] bg-[#2f4553] rounded-[10px]">
//               <div
//                 className={`h-full shadow-lg rounded-[10px]`}
//                 style={{
//                   width: progressData?.vipProgress
//                     ? progressData.vipProgress
//                     : "0%",
//                   backgroundColor: progressData?.vipProgress
//                     ? "#1475e1"
//                     : "#2f4553",
//                 }}
//               ></div>
//             </div>
//             <div className="flex justify-between">
//               <div className="flex items-center space-x-1">
//                 <FaRegStar
//                   size={18}
//                   color={
//                     progressData?.medal === "Bronze"
//                       ? "#c69c6d"
//                       : progressData?.medal === "Silver"
//                       ? "#b2cccc"
//                       : progressData?.medal === "Gold"
//                       ? "#fed100"
//                       : progressData?.medal === "Platinum"
//                       ? "#6fdde7"
//                       : "#2f4553"
//                   }
//                 />
//                 <p className="text-sm text-[#b1bad3] font-medium">
//                   {progressData?.medal || "None"}
//                 </p>
//               </div>
//               <div className="flex items-center space-x-1">
//                 <FaRegStar
//                   size={18}
//                   color={
//                     progressData?.nextMedal === "Bronze"
//                       ? "#c69c6d"
//                       : progressData?.nextMedal === "Silver"
//                       ? "#b2cccc"
//                       : progressData?.nextMedal === "Gold"
//                       ? "#fed100"
//                       : progressData?.nextMedal === "Platinum"
//                       ? "#6fdde7"
//                       : "#2f4553"
//                   }
//                 />
//                 <p className="text-sm text-[#b1bad3] font-medium">
//                   {progressData?.nextMedal || "Bronze"}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </DialogContent>

//       <DialogContent sx={{ backgroundColor: "#1a2c38", color: "white" }}>
//         <div className="flex flex-col items-center justify-start h-full bg-[#1a2c38]">
//           <div className="flex justify-center w-full">
//             <div className="bg-[#0f212e] flex rounded-full p-[4px] space-x-1 font-bold">
//               {menuItems.map((item) => (
//                 <button
//                   key={item.label}
//                   className={`py-2 lg:px-5 rounded-full flex justify-center items-center text-sm ${
//                     gameMenu === item.label
//                       ? "bg-[#4d718768]"
//                       : "hover:bg-[#4d718768]"
//                   }`}
//                   onClick={() => setGameMenu(item.label)}
//                 >
//                   <p className="text-white">{item.label}</p>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </DialogContent>

//       <DialogContent  sx={{ backgroundColor: "#1a2c38", color: "#b1bad3" }}>
//         <div className="items-center text-center">
//             <LegendToggleIcon sx={{fontSize: "120px", color: "#b1bad3"}}/>
//             <p className="text-[#b1bad3] text-sm">This user has no visible statistics.</p>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default Statistic;
