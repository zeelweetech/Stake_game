import React, { useState } from "react";
import stakeLogo from "../assets/img/stakeLogo.png";
import { Link } from "react-router-dom";
import Login from "../views/pages/login/Login";
import Register from "../views/pages/register/Register";
import ForgotPassword from "../views/pages/forgotpassword/ForgotPassword";
import VerifyTerm from "../views/pages/register/VerifyTerm";

function Header({ openMenubar }) {
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
    <div>
      <div className="bg-[#1a2c38] shadow-2xl border-b border-b-black">
        <div className="flex justify-around items-center space-x-[36rem]">
          <img src={stakeLogo} className="w-16 h-16" alt="Not Found" />
          <div className="flex items-center space-x-3">
            <Link onClick={handleOnLogin} className="text-white">
              Sign In
            </Link>
            <button
              onClick={handleOnRegister}
              className="bg-[#1475e1] hover:bg-[#396ca8] text-white rounded-sm px-5 py-2.5"
            >
              Register
            </button>
          </div>
        </div>
      </div>
      {loginModel && (
        <Login
          setLoginModel={setLoginModel}
          loginModel={loginModel}
          handleOnForgotPassword={handleOnForgotPassword}
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

export default Header;
