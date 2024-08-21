import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ErrorIcon from "@mui/icons-material/Error";
import { userLogin } from "../../../services/LoginServices";

function Login({ setLoginModel, loginModel, handleOnForgotPassword }) {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({});
  const [error, setError] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setError({ ...error, [name]: "" });
  };

  const Validation = () => {
    let errors = {};
    const EmailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!values?.email) {
      errors.email = "Email require";
    } else if (!EmailRegEx?.test(values?.email)) {
      errors.email = "Invalid email format";
    }

    if (!values?.password) {
      errors.password = "Please enter your password";
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Validation()) {
      const body = {
        email: values?.email,
        password: values?.password,
      };
      await userLogin({ body: body })
        .then((response) => {
          console.log("response", response);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  const handleClose = () => {
    setLoginModel(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Dialog
        open={loginModel}
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
                  Email<p className="text-red-700 ml-1">*</p>
                </label>
                <input
                  className={`border rounded w-[28rem] py-2 px-3 bg-[#0f212e] text-[#b1bad3] focus:outline-[#b1bad3] ${
                    error?.email ? "border-[#ed4163]" : ""
                  }`}
                  name="email"
                  value={values?.email}
                  onChange={(e) => handleOnChange(e)}
                  type="text"
                />
                {error?.email && (
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
                    error?.password ? "border-[#ed4163]" : ""
                  }`}
                  name="password"
                  value={values?.password}
                  onChange={(e) => handleOnChange(e)}
                  type={showPassword ? "text" : "password"}
                />
                <div
                  className="absolute inset-y-0 right-0 mt-7 pr-3 flex items-center cursor-pointer text-[#b1bad3]"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </div>
              </div>
              {error?.password && (
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
            onClick={(e) => handleOnForgotPassword(e)}
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
    </div>
  );
}

export default Login;
