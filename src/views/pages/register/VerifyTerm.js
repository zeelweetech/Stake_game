import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useDispatch, useSelector } from "react-redux";
import { closeVerifyTermModel } from "../../../features/auth/authSlice";

function VerifyTerm({ verifyTermModel, setVerifyTermModel }) {
  const dispatch = useDispatch();
  const { isVerifyTermModelOpen } = useSelector((state) => state.auth);

  const handleClose = () => {
    dispatch(closeVerifyTermModel());
  };

  return (
    <div>
      <Dialog
        open={isVerifyTermModelOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "6px",
            backgroundColor: "#1a2c38",
            width: "32%",
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
          <div className="relative text-[#b1bad3]">
            <KeyboardBackspaceIcon
              sx={{ fontSize: 20 }}
              className="absolute top-1 left-3"
            />
            <p className="text-center font-semibold">
              Step 2/2: Read and accept the terms and conditions
            </p>
          </div>
          <div>
            <iframe
              src="https://sites.google.com/view/stakew-terms/home"
              className="overflow-y-auto w-full h-[22rem]"
              title="stack"
            ></iframe>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default VerifyTerm;
