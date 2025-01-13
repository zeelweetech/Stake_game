import React, { useState, useEffect } from "react";
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

// Function to decode the token
const decodedToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decoded = JSON.parse(atob(token.split(".")[1])); // Decode JWT token
      return decoded;
    } catch (e) {
      console.error("Error decoding token:", e);
      return null;
    }
  }
  return null;
};

const Verify = ({ setVerify }) => {
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");

  useEffect(() => {
    const decoded = decodedToken();
    if (decoded) {
      setEmail(decoded?.email || "");
    }
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Dialog
      open
      onClose={() => setVerify(false)}
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
          <h2 className="text-lg text-[#b1bad3] font-extrabold italic font-sans hover:cursor-pointer">
            Listor
          </h2>
          <IconButton onClick={() => setVerify(false)}>
            <CloseIcon className="text-[#b1bad3]" />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>
        <h2 className="text-white text-xl">Confirm your email</h2>
        <p>
          Please check your email & click the Verification link to
          activate your account.
        </p>
        <div className="text-white pt-3">Email<span className="text-red-500"> *</span></div>
        <input
          autoFocus
          placeholder="Email"
          name="email"
          type="text"
          value={email}
          onChange={handleEmailChange}
          className={`bg-[#0f212e] border-2 border-[#2F4553] hover:border-[#557086] focus:outline-none 
            text-white w-full h-10 px-2`}
          onFocus={(e) => {
            e.target.style.borderColor = '#2f4553'; 
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#2f4553'; 
          }}
        />
        {errors.email && (
          <div style={{ color: 'red', marginTop: '4px' }}>{errors.email}</div>
        )}
        <div className="text text-white text-end">Resend email</div>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => setVerify(false)}
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
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Verify;