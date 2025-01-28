import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import EmojiPicker from "emoji-picker-react";
import { useDispatch, useSelector } from "react-redux";
import { setEmoji } from "../../../features/auth/emojiSlice";
import { Country } from "./country";
import { decodedToken } from "../../../resources/utility";
const chatSocket = io("http://192.168.29.203:3002", { path: "/ws" });

const ChatApp = ({ onClose }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(Country[0]);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const messagesEndRef = useRef(null);
  const selectedEmoji = useSelector((state) => state.emoji.selectedEmoji);
  const emojiPickerRef = useRef(null);
  const dropDownRef = useRef(null);

  const decoded = decodedToken();
  const userId = decoded?.userId;

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
    if (!userId) {
      console.log("User  Id is Not Available. Cannot Message Send");
      return;
    }
    if (message.trim()) {
      const newMessageData = {
        userId,
        content: message,
        country: selectedCountry.countryName,
        taggedUserId: "user456",
        createdAt: new Date(),
      };

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

  const handleClick = () => {
    setIsVisible(true);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setEmojiPickerVisible(false);
  };

  const handleEmojiClick = (emojiObject) => {
    const emoji = emojiObject.emoji;

    const cursorPosition = document.querySelector("input").selectionStart;
    const textBeforeCursor = message.slice(0, cursorPosition);
    const textAfterCursor = message.slice(cursorPosition);

    setMessage(textBeforeCursor + emoji + textAfterCursor);
    dispatch(setEmoji(emoji));
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
      <div className="flex justify-between items-center p-[0.70rem]">
        {/* Dropdown for countries */}
        <div>
          <button
            onClick={toggleDropdown}
            className="inline-flex justify-start w-full bg-[#0f212e] text-sm font-medium text-white group"
          >
            {selectedCountry.Icon && (
              <span>
                <img
                  src={selectedCountry.Icon}
                  alt={selectedCountry.countryName}
                  className="h-5 w-5"
                />
              </span>
            )}
            <span className="ml-2">Listor: {selectedCountry.countryName}</span>
            {dropdownOpen ? (
              <ChevronDownIcon className="ml-2 h-5 w-5 text-[#B1BAd3] group-hover:text-white" />
            ) : (
              <ChevronUpIcon className="ml-2 h-5 w-5 text-[#B1BAD3] group-hover:text-white" />
            )}
          </button>

          {dropdownOpen && (
            <div className="relative">
              <div
                ref={dropDownRef}
                className="flex flex-col absolute top-4 md:left-4 lg:left-0 xl:left-2 left-1/2 -mt-2 bg-white text-black text-sm font-medium rounded py-1 shadow-lg z-[9999]"
              >
                {Country.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => changeCountry(item.countryName)}
                    className="cursor-pointer w-32 p-2 bg-white hover:bg-[#b1bad3]"
                  >
                    <div className="flex items-center space-x-2">
                      <img
                        src={item.Icon}
                        className="w-5 h-5"
                        alt="Not Found"
                      />
                      <p>{item.countryName}</p>
                    </div>
                  </div>
                ))}
                {/* Tooltip arrow */}
                <div className="absolute bottom-full left-1/2 mt-1 z-[9999] bg-white"></div>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="relative rounded-full hover:bg-[#071824] p-3 cursor-pointer group">
            <svg
              className="w-4 h-4 group-hover:text-white text-[#b1bad3]"
              fill="currentColor"
              viewBox="0 0 64 64"
            >
              <path d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z" />
            </svg>
            <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 hidden group-hover:flex flex-col items-center">
              <div className="tooltip-arrow w-3 h-3 bg-white rotate-45"></div>
              <div className="absolute left-0 w-28 h-10 mt-1 transform -translate-x-1/2 bg-white text-[#0f212e] text-sm font-semibold px-2 py-1 rounded opacity-100 pointer-events-auto transition-opacity duration-200 flex justify-center items-center">
                Popout Chat
              </div>
            </div>
          </div>
          <div
            className="relative rounded-full hover:bg-[#071824] p-3 cursor-pointer group"
            onClick={onClose}
          >
            <svg
              className="w-4 h-4 group-hover:text-white text-[#b1bad3]"
              fill="currentColor"
              viewBox="0 0 64 64"
            >
              <path d="m54.827 16.187-7.014-7.014L32 24.987 16.187 9.173l-7.014 7.014L24.987 32 9.173 47.813l7.014 7.014L32 39.013l15.813 15.814 7.014-7.014L39.013 32l15.814-15.813Z" />
            </svg>
            <div className="absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 hidden group-hover:flex flex-col items-center">
              <div className="tooltip-arrow w-3 h-3 bg-white rotate-45"></div>
              <div className="absolute -right-20 w-32 h-10 mt-1 transform -translate-x-1/2 bg-white text-[#0f212e] text-sm font-semibold px-2 py-1 rounded opacity-100 pointer-events-auto transition-opacity duration-200 flex justify-center items-center">
                Collapse Sidebar
              </div>{" "}
            </div>
          </div>
        </div>
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
            <span style={{ color: "#B1BAD3" }}>{msg.username}</span> :{" "}
            {msg.content}
            {/* <span style={{ color: 'white' }}>{msg.content}</span> */}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {/* Message input and send button */}
      <div className="bg-[#213743] p-4 relative w-full flex gap-y-2 flex-col">
        <div className="flex items-center text-white sticky bg-[#0f212e] rounded w-full">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full p-2.5 rounded border-2 font-semibold border-[#2F4553] bg-[#0f212e] text-sm placeholder:text-[#557086] focus:border-[#557086] text-white hover:border-[#557086] focus:outline-none"
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
        <div className="flex items-center justify-end relative gap-x-3">
          <span className="text-xs font-bold text-[#B1BAD3]">160</span>
          <div
            className="py-3 px-4 bg-[#2F4553] text-sm cursor-pointer hover:bg-[#557086] rounded-sm shadow-md"
            onClick={handleClick}
          >
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 64 64"
            >
              <path d="M22.8 8.547h36.774c0 .028.026.054.026.054h-.016a6.75 6.75 0 0 0-6.384 6.586v33.04l-.002-.02a6.8 6.8 0 0 1-6.786 7.246 6.8 6.8 0 0 1-6.786-7.226v-3.094H16V15.347a6.8 6.8 0 0 1 6.8-6.8Zm-.828 27.894h15.494V31.8H21.972v4.64Zm.002-12.4h24.8V19.4h-24.8v4.64Zm38.052-13.574h-.052A3.974 3.974 0 0 0 56 14.44v6.426h8V14.44a3.974 3.974 0 0 0-3.974-3.974ZM36.8 48.256H0a6.8 6.8 0 0 0 6.8 6.8h34.026c-2.694 0-4.026-3.04-4.026-6.8Z" />
            </svg>
          </div>
          {isVisible && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setIsVisible(false);
                }
              }}
            >
              <div className="bg-[#1a2c38] text-white rounded-xl md:max-w-xl lg:max-w-xl xl:max-w-lg relative">
                <div className="flex justify-between items-center p-4">
                  <h2 className="text-base font-semibold flex items-center">
                    <span className="mr-2">
                      <svg
                        className="w-4 h-4 text-[#b1bad3]"
                        fill="currentColor"
                        viewBox="0 0 64 64"
                      >
                        <path d="M22.8 8.547h36.774c0 .028.026.054.026.054h-.016a6.75 6.75 0 0 0-6.384 6.586v33.04l-.002-.02a6.8 6.8 0 0 1-6.786 7.246 6.8 6.8 0 0 1-6.786-7.226v-3.094H16V15.347a6.8 6.8 0 0 1 6.8-6.8Zm-.828 27.894h15.494V31.8H21.972v4.64Zm.002-12.4h24.8V19.4h-24.8v4.64Zm38.052-13.574h-.052A3.974 3.974 0 0 0 56 14.44v6.426h8V14.44a3.974 3.974 0 0 0-3.974-3.974ZM36.8 48.256H0a6.8 6.8 0 0 0 6.8 6.8h34.026c-2.694 0-4.026-3.04-4.026-6.8Z" />
                      </svg>
                    </span>
                    Chat Rules
                  </h2>
                  <button
                    className="text-gray-400 hover:text-white w-5 h-5"
                    aria-label="Close"
                    onClick={() => setIsVisible(false)}
                  >
                    ✖
                  </button>
                </div>
                <div className="flex items-center justify-center max-h-[83vh] overflow-y-auto">
                  <div className="w-full font-normal rounded-lg space-y-4 overflow-y-auto max-h-[80vh]">
                    <div className="px-4 pb-4 flex gap-y-2 gap-x-2 flex-col ">
                      <ol className="list-decimal pl-6 space-y-2 text-[#B1BAD3] text-sm">
                        <li>
                          Don't spam & don't use excessive capital letters when
                          chatting.
                        </li>
                        <li>
                          Don't harass or be offensive to other users or Stake
                          staff.
                        </li>
                        <li>
                          Don't share any personal information (including
                          socials) of you or other players.
                        </li>
                        <li>Don't beg or ask for loans, rains, or tips.</li>
                        <li>
                          Don't use alternative (alts) accounts on chat, that is
                          strictly forbidden.
                        </li>
                        <li>
                          No suspicious behavior that can be seen as potential
                          scams.
                        </li>
                        <li>
                          Don't engage in any forms of
                          advertising/trading/selling/buying or offering
                          services.
                        </li>
                        <li>
                          No discussion of streamers or Twitch or any other
                          similar platforms.
                        </li>
                        <li>
                          Don't use URL shortening services. Always submit the
                          full link.
                        </li>
                        <li>
                          Don't share codes, scripts, or any other bot services.
                        </li>
                        <li>
                          Only use the language specified in the chat channel;
                          potential abuse will be sanctioned.
                        </li>
                        <li>
                          No politics & no religion talk in chat; this one is
                          strictly forbidden.
                        </li>
                      </ol>
                      <p className="flex justify-center items-center text-center text-sm text-[#b1BAD3]">
                        Our full rulel can be found on our&nbsp;
                        <a className="items-center inline-flex font-semibold text-white gap-x-2">
                          forum
                          <svg
                            className="h-3.5 w-3.5 text-[#557086]"
                            viewBox="0 0 64 64"
                            fill="currentColor"
                          >
                            <path d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z" />
                          </svg>
                        </a>
                        <span className="cursor-default">&nbsp;.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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
              onEmojiClick={handleEmojiClick}
              className="custom-emoji-picker"
              height={300}
              width={300}
              size="25"
              searchDisabled
              suggestedEmojisMode={false}
              previewConfig={{
                showPreview: false,
              }}
              skinTonesDisabled
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatApp;
