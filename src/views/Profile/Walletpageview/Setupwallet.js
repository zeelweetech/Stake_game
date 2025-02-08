import { Dialog } from "@mui/material";
import React, { useState } from "react";

const Setupwallet = ({ closeSetupWallet }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (input.length !== 6) {
      setError("emailCode must be exactly 6 characters");
    } else {
      setError("");
    }
  };

  return (
    <Dialog
      open
      fullWidth
      onClose={closeSetupWallet}
      sx={{
        "& .MuiDialog-paper": {
          width: { xs: "100%", sm: "85%", md: "60%", lg: "49%" },
          height: "100%",
          bgcolor: "#1a2c38",
          borderRadius: "8px",
        },
      }}
      >
      <div className="flex justify-between items-center w-full px-4 h-[4.106rem] ">
        <h1 className="text-3xl xl:text-3xl lg:text-3xl md:text-2xlflex font-extrabold italic font-sans transition active:scale-[0.98] select-none items-center space-x-2 text-white">
          Listor
        </h1>
        <span
          className="rounded-full hover:bg-[#071824] font-semibold p-3 text-xs text-white cursor-pointer"
          onClick={closeSetupWallet}
        >
          Exit
        </span>
      </div>
      <div className="text-[#b1bad3] bg-[#0f212e] text-base px-4 pb-4 flex flex-col justify-between h-full">
        <div className="h-full bg-[#0f212e] w-full">
          <div
            className="fixed top-20 left-4 bg-[#213743] text-white rounded shadow-lg h-20 flex items-center md:w-80 max-w-xs group"
          >
            <div className="bg-[#1A2C38] text-[#e9113c] p-4 h-full rounded-l md:w-16 w-14 flex justify-center items-center">
              <svg className="w-5 h-5" viewBox="0 0 64 64" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M32 64c17.672 0 32-14.328 32-32S49.672 0 32 0 0 14.328 0 32s14.328 32 32 32Zm-5.333-51.68h10.666v20.987H26.667V12.32ZM32 39.44a6.134 6.134 0 1 1-6.133 6.133v-.026a6.106 6.106 0 0 1 6.106-6.107h.03H32Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="p-4 flex items-center h-full w-full">
              <div className="flex gap-y-1 flex-col">
                <p className="font-semibold">Error</p>
                <p className="text-sm text-[#B1BAD3] cursor-default">Request limit reached.</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-white flex justify-center items-center p-4 h-full w-16">
              <svg className="w-4 h-4" viewBox="0 0 64 64" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="m54.827 16.187-7.014-7.014L32 24.987 16.187 9.173l-7.014 7.014L24.987 32 9.173 47.813l7.014 7.014L32 39.013l15.813 15.814 7.014-7.014L39.013 32l15.814-15.813Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Progress Bar with Hover to Pause */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#557086] rounded-bl animate-[countdown_5s_linear_forwards] group-hover:[animation-play-state:paused]"
            ></div>

            {/* Tailwind Keyframes */}
            <style>
              {`
          @keyframes countdown {
            from { width: 100%; }
            to { width: 0%; }
          } 
        `}
            </style>
          </div>


          <div className="mt-[2.5rem]">
            <h1 className="text-xl font-semibold text-white cursor-default flex space-y-2">
              Confirm your email
            </h1>
            <div className="flex flex-col gap-5">
              <p className="text-[#B1BAD3] cursor-default text-sm">
                Please check your email for the verification code we sent and
                enter it in the form below to confirm your email address.
              </p>

              <form className="w-full h-full flex flex-col justify-between gap-4">
                <div>
                  <label
                    for="email"
                    className="block text-[#B1BAD3] pb-1 font-semibold text-sm"
                  >
                    Email <span className="text-[#EF4444]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    Disabled
                    className="w-full bg-[#0f212e] border-2 border-[#2f4553] hover:border-[#557086] cursor-text rounded p-[0.4375rem] focus:hover:border-[#557086] text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="code"
                    className="block text-[#B1BAD3] pb-1 font-semibold text-sm"
                  >
                    Email Code <span className="text-[#EF4444]">*</span>
                  </label>
                  <div className="flex flex-col group">
                    <div className="flex flex-row">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className={`w-full bg-[#0f212e] border-2 border-[#2f4553] group-hover:border-[#557086] focus:border-[#557086] cursor-text rounded-l p-[0.4375rem] focus:group-hover:border-[#557086] text-white focus:outline-none ${error
                          ? "border-2 border-[#ed4163] focus:border-[#ed4163]"
                          : ""
                          }`}
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
                    {error && (
                      <div className="text-[#ed4163] text-xs pt-2 font-semibold inline-flex gap-2">
                        <svg
                          className="h-3 w-3 mt-1"
                          viewBox="0 0 64 64"
                          fill="currentColor"
                        >
                          <path d="M32 64c17.672 0 32-14.328 32-32S49.672 0 32 0 0 14.328 0 32s14.328 32 32 32Zm-5.333-51.68h10.666v20.987H26.667V12.32ZM32 39.44a6.134 6.134 0 1 1-6.133 6.133v-.026a6.106 6.106 0 0 1 6.106-6.107h.03H32Z" />
                        </svg>
                        {error}
                      </div>
                    )}
                  </div>
                </div>
              </form>
              <div className="text-right font-semibold">
                <button
                  type="button"
                  className="text-white text-xs px-5 py-[0.9375rem]"
                >
                  Resend email
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className={`${input.length === 6 ? "bg-[#1475E1]" : "bg-[#105eb4] opacity-55"
            } bg-opacity-100 text-white font-semibold py-2 rounded w-full cursor-default`}
        >
          <div className="font-semibold text-[#b1bad3]">Submit</div>
        </button>
      </div>
    </Dialog>
  );
};

export default Setupwallet;
