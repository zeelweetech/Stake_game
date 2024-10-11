import React, { useState } from "react";
import toast, { ErrorIcon } from "react-hot-toast";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function DefultPage() {
  const [values, setValues] = useState();
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setError({ ...error, [name]: "" });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (values?.password) {
      if (values?.password === process.env.REACT_APP_DEFULT_PASSWORD) {
        localStorage.setItem("status", true);
        window.location.reload();
      } else {
        toast.error("Please enter a valid password");
      }
    } else {
      toast.error("Please enter your password");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-white flex flex-col justify-center item-center h-screen">
      <div className="flex space-x-2 justify-center">
        <div className="mb-1 relative">
          <label className="text-xl font-bold p-2">Password* :</label>
          <input
            className={`border-2 rounded w-50 border-gray-600`}
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={values?.password}
            onChange={(e) => handleOnChange(e)}
          />
          <div
            className="absolute inset-y-0 right-0 mt-7 pr-3 flex items-center cursor-pointer text-[#b1bad3]"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </div>
        </div>
        <button
          className="bg-green-500 p-2 text-xl font-semibold hover:bg-green  -400"
          onClick={(e) => handleOnSubmit(e)}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default DefultPage;
