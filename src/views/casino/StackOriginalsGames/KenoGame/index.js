import React, { useEffect, useState } from "react";
import GameFooter from "../../../component/GameFooter/GameFooter";
import GameContent from "../../../component/GameContent";
import GameTable from "../../../component/GameTable";
import KenoGameSidebar from "./KenoGameSidebar";
import KenoGameContent from "./KenoGameContent";
import { KenoSocket } from "../../../../socket";

function KenoGame() {
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
      KenoSocket.connect();

      KenoSocket.on("connect", () => {
        console.log("Limbo sokect connected");
      });

      KenoSocket.on("disconnect", () => {
        console.log("Limbo Disconnected from server");
      });

      KenoSocket.on("connect_error", (error) => {
        console.error("Limbo Connection Error:", error);
      });

      return () => {
        KenoSocket.off("message");
        KenoSocket.off("connect");
        KenoSocket.off("disconnect");
        KenoSocket.off("connect_error");
        KenoSocket.disconnect();
      };
    }, []);

  return (
    <div className="flex justify-center w-full h-full">
      <div className="bg-[#1a2c38] py-10 text-white flex justify-center items-center md:max-w-96 max-w-full">
        <div className="w-full">
          <div
            className={`flex justify-center w-full${
              isMobile ? "h-[26rem]" : "h-[39rem]"
            } border-b-3`}
          >
            {!isMobile && (
              <div className="flex-row bg-[#213743]">
                <KenoGameSidebar />
              </div>
            )}
            <div className="flex-grow">
              <KenoGameContent />
            </div>
          </div>

          {isMobile && (
            <div className="flex flex-col">
              <KenoGameSidebar />
            </div>
          )}
          <div className="md:flex md:justify-center lg:block xl:block">
            <div className="max-sm:mx-3 xl:-ml-[24rem] lg:-ml-[16.9rem]">
              <hr className="border-[#213743]" />
              <GameFooter />
            </div>
          </div>
          <div className="flex justify-center pt-5">
            <div className="xl:w-[72rem] lg:w-[58rem] md:w-[42rem] mx-0 md:px-0 px-3 w-full">
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
