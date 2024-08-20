import React, { useState } from "react";
import stakeLogo from "../assets/img/stakeLogo.png";
import { Link } from "react-router-dom";
import Login from "../views/pages/login/Login";
import Register from "../views/pages/register/Register";
import ForgotPassword from "../views/pages/forgotpassword/ForgotPassword";

function Header({ openMenubar }) {
  const [openPage, setOpenPage] = useState(null);
  const [loginModel, setLoginModel] = useState(false);
  const [forgotPasswordModel, setForgotPasswordModel] = useState(false);

  const handleOnLogin = () => {
    setLoginModel(true);
  };

  const handleOnRegister = () => {
    setOpenPage("register");
  };

  const handleOnForgotPassword = (e) => {
    e.preventDefault();
    setLoginModel(false);
    setForgotPasswordModel(true);
  };

  return (
    <div
      className={`fixed top-0 right-0 bg-white z-50 
      ${
        openMenubar
          ? "w-[calc(100%-14%)] md:w-[calc(100%-19%)] lg:w-[calc(100%-15%)]"
          : "w-[calc(100%-3.5rem)]"
      }
      transition-width duration-300 ease-in-out`}
    >
      <div className="bg-[#1a2c38] shadow-2xl border-b border-b-black">
        <div className="flex justify-between items-center md:px-4 lg:px-4 xl:px-44">
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
      {openPage === "register" && (
        <Register setOpenPage={setOpenPage} openPage={openPage} />
      )}
      {forgotPasswordModel && (
        <ForgotPassword
          setForgotPasswordModel={setForgotPasswordModel}
          forgotPasswordModel={forgotPasswordModel}
        />
      )}
    </div>
  );
}

export default Header;
