import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import stakeLogo from "../assets/img/stakeLogo.png";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { Badge, IconButton, Menu, MenuItem, Tooltip, Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { IoIosChatboxes } from "react-icons/io";
import CloseIcon from "@mui/icons-material/Close";
import { MdEmojiEvents, MdOutlineEventNote, MdSettings } from "react-icons/md";
import LogoutIcon from "@mui/icons-material/Logout";
import notification from "../assets/img/Notification.png";
import { removeCookie } from "../resources/utility";
import { useSelector } from "react-redux";
import { FaWallet } from "react-icons/fa";
import { PiVaultFill } from "react-icons/pi";
import { BiSolidNotepad } from "react-icons/bi";
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import { BsChatDotsFill } from "react-icons/bs";

function MainHeader() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const { wallet } = useSelector((state) => state.auth);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = (menuType) => {
    return anchorEl?.dataset?.menuType === menuType;
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    removeCookie("token");
    navigate("/");
    window.location.reload();
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="bg-[#1a2c38] drop-shadow-2xl py-[0.30rem]">
        <div className="flex justify-between md:justify-around items-center px-4 md:px-0 ">
          {/* <img
            src={stakeLogo}
            className="w-12 h-12 md:w-16 md:h-16 hover:cursor-pointer"
            alt="Not Found"
            onClick={() => navigate("/casino/home")}
          /> */}
          <span
            className="text-white text-3xl md:text-5xl font-extrabold italic font-sans hover:cursor-pointer"
            // onClick={() => navigate("/casino/home")}
            onClick={() => navigate("/")}
          >
            Listor
          </span>
          <div className="flex items-center md:space-x-0">
            <button className="flex bg-[#0f212e] items-center bg-transparent space-x-1 px-2 md:px-5 py-2 md:py-3 rounded-s-md text-white font-medium">
              <p className="text-sm md:text-base">
                ₹{wallet ? wallet : 0}
              </p>

            </button>
            <button className="bg-[#1475e1] hover:bg-[#396ca8] text-white rounded-r-md px-3 py-[0.5rem] md:px-5 md:py-[0.72rem] font-medium text-sm md:text-base">
              Wallet
            </button>
          </div>
          <div className="text-white flex items-center space-x-0.4 md:space-x-6">
            <button className="flex items-center space-x-1.5 font-medium">
              <IoMdSearch className="text-sm w-10 h-6 md:text-base md:block hidden " />
              <p className="md:block hidden text-sm md:text-base md:space-x-1">
                Search
              </p>
            </button>

            <div className="group relative flex items-center">
              <IoPerson color="white" size={16} />
              <div
                className="flex flex-col absolute top-full left-1/2 -translate-x-1/2 mt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity bg-white text-black text-sm font-medium rounded-sm px-4 py-2 shadow-sm z-10 w-max max-w-xs text-center"
              >
                <button onClick={() => navigate("/Wallet")} className="flex items-center space-x-5  py-2">
                  <FaWallet size={20} color="#0f212e" />
                  <p className="text-base text-[#0f212e]">Wallet</p>
                </button>
                <button onClick={() => navigate("/Vault")} className="flex items-center space-x-5 py-2">
                  <PiVaultFill size={20} color="#0f212e" />
                  <p className="text-base text-[#0f212e]">Vault</p>
                </button>
                <button onClick={() => navigate("/Vip")} className="flex items-center space-x-5 py-2">
                  <MdEmojiEvents size={20} color="#0f212e" />
                  <p className="text-base text-[#0f212e]" >VIP</p>
                </button>
                <button onClick={() => navigate("/Statistics")} className="flex items-center space-x-4 py-2">
                  <LegendToggleIcon size={20} color="#0f212e" />
                  <p className="text-base text-[#0f212e]">Statistics</p>
                </button>
                <button onClick={() => navigate("myBet")} className="flex items-center space-x-5 py-2">
                  <BiSolidNotepad size={20} color="#0f212e" />
                  <p className="text-base text-[#0f212e]">My Bets</p>
                </button>
                <button onClick={() => navigate("/setting")} className="flex items-center space-x-5 py-2">
                  <MdSettings size={20} color="#0f212e" />
                  <p className="text-base text-[#0f212e]">Setting</p>
                </button>
                <button onClick={() => navigate("/logout")} className="flex items-center space-x-4 py-2">
                  <LogoutIcon size={10} color="#0f212e" />
                  <p className="text-base text-[#0f212e]">Logout</p>
                </button>
                <div className="tooltip-arrow w-3 h-3 bg-white rotate-45 absolute top-[-6px] left-1/2 transform -translate-x-1/2 mt-1"></div>
              </div>
            </div>

            <IconButton onClick={handleMenuOpen} data-menu-type="notifications">
              <Badge color="success" variant="dot">
                <NotificationsIcon className="text-white " fontSize="small" />
              </Badge>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={isMenuOpen("notifications")}

              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  width: "350px",
                  background: "#0f212e",
                },
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{ mt: 1.5, ml: 5 }}
            >
              <div className="text-center">
                <div className="flex justify-between items-center">
                  <div className="flex items-center font-semibold text-white space-x-2">
                    <NotificationsIcon
                      className="text-[#b1bad3]"
                      fontSize="small"
                    />
                    <p>Notifications</p>
                  </div>
                  <IconButton onClick={handleMenuClose}>
                    <CloseIcon className="text-white font-semibold" />
                  </IconButton>
                </div>
                <div className="flex justify-center pt-8 pb-6">
                  <img
                    src={notification}
                    className="w-16 h-16 md:w-24 md:h-20"
                    alt="Not Found"
                  />
                </div>
                <p className="text-white font-medium text-sm">No Notifications Available</p>
                <p className="text-[#b1bad3]">Your interactions will be visible here</p>
              </div>
            </Menu>


            {/* Notification Dialog
            {/* <Notification
                anchorEl={anchorEl}
                isMenuOpen={isMenuOpen}
                handleMenuClose={handleMenuClose}
            /> */}

<div className="relative flex items-center">
      <button onClick={toggleMenu} className="flex items-center">
        <IoIosChatboxes color="white" size={18} />
      </button>
      {isOpen && (
        <div
          className="flex flex-col absolute top-full right-1/2 -translate-x-1/2 mt-2 bg-white text-black text-sm font-medium rounded-sm px-4 py-2 shadow-sm z-10 w-max max-w-xs text-center"
        >
          <button
            onClick={() => {
              toggleSidebar(); // Open the sidebar
              setIsOpen(false); // Close the chat menu
            }}
            className="flex items-center space-x-4 py-2"
          >
            <MdOutlineEventNote size={20} color="#0f212e" />
            <p className="text-base text-[#0f212e]">Bet Slip</p>
          </button>
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

          <div className="tooltip-arrow w-3 h-3 bg-white rotate-45 top-[-6px] right-1/2 overflow-hidden transform -translate-x-1/2"></div>
        </div>
      )}

      {/* Sidebar Component */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-800 text-white duration-300 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: '250px' }}
      >
        <button className="absolute top-0 right-0 p-4" onClick={toggleSidebar}>
          &times;
        </button>
        <div className="mt-16">
          <a href="#" className="block p-4 hover:bg-gray-700">About</a>
          <a href="#" className="block p-4 hover:bg-gray-700">Services</a>
          <a href="#" className="block p-4 hover:bg-gray-700">Clients</a>
          <a href="#" className="block p-4 hover:bg-gray-700">Contact</a>
          
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default MainHeader;
