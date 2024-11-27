import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import facebook from "../../../assets/img/facebook.png";
import google from "../../../assets/img/google.png";
import { Link } from "react-router-dom";
import ErrorIcon from "@mui/icons-material/Error";
import { userLogin, userRegister } from "../../../services/LoginServices";
import toast from "react-hot-toast";
import {
  handleFacebookLogin,
  handleGoogleLogin,
} from "../../../services/FirebaseServices";
import { useDispatch, useSelector } from "react-redux";
import {
  closeRegisterModel,
  openLoginModel,
} from "../../../features/auth/authSlice";
import { setCookie } from "../../../resources/utility";

function Register() {
  const dispatch = useDispatch();
  const { isRegisterModelOpen } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [codeShow, setCodeShow] = useState(false);
  const [passwordDetail, setPasswordDetail] = useState();
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
    const PasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!values?.email) {
      errors.email = "Email require";
    } else if (!EmailRegEx?.test(values?.email)) {
      errors.email = "Invalid email format";
    }

    if (!values?.Username) {
      errors.Username = "Please enter your username";
    } else if (values?.Username?.length < 3) {
      errors.Username = "Username must be at least 3 characters";
    } else if (values?.Username?.length > 14) {
      errors.Username = "Username must be at least 14 characters";
    }

    if (!values?.password) {
      errors.password = "Please enter your password";
    } else if (!PasswordRegex.test(values.password)) {
      errors.password = "Invalid password format";
    }

    if (!values?.day) {
      errors.day = "Please enter your date of birth";
    } else if (values?.day < 1) {
      errors.day = "Please enter your date of birth";
    } else if (values?.day > 31) {
      errors.day = "Please enter your date of birth";
    }

    if (!values?.month) {
      errors.month = "Please select your date of birth";
    }

    if (!values?.year) {
      errors.year = "Please enter your date of birth";
    } else if (values?.year < 1950) {
      errors.year = "Please enter your date of birth";
    } else if (values?.year > 2006) {
      errors.year = "You need to be at least 18 years old";
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Validation()) {
      const body = {
        email: values?.email,
        userName: values?.Username,
        password: values?.password,
        DOB: `${values?.day}-${values?.month}-${values?.year}`,
        mobileNumber: values?.mobileNumber,
        country: values?.countrycode,
        referFrom: values?.code,
      };
      console.log("body", body);

      // setVerifyTermModel(true);

      await userRegister({ body: body })
        .then((response) => {
          console.log("response", response);
          toast.success(response?.message);
          // setCookie("token", response?.token, 24);
          // localStorage.setItem("token", response?.token);
          // toast.success(response?.message);
          // dispatch(closeRegisterModel());
          // window.location.reload();
          const body = {
            email: values?.email,
            password: values?.password,
          };
          userLogin({ body: body })
            .then((response) => {
              console.log("response", response);
              setCookie("token", response?.token, 24);
              localStorage.setItem("token", response?.token);
              // toast.success(response?.message);
              dispatch(closeRegisterModel());
              window.location.reload();
            })
            .catch((error) => {
              console.log("error", error);
            });
        })
        .catch((error) => {
          console.log("error", error);
          toast.error(error?.response?.data?.error);
        });
    }
  };

  const handleClose = () => {
    dispatch(closeRegisterModel());
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordDetails = () => {
    setPasswordDetail(!passwordDetail);
  };

  return (
    <div>
      <Dialog
        open={isRegisterModelOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "6px",
            backgroundColor: "#1a2c38",
          },
        }}
      >
        <div>
          <div className="relative">
            <DialogTitle
              id="alert-dialog-title"
              className="text-center w-full text-white"
            >
              Create an Account
            </DialogTitle>
            <CloseIcon
              onClick={handleClose}
              className="absolute top-3 right-3 cursor-pointer text-white"
            />
          </div>
          <p className="text-[#b1bad3] text-center font-semibold">
            Step 1/2: Fill out your details
          </p>
          <DialogContent>
            <form>
              <div className="mb-4">
                <label
                  className="flex text-[#b1bad3] font-semibold text-sm mb-1"
                  htmlFor="username"
                >
                  Email<p className="text-red-700  ml-1">*</p>
                </label>
                <input
                  className={`border rounded w-[28rem] py-2 px-3 max-sm:w-64 bg-[#0f212e] hover:border-[#7f8798] text-[#b1bad3] focus:outline-[#b1bad3] ${error?.email ? "border-[#ed4163]" : "border-gray-600"
                    }`}
                  name="email"
                  value={values?.email}
                  onChange={(e) => handleOnChange(e)}
                  type="text"
                />
                {error.email && (
                  <div className="flex items-center space-x-1 mt-2 text-[#f2708a]">
                    <ErrorIcon fontSize="10" />
                    <p className="text-xs">{error.email}</p>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="flex text-[#b1bad3] font-semibold text-sm mb-1"
                  htmlFor="username"
                >
                  Username<p className="text-red-700 ml-1">*</p>
                </label>
                <input
                  className={`border rounded w-[28rem] py-2 px-3 max-sm:w-64 bg-[#0f212e] hover:border-[#7f8798] text-[#b1bad3] focus:outline-[#b1bad3] ${error?.Username ? "border-[#ed4163]" : "border-gray-600"
                    }`}
                  name="Username"
                  value={values?.Username}
                  onChange={(e) => handleOnChange(e)}
                  type="text"
                />
                {error.Username && (
                  <div className="flex items-center space-x-1 mt-2 text-[#f2708a]">
                    <ErrorIcon fontSize="10" />
                    <p className="text-xs">{error?.Username}</p>
                  </div>
                )}
                <p className="text-[#b1bad3] font-semibold text-base mt-1">
                  Your username must be 3-14 characters long.
                </p>
              </div>
              <div>
                <div className="mb-4 relative">
                  <label
                    className="flex text-[#b1bad3] font-semibold text-sm mb-1"
                    htmlFor="password"
                  >
                    Password<p className="text-red-700 ml-1">*</p>
                  </label>
                  <input
                    className={`border rounded hover:border-[#7f8798] w-full py-2 px-3  bg-[#0f212e] text-[#b1bad3] focus:outline-[#b1bad3] ${error?.password ? "border-[#ed4163]" : "border-gray-600"
                      }`}
                    name="password"
                    onClick={handlePasswordDetails}
                    value={values?.password}
                    onChange={(e) => handleOnChange(e)}
                    type={showPassword ? "text" : "password"}
                  />
                  <div
                    className={`absolute inset-y-0 right-0 pr-3 ${error?.password ? "" : "mt-7"
                      } flex items-center cursor-pointer text-[#b1bad3]`}
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </div>
                  {error.password && (
                    <div className="flex items-center space-x-1 mt-2 text-[#f2708a]">
                      <ErrorIcon fontSize="10" />
                      <p className="text-xs">{error?.password}</p>
                    </div>
                  )}
                </div>
                {passwordDetail ? (
                  <div className="text-[#b1bad3] -mt-2 mb-3">
                    <div className="flex items-center space-x-1">
                      <DoneIcon fontSize="10" />
                      <p className="text-sm">Includes Lower and upper case</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DoneIcon fontSize="10" />
                      <p className="text-sm">At Least 1 number</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DoneIcon fontSize="10" />
                      <p className="text-sm">Minimum 8 characters</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DoneIcon fontSize="10" />
                      <p className="text-sm">
                        Includes at least 1 special character
                      </p>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div>
                <label
                  className="flex text-[#b1bad3] font-semibold text-sm mb-1"
                  htmlFor="Date of Birth"
                >
                  Date of Birth<p className="text-red-700 ml-1">*</p>
                </label>
                <div className="flex space-x-3">
                  <input
                    className={`border w-36 rounded py-2 px-3 max-sm:w-12 hover:border-[#7f8798] bg-[#0f212e] text-[#b1bad3] focus:outline-[#b1bad3] ${error?.day ? "border-[#ed4163]" : "border-gray-600"
                      }`}
                    name="day"
                    type="number"
                    min="1"
                    max="31"
                    value={values?.day}
                    onChange={(e) => handleOnChange(e)}
                    placeholder="DD"
                  />
                  <select
                    className={`py-2 px-3 w-36  max-sm:w-[7rem] bg-[#0f212e] border rounded hover:border-[#7f8798] text-white focus:outline-[#b1bad3] ${error?.month ? "border-[#ed4163]" : "border-gray-600"
                      }`}
                    name="month"
                    value={values?.month}
                    onChange={(e) => handleOnChange(e)}
                  >
                    <option value="">Months</option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                  <input
                    className={`border w-36 rounded py-2 px-3 max-sm:w-24 bg-[#0f212e] hover:border-[#7f8798] text-[#b1bad3] focus:outline-[#b1bad3] ${error?.year ? "border-[#ed4163]" : "border-gray-600"
                      }`}
                    name="year"
                    type="number"
                    value={values?.year}
                    onChange={(e) => handleOnChange(e)}
                    placeholder="YYYY"
                    min="1950"
                  />
                </div>
                {(error?.day || error?.month || error?.year) && (
                  <div className="flex items-center space-x-1 mt-2 text-[#f2708a]">
                    <ErrorIcon fontSize="10" />
                    <p className="text-xs">
                      {error?.day
                        ? error?.day
                        : error?.month
                          ? error?.month
                          : error?.year}
                    </p>
                  </div>
                )}
              </div>
              <div className="my-4">
                <label
                  className="flex text-[#b1bad3] font-semibold text-sm mb-1"
                  htmlFor="Phone"
                >
                  Phone
                </label>
                <div className="flex space-x-3">
                  <select
                    name="countrycode"
                    value={values?.countrycode}
                    onChange={(e) => handleOnChange(e)}
                    className="py-2 px-3 w-40 bg-[#0f212e] border rounded border-gray-600 hover:border-[#7f8798] text-white focus:outline-[#b1bad3]"
                  >
                    <option value="">{en["ZZ"]}</option>
                    {getCountries().map((item) => (
                      <option key={item} value={item}>
                        {en[item]} +{getCountryCallingCode(item)}
                        {/* +{getCountryCallingCode(countryCode)} */}
                      </option>
                    ))}
                  </select>
                  <input
                    className={`border w-full rounded py-2 px-3 border-gray-600 hover:border-[#7f8798] bg-[#0f212e] text-[#b1bad3] focus:outline-[#b1bad3]`}
                    name="mobileNumber"
                    type="text"
                    placeholder="Phone number"
                    value={values?.mobileNumber}
                    onChange={(e) => handleOnChange(e)}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-5 h-5 bg-[#0f212e]"
                    onClick={() => setCodeShow((showchek) => !showchek)}
                  />
                  <label className="text-[#b1bad3] text-sm font-semibold">
                    Code
                  </label>
                </div>
                {codeShow ? (
                  <>
                    <input
                      className={`border rounded w-full py-2 px-3 mt-3  bg-[#0f212e] text-[#b1bad3] focus:outline-[#b1bad3]`}
                      name="code"
                      type="text"
                      value={values?.code}
                      onChange={(e) => handleOnChange(e)}
                    />
                  </>
                ) : (
                  <div></div>
                )}
              </div>
              <button
                type="submit"
                className="bg-[#1fff20] hover:bg-[#42ed45] py-3 mt-6 rounded-md font-semibold w-full"
                onClick={(e) => handleSubmit(e)}
              >
                Continue
              </button>
            </form>
            <div className="ml-28">
              <hr className="w-8/12 mt-8 border-[0.1px] border-[#7c85a3]"></hr>
              <p className="bg-[#1a2c38] text-[#b1bad3] text-xs w-10 text-center -mt-2 mb-4 ml-24">
                OR
              </p>
            </div>
            <div className="flex justify-center space-x-3">
              <button
                className="bg-[#2f4553] hover:bg-[#47687d] px-1 py-2 rounded-md"
                onClick={handleFacebookLogin}
              >
                <img src={facebook} className="w-7 h-4" alt="Not Found" />
              </button>
              <button
                className="bg-[#2f4553] hover:bg-[#47687d] px-0.5 py-2 rounded-md"
                onClick={handleGoogleLogin}
              >
                <img src={google} className="w-8 h-4" alt="Not Found" />
              </button>
            </div>
            <p className="text-center text-sm font-semibold mt-5 text-[#b1bad3]">
              Already have an account?
              <Link
                className="text-white"
                onClick={() => {
                  dispatch(closeRegisterModel());
                  dispatch(openLoginModel());
                }}
              >
                {" "}
                Sign In
              </Link>
            </p>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}
export default Register;
