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
      <div className="relative">
        <img src={ListorWallet} alt="ListorWallet" className="w-full" />
        <IconButton
          onClick={closeWallet}
          className="hover:text-white text-[#B1BAD3] absolute top-10 right-10 "
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "#B1BAD3",
            ":hover": { color: "white" },
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
      <DialogActions className="bg-[#1a2c38]">
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

// import React, { useState } from "react";
// import Setupwallet from "../Profile/Walletpageview/Setupwallet";
// import { Dialog, IconButton } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import ListorWallet from "../../assets/img/ListorWallet.png";

// const Wallet = ({ closeWallet }) => {
//   const [openSetupWallet, setOpenSetupWallet] = useState(false);

//   const handleSetupWallet = () => {
//     setOpenSetupWallet(true);
//   };

//   const handleCloseSetupWallet = () => {
//     setOpenSetupWallet(false);
//     closeWallet();
//   };

//   return (
//     <>
//       {!openSetupWallet ? (
//         <Dialog
//           open
//           onClose={closeWallet}
//           maxWidth="sm"
//           fullWidth
//           sx={{
//             "& .MuiDialog-paper": {
//               width: { xs: "95%", sm: "90%", md: "60%" },
//               borderRadius: "10px",
//             },
//           }}
//         >
//           <div className="relative">
//             <img src={ListorWallet} alt="ListorWallet" className="w-full" />
//             <IconButton
//               onClick={closeWallet}
//               sx={{
//                 position: "absolute",
//                 top: 10,
//                 right: 10,
//                 color: "#B1BAD3",
//                 ":hover": { color: "white" },
//               }}
//             >
//               <CloseIcon />
//             </IconButton>
//           </div>
//           <div className="bg-[#1a2c38] text-white px-4 pb-4 pt-8 flex gap-y-8 flex-col">
//             <div className="flex flex-col gap-y-2">
//               <p className="font-bold text-xl">
//                 Let's set up your wallet & get started!
//               </p>
//               <p>
//                 Confirm your email & quickly verify your account details to get
//                 started using Listor. This will allow you to deposit & withdraw
//                 your funds seamlessly.
//               </p>
//             </div>
//             <button
//               onClick={handleSetupWallet}
//               className="w-full bg-[#1475E1] text-white text-sm font-bold px-5 py-[0.9375rem] hover:bg-[#106bb5] rounded"
//             >
//               Setup Wallet
//             </button>
//           </div>
//         </Dialog>
//       ) : (
//         <Setupwallet closeSetupWallet={handleCloseSetupWallet} />
//       )}
//     </>
//   );
// };

// export default Wallet;
