import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, FormControl, IconButton, InputAdornment, TextField } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { FaKey } from "react-icons/fa6";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast } from "react-hot-toast";
import { resetPassword } from "../../../services/Users";
import { useLocation } from "react-router-dom";

function NewPassword() {
  const [values, setValues] = useState({ newPassword: "" });
  const [error, setError] = useState({});
  const [forgotPasswordModel, setForgotPasswordModel] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState("");


  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const resetToken = queryParams.get("token");
    if (resetToken) {
      setToken(resetToken);
    } else {
      toast.error("Invalid or missing token.");
      setForgotPasswordModel(false);
    }
  }, [location]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setError({ ...error, [name]: "" });
  };

  const Validation = () => {
    let errors = {};

    if (!values.newPassword) {
      errors.newPassword = "Please enter a new password.";
    } else if (values.newPassword.length < 6) {
      errors.newPassword = "Password must be at least 6 characters.";
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Validation()) {
      try {
        const response = await resetPassword({
          body: {
            token, // Include token in the API payload
            newPassword: values.newPassword,
          },
        });

        console.log("Password reset successful:", response);
        toast.success("Password updated successfully");
        setForgotPasswordModel(false); // Close the modal after success
      } catch (error) {
        console.error("API Error:", error);
        toast.error("Failed to reset password. Please try again.");
      }
    } else {
      console.log("Validation failed. Errors:", error);
    }
  };

  const handleForgotPasswordClose = () => {
    setForgotPasswordModel(false);
  };

  return (
    <Dialog
      open={forgotPasswordModel}
      onClose={handleForgotPasswordClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "6px",
          backgroundColor: "#1a2c38",
          width: "500px",
        },
      }}
    >
      <div>
        <div className="flex justify-between mt-1 text-white">
          <DialogContent className="flex items-center space-x-2 p-0">
            <FaKey className="text-[#b1bad3]" />
            <p className="text-lg font-semibold">Reset Password</p>
          </DialogContent>
          <IconButton onClick={handleForgotPasswordClose}>
            <CloseIcon className="text-white" />
          </IconButton>
        </div>
        <DialogContent>
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-400">
              New Password <span className="text-red-500">*</span>
            </p>
            <FormControl sx={{ mt: 0, ml: 0, width: "100%" }}>
              <TextField
                name="newPassword"
                placeholder="Enter New Password"
                type={showPassword ? "text" : "password"}
                value={values.newPassword}
                onChange={handleOnChange}
                error={!!error.newPassword}
                helperText={error.newPassword}
                sx={{
                  backgroundColor: "#0f212e",
                  "& .MuiOutlinedInput-root": {
                    border: "1px solid #b1bad3",
                    height: "40px",
                    "&:hover": {
                      border: "2px solid #b1bad3",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        sx={{ color: "white" }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </div>
          <button
            type="submit"
            className="bg-[#1fff20] py-2 rounded-md font-semibold w-full text-white"
            onClick={handleSubmit}
          >
            Reset Password
          </button>
        </DialogContent>
      </div>
    </Dialog>
  );
}

export default NewPassword;
