
import { FormControl, TextField, Button, MenuItem, Select, InputLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
import { decodedToken } from "../../../resources/utility";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

const Generals = () => {
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [errors, setErrors] = useState({});
    const [tokenValid, setTokenValid] = useState(true);
    const [resendClicked, setResendClicked] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    // List of country codes and country names
    const countryCodes = [
        { code: "+1", name: "United States" },
        { code: "+44", name: "United Kingdom" },
        { code: "+91", name: "India" },
        { code: "+61", name: "Australia" },
        { code: "+81", name: "Japan" },
    ];

    const decoded = decodedToken();
    console.log(">>>>>>>>>>", decoded?.userId);

    const userId = decoded?.userId;

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = decodedToken(token);
                setTokenValid(true);
                setEmail(decoded?.email || "");
            } catch (error) {
                console.error("Invalid token", error);
                setTokenValid(false);
            }
        } else {
            setTokenValid(false);
        }
    }, []);

    const handleResendEmail = () => {
        setResendClicked(true);
        if (tokenValid && email) {
            alert(`Decoded Email: ${email}`);
        } else {
            // alert("Invalid token or email");
        }
    };

    const handleSaveEmail = () => {
        localStorage.setItem("email", email);
    };

    const handleSubmitPhone = () => {
        alert(`Phone number submitted: ${countryCode} ${phoneNumber}`);

    };

    return (
        <div className="bg-[#0f212e] text-white rounded-lg py-1 min-h-screen">
            <div className="bg-[#1a2c38] text-white rounded-lg py-4 h-64 w-120 m-10">
                {/* Email Section */}
                <div className="py-3 text-xl ml-8 ">
                    Email
                    <div className="border-b pt-2 border-gray-500 w-[95%] mt-1"></div>
                </div>
                <div>
                    <p className="mt-0 mb-2 ml-8 mx-4 py-2 text-sm font-medium text-gray-400">Email</p>
                    <FormControl sx={{ mt: 0, ml: 0 }} error={!!errors.email}>
                        <TextField
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{
                                width: "140%",
                                marginLeft: "30px",
                                backgroundColor: "#0f212e",
                                color: "white",
                                "& .MuiOutlinedInput-root": {
                                    border: "1px solid gray",
                                    height: "40px",
                                    "&:hover": {
                                        border: "2px solid #b1bad3",
                                    },
                                },
                                "& .MuiInputBase-input": {
                                    color: "white",
                                },

                                '@media (max-width: 425px)': {
                                    width: "100%",
                                    marginLeft: "0",
                                },
                                '@media (min-width: 426px) and (max-width: 768px)': {
                                    width: "100%",
                                    marginLeft: "32px",
                                },
                                '@media (min-width: 769px) and (max-width: 1024px)': {
                                    width: "100%",
                                    marginLeft: "30px",
                                },
                                '@media (min-width: 1025px)': {
                                    width: "140%", // Original width for larger screens
                                    marginLeft: "30px", // Original margin for larger screens
                                },
                            }}
                        />
                    </FormControl>
                    <div className="border-b p-2 1px border-gray-400 mt-1"></div>
                </div>

                {/* Buttons Section */}
                <div className="mt-4 px-8" style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                    <Button onClick={handleResendEmail} sx={{ color: "white" }}>
                        Resend Email
                    </Button>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={handleSaveEmail}
                        sx={{
                            color: "black",
                            height: "40px",
                        }}
                    >
                        Save
                    </Button>
                </div>
            </div>

            {/* Phone Number Section */}
            <div className="bg-[#1a2c38] text-white rounded-lg py-4 h-96 w-120 m-10">
                <div className="py-3 font-bold text-xl ml-8 ">Phone Number</div>
                <p className="font-normal text-sm pt-2 mt-1 ml-8 text-gray-400">
                    We only service areas that are listed in the available country code list.
                </p>
                <div className="border-b pt-4 border-gray-500 w-[95%] mt-1"></div>

                {/* Country Code Dropdown */}
                <p className="mt-0 mb-2 ml-8 py-2 text-sm font-medium text-gray-400">
                    Country Code
                </p>
                <FormControl
                    className="mt-[-0.5rem] ml-8 w-[50%] sm:w-[80%] md:w-[60%] lg:w-[41%]"
                    size="small"
                >
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center ml-8 justify-between w-[97%] p-2 bg-[#0f212e] text-white border border-[#b1bad3] rounded cursor-pointer"
                    >
                        {countryCode ? `Selected: ${countryCode}` : "Select Country Code"}
                        {isOpen ? (
                            <ChevronUpIcon className="ml-2 h-5 w-5" />
                        ) : (
                            <ChevronDownIcon className="ml-2 h-5 w-5" />
                        )}
                    </div>
                </FormControl>

                {/* Dropdown */}
                {isOpen && (
                    <div
                        className="mt-[3px] ml-8 w-[41%] sm:w-[80%] md:w-[60%] lg:w-[41%] bg-[#0f212e] text-white border border-[#b1bad3] max-h-[180px] overflow-y-auto rounded"
                    >
                        {countryCodes.map((item) => (
                            <div
                                key={item.code}
                                onClick={() => {
                                    setCountryCode(item.code);
                                    setIsOpen(false); // Close dropdown after selection
                                }}
                                className="p-2 cursor-pointer hover:bg-[#1a2c38]"
                            >
                                {item.name} {item.code}
                            </div>
                        ))}
                    </div>
                )}



                {/* Phone Number Input */}
                <p className="mt-0 mb-2 ml-8 mx-4 py-2 text-sm font-medium text-gray-400 ">Phone Number</p>
                <FormControl sx={{ mt: -2, ml: 0, color: "white" }}>
                    <TextField
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        sx={{
                            color: "white",
                            width: "140%",
                            marginLeft: "30px",
                            backgroundColor: "#0f212e",
                            "& .MuiOutlinedInput-root": {
                                border: "1px border-gray-500",
                                height: "40px",
                                "&:hover": {
                                    border: "2px solid #b1bad3",
                                },
                            },
                            "& .MuiInputBase-input": {
                                color: "white",
                            },
                            // Media queries for different screen sizes
                            '@media (max-width: 425px)': {
                                width: "100%", // Full width on mobile
                                marginLeft: "0", // Remove margin on mobile
                            },
                            '@media (min-width: 426px) and (max-width: 768px)': {
                                width: "100%", // Full width on small tablets
                                marginLeft: "32px", // Remove margin on small tablets
                            },
                            '@media (min-width: 769px) and (max-width: 1024px)': {
                                width: "100%", // Full width on larger tablets
                                marginLeft: "30px", // Remove margin on larger tablets
                            },
                            '@media (min-width: 1025px)': {
                                width: "140%", // Original width for larger screens
                                marginLeft: "30px", // Original margin for larger screens
                            },
                        }}

                    />
                </FormControl>
                <div className="border-b p-2 1px border-gray-400 mt-1"></div>

                {/* Submit Button */}
                <div className="mt-4 px-8 p-4" style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={handleSubmitPhone}
                        sx={{
                            color: "black",
                            height: "40px",
                        }}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Generals;
