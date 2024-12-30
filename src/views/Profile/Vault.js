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
            setAmount(currency.split(' ')[0]);
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
            <DialogTitle sx={{ backgroundColor: "#1a2c38", color: "#b1bad3" }}>
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-lg flex items-center space-x-2">
                        <span className="mr-2">
                            <PiVaultFill />
                        </span>
                        Vault
                    </h1>
                    <IconButton onClick={closeVault} sx={{ color: "white" }}>
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
                                <PiCurrencyBtcFill color="#FFD700" />
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
                                "&:hover": { backgroundColor: "rgba(20, 117, 225, var(--tw-bg-opacity))" },
                            }}
                            onClick={gameMenu === "Deposit" ? handleDeposit : handleWithdraw}
                        >
                            {gameMenu === "Deposit" ? "Deposit to Vault" : "Withdraw to Vault"}
                        </Button>
                    </div>

                </div>

            </DialogContent>
            <div className="bg-[#0f212e] w-full p-6 py-4">
                <p className="text-gray-400 p-2">Improve your account security with Two-Factor Authentication</p>
                <Button
                    sx={{
                        backgroundColor: "#213743",
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
                    <p className="text-gray-400 p-2">Learn more about Vault</p>
                </div>
            </div>

        </Dialog>
    );
};

export default Vault;
