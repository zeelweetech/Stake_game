import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, IconButton, Button } from "@mui/material";
import { Logout as LogoutIcon, Close as CloseIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../../resources/utility";

const LogoutDialog = () => {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        removeCookie("token");
        navigate("/");
        window.location.reload();
    };
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            maxWidth="sm"
            fullWidth
            sx={{ "& .MuiDialog-paper": { borderRadius: 2 } }}
        >
            <DialogTitle sx={{ backgroundColor: "#1a2c38", color: "#b1bad3" }}>
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-lg flex items-center space-x-2">
                        <span className="mr-2">
                            <LogoutIcon />
                        </span>
                        Logout
                    </h1>
                    <IconButton onClick={() => setOpen(false)} sx={{ color: "white" }}>
                        <CloseIcon />
                    </IconButton>
                </div>
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: "#1a2c38", color: "white"}}>
                <div className="mb-4">
                    <p>Are you sure you want to end your session and log out?</p>
                </div>
                <Button
                    onClick={handleLogout}

                    sx={{
                        backgroundColor: "#E9113C",
                        color: "white",
                        height: "50px",
                          "&:hover": { backgroundColor: "#E9113C" },

                    }}
                    fullWidth
                >
                    Log out
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default LogoutDialog;
