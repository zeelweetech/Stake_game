import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import stakeLogo from "../assets/img/stakeLogo.png";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { Badge, IconButton, Menu, MenuItem } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { IoIosChatboxes } from "react-icons/io";
import CloseIcon from "@mui/icons-material/Close";
import { MdOutlineEventNote } from "react-icons/md";
import LogoutIcon from "@mui/icons-material/Logout";
import notification from "../assets/img/Notification.png";
import { removeCookie } from "../resources/utility";

function MainHeader() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

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

  return (
    <div>
      <div className="bg-[#1a2c38] drop-shadow-2xl  ">
        <div className="flex justify-between md:justify-around items-center px-4 md:px-0 ">
          <img
            src={stakeLogo}
            className="w-12 h-12 md:w-16 md:h-16 hover:cursor-pointer"
            alt="Not Found"
            onClick={() => navigate("/casino/home")}
          />
          <div className="flex items-center md:space-x-0">
            <button className="flex items-center bg-transparent md:bg-[#0f212e] md:bg-#0f212e blockhidden  space-x-1 px-2 md:px-5 py-2 md:py-3 rounded-s-md text-white font-medium">
              <p className="text-sm md:text-base md:block hidden">₹0.00</p>
              <RiMoneyRupeeCircleFill color="yellow" className="text-lg md:text-xl md:block hidden" />
            </button>
            <button className="bg-[#1475e1] hover:bg-[#396ca8] text-white rounded-r-md px-4 py-[0.5rem] md:px-5 md:py-[0.72rem] font-medium text-sm md:text-base">
              Wallet 
            </button>
          </div>
          <div className="text-white flex items-center space-x-0.4 md:space-x-6">
            <button className="flex items-center space-x-1.5 font-medium">
              <IoMdSearch className="text-sm w-10 h-6 md:text-base md:block hidden " />
              <p className="hidden md:block text-sm md:text-base md:space-x-1">Search</p>
            </button>

            <IconButton onClick={handleMenuOpen} data-menu-type="profile">
              <IoPerson color="white" size={16} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={isMenuOpen("profile")}
              onClose={handleMenuClose}
              sx={{ mt: 1.5 }}
            >
              <MenuItem
                className="flex items-center space-x-1 text-[#2f4553] "
                onClick={handleLogout}
              >
                <LogoutIcon />
                <p>Logout</p>
              </MenuItem>
            </Menu>


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
              <div className="text-center ">
                <div className="flex justify-between items-center">
                  <div className="flex items-center font-semibold text-white space-x-2">
                    <NotificationsIcon
                      className="text-[#b1bad3] "
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

            <IconButton onClick={handleMenuOpen} data-menu-type="chat">
              <IoIosChatboxes color="white" size={18} className="mt-1.5 md:mt-0" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={isMenuOpen("chat")}
              onClose={handleMenuClose}
              sx={{ mt: 1.5 }}
            >
              <MenuItem className="flex items-center space-x-1 text-[#2f4553]">
                <MdOutlineEventNote />
                <p>Bet Slip</p>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
