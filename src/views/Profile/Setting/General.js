
import { FormControl, TextField, Button, MenuItem, Select, InputLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
import { decodedToken } from "../../../resources/utility";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Generals = () => {
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [errors, setErrors] = useState({});
    const [decodedEmail, setDecodedEmail] = useState("");
    const [tokenValid, setTokenValid] = useState(true);
    const [resendClicked, setResendClicked] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // Controls dropdown visibility

    // List of country codes and country names
    const countryCodes = [
        { code: "+1", name: "United States" },
        { code: "+44", name: "United Kingdom" },
        { code: "+91", name: "India" },
        { code: "+61", name: "Australia" },
        { code: "+81", name: "Japan" },
    ];

    // Fetch token and decode safely
    useEffect(() => {
        const token = localStorage.getItem("token"); // Assume the token is stored in localStorage
        if (token) {
            try {
                const decoded = decodedToken(token); // Decode the token

                console.log("decoded", decoded);

                setDecodedEmail(decoded.email); // Assume decoded token has an email field
            } catch (error) {
                console.error("Invalid token", error);
                setTokenValid(false); // Mark token as invalid if decoding fails
            }
        } else {
            setTokenValid(false);
        }

        const loggedInEmail = localStorage.getItem("email");
        if (loggedInEmail) {
            setEmail(loggedInEmail);
        }
    }, []);

    const handleResendEmail = () => {
        setResendClicked(true);
        if (tokenValid && decodedEmail) {
            alert(`Decoded Email: ${decodedEmail}`);
        } else {
            alert("Invalid token or email");
        }
    };

    const handleSaveEmail = () => {
        localStorage.setItem("email", email);
    };

    const handleSubmitPhone = () => {

        alert(`Phone number submitted: ${countryCode} ${phoneNumber}`);
        // console.log("Country Code:", countryCode);
        // console.log("Phone Number:", phone);
        // Add your logic here (e.g., send the data to an API or update the state)
    };

    return (
        <div className="bg-[#0f212e] text-white rounded-lg py-1 min-h-screen">
            <div className="bg-[#1a2c38] text-white rounded-lg py-4 h-64 w-120 m-10">
                {/* Email Section */}
                <div className="py-3 text-xl ml-8">
                    Email
                    <div className="border-b pt-2 border-gray-500 w-[95%] mt-1"></div>
                </div>
                <div>
                    <p className="mt-0 mb-2 ml-8 mx-4 py-2 text-sm font-medium">Email</p>
                    <FormControl sx={{ mt: 0, ml: 0 }} error={!!errors.email}>
                        <TextField
                            // placeholder="Enter Email"
                            value={decodedEmail?.email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{
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
                            }}
                        />
                    </FormControl>
                    <div className="border-b p-2 1px border-gray-400 mt-1"></div>
                </div>

                {/* Buttons Section */}
                <div className="mt-4 px-8" style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                    <Button
                        onClick={handleResendEmail}
                        sx={{
                            color: "white",

                        }}
                    >
                        Resend Email
                    </Button>
                    <Button
                        variant="contained"
                        color="success" // Green color
                        onClick={handleSaveEmail}
                        sx={{
                            color: "black",
                            height: "40px"
                        }}
                    >
                        Save
                    </Button>
                </div>
            </div>

            {/* Phone Number Section */}
            <div className="bg-[#1a2c38] text-white rounded-lg py-4 h-96 w-120 m-10">
                <div className="py-3 font-bold text-xl ml-8">Phone Number</div>
                <p className="font-normal text-sm pt-2 mt-1 ml-8">
                    We only service areas that are listed in the available country code list.
                </p>
                <div className="border-b pt-4 border-gray-500 w-[95%] mt-1"></div>

                {/* Country Code Dropdown */}
                <p className="mt-0 mb-2 ml-8 mx-4 py-2 text-sm font-medium">Country Code</p>
                <FormControl sx={{ mt: -2, ml: 3.7, width: '41%' }} size="small">
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "8px 16px",
                            backgroundColor: "#0f212e",
                            color: "white",
                            border: "1px solid #b1bad3",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                    >
                        <Typography>
                            {countryCode ? `Selected: ${countryCode}` : "Select Country Code"}
                        </Typography>
                        <ExpandMoreIcon />
                    </div>
                </FormControl>

                {/* Dropdown */}
                {isOpen && (
                    <div
                        style={{
                            marginTop: "3px",
                            marginLeft: "31px",
                            backgroundColor: "#0f212e",
                            color: "white",
                            border: "1px solid #b1bad3",
                            width: "50%",
                            maxHeight: "180px",
                            overflowY: "auto",
                        }}
                    >
                        {countryCodes.map((item) => (
                            <Typography
                                key={item.code}
                                onClick={() => {
                                    setCountryCode(item.code);
                                    setIsOpen(false); // Close dropdown after selection
                                }}
                                sx={{
                                    padding: "8px 16px",
                                    cursor: "pointer",
                                    "&:hover": { backgroundColor: "#1a2c38" },
                                }}
                            >
                                {item.name} {item.code}
                            </Typography>
                        ))}
                    </div>
                )}



                {/* Phone Number Input */}
                <p className="mt-0 mb-2 ml-8 mx-4 py-2 text-sm font-medium">Phone Number</p>
                <FormControl sx={{ mt: -2, ml: 0 }}>
                    <TextField
                        // placeholder="Enter Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        sx={{
                            color: "white",
                            width: "140%",
                            marginLeft: "30px",
                            backgroundColor: "#0f212e",
                            "& .MuiOutlinedInput-root": {
                                border: "1px  border-gray-500",
                                height: "40px",
                                "&:hover": {
                                    border: "2px solid #b1bad3",
                                },
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
                            height: "40px"
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
