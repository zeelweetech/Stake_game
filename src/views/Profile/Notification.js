import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Menu,
    MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsIcon from "@mui/icons-material/Notifications";
import notification from "../../assets/img/Notification.png"; 

const Notification = () => {
    const [openDialog, setOpenDialog] = useState(true); 
    const [anchorEl, setAnchorEl] = useState(null); 


   
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Dialog
            open={openDialog}
            onClose={() => setOpenDialog(false)}
            maxWidth="sm"
            fullWidth
            // sx={{
            //     "& .MuiPaper-root": {
            //         backgroundColor: "#1a2c38",
            //         color: "#b1bad3",
            //     },
            // }}
            sx={{ width: { xs: "95%", sm: "90%", md: "60%" }, margin: "auto", color: "#b1bad3",backgroundColor: "#1a2c38",
      borderRadius: "10px",  }}
        >
            {/* <DialogTitle>
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-lg flex items-center space-x-2">
                        <NotificationsIcon className="text-[#b1bad3]" fontSize="small" />
                        <span>Notifications</span>
                    </h1>
                    <IconButton onClick={() => setOpenDialog(false)} sx={{ color: "white" }}>
                        <CloseIcon />
                    </IconButton>
                </div>
            </DialogTitle> */}
            <DialogContent>
                
                <div>
                    <div className="text-center">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center font-semibold text-white space-x-2">
                                <NotificationsIcon className="text-[#b1bad3]" fontSize="small" />
                                <p>Notifications</p>
                            </div>
                            <IconButton onClick={() => setOpenDialog(false)} sx={{ color: "white" }}>
                        <CloseIcon />
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
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default Notification;
