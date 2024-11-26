import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Wallet = () => {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});

  return (
    <>
      <div>
          

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          maxWidth="sm"
          fullWidth
          sx={{
            "& .MuiPaper-root": {
              borderRadius: "6px",
              backgroundColor: "#0f212e",
              color: "#b1bad3",
            },
          }}
        >
          <DialogTitle>
            <div className="flex justify-between items-center w-full">
              <h2 className="text-lg text-[#b1bad3]">Listor</h2>

              <IconButton>
                <div
                  onClick={() => setOpen(false)}
                  className="text-[#b1bad3] text-lg"
                >
                  Exit
                </div>
              </IconButton>
            </div>
          </DialogTitle>
          <DialogContent>
            <div className="h-96">
              <h2 className="text-white text-xl">Confirm your email</h2>
              <p>
                Please check your email & click the Verification link to
                activate your account
              </p>
              <div className="text-white pt-3">Email</div>
              <TextField
                autoFocus
                placeholder="Email"
                name="Email"
                type="text"
                fullWidth
                error={!!errors.commissionPercentage}
                helperText={errors.commissionPercentage}
                sx={{
                  my: 1,
                  input: {
                    color: "#b1bad3",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#2f4553",
                    },
                    "&:hover fieldset": {
                      borderColor: "#2f4553",
                    },
                  },
                }}
              />
              <div className="text-white text-end">Resend email</div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => setOpen(false)}
              sx={{
                width: "100%",
                backgroundColor: "rgba(20, 117, 225)",
                px: "1rem",
                py: "0.5rem",
                color: "#ffffff",
                border: "1px solid rgba(20, 117, 225)",
                "&:hover": {
                  backgroundColor: "rgba(20, 117, 225)",
                  color: "#fffff",
                },
              }}
            >
              continue
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default Wallet;
