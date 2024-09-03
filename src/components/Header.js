import React, { useState } from "react";
import stakeLogo from "../assets/img/stakeLogo.png";
import { Link, useNavigate } from "react-router-dom";
import Login from "../views/pages/login/Login";
import Register from "../views/pages/register/Register";
import ForgotPassword from "../views/pages/forgotpassword/ForgotPassword";
import VerifyTerm from "../views/pages/register/VerifyTerm";
import { useDispatch, useSelector } from "react-redux";
import { openLoginModel, openRegisterModel } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    isLoginModelOpen,
    isRegisterModelOpen,
    isForgotPasswordModelOpen,
    isVerifyTermModelOpen,
  } = useSelector((state) => state.auth);

  const handleOnLogin = () => {
    dispatch(openLoginModel());
  };

  const handleOnRegister = () => {
    dispatch(openRegisterModel());
  };

  return (
    <div>
      <div className="bg-[#1a2c38] shadow-2xl border-b border-b-black">
        <div className="flex justify-around items-center space-x-[36rem]">
          <img src={stakeLogo} className="w-16 h-16 hover:cursor-pointer" alt="Not Found" onClick={() => navigate("/casino/home")}/>
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
      {isLoginModelOpen && <Login />}
      {isRegisterModelOpen && <Register />}
      {isForgotPasswordModelOpen && <ForgotPassword />}
      {isVerifyTermModelOpen && <VerifyTerm />}
    </div>
  );
}

export default Header;
