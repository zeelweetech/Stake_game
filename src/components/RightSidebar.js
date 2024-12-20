import { useDispatch, useSelector } from "react-redux";
import { closeBetslipModal } from "../features/auth/betSlipSlice";
import { closeChatModal } from "../features/auth/chatSlice";
import Betslip from "../views/rightSidebarView/betSlip/betSlip";
import ChatApp from "../views/rightSidebarView/chat/chatInRightSidebar";
import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const RightSidebar = ({ type, isDrawerOpen, handleRightSidebarToggle, onClose }) => {
  const dispatch = useDispatch();
  const { isBetslipOpen } = useSelector((state) => ({
    isBetslipOpen: state.betslip.isBetslipOpen,
  }));

  const { isChatOpen } = useSelector((state) => ({
    isChatOpen: state.chat.isChatOpen,
  }));

  const handleCloseBetslip = () => {
    dispatch(closeBetslipModal());
    handleRightSidebarToggle();
  };

  const handleCloseChat = () => {
    dispatch(closeChatModal());
   handleRightSidebarToggle(); 
  };

  console.log("isBetslipOpen", isBetslipOpen);

  return (
    <div className="bg-[#0f212e]">
      {isBetslipOpen && (
        <div className="text-lg font-bold bg-[#0f212e]">
          <Betslip onClose={handleCloseBetslip} />
        </div>
      )}
      <div>
        {isChatOpen && (
          <div className="text-lg font-bold bg-[#0f212e]">
            <ChatApp onClose={handleCloseChat} />
          </div>
        )}
      </div>
    </div>
  );
};

RightSidebar.propTypes = {
  type: PropTypes.arrayOf().isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
};

// import { useDispatch, useSelector } from "react-redux";
// import { closeBetslipModal } from "../features/auth/betSlipSlice";
// import { closeChatModal } from "../features/auth/chatSlice";
// import Betslip from "../views/rightSidebarView/betSlip/betSlip";
// import ChatApp from "../views/rightSidebarView/chat/chatInRightSidebar";
// import PropTypes from "prop-types";

// function RightSidebar({ type, closeSidebar }) {
//   return (
//     <div className="right-sidebar">
//       <button onClick={closeSidebar}>Close</button>
//       {type === "chat" && <ChatApp />}  {/* Render the Chat component */}
//       {type === "betslip" && <Betslip />}  {/* Render the BetSlip component */}
//     </div>
//   );
// }

// export default RightSidebar;


// import { useDispatch, useSelector } from "react-redux";
// import { closeBetslipModal } from "../features/auth/betSlipSlice";
// import { closeChatModal } from "../features/auth/chatSlice";
// import Betslip from "../views/rightSidebarView/betSlip/betSlip";
// import ChatApp from "../views/rightSidebarView/chat/chatInRightSidebar";
// import PropTypes from "prop-types";

// export const RightSidebar = ({ type, isDrawerOpen, handleRightSidebarToggle }) => {
//   const dispatch = useDispatch();
//   const { isBetslipOpen } = useSelector((state) => state.betslip);
//   const { isChatOpen } = useSelector((state) => state.chat);

//   const handleCloseBetslip = () => {
//     dispatch(closeBetslipModal());
//   };
  
//   const handleCloseChat = () => {
//     dispatch(closeChatModal());
//   };

//   return (
//     <div className="h-full">
//       {/* Conditionally render Betslip or Chat */}
//       {type === "betslip" && isBetslipOpen && (
//         <div className="text-lg font-bold bg-[#0f212e]">
//           <Betslip onClose={handleCloseBetslip} />
//         </div>
//       )}

//       {type === "chat" && isChatOpen && (
//         <div className="text-lg font-bold bg-[#0f212e]">
//           <ChatApp onClose={handleCloseChat} />
//         </div>
//       )}
//     </div>
//   );
// };

// RightSidebar.propTypes = {
//   type: PropTypes.string.isRequired,
//   isDrawerOpen: PropTypes.bool.isRequired,
//   handleRightSidebarToggle: PropTypes.func.isRequired,
// };
