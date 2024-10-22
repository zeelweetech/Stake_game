// import React, { useEffect, useState } from "react";
// import PlinkoGameSidebar from "./PlinkoGameSidebar";
// import PlinkoGameContent from "./PlinkoGameContent";
// import GameFooter from "../../../component/GameFooter";
// import { PlinkoSocket } from "../../../../socket";

// function PlinkoGame() {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
//     PlinkoSocket.connect();

//     PlinkoSocket.on("connect", () => {
//       console.log("Plinko socket connected");
//     });

//     PlinkoSocket.on("disconnect", () => {
//       console.log("Plinko disconnected from server");
//     });

//     PlinkoSocket.on("connect_error", (error) => {
//       console.error("Plinko Connection Error:", error);
//     });

//     return () => {
//       PlinkoSocket.off("message");
//       PlinkoSocket.off("connect");
//       PlinkoSocket.off("disconnect");
//       PlinkoSocket.off("connect_error");
//       PlinkoSocket.disconnect();
//     };
//   }, []);

//   return (
//     <div className="mt-5  bg-[#1a2c38] flex justify-center items-center  text-white  w-full h-full">
//       <div className="w-full max-w-screen-lg">
//         <div className={`flex w-full min-w-80 h-[39rem] max-sm:h-[24rem] border-b-3`}>
//           {!isMobile && (
//             <div className="flex-row bg-[#213743]">
//               <PlinkoGameSidebar />
//             </div>
//           )}
//           <div className="flex-grow">
//             <PlinkoGameContent />
//           </div>
//         </div>
//         {isMobile && (
//           <div className="flex flex-col ">
//             <PlinkoGameSidebar />
//           </div>
//         )}
//         <div>
//           <hr className="border-2 border-[#213743]"/>
//           <GameFooter />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PlinkoGame;

import React, { useEffect, useState } from "react";
import PlinkoGameSidebar from "./PlinkoGameSidebar";
import PlinkoGameContent from "./PlinkoGameContent";
import GameFooter from "../../../component/GameFooter";
import { PlinkoSocket } from "../../../../socket";

function PlinkoGame() {
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
    PlinkoSocket.connect();

    PlinkoSocket.on("connect", () => {
      console.log("Plinko socket connected");
    });

    PlinkoSocket.on("disconnect", () => {
      console.log("Plinko disconnected from server");
    });

    PlinkoSocket.on("connect_error", (error) => {
      console.error("Plinko Connection Error:", error);
    });

    return () => {
      PlinkoSocket.off("message");
      PlinkoSocket.off("connect");
      PlinkoSocket.off("disconnect");
      PlinkoSocket.off("connect_error");
      PlinkoSocket.disconnect();
    };
  }, []);

  return (
    <div className="mt-5 bg-[#1a2c38] flex justify-center items-center text-white w-full h-full">
      <div className="w-full max-w-screen-lg">
        <div
          className={`flex w-full min-w-70  ${
            isMobile ? "h-[24rem]" : "h-[39rem]"
          } border-b-3`}
        >
          {!isMobile && (
            <div className="flex-row bg-[#213743]">
              <PlinkoGameSidebar />
            </div>
          )}
          <div className="flex-grow">
            <PlinkoGameContent />
          </div>
        </div>

        {/* Mobile view: Display Sidebar in a stacked (vertical) manner */}
        {isMobile && (
          <div className="flex flex-col">
            <PlinkoGameSidebar />
          </div>
        )}

        {/* Footer Section */}
        <div
          className={`${
            isMobile ? "h-[12rem]" : "h-[15rem]"
          } border-t-2 border-[#213743]`}
        >
          <hr className="border-2 border-[#213743]" />
          <GameFooter />
        </div>
      </div>
    </div>
  );
}

export default PlinkoGame;
