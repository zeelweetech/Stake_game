import {
    Dialog,
    DialogContent,
    DialogTitle,
    FormControl,
    IconButton,
    Menu,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MdEmojiEvents } from "react-icons/md";
import { getMedalsProgress } from "../../services/LoginServices";
import { decodedToken } from "../../resources/utility";
import { Link, useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import InfoIcon from "@mui/icons-material/Info";
import card from "../../assets/img/card.png";
import casino from "../../assets/img/casino.avif";
// import sports from "../../assets/img/sports.avif";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";

const Vip = () => {

    const [open, setOpen] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(null); // For dropdown
    const [searchValue, setSearchValue] = useState(""); // For search field
    const [selectedCurrency, setSelectedCurrency] = useState(""); // Selected value from dropdown
    const [gameMenu, setGameMenu] = useState("Deposit"); // Menu state
    const { userId } = useParams();
    const [progressData, setProgressData] = useState([]);
    const [loading, setLoading] = useState(false);
    const decoded = decodedToken();

    useEffect(() => {
        getVipProgress();
    }, [userId]);

    console.log("decoded?.userId,=====", userId);

    const getVipProgress = async () => {
        try {
            const response = await getMedalsProgress({
                userId: decoded?.userId,
            });
            setProgressData(response || []);
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch users: ", error);
            setLoading(false);
        }
    };

    const menuItems = [
        { label: "Progress" },
        { label: "Benifit" },
    ];



    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            maxWidth="sm"
            fullWidth
            sx={{
                color: "white",
                borderRadius: 8,
                // borderRadius: "4px",
            }}
        >
            <DialogTitle sx={{ backgroundColor: "#1a2c38", color: "#b1bad3" }}>
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-lg flex items-center space-x-2">
                        <span className="mr-2">
                            <MdEmojiEvents />
                        </span>
                        VIP
                    </h1>
                    <IconButton onClick={() => setOpen(false)} sx={{ color: "white" }}>
                        <CloseIcon />
                    </IconButton>
                </div>
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: "#1a2c38", color: "white" }}>
                <div className="flex flex-col items-center justify-start h-full bg-[#1a2c38]">
                    {/* Menu Buttons: Deposit / Withdraw */}
                    <div className="flex justify-center w-full mb-4">
                        <div className="bg-[#0f212e] flex rounded-full p-[4px] space-x-1 font-bold">
                            {menuItems.map((item) => (
                                <button
                                    key={item.label}
                                    className={`py-2 lg:px-5 rounded-full flex justify-center items-center text-sm ${gameMenu === item.label ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                                        }`}
                                    onClick={() => setGameMenu(item.label)}
                                >
                                    <p className="text-white">{item.label}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
                <div className="w-full">
                    <div
                        className=" flex flex-col lg:flex-row  justify-center">
                        <div
                            style={{
                                border: "8px solid transparent",
                                borderImage: "linear-gradient(to bottom, #213743, #0f212e) 1",
                            }}
                            className="mb-6 lg:mb-0"
                        >
                            <div className="bg-[#0f212e] w-full md:w-80 px-5 py-7 border text-white border-[#2f4553]">
                                <div className="flex justify-between items-center">
                                    <p>{progressData?.userName || "User"}</p>
                                    <FaRegStar size={22} color="#2f4553" />
                                </div>
                                <div className="flex justify-between mt-10">
                                    <div className="flex items-center space-x-2.5">
                                        <Link className="text-sm font-medium">
                                            Your VIP Progress
                                        </Link>
                                        <FaArrowRight
                                            size={13}
                                            className="mt-1"
                                            color="#b1bad3"
                                        />
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <p className="text-sm font-medium">
                                            {progressData?.vipProgress || "0.00%"}
                                        </p>
                                        <InfoIcon fontSize="small" className="text-[#b1bad3]" />
                                    </div>
                                </div>
                                <div className="relative w-full my-2.5 h-[0.625em]">
                                    <div
                                        className="h-full w-full shadow-lg rounded-[10px]"
                                        style={{ right: "100%", backgroundColor: "#2f4553" }}
                                    ></div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex items-center space-x-1">
                                        <FaRegStar
                                            size={18}
                                            color={
                                                progressData?.medal === "Bronze"
                                                    ? "#c69c6d"
                                                    : progressData?.medal === "Silver"
                                                        ? "#b2cccc"
                                                        : progressData?.medal === "Gold"
                                                            ? "#fed100"
                                                            : progressData?.medal === "Platinum"
                                                                ? "#6fdde7"
                                                                : "#2f4553"
                                            }
                                        />
                                        <p className="text-sm text-[#b1bad3] font-medium">
                                            {progressData?.medal || "None"}
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <FaRegStar
                                            size={18}
                                            color={
                                                progressData?.medal === "Bronze"
                                                    ? "#c69c6d"
                                                    : progressData?.medal === "Silver"
                                                        ? "#b2cccc"
                                                        : progressData?.medal === "Gold"
                                                            ? "#fed100"
                                                            : progressData?.medal === "Platinum"
                                                                ? "#6fdde7"
                                                                : "#2f4553"
                                            }
                                        />
                                        <p className="text-sm text-[#b1bad3] font-medium">
                                            {progressData?.nextMedal || "Bronze"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="font-bold text-xl p-3">Want to achieve the next level?</p>
                    <div className="flex items-center space-x-5 mb-2">
                        <div className="bg-[#0f212e] p-2 rounded-lg" >
                            <img src={card} alt="Casino Icon" />
                        </div>
                        <div>
                            <p className="text-sm font-bold">Wager on Casino </p>
                            <p className="text-sm ">Play & wager on any casino games</p>

                        </div>
                    </div>
                    <div className="flex items-center space-x-5 mb-3">
                        <div className="bg-[#0f212e] p-2 rounded-lg" >
                            <SportsBaseballIcon className="text-[#b1bad3] "
                                sx={{ fontSize: 20 }} />
                        </div>
                        <div>
                            <p className="text-sm font-bold">Bet on Sportsbook</p>
                            <p className="text-sm ">Place bets on upcoming & live sports</p>

                        </div>
                    </div>
                    <div className="flex items-center space-x-5">
                        <div className="bg-[#0f212e] p-2 rounded-lg" >
                            <SportsBaseballIcon className="text-[#b1bad3] "
                                sx={{ fontSize: 20 }} />
                        </div>
                        <div>
                            <p className="text-sm font-bold">Bet on Sportsbook</p>
                            <p className="text-sm ">Place bets on upcoming & live sports</p>

                        </div>
                    </div>
            

                </div>
            </DialogContent>

        </Dialog>
    )

}
export default Vip