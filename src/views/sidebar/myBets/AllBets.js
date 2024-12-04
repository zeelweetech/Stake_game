// import { useState } from "react";
// import AllBets from "../../component/GameTable/AllBets";
// import { BiSolidNotepad } from "react-icons/bi"; 
// import { Link } from "react-router-dom"; 
// import Loader from "../../component/Loader"; 
// import DialogContent from "@mui/material/DialogContent"; 

// function AllBet() {
//     const [loading, setLoading] = useState(false);
//     const [gameMenu, setGameMenu] = useState("AllBets");

//     const menuItems = [
//         { label: "AllBets" },
//         { label: "High Rollers" },
//         { label: "Race Leaderboard" },
//     ];

//     return (
//         <div className="flex justify-center h-full bg-[#1a2c38]">
//             {loading ? (
//                 <Loader />
//             ) : (
//                 <div>
//                     <DialogContent sx={{ backgroundColor: "#1a2c38", color: "white" }}>
//                     <div className="flex flex-col justify-center h-full bg-[#1a2c38]">
//                     <div className="flex justify-start w-full mb-4">
//                         <div className="bg-[#0f212e] flex rounded-full p-[4px] space-x-1 font-bold">
//                             {menuItems.map((item) => (
//                                         <button
//                                             key={item.label}
//                                                 className={`py-2.5 lg:px-5 rounded-full flex justify-start items-center text-sm 
//                                                     ${gameMenu === item.label ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"}`}
//                                             onClick={() => setGameMenu(item.label)}
//                                         >
//                                             <p className="text-white">{item.label}</p>
//                                         </button>
//                                     ))}
//                                 </div>
//                             </div>
//                             <div>
//                             {gameMenu === "AllBets" ? (
//                                 <AllBets />
//                             ) : gameMenu === "High Rollers" ? (
//                                 <p className="text-center">High Rollers content goes here.</p>
//                                 // <AllBets />
//                             ) : gameMenu === "Race Leaderboard" ? (
//                                 <p className="text-center">Race Leaderboard content goes here.</p>
//                                 // <AllBets />
//                             ) : null}
//                             </div>
//                         </div>
//                     </DialogContent>

//                 </div>
//             )}
//         </div>
//     );
// }

// export default AllBet;