import React, { useEffect, useState } from "react";
import GameFooter from "../../../component/GameFooter/GameFooter";
import GameContent from "../../../component/GameContent";
import GameTable from "../../../component/GameTable";
import KenoGameSidebar from "./KenoGameSidebar";
import KenoGameContent from "./KenoGameContent";
// import { KenoSocket } from "../../../../socket";
import { io } from "socket.io-client";
import { decodedToken } from "../../../../resources/utility";
import { useParams } from "react-router-dom";

function KenoGame() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { id } = useParams();
  const decoded = decodedToken();
  const kenoGameSocket = io(process.env.REACT_APP_KENO_URL, { path: "/ws" });

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
    kenoGameSocket.connect();

    // kenoGameSocket.on("connect", () => {
    //   console.log("Keno sokect connected");
    // });

    kenoGameSocket.on("disconnect", () => {
      console.log("Keno Disconnected from server");
    });

    kenoGameSocket.on("connect_error", (error) => {
      console.error("Keno Connection Error:", error);
    });

    return () => {
      kenoGameSocket.off("message");
      kenoGameSocket.off("connect");
      kenoGameSocket.off("disconnect");
      kenoGameSocket.off("connect_error");
      kenoGameSocket.disconnect();
    };
  }, []);

  return (
    <div className="flex justify-center w-full h-full">
      <div className="bg-[#1a2c38] py-10 text-white flex justify-center items-center md:max-w-96 max-w-full xl:-ml-0 lg:-ml-[3.25rem]">
        <div className="w-full">
          <div
            className={`flex justify-center w-full${
              isMobile ? "h-[26rem]" : "h-[39rem]"
            } border-b-3`}
          >
            {!isMobile && (
              <div className="flex-row bg-[#213743] rounded-tl-lg">
                <KenoGameSidebar kenoGameSocket={kenoGameSocket} />
              </div>
            )}
            <div className="flex-grow">
              <KenoGameContent kenoGameSocket={kenoGameSocket} />
            </div>
          </div>

          {isMobile && (
            <div className="flex flex-col">
              <KenoGameSidebar kenoGameSocket={kenoGameSocket} />
            </div>
          )}
          <div className="md:flex md:justify-center lg:block xl:block">
            <div className="max-sm:mx-3 xl:-ml-[23.5rem] lg:-ml-[16.9rem]">
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

export default KenoGame;
