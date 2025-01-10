import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import EmojiPicker from "emoji-picker-react";
import { useDispatch, useSelector } from "react-redux";
import { setEmoji } from "../../../features/auth/emojiSlice";
import { Country } from "./country";
const chatSocket = io("http://192.168.29.203:3002", { path: "/ws" });

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
      // console.log("sdknkadmfcna,m....", newMessageData);

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
    setEmojiPickerVisible(false);
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
      if (
        emojiPickerVisible &&
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
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
      if (
        dropdownOpen &&
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownOpen]);

  return (
    <div className="text-white rounded-md shadow-lg relative bg-[#0f212e] flex flex-col h-screen">
      <div className="flex justify-between items-center">
        {/* Dropdown for countries */}
        <div>
          <button
            onClick={toggleDropdown}
            className="inline-flex justify-start w-full bg-[#0f212e] px-4 py-2 text-sm font-medium text-white"
          >
            {selectedCountry.Icon && (
              <span className="mr-2">
                <img
                  src={selectedCountry.Icon}
                  alt={selectedCountry.countryName}
                  className="h-5 w-5"
                />
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
              <div
                ref={dropDownRef}
                className="absolute top-full shadow-lg text-black font-medium rounded-sm py-2 z-10"
              >
                {Country.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => changeCountry(item.countryName)}
                    className="cursor-pointer w-36 pl-2 py-2 bg-white hover:bg-[#b1bad3]"
                  >
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
        <IconButton
          onClick={onClose}
          sx={{ color: "white", position: "absolute", top: 9, right: 8 }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </div>
      {/* Messages display */}
      <div className="overflow-y-auto flex-grow h-96">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-md mb-2 ${
              msg.isNewUser ? "border-[#2F4553]" : "bg-[#213743] mx-2"
            }`}
          >
            {msg.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {/* Message input and send button */}
      <div className="bg-[#213743] p-2.5 relative w-full">
        <div className="flex items-center text-white sticky bg-[#0f212e] w-full">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full p-2 rounded border-2 font-semibold border-[#2F4553] bg-[#0f212e] text-sm focus:border-[#557086] text-white hover:border-[#557086] focus:outline-none"
            placeholder="Type your message"
          />
          <div
            className="absolute right-1 px-2 cursor-pointer"
            onClick={toggleEmojiPicker}
          >
            😀
          </div>
        </div>
        {/* Send button */}
        <div className="mt-2 flex items-center justify-end relative gap-x-2 abc">
          <div className="py-3 px-4 bg-[#2F4553] text-sm cursor-pointer hover:bg-[#557086] rounded">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 64 64"
            >
              <path d="M22.8 8.547h36.774c0 .028.026.054.026.054h-.016a6.75 6.75 0 0 0-6.384 6.586v33.04l-.002-.02a6.8 6.8 0 0 1-6.786 7.246 6.8 6.8 0 0 1-6.786-7.226v-3.094H16V15.347a6.8 6.8 0 0 1 6.8-6.8Zm-.828 27.894h15.494V31.8H21.972v4.64Zm.002-12.4h24.8V19.4h-24.8v4.64Zm38.052-13.574h-.052A3.974 3.974 0 0 0 56 14.44v6.426h8V14.44a3.974 3.974 0 0 0-3.974-3.974ZM36.8 48.256H0a6.8 6.8 0 0 0 6.8 6.8h34.026c-2.694 0-4.026-3.04-4.026-6.8Z" />
            </svg>
          </div>
          <button
            onClick={sendMessage}
            className="bg-[#00e701] hover:bg-[#1fff20] text-black font-semibold rounded text-sm px-4 py-2.5"
          >
            Send
          </button>
        </div>
        {/* Emoji Picker */}
        {emojiPickerVisible && (
          <div
            ref={emojiPickerRef}
            className="absolute bottom-32 left-0 z-50 bg-gray-700 rounded-lg shadow-lg"
          >
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
