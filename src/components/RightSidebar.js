import { useDispatch, useSelector } from "react-redux";
import { closeBetslipModal } from "../features/auth/betSlipSlice";
import { closeChatModal } from "../features/auth/chatSlice";
import Betslip from "../views/rightSidebarView/betSlip/betSlip"
import ChatApp from "../views/rightSidebarView/chat/chatInRightSidebar";

function RightSidebar({ type }) {
  const dispatch = useDispatch();
  const { isBetslipOpen } = useSelector(
    (state) => ({
      isBetslipOpen: state.betslip.isBetslipOpen,
    }),
    
  );

  const handleCloseBetslip = () => {
    dispatch(closeBetslipModal());
  };
  const handleCloseChat = () => {
    dispatch(closeChatModal());
    // handleRightSidebarToggle()
  };

  console.log("isBetslipOpen", isBetslipOpen);

  return (
    <div
      className={`h-full`}
    >
      <div className="fixed right-0 top-0 h-full w-80 text-white shadow-lg z-40">
        <div className="p-2">

          {isBetslipOpen && (
            <>
              <div className="text-lg font-bold bg-[#0f212e]">
                {console.log("*****************************************************************************************************************")}
                <Betslip onClose={handleCloseBetslip} />
              </div>
              
            </>
          )}
          {type === "chat" && (
            <>
              <div className="text-lg font-bold bg-gray-800">
                <ChatApp onClose={handleCloseChat} />
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
