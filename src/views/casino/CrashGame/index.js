import React, { useState } from "react";
import CrashGameSidebar from "./CrashGameSidebar";
import CrashGameContent from "./CrashGameContent";
import CrashGameFooter from "./CrashGameFooter";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import ForgotPassword from "../../pages/forgotpassword/ForgotPassword";
import VerifyTerm from "../../pages/register/VerifyTerm";

function CrashGame() {
  const [registerModel, setRagisterModel] = useState(false);
  const [loginModel, setLoginModel] = useState(false);
  const [forgotPasswordModel, setForgotPasswordModel] = useState(false);
  const [verifyTermModel, setVerifyTermModel] = useState(false);

  const handleOnLogin = () => {
    setLoginModel(true);
  };

  const handleOnRegister = () => {
    setRagisterModel(true);
  };

  const handleOnForgotPassword = (e) => {
    e.preventDefault();
    setLoginModel(false);
    setForgotPasswordModel(true);
  };
  return (
    <div className="bg-[#1a2c38] py-12 text-white flex justify-center items-center w-full">
      <div>
        <div className="flex-row bg-center text-white flex grow w-full min-w-80 h-[41.6rem] border-b-3">
          <div>
            <CrashGameSidebar handleOnRegister={handleOnRegister} />
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
      {loginModel && (
        <Login
          setLoginModel={setLoginModel}
          loginModel={loginModel}
          handleOnForgotPassword={handleOnForgotPassword}
          setRagisterModel={setRagisterModel}
        />
      )}
      {registerModel && (
        <Register
          setRagisterModel={setRagisterModel}
          registerModel={registerModel}
          setLoginModel={setLoginModel}
          verifyTermModel={verifyTermModel}
          setVerifyTermModel={setVerifyTermModel}
        />
      )}
      {forgotPasswordModel && (
        <ForgotPassword
          setForgotPasswordModel={setForgotPasswordModel}
          forgotPasswordModel={forgotPasswordModel}
        />
      )}
      {verifyTermModel && (
        <VerifyTerm
          verifyTermModel={verifyTermModel}
          setVerifyTermModel={setVerifyTermModel}
        />
      )}
    </div>
  );
}

export default CrashGame;
