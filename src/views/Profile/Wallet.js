import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Wallet = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      sx={{
        color: "white",
        borderRadius: 0, 
      }}
    >
      <DialogTitle sx={{ backgroundColor: "#1a2c38", color: "#b1bad3" }}>
        <div className="flex justify-between items-center w-full">
          <h2 className="text-lg">Listor</h2>
          <IconButton onClick={handleClose} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: "#1a2c38", color: "white" }}>
        <p className="font-bold text-2xl py-2 p-6">Let's setup your wallet & get started!</p>
        <div>
          <p className="p-6">
            Confirm your email & quickly verify your account details to get started using Stake.
            This will allow you to deposit & withdraw your funds seamlessly.
          </p>
        </div>
      </DialogContent>
      <DialogActions sx={{ backgroundColor: "#1a2c38" }}>
        <Button
          onClick={handleClose}
          sx={{
            color: "#ffffff",
            backgroundColor: "#1475E1", // Sky blue color for the button
            width: "100%", // Makes the button take the full width
            padding: "10px", // Adds padding for better button appearance
            "&:hover": {
              backgroundColor: "#106bb5", // Darker sky blue when hovered
            },
          }}
        >
          Setup Wallet
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Wallet;
