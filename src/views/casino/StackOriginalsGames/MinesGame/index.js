import React, { useEffect, useState } from "react";
import GameFooter from "../../../component/GameFooter/GameFooter";
import MinesGameSidebar from "./MinesGameSidebar";
import MinesGameContent from "./MinesGameContent";
// import { MineSocket } from "../../../../socket";
import GameContent from "../../../component/GameContent";
import GameTable from "../../../component/GameTable";
import { useParams } from "react-router-dom";
import { decodedToken } from "../../../../resources/utility";
import { io } from "socket.io-client";

function MinesGame() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { id } = useParams();
  const decoded = decodedToken();
  const mineGameSocket = io(process.env.REACT_APP_MINE_URL, { path: "/ws" });

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
    mineGameSocket.connect();

    // mineGameSocket.on("connect", () => {
    //   console.log("Mine sokect connected");
    // });

    mineGameSocket.emit("joinGame", {
      userId: decoded?.userId,
      gameId: id,
    });

    mineGameSocket.on("disconnect", () => {
      console.log("Mine Disconnected from server");
    });

    return () => {
      mineGameSocket.off("connect");
      mineGameSocket.off("disconnect");
      mineGameSocket.disconnect();
    };
  });

  return (
    <div className="flex justify-center ">
      <div className="md:py-10 py-3 bg-[#1a2c38] flex justify-center items-center text-white h-full md:max-w-96 max-w-full xl:-ml-0 lg:-ml-[3rem]">
        <div className="w-full">
          <div
            className={`flex justify-center w-full   ${
              isMobile ? "h-[24rem]" : "h-[39rem]"
            } border-b-3`}
          >
            {!isMobile && (
              <div className="flex-row bg-[#213743] rounded-tl-lg">
                <MinesGameSidebar mineGameSocket={mineGameSocket} />
              </div>
            )}
            <div className="flex-grow">
              <MinesGameContent mineGameSocket={mineGameSocket} />
            </div>
          </div>

          {isMobile && (
            <div className="flex flex-col">
              <MinesGameSidebar mineGameSocket={mineGameSocket} />
            </div>
          )}
          <div className="md:flex md:justify-center lg:block xl:block">
            <div className="max-sm:mx-2 xl:-ml-[23.5rem] lg:-ml-[16.9rem]">
              <hr className="border-[#213743]" />
              <GameFooter />
            </div>
          </div>
          <div className="flex justify-center pt-5">
            <div className="xl:w-[71rem] lg:w-[58rem] md:w-[42rem] mx-0 md:px-0 px-3 w-full">
              <GameContent />
              <GameTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MinesGame;
