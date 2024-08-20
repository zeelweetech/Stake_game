import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ForgotPassword from "../forgotpassword/ForgotPassword";
import ErrorIcon from "@mui/icons-material/Error";

function Login({ setOpenPage, openPage }) {
  const [forgotPassword, setForgotPassword] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [value, setValue] = React.useState({});
  const [error, setError] = React.useState({});

  const handleOnChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };

  const Validation = () => {
    let errors = {};

    if (!value.email) {
      errors.email = "Email Require";
    } else if (value.email?.length < 3) {
      errors.email = "Minimum character length is 3";
    }

    if (!value.password) {
      errors.password = "please enter your password";
    } else if (value.password?.length < 6) {
      errors.password = "password must be at least 6 characters";
    }

    if (!value.Forgotemail) {
      errors.Forgotemail = "This field is required";
    } else if (value.Forgotemail?.length < 3) {
      errors.Forgotemail = "This contains invalid email characters";
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    // console.log("event" , e);
    e.preventDefault();
    if (Validation()) {
      console.log("data", value);
    } else {
      console.log("validation fails, Error", error);
    }
  };

  const handleClose = () => {
    setOpenPage(false);
  };

  const handleForgotPasswordClick = () => {
    // setOpenPage(false);
    setForgotPassword(true);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Dialog
        open={openPage}
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
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="flex text-[#b1bad3] text-sm mb-1"
                  htmlFor="username"
                >
                  Email or Username<p className="text-red-700 ml-1">*</p>
                </label>
                <input
                  className={`border rounded w-[28rem] py-2 px-3 bg-[#0f212e] text-[#b1bad3] focus:outline-[#b1bad3] ${
                    error.email ? "border-[#ed4163]" : ""
                  }`}
                  name="email"
                  value={value.email}
                  onChange={handleOnChange}
                  type="text"
                />
                {error.email && (
                  <div className="flex items-center space-x-1 mt-2 text-[#f2708a]">
                    <ErrorIcon fontSize="10" />
                    <p className="text-xs">{error.email}</p>
                  </div>
                )}
              </div>
              <div className="mb-4 relative">
                <label
                  className="flex text-[#b1bad3] text-sm mb-1"
                  htmlFor="password"
                >
                  Password<p className="text-red-700 ml-1">*</p>
                </label>
                <input
                  className={`border rounded w-full py-2 px-3 bg-[#0f212e] text-[#b1bad3] focus:outline-[#b1bad3] ${
                    error.email ? "border-[#ed4163]" : ""
                  }`}
                  name="password"
                  value={value.password}
                  onChange={handleOnChange}
                  type={showPassword ? "text" : "password"}
                />
                <div
                  className="absolute inset-y-0 right-0 mt-7 pr-3 flex items-center cursor-pointer text-[#b1bad3]"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </div>
              </div>
              {error.password && (
                <div className="flex items-center space-x-1 -mt-2.5 text-[#f2708a]">
                  <ErrorIcon fontSize="10" />
                  <p className="text-xs">{error.password}</p>
                </div>
              )}
              <button
                type="submit"
                className="bg-[#1fff20] py-3 mt-6 rounded-md font-semibold w-full"
              >
                Sign In
              </button>
            </form>
          </DialogContent>
          <Link
            onClick={handleForgotPasswordClick}
            className="flex justify-center my-2 text-white"
          >
            Forgot Password
          </Link>
          <p className="text-center mb-5 text-[#b1bad3]">
            Don’t have an account?
            <Link className="text-white"> Register an Account</Link>
          </p>
        </div>
      </Dialog>
      {forgotPassword && (  // This condition is already correct
        <ForgotPassword
          setForgotPassword={setForgotPassword}
          forgotPassword={forgotPassword}
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          error={error}
          value={value}
        />
      )}
    </div>
  );
}

export default Login;
