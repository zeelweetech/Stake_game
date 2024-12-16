

import { useDispatch, useSelector } from "react-redux";
import { closeBetslipModal } from "../features/auth/betSlipSlice"; // Ensure the correct import path
import { closeChatModal } from "../features/auth/chatSlice";
import Betslip from "../views/rightSidebarView/betSlip/betSlip"
import ChatApp from "../views/rightSidebarView/chat/chatInRightSidebar";

function RightSidebar({ type, openMenubar }) {
  const dispatch = useDispatch();
  const isBetslipOpen = useSelector((state) => state.betslip.isBetslipOpen); 
  const isChatOpen = useSelector((state) => state.chat.isChatOpen)
  const handleCloseBetslip = () => {
    dispatch(closeBetslipModal());
  };
  const handleCloseChat = () => {
    dispatch(closeChatModal());
  };

  return (
    <div
      className={`h-full ${openMenubar ? "block" : "hidden md:block "} 
      ${openMenubar && "md:text-white"} 
      md:bg-none overflow-x-hidden bg-gray-800`}
    >
      <div className="fixed right-0 top-0 h-full w-80 text-white shadow-lg z-40">
        <div className="p-2">
          {type === "betslip" && isBetslipOpen && (
            <>
              <h2 className="text-lg font-bold bg-gray-800">
                <Betslip onClose={handleCloseBetslip} />
              </h2>
            </>
          )}
          {type === "chat" && isChatOpen && (
            <>
              <h2 className="text-lg font-bold bg-gray-800">
                <ChatApp onClose={handleCloseChat} />
              </h2>
            </>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
// import { useDispatch, useSelector } from "react-redux";
// import { closeBetslipModal } from "../features/auth/betSlipSlice";
// import { closeChatModal } from "../features/auth/chatSlice";

// function RightSidebar({ type, openMenubar }) {
//   const dispatch = useDispatch();
//   const isBetslipOpen = useSelector((state) => state.betslip.isBetslipOpen);
//   const isChatOpen = useSelector((state) => state.chat.isChatOpen);

//   const handleCloseBetslip = () => {
//     dispatch(closeBetslipModal());
//   };

//   const handleCloseChat = () => {
//     dispatch(closeChatModal());
//   };

//   return (
//     <div
//       className={`h-full ${openMenubar ? "block" : "hidden md:block "} 
//       ${openMenubar && "md:text-white"} 
//       md:bg-none overflow-x-hidden bg-gray-800`}
//     >
//       <div className="fixed right-0 top-0 h-full w-64 text-white shadow-lg z-40">
//         <div className="p-4">
//           {type === "betslip" && isBetslipOpen && (
//             <>
//               <h2 className="text-lg font-bold bg-gray-800">BetSlip</h2>
//               {/* BetSlip content here */}
//               <button onClick={handleCloseBetslip}>Close BetSlip</button>
//             </>
//           )}

//           {type === "chat" && isChatOpen && (
//             <>
//               <h2 className="text-lg font-bold bg-gray-800">Chat</h2>
//               {/* Chat content here */}
//               <button onClick={handleCloseChat}>Close Chat</button>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RightSidebar;
