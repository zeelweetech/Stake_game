import React, { useState } from "react";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import ErrorIcon from "@mui/icons-material/Error";
import { useDispatch, useSelector } from "react-redux";
import { closeForgotPasswordModel } from "../../../features/auth/authSlice";
import { toast } from "react-hot-toast"; // Optional for success/error messages
import { forgotPassword } from "../../../services/Users";

function ForgotPassword() {
  const dispatch = useDispatch();
  const { isForgotPasswordModelOpen } = useSelector((state) => state.auth);
  const [values, setValues] = useState({ Forgotemail: "" });
  const [error, setError] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setError({ ...error, [name]: "" });
  };

  const Validation = () => {
    let errors = {};

    if (!values.Forgotemail) {
      errors.Forgotemail = "This field is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.Forgotemail)) {
      errors.Forgotemail = "Please enter a valid email address";
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Validation()) {
      try {
        const response = await forgotPassword({ body: { email: values.Forgotemail } });
        console.log("API Response:", response);

        toast.success("Password recovery instructions sent to your email.");
        dispatch(closeForgotPasswordModel()); // Close the dialog on success
      } catch (error) {
        console.error("API Error:", error);
        toast.error("Failed to send password recovery instructions.");
      }
    } else {
      console.log("Validation failed. Errors:", error);
    }
  };

  const handleForgotPasswordClose = () => {
    dispatch(closeForgotPasswordModel());
  };

  return (
    <Dialog
      open={isForgotPasswordModelOpen}
      onClose={handleForgotPasswordClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        "& .MuiPaper-root": { borderRadius: "6px", backgroundColor: "#1a2c38" },
      }}
    >
      <div>
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
            <div className="mb-4 md:mb-4">
              <label
                className="flex text-[#b1bad3] text-sm mb-1"
                htmlFor="Forgotemail"
              >
                Email<p className="text-red-700 ml-1">*</p>
              </label>
              <input
                className={`border rounded w-[28rem] py-2 px-3 max-sm:w-64 bg-[#0f212e] text-[#b1bad3] focus:outline-[#b1bad3] ${
                  error.Forgotemail ? "border-[#ed4163]" : ""
                }`}
                name="Forgotemail"
                value={values.Forgotemail}
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
            <button
              type="submit"
              className="bg-[#1fff20] py-3 rounded-md font-semibold w-full"
            >
              Recover Password
            </button>
          </form>
        </DialogContent>
      </div>
    </Dialog>
  );
}

export default ForgotPassword;
