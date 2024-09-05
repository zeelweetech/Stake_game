import React, { useState } from "react";
import Loader from "../component/Loader";
import Mainbar from "./Mainbar";
import MainPlayGame from "./MainPlayGame";


function MainHomePage() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex justify-center h-screen bg-[#1a2c38]">
      {loading ? (
        <Loader />
      ) : (
        <div className="text-white">
          <div>
            <Mainbar />
          </div>
          <MainPlayGame />
        </div>
      )}
    </div>
  );
}

export default MainHomePage;
