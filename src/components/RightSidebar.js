import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/Inbox";
import nav from "../nav";
// import { SidebarNav } from "./SidebarNav";
import { useNavigate } from "react-router-dom";
import { SidebarNav } from "./SidebarNav";
import casino from "../assets/img/casino.png";
import casino1 from "../assets/img/casino1.jpg";
import sports from "../assets/img/sports.png"
import sports1 from "../assets/img/sports1.png";
import { closeBetslipModal, openBetslipModal } from "../features/auth/betSlipSlice";
import { closeChatModal, isChatModelOpen } from "../features/auth/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import ChatApp from "../views/rightSidebarView/chat/chatInRightSidebar";
import { ChatSocket } from "../Socket/ChatSocket";
import Sidebar from "./Sidebar";
import Betslip from "../views/rightSidebarView/betSlip/betSlip";

function RightSidebar({ openMenubar, handleDrawerToggle }) {
  const [casinoClicked, setCasinoClicked] = useState(false);
  const [sportsClicked, setSportsClicked] = useState(false);


  const dispatch = useDispatch();
  const { isBetslipOpen } = useSelector((state) => state.betslip);
  console.log("openBetslipModel:", isBetslipOpen);
  const { isChatOpen } = useSelector((state) => state.chat);
  console.log("isChatModelOpen:", isChatOpen);
  const navigate = useNavigate();


  // const handleCasinoClick = () => {
  //   setCasinoClicked((prev) => !prev);
  //   setSportsClicked(false);
  //   navigate("/casino/home");
  // };

  // const handleSportsClick = () => {
  //   setSportsClicked((prevState) => !prevState);
  //   setCasinoClicked(false);
  //   navigate("/ComeSoon");
  // };


  const handleClose = () => {
    if (isBetslipOpen) {
      dispatch(closeBetslipModal());
    }
    if (isChatOpen) {
      dispatch(closeChatModal());
    }
    // setIsRightSidebarOpen(false);
  };
  return (
    <div
      className={`h-full ${openMenubar ? "block" : "hidden md:block "} 
      ${openMenubar && "md:text-white"} 
       md:bg-none overflow-x-hidden`}
    >
      <div className="shadow-2xl shadow-black">
        <div className="flex items-center">
        {/* <button onClick={handleDrawerToggle} className="text-white ml-2 mt-[0.4rem]">
            <MenuIcon/>
        </button>  */}
        <div className="relative h-full"> 
      
            {/* <button
              onClick={handleClose}
              className="absoulate top-4 right-4 text-white text-xl"
            >
              &times;
            </button> */}

         
            <div className="absoulate z-30 overflow-auto h-full space-y-2 rounded-md">
              {isChatOpen && <ChatApp />}
              {isBetslipOpen && <Betslip />}
            </div> 
        </div>
        {/* <button
            onClick={handleCasinoClick}
            className="text-white ml-3 -mt-[1.8rem] relative w-[6rem] h-10 group"
          >
            <img
              src={casino1}
              className={`h-10 w-28 -mt-1 rounded absolute transition-opacity duration-300 group-hover:opacity-100 ${casinoClicked ? "opacity-0" : "opacity-100 "}`}
              alt="Not Found"
            />
            <img
              src={casino}
              alt="Not Found"
              className={`h-10 w-28 -mt-1 rounded absolute transition-opacity duration-300 group-hover:opacity-100 ${casinoClicked ? "opacity-100" : "opacity-0"}`}
            />
            <span className={`absolute mt-8 inset-0 flex justify-center items-center text-sm font-bold ${openMenubar ? "block" : "hidden"}`}>
              CASINO
            </span>
          </button>
          <button
            onClick={handleSportsClick}
            className="text-white ml-2 -mt-[1.8rem] relative w-[6rem] h-10 group"
          >
            <img
              src={sports}
              alt="Not Found"
              className={`h-10 w-28 -mt-1 rounded absolute transition-opacity duration-300 group-hover:opacity-100 ${sportsClicked ? "opacity-0" : "opacity-100 hover:opacity-0"}`}
            />
            <img
              src={sports1}
              className={`h-10 w-28 -mt-1 rounded absolute transition-opacity duration-300 group-hover:opacity-100 ${sportsClicked ? "opacity-100" : "opacity-0 hover:opacity-100"}`}
              alt="Not Found"
            />
            <span className={`absolute mt-8 inset-0 flex justify-center items-center text-sm font-bold ${openMenubar ? "block" : "hidden"}`}>
              SPORTS
            </span>
          </button> */}
        </div>
      </div>
      {/* <div className="mt-0">
        <ul className="space-y-2 rounded-md">
        <SidebarNav
            items={nav}
            openMenubar={openMenubar}
            toggleSidebar={handleDrawerToggle} 
            />
        </ul>
      </div> */}
    </div>
  );
}

export default RightSidebar;
