import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBetslipOpen: false,
};

const betSlice = createSlice({
  name: "betslip",
  initialState,
  reducers: {
    openBetslipModal: (state) => {
      state.isBetslipOpen = true;
    },
    closeBetslipModal: (state) => {
      state.isBetslipOpen = false;
    },
  },
});

export const { openBetslipModal, closeBetslipModal } = betSlice.actions;
export default betSlice.reducer;

{/* <div className="relative flex items-center">
              <button onClick={toggleSidebar} className="flex items-center">
                <IoIosChatboxes color="white" size={18} />
              </button>
              {openBetslip && (
                <div
                  onClick={handleBetslipClick}
                  className="flex flex-col absolute top-full right-0 left-3 -translate-x-1/2 mt-2 bg-white text-black text-sm font-medium rounded-sm px-4 py-2 shadow-sm z-10 w-max max-w-xs text-center"
                >
                  <button
                    className="flex items-center space-x-4 py-2"
                  >
                    <MdOutlineEventNote size={20} color="#0f212e" />
                    <p className="text-base text-[#0f212e]">Bet Slip</p>
                  </button>
                  <button
                  // onClick={handleChatClick}
                    className="flex items-center space-x-4 py-2"
                  >
                    <BsChatDotsFill size={20} color="#0f212e" />
                    <p className="text-base text-[#0f212e]">Chat</p>
                  </button>

                  <div className="tooltip-arrow w-3 h-3 bg-white rotate-45 absolute top-[-6px] left-1/2 transform -translate-x-1/2 mt-1"></div>
                </div>
              )}
            </div>
              {isSidebarOpen && <RightSidebar />} */}