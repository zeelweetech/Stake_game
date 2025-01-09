import { useDispatch, useSelector } from "react-redux";
import { closeBetslipModal } from "../features/auth/betSlipSlice";
import { closeChatModal } from "../features/auth/chatSlice";
import Betslip from "../views/rightSidebarView/betSlip/betSlip";
import ChatApp from "../views/rightSidebarView/chat/chatInRightSidebar";
import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const RightSidebar = ({ isDrawerOpen, handleRightSidebarToggle }) => {
  const dispatch = useDispatch();

  // Redux state for Betslip and Chat
  const { isBetslipOpen } = useSelector((state) => state.betslip);
  const { isChatOpen } = useSelector((state) => state.chat);

  // Close Betslip Modal and Right Sidebar
  const handleCloseBetslip = () => {
    dispatch(closeBetslipModal());
    handleRightSidebarToggle();
  };

  // Close Chat Modal and Right Sidebar
  const handleCloseChat = () => {
    dispatch(closeChatModal());
    handleRightSidebarToggle();
  };

  return (
    <div className="h-full w-full">
      {/* Betslip Section */}
      {isDrawerOpen && isBetslipOpen &&  (
        <div className="text-lg font-bold bg-[#0f212e] h-screen">
          <Betslip onClose={handleCloseBetslip} />
          {/* {console.log("lllllllllll",isBetslipOpen)} */}
        </div>
      )}

      {/* Chat Section */}
      {isDrawerOpen && isChatOpen &&  (
        <div className="h-full md:h-full lg:h-full xl:h-full">
          <ChatApp onClose={handleCloseChat} />
        </div>
      )}
    </div>
  );
};

RightSidebar.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  handleRightSidebarToggle: PropTypes.func.isRequired,
};



