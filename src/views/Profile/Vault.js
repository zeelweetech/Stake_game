import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    FormControl,
    IconButton,
    InputAdornment,
    Menu,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material";
import { PiVaultFill } from "react-icons/pi";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Vault = () => {
    const [open, setOpen] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [selectedCurrency, setSelectedCurrency] = useState("");
    const [gameMenu, setGameMenu] = useState("Deposit");
    const [amount, setAmount] = useState("");
    const [amountError, setAmountError] = useState("");
    const [password, setPassword] = useState(""); // State to store password
    const [showPassword, setShowPassword] = useState(false); // State to toggle visibility
    const navigate = useNavigate()

    const MAX_AMOUNT = 8;

    const handleDropdownOpen = (event) => setDropdownOpen(event.currentTarget);
    const handleDropdownClose = () => setDropdownOpen(null);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validation logic here
        if (password) {
            const body = { password }; // Send password in request
        }
    };

 
        const handleEnable2FA = () => {
          
            navigate("/setting/security"); 
        };
  

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle visibility
    };

    const handleMaxClick = () => {
        setAmount(MAX_AMOUNT.toString());
        setAmountError("");
    };

    const handleDeposit = () => {
        console.log("Depositing amount: ", amount);
        setAmount("");
        setPassword(""); // Clear password after deposit
    };

    const handleWithdraw = () => {
        console.log("Withdrawing amount: ", amount, " with password: ", password);
        setAmount(""); // Reset amount after withdrawal
        setPassword(""); // Reset password after withdrawal
    };

    const currencyList = [
        "0.00000000 BTC",
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
            open={open}
            onClose={() => setOpen(false)}
            maxWidth="sm"
            fullWidth
            sx={{ color: "white", borderRadius: 0 }}
        >
            <DialogTitle sx={{ backgroundColor: "#1a2c38", color: "#b1bad3" }}>
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-lg flex items-center space-x-2">
                        <span className="mr-2">
                            <PiVaultFill />
                        </span>
                        Vault
                    </h1>
                    <IconButton onClick={() => setOpen(false)} sx={{ color: "white" }}>
                        <CloseIcon />
                    </IconButton>
                </div>
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: "#1a2c38", color: "white" }}>
                <div className="flex flex-col items-center justify-start h-full bg-[#1a2c38]">
                    {/* Menu Buttons */}
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

                    {/* Currency Section */}
                    <div className="w-full flex flex-col items-center mt-4">
                        <p className="text-sm font-medium text-gray-400 mb-2">Currency</p>
                        <FormControl sx={{ width: "35%" }}>
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
                            >
                                <Typography>{selectedCurrency}</Typography>
                                <ExpandMoreIcon />
                            </div>
                        </FormControl>
                        <Menu
                            anchorEl={dropdownOpen}
                            open={Boolean(dropdownOpen)}
                            onClose={handleDropdownClose}
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
                                <TextField
                                    placeholder="Search Currency"
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    sx={{
                                        backgroundColor: "#0f212e",
                                        input: { color: "white" },
                                        "& .MuiOutlinedInput-root": {
                                            borderColor: "#b1bad3",
                                            "&:hover fieldset": { borderColor: "#b1bad3" },
                                        },
                                    }}
                                />
                            </div>
                            {filteredCurrencies.map((currency) => (
                                <MenuItem
                                    key={currency}
                                    onClick={() => {
                                        setSelectedCurrency(currency);
                                        handleDropdownClose();
                                    }}
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
                        <FormControl sx={{ width: "100%" }}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    backgroundColor: "#0f212e",
                                    padding: "8px 12px",
                                    border: "1px solid #b1bad3",
                                    borderRadius: "4px",
                                    color: "white",
                                    gap: "8px",
                                }}
                            >
                                <TextField
                                    type="number"
                                    // placeholder="Enter amount"
                                    value={amount}
                                    onChange={(e) => handleAmountChange(e.target.value)}
                                    InputProps={{
                                        inputProps: { min: 0 },
                                    }}
                                    sx={{
                                        flexGrow: 1,
                                        backgroundColor: "transparent",
                                        input: { color: "white" },
                                        "& .MuiOutlinedInput-root": {
                                            height: "25px",
                                            "& fieldset": { border: "none" },
                                        },
                                    }}
                                />
                                <button
                                    onClick={handleMaxClick}
                                    style={{
                                        backgroundColor: "#4d718768",
                                        color: "white",
                                        borderRadius: "4px",
                                        border: "none",
                                        cursor: "pointer",
                                    }}
                                >
                                    Max
                                </button>
                            </div>
                        </FormControl>
                        {amountError && (
                            <Typography color="error" sx={{ marginTop: "8px", fontSize: "0.875rem" }}>
                                {amountError}
                            </Typography>
                        )}
                    </div>

                    {/* Password Input Section for Withdraw */}
                    {gameMenu === "Withdraw" && (
                        <div className="flex flex-col mt-4">
                            <p className="text-sm font-medium text-gray-400 mb-2">Password</p>
                            <FormControl sx={{ width: "100%", height: "25%" }}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        backgroundColor: "#0f212e",
                                        padding: "8px 12px",
                                        border: "1px solid #b1bad3",
                                        borderRadius: "4px",
                                        color: "white",
                                        gap: "8px",
                                        // minHeight: "10px"
                                    }}
                                >
                                    <TextField
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => handlePasswordChange(e.target.value)}
                                        // placeholder="Enter your password"
                                        sx={{
                                            flexGrow: 1,
                                            backgroundColor: "transparent",
                                            input: { color: "white" },
                                            "& .MuiOutlinedInput-root": {
                                                height: "10px",
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

                    {/* Action Buttons */}
                    <div className="flex w-full justify-between mt-4">
                        <Button
                            sx={{
                                backgroundColor: "rgba(20, 117, 225, var(--tw-bg-opacity));",
                                color: "white",
                                width: "100%",
                                "&:hover": { backgroundColor: "rgba(20, 117, 225, var(--tw-bg-opacity));" },
                            }}
                            onClick={gameMenu === "Deposit" ? handleDeposit : handleWithdraw}
                        >
                            {gameMenu}
                        </Button>
                    </div>
                    </div>

            </DialogContent>
            <div className="bg-[#0f212e] w-full p-6 py-4">
                    <p className="text-gray-400">Improve your account security with Two-Factor Authentication</p>
                    <Button
                                    sx={{
                                       backgroundColor: "rgba(20, 117, 225, 1)",
                                        color: "white",
                                        width: "100%",
                                        paddingTop: "2px",
                                        "&:hover": { backgroundColor: "gray-500" },
                                    }}
                                    onClick={handleEnable2FA}
                                >
                                    Enable 2FA
                                </Button>

                                <div>
                                    <p className="text-gray-400">Learn more about Vault</p>
                                </div>
                    </div>
               
        </Dialog>
    );
};

export default Vault;
