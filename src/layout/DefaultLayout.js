import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import { jwtDecode } from "jwt-decode";

function DefaultLayout() {
  const [openMenubar, setOpenMenubar] = useState(false);
  const handleDrawerToggle = () => {
    setOpenMenubar((prevOpen) => !prevOpen);
  };

  const token = localStorage.getItem("token");

  return (
    <div className="flex h-screen">
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
      <div
        className={`flex flex-col fixed top-0 right-0 bg-white z-50 h-full
        ${
          openMenubar
            ? "w-[calc(100%-14%)] md:w-[calc(100%-19%)] lg:w-[calc(100%-15%)]"
            : "w-[calc(100%-3.5rem)]"
        }
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
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
