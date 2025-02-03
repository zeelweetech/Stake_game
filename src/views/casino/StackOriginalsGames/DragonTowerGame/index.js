import React, { useEffect, useState } from "react";
import GameFooter from "../../../component/GameFooter/GameFooter";
import DragonSidebar from "./DragonSidebar";
import DragonContent from "./DragonContent";
// import { DragonTowerSocket } from "../../../../socket";
import GameContent from "../../../component/GameContent";
import GameTable from "../../../component/GameTable";
import { useParams } from "react-router-dom";
import { decodedToken } from "../../../../resources/utility";
import { io } from "socket.io-client";

function DragonTowerGame() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { id } = useParams();
  const decoded = decodedToken();
  const dragonGameSocket = io(process.env.REACT_APP_DRAGONTOWER_URL, { path: "/ws" });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    dragonGameSocket.connect();

    // dragonGameSocket.on("connect", () => {
    //   console.log("Dragon Tower sokect connected");
    // });

    dragonGameSocket.emit("joinGame", {
      userId: decoded?.userId,
      gameId: id,
    });

    dragonGameSocket.on("disconnect", () => {
      console.log("Dragon Tower Disconnected from server");
    });

    return () => {
      dragonGameSocket.off("connect");
      dragonGameSocket.off("disconnect");
      dragonGameSocket.disconnect();
    };
  });

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="bg-[#1a2c38] py-10 max-sm:py-5 text-white flex justify-center items-center md:max-w-96 max-w-full xl:ml-0 lg:-ml-[3rem]">
        <div className="w-full">
          <div
            className={`flex justify-center w-full ${isMobile ? "h-[25rem]" : "h-[46rem] "
              } border-b-3`}
          >
            {!isMobile && (
              <div className="flex-row bg-[#213743] rounded-tl-lg">
                <DragonSidebar dragonGameSocket={dragonGameSocket} />
              </div>
            )}
            <div className="flex-grow">
              <DragonContent dragonGameSocket={dragonGameSocket} />
            </div>
          </div>

          {isMobile && (
            <div className="flex flex-col">
              <DragonSidebar dragonGameSocket={dragonGameSocket} />
            </div>
          )}
          <div className="md:flex md:justify-center lg:block xl:block">
            <div className="max-sm:mx-3 xl:-ml-[23.5rem] lg:-ml-[16.9rem] xl:-mt-0 lg:-mt-0 md:-mt-12 -mt-12">
              <hr className="border-[#213743]" />
              <GameFooter />
            </div>
          </div>
          <div className="flex justify-center pt-5">
            <div className="xl:w-[71rem] lg:w-[58rem] md:w-[42rem] md:px-0 px-3 w-full">
              <GameContent />
              <GameTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DragonTowerGame;
