
import {Button} from "@mui/material";
import React, { useEffect, useState } from "react";
import { decodedToken } from "../../../resources/utility";
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
    const [responsiveMobile, setResponsiveMobile] = useState(window.innerWidth);
    const decoded = decodedToken();
    const userId = decoded?.userId;
    const countryCodes = [
        { code: "+1", name: "United States" },
        { code: "+44", name: "United Kingdom" },
        { code: "+91", name: "India" },
        { code: "+61", name: "Australia" },
        { code: "+81", name: "Japan" },
    ];
    useEffect(() => {
        const handleResize = () => {
            setResponsiveMobile(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        // Cleanup event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);
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
        <div>
            {responsiveMobile > 768 ? (
                <div className="bg-[#0f212e] rounded-lg p-10 space-y-10">
                    <div className="bg-[#1a2c38] text-white rounded-lg h-64 w-120 pt-3 px-10">
                        {/* Email Section */}
                        <div className="py-3 text-xl">
                            Email
                            <div className="border-b pt-2 border-gray-500 w-[95%] mt-1"></div>
                        </div>
                        <div>
                            <p className="mt-0 mb-2 py-2 text-sm font-medium text-gray-400">Email</p>

                            <input
                                className="bg-[#0f212e] p-2 xl:w-96 w-full"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="border-b p-2 1px border-gray-400 mt-1"></div>
                        </div>

                        {/* Buttons Section */}
                        <div className="mt-4" style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
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
                    <div className="bg-[#1a2c38] text-white rounded-lg py-4 h-96 w-120 p-10">
                        <div className="py-3 font-bold text-xl">Phone Number</div>
                        <p className="font-normal text-sm pt-2 mt-1 text-gray-400">
                            We only service areas that are listed in the available country code list.
                        </p>
                        <div className="border-b pt-4 border-gray-500 w-[95%] mt-1"></div>

                        {/* Country Code Dropdown */}
                        <p className="mt-0 mb-2 py-2 text-sm font-medium text-gray-400"> Country Code </p>
                        <div className="relative mt-[-0.5rem] xl:w-[50%] w-full">
                            <div
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex items-center justify-between xl:w-[85%] w-full p-2 bg-[#0f212e] text-white border border-[#b1bad3] rounded cursor-pointer">
                                <span>{countryCode ? `Selected: ${countryCode}` : "Select Country Code"}</span>
                                {isOpen ? (
                                    <ChevronUpIcon className="ml-2 h-5 w-5" />
                                ) : (
                                    <ChevronDownIcon className="ml-2 h-5 w-5" />
                                )}
                            </div>
                            {isOpen && (
                                <div
                                    className="absolute z-10 xl:w-[85%] w-full bg-[#0f212e] text-white border border-[#b1bad3] max-h-[170px] overflow-y-auto rounded">
                                    {countryCodes.map((item) => (
                                        <div
                                            key={item.code}
                                            onClick={() => {
                                                setCountryCode(item.code);
                                                // setIsOpen(false); 
                                            }}
                                            className="p-2 cursor-pointer hover:bg-[#1a2c38]"
                                        >
                                            {item.name} {item.code}
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>
                        {/* Phone Number Input */}
                        <p className="mt-0 mb-2 py-2 text-sm font-medium text-gray-400 ">Phone Number</p>
                        <input
                            placeholder="Enter Phone number"
                            className="bg-[#0f212e] p-2 xl:w-[43%] w-full"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <div className="border-b p-2 1px border-gray-400 mt-1"></div>

                        {/* Submit Button */}
                        <div className="flex justify-end mt-4">
                            <Button
                                variant="contained"
                                color="success"
                                onClick={handleSubmitPhone}
                                sx={{ color: "black" }}
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            ) : null}

            {responsiveMobile <= 768 && (
                <div className="bg-[#0f212e] rounded-lg p-10 space-y-10">
                    <div className="bg-[#1a2c38] text-white rounded-lg h-64 w-120 pt-3 px-10">
                        {/* Email Section */}
                        <div className="py-3 text-xl">
                            Email
                            <div className="border-b pt-2 border-gray-500 w-[95%] mt-1"></div>
                        </div>
                        <div>
                            <p className="mt-0 mb-2 py-2 text-sm font-medium text-gray-400">Email</p>

                            <input
                                className="bg-[#0f212e] p-2 xl:w-96 w-full"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="border-b p-2 1px border-gray-400 mt-1"></div>
                        </div>

                        {/* Buttons Section */}
                        <div className="mt-4" style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
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
                    <div className="bg-[#1a2c38] text-white rounded-lg py-4 h-96 w-120 p-10">
                        <div className="py-3 font-bold text-xl">Phone Number</div>
                        <p className="font-normal text-sm pt-2 mt-1 text-gray-400">
                            We only service areas that are listed in the available country code list.
                        </p>
                        <div className="border-b pt-4 border-gray-500 w-[95%] mt-1"></div>

                        {/* Country Code Dropdown */}
                        <p className="mt-0 mb-2 py-2 text-sm font-medium text-gray-400"> Country Code </p>
                        <div className="relative mt-[-0.5rem] xl:w-[50%] w-full">
                            <div
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex items-center justify-between xl:w-[80%] w-full p-2 bg-[#0f212e] text-white border border-[#b1bad3] rounded cursor-pointer">
                                <span>{countryCode ? `Selected: ${countryCode}` : "Select Country Code"}</span>
                                {isOpen ? (
                                    <ChevronUpIcon className="ml-2 h-5 w-5" />
                                ) : (
                                    <ChevronDownIcon className="ml-2 h-5 w-5" />
                                )}
                            </div>
                            {isOpen && (
                                <div
                                    className="absolute z-10 xl:w-[80%] w-full bg-[#0f212e] text-white border border-[#b1bad3] max-h-[170px] overflow-y-auto rounded">
                                    {countryCodes.map((item) => (
                                        <div
                                            key={item.code}
                                            onClick={() => {
                                                setCountryCode(item.code);
                                                // setIsOpen(false); 
                                            }}
                                            className="p-2 cursor-pointer hover:bg-[#1a2c38]"
                                        >
                                            {item.name} {item.code}
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>
                        {/* Phone Number Input */}
                        <p className="mt-0 mb-2 py-2 text-sm font-medium text-gray-400 ">Phone Number</p>
                        <input
                            placeholder="Enter Phone number"
                            className="bg-[#0f212e] p-2 xl:w-[43%] w-full"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <div className="border-b p-2 1px border-gray-400 mt-1"></div>

                        {/* Submit Button */}
                        <div className="flex justify-end mt-4">
                            <Button
                                variant="contained"
                                color="success"
                                onClick={handleSubmitPhone}
                                sx={{ color: "black" }}
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default Generals;
