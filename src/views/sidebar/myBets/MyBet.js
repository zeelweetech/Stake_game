import { useEffect, useState } from "react";
import Loader from "../../component/Loader";
import { BiSolidNotepad } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Button, DialogContent } from "@mui/material";
import MyBets from "../../component/GameTable/MyBets";
import Sports from "./Sports";
import AllBet from "./AllBets";
import AllBets from "../../component/GameTable/AllBets";
import { useSelector } from "react-redux";

function MyBet() {
    const [loading, setLoading] = useState(false);
    const [gameMenu, setGameMenu] = useState("Casino");
    const { isBetslipOpen } = useSelector((state) => state.betslip);
    const { isChatOpen } = useSelector((state) => state.chat);
    const { openMenubar } = useSelector((state) => state.auth);

    const menuItems = [
        { label: "Casino" },
        { label: "Sports" },
    ];
    const [IsGameMenu, setIsGameMenu] = useState("AllBets");

    const subMenuItems = [
        { label: "AllBets" },
        { label: "High Rollers" },
        { label: "Race Leaderboard" },
    ];
    return (
        <div className="flex justify-center h-full bg-[#1a2c38]">
            {loading ? (
                <Loader />
            ) : (
                <div className="text-white font-bold pt-6 lg:px-3 xl:px-10">
                    <div className="flex items-center mx-3 mt-8 space-x-2">
                        <BiSolidNotepad
                            size={28}
                            className="text-[#b1bad3] hover:text-white"
                        />
                        <Link className="text-lg font-medium text-white">My Bets</Link>
                    </div>
                    <div>
                        <DialogContent sx={{ backgroundColor: "#1a2c38", color: "white" }}>
                            {/* Menu Section */}
                            <div className="flex flex-col justify-center h-full bg-[#1a2c38]">
                                <div className="flex justify-start w-full mb-4">
                                    <div className="bg-[#0f212e] flex rounded-full p-[4px] space-x-1 font-bold">
                                        {menuItems.map((item) => (
                                            <button
                                                key={item.label}
                                                className={`py-2.5 lg:px-5 rounded-full flex justify-start items-center text-sm 
                                                    ${gameMenu === item.label
                                                        ? "bg-[#4d718768]"
                                                        : "hover:bg-[#4d718768]"
                                                    }`}
                                                onClick={() => setGameMenu(item.label)}
                                            >
                                                <p className="text-white">{item.label}</p>
                                            </button>
                                        ))}
                                    </div>
                                </div>


                                <div className={`w-full ${isBetslipOpen || isChatOpen && openMenubar ? "max-w-screen-lg" : "xl:max-w-screen-xl lg:max-w-screen-md md:max-w-screen-sm"} mx-auto`}>
                                    {gameMenu === "Casino" ? <MyBets /> : <Sports />}
                                </div>
                            </div>
                        </DialogContent>
                    </div>
                    <div>
                        <DialogContent sx={{ backgroundColor: "#1a2c38", color: "white" }}>
                            <div className="flex flex-col justify-center h-full bg-[#1a2c38]">
                                <div className="flex justify-start w-full mb-4">
                                    <div className="bg-[#0f212e] flex rounded-full p-[4px] space-x-1 font-bold">
                                        {subMenuItems.map((item) => (
                                            <button
                                                key={item.label}
                                                className={`py-2.5 lg:px-5 rounded-full flex justify-start items-center text-sm 
                                                    ${IsGameMenu === item.label ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"}`}
                                                onClick={() => setGameMenu(item.label)}
                                            >
                                                <p className="text-white">{item.label}</p>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className={`w-full ${isBetslipOpen || isChatOpen && openMenubar ? "max-w-screen-lg" : "max-w-screen-xl lg:max-w-screen-md md:max-w-screen-sm"} mx-auto`}>
                                    {IsGameMenu === "AllBets" ? (
                                        <AllBets />
                                    ) : IsGameMenu === "High Rollers" ? (
                                        <p className="text-center">High Rollers content goes here.</p>
                                        // <AllBets />
                                    ) : IsGameMenu === "Race Leaderboard" ? (
                                        <p className="text-center">Race Leaderboard content goes here.</p>
                                        // <AllBets />
                                    ) : null}
                                </div>
                            </div>
                        </DialogContent>

                    </div>
                </div>
            )}
        </div>
    );
}

export default MyBet;
