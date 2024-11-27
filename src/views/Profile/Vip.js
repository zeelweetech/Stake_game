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
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MdEmojiEvents } from "react-icons/md";

const Vip = () => {

    const [open, setOpen] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(null); // For dropdown
    const [searchValue, setSearchValue] = useState(""); // For search field
    const [selectedCurrency, setSelectedCurrency] = useState(""); // Selected value from dropdown
    const [gameMenu, setGameMenu] = useState("Deposit"); // Menu state

    const menuItems = [
        { label: "Progress" },
        { label: "Benifit" },
    ];


    return(
      <Dialog
      open={open}
      onClose={() => setOpen(false)}
      maxWidth="sm"
      fullWidth
      sx={{
          color: "white",
          borderRadius: 0,
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
                                    className={`py-2 lg:px-5 rounded-full flex justify-center items-center text-sm ${
                                         gameMenu === item.label ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                                    }`}
                                    onClick={() => setGameMenu(item.label)}
                                >
                                    <p className="text-white">{item.label}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                    </DialogContent>
        
      </Dialog>
    )

}
export default Vip