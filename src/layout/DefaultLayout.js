import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import MobileMenubar from "../components/MobileMenubar";
import { useDispatch, useSelector } from "react-redux";
import { RightSidebar } from "../components/RightSidebar";
import {
  openBetslipModal,
  closeBetslipModal,
  setIsType,
} from "../features/auth/betSlipSlice";
import {
  openChatModal,
  closeChatModal,
  setChatType,
} from "../features/auth/chatSlice";
import { setOpenMenubar } from "../features/auth/authSlice";

function DefaultLayout() {
  // const [openMenubar, setOpenMenubar] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const dispatch = useDispatch();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { isBetslipOpen, isType } = useSelector((state) => state.betslip);
  const { isChatOpen } = useSelector((state) => state.chat);
  const { openMenubar } = useSelector((state) => state.auth);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 768 && window.innerWidth <= 1024
  );

  // Handle toggle for Menubar
  const handleDrawerToggle = () => {
    dispatch(setOpenMenubar(!openMenubar));
  };

  // Handle toggle for right sidebar (Betslip or Chat)
  const handleRightSidebarToggle = (type) => {
    if (type === "betslips") {
      if (isBetslipOpen) {
        dispatch(closeBetslipModal());
      } else {
        dispatch(openBetslipModal());
      }
      dispatch(setIsType("betslips"));
    } else if (type === "chats") {
      if (isChatOpen) {
        dispatch(closeChatModal());
      } else {
        dispatch(openChatModal());
      }
      dispatch(setChatType("chats"));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 1024)
      if (window.innerWidth >= 768) {
        setOpenMenubar(false);
        setIsDrawerOpen(false);
        dispatch(closeBetslipModal());
        dispatch(closeChatModal());
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return (
    <div className="flex h-screen bg-[#0f212e] transition-all duration-300 ease-out">
      {/* Sidebar for desktop view */}
      {!isMobile && (
        <div
          className={`fixed left-0 bg-[#0f212e] text-white h-full overflow-hidden z-40
          ${openMenubar ? "w-[15%] md:w-[26%] lg:w-[22%] xl:w-[15%]" : "w-14"} 
          transition-width duration-300 ease-in-out`}
        >
          <Sidebar
            openMenubar={openMenubar}
            handleDrawerToggle={handleDrawerToggle}
          />
        </div>
      )}
      {/* <div
        className={`flex flex-col lg:fixed md:relative xl:relative relative bg-[#1a2c38] z-40 h-full abc
        ${!isMobile ? (openMenubar ? "ml-[14%] md:ml-[19%] lg:ml-[15%]" : "ml-14") : "ml-0 w-full"}
        ${isBetslipOpen || isChatOpen ? "mr-[14%] md:mr-[28%] lg:mr-[24%] xl:mr-[19%] w-screen" : "mr-0 w-screen"}
        transition-all duration-300 ease-in-out`} 
        >  */}
      {/* <div
          className={`${isTablet ? `flex flex-col relative bg-[#1a2c38] z-30 h-full w-full transition-opacity ${openMenubar && "opacity-50"} duration-300 ease-in-out` 
            : `flex flex-col lg:fixed md:relative xl:relative relative bg-[#1a2c38] z-40 h-full 
            ${!isMobile ? (openMenubar ? "ml-[14%] md:ml-[19%] lg:ml-[15%]" : "ml-14") : "w-full"}
            ${isBetslipOpen || isChatOpen ? "mr-[14%] md:mr-[28%] lg:mr-[24%] xl:mr-[19%] w-screen" : "mr-0 w-screen"}
            transition-all duration-300 ease-in-out`}`}
 > */}
      <div
        className={`${isTablet ? `flex flex-col relative bg-[#1a2c38] z-30 h-full w-full ml-0 md:ml-14 lg:ml-14 xl:ml-0 transition-opacity ${openMenubar && "opacity-50"} duration-300 ease-in-out`
          : `flex flex-col relative bg-[#1a2c38] z-40 h-full
          ${!isMobile ? (openMenubar ? "w-[calc(100%-14%)] md:w-[calc(100%-19%)] lg:w-[calc(100%-15%)] ml-[14%] md:ml-[19%] lg:ml-[15%]" : "w-[calc(100%-3.5rem)] ml-14") : "ml-0 w-full"}
        ${isBetslipOpen || isChatOpen ? "mr-[14%] md:mr-[80%] lg:mr-[58%] xl:mr-[24%] w-screen" : "mr-0 w-screen"}
        transition-all duration-300 ease-in-out`}`}
      >
        {localStorage.getItem("token") ? (
          <MainHeader
            handleRightSidebarToggle={handleRightSidebarToggle}
            isDrawerOpen={isBetslipOpen || isChatOpen}
          />
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
        {/* <MobileMenubar /> */}
        {isMobile && (
          <div className="fixed bottom-0 left-0 w-full bg-[#0f212e] z-50 shadow-md">
            <MobileMenubar />
          </div>
        )}
      </div>

      {/* Right Sidebar for Betslip or Chat */}
      {!isMobile && (isBetslipOpen || isChatOpen) && (
        <div
          className={`relative lg:relative md:relative xl:fixed right-0 text-white overflow-hidden
            ${isBetslipOpen || isChatOpen ? "w-72 md:w-[80%] lg:w-[58%] xl:w-[24%]" : "w-0"}
            transition-all duration-300 ease-in-out z-50`}
        >
          <RightSidebar
            isDrawerOpen={isBetslipOpen || isChatOpen}
            handleRightSidebarToggle={handleRightSidebarToggle}
          />
        </div>
      )}

      {(window.innerWidth < 768 && openMenubar) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => dispatch(setOpenMenubar(false))}
        ></div>
      )}
    </div>
  );
}

export default DefaultLayout;
