import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { MdOutlineEventNote } from "react-icons/md";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import EmojiPicker from 'emoji-picker-react';
import { useDispatch, useSelector } from "react-redux";
import { setEmoji } from "../../../features/auth/emojiSlice";

const chatSocket = io('http://192.168.29.203:3002', { path: '/ws' });

const ChatApp = ({ onClose }) => {
  const [country, setCountry] = useState("India");
  const [countries, setCountries] = useState(["India", "USA", "UK", "Australia"]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const messagesEndRef = useRef(null);
  const dispatch = useDispatch();
  const selectedEmoji = useSelector((state) => state.emoji.selectedEmoji);

  useEffect(() => {
    chatSocket.emit("joinCountry", country);

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
  }, [country]);

  const sendMessage = () => {
    if (message.trim()) {
      const userId = "USER_128"; // Replace with actual user ID
      chatSocket.emit("chatMessage", { userId, content: message, taggedUserId: "user456" });
      setMessage("");
    }
  };

  const changeCountry = (newCountry) => {
    setCountry(newCountry);
    chatSocket.emit("changeCountry", newCountry);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleEmojiClick = (emoji) => {
    const emojiString = emoji.emoji; // Get the emoji string
    setMessage((prevMessage) => prevMessage + emojiString); // Append emoji to message
    dispatch(setEmoji(emojiString)); // Dispatch the selected emoji to the Redux store
    setEmojiPickerVisible(false); // Optionally close the emoji picker after selection
  };

  const toggleEmojiPicker = () => {
    setEmojiPickerVisible(!emojiPickerVisible);
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
          <span className="ml-2">Listor: {country}</span>
          {dropdownOpen ? (
            <ChevronDownIcon className="ml-2 h-5 w-5" />
          ) : (
            <ChevronUpIcon className="ml-2 h-5 w-5" />
          )}
        </button>
        {dropdownOpen && (
          <div className="relative">
            <div className="absolute top-full shadow-lg text-black font-medium rounded-sm px-4 py-2 z-10 w-max text-center">
              {countries.map((item, index) => (
                <div
                  key={index}
                  onClick={() => changeCountry(item)}
                  className={`cursor-pointer px-9 py-2 bg-white hover:bg-[#b1bad3]`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="overflow-y-auto flex-grow"
        style={{
          overflowY: "scroll",
          height: "calc(88vh - 75px)",
          padding: "10px 0 10px 0",
        }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-md mb-2 ${msg.isNewUser ? "border-[#2F4553]" : "bg-[#213743]"}`}
          >
            {msg.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="bg-[#213743] p-1 relative">
        <div className="flex text-white sticky bg-[#0f212e] bottom-0 py-1">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-grow p-2 border border-gray-700 bg-[#0f212e] text-sm text-white"
            placeholder="Type your message..."
          />
          <div
            className="absolute right-2 bottom-2 cursor-pointer"
            onClick={toggleEmojiPicker}
          >
            😊
          </div>
        </div>

        <div className="flex items-center justify-end relative">
          <svg
            className="w-5 h-5 text-white bg-gray-500 mr-2"
            fill="currentColor"
            viewBox="0 0 64 64"
          >
            <path d="M22.8 8.547h36.774c0 .028.026.054.026.054h-.016a6.75 6.75 0 0 0-6.384 6.586v33.04l-.002-.02a6.8 6.8 0 0 1-6.786 7.246 6.8 6.8 0 0 1-6.786-7.226v-3.094H16V15.347a6.8 6.8 0 0 1 6.8-6.8Zm-.828 27.894h15.494V31.8H21.972v4.64Zm.002-12.4h24.8V19.4h-24.8v4.64Zm38.052-13.574h-.052A3.974 3.974 0 0 0 56 14.44v6.426h8V14.44a3.974 3.974 0 0 0-3.974-3.974ZM36.8 48.256H0a6.8 6.8 0 0 0 6.8 6.8h34.026c-2.694 0-4.026-3.04-4.026-6.8Z" />
          </svg>
          <button
            onClick={sendMessage}
            className="bg-[#2e7d32] text-black text-sm px-4 py-2 rounded-sm"
          >
            Send
          </button>
        </div>

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