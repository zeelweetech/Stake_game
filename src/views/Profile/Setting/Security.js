import React, { useState, useEffect } from "react";
import { FormControl, TextField, InputAdornment, IconButton, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { twoFactPassword } from "../../../services/Users";
import 'react-toastify/dist/ReactToastify.css';
import toast from "react-hot-toast";

const Security = () => {
    const [tokenValid, setTokenValid] = useState(true);
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
    const [email, setEmail] = useState("");
    const [userId, setUserId] = useState("");
    const [responsiveMobile, setResponsiveMobile] = useState(window.innerWidth);


    useEffect(() => {
        const handleResize = () => {
            setResponsiveMobile(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        // Cleanup event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const decodedToken = () => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = JSON.parse(atob(token.split('.')[1]));
                return decoded;
            } catch (e) {
                console.error("Error decoding token:", e);
                return null;
            }
        }
        return null;
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = decodedToken();
                setTokenValid(true);
                setEmail(decoded?.email || "");
                setUserId(decoded?.userId || "");
            } catch (error) {
                console.error("Invalid token", error);
                setTokenValid(false);
            }
        } else {
            setTokenValid(false);
        }
    }, []);

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

    const handleSave = async () => {
        if (validate()) {
            try {
                if (userId) {
                    const response = await twoFactPassword({ userId, values });
                    toast.success("Password updated successfully");
                } else {
                    console.error("User  ID not found.");
                }
            } catch (error) {
                if (error.response) {
                    console.error("API Error:", error.response.data);
                    toast.error(error.response.data.message || "Failed to update password");
                } else {
                    console.error("Error:", error.message);
                    toast.error("An error occurred while updating the password");
                }
            }
        }
    };

    return (
        <div>
            {responsiveMobile > 768 ? (
                <div className="bg-[#0f212e] text-white rounded-lg p-10">
                    <div className="bg-[#1a2c38] border border-gray-500 text-white rounded-lg p-4 w-120 space-y-3">
                        {/* <div className="flex flex-col"> */}
                        <div className="flex justify-start mb-4">
                            <h2 className="text-lg font-semibold">Password</h2>
                        </div>

                        {/* Old Password */}
                        <div className="space-y-2">
                            <p className="text-sm font-medium text-gray-400">
                                Old Password <span className="text-red-500">*</span>
                            </p>
                            <div className="relative">
                                <input
                                    name="oldPassword"
                                    placeholder="Enter Old Password"
                                    type={showPassword.oldPassword ? "text" : "password"}
                                    value={values.oldPassword}
                                    onChange={handleInputChange}
                                    className={`border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none 
                        bg-[#0f212e] text-white w-96 h-10 px-2`}
                                />
                                <IconButton
                                    onClick={() => togglePasswordVisibility("oldPassword")}
                                    edge="end"
                                    className="right-11"
                                    sx={{ color: "white" }}
                                >
                                    {showPassword.oldPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </div>
                            {error.oldPassword && (
                                <p className="text-red-500 text-xs">{error.oldPassword}</p>
                            )}
                        </div>

                        {/* New Password */}
                        <div className="mb-4 relative">
                            <p className="text-sm font-medium text-gray-400">
                                New Password <span className="text-red-500">*</span>
                            </p>
                            <input
                                name="newPassword"
                                placeholder="Enter New Password"
                                type={showPassword.newPassword ? "text" : "password"}
                                value={values.newPassword}
                                onChange={handleInputChange}
                                className={`border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none 
                                    bg-[#0f212e] text-white w-96 h-10 px-2`}
                            />
                            <IconButton
                                onClick={() => togglePasswordVisibility("newPassword")}
                                edge="end"
                                className="right-11"
                                sx={{ color: "white" }}
                            >
                                {showPassword.newPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                            {error.newPassword && (
                                <p className="text-red-500 text-xs">{error.newPassword}</p>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div className="mb-6 relative">
                            <p className="text-sm font-medium text-gray-400">
                                Confirm Password <span className="text-red-500">*</span>
                            </p>
                            <input
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                type={showPassword.confirmPassword ? "text" : "password"}
                                value={values.confirmPassword}
                                onChange={handleInputChange}
                                className={`border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none 
                    bg-[#0f212e] text-white w-96 h-10 px-2`}
                            />
                            <IconButton
                                onClick={() => togglePasswordVisibility("confirmPassword")}
                                edge="end"
                                className="right-11"
                                sx={{ color: "white" }}
                            >
                                {showPassword.confirmPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                            {error.confirmPassword && (
                                <p className="text-red-500 text-xs">{error.confirmPassword}</p>
                            )}
                        </div>
                        <div className="border-b pt-2 border-gray-500 w-full mt-1"></div>

                        {/* Save Button */}
                        <div className="flex justify-end p-4">
                            <Button
                                variant="contained"
                                color="success"
                                onClick={handleSave}
                                sx={{
                                    color: "black",
                                    height: "50px",
                                    width: "80px",
                                }}
                            >
                                Save
                            </Button>
                        </div>

                    </div>
                </div>
            ) : null}

            {responsiveMobile <= 768 ? (
                <div className="bg-[#0f212e] text-white rounded-lg p-7">
                    <div className="bg-[#1a2c38] border border-gray-500 text-white rounded-lg p-6 w-120 space-y-3">
                        {/* <div className="flex flex-col"> */}
                        <div className="flex justify-start mb-4">
                            <h2 className="text-lg font-semibold">Password</h2>
                        </div>

                        {/* Old Password */}
                        <div className="space-y-2 mb-4 relative">
                            <p className="text-sm font-medium text-gray-400">
                                Old Password <span className="text-red-500">*</span>
                            </p>
                            <div className="flex">
                                <input
                                    name="oldPassword"
                                    placeholder="Enter Old Password"
                                    type={showPassword.oldPassword ? "text" : "password"}
                                    value={values.oldPassword}
                                    onChange={handleInputChange}
                                    className={`bg-[#0f212e] border-2 border-[#2F4553] hover:border-[#557086] focus:outline-none 
                    text-white w-full h-10 px-2`}
                                />
                                <IconButton
                                    onClick={() => togglePasswordVisibility("oldPassword")}
                                    edge="end"
                                    className="right-10"
                                    sx={{ color: "white" }}
                                >
                                    {showPassword.oldPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </div>
                            {error.oldPassword && (
                                <p className="text-red-500 text-xs">{error.oldPassword}</p>
                            )}
                        </div>
                        {/* <div className="space-y-2">
                            <p className="text-sm font-medium text-gray-400">
                                Old Password <span className="text-red-500">*</span>
                            </p>
                            <div className="relative">
                                <input
                                    name="oldPassword"
                                    placeholder="Enter Old Password"
                                    type={showPassword.oldPassword ? "text" : "password"}
                                    value={values.oldPassword}
                                    onChange={handleInputChange}
                                    className={`border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none 
                        bg-[#0f212e] text-white w-96 h-10 px-2`}
                                />
                                <IconButton
                                    onClick={() => togglePasswordVisibility("oldPassword")}
                                    edge="end"
                                    className="right-11"
                                    sx={{ color: "white" }}
                                >
                                    {showPassword.oldPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </div>
                            {error.oldPassword && (
                                <p className="text-red-500 text-xs">{error.oldPassword}</p>
                            )}
                        </div> */}


                        {/* New Password */}
                        <div className="mb-4 relative">
                            <p className="text-sm font-medium text-gray-400">
                                New Password <span className="text-red-500">*</span>
                            </p>
                            <div className="flex">
                                <input
                                    name="newPassword"
                                    placeholder="Enter New Password"
                                    type={showPassword.newPassword ? "text" : "password"}
                                    value={values.newPassword}
                                    onChange={handleInputChange}
                                    className={`bg-[#0f212e] border-2 border-[#2F4553] hover:border-[#557086] focus:outline-none 
                    text-white w-full h-10 px-2`}
                                />
                                <IconButton
                                    onClick={() => togglePasswordVisibility("newPassword")}
                                    edge="end"
                                    className="right-10"
                                    sx={{ color: "white" }}
                                >
                                    {showPassword.newPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </div>
                            {error.newPassword && (
                                <p className="text-red-500 text-xs">{error.newPassword}</p>
                            )}
                        </div>
                        {/* <div className="mb-4 relative">
                            <p className="text-sm font-medium text-gray-400">
                                New Password <span className="text-red-500">*</span>
                            </p>
                            <input
                                name="newPassword"
                                placeholder="Enter New Password"
                                type={showPassword.newPassword ? "text" : "password"}
                                value={values.newPassword}
                                onChange={handleInputChange}
                                className={`border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none 
                                    bg-[#0f212e] text-white w-96 h-10 px-2`}
                            />
                            <IconButton
                                onClick={() => togglePasswordVisibility("newPassword")}
                                edge="end"
                                className="right-11"
                                sx={{ color: "white" }}
                            >
                                {showPassword.newPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                            {error.newPassword && (
                                <p className="text-red-500 text-xs">{error.newPassword}</p>
                            )}
                        </div> */}

                        {/* Confirm Password */}
                        <div className="mb-6 relative">
                            <p className="text-sm font-medium text-gray-400">
                                Confirm Password <span className="text-red-500">*</span>
                            </p>
                            <div className="flex">
                                <input
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    type={showPassword.confirmPassword ? "text" : "password"}
                                    value={values.confirmPassword}
                                    onChange={handleInputChange}
                                    className={`bg-[#0f212e] border-2 border-[#2F4553] hover:border-[#557086] focus:outline-none 
                    text-white w-full h-10 px-2`}
                                />
                                <IconButton
                                    onClick={() => togglePasswordVisibility("confirmPassword")}
                                    edge="end"
                                    className="right-10"
                                    sx={{ color: "white" }}
                                >
                                    {showPassword.confirmPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </div>
                            {error.confirmPassword && (
                                <p className="text-red-500 text-xs">{error.confirmPassword}</p>
                            )}
                        </div>
                        {/* <div className="mb-6 relative">
                            <p className="text-sm font-medium text-gray-400">
                                Confirm Password <span className="text-red-500">*</span>
                            </p>
                            <input
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                type={showPassword.confirmPassword ? "text" : "password"}
                                value={values.confirmPassword}
                                onChange={handleInputChange}
                                className={`border-2 hover:border-[#557086] border-[#2F4553] focus:outline-none 
                    bg-[#0f212e] text-white w-96 h-10 px-2`}
                            />
                            <IconButton
                                onClick={() => togglePasswordVisibility("confirmPassword")}
                                edge="end"
                                className="right-11"
                                sx={{ color: "white" }}
                            >
                                {showPassword.confirmPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                            {error.confirmPassword && (
                                <p className="text-red-500 text-xs">{error.confirmPassword}</p>
                            )}
                        </div> */}

                        <div className="border-b pt-2 border-gray-500 w-full mt-1"></div>

                        {/* Save Button */}
                        <div className="flex justify-end p-4">
                            <Button
                                variant="contained"
                                color="success"
                                onClick={handleSave}
                                sx={{
                                    color: "black",
                                    height: "50px",
                                    width: "80px",
                                }}
                            >
                                Save
                            </Button>
                        </div>
                        {/* </div> */}

                    </div>
                </div>
            ) : null}
        </div>

    );
};

export default Security;