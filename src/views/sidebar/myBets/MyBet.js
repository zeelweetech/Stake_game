import { useEffect, useState } from "react"
import Loader from "../../component/Loader"
import { BiSolidNotepad } from "react-icons/bi"
import { Link, useParams } from "react-router-dom"
import { getMyBets } from "../../../services/GameServices"
import { decodedToken } from "../../../resources/utility"
import { Button, DialogContent } from "@mui/material"
import MyBets from "../../component/GameTable/MyBets"
import Sports from "./Sports"
import AllBet from "./AllBets"

function MyBet() {
    // const { userId } = useParams();
    // const [betsData, setBetsData] = useState([]);
    const [loading, setLoading] = useState(false)
    // const decoded = decodedToken();
    // const [paginationModel, setPaginationModel] = useState({
    //     page: 0,
    //     pageSize: 10,
    // });
    // const [totalCount, setTotalCount] = useState(0);
    const [gameMenu, setGameMenu] = useState("Casino"); 

    const menuItems = [
        { label: "Casino" },
        { label: "Sports" },
    ];

    // useEffect(() => {
    //     getBetsData();
    //   }, [paginationModel?.page, paginationModel?.pageSize, userId]);
    

    // const getBetsData = async () => {
    //     try {
    //         const response = await getMyBets({
    //             userId: decoded?.userId,
    //             page: paginationModel?.page + 1,
    //             pageSize: paginationModel?.pageSize,
    //         });
    //         console.log(":::::::::::::",response);
    //         setBetsData(response?.response || []);
    //         setTotalCount(response?.pagination?.totalBets);
    //         setLoading(false);
            
            
    //     } catch (error) {
    //         console.error("Failed to fetch users: ", error);
    //         setLoading(false);
    //     }
    // }

    return (
        <div className="flex justify-center h-full bg-[#1a2c38]">
            {loading ? (
                <Loader />
            ) : (
                <div className="text-white font-bold pt-6 w-full max-w-screen-xl lg:px-3 xl:px-10">
                    <div className="flex items-center mx-3 mt-8 space-x-2">
                        <BiSolidNotepad size={28}
                            className="text-[#b1bad3] hover:text-white"
                        />
                        <Link className="text-lg font-medium text-white">My Bets</Link>
                    </div>
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


                    {gameMenu === "Casino" ? (
                        <MyBets />
                    ) 
                    : (
                        <Sports/>
                        
                    )
                    }
                </div>
                <div>
                    <AllBet/>
                </div>


            </DialogContent>
                    </div>
                </div>
            )}
        </div>
    )
}
export default MyBet