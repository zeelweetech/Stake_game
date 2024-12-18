import React from "react";
import { Dialog, DialogTitle, IconButton, Button } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../../resources/utility";

const LogoutDialog = ({closeLogoutDialog}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    removeCookie("token");
    navigate("/"); 
    window.location.reload(); 
  };

  const handleClose = () => {
    closeLogoutDialog()
    // navigate("/"); 
  };

  return (
    <Dialog
      open
      onClose={handleClose} 
      maxWidth="sm"
      fullWidth
      sx={{
        "& .MuiDialog-paper": { borderRadius: 3 },
        width: { xs: "95%", sm: "90%", md: "60%" },
        margin: "auto",
      }}
    >
      <DialogTitle sx={{ backgroundColor: "#1a2c38", color: "#b1bad3" }}>
        <div className="flex justify-between items-center w-full rounded-3xl">
          <h1 className="text-base flex items-center space-x-2 text-white font-semibold">
            <div className="mr-2 space-x-2">
              <svg
                className="w-[1rem] h-[1rem]"
                fill="#b1bad3"
                viewBox="0 0 64 64"
              >
                <path d="M23.174 48.96h15.174v-6.506h8V56.96H23.174V64L0 56.96V7.04L23.174 0v7.04h23.174v14.506h-8V15.04H23.174v33.92Zm25.332-25.895L64 32l-15.494 8.934V36h-16.16v-8h16.16v-4.934Z" />
              </svg>
            </div>
            Logout
          </h1>
          <IconButton onClick={handleClose} sx={{ color: "#b1bad3" }}>
            <CloseIcon />
          </IconButton>
        </div>

        <div className="mb-4 text-[#b1bad3] text-base">
          <p>Are you sure you want to end your session and log out?</p>
        </div>
        <Button
          onClick={handleLogout}
          sx={{
            backgroundColor: "#E9113C",
            color: "white",
            height: "50px",
            "&:hover": { backgroundColor: "#ba0e30" },
          }}
          fullWidth
        >
          <div className="font-semibold">Log out</div>
        </Button>
      </DialogTitle>
    </Dialog>
  );
};

export default LogoutDialog;
