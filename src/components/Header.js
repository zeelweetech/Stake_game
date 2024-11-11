import React from "react";
import stakeLogo from "../assets/img/stakeLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openLoginModel, openRegisterModel } from "../features/auth/authSlice";
import Login from "../views/pages/login/Login";
import Register from "../views/pages/register/Register";
import ForgotPassword from "../views/pages/forgotpassword/ForgotPassword";
import VerifyTerm from "../views/pages/register/VerifyTerm";

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
      <div className="bg-[#1a2c38] drop-shadow-2xl py-[0.30rem]">
        <div className="flex justify-between items-center px-4 lg:px-20 h-full">
          {/* <img
            src={stakeLogo}
            className="w-12 h-12 sm:w-16 sm:h-16 cursor-pointer"
            alt="Stake Logo"
            onClick={() => navigate("/casino/home")}
          /> */}
          <span
            className="text-white text-5xl font-extrabold italic font-sans cursor-pointer"
            onClick={() => navigate("/casino/home")}
          >
            Listor
          </span>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <Link
              onClick={handleOnLogin}
              className="text-white text-sm sm:text-lg hover:underline"
            >
              Sign In
            </Link>
            <button
              onClick={handleOnRegister}
              className="bg-[#1475e1] hover:bg-[#396ca8] text-white rounded-sm px-4 py-2.5 sm:px-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
