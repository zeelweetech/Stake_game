import React, { useEffect, useState } from "react";
import PlinkoGameSidebar from "./PlinkoGameSidebar";
import PlinkoGameContent from "./PlinkoGameContent";
import GameFooter from "../../../component/GameFooter/GameFooter";
// import { PlinkoSocket } from "../../../../socket";
import GameContent from "../../../component/GameContent";
import GameTable from "../../../component/GameTable";
import { useParams } from "react-router-dom";
import { decodedToken } from "../../../../resources/utility";
import { io } from "socket.io-client";

function PlinkoGame() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { id } = useParams();
  const decoded = decodedToken();
  const plinkoGameSocket = io(process.env.REACT_APP_PLINKO_URL, { path: "/ws" });

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
    plinkoGameSocket.connect();

    // plinkoGameSocket.on("connect", () => {
    //   console.log("Plinko socket connected");
    // });

    plinkoGameSocket.emit("joinGame", {
      userId: decoded?.userId,
      gameId: id,
    });

    plinkoGameSocket.on("disconnect", () => {
      console.log("Plinko disconnected from server");
    });

    plinkoGameSocket.on("connect_error", (error) => {
      console.error("Plinko Connection Error:", error);
    });

    return () => {
      plinkoGameSocket.off("message");
      plinkoGameSocket.off("connect");
      plinkoGameSocket.off("disconnect");
      plinkoGameSocket.off("connect_error");
      plinkoGameSocket.disconnect();
    };
  }, []);

  return (
    <div className="flex justify-center w-full h-full">
      <div className="bg-[#1a2c38] py-10 text-white flex justify-center items-center md:max-w-96 max-w-full">
        <div className="w-full">
          <div
            className={`flex justify-center w-full ${isMobile ? "h-[25rem]" : "h-[39rem]"
              } border-b-3`}
          >
            {!isMobile && (
              <div className="flex-row bg-[#213743] rounded-tl-lg">
                <PlinkoGameSidebar plinkoGameSocket={plinkoGameSocket} />
              </div>
            )}
            <div className="flex-grow">
              <PlinkoGameContent plinkoGameSocket={plinkoGameSocket} />
            </div>
          </div>

          {isMobile && (
            <div className="flex flex-col">
              <PlinkoGameSidebar plinkoGameSocket={plinkoGameSocket} />
            </div>
          )}
          <div className="md:flex md:justify-center lg:block xl:block">
            <div className="max-sm:mx-3 xl:-ml-[23.5rem] lg:-ml-[16.9rem]">
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

export default PlinkoGame;
