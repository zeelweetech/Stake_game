import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  // DialogTitle,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ListorWallet from "../../assets/img/ListorWallet.png";

const Wallet = ({ closeWallet }) => {
  return (
    <Dialog
      open
      onClose={closeWallet}
      maxWidth="sm"
      fullWidth
      sx={{
        width: { xs: "95%", sm: "90%", md: "60%" },
        margin: "auto",
        color: "white",
        borderRadius: "10px",
      }}
    >
      <div style={{ position: "relative" }}>
        <img src={ListorWallet} alt="" style={{ width: "100%" }} />
        <IconButton
          onClick={closeWallet}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "white",
          }}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <DialogContent className="bg-[#1a2c38] text-white">
        <div className="flex gap-y-2 flex-col">
          <p className="font-bold text-2xl">
            Let's setup your wallet & get started!
          </p>
          <p>
            Confirm your email & quickly verify your account details to get
            started using Listor. This will allow you to deposit & withdraw your
            funds seamlessly.
          </p>
        </div>
      </DialogContent>
      <DialogActions sx={{ backgroundColor: "#1a2c38" }}>
        <Button
          onClick={closeWallet}
          sx={{
            color: "#ffffff",
            backgroundColor: "#1475E1",
            width: "100%",
            padding: "10px",
            "&:hover": {
              backgroundColor: "#106bb5",
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
