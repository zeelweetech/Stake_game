import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import EmojiPicker from 'emoji-picker-react';
import { useDispatch, useSelector } from "react-redux";
import { setEmoji } from "../../../features/auth/emojiSlice";
import { Country } from "./country";
const chatSocket = io('http://192.168.29.203:3002', { path: '/ws' });

const ChatApp = ({ onClose }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(Country[0]);
  const dispatch = useDispatch();
  const messagesEndRef = useRef(null);
  const selectedEmoji = useSelector((state) => state.emoji.selectedEmoji);
  const emojiPickerRef = useRef(null);
  const dropDownRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView();
    }
  }, [messages]);

  useEffect(() => {
    chatSocket.emit("joinCountry", selectedCountry.countryName);
    chatSocket.on("chatMessage", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

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
      const taggedUserId = "user456";
      const newMessageData = {
        userId,
        content: message,
        country: selectedCountry.countryName,
        taggedUserId,
        createdAt: new Date(),
      };
      console.log("sdknkadmfcna,m....", newMessageData);

      chatSocket.emit("chatMessage", newMessageData);
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
    setEmojiPickerVisible(false)
  };

  const handleEmojiClick = (emoji) => {
    const emojiString = emoji.emoji;
    setMessage((prevMessage) => prevMessage + emojiString);
    dispatch(setEmoji(emojiString));
    setEmojiPickerVisible(false);
  };

  const toggleEmojiPicker = () => {
    setEmojiPickerVisible(!emojiPickerVisible);
    setDropdownOpen(false);

  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emojiPickerVisible && emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
        setEmojiPickerVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [emojiPickerVisible]);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownOpen && dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    };
  }, [dropdownOpen])

  return (
    <div className="text-white p-2 rounded-md shadow-lg relative bg-[#0f212e] flex flex-col h-screen">
      <IconButton onClick={onClose} sx={{ color: "white", position: "absolute", top: 9, right: 8 }}>
        <CloseIcon fontSize="small" />
      </IconButton>

      {/* Dropdown for countries */}
      <div className="inline-block text-left">
        <button onClick={toggleDropdown}
          className="inline-flex justify-start w-full bg-[#0f212e] px-4 py-2 text-sm font-medium text-white">
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
            <div ref={dropDownRef} className="absolute top-full shadow-lg text-black font-medium rounded-sm py-2 z-10">
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
      <div className="overflow-y-auto flex-grow h-96">
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 rounded-md mb-2 ${msg.isNewUser ? "border-[#2F4553]" : "bg-[#213743]"}`}>
            {msg.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {/* Message input and send button */}
      <div className="bg-[#213743] p-3 relative w-full">
        <div className="flex items-center text-white sticky bg-[#0f212e] w-full">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full p-3 border-2 border-gray-700 bg-[#0f212e] text-sm text-white"
            placeholder="Type your message..."
          />
          <div className="absolute right-2 bottom-2 cursor-pointer" onClick={toggleEmojiPicker}>
            😊
          </div>
        </div>
        {/* Send button */}
        <div className="flex items-center justify-end relative">
          <button onClick={sendMessage} className="bg-[#1fff20] text-black font-semibold text-sm px-7 py-2 my-2.5 rounded-sm">
            Send
          </button>
        </div>
        {/* Emoji Picker */}
        {emojiPickerVisible && (
          <div ref={emojiPickerRef} className="absolute bottom-32 left-0 z-50 bg-gray-700 rounded-lg shadow-lg">
            <EmojiPicker
                        onEmojiClick={(_, emoji) => handleEmojiClick(emoji)}
                        className="custom-emoji-picker"
                        height={300} 
                        width={300}  
                        size="25"
                        searchDisabled
                        suggestedEmojisMode={false}
                        previewConfig
                        skinTonesDisabled
                    />
          
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatApp;


// {emojiPickerVisible && (
//   <div ref={emojiPickerRef} className="absolute bottom-32 left-0 z-50 bg-gray-700 rounded-lg shadow-lg">
//     <EmojiPicker
//       onEmojiClick={(_, emoji) => handleEmojiClick(emoji)}
//    />
  
//   </div>
// )}