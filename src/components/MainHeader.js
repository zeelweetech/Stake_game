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
      <div className="bg-[#1a2c38] shadow-2xl border-b border-b-black">
        <div className="flex justify-around items-center">
          <img
            src={stakeLogo}
            className="w-16 h-16 hover:cursor-pointer"
            alt="Not Found"
            onClick={() => navigate("/casino/home")}
          />
          <div className="flex items-center">
            <button className="flex items-center bg-[#0f212e] space-x-1 px-5 py-3 rounded-s-md text-white font-medium">
              <p>₹0.00</p>
              <RiMoneyRupeeCircleFill color="yellow" className="text-xl" />
            </button>
            <button className="bg-[#1475e1] hover:bg-[#396ca8] text-white rounded-r-md px-5 py-[0.72rem] font-medium">
              Wallet
            </button>
          </div>
          <div className="text-white flex items-center space-x-6">
            <button className="flex items-center space-x-1.5 font-medium">
              <IoMdSearch />
              <p>Search</p>
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
                className="flex items-center space-x-1 text-[#2f4553]"
                onClick={(e) => handleLogout(e)}
              >
                <LogoutIcon />
                <p>Logout</p>
              </MenuItem>
            </Menu>

            <IconButton onClick={handleMenuOpen} data-menu-type="notifications">
              <Badge color="success" variant="dot">
                <NotificationsIcon className="text-white" fontSize="small" />
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
              <div className="text-center p-3">
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
                    className="w-24 h-20"
                    alt="Not Found"
                  />
                </div>
                <p className="text-white font-medium text-sm">
                  No Notifications Available
                </p>
                <p className="text-[#b1bad3]">
                  Your interactions will be visible here
                </p>
              </div>
            </Menu>

            <IconButton onClick={handleMenuOpen} data-menu-type="chat">
              <IoIosChatboxes color="white" size={20} className="mt-1.5" />
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
