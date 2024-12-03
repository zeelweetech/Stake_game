import { useState } from "react";
import AllBets from "../../component/GameTable/AllBets";
import { BiSolidNotepad } from "react-icons/bi"; // Make sure to import this
import { Link } from "react-router-dom"; // Ensure this is imported
import Loader from "../../component/Loader"; // Import your Loader component
import DialogContent from "@mui/material/DialogContent"; // Import DialogContent if using Material-UI

function AllBet() {
    const [loading, setLoading] = useState(false);
    const [gameMenu, setGameMenu] = useState("AllBets");

    const menuItems = [
        { label: "AllBets" },
        { label: "High Rollers" },
        { label: "Race Leaderboard" },
    ];

    return (
        <div className="flex justify-center h-full bg-[#1a2c38]">
            {loading ? (
                <Loader />
            ) : (
                <div>
                        <DialogContent sx={{ backgroundColor: "#1a2c38", color: "white" }}>
                            <div className="flex flex-col items-center justify-start h-full bg-[#1a2c38]">
                                <div className="flex justify-center w-full mb-4">
                                    <div className="bg-[#0f212e] flex rounded-full p-[4px] space-x-1 font-bold">
                                        {menuItems.map((item) => (
                                            <button
                                                key={item.label}
                                                className={`py-2 lg:px-5 rounded-full flex justify-center items-center text-sm ${gameMenu === item.label ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"}`}
                                                onClick={() => setGameMenu(item.label)}
                                            >
                                                <p className="text-white">{item.label}</p>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                {gameMenu === "AllBets" ? (
                                    <AllBets />
                                ) : gameMenu === "High Rollers" ? (
                                    <p>High Rollers content goes here.</p>
                                ) : gameMenu === "Race Leaderboard" ? (
                                    <p>Race Leaderboard content goes here.</p>
                                ) : null}
                            </div>
                        </DialogContent>
                  
                </div>
            )}
        </div>
    );
}

export default AllBet;