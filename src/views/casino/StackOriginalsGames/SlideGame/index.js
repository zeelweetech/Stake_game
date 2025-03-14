import React, { useEffect, useState } from "react";
import GameFooter from "../../../component/GameFooter/GameFooter";
import GameContent from "../../../component/GameContent";
import GameTable from "../../../component/GameTable";
import SlideGameSidebar from "./SlideGameSidebar";
import SlideGameContent from "./SlideGameContent";
import { useParams } from "react-router-dom";
import { decodedToken } from "../../../../resources/utility";
import { io } from "socket.io-client";
// import { SlideSocket } from "../../../../socket";

function SlideGame() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { id } = useParams();
  const decoded = decodedToken();
  const slideGameSocket = io(process.env.REACT_APP_SLIDE_URL, { path: "/ws" });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   slideGameSocket.connect();

  //   // slideGameSocket.on("connect", () => {
  //   //   console.log("Limbo sokect connected");
  //   // });

  //   slideGameSocket.on("disconnect", () => {
  //     console.log("Limbo Disconnected from server");
  //   });

  //   slideGameSocket.on("connect_error", (error) => {
  //     console.error("Limbo Connection Error:", error);
  //   });

  //   return () => {
  //     slideGameSocket.off("message");
  //     slideGameSocket.off("connect");
  //     slideGameSocket.off("disconnect");
  //     slideGameSocket.off("connect_error");
  //     slideGameSocket.disconnect();
  //   };
  // }, []);

  return (
    <div className="flex justify-center w-full h-full">
      <div className="bg-[#1a2c38] md:py-10 py-4 text-white flex justify-center items-center md:max-w-96 max-w-full">
        <div className=" w-full">
          <div
            className={`flex justify-center w-full  ${isMobile ? "h-[26rem]" : "h-[41.5rem]"
              } border-b-3`}
          >
            {!isMobile && (
              <div className="flex-row bg-[#213743] rounded-tl-lg">
                <SlideGameSidebar slideGameSocket={slideGameSocket} />
              </div>
            )}
            <div className="flex-grow">
              <SlideGameContent slideGameSocket={slideGameSocket} />
            </div>
          </div>

          {isMobile && (
            <div className="flex flex-col">
              <SlideGameSidebar slideGameSocket={slideGameSocket} />
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

export default SlideGame;
