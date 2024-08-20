import React from "react";
import stakeLogo from "../assets/img/stakeLogo.png";
import { Link } from "react-router-dom";
import Login from "../views/pages/login/Login";
import Register from "../views/pages/register/Register";

function Header({ openMenubar }) {
  const [openPage, setOpenPage] = React.useState(null);
  const handleClickOpen = () => {
    setOpenPage("login");
  };

  const handleRegisterClickOpen = () => {
    setOpenPage("register");
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
            <Link onClick={handleClickOpen} className="text-white">
              Sign In
            </Link>
            {/* <Login setOpenPage={setOpenPage} openPage={openPage} /> */}
            <button
              onClick={handleRegisterClickOpen}
              className="bg-[#1475e1] hover:bg-[#396ca8] text-white rounded-sm px-5 py-2.5"
            >
              Register
            </button>
            {/* <Register setOpenPage={setOpenPage} openPage={openPage} /> */}
          </div>
        </div>
      </div>
      {openPage === "login" && <Login setOpenPage={setOpenPage} openPage={openPage} />}
      {openPage === "register" && <Register setOpenPage={setOpenPage} openPage={openPage} />}
    </div>
  );
}

export default Header;
