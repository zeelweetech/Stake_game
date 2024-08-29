import React, { useState } from "react";
import CrashGameSidebar from "./CrashGameSidebar";
import CrashGameContent from "./CrashGameContent";
import CrashGameFooter from "./CrashGameFooter";
import Login from "../../../pages/login/Login";
import Register from "../../../pages/register/Register";
import ForgotPassword from "../../../pages/forgotpassword/ForgotPassword";
import VerifyTerm from "../../../pages/register/VerifyTerm";

function CrashGame() {
  return (
    <div className="bg-[#1a2c38] py-12 text-white flex justify-center items-center w-full">
      <div>
        <div className="flex-row bg-center text-white flex grow w-full min-w-80 h-[41.6rem] border-b-3">
          <div>
            <CrashGameSidebar />
          </div>
          <div>
            <CrashGameContent />
          </div>
        </div>
        <div>
          <hr className="border-2 border-[#213743]"></hr>
          <CrashGameFooter />
        </div>
      </div>
    </div>
  );
}

export default CrashGame;
