import {
    Button,
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
import { PiCurrencyBtcFill, PiVaultFill } from "react-icons/pi";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Vault = ({ closeVault }) => {
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [selectedCurrency, setSelectedCurrency] = useState("0.00000000");
    const [gameMenu, setGameMenu] = useState("Deposit");
    const [amount, setAmount] = useState("");
    const [amountError, setAmountError] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const MAX_AMOUNT = 8;

    const handleDropdownOpen = (event) => setDropdownOpen(event.currentTarget);
    const handlePasswordChange = (value) => setPassword(value);
    const handleAmountChange = (value) => {
        const parsedValue = parseFloat(value);
        if (parsedValue < 1e-8 && value !== "") {
            setAmountError("The minimum value is 1e-8.");
        } else {
            setAmountError("");
        }
        setAmount(value);
    };

    const handleDropdownClose = (currency) => {
        if (currency) {
            setSelectedCurrency(currency);
            setAmount(currency);
        }
        setDropdownOpen(null);
    };

    const handleEnable2FA = () => {
        closeVault()
        navigate("/setting/security");
    };


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleMaxClick = () => {
        setAmount(MAX_AMOUNT.toString());
        setAmountError("");
    };

    const handleDeposit = () => {
        console.log("Depositing amount: ", amount);
        setAmount("");
        setPassword("");
    };

    const handleWithdraw = () => {
        console.log("Withdrawing amount: ", amount, " with password: ", password);
        setAmount("");
        setPassword("");
    };

    const currencyList = [
        `0.00000000 BTC `,
        "0.00000000 ETH",
        "0.00000000 LTC",
        "0.00000000 SOL",
        "0.00000000 BCH",
        "0.00000000 XOR",
    ];

    const menuItems = [
        { label: "Deposit" },
        { label: "Withdraw" },
    ];

    const filteredCurrencies = currencyList.filter((currency) =>
        currency.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <Dialog
            open
            onClose={closeVault}
            maxWidth="sm"
            fullWidth
            // sx={{ color: "white", borderRadius: 0 }}
            sx={{
                width: { xs: "95%", sm: "90%", md: "60%" }, margin: "auto", color: "white",
                borderRadius: "10px",
            }}
        >
            <DialogTitle sx={{ backgroundColor: "#1a2c38" }}>
                <div className="flex justify-between items-center w-full cursor-default">
                    <h1 className="text-lg flex items-center space-x-2 font-semibold text-white">
                        <span className="mr-2 text-[#b1bad3">
                            <PiVaultFill />
                        </span>
                        Vault
                    </h1>
                    <IconButton onClick={closeVault} className="hover:text-white cursor-pointer" sx={{ color: "#B1BAD3" }}>
                        <CloseIcon />
                    </IconButton>
                </div>
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: "#1a2c38", color: "white" }}>
                <div className="bg-[#1a2c38] flex flex-col items-center justify-center">
                    {/* Menu Buttons */}
                    <div>
                        <div className="bg-[#0f212e] flex rounded-full p-[5px] space-x-2 font-bold ">
                            {menuItems.map((item) => (
                                <button
                                    key={item.label}
                                    className={`py-2 px-6 md:px-5 rounded-full flex justify-center items-center text-sm ${gameMenu === item.label ? "bg-[#4d718768]" : "hover:bg-[#4d718768]"
                                        }`}
                                    onClick={() => setGameMenu(item.label)}
                                >
                                    <p className="text-white">{item.label}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Currency Section */}
                    <div className="w-full flex flex-col items-center mt-4">
                        <p className="text-sm font-medium text-gray-400 mb-2">Currency</p>
                        <div
                            onClick={handleDropdownOpen}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "8px 16px",
                                backgroundColor: "#0f212e",
                                color: "white",
                                border: "1px solid #b1bad3",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                            sx={{
                                width: { xs: "90%", sm: "50%", md: "35%" },
                                maxWidth: "400px",
                                margin: "auto",
                            }}
                        >

                            <Typography>{selectedCurrency}</Typography>
                            <ExpandMoreIcon />
                        </div>

                        <Menu
                            anchorEl={dropdownOpen}
                            open={Boolean(dropdownOpen)}
                            onClose={() => handleDropdownClose(null)}
                            PaperProps={{
                                style: {
                                    maxHeight: 300,
                                    width: 300,
                                    backgroundColor: "#1a2c38",
                                    color: "white",
                                },
                            }}
                        >
                            <div style={{ padding: "8px" }}>
                                <input
                                    type="text"
                                    placeholder="Search Currency"
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    style={{
                                        width: "100%",
                                        padding: "8px",
                                        backgroundColor: "#0f212e",
                                        color: "white",
                                        border: "1px solid #b1bad3",
                                        borderRadius: "4px",
                                    }}
                                />
                            </div>
                            {filteredCurrencies.map((currency) => (
                                <MenuItem
                                    key={currency}
                                    onClick={() => handleDropdownClose(currency)}
                                    sx={{
                                        backgroundColor: "#1a2c38",
                                        color: "white",
                                        "&:hover": { backgroundColor: "#4d718768" },
                                    }}
                                >
                                    {currency}
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>
                    {/* Amount Input Section */}
                    <div className="w-full flex flex-col mt-4">
                        <p className="text-sm font-medium text-gray-400 mb-2">Amount</p>
                        <div className="flex border-1 rounded border-[#2F4553] bg-[#2F4553] group">
                            <div className="relative flex w-full">
                                <input
                                    className="w-full pr-1.5 pl-2 py-1.5 rounded-l text-white border-2 hover:border-[#557086] focus:hover:border-[#557086] group-hover:border-[#557086] border-[#2F4553] focus:border-[#557086] bg-[#0f212e] focus:outline-none"
                                    type="number"
                                    placeholder="0.00"
                                />
                            </div>
                            <button
                                className=" hover:bg-[#5c849e68] px-5 py-[0.7rem] text-sm font-semibold hover:border-[#557086] hover:rounded-r"
                            >
                                Max
                            </button>
                        </div>
                        {amountError && (
                            <Typography color="error" sx={{ marginTop: "8px", fontSize: "0.875rem" }}>
                                {amountError}
                            </Typography>
                        )}
                    </div>
                    {/* Password Input Section for Withdraw */}
                    <div className="w-full">
                        {gameMenu === "Withdraw" && (
                            <div className="flex flex-col mt-3">
                                <p className="text-sm font-medium text-gray-400 mb-2">Password</p>
                                <FormControl sx={{ width: "100%" }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            backgroundColor: "#0f212e",
                                            border: "1px solid #b1bad3",
                                            borderRadius: "4px",
                                            color: "white",
                                            gap: "8px",
                                            minHeight: "30px",
                                        }}
                                    >
                                        <TextField
                                            placeholder="Enter Password"
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            onChange={(e) => handlePasswordChange(e.target.value)}
                                            sx={{
                                                flexGrow: 1,
                                                backgroundColor: "transparent",
                                                input: { color: "white" },
                                                "& .MuiOutlinedInput-root": {

                                                    height: "40px",
                                                    "& fieldset": { border: "none" },
                                                },
                                            }}
                                        />
                                        <IconButton onClick={togglePasswordVisibility} sx={{ color: "white" }}>
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </div>
                                </FormControl>
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex w-full justify-between mt-4">
                        <Button
                            sx={{
                                backgroundColor: "rgba(20, 117, 225, var(--tw-bg-opacity))",
                                color: "white",
                                width: "100%",
                                padding: "12px",
                                fontSize: "16px",
                                textTransform: "none",
                                "&:hover": { backgroundColor: "rgba(20, 117, 225, var(--tw-bg-opacity))" },
                            }}
                            onClick={gameMenu === "Deposit" ? handleDeposit : handleWithdraw}
                        >
                            {gameMenu === "Deposit" ? "Deposit from Wallet" : "Withdraw to Vault"}
                        </Button>
                    </div>
                </div>
            </DialogContent>
            <div className="bg-[#0f212e] w-full pt-4 px-4">
                <div className=" flex gap-y-3 flex-col">
                    <p className="text-[#B1BAD3] text-center cursor-default">Improve your account security with Two-Factor Authentication</p>
                    <button
                        onClick={handleEnable2FA}
                        className=" w-full px-4 py-2 rounded cursor-pointer text-white font-semibold bg-[#2F4553] hover:bg-[#557086]"
                    >
                        Enable 2FA
                    </button>
                </div>
            </div>
            <div className="p-4 bg-[#0f212e]">
                <p className="text-[#B1BAD3] hover:text-white text-center font-semibold cursor-pointer">Learn More About Vault</p>
            </div>
        </Dialog>
    );
};

export default Vault;
