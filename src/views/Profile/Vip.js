import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { MdEmojiEvents } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Progress from "./pageView/Progress";
import Benifit from "./pageView/Benifit";

const Vip = () => {
    const [open, setOpen] = useState(true);
    const [gameMenu, setGameMenu] = useState("Progress"); // Initially set to "Progress"
    const [progressData, setProgressData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/vip-club");
    };

    const menuItems = [
        { label: "Progress" },
        { label: "Benefit" },
    ];

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            maxWidth="sm"
            fullWidth
            // sx={{ color: "white", borderRadius: 8 }}
            sx={{
                width: { xs: "95%", sm: "90%", md: "60%" }, margin: "auto", color: "white",
                borderRadius: "10px",
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


                    {gameMenu === "Progress" ? (
                        <Progress />
                    ) : (
                        <Benifit />
                    )}
                </div>
                <div className="mt-4 text-center w-full bg-[#0f212e] text-white">
                    <Button
                        onClick={handleNavigate}
                        variant="contained"
                        sx={{
                            backgroundColor: "#0f212e",
                            color: "white",
                            "&:hover": { backgroundColor: "#09202a" },
                        }}
                        fullWidth
                    >
                        Learn more about being a Listor VIP
                    </Button>
                </div>


            </DialogContent>
        </Dialog>
    );
};

export default Vip;



