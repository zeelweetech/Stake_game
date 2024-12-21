import React, { useEffect, useState } from "react";
import GameFooter from "../../../component/GameFooter";
import GameContent from "../../../component/GameContent";
import GameTable from "../../../component/GameTable";
import SlideGameSidebar from "./SlideGameSidebar";
import SlideGameContent from "./SlideGameContent";

function SlideGame() {
      const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    //   useEffect(() => {
    //     const handleResize = () => {
    //       setIsMobile(window.innerWidth <= 768);
    //     };

    //     window.addEventListener("resize", handleResize);

    //     return () => {
    //       window.removeEventListener("resize", handleResize);
    //     };
    //   }, []);
    //   useEffect(() => {
    //     LimboSocket.connect();

    //     LimboSocket.on("connect", () => {
    //       console.log("Limbo sokect connected");
    //     });

    //     LimboSocket.on("disconnect", () => {
    //       console.log("Limbo Disconnected from server");
    //     });

    //     LimboSocket.on("connect_error", (error) => {
    //       console.error("Limbo Connection Error:", error);
    //     });

    //     return () => {
    //       LimboSocket.off("message");
    //       LimboSocket.off("connect");
    //       LimboSocket.off("disconnect");
    //       LimboSocket.off("connect_error");
    //       LimboSocket.disconnect();
    //     };
    //   }, []);

    return (
        // <div className="bg-[#1a2c38] xl:-ml-16 lg:ml-5 py-10 text-white flex justify-center items-center w-full ">
        //     <div className="w-full max-w-screen-lg">
        //         <div
        //             className={`flex w-full min-w-80 ${isMobile ? "h-[26rem]" : "h-[39rem]"
        //                 } border-b-3`}
        //         >
        //             {!isMobile && (
        //                 <div className="flex-row bg-[#213743]">
        //                     <SlideGameSidebar />
        //                 </div>
        //             )}
        //             <div className="flex-grow">
        //                 <SlideGameContent />
        //             </div>
        //         </div>

        //         {isMobile && (
        //             <div className="flex flex-col">
        //                 <SlideGameSidebar />
        //             </div>
        //         )}
        //         <div
        //             className={`
        //    ${isMobile ? "h-[12rem] md:ml-40 md:w-[24.3rem] ml-3 w-[24.9rem]" : "h-10"} 
        // xl:w-[72rem] lg:w-[57.8rem] border-t-2 border-[#213743] h-28`}
        //         >
        //             <hr className="border-[#213743]" />
        //             <GameFooter />
        //         </div>
        //         <div className="xl:w-[80rem] px-4 md:px-7 max-w-screen-md mx-auto">
        //             <GameContent />
        //             <GameTable />
        //         </div>
        //     </div>
        // </div>
        <div className="flex justify-center w-full h-full">
        <div className="bg-[#1a2c38] md:py-10 py-4 text-white  flex justify-center items-center md:max-w-96 max-w-full">
          <div className=" w-full">
            <div
              className={`flex justify-center w-full  ${
                isMobile ? "h-[26rem]" : "h-[39rem]"
              } border-b-3`}
            >
              {!isMobile && (
                <div className="flex-row bg-[#213743] rounded-tl-xl">
                  <SlideGameSidebar />
                </div>
              )}  
              <div className="flex-grow">
                <SlideGameContent />
              </div>
            </div>
  
            {isMobile && (
              <div className="flex flex-col">
                <SlideGameSidebar />
              </div>
            )}
             <div className="md:flex md:justify-center lg:block xl:block">
              <div className="max-sm:mx-3 xl:-ml-[24rem] lg:-ml-[16.9rem]">
                <hr className="border-[#213743]" />
                <GameFooter />
              </div>
            </div>
            <div className="flex justify-center pt-5">
              <div className="xl:w-[72rem] lg:w-[55rem] md:w-[42rem] mx-0 md:px-0 px-3 w-full">
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
