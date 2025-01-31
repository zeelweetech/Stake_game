// import React, { useEffect, useState } from "react";
// import LimboGameContent from "./LimboGameContent";
// import GameFooter from "../../../component/GameFooter/GameFooter";
// import LimboGameSidebar from "./LimboGameSidebar";
// import { LimboSocket } from "../../../../socket";
// import GameContent from "../../../component/GameContent";
// import GameTable from "../../../component/GameTable";
// import { io } from "socket.io-client";

// function LimboGame() {
//   const token = localStorage.getItem("token");
//   const limboGameSocket = io('http://192.168.29.203:3007', {
//     path: "/ws",
//     extraHeaders: {
//       Authorization: `token: ${token}`,
//     },
//   })
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
//     limboGameSocket.connect();

//     limboGameSocket.on("connect", () => {
//       console.log("Limbo sokect connected");
//     });

//     limboGameSocket.on("disconnect", () => {
//       console.log("Limbo Disconnected from server");
//     });

//     limboGameSocket.on("connect_error", (error) => {
//       console.error("Limbo Connection Error:", error);
//     });

//     return () => {
//       limboGameSocket.off("message");
//       limboGameSocket.off("connect");
//       limboGameSocket.off("disconnect");
//       limboGameSocket.off("connect_error");
//       limboGameSocket.disconnect();
//     };
//   }, []);

//   return (
//     <div className="flex justify-center w-full h-full">
//       <div className="bg-[#1a2c38] md:py-10 py-4 text-white  flex justify-center items-center md:max-w-96 max-w-full xl:-ml-0 lg:-ml-[3rem]">
//         <div className="w-full">
//           <div
//             className={`flex justify-center w-full  ${isMobile ? "h-[26rem]" : "h-[39rem]"
//               } border-b-3`}
//           >
//             {!isMobile && (
//               <div className="flex-row bg-[#213743] rounded-tl-lg">
//                 <LimboGameSidebar />
//               </div>
//             )}
//             <div className="flex-grow">
//               <LimboGameContent />
//             </div>
//           </div>

//           {isMobile && (
//             <div className="flex flex-col">
//               <LimboGameSidebar />
//             </div>
//           )}
//           <div className="md:flex md:justify-center lg:block xl:block">
//             <div className="max-sm:mx-3 xl:-ml-[23.5rem] lg:-ml-[16.9rem]">
//               <hr className="border-[#213743]" />
//               <GameFooter />
//             </div>
//           </div>
//           <div className="flex justify-center pt-5">
//             <div className="xl:w-[71rem] lg:w-[58rem] md:w-[42rem] mx-0 md:px-0 px-3 w-full">
//               <GameContent />
//               <GameTable />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LimboGame;









import React, { useEffect, useState } from "react";
import LimboGameContent from "./LimboGameContent";
import GameFooter from "../../../component/GameFooter/GameFooter";
import LimboGameSidebar from "./LimboGameSidebar";
// import { LimboSocket } from "../../../../socket";
import GameContent from "../../../component/GameContent";
import GameTable from "../../../component/GameTable";
import { io } from "socket.io-client";
import { decodedToken } from "../../../../resources/utility";
import { useParams } from "react-router-dom";

function LimboGame() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  // const limbo = LimboSocket;
  const { id } = useParams();
  const decoded = decodedToken();
  const limbo = io(process.env.REACT_APP_LIMBO_URL, { path: "/ws" });

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
    limbo.connect();

    // limbo.on("connect", () => {
    //   console.log("Limbo socket connected");
    // });
    // if(limbo.connect()) {
    //   console.log("Limbo socket connected"); 
    // }

    limbo?.emit("joinGame", {
      userId: decoded?.userId,
      gameId: id,
    });

    limbo.on("disconnect", () => {
      console.log("Limbo Disconnected from server");
    });

    limbo.on("connect_error", (error) => {
      console.error("Limbo Connection Error:", error);
    });

    return () => {
      limbo.off("message");
      limbo.off("connect");
      limbo.off("disconnect");
      limbo.off("connect_error");
      limbo.disconnect();
    };
  }, []);

  return (
    <div className="flex justify-center w-full h-full">
      <div className="bg-[#1a2c38] md:py-10 py-4 text-white flex justify-center items-center md:max-w-96 max-w-full xl:-ml-0 lg:-ml-[3rem]">
        <div className="w-full">
          <div
            className={`flex justify-center w-full ${isMobile ? "h-[26rem]" : "h-[39rem]"} border-b-3`}
          >
            {!isMobile && (
              <div className="flex-row bg-[#213743] rounded-tl-lg">
                <LimboGameSidebar limboGameSocket={limbo} />
              </div>
            )}
            <div className="flex-grow">
              <LimboGameContent limboGameSocket={limbo} />
            </div>
          </div>

          {isMobile && (
            <div className="flex flex-col">
              <LimboGameSidebar limboGameSocket={limbo} />
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

export default LimboGame;

