import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

function DefaultLayout() {
  const [openMenubar, setOpenMenubar] = useState(false);
  const handleDrawerToggle = () => {
    setOpenMenubar((prevOpen) => !prevOpen);
  };

  return (
    <div className="flex w-[100%]">
      <div className={`${openMenubar ? 'w-[18.9%]' : 'w-14'}`}>
        <Sidebar openMenubar={openMenubar} handleDrawerToggle={handleDrawerToggle} />
      </div>
      <div className="w-full">
        <Header openMenubar={openMenubar} />
        <div>
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
