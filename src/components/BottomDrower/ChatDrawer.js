import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import EmojiPicker from "emoji-picker-react";
import { useDispatch, useSelector } from "react-redux";
import { setEmoji } from "../../../src/features/auth/emojiSlice";
import { Country } from "../../../src/views/rightSidebarView/chat/country";
import { decodedToken } from "../../resources/utility";
// import { Picker } from "emoji-mart";

const chatSocket = io(process.env.REACT_APP_CHAT_URL, { path: "/ws" });

const ChatDrawer = ({ openChat, onCloseChat }) => {
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
    if (countryObj) {
      setSelectedCountry(countryObj);
      chatSocket.emit("changeCountry", newCountry);
      setDropdownOpen(false);
    }
  };

  const handleClick = () => {
    setIsVisible(true);
  };
  const toggleDropdown = () => {
    setEmojiPickerVisible(false);
    setDropdownOpen((prev) => !prev);
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
    if (event.key === "Enter") sendMessage();
  };

  // Close emoji picker when clicking outside
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
    <div
      className={`fixed left-0 right-0 bg-[#0f212e] shadow-lg duration-300 ease-in-out ${
        openChat ? "bottom-[3.90rem] z-[1000] top-[3.5rem]" : ""
      } flex flex-col`}
    >
      <div className="bg-[#0f212e] shadow-lg h-14 flex items-center justify-between px-4">
        <button
          onClick={toggleDropdown}
          className="flex items-center text-white text-sm"
        >
          {selectedCountry.Icon && (
            <img
              src={selectedCountry.Icon}
              alt={selectedCountry.countryName}
              className="h-5 w-5 mr-2"
            />
          )}
          Listor: {selectedCountry.countryName}
          {dropdownOpen ? (
            <ChevronUpIcon className="ml-2 h-5 w-5" />
          ) : (
            <ChevronDownIcon className="ml-2 h-5 w-5" />
          )}
        </button>
        <IconButton onClick={onCloseChat} sx={{ color: "white" }}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </div>
      {dropdownOpen && (
        <div className="relative">
          <div
            ref={dropDownRef}
            className="absolute -top-2 shadow-lg left-3 bg-white text-[#2F4553] text-sm font-bold rounded py-2 z-10 w-max text-center"
          >
            {Country.map((item, index) => (
              <div
                key={index}
                onClick={() => changeCountry(item.countryName)}
                className="cursor-pointer w-36 p-3 bg-white hover:bg-[#b1bad3]"
              >
                <div className="flex items-center gap-2">
                  <img src={item.Icon} className="w-5" alt="Not Found" />
                  <p>{item.countryName}</p>
                </div>
              </div>
            ))}
            <div className="tooltip-arrow w-2 h-3 bg-white rotate-45 absolute top-[-5px] left-16 "></div>
          </div>
        </div>
      )}
      <div className="overflow-y-auto flex-grow px-4 h-96">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-md mb-2 ${
              msg.isNewUser ? "border-[#2F4553]" : "bg-[#213743]"
            }`}
          >
            <span style={{ color: "#B1BAD3" }}>{msg.username}</span> :{" "}
            {msg.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="bg-[#213743] p-4 relative flex gap-y-2 flex-col">
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
        <div className="flex items-center justify-end relative gap-x-3">
          <span className="text-xs font-bold text-[#B1BAD3]">160</span>
          <div
            className="py-3 px-4 bg-[#2F4553] text-sm cursor-pointer hover:bg-[#557086] rounded"
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
                  // handleCloseHotkeys();
                }
              }}
            >
              <div className="bg-[#1a2c38] text-white rounded-xl w-[93%] relative">
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

        {emojiPickerVisible && (
          <div ref={emojiPickerRef} className="absolute bottom-28 z-50">
            <EmojiPicker
              onEmojiClick={handleEmojiClick}
              className="custom-emoji-picker"
              height={300}
              width={300}
              size="25"
              searchDisabled
              suggestedEmojisMode={false}
              previewConfig
              skinTonesDisabled
              // reactionsDefaultOpen
              // onReactionClick
              // allowExpandReactions
              // {defaultCaption: string;}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatDrawer;
