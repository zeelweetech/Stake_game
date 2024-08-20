import { Dialog, DialogContent } from "@mui/material";
import React from "react";

function Register({ setOpenPage, openPage }) {
  const handleClose = () => {
    setOpenPage(false);
  };
  return (
    <div>
      <Dialog
        open={openPage}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          ygedwyfh
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default Register;
