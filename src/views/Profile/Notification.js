import React from "react";
import {
    IconButton,
    Menu,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsIcon from "@mui/icons-material/Notifications";
import notification from "../../assets/img/Notification.png";
import { useDispatch, useSelector } from "react-redux";
import { setAnchorEl } from "../../features/auth/authSlice";

const Notification = () => {
    const { anchorEl } = useSelector((state) => state.auth);
    const dispatch = useDispatch()

    const handleMenuClose = () => {
        dispatch(setAnchorEl(null))
    };

    const isMenuOpen = (menuType) => {
        return anchorEl?.dataset?.menuType === menuType;
    };

    return (
        <Menu
            anchorEl={anchorEl}
            open={isMenuOpen("notifications")}
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
                        alt="Not Found"
                    />
                </div>
                <p className="text-white font-medium text-sm">No Notifications Available</p>
                <p className="text-[#b1bad3]">Your interactions will be visible here</p>
            </div>
        </Menu >
    );
};

export default Notification;
