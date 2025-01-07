import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsIcon from "@mui/icons-material/Notifications";
import notification from "../../assets/img/Notification.png";
import { useDispatch, useSelector } from "react-redux";
import { setAnchorEl } from "../../features/auth/authSlice";

const Notification = () => {
    const { anchorEl } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [responsiveMobile, setResponsiveMobile] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setResponsiveMobile(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        // Cleanup event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const handleClose = () => {
        dispatch(setAnchorEl(null));

    };
    return (
        <div
            className="fixed top-14 right-8 md:right-36 w-80 bg-[#0f212e] rounded-lg shadow-lg p-4 z-50"
            style={{ display: anchorEl ? "block" : "none" }}
        >
            <div className="flex justify-between items-center">
                <div className="flex items-center font-semibold text-white space-x-2">
                    <NotificationsIcon className="text-[#b1bad3]" fontSize="small" />
                    <p>Notifications</p>
                </div>
                <CloseIcon className="text-white cursor-pointer" onClick={handleClose} />
            </div>
            <div className="flex justify-center pt-5 pb-2">
                <img
                    src={notification}
                    className="w-16 h-16 md:w-24 md:h-20"
                    alt="Not Found"
                />
            </div>
            <p className="text-white font-medium text-sm">No Notifications Available</p>
            <p className="text-[#b1bad3]">Your interactions will be visible here</p>
        </div>
    );
};

export default Notification;