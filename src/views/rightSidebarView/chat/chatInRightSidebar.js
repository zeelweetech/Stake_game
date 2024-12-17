// import React, { useState, useEffect, useRef } from "react";
// import io from "socket.io-client";
// // import "./ChatApp.css";

import { useEffect, useState } from "react";
import { ChatSocket } from "../../../Socket/ChatSocket";
import { GridCloseIcon } from "@mui/x-data-grid";

// const socket = io("http://localhost:3000"); // Your server URL

// const ChatApp = () => {
//   const [country, setCountry] = useState("India"); // Only manage the selected country
//   const [countries, setCountries] = useState(["India", "USA", "UK"]); // Initial country list
//   const [message, setMessage] = useState(""); // Message input state
//   const [messages, setMessages] = useState([]); // Array to hold chat messages
//   const [customCountry, setCustomCountry] = useState(""); // Custom country input
//   const messagesEndRef = useRef(null); // Reference for auto-scrolling chat

//   // When the country is changed or on first render
//   useEffect(() => {
//     // Join selected country room
//     socket.emit("join_country", country);

//     // Receive chat history when the country changes
//     socket.on("chat_history", (history) => {
//       setMessages(history.map((msg) => msg.message)); // Map history to message array
//     });

//     // Receive new messages in real-time
//     socket.on("receive_message", (newMessage) => {
//       setMessages((prevMessages) => [...prevMessages, newMessage.message]);
//     });

//     return () => {
//       socket.off("chat_history");
//       socket.off("receive_message");
//     };
//   }, [country]);

//   // Scroll to bottom when new messages are added
//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const sendMessage = () => {
//     if (message.trim()) {
//       const username = "USER_128"; // Replace with actual username logic
//       socket.emit("send_message", { username, country, message });
//       setMessage(""); 
//     }
//   };

//   const addCustomCountry = () => {
//     if (customCountry.trim() && !countries.includes(customCountry.trim())) {
//       setCountries((prev) => [...prev, customCountry.trim()]); // Add new country to the list
//       setCountry(customCountry.trim()); // Switch to the new country
//       setCustomCountry(""); 
//     }
//   };

//   return (
//     <div className="chat-container">
//       <div className="input-field">
//         <h1>Chat in {country}</h1>
//         <select
//           value={country}
//           onChange={(e) => setCountry(e.target.value)} // Handle country selection
//         >
//           {countries.map((cntry, index) => (
//             <option key={index} value={cntry}>
//               {cntry}
//             </option>
//           ))}
//         </select>
//         <input
//           type="text"
//           value={customCountry}
//           onChange={(e) => setCustomCountry(e.target.value)}
//           placeholder="Add a country..."
//         />
//         <button onClick={addCustomCountry}>Add Country</button>
//       </div>

//       <div className="message-display">
//         {messages.map((msg, index) => (
//           <div style={{display: "flex", gap: "0.5em"}}>
//             <p key={index}>USER_128:</p>
//             <p style={{fontWeight: "inherit"}}> {msg}</p>
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </div>

//       <div className="message-box">
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Type a message..."
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default ChatApp
import React from "react";
import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";



function ChatApp({ onClose }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative bg-[#0f212e] inline-block text-white rounded-md shadow-lg h-screen">
      {/* Close Icon */}
      <IconButton onClick={onClose} sx={{ color: "white" }}>
        <CloseIcon />
      </IconButton>

      <div className="inline-block text-left mb-2">
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full rounded-md border bg-[#0f212e] px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2"
        >
          <span>BetSlip</span>
          {/* Display Chevron Icon */}
          {dropdownOpen ? (
            <ChevronDownIcon className="ml-2 h-5 w-5" />
          ) : (
            <ChevronUpIcon className="ml-2 h-5 w-5" />
          )}
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="origin-top-right right-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <button
                onClick={() => console.log("My Bets Clicked")}
                className="text-gray-700 block px-4 py-2 text-sm"
              >
                My Bets
              </button>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
              >
                BetSlip
              </a>
            </div>
          </div>
        )}
      </div>

      <p>
        Example content for the Betslip. This could include details about your current bets or other information.
      </p>
    </div>
  );
}

export default ChatApp;
