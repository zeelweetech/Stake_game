import React, { useState } from "react";
import Loader from "../component/Loader";
import Mainbar from "./Mainbar";
import StackOriginals from "../casino/CasinoHomePage/StackOriginals";
import Slots from "../casino/CasinoHomePage/Slots";
import LiveCasino from "../casino/CasinoHomePage/LiveCasino";
import GameShows from "../casino/CasinoHomePage/GameShows";
import Exclusives from "../casino/CasinoHomePage/Exclusives";

function MainHomePage() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex justify-center h-screen bg-[#1a2c38]">
      {loading ? (
        <Loader />
      ) : (
        <div className="text-white">
          <Mainbar />
          <div className="px-44 mt-8">
            <StackOriginals setLoading={setLoading} />
            <Slots />
            <LiveCasino />
            <GameShows/>
            <Exclusives/>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainHomePage;
