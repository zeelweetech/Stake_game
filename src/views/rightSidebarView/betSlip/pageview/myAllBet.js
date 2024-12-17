import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Typography, FormControl, TextField } from "@mui/material";
import sportsTable from "../../../../assets/img/sportsTable.png"

function MyAllBet() {
    const [gameMenu, setGameMenu] = useState("Active");
    const [dropdownOpen, setDropdownOpen] = useState(false);


    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const menuItems = [
        { label: "Active" },
        { label: "It has been fixed" },
    ];

    return (
        <div className="h-screen bg-[#0f212e] ">
            {/* <div className=" text-white p-4 z-50 rounded-md shadow-b-50"> */}
            <div className="bg-[#1a2c38], text-white">
                <div className="flex flex-col items-center justify-start h-full bg-[#0f212e]">
                  <div className="flex justify-center w-full mb-4">
                    <div className=" bg-[#1a2c38] flex rounded-full p-[4px] space-x-1 font-bold">
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
                </div>
              </div>
            {/* </div> */}
            <hr className="border-t-2 border-gray-600" />

            <div className="flex justify-center p-20">
                <div>
                    <div className="flex justify-center">
                        <img src={sportsTable} alt="Sports" />
                    </div>
                    <p className="text-xs">Bet Slip Is Empty.</p>
                    <p className="text-xs">Start Betting Now!</p>
                </div>
            </div>
            <div className="text-center">
                <button className="text-white bg-sky-600 py-2 px-6 rounded font-medium">
                    View All
                </button>
            </div>
        </div>


    )
}
export default MyAllBet