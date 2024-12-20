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
    { label: "Settled" },
  ];

  return (
    //  className="h-screen bg-[#0f212e] "bg-[#1a2c38]
    // <div>
    //     {/* <div className=" text-white p-4 z-50 rounded-md shadow-b-50"> */}
    //     <div className="bg-gray-400 text-white">
    //         <div className="flex flex-col items-center justify-start h-full ">
    //           <div className="flex justify-center w-full mb-4">
    //             <div className="bg-gray-500 flex rounded-full p-[4px] space-x-1 font-bold">
    //               {menuItems.map((item) => (
    //                 <button
    //                   key={item.label}
    //                   className={`py-2 lg:px-5 rounded-full flex justify-center items-center text-sm ${gameMenu === item.label ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"}`}
    //                   onClick={() => setGameMenu(item.label)}
    //                 >
    //                   <p className="text-white">{item.label}</p>
    //                 </button>
    //               ))}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     {/* </div> */}
    //     <hr className="border-t-2 border-gray-600" />

    //     <div className="flex justify-center p-20">
    //         <div>
    //             <div className="flex justify-center">
    //                 <img src={sportsTable} alt="Sports" />
    //             </div>
    //             <p className="text-xs">Bet Slip Is Empty.</p>
    //             <p className="text-xs">Start Betting Now!</p>
    //         </div>
    //     </div>
    //     <div className="text-center">
    //         <button className="text-white bg-sky-600 py-2 px-6 rounded font-medium">
    //             View All
    //         </button>
    //     </div>
    // </div>

    <div className="">
      <div className="flex justify-center w-full mb-4">
        <div className=" bg-[#1a2c38] flex rounded-full p-[4px] space-x-1 font-bold">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`py-2 lg:px-5 rounded-full flex justify-center items-center text-sm ${gameMenu === item.label ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"}`}
              onClick={() => setGameMenu(item.label)}
            >
              {item.label === "Active" && (
                <svg 
                  className="w-4 h-4 text-white mr-2"
                  fill="currentColor"
                  viewBox="0 0 64 64"
                  >
                    <path d="M34.713 2.677c2.854.002 5.61.42 8.008 1.148l.002.002.209.052C55.109 7.46 64 18.723 64 32.06c0 10.139-5.136 19.076-13.052 24.42l.108-.068a29.235 29.235 0 0 1-16.264 4.91 29.225 29.225 0 0 1-19.195-7.138l5.767-6.702a20.792 20.792 0 0 0 13.403 4.87c4.162 0 8.04-1.22 11.214-3.269l.073-.046c5.456-3.674 9.045-9.906 9.045-16.979 0-9.324-6.238-17.19-14.913-19.689l.146.036a20.88 20.88 0 0 0-5.62-.783h-.007c-10.136.056-18.523 7.496-20.073 17.328h5.207L9.932 43.022 0 28.95h5.661l.012-.13C7.275 14.172 19.65 2.76 34.711 2.677h.002ZM21.364 47.482l-.031-.027.031.027Zm22.587-1.232H27.049v-7.105l6.383-7.155-6.383-7.049v-7.103h16.902v7.103l-6.222 7.103 6.222 7.103v7.103Z"/>
                  </svg>
              )}
              {item.label === "Settled" && (
                <svg 
                  className="w-4 h-4 text-white mr-2"
                  fill="currentColor"
                  viewBox="0 0 64 64"
                  >
                    <path d="M32 0C14.326 0 0 14.326 0 32s14.326 32 32 32 32-14.326 32-32S49.674 0 32 0Zm-3.386 48L15.468 34.826l6.586-6.614 6.24 6.24 16.134-17.626 6.906 6.294L28.614 48Z"/>
                  </svg>
              )}
              <p className="text-white">{item.label}</p>
            </button>
          ))}
        </div>
      </div>
      <hr className="border-t-2 border-gray-600" />

      <div className="flex justify-center md:h-[28.7rem] py-36">
        <div>
          <div className="flex justify-center">
            <img src={sportsTable} alt="Sports" />
          </div>
          <p className="text-xs">Bet Slip Is Empty.</p>
          <p className="text-xs">Start Betting Now!</p>
        </div>
      </div>
      <div className="bg-[#1a2c38] py-4">
        <div className="text-center">
          <button className="text-white bg-[#2F4553] text-sm py-2 w-80 rounded font-medium">
            View All
          </button>
        </div>
      </div>

    </div>

  )
}
export default MyAllBet