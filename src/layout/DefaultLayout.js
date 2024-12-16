import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import MobileMenubar from "../components/MobileMenubar";
import { useDispatch, useSelector } from "react-redux";
import { openBetslipModal } from "../features/auth/betSlipSlice";
import { isChatModelOpen } from "../features/auth/chatSlice";
import RightSidebar from "../components/RightSidebar";

function DefaultLayout() {
  const [openMenubar, setOpenMenubar] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { isBetslipOpen } = useSelector((state) => state.betslip);
  const { isChatOpen } = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    setOpenMenubar((prevOpen) => !prevOpen);
  };

  const handleRightSidebarToggle = (type) => {
    if (type === "betslip") {
      dispatch(openBetslipModal());
    } else if (type === "chat") {
      dispatch(isChatModelOpen());
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setOpenMenubar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar for desktop view */}
      {!isMobile && (
        <div
          className={`fixed left-0 bg-[#0f212e] text-white h-full overflow-hidden
          ${openMenubar ? "w-[14%] md:w-[19%] lg:w-[15%]" : "w-14"} 
          transition-width duration-300 ease-in-out`}
        >
          <Sidebar
            openMenubar={openMenubar}
            handleDrawerToggle={handleDrawerToggle}
          />
        </div>
      )}

      {/* Main content */}
      <div
        className={`flex flex-col fixed top-0 right-0 bg-[#1a2c38] z-50 h-full
        ${!isMobile ? (openMenubar ? "w-[calc(100%-14%)] md:w-[calc(100%-19%)] lg:w-[calc(100%-15%)]" : "w-[calc(100%-3.5rem)]") : "w-full"}
        transition-width duration-300 ease-in-out`}
      >
        {localStorage.getItem("token") ? (
          <MainHeader />
        ) : (
          <Header
            openMenubar={openMenubar}
            handleDrawerToggle={handleDrawerToggle}
          />
        )}
        <div className="overflow-auto">
          <Content />
          <Footer />
        </div>
        <MobileMenubar />
      </div>

      {/* Right sidebar */}
      {!isMobile && (isBetslipOpen || isChatOpen) && (
        <div
          className={`fixed right-0 bg-[#0f212e] text-white h-full overflow-hidden w-[14%] md:w-[19%] lg:w-[15%] transition-width duration-300 ease-in-out`}
        >
          <RightSidebar
            isBetslipOpen={isBetslipOpen}
            isChatOpen={isChatOpen}
            handleToggle={handleRightSidebarToggle}
          />
        </div>
      )}
    </div>
  );
}

export default DefaultLayout;





            {/* {isChatSidebarOpen && (
        <div className="fixed right-0 top-0 h-full w-64 bg-gray-800 text-white shadow-lg z-50">
          <div className="p-4">
            <h2 className="text-lg font-bold">Chat Sidebar</h2>
          
            <p>Chat content goes here...</p>
            <button onClick={() => setIsChatSidebarOpen(false)}>Close Chat</button>
          </div>
        </div>
      )}

    
      {isBetSlipSidebarOpen && (
        <div className="fixed right-0 top-0 h-full w-64 bg-gray-800 text-white shadow-lg z-50">
          <div className="p-4">
            <h2 className="text-lg font-bold">BetSlip Sidebar</h2>
            
            <p>BetSlip content goes here...</p>
            <button onClick={() => setIsBetSlipSidebarOpen(false)}>Close BetSlip</button>
          </div>
        </div>
      )} */}