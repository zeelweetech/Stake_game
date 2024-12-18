import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { MdOutlineEventNote } from "react-icons/md";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

const socket = io("http://localhost:3000"); // Adjust the URL as needed

const ChatApp = ({ onClose }) => {
  const [country, setCountry] = useState("India");
  const [countries, setCountries] = useState(["India", "USA", "UK", "Australia"]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Join the initial country
    socket.emit("joinCountry", country);
    console.log("...........",socket);
    

    // Listen for incoming messages
    socket.on("chatMessage", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    // Listen for chat history when changing countries
    socket.on("changeCountryResponse", (newChat) => {
      setMessages(newChat);
    });

    return () => {
      socket.off("chatMessage");
      socket.off("changeCountryResponse");
    };
  }, [country]);

  const sendMessage = () => {
    if (message.trim()) {
        const userId = "USER_128"; // Replace with actual user ID
        socket.emit("chatMessage", { userId, content: message, "taggedUser  Id": null });        setMessage("");
    }
};

  const changeCountry = (newCountry) => {
    setCountry(newCountry);
    socket.emit("changeCountry", newCountry);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="text-white p-2 rounded-md shadow-lg relative">
      <IconButton
        onClick={onClose}
        sx={{ color: "white", position: "absolute", top: 8, right: 8 }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
      <div className="inline-block text-left mb-4">
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full bg-[#0f212e] px-4 py-2 text-sm font-medium text-white"
        >
          <MdOutlineEventNote size={20} color="#0ffff" />
          <span className="ml-2">Stake: {country}</span>
          {dropdownOpen ? (
            <ChevronDownIcon className="ml-2 h-5 w-5" />
          ) : (
            <ChevronUpIcon className="ml-2 h-5 w-5" />
          )}
        </button>
        {dropdownOpen && (
          <div className="relative">
            <div className="absolute top-full shadow-lg left-1/2 mt-2 text-black font-medium rounded-sm px-4 py-2 shadow-sm z-10 w-max text-center">
              {countries.map((item, index) => (
                <div
                  key={index}
                  onClick={() => changeCountry(item)}
                  className={`cursor-pointer px-4 py-2 text-white hover:bg-gray-600 ${
                    item === country ? "bg-gray-600" : ""
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="mt-4">
        <div className="overflow-y-auto h-60">
          {messages.map((msg, index) => (
            <div key={index} className="p-2 bg-gray-800 rounded-md mb-2">
              {msg.content} {/* Adjust based on your message structure */}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="flex mt-2">
          <input type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded-md"
            placeholder="Type your message..."
          />
          <button
            onClick={sendMessage}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;

// import React, { useState, useEffect, useRef } from "react";
// import io from "socket.io-client";
// import CloseIcon from "@mui/icons-material/Close";
// import { IconButton } from "@mui/material";
// import { MdOutlineEventNote } from "react-icons/md";
// import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

// const socket = io("http://localhost:3000");

// const ChatApp = ({ onClose }) => {
//   const [country, setCountry] = useState("India");
//   const [countries, setCountries] = useState(["India", "USA", "UK","Australiya"]);
//   const [customCountry, setCustomCountry] = useState("");
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const messagesEndRef = useRef(null);

//   // Country change effects
//   useEffect(() => {
//     socket.emit("join_country", country);
//     console.log(">>>>>>>>>........",socket.country);
    

//     socket.on("chat_history", (history) => {
//       setMessages(history.map((msg) => msg.message));
//     });

//     socket.on("receive_message", (newMessage) => {
//       setMessages((prevMessages) => [...prevMessages, newMessage.message]);
//     });

//     return () => {
//       socket.off("chat_history");
//       socket.off("receive_message");
//     };
//   }, [country]);

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const sendMessage = () => {
//     if (message.trim()) {
//       const username = "USER_128";
//       socket.emit("send_message", { username, country, message });
//       setMessage("");
//     }
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const addCustomCountry = () => {
//     if (customCountry.trim() && !countries.includes(customCountry.trim())) {
//       setCountries((prev) => [...prev, customCountry.trim()]);
//       setCountry(customCountry.trim());
//       setCustomCountry("");
//     }
//   };

//   return (
//     <div className="text-white p-2 rounded-md shadow-lg relative">
//       <IconButton
//         onClick={onClose}
//         sx={{ color: "white", position: "absolute", top: 8, right: 8 }}
//       >
//         <CloseIcon fontSize="small" />
//       </IconButton>
//       <div className="inline-block text-left mb-4">
//         <button
//           onClick={toggleDropdown}
//           className="inline-flex justify-center w-full bg-[#0f212e] px-4 py-2 text-sm font-medium text-white"
//         >
//           <MdOutlineEventNote size={20} color="#0ffff" /> 

//           <span className="ml-2">Stake:{country}</span>
//           {dropdownOpen ? (
//             <ChevronDownIcon className="ml-2 h-5 w-5" />
//           ) : (
//             <ChevronUpIcon className="ml-2 h-5 w-5" />
//           )}
//         </button>
//         {dropdownOpen && (
//           <div className="relative">
//             <div className="absolute top-full shadow-lg left-1/2 mt-2 text-black font-medium rounded-sm px-4 py-2 shadow-sm z-10 w-max text-center">
//             {countries.map((item, index) => (
//               <div
//                 key={index}
//                 onClick={() => {
//                   setCountry(item);
//                   setDropdownOpen(false);
//                 }}
                
//                 className={`cursor-pointer px-4 py-2 text-white hover:bg-gray-600 ${
//                   item === country ? "bg-gray-600" : ""
//                 }`}

//               >
//                 {item}
//               </div>
//                 // <div className="tooltip-arrow w-2 h-3 bg-white rotate-45 absolute top-[-6px] left-1/2 "></div>

//             )
//              <div className="tooltip-arrow w-2 h-3 bg-white rotate-45 absolute top-[-6px] left-1/2 "></div>
//             )}
//              </div>
//             {/* if any country add as you */}
            
//             {/* <div className="px-4 py-2">
//               <input
//                 type="text"
//                 placeholder="Add Country"
//                 value={customCountry}
//                 onChange={(e) => setCustomCountry(e.target.value)}
//                 className="w-full px-2 py-1 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
//               />
//               <button
//                 onClick={addCustomCountry}
//                 className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
//               >
//                 Add
//               </button>
//             </div> */}
//           </div>
//         )}
//       </div>
//       {/* <div className="chat-box bg-gray-800 p-4 rounded-lg h-96 overflow-y-auto">
//         {messages.map((msg, idx) => (
//           <div key={idx} className="text-white mb-2">
//             {msg}
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </div> */}
//       {/* <div className="mt-4 flex">
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Type your message..."
//           className="flex-1 px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
//         />
//         <button
//           onClick={sendMessage}
//           className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           Send
//         </button>
//       </div> */}
//     </div>
//   );
// };

// export default ChatApp;