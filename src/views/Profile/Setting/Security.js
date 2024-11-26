import React, { useState } from "react";
import { FormControl, TextField, InputAdornment, IconButton, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

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

    return (
        <div className="bg-[#0f212e] text-white rounded-lg py-1 min-h-screen">
            <div className="bg-[#1a2c38] text-white rounded-lg py-4 w-120 mx-10">
                <div className="py-2 text-xl ml-8">Password</div>


                <div className="mx-8">
                    <div className="mb-4">
                        <p className=" mt-4 text-sm font-medium">
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
                        <p className="text-sm font-medium">New Password <span className="text-red-500">*</span></p>
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
                        <p className=" text-sm font-medium">Confirm Password <span className="text-red-500">*</span></p>
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

                    {/* Save Button */}
                    <div className="flex justify-end">
                        <Button
                            onClick={handleSave}
                            sx={{
                                backgroundColor: "#4caf50",
                                color: "white",
                                "&:hover": {
                                    backgroundColor: "#45a049",
                                },
                            }}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Security;
