import React, { useEffect, useRef, useState } from "react";
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
import { BsChatDotsFill } from "react-icons/bs";
import walletIcon from "../assets/svg/wallet.svg";
import { setAnchorEl, setTooltipOpen } from "../features/auth/authSlice";
import {
  closeBetslipModal,
  openBetslipModal,
} from "../features/auth/betSlipSlice";
import { closeChatModal, openChatModal } from "../features/auth/chatSlice";
import Wallet from "../views/Profile/Wallet";
import Vault from "../views/Profile/Vault";
import Vip from "../views/Profile/Vip";
import Statistic from "../views/Profile/Statistic";
import LogoutDialog from "../views/Profile/Logout";
import Notification from "../views/Profile/Notification";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";

function MainHeader({ handleRightSidebarToggle }) {
  const navigate = useNavigate();
  const { wallet } = useSelector((state) => state.auth);
  // const [tooltipOpen, setTooltipOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { tooltipOpen } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const tooltipRef = useRef(null);
  const personIconRef = useRef(null);

  const [profilePopupOpen, setProfilePopupOpen] = useState({
    isWalletOpen: false,
    isVaultOpen: false,
    isVipOpen: false,
    isStatistic: false,
    isNotification: false,
    isLogoutDialog: false,
  });

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        tooltipOpen &&
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target) &&
        personIconRef.current &&
        !personIconRef.current.contains(event.target)
      ) {
        dispatch(setTooltipOpen(false));
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [tooltipOpen, dispatch]);

  const handleMenuOpen = (event) => {
    dispatch(setAnchorEl(event.currentTarget));
    dispatch(setTooltipOpen(false));
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    dispatch(setTooltipOpen(false));
    dispatch(setAnchorEl(false));
  };

  const handleChatClick = () => {
    dispatch(openChatModal());
    handleRightSidebarToggle("chats");
    setIsSidebarOpen(false);
    openBetslipModal(false);
    dispatch(closeBetslipModal(false));
  };

  const handleBetslipClick = () => {
    dispatch(openBetslipModal());
    handleRightSidebarToggle("betslips");
    setIsSidebarOpen(false);
    openChatModal(false);
    dispatch(closeChatModal(false));
  };

  const toggleTooltip = () => {
    dispatch(setTooltipOpen((prev) => !prev));
    setIsSidebarOpen(false);
    dispatch(setAnchorEl(false));
  };

  return (
    <div className="z-50 relative">
      <div className="bg-[#1a2c38] drop-shadow-2xl md:py-[0.30rem] py-2.5">
        <div className="flex justify-between md:justify-around items-center px-4 md:px-0 ">
          <span
            className="text-white text-3xl md:text-5xl font-extrabold italic font-sans hover:cursor-pointer"
            onClick={() => navigate("/")}
          >
            Listor
          </span>
          <div className="flex items-center md:space-x-0">
            <button className="flex bg-[#0f212e] items-center space-x-1 px-2 md:px-5 py-2.5 md:py-3 rounded-s-md text-white font-medium">
              <p className="text-sm md:text-base">₹{wallet ? wallet : 0}</p>
            </button>
            <button
              className="bg-[#1475e1] hover:bg-[#396ca8] text-white rounded-r-md px-3 py-[0.5rem] md:px-5 md:py-[0.72rem] font-medium text-sm md:text-base md:block hidden"
              onClick={() => {
                setProfilePopupOpen((prev) => ({
                  ...prev,
                  isWalletOpen: true,
                }));
                dispatch(setTooltipOpen(false));
                setIsSidebarOpen(false);
                dispatch(setAnchorEl(false));
              }}
            >
              Wallet
            </button>
            <button className="md:hidden block w-10 h-10 bg-[#1475e1] hover:bg-[#396ca8] rounded-r-md p-2.5">
              <img src={walletIcon} alt="Not found" />
            </button>
            {profilePopupOpen.isWalletOpen && (
              <Wallet
                closeWallet={() =>
                  setProfilePopupOpen({
                    ...profilePopupOpen,
                    isWalletOpen: false,
                  })
                }
              />
            )}
          </div>
          <div className="text-white flex items-center space-x-0.4 md:space-x-6">
            <button className="flex items-center space-x-1.5 font-medium">
              <IoMdSearch className="text-sm w-10 h-6 md:text-base md:block hidden" />
              <p
                className="md:block hidden text-sm md:text-base md:space-x-1"
                ref={personIconRef}
              >
                Search
              </p>
            </button>

            <div className="relative flex items-center">
              <p
                onClick={toggleTooltip}
                className="flex items-center hover:cursor-pointer"
              >
                <IoPerson color="white" size={16} />
              </p>

              {tooltipOpen && (
                <div
                  className="flex flex-col absolute top-full left-1/2 -translate-x-1/2 mt-5 bg-white text-black text-sm font-medium rounded py-1 shadow-sm w-max max-w-xs text-center"
                  ref={tooltipRef}
                >
                  <button
                    onClick={() => {
                      setProfilePopupOpen((prev) => ({
                        ...prev,
                        isWalletOpen: true,
                      }));
                      dispatch(setTooltipOpen(false));
                    }}
                    className="flex items-center space-x-3 p-3 hover:bg-[#B1BAD3]"
                  >
                    <FaWallet size={20} color="#0f212e" />
                    <p className="text-base text-[#2F4553] hover:text-black font-semibold">
                      Wallet
                    </p>
                  </button>

                  <button
                    onClick={() => {
                      setProfilePopupOpen((prev) => ({
                        ...prev,
                        isVaultOpen: true,
                      }));
                      dispatch(setTooltipOpen(false));
                    }}
                    className="flex items-center space-x-3 p-3 hover:bg-[#B1BAD3]"
                  >
                    <PiVaultFill
                      style={{
                        color: "#2F4553",
                        width: "22px",
                        height: "25px",
                      }}
                    />
                    <p className="text-base text-[#2F4553] hover:text-black font-semibold">
                      Vault
                    </p>
                  </button>

                  <button
                    onClick={() => {
                      setProfilePopupOpen((prev) => ({
                        ...prev,
                        isVipOpen: true,
                      }));
                      dispatch(setTooltipOpen(false));
                    }}
                    className="flex items-center space-x-3 p-3 hover:bg-[#B1BAD3]"
                  >
                    <MdEmojiEvents
                      style={{
                        color: "#2F4553",
                        width: "22px",
                        height: "25px",
                      }}
                    />
                    <p className="text-base text-[#2F4553] hover:text-black font-semibold">
                      VIP
                    </p>
                  </button>

                  <button
                    onClick={() => {
                      setProfilePopupOpen((prev) => ({
                        ...prev,
                        isStatistic: true,
                      }));
                      dispatch(setTooltipOpen(false));
                    }}
                    className="flex items-center space-x-3 p-3 hover:bg-[#B1BAD3]"
                  >
                    <LegendToggleIcon
                      style={{
                        color: "#2F4553",
                        width: "22px",
                        height: "25px",
                      }}
                    />
                    <p className="text-base text-[#2F4553] hover:text-black font-semibold">
                      Statistics
                    </p>
                  </button>

                  <button
                    onClick={() => {
                      navigate("/myBet");
                      dispatch(setTooltipOpen(false));
                    }}
                    className="flex items-center space-x-3 p-3 hover:bg-[#B1BAD3]"
                  >
                    <BiSolidNotepad
                      style={{
                        color: "#2F4553",
                        width: "22px",
                        height: "25px",
                      }}
                    />
                    <p className="text-base text-[#2F4553] hover:text-black font-semibold">
                      My Bets
                    </p>
                  </button>

                  <button
                    onClick={() => {
                      navigate("/setting");
                      dispatch(setTooltipOpen(false));
                      dispatch(setAnchorEl(false));
                    }}
                    className="flex items-center space-x-3 p-3 hover:bg-[#B1BAD3]"
                  >
                    <MdSettings
                      style={{
                        color: "#2F4553",
                        width: "22px",
                        height: "25px",
                      }}
                    />
                    <p className="text-base text-[#2F4553] hover:text-black font-semibold">
                      Setting
                    </p>
                  </button>

                  <button
                    onClick={() => {
                      setProfilePopupOpen((prev) => ({
                        ...prev,
                        isLogoutDialog: true,
                      }));
                      dispatch(setTooltipOpen(false));
                    }}
                    className="flex items-center space-x-3 p-3 hover:bg-[#B1BAD3]"
                  >
                    <LogoutIcon
                      style={{
                        color: "#2F4553",
                        width: "22px",
                        height: "25px",
                      }}
                    />
                    <p className="text-base text-[#2F4553] hover:text-black font-semibold">
                      Logout
                    </p>
                  </button>
                  {/* <div className="tooltip-arrow w-2.5 h-2.5 bg-white rotate-45 absolute top-[-8px] left-1/2 transform -translate-x-1/2 mt-1"></div> */}
                  <div className="border-x-8 border-x-transparent border-b-[10px] top-[-8px] left-1/2 absolute -translate-x-1/2 border-b-white"></div>
                </div>
              )}

              {profilePopupOpen.isWalletOpen && (
                <Wallet
                  closeWallet={() =>
                    setProfilePopupOpen({
                      ...profilePopupOpen,
                      isWalletOpen: false,
                    })
                  }
                />
              )}
              {profilePopupOpen.isVaultOpen && (
                <Vault
                  closeVault={() =>
                    setProfilePopupOpen({
                      ...profilePopupOpen,
                      isVaultOpen: false,
                    })
                  }
                />
              )}
              {profilePopupOpen.isVipOpen && (
                <Vip
                  closeVip={() =>
                    setProfilePopupOpen({
                      ...profilePopupOpen,
                      isVipOpen: false,
                    })
                  }
                />
              )}
              {profilePopupOpen.isStatistic && (
                <Statistic
                  closeStatistic={() =>
                    setProfilePopupOpen({
                      ...profilePopupOpen,
                      isStatistic: false,
                    })
                  }
                />
              )}
              {profilePopupOpen.isLogoutDialog && (
                <LogoutDialog
                  closeLogoutDialog={() =>
                    setProfilePopupOpen({
                      ...profilePopupOpen,
                      isLogoutDialog: false,
                    })
                  }
                />
              )}
            </div>
            <div className="text-white flex items-center space-x-0.4 md:space-x-6">
              <IconButton
                onClick={handleMenuOpen}
                data-menu-type="notifications"
              >
                <Badge color="success" variant="dot">
                  <NotificationsIcon className="text-white" fontSize="small" />
                </Badge>
              </IconButton>
              <Notification />
            </div>
            <div className="relative flex items-center z-50">
              <p
                onClick={toggleSidebar}
                className="md:flex hidden items-center hover:cursor-pointer"
              >
                <IoIosChatboxes color="white" size={18} />
              </p>
              {isSidebarOpen && (
                <>
                  <div
                    ref={tooltipRef}
                    className="flex flex-col absolute top-full md:-left-8 lg:-left-8 xl:left-1/2 left-1/2 -translate-x-1/2 mt-2 bg-white text-black text-sm font-medium rounded-sm px-4 py-2 shadow-lg z-[9999] w-max max-w-xs text-center"
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
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 z-[9999] tooltip-arrow w-3 h-3 bg-white rotate-45"></div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
