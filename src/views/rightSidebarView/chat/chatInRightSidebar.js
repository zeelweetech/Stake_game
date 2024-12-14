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
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

function ChatApp({openMenubar, toggleSidebar}) {
    // const [isMobile, setIsMobile] = useState(window.innerWidth <= 786);
    const [openDialog, setOpenDialog] = useState(true);
    //  const [dropdownVisible, setDropdownVisible] = useState(null);

    // const toggleDropdown = (index) => {
    //     // Ensure sidebar opens when dropdown is clicked
    //     if (!openMenubar) toggleSidebar();
    //     setDropdownVisible(dropdownVisible === index ? null : index);
    //   };

    // useEffect(() => {
    //     const handleResize = () => {
    //         setIsMobile(window.innerWidth < 786);
    //     };

    //     window.addEventListener("resize", handleResize);

    //     ChatSocket.connect();

    //     ChatSocket.on("connect", () => {
    //     });

    //     ChatSocket.on("disconnect", () => {
    //     });
    //     console.log(`???????????`, ChatSocket);

    //     ChatSocket.on("connect_error", (error) => {
    //         console.error("Crash Connection Error:", error);
    //     });

    //     return () => {
    //         ChatSocket.off("message");
    //         ChatSocket.off("connect");
    //         ChatSocket.off("disconnect");
    //         ChatSocket.off("connect_error");
    //         ChatSocket.disconnect();
    //         window.removeEventListener("resize", handleResize);
    //     };
    // }, []);

    return () => (
        <div>
            <h2 className="text-xl font-bold mb-4">Stake: Challenges</h2>
            {/* Your BetSlip content goes here */}
            <p>Your bets will appear here.</p>
            <IconButton onClick={() => setOpenDialog(false)} sx={{ color: "white" }}>
                <CloseIcon />
            </IconButton>
        </div>


    )
}
export default ChatApp