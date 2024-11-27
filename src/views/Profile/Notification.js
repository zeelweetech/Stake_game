import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, IconButton, Menu } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsIcon from "@mui/icons-material/Notifications";
import notification from "../../assets/img/Notification.png"; // import the notification image

const Notification = () => {
    const [openDialog, setOpenDialog] = useState(true); // state for managing Dialog open/close
    const [anchorEl, setAnchorEl] = useState(null); // anchor for positioning the menu

    // Open menu when the icon is clicked
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Close menu when the close icon is clicked
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Dialog
            open={openDialog}
            onClose={() => setOpenDialog(false)}
            maxWidth="sm"
            fullWidth
            sx={{ color: "white", borderRadius: 0 }}
        >
            <DialogTitle sx={{ backgroundColor: "#1a2c38", color: "#b1bad3" }}>
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-lg flex items-center space-x-2">
                        <NotificationsIcon
                            className="text-[#b1bad3]"
                            fontSize="small"
                        />
                        <span>Notifications</span>
                    </h1>
                    <IconButton onClick={() => setOpenDialog(false)} sx={{ color: "white" }}>
                        <CloseIcon />
                    </IconButton>
                </div>
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: "#1a2c38", color: "white" }}>
    
</DialogContent>
            {/* Menu for notifications */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)} // Check if the menu is open
                onClose={handleMenuClose}
                PaperProps={{
                    sx: {
                        width: "350px",
                        background: "#0f212e",
                    },
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                sx={{ mt: 1.5, ml: 5 }}
            >
                <div className="text-center">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center font-semibold text-white space-x-2">
                            <NotificationsIcon
                                className="text-[#b1bad3]"
                                fontSize="small"
                            />
                            <p>Notifications</p>
                        </div>
                        <IconButton onClick={handleMenuClose}>
                            <CloseIcon className="text-white font-semibold" />
                        </IconButton>
                    </div>
                    <div className="flex justify-center pt-8 pb-6">
                        <img
                            src={notification}
                            className="w-16 h-16 md:w-24 md:h-20"
                            alt="Notification"
                        />
                    </div>
                    <p className="text-white font-medium text-sm">
                        No Notifications Available
                    </p>
                    <p className="text-[#b1bad3]">
                        Your interactions will be visible here
                    </p>
                </div>
            </Menu>
        </Dialog>
    );
};

export default Notification;
