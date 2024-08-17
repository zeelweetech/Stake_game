import React from "react";
import stakeLogo from "../assets/img/stakeLogo.png";
import { Link } from "react-router-dom";
import Login from "../views/pages/login/Login";

function Header({ openMenubar }) {
  const [openSignPage, setOpenSignPage] = React.useState(false);
  const handleClickOpen = () => {
    setOpenSignPage(true);
  };

  return (
    <div
      className={`fixed top-0 ${
        openMenubar ? "left-64" : "left-14"
      } right-0 bg-white z-50`}
    >
      <div className="bg-[#1a2c38] shadow-2xl border-b border-b-black">
        <div className="flex justify-around items-center space-x-[42rem]">
          <img src={stakeLogo} className="w-16 h-16" alt="Not Found" />
          <div className="flex items-center space-x-3">
            <Link onClick={handleClickOpen} className="text-white">
              Sign In
            </Link>
            <Login
              setOpenSignPage={setOpenSignPage}
              openSignPage={openSignPage}
            />
            <button className="bg-[#1475e1] hover:bg-[#396ca8] text-white rounded-sm px-5 py-2.5">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
