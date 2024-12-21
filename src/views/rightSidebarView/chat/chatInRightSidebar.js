import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { MdOutlineEventNote } from "react-icons/md";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import EmojiPicker from 'emoji-picker-react';
import { useDispatch, useSelector } from "react-redux";
import { setEmoji } from "../../../features/auth/emojiSlice";
import { Country } from "./country";
import IndiaFlag from "../../../assets/svg/IndiaFlag.svg";  // Assuming IndiaFlag is a valid image

const chatSocket = io('http://192.168.29.203:3002', { path: '/ws' });

const ChatApp = ({ onClose }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(Country[0]); 
  const dispatch = useDispatch();

  const selectedEmoji = useSelector((state) => state.emoji.selectedEmoji);
  const messagesEndRef = useRef(null);

  useEffect(() => {

    chatSocket.emit("joinCountry", selectedCountry.countryName);
    console.log(">>>>>>",selectedCountry);
    

    chatSocket.on("chatMessage", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });
    console.log("/////////",chatSocket);
    

    chatSocket.on("changeCountryResponse", (newChat) => {
      setMessages(newChat);
    });

    return () => {
      chatSocket.off("chatMessage");
      chatSocket.off("changeCountryResponse");
    };
  }, [selectedCountry]); 

  const sendMessage = () => {
    if (message.trim()) {
      const userId = "USER_128"; 
      chatSocket.emit("chatMessage", { userId, content: message, taggedUserId: "user456" });
      setMessage("");
    }
  };

  const changeCountry = (newCountry) => {
    const countryObj = Country.find((item) => item.countryName === newCountry);
    setSelectedCountry(countryObj); 
    chatSocket.emit("changeCountry", newCountry);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleEmojiClick = (emoji) => {
    const emojiString = emoji.emoji;
    setMessage((prevMessage) => prevMessage + emojiString);
    dispatch(setEmoji(emojiString));
    setEmojiPickerVisible(false); // Optionally close the emoji picker after selection
  };

  const toggleEmojiPicker = () => {
    setEmojiPickerVisible(!emojiPickerVisible);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="text-white p-2 rounded-md shadow-lg relative">
      <IconButton onClick={onClose} sx={{ color: "white", position: "absolute", top: 8, right: 8 }}>
        <CloseIcon fontSize="small" />
      </IconButton>

      {/* Dropdown for countries */}
      <div className="inline-block text-left mb-4">
        <button onClick={toggleDropdown} className="inline-flex items-center justify-center w-full bg-[#0f212e] px-4 py-2 text-sm font-medium text-white">
          {selectedCountry.Icon && (
            <span className="mr-2">
              <img src={selectedCountry.Icon} alt={selectedCountry.countryName} className="h-5 w-5" />
            </span>
          )}
          <span className="ml-2">Listor: {selectedCountry.countryName}</span>
          {dropdownOpen ? (
            <ChevronDownIcon className="ml-2 h-5 w-5" />
          ) : (
            <ChevronUpIcon className="ml-2 h-5 w-5" />
          )}
        </button>

        {dropdownOpen && (
          <div className="relative">
            <div className="absolute top-full shadow-lg text-black font-medium rounded-sm py-2 z-10">
              {Country.map((item, index) => (
                <div key={index} onClick={() => changeCountry(item.countryName)} className="cursor-pointer w-36 pl-2 py-2 bg-white hover:bg-[#b1bad3]">
                  <div className="flex items-center space-x-2">
                    <img src={item.Icon} className="w-5" alt="Not Found" />
                    <p>{item.countryName}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Messages display */}
      <div className="overflow-y-auto flex-grow" style={{ overflowY: "scroll", height: "calc(88vh - 75px)", padding: "10px 0" }}>
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 rounded-md mb-2 ${msg.isNewUser ? "border-[#2F4553]" : "bg-[#213743]"}`}>
            {msg.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message input and send button */}
      <div className="bg-[#213743] p-1 relative">
        <div className="flex text-white sticky bg-[#0f212e] bottom-0 py-1">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-grow p-2 border border-gray-700 bg-[#0f212e] text-sm text-white"
            placeholder="Type your message..."
          />
          <div className="absolute right-2 bottom-2 cursor-pointer" onClick={toggleEmojiPicker}>
            😊
          </div>
        </div>

        {/* Send button */}
        <div className="flex items-center justify-end relative">
          <button onClick={sendMessage} className="bg-[#2e7d32] text-black text-sm px-4 py-2 rounded-sm">
            Send
          </button>
        </div>

        {/* Emoji Picker */}
        {emojiPickerVisible && (
          <div className="absolute bottom-16 left-0 z-50">
            <EmojiPicker
              set="apple"
              emojiSize={24}
              emojiSpacing={8}
              emojiVersion={12.0}
              onEmojiClick={handleEmojiClick}
              styles={{
                backgroundColor: "#2e4960",
                indicatorColor: "#b04c2d",
                fontColor: "lightgrey",
                searchBackgroundColor: "#263d51",
                tabsFontColor: "#8cdce4",
                searchFontColor: "lightgrey",
                skinTonePickerBackgroundColor: "#284155",
              }}
            />
          </div>
        )}
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
// import EmojiPicker from 'emoji-picker-react';
// import { useDispatch, useSelector } from "react-redux";
// import { setEmoji } from "../../../features/auth/emojiSlice";
// import { Country } from "./country";
// import IndiaFlag from "../../../assets/svg/IndiaFlag.svg"
// const chatSocket = io('http://192.168.29.203:3002', { path: '/ws' });

// const ChatApp = ({ onClose }) => {
//   // const [country, setCountry] = useState({
//   //   countryName: "India",
//   //   icon: IndiaFlag
//   // })
//   // const [countries, setCountries] = useState(["India", "USA", "UK", "Australia"]);
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
//   const messagesEndRef = useRef(null);
//   const dispatch = useDispatch();
//   const selectedEmoji = useSelector((state) => state.emoji.selectedEmoji);

//   useEffect(() => {
//     chatSocket.emit("joinCountry", Country);

//     chatSocket.on("chatMessage", (newMessage) => {
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//     });

//     chatSocket.on("changeCountryResponse", (newChat) => {
//       setMessages(newChat);
//     });
    
//     return () => {
//       chatSocket.off("chatMessage");
//       chatSocket.off("changeCountryResponse");
//     };
//   }, [Country]);

//   const sendMessage = () => {
//     if (message.trim()) {
//       const userId = "USER_128"; // Replace with actual user ID
//       chatSocket.emit("chatMessage", { userId, content: message, taggedUserId: "user456" });
//       setMessage("");
//     }
//   };

//   const changeCountry = (newCountry) => {
//     const countryObj = countryData.find((item) => item.countryName === newCountry);
//     const countryIcon = countryData.find((item) => item.Icon === newCountry);

//     console.log("..........",countryObj);
    
//     // newCountry(countryObj);
//     // setCountry(newCountry);
//     chatSocket.emit("changeCountry", newCountry);
//     setDropdownOpen(false);
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const handleEmojiClick = (emoji) => {
//     const emojiString = emoji.emoji; 
//     setMessage((prevMessage) => prevMessage + emojiString); 
//     dispatch(setEmoji(emojiString)); // Dispatch the selected emoji to the Redux store
//     setEmojiPickerVisible(false); // Optionally close the emoji picker after selection
//   };

//   const toggleEmojiPicker = () => {
//     setEmojiPickerVisible(!emojiPickerVisible);
//   };

//   const handleKeyPress = (event) =>{
//     if(event.key==="Enter"){
//       sendMessage(event);
//     }
//   }

//   const countryData = Country;

//   return (
//     <div className="text-white p-2 rounded-md shadow-lg relative">
//       <IconButton
//         onClick={onClose}
//         sx={{ color: "white", position: "absolute", top: 8, right: 8 }}
//       >
//         <CloseIcon fontSize="small" />
//       </IconButton>
//       <div className="inline-block text-left mb-4">
//       <button
//   onClick={toggleDropdown}
//   className="inline-flex items-center justify-center w-full bg-[#0f212e] px-4 py-2 text-sm font-medium text-white"
// >
//   {countryData.icon && (
//     <span className="mr-2">
//       <countryData.Icon className="h-5 w-5" />
//     </span>
//   )}
//   <span className="ml-2">Listor: {countryData.countryName}</span>
//   {dropdownOpen ? (
//     <ChevronDownIcon className="ml-2 h-5 w-5" />
//   ) : (
//     <ChevronUpIcon className="ml-2 h-5 w-5" />
//   )}
// </button>
//         {dropdownOpen && (
//           <div className="relative">
//             <div className="absolute top-full shadow-lg text-black font-medium rounded-sm py-2 z-10 ">
//               {countryData.map((item, index) => (
//                 <div
//                   key={index}
//                   onClick={() => changeCountry(item.countryName)}
                  
//                   className={cursor-pointer w-36 pl-2 py-2 bg-white hover:bg-[#b1bad3]}
//                 >
//                   <div className="flex items-center space-x-2">
//                     <img src={item.Icon} className="w-5" alt="Not Found" />
//                     <p>{item.countryName}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="overflow-y-auto flex-grow"
//         style={{
//           overflowY: "scroll",
//           height: "calc(88vh - 75px)",
//           padding: "10px 0 10px 0",
//         }}>
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={p-2 rounded-md mb-2 ${msg.isNewUser ? "border-[#2F4553]" : "bg-[#213743]"}}
//           >
//             {msg.content}
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </div>

//       <div className="bg-[#213743] p-1 relative">
//         <div className="flex text-white sticky bg-[#0f212e] bottom-0 py-1">
//           <input
//             type="text"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             onKeyPress={(event)=>handleKeyPress(event)}
//             className="flex-grow p-2 border border-gray-700 bg-[#0f212e] text-sm text-white"
//             placeholder="Type your message..."
//           />
//           <div
//             className="absolute right-2 bottom-2 cursor-pointer"
//             onClick={toggleEmojiPicker}
//           >
//             😊
//           </div>
//         </div>

//         <div className="flex items-center justify-end relative">
//           <svg
//             className="w-5 h-5 text-white bg-gray-500 mr-2"
//             fill="currentColor"
//             viewBox="0 0 64 64"
//           >
//             <path d="M22.8 8.547h36.774c0 .028.026.054.026.054h-.016a6.75 6.75 0 0 0-6.384 6.586v33.04l-.002-.02a6.8 6.8 0 0 1-6.786 7.246 6.8 6.8 0 0 1-6.786-7.226v-3.094H16V15.347a6.8 6.8 0 0 1 6.8-6.8Zm-.828 27.894h15.494V31.8H21.972v4.64Zm.002-12.4h24.8V19.4h-24.8v4.64Zm38.052-13.574h-.052A3.974 3.974 0 0 0 56 14.44v6.426h8V14.44a3.974 3.974 0 0 0-3.974-3.974ZM36.8 48.256H0a6.8 6.8 0 0 0 6.8 6.8h34.026c-2.694 0-4.026-3.04-4.026-6.8Z" />
//           </svg>
//           <button
//             onClick={sendMessage}
//             className="bg-[#2e7d32] text-black text-sm px-4 py-2 rounded-sm"
//           >
//             Send
//           </button>
//         </div>

//         {emojiPickerVisible && (
//           <div className="absolute bottom-16 left-0 z-50">
//             <EmojiPicker
//               set="apple"
//               emojiSize={24}
//               emojiSpacing={8}
//               emojiVersion={12.0}
//               onEmojiClick={handleEmojiClick}
//               styles={{
//                 backgroundColor: "#2e4960",
//                 indicatorColor: "#b04c2d",
//                 fontColor: "lightgrey",
//                 searchBackgroundColor: "#263d51",
//                 tabsFontColor: "#8cdce4",
//                 searchFontColor: "lightgrey",
//                 skinTonePickerBackgroundColor: "#284155",
//               }}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChatApp;