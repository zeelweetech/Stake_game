import React, { useState } from "react";
import Loader from "../component/Loader";
import Mainbar from "./Mainbar";
import StackOriginals from "../casino/CasinoHomePage/StackOriginals";

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
          </div>
        </div>
      )}
    </div>
  );
}

export default MainHomePage;
