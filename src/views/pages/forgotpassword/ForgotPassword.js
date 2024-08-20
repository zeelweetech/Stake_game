import React from "react";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import ErrorIcon from "@mui/icons-material/Error";

function ForgotPassword({
  forgotPassword,
  setForgotPassword,
  error,
  handleOnChange,
  handleSubmit,
  value,
}) {
  const handleForgotPasswordClose = () => {
    setForgotPassword(false);
  };

  return (
    <Dialog
      open={forgotPassword}
      onClose={handleForgotPasswordClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className="bg-[#1a2c38]">
        <div className="flex justify-between text-white">
          <DialogContent className="flex items-center space-x-2">
            <SettingsIcon className="text-[#b1bad3]" />
            <p>Forgot Password</p>
          </DialogContent>
          <IconButton onClick={handleForgotPasswordClose}>
            <CloseIcon className="text-white" />
          </IconButton>
        </div>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="flex text-[#b1bad3] text-sm mb-1"
                htmlFor="username"
              >
                Email<p className="text-red-700 ml-1">*</p>
              </label>
              <input
                className={`border rounded w-[28rem] py-2 px-3 bg-[#0f212e] text-[#b1bad3] focus:outline-[#b1bad3] ${error.email ? "border-[#ed4163]" : ""}`}
                name="Forgotemail"
                value={value.Forgotemail}
                onChange={handleOnChange}
                type="email"
              />
              {error.Forgotemail && (
                <div className="flex items-center space-x-1 mt-2 text-[#f2708a]">
                  <ErrorIcon fontSize="10" />
                  <p className="text-xs">{error.Forgotemail}</p>
                </div>
              )}
            </div>
            <button type="submit" className="bg-[#1fff20] py-3 rounded-md font-semibold w-full">
              Recover Password
            </button>
          </form>
        </DialogContent>
      </div>
    </Dialog>
  );
}

export default ForgotPassword;
