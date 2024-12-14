import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RightSidebar({ openMenubar, handleDrawerToggle }) {
  const [betSlipClicked, setBetSlipClicked] = useState(false);
  const [chatClicked, setChatClicked] = useState(false);
  const navigate = useNavigate();

  const handleBetSlipClick = () => {
    setBetSlipClicked((prev) => !prev);
    setChatClicked(false);
    navigate("/betSlip/home");
  };

  const handleChatClick = () => {
    setChatClicked((prevState) => !prevState);
    setBetSlipClicked(false);
    navigate("/ComeSoon");
  };

const RightSidebar = () => {
  
  return (
    <div className="w-64 bg-gray-700 fixed h-full">
      <div className="my-2 mb-4">
        <h1 className="text-2x text-white font-bold">Admin Dashboard</h1>
      </div>
      <ul>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <p>home</p>
          
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <p>home</p>
          
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <p>home</p>
          
        </li>
      </ul>
    </div>
    
  );
};
};

export default RightSidebar;
