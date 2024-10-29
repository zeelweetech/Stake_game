import React, { useEffect,useState } from "react";
import LimboGameContent from "./LimboGameContent";
import GameFooter from "../../../component/GameFooter";
import LimboGameSidebar from "./LimboGameSidebar";
import { LimboSocket } from "../../../../socket";

function LimboGame() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
    LimboSocket.connect();

    LimboSocket.on("connect", () => {
      console.log("Limbo sokect connected");
    });

    LimboSocket.on("disconnect", () => {
      console.log("Limbo Disconnected from server");
    });

    LimboSocket.on("connect_error", (error) => {
      console.error("Limbo Connection Error:", error);
    });

    return () => {
      LimboSocket.off("message");
      LimboSocket.off("connect");
      LimboSocket.off("disconnect");
      LimboSocket.off("connect_error");
      LimboSocket.disconnect();
    };
  }, []);

  return (   
    <div className="bg-[#1a2c38] py-10 text-white flex justify-center items-center w-full ">
    <div className="w-full max-w-screen-lg">
      <div
        className={`flex w-full min-w-80 ${
          isMobile ? "h-[26rem]" : "h-[39rem]"
        } border-b-3`}
      >
        {!isMobile && (
          <div className="flex-row bg-[#213743]">
            <LimboGameSidebar/>
          </div>
        )}
        <div className="flex-grow">
          <LimboGameContent/>
        </div>
      </div>

      {isMobile && (
        <div className="flex flex-col">
          <LimboGameSidebar/>
        </div>
      )}
      <div
        className={`${
          isMobile ? "h-[12rem]" : "h-[15rem]"
        } xl:w-[72rem] lg:w-[55rem] border-t-2 border-[#213743]`}
      >
        <hr className="md:w- border-[#213743]" />
        <GameFooter />
      </div>
    </div>
  </div>
  );
}

export default LimboGame;
