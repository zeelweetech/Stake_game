import React from "react";
import { Dialog, DialogTitle } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function VerifyTerm({ verifyTermModel, setVerifyTermModel }) {
  const handleClose = () => {
    setVerifyTermModel(false);
  };

  return (
    <div>
      <Dialog
        open={verifyTermModel}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "6px",
            backgroundColor: "#1a2c38",
            padding: "0px 35px",
          },
        }}
      >
        <div>
          <div className="relative">
            <DialogTitle
              id="alert-dialog-title"
              className="text-center w-full text-white"
            >
              Create an Account
            </DialogTitle>
            <CloseIcon
              onClick={handleClose}
              className="absolute top-3 right-3 cursor-pointer text-white"
            />
          </div>
          <div>
            <KeyboardBackspaceIcon />
            <p className="text-[#b1bad3] text-center font-semibold">
              Step 2/2: Read and accept the terms and conditions
            </p>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default VerifyTerm;
