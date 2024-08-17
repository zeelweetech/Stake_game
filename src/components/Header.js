import React from "react";
import stakeLogo from "../assets/img/stakeLogo.png";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Header({ openMenubar }) {
  const [open, setOpen] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className={`fixed top-0 ${
        openMenubar ? "left-64" : "left-14"
      } transition-all duration-[1000ms] right-0 bg-white z-50`}
    >
      <div className="bg-[#1a2c38] shadow-2xl border-b border-b-black">
        <div className="flex justify-around items-center space-x-[42rem]">
          <img src={stakeLogo} className="w-16 h-16" alt="Not Found" />
          <div className="flex items-center space-x-3">
            <Link onClick={handleClickOpen} className="text-white">
              Sign In
            </Link>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <div className="bg-[#1a2c38]">
                <div className="relative">
                  <DialogTitle
                    id="alert-dialog-title"
                    className="text-center w-full text-white"
                  >
                    Sign In
                  </DialogTitle>
                  <CloseIcon
                    onClick={handleClose}
                    className="absolute top-3 right-3 cursor-pointer text-white"
                  />
                </div>
                <DialogContent>
                  <form>
                    <div className="mb-4">
                      <label
                        className="flex text-[#b1bad3] text-sm mb-1"
                        htmlFor="username"
                      >
                        Email or Username<p className="text-red-700 ml-1">*</p>
                      </label>
                      <input
                        className="border rounded w-[28rem] py-2 px-3 bg-[#0f212e] text-[#b1bad3] focus:outline-[#b1bad3]"
                        id="username"
                        type="text"
                        placeholder="Username"
                      />
                    </div>
                    <div className="mb-4 relative">
                      <label
                        className="flex text-[#b1bad3] text-sm mb-1"
                        htmlFor="password"
                      >
                        Password<p className="text-red-700 ml-1">*</p>
                      </label>
                      <input
                        className="border rounded w-full py-2 px-3 bg-[#0f212e] text-[#b1bad3] focus:outline-[#b1bad3] focus:outline-"
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                      />
                      <div
                        className="absolute inset-y-0 right-0 mt-7 pr-3 flex items-center cursor-pointer text-[#b1bad3]"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </div>
                    </div>
                    <button className="bg-[#1fff20] py-3 rounded-md font-semibold w-full">
                      Sign In 
                    </button>
                  </form>
                </DialogContent>
                <Link className="flex justify-center my-2 text-white">
                  Forgot Password
                </Link>
                <p className="text-center mb-5 text-[#b1bad3]">
                  Don’t have an account? <Link className="text-white">Register an Account</Link>
                </p>
              </div>
            </Dialog>
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
