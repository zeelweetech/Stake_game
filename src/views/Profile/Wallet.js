// import React, { useState } from "react";
// import Modal from "react-modal";
// import { FaWallet } from "react-icons/fa"; 

// Modal.setAppElement("#root"); // For accessibility

// const WalletPage = () => {
//   const [isWalletPopupOpen, setIsWalletPopupOpen] = useState(false);
//   const [isContinuePopupOpen, setIsContinuePopupOpen] = useState(false);

//   const handleWalletClick = () => {
//     setIsWalletPopupOpen(true); // Open Wallet Popup
//   };

//   const handleCloseWalletPopup = () => {
//     setIsWalletPopupOpen(false); // Close Wallet Popup
//   };

//   const handleContinueClick = () => {
//     setIsContinuePopupOpen(true); // Open Continue Popup
//   };

//   const handleCloseContinuePopup = () => {
//     setIsContinuePopupOpen(false); // Close Continue Popup
//   };

//   return (
//     <div>
//       <h1>Wallet Page</h1>
//       <button onClick={handleWalletClick}>
//         <FaWallet /> Open Wallet Popup
//       </button>

//       {/* Wallet Popup */}
//       <Modal isOpen={isWalletPopupOpen} onRequestClose={handleCloseWalletPopup}>
//         <div className="popup-content">
//           <h2>Wallet</h2>
//           <p>This is where your wallet details will appear.</p>
//           <button onClick={handleContinueClick}>Continue</button>
//           <button onClick={handleCloseWalletPopup}>Close</button>
//         </div>
//       </Modal>

//       Continue Popup
//       <Modal isOpen={isContinuePopupOpen} onRequestClose={handleCloseContinuePopup}>
//         <div className="popup-content">
//           <h2>Continue</h2>
//           <p>This is where you can continue your wallet operation.</p>
//           <button onClick={handleCloseContinuePopup}>Close</button>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default WalletPage;
