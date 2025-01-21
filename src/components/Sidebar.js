import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import casino from "../assets/img/casino.png";
import casino1 from "../assets/img/casino1.jpg";
import sports from "../assets/img/sports.png";
import sports1 from "../assets/img/sports1.png";
import nav from "../nav";
import { SidebarNav } from "./SidebarNav";

function Sidebar({ handleDrawerToggle, handleMenuOpen }) {
  const [casinoClicked, setCasinoClicked] = useState(false);
  const [sportsClicked, setSportsClicked] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const navigate = useNavigate();
  const { openMenubar } = useSelector((state) => state.auth);
  const sidebarRef = useRef(null);

  const handleCasinoClick = () => {
    setCasinoClicked((prev) => !prev);
    setSportsClicked(false);
    navigate("/casino/home");
  };

  const handleSportsClick = () => {
    setSportsClicked((prev) => !prev);
    setCasinoClicked(false);
    navigate("/ComeSoon");
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        openMenubar &&
        window.innerWidth <= 1024
      ) {
        handleDrawerToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenubar, handleDrawerToggle]);

  return (
    <div
      ref={sidebarRef}
      className={`${
        openMenubar ? "block" : "hidden md:block"
      } md:bg-none overflow-x-hidden`}
    >
      <div className="h-[3.7rem] px-1 py-2 shadow-2xl shadow-black">
        <div className="flex items-center">
          <button
            onClick={() => {
              handleDrawerToggle();
              setDropdownVisible(null);
            }}
            className="text-[#b1bad3] hover:text-white ml-3 mt-2 focus:outline-none"
            aria-label="Toggle Sidebar"
          >
            <MenuIcon />
          </button>
          <button
            onClick={handleCasinoClick}
            className="text-white ml-3 -mt-7 relative w-[6rem] h-10 group"
            aria-label="Casino"
          >
            {/* Inactive Casino Image */}
            <img
              src={casino1}
              alt="Casino Inactive"
              className={`h-10 w-28 rounded absolute transition-opacity duration-300 ${
                casinoClicked ? "opacity-0" : "opacity-100"
              } group-hover:opacity-100`}
            />

            {/* Active Casino Image */}
            <img
              src={casino}
              alt="Casino Active"
              className={`h-10 w-28 rounded absolute transition-opacity duration-300 ${
                casinoClicked ? "opacity-100" : "opacity-0"
              } group-hover:opacity-100`}
            />

            {/* Button Label */}
            <span
              className={`absolute mt-10 inset-0 flex justify-center items-center font-bold ${
                openMenubar ? "block" : "hidden"
              }`}
            >
              CASINO
            </span>
          </button>

          <button
            onClick={handleSportsClick}
            className="text-white ml-2 -mt-7 relative w-[6rem] h-10 group"
            aria-label="Sports"
          >
            {/* Inactive Sports Image */}
            <img
              src={sports}
              alt="Sports Inactive"
              className={`h-10 w-28 rounded absolute transition-opacity duration-300 ${
                sportsClicked ? "opacity-0" : "opacity-100"
              } group-hover:opacity-100`}
            />

            {/* Active Sports Image */}
            <img
              src={sports1}
              alt="Sports Active"
              className={`h-10 w-28 rounded absolute transition-opacity duration-300 ${
                sportsClicked ? "opacity-100" : "opacity-0"
              } group-hover:opacity-100`}
            />

            {/* Button Label */}
            <span
              className={`absolute mt-10 inset-0 flex justify-center items-center font-bold ${
                openMenubar ? "block" : "hidden"
              }`}
            >
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
            handleMenuOpen={handleMenuOpen}
          />
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
