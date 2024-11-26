import React, { useState } from "react";
import { FormControl, TextField, InputAdornment, IconButton, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FaCopy } from "react-icons/fa";


const Security = () => {
    const [showPassword, setShowPassword] = useState({
        oldPassword: false,
        newPassword: false,
        confirmPassword: false,
    });
    const [values, setValues] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [error, setError] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const togglePasswordVisibility = (field) => {
        setShowPassword((prevState) => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };

    const validate = () => {
        const errors = {};
        if (!values.oldPassword) {
            errors.oldPassword = "Please enter your old password.";
        }
        if (!values.newPassword) {
            errors.newPassword = "Please enter a new password.";
        } else if (values.newPassword.length < 6) {
            errors.newPassword = "Password must be at least 6 characters.";
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = "Please confirm your password.";
        } else if (values.confirmPassword !== values.newPassword) {
            errors.confirmPassword = "Passwords do not match.";
        }

        setError(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSave = () => {
        if (validate()) {
            console.log("Passwords saved:", values);
            // Add logic here
        }
    };
    // const handleCopy = () => {
    //     const inputField = document.getElementById("auth-code-input");
    //     inputField.select();
    //     inputField.setSelectionRange(0, 99999);
    //     navigator.clipboard.writeText(inputField.value).then(() => {
    //         //   alert("Code copied to clipboard!"); 
    //         console.error("Failed to copy text: ", err);
    //     });
    // };


    return (
        <div className="bg-[#0f212e] text-white rounded-lg p-1 py-1">
            <div className="bg-[#1a2c38] text-white rounded-lg py-2 w-120 m-6 mx-10">
                <div className="py-2 text-xl ml-8">Password</div>


                <div className="mx-8">
                    <div className="mb-4">
                        <p className=" mt-4 text-sm font-medium text-gray-400">
                            Old Password <span className="text-red-500">*</span>
                        </p>
                        <FormControl sx={{ mt: 0, ml: 0 }}>
                            <TextField
                                name="oldPassword"
                                type={showPassword.oldPassword ? "text" : "password"}
                                value={values.oldPassword}
                                onChange={handleInputChange}
                                error={!!error.oldPassword}
                                helperText={error.oldPassword}
                                sx={{
                                    // marginTop: "2px",
                                    width: "140%",
                                    backgroundColor: "#0f212e",
                                    // marginLeft: "25px",
                                    "& .MuiOutlinedInput-root": {
                                        border: "1px border-gray-500",
                                        height: "40px",
                                        "&:hover": {
                                            border: "2px solid #b1bad3",
                                        },
                                    },
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => togglePasswordVisibility("oldPassword")}
                                                edge="end"
                                                sx={{
                                                    color: "white"
                                                }}
                                            >
                                                {showPassword.oldPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </FormControl>
                    </div>

                    {/* New Password */}
                    <div className="mb-4">
                        <p className="text-sm font-medium text-gray-400">New Password <span className="text-red-500">*</span></p>
                        <FormControl sx={{ mt: 0, ml: 0 }}>
                            <TextField
                                name="newPassword"
                                type={showPassword.newPassword ? "text" : "password"}
                                value={values.newPassword}
                                onChange={handleInputChange}
                                error={!!error.newPassword}
                                helperText={error.newPassword}
                                sx={{
                                    width: "140%",
                                    backgroundColor: "#0f212e",
                                    // marginLeft: "30px",
                                    "& .MuiOutlinedInput-root": {
                                        border: "1px border-gray-500",
                                        height: "40px",
                                        "&:hover": {
                                            border: "2px solid #b1bad3",
                                        },
                                    },
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => togglePasswordVisibility("newPassword")}
                                                edge="end"
                                                sx={{
                                                    color: "white"
                                                }}
                                            >
                                                {showPassword.newPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </FormControl>
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-6">
                        <p className=" text-sm font-medium text-gray-400">Confirm Password <span className="text-red-500">*</span></p>
                        <FormControl sx={{ mt: 0, ml: 0 }}>
                            <TextField
                                name="confirmPassword"
                                type={showPassword.confirmPassword ? "text" : "password"}
                                value={values.confirmPassword}
                                onChange={handleInputChange}
                                error={!!error.confirmPassword}
                                helperText={error.confirmPassword}
                                sx={{
                                    width: "140%",
                                    backgroundColor: "#0f212e",
                                    // marginLeft: "30px",
                                    "& .MuiOutlinedInput-root": {
                                        border: "1px border-gray-500",
                                        height: "40px",
                                        "&:hover": {
                                            border: "2px solid #b1bad3",
                                        },
                                    },
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => togglePasswordVisibility("confirmPassword")}
                                                edge="end"
                                                sx={{
                                                    color: "white"
                                                }}
                                            >
                                                {showPassword.confirmPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </FormControl>

                    </div>

                    <div className="border-b pt-2 border-gray-500 w-4/1 mt-1"></div>

                    {/* Save Button */}
                    <div className="flex justify-end p-4">
                        <Button
                            variant="contained"
                            color="success"
                            onClick={handleSave}

                            sx={{
                                color: "black",
                                height: "50px",
                                width: "80px"
                            }}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </div>

            {/* <div className="bg-[#0f212e] text-white rounded-lg p-1 py-1 min-h-screen">
                <div className="bg-[#1a2c38] text-white rounded-lg py-2 w-120 m-6 mx-10">
                    <div className="py-2 text-xl ml-8">Two Factor</div>
                    <p className="font-normal text-sm pt-1 mt-1 ml-8 text-gray-400">
                        To keep your account extra secure leave a two factor authentication enabled.
                    </p>
                    <div className="border-b pt-4 border-gray-500 w-full mt-1"></div>
                    <div>
                        <p className="mt-0 mb-2 ml-8 mx-4 py-2 text-sm font-medium text-gray-400">
                            Copy this code to your authenticator app
                        </p>

                        <div className="flex items-center ml-8">
                            {/* Input field with code */}
                            {/* <input
                                id="auth-code-input"
                                type="text"
                                value="123456"  // You can replace this with your dynamic code
                                readOnly
                                className="bg-[#1a2c38] text-white rounded-lg p-2 w-60 border border-gray-500 mr-2"
                            />

                    
                            <FaCopy
                                size={20}
                                className="cursor-pointer text-gray-400 hover:text-gray-500"
                                onClick={handleCopy}
                            />
                        </div>
                    </div>
                </div>
            </div>  */}
        </div>

    );
};

export default Security;
