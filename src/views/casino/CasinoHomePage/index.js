import React from "react";
import { useNavigate } from "react-router-dom";

function CasinoHomePage() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#1a2c38] h-screen text-white">
      <div>
        <button
          className="bg-[#1475e1] hover:bg-[#396ca8] text-white rounded-sm px-5 py-2.5"
          onClick={() => navigate("/casino/games/crash")}
        >
          Crash
        </button>
      </div>
    </div>
  );
}

export default CasinoHomePage;
