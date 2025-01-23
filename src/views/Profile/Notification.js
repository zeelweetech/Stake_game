import React, { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsIcon from "@mui/icons-material/Notifications";
import notification from "../../assets/img/Notification.png";
import { useDispatch, useSelector } from "react-redux";
import { setAnchorEl } from "../../features/auth/authSlice";

const Notification = () => {
  const { anchorEl } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [responsiveMobile, setResponsiveMobile] = useState(window.innerWidth);
  const notificationRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setResponsiveMobile(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        dispatch(setAnchorEl(null));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  const handleClose = () => {
    dispatch(setAnchorEl(null));
  };

  return (
    <div
      ref={notificationRef}
      className={`fixed top-16 right-0 md:right-[4rem] w-96 bg-[#0f212e] rounded-lg shadow-lg p-4 z-50 cursor-default ${
        anchorEl ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center font-semibold text-white gap-2">
          <NotificationsIcon className="text-[#b1bad3]" fontSize="small" />
          <p>Notifications</p>
        </div>
        <CloseIcon
          className="text-white cursor-pointer"
          onClick={handleClose}
        />
      </div>
      <div className="flex justify-center items-center mx-8 p-4 flex-col">
        <img
          src={notification}
          className="w-16 h-16 md:w-24 md:h-20 flex "
          alt="Not Found"
        />
        <p className="text-white font-medium text-sm text-center mt-5">
          No Notifications Available
        </p>
        <p className="text-[#b1bad3] text-sm text-center">
          Your interactions will be visible here
        </p>
      </div>
    </div>
  );
};

export default Notification;
