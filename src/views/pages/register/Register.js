import React from "react";
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

function Register({ setOpenPage, openPage }) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [passwordDetail, setPasswordDetail] = React.useState();
  const [country, setCountry] = React.useState();
  const handleClose = () => {
    setOpenPage(false);
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
          <p className="text-[#b1bad3] text-center font-semibold">
            Step 1/2: Fill out your details
          </p>
          <DialogContent>
            <form>
              <div className="mb-4">
                <label
                  className="flex text-[#b1bad3] text-sm mb-1"
                  htmlFor="username"
                >
                  Email<p className="text-red-700 ml-1">*</p>
                </label>
                <input
                  className={`border rounded w-[28rem] py-2 px-3 bg-[#0f212e] border-gray-600 hover:border-[#7f8798] text-[#b1bad3] focus:outline-[#b1bad3]`}
                  name="email"
                  // value={value.email}
                  // onChange={handleOnChange}
                  type="text"
                />
                {/* {error.email && (
                  <div className="flex items-center space-x-1 mt-2 text-[#f2708a]">
                    <ErrorIcon fontSize="10" />
                    <p className="text-xs">{error.email}</p>
                  </div>
                )} */}
              </div>
              <div className="mb-4">
                <label
                  className="flex text-[#b1bad3] text-sm mb-1"
                  htmlFor="username"
                >
                  Username<p className="text-red-700 ml-1">*</p>
                </label>
                <input
                  className={`border rounded w-[28rem] py-2 px-3 bg-[#0f212e] border-gray-600 hover:border-[#7f8798] text-[#b1bad3] focus:outline-[#b1bad3]`}
                  name="email"
                  // value={value.Username}
                  // onChange={handleOnChange}
                  type="text"
                />
                {/* {error.Username && (
                  <div className="flex items-center space-x-1 mt-2 text-[#f2708a]">
                    <ErrorIcon fontSize="10" />
                    <p className="text-xs">{error.Username}</p>
                  </div>
                )} */}
                <p className="text-[#b1bad3] text-base mt-1">
                  Your username must be 3-14 characters long.
                </p>
              </div>
              <div>
                <div className="mb-4 relative">
                  <label
                    className="flex text-[#b1bad3] text-sm mb-1"
                    htmlFor="password"
                  >
                    Password<p className="text-red-700 ml-1">*</p>
                  </label>
                  <input
                    className={`border rounded border-gray-600 hover:border-[#7f8798] w-full py-2 px-3 bg-[#0f212e] text-[#b1bad3] focus:outline-[#b1bad3]`}
                    name="password"
                    onClick={handlePasswordDetails}
                    // value={value.password}
                    // onChange={handleOnChange}
                    type={showPassword ? "text" : "password"}
                  />
                  <div
                    className="absolute inset-y-0 right-0 mt-7 pr-3 flex items-center cursor-pointer text-[#b1bad3]"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </div>
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
                  </div>
                ) : (
                  <div></div>
                )}
                {/* {error.password && (
                <div className="flex items-center space-x-1 -mt-2.5 text-[#f2708a]">
                  <ErrorIcon fontSize="10" />
                  <p className="text-xs">{error.password}</p>
                </div>
              )} */}
              </div>
              <div>
                <label
                  className="flex text-[#b1bad3] text-sm mb-1"
                  htmlFor="Date of Birth"
                >
                  Date of Birth<p className="text-red-700 ml-1">*</p>
                </label>
                <div className="flex space-x-3">
                  <input
                    className={`border w-36 rounded py-2 px-3 border-gray-600 hover:border-[#7f8798] bg-[#0f212e] text-[#b1bad3] focus:outline-[#b1bad3]`}
                    name="password"
                    type="number"
                    placeholder="DD"
                  />
                  <select className="py-2 px-3 w-36 bg-[#0f212e] border rounded border-gray-600 hover:border-[#7f8798] text-white focus:outline-[#b1bad3]">
                    <option value="January">Months</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                  <input
                    className={`border w-36 rounded py-2 px-3 bg-[#0f212e] border-gray-600 hover:border-[#7f8798] text-[#b1bad3] focus:outline-[#b1bad3]`}
                    name="password"
                    type="number"
                    placeholder="YYYY"
                    min="1950"
                  />
                </div>
              </div>
              <div className="my-4">
                <label
                  className="flex text-[#b1bad3] text-sm mb-1"
                  htmlFor="Phone (Optional)"
                >
                  Phone (Optional)<p className="text-red-700 ml-1">*</p>
                </label>
                <div className="flex space-x-3">
                  <select
                    value={country}
                    onChange={(event) =>
                      setCountry(event.target.value || undefined)
                    }
                    className="py-2 px-3 w-40 bg-[#0f212e] border rounded border-gray-600 hover:border-[#7f8798] text-white focus:outline-[#b1bad3]"
                  >
                    <option value="">{en["ZZ"]}</option>
                    {getCountries().map((country) => (
                      <option key={country} value={country}>
                        {en[country]} +{getCountryCallingCode(country)}
                        {/* +{getCountryCallingCode(country)} */}
                      </option>
                    ))}
                  </select>
                  <input
                    className={`border w-full rounded py-2 px-3 border-gray-600 hover:border-[#7f8798] bg-[#0f212e] text-[#b1bad3] focus:outline-[#b1bad3]`}
                    name="password"
                    type="text"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-5 h-5 bg-[#0f212e]"
                    onClick={() => setShow((showchek) => !showchek)}
                  />
                  <label className="text-[#b1bad3]">Code (Optional)</label>
                </div>
                {show ? (
                  <>
                    <input
                      className={`border rounded w-full py-2 px-3 mt-3  bg-[#0f212e] text-[#b1bad3] focus:outline-[#b1bad3]`}
                      name="codeOptional"
                      type="text"
                    />
                  </>
                ) : (
                  <div></div>
                )}
              </div>
              <button
                type="submit"
                className="bg-[#1fff20] py-3 mt-6 rounded-md font-semibold w-full"
              >
                Continue
              </button>
            </form>
            <div className="ml-28">
              <hr className="w-8/12 mt-8 border-[0.1px] border-[#7c85a3]"></hr>
              <p className="bg-[#1a2c38] text-[#b1bad3] w-10 text-center -mt-3 mb-6 ml-24">
                OR
              </p>
            </div>
            <div className="flex justify-center space-x-3">
              <button className="bg-[#2f4553] hover:bg-[#47687d] px-2 py-3 rounded-md">
                <img src={facebook} className="w-8 h-5" alt="Not Found" />
              </button>
              <button className="bg-[#2f4553] hover:bg-[#47687d] px-1 py-3 rounded-md">
                <img src={google} className="w-10 h-5" alt="Not Found" />
              </button>
            </div>
            <p className="text-center mt-5 text-[#b1bad3]">
            Already have an account?
              <Link className="text-white"> Sign In</Link>
            </p>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}
export default Register;
