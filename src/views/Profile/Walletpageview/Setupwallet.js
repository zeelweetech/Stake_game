import { Dialog } from "@mui/material";
import React from "react";

const Setupwallet = ({ closeSetupWallet }) => {
  return (
    <Dialog
      open
      maxWidth={["xs", "sm", "md", "lg"]} // This is an array of values
      fullWidth
      height="100%"
      onClose={closeSetupWallet}
      sx={{
        "& .MuiDialog-paper": {
          width: { xs: "100%", sm: "85%", md: "60%", lg: "45%" },
          height: "100%",
          bgcolor: "#1a2c38",
          borderRadius: "10px",
        },
      }}
    >
      {/* <DialogTitle sx={{ backgroundColor: "#1a2c38", color: "#b1bad3" }}> */}

      <div className="flex justify-between items-center w-full p-4">
        <h1 className="text-3xl xl:text-3xl lg:text-3xl md:text-2xlflex font-extrabold italic font-sans transition active:scale-[0.98] select-none items-center space-x-2 text-white">
          Listor
        </h1>
        <span
          className="rounded-full hover:bg-gray-950 p-2 text-xs text-white"
          onClick={closeSetupWallet}
        >
          Exit
        </span>
      </div>
      <div className="text-[#b1bad3] bg-[#0f212e] text-base px-4 pb-4 flex flex-col justify-between h-full">
        <div className="h-full bg-[#0f212e] w-full">
          <div className="mt-[2.5rem]">
            <h1 className="text-xl font-bold text-white  cursor-default flex space-y-2">
              Confirm your email
            </h1>
            <div className="flex flex-col gap-4">
              <p className="text-[#B1BAD3] cursor-default text-sm">
                Please check your email for the verification code we sent and
                enter it in the form below to confirm your email address.
              </p>

              <form className="w-full h-full flex flex-col justify-between gap-4">
                <div>
                  <label for="email" className="block text-slate-300 pb-1">
                    Email <span className="text-[#EF4444]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    disabled
                    className="w-full bg-[#0f212e] border-2 border-[#2f4553] hover:border-[#557086] cursor-text rounded p-[0.4375rem] focus:hover:border-[#557086] text-white"
                  />
                </div>

                <div>
                  <label for="code" className="block text-slate-300 pb-1">
                    Email Code <span className="text-[#EF4444]">*</span>
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="code"
                      disabled
                      className="w-full bg-[#0f212e] border-2 border-[#2f4553] hover:border-[#557086] cursor-text rounded-l p-[0.4375rem] focus:hover:border-[#557086] text-white"
                    />
                    <button
                      type="button"
                      className="bg-[#2f4553] border-[#2f4553] rounded-r py-[0.8125rem] px-4 text-white hover:bg-[#557086]"
                    >
                      <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 64 64"
                        fill="currentColor"
                      >
                        <path d="M35.42 7.73V0H19.01v7.73h16.41Zm23.146 25.94h-27.01V64h27.01V33.67ZM49.264 7.699h-9.209v4.668h-25.68V7.7H6v48.57h19.376V27.485h23.888V7.699Z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="text-right text-sm font-semibold">
                  <button
                    type="button"
                    className="text-white px-5 py-[0.9375rem]"
                  >
                    Resend email
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <button
          className="bg-[#1475e1] text-white font-semibold py-2 rounded-md w-full"
          onClick={closeSetupWallet}
          sx={{
            backgroundColor: "#E9113C",
            color: "white",
            height: "50px",
            "&:hover": { backgroundColor: "#ba0e30" },
          }}
        >
          <div className="font-semibold">Log out</div>
        </button>
      </div>

      {/* </DialogTitle> */}
    </Dialog>
  );
};

export default Setupwallet;
