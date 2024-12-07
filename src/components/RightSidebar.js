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
import chat from "../assets/img/sports.png";
import sports1 from "../assets/img/sports1.png";

function RightSidebar({ openMenubar, handleDrawerToggle }) {
  const [betSlipClicked, setBetSlipClicked] = useState(false);
  const [chatClicked, setChatClicked] = useState(false);
  const navigate = useNavigate();

  const handleBetSlipClick = () => {
    setBetSlipClicked((prev) => !prev);
    setChatClicked(false);
    navigate("/betSlip/home");
  };

  const handleChatClick = () => {
    setChatClicked((prevState) => !prevState);
    setBetSlipClicked(false);
    navigate("/ComeSoon");
  };

  return (
    <div
      className={`h-full ${openMenubar ? "block" : "hidden md:block "} 
      ${openMenubar && "md:text-white"} 
       md:bg-none overflow-x-hidden`}
    >
      <div className=" h-14 px-2 py-[0.70rem] shadow-2xl shadow-black">
        <div className="flex items-center">
          {/* <button onClick={handleDrawerToggle} className="text-white ml-2 mt-[0.4rem]">
            <MenuIcon />
          </button> */}
          <button
            onClick={handleChatClick}
            className="text-white ml-3 -mt-[1.8rem] relative w-[6rem] h-10 group"
          >
            <button
            onClick={() => {
              toggleSidebar(); // Open the sidebar
              setIsOpen(false); // Close the chat menu
            }}
            className="flex items-center space-x-4 py-2"
          >
            <BsChatDotsFill size={20} color="#0f212e" />
            <p className="text-base text-[#0f212e]">Chat</p>
          </button>
            <img
              src={casino}
              alt="Not Found"
              className={`h-10 w-28 -mt-1 rounded absolute transition-opacity duration-300 group-hover:opacity-100 ${
                casinoClicked ? "opacity-100" : "opacity-0"
              } group-hover:opacity-100`}
            />
            <span className={`absolute mt-8 inset-0 flex justify-center items-center text-sm font-bold ${openMenubar ? "block" : "hidden  "}`}>
              CASINO
            </span>
          </button>
          <button
            onClick={handlechatClick}
            className="text-white ml-2 -mt-[1.8rem] relative w-[6rem] h-10 group"
          >
            <img
              src={chat}
              alt="Not Found"
              className={`h-10 w-28 -mt-1 rounded absolute transition-opacity duration-300 group-hover:opacity-100 ${
                chatClicked ? "opacity-0" : "opacity-100 hover:opacity-0"
              } group-hover:opacity-100`}
            />
            <img
              src={chat1}
              className={`h-10 w-28 -mt-1 rounded absolute transition-opacity duration-300 group-hover:opacity-100 ${
                chatClicked ? "opacity-100" : "opacity-0 hover:opacity-100"
              }`}
              alt="Not Found"
            />
            <span className={`absolute mt-8 inset-0 flex justify-center items-center text-sm font-bold ${openMenubar ? "block" : "hidden  "}`}>
              chat
            </span>
          </button>
        </div>
      </div>
      <div className="mt-4">
        <ul className="space-y-2 rounded-md">
          <SidebarNav items={nav} openMenubar={openMenubar} />
          {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <li key={text} className="flex items-center p-2 pl-4 space-x-4">
              <div className="text-white flex items-center justify-center "> 
                {index % 2 === 0 ? <InboxIcon /> : <EmailIcon />}
              </div>
              <span className={`ml-4 ${openMenubar ? "block" : "hidden md:block"}`}>
                {text}
              </span>
            </li>
          ))} */}
        </ul>

        {/* <ul className="mt-4 space-y-2 rounded-md">
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <li key={text} className="flex items-center p-2 pl-4 space-x-4">
              <div className="text-white flex items-center justify-center "> 
                {index % 2 === 0 ? <InboxIcon /> : <EmailIcon />}
              </div>
              <span className={`ml-4 ${openMenubar ? "block" : "hidden md:block"}`}>
                {text}
              </span>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

export default RightSidebar;
