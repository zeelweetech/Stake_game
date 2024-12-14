import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import MobileMenubar from "../components/MobileMenubar";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { openBetslipModal } from "../features/auth/betSlipSlice";
import { isChatModelOpen} from "../features/auth/chatSlice"
import RightSidebar from "../components/RightSidebar"

function DefaultLayout() {
  const [openMenubar, setOpenMenubar] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const { isBetslipOpen } = useSelector((state) => state.betslip);
  const {isChatOpen} = useSelector((state) => state.chat)
  const dispatch = useDispatch()

  const handleDrawerToggle = () => {
    setOpenMenubar((prevOpen) => !prevOpen);
  };

  const handleRightSidebarToggle = () => {
    // setIsRightSidebarOpen((prevState) => !prevState);
    dispatch(openBetslipModal());
    dispatch( isChatModelOpen())
  };

  const token = localStorage.getItem("token");

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
        {token ? (
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
      {!isMobile && isRightSidebarOpen && (
        <div
          className={`fixed right-0 bg-[#0f212e] text-white h-full overflow-hidden
          ${openMenubar ? "w-[14%] md:w-[19%] lg:w-[15%]" : "w-14"} 
          transition-width duration-300 ease-in-out`}
        >
          <RightSidebar
            isOpen={isBetslipOpen}
            handleToggle={handleRightSidebarToggle}
          />
          <RightSidebar
            isOpen={isChatOpen}
            handleToggle={handleRightSidebarToggle}
          />
        </div>
      )}
      {/* Right sidebar */}
      {/* {!isMobile && isRightSidebarOpen && (
        <div
          className={`fixed right-0 bg-[#0f212e] text-white h-full overflow-hidden
          w-[20%] 
          transition-width duration-300 ease-in-out`}
        >
          <RightSidebar/>
        </div>
      )} */}
    </div>
  );
}

export default DefaultLayout;
