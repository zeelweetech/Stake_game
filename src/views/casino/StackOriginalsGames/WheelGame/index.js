import React, { useEffect, useState } from "react";
import GameFooter from "../../../component/GameFooter/GameFooter";
import WheelGameContent from "./WheelGameContent";
import WheelGameSidebar from "./WheelGameSidebar";
// import { WheelSocket } from "../../../../socket";
import GameContent from "../../../component/GameContent";
import GameTable from "../../../component/GameTable";
import { io } from "socket.io-client";
import { decodedToken } from "../../../../resources/utility";
import { useParams } from "react-router-dom";

function WheelGame() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { id } = useParams();
  const decoded = decodedToken();
  const wheelGameSocket = io(process.env.REACT_APP_WHEEL_URL, { path: "/ws" });

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
    wheelGameSocket.connect();

    // wheelGameSocket.on("connect", () => {
    //   console.log("wheel sokect connected");
    // });

    wheelGameSocket.emit("joinGame", {
      userId: decoded?.userId,
      gameId: id,
    });

    wheelGameSocket.on("disconnect", () => {
      console.log("wheel Disconnected from server");
    });

    return () => {
      wheelGameSocket.off("connect");
      wheelGameSocket.off("disconnect");
      wheelGameSocket.disconnect(); 
    };
  }, [decoded?.userId, id]);

  return (
    <div className="flex justify-center w-full h-full">
      <div className="bg-[#1a2c38] py-10 text-white flex justify-center items-center md:max-w-96 max-w-full">
        <div className="w-full">
          <div
            className={`flex justify-center w-full ${isMobile ? "h-[24rem]" : "h-[46rem]"
              } border-b-3`}
          >
            {!isMobile && (
              <div className="flex-row bg-[#213743] rounded-tl-lg">
                <WheelGameSidebar wheelGameSocket={wheelGameSocket} />
              </div>
            )}
            <div className="flex-grow">
              <WheelGameContent wheelGameSocket={wheelGameSocket} />
            </div>
          </div>

          {isMobile && (
            <div className="flex flex-col">
              <WheelGameSidebar wheelGameSocket={wheelGameSocket} />
            </div>
          )}
          <div className="md:flex md:justify-center lg:block xl:block">
            <div className="max-sm:mx-3 xl:-ml-[23.5rem] lg:-ml-[16.9rem] md:ml-[1.5rem]">
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

export default WheelGame;
