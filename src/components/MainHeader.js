import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { Badge, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { IoIosChatboxes } from "react-icons/io";
import { MdEmojiEvents, MdOutlineEventNote, MdSettings } from "react-icons/md";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { FaWallet } from "react-icons/fa";
import { PiVaultFill } from "react-icons/pi";
import { BiSolidNotepad } from "react-icons/bi";
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import { BsChatDotsFill } from "react-icons/bs";
import Notification from "../views/Profile/Notification";
import { setAnchorEl } from "../features/auth/authSlice";
import { openBetslipModal } from "../features/auth/betSlipSlice";
import { openChatModal } from "../features/auth/chatSlice";

function MainHeader({ handleRightSidebarToggle, isDrawerOpen }) {
  const navigate = useNavigate();
  const { wallet } = useSelector((state) => state.auth);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useDispatch()

  const handleMenuOpen = (event) => {
    dispatch(setAnchorEl(event.currentTarget))
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleChatClick = () => {
    dispatch(openChatModal())
    handleRightSidebarToggle()
    setIsSidebarOpen(false);
  };

  const handleBetslipClick = () => {
    dispatch(openBetslipModal());
    handleRightSidebarToggle();
    setIsSidebarOpen(false);
  };

  // const toggleTooltip = () => {
  //   setTooltipOpen((prev) => !prev);
  // };

  return (
    <div className="z-0 relative">
      <div className="bg-[#1a2c38] drop-shadow-2xl py-[0.30rem]">
        <div className="flex justify-between md:justify-around items-center px-4 md:px-0 ">
          <span
            className="text-white text-3xl md:text-5xl font-extrabold italic font-sans hover:cursor-pointer"

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
            <Notification />

            <div className="relative flex items-center">
              <p onClick={toggleSidebar} className="flex items-center hover:cursor-pointer">
                <IoIosChatboxes color="white" size={18} />
              </p>
              {isSidebarOpen && (
                <div
                  className="flex flex-col absolute top-full right-0 left-3 -translate-x-1/2 mt-2 bg-white text-black text-sm font-medium rounded-sm px-4 py-2 shadow-sm z-10 w-max max-w-xs text-center"
                >
                  <button
                    className="flex items-center space-x-4 py-2"
                    onClick={handleChatClick}
                  >
                    <BsChatDotsFill size={20} color="#0f212e" />
                    <p className="text-base text-[#0f212e]">Chat</p>
                  </button>
                  <button
                    className="flex items-center space-x-4 py-2"
                    onClick={handleBetslipClick}
                  >
                    <MdOutlineEventNote size={20} color="#0f212e" />
                    <p className="text-base text-[#0f212e]">BetSlip</p>
                  </button>
                  <div className="tooltip-arrow w-3 h-3 bg-white rotate-45 absolute top-[-6px] left-1/2 transform -translate-x-1/2 mt-1"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;



