import React, { useState } from "react";
// import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
// import InboxIcon from "@mui/icons-material/Inbox";
import nav from "../nav";
// import { SidebarNav } from "./SidebarNav";
import { useNavigate } from "react-router-dom";
import { SidebarNav } from "./SidebarNav";
import casino from "../assets/img/casino.png";
import casino1 from "../assets/img/casino1.jpg";
import sports from "../assets/img/sports.png"
import sports1 from "../assets/img/sports1.png";

function Sidebar({ openMenubar, handleDrawerToggle, handleMenuOpen }) {
  const [casinoClicked, setCasinoClicked] = useState(false);
  const [sportsClicked, setSportsClicked] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const navigate = useNavigate();
  // const [dropdownVisible, setDropdownVisible] = useState(null); // Track which dropdown is open

  const handleCasinoClick = () => {
    setCasinoClicked((prev) => !prev);
    setSportsClicked(false);
    navigate("/casino/home");
  };

  const handleSportsClick = () => {
    setSportsClicked((prevState) => !prevState);
    setCasinoClicked(false);
    navigate("/ComeSoon");
  };
  // const handleMenuIconClick = () => {
  //   handleDrawerToggle(); // Close the sidebar
  //   setDropdownVisible(null); // Close any open dropdowns
  // };

  const handleNotificationClick = (event) => {
    handleMenuOpen(event); 
  };

  return (
    <div
      className={`h-full ${openMenubar ? "block" : "hidden md:block "} 
      ${openMenubar && "md:text-white"} 
       md:bg-none overflow-x-hidden`}
    >
      <div className=" h-14 px-1 py-[0.70rem] shadow-2xl shadow-black">
        <div className="flex items-center">
          <button onClick={() => {
            handleDrawerToggle()
            setDropdownVisible(null);
          }} className="text-white ml-2 mt-[0.4rem]">
            <MenuIcon />
          </button>
          <button
            onClick={handleCasinoClick}
            className="text-white ml-3 -mt-[1.8rem] relative w-[6rem] h-10 group"
          >
            <img
              src={casino1}
              className={`h-10 w-28 -mt-1 rounded absolute transition-opacity duration-300 group-hover:opacity-100 ${casinoClicked ? "opacity-0" : "opacity-100 "
                }`}
              alt="Not Found"
            />
            <img
              src={casino}
              alt="Not Found"
              className={`h-10 w-28 -mt-1 rounded absolute transition-opacity duration-300 group-hover:opacity-100 ${casinoClicked ? "opacity-100" : "opacity-0"
                } group-hover:opacity-100`}
            />
            <span className={`absolute mt-8 inset-0 flex justify-center items-center text-sm font-bold ${openMenubar ? "block" : "hidden  "}`}>
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
              className={`h-10 w-28 -mt-1 rounded absolute transition-opacity duration-300 group-hover:opacity-100 ${sportsClicked ? "opacity-0" : "opacity-100 hover:opacity-0"
                } group-hover:opacity-100`}
            />
            <img
              src={sports1}
              className={`h-10 w-28 -mt-1 rounded absolute transition-opacity duration-300 group-hover:opacity-100 ${sportsClicked ? "opacity-100" : "opacity-0 hover:opacity-100"
                }`}
              alt="Not Found"
            />
            <span className={`absolute mt-8 inset-0 flex justify-center items-center text-sm font-bold ${openMenubar ? "block" : "hidden  "}`}>
              SPORTS
            </span>
          </button>
        </div>
      </div>
      <div className="mt-4">
        <ul className="space-y-2 rounded-md">
          <SidebarNav
            items={nav}
            openMenubar={openMenubar}
            toggleSidebar={handleDrawerToggle}
            dropdownVisible={dropdownVisible}
            setDropdownVisible={setDropdownVisible}
            handleMenuOpen={handleNotificationClick} // Pass the notification click handler

          // setDropdownVisible={setDropdownVisible} // Pass dropdown state setter

          />

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

export default Sidebar;
