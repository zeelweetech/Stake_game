import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomDrawer from "./BottomDrower/BottomSidebar";
import nav from "../nav";
import BetDrower from "./BottomDrower/BetDrower";
import ChatDrower from "./BottomDrower/ChatDrawer";
import SportsDrower from "./BottomDrower/SportsDrower";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";

function MobileMenubar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [betDrowerOpen, setBetDrowerOpen] = useState(false);
  const [chatDrawerOpen, setChatDrawerOpen] = useState(false);
  const [sportsDrowerOpen, setSportsDrowerOpen] = useState(false);
  const [casinoOpen, setCasinoOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setIsDrawerOpen(prevState => !prevState);
    setBetDrowerOpen(false);
    setChatDrawerOpen(false);
    setSportsDrowerOpen(false);
    setCasinoOpen(false)
  };
  const handleDrowerClose = () => {
    setIsDrawerOpen(false);
  }
  const handleBetDrawerOpen = () => {
    setBetDrowerOpen(prevState => !prevState);
    setIsDrawerOpen(false)
    setChatDrawerOpen(false);
    setSportsDrowerOpen(false);
    setCasinoOpen(false)
  }
  const handleCloseDrower = () => {
    console.log("Close button clicked");
    setBetDrowerOpen(false);
  };
  const handleChatDrawerOpen = () => {
    setChatDrawerOpen(prevState => !prevState);
    setIsDrawerOpen(false)
    setBetDrowerOpen(false);
    setSportsDrowerOpen(false);
    setCasinoOpen(false)
  }
  const handleChatClose = () => {
    setChatDrawerOpen(false)
  }
  const handleSportsDrowerOpen = () => {
    setSportsDrowerOpen(prevState => !prevState);
    setIsDrawerOpen(false)
    setBetDrowerOpen(false);
    setChatDrawerOpen(false);
    setCasinoOpen(false)
  }
  const handleCloseSportsDrower = () => {
    setSportsDrowerOpen(false);
  }
  const handleCasinoDrower = (path) => {
    navigate(path);
    setIsDrawerOpen(false);
    setBetDrowerOpen(false);
    setChatDrawerOpen(false);
    setSportsDrowerOpen(false);
  };

  return (
    <div>
      <div className="px-2 py-2 bg-[#0f212e] text-white block md:hidden">
        <div className="flex justify-around w-full items-center">
          <div className="flex flex-col px-2 items-center text-sm" onClick={handleDrawerOpen}>
            <svg className="w-4 h-4 hover:fill-white" fill="grey" viewBox="0 0 64 64">
              <path d="M0 0h23.867c-3.947 3.173-7.014 7.333-8.827 12.107H0V0Zm0 51.867h41.707v12.106H0V51.867Zm13.36-25.92H0v12.106h17.867a28.537 28.537 0 0 1-4.48-12.106h-.027ZM57.014 38.32l6.987 10.96-8.08 5.173-7.12-11.146c-2.24.773-4.64 1.2-7.12 1.2-12.24 0-22.187-9.947-22.187-22.187 0-12.24 9.947-22.187 22.187-22.187 12.24 0 22.187 9.947 22.187 22.187 0 6.293-2.64 11.947-6.854 16ZM41.681 9.733c-6.933 0-12.587 5.654-12.587 12.587s5.654 12.587 12.587 12.587 12.587-5.654 12.587-12.587S48.614 9.733 41.68 9.733Z" />
            </svg>
            <span className="font-bold mt-0.5">Browse</span>
          </div>

          <div className="text-sm flex flex-col items-center" onClick={() => handleCasinoDrower("/casino/home")}>
            <svg className="w-5 h-5 font-bold hover:fill-white" fill="grey" viewBox="0 0 64 64">
              <path d="M12.265 47.726.21 14.603a3.574 3.574 0 0 1 2.108-4.553l.024-.007 19.282-7.015a3.55 3.55 0 0 1 4.553 2.082l.008.024.694 1.92L12.69 46.073a8.9 8.9 0 0 0-.418 1.598l-.008.056ZM63.79 15.511 48.002 58.93a3.529 3.529 0 0 1-4.558 2.1l.024.009-21.948-8.001a3.58 3.58 0 0 1-2.124-4.585l-.008.024 15.787-43.39a3.555 3.555 0 0 1 4.559-2.126l-. 024-.008 21.948 8a3.58 3.58 0 0 1 2.124 4.585l.008-.024v-.002ZM50.457 32.685l-1.386-3.254a1.789 1.789 0 0 0-2.333-.956l.012-.004-2.666 1.174a1.787 1.787 0 0 1-2.316-.948l-.004-.012-1.146-2.667a1.764 1.764 0 0 0-2.332-.93l.012-.004-3.28 1.386a1.738 1.738 0 0 0-.929 2.33l-.004-.01 3.92 9.255a1.816 1.816 0 0 0 2.359.928l-.012.005 9.227-3.947a1.737 1.737 0 0 0 .794-2.356l.004.01h.08Z" />
            </svg>
            <span className="font-bold mt-0.5">Casino</span>
          </div>

          <div className="text-sm flex flex-col items-center" onClick={handleBetDrawerOpen}>
            <svg className="w-4 h-4 hover:fill-white" fill="grey" viewBox="0 0 64 64">
              <path d="M59.732 0H4.266A4.266 4.266 0 0 0 0 4.266V60c0 2.21 1.79 4 4 4h56c2.21 0 4-1.79 4-4V4.266A4.266 4.266 0 0 0 59.734 0h-.002ZM17.998 50.24l-8-8 4.266-4.266 3.866 3.894 9.734-9.866 4.266 4.266L17.998 50.24Zm0-20-8-8 4.134-4.374 3.866 3.894 9.866-9.894 4.266 4.266L17.998 30.24Zm36 14.774h-14v-6.026h14v6.026Zm0-20h-14v-6.026h14v6.026Z" />
            </svg>
            <span className="font-bold mt-1">Bets</span>
          </div>

          <div className=" text-sm flex flex-col items-center" onClick={handleSportsDrowerOpen}>
            <SportsBasketballIcon
              className="text-[#b1bad3]"
              sx={{ fontSize: 20 }}
            />
            <span className="font-bold mt-1">Sports</span>
          </div>

          <div className=" text-sm flex flex-col items-center" onClick={handleChatDrawerOpen}>
            <svg className="w-4 h-4 hover:fill-white" fill="grey" viewBox="0 0 64 64">
              <path d="M32 1.916c-.288-.01-.628-.016-.97-.016C14.254 1.9.586 15.206.002 31.84L0 31.894A28.655 28.655 0 0 0 7.476 51.15l-.02-.024c-.688 4.028-1.89 7.636-3.552 10.974l.102-.228c4.634-.396 8.878-1.73 12.654-3.81l-.164.082c4.474 2.35 9.774 3.728 15.398 3.728h.112H32c.3.01.654.016 1.008.016 16.768 0 30.428-13.31 30.99-29.942l.002-.052C63.414 15.206 49.746 1.902 32.97 1.902c-.342 0-.68.006-1.018.016l.05-.002H32ZM16.138 37.604a5.948 5.948 0 1 1 0-11.896 5.948 5.948 0 0 1 0 11.896Zm15.862 0a5.948 5.948 0 1 1 0-11.896 5.948 5.948 0 0 1 0 11.896Zm15.862 0a5.948 5.948 0 1 1 0-11.896 5.948 5.948 0 0 1 0 11.896Z" />
            </svg>
            <span className="font-bold mt-1">Chat</span>
          </div>
        </div>

        <div>
          <BottomDrawer
            isOpen={isDrawerOpen}
            onClose={handleDrowerClose}
            items={nav}
            handleDrowerOpen={handleDrawerOpen}
            dropdownVisible={dropdownVisible}
            setDropdownVisible={setDropdownVisible}
            openMenubar={true}
          />
        </div>
        <div>
          <BetDrower
            openDrower={betDrowerOpen}
            onClose={handleCloseDrower} />
        </div>
        <div>
          <ChatDrower
            openChat={chatDrawerOpen}
            onCloseChat={handleChatClose} />
        </div>
        <div>
          <SportsDrower
            openSports={sportsDrowerOpen}
            onCloseSports={handleCloseSportsDrower} />
        </div>

      </div>
    </div>
  );
}

export default MobileMenubar;