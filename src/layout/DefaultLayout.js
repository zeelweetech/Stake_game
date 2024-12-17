import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import MobileMenubar from "../components/MobileMenubar";
import { useDispatch, useSelector } from "react-redux";
// import { openBetslipModal } from "../features/auth/betSlipSlice";
// import { isChatModelOpen } from "../features/auth/chatSlice";

import RightSidebar from "../components/RightSidebar";

function DefaultLayout() {
  const [openMenubar, setOpenMenubar] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { isBetslipOpen } = useSelector((state) => state.betslip);
  const { isChatOpen } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpenMenubar((prevOpen) => !prevOpen);
  };

  // const handleRightSidebarToggle = (type) => {
  //   console.log("isBetslipOpen", isBetslipOpen);
  //   if (!isBetslipOpen) {
  //     console.log("hiiiiiu, how are youj");
  //     dispatch(openBetslipModal());
  //   } else if (!isChatOpen) {
  //     console.log("hiiiiiu, how are youj -*-/-/-/-/-/");
  //     dispatch(isChatModelOpen());
  //   }
  //   setIsDrawerOpen((prev) => !prev)
  // };
  const handleRightSidebarToggle = () => {
    setIsDrawerOpen((prev) => !prev); // Toggles the right sidebar
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setOpenMenubar(false);
        setIsDrawerOpen(false);
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
      <div
        className={`flex flex-col relative bg-[#1a2c38] z-40 h-full
        ${!isMobile ? (openMenubar ? "ml-[14%] md:ml-[19%] lg:ml-[15%]" : "ml-14") : "ml-0 w-full"}
        ${isDrawerOpen ? "mr-[14%] md:mr-[19%] lg:mr-[15%]" : "mr-0 w-full"}
        transition-all duration-300 ease-in-out`}
      >
        {localStorage.getItem("token") ? (
          <MainHeader
            handleRightSidebarToggle={handleRightSidebarToggle}
            isDrawerOpen={isDrawerOpen}
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
        <MobileMenubar />
      </div>
      {!isMobile && (isBetslipOpen || isChatOpen) && (
        <div
          className={`fixed right-0 bg-[#0f212e] text-white h-full overflow-hidden w-[14%] md:w-[19%] lg:w-[15%] transition-width duration-300 ease-in-out`}
        >
          <RightSidebar
            isBetslipOpen={isBetslipOpen}
            isChatOpen={isChatOpen}
            handleRightSidebarToggle={handleRightSidebarToggle}
          />

        </div>
      )}
    </div>
  );
}

export default DefaultLayout;
