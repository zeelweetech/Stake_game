import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import EmojiPicker from 'emoji-picker-react';
import { useDispatch, useSelector } from "react-redux";
import { setEmoji } from "../../../src/features/auth/emojiSlice";
import { Country } from "../../../src/views/rightSidebarView/chat/country";
import { Picker } from "emoji-mart";

const chatSocket = io('http://192.168.29.203:3002', { path: '/ws' });

const ChatDrawer = ({ openChat, onCloseChat }) => {
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
            const newMessageData = {
                userId: "USER_128",
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

    const toggleDropdown = () => {
        setEmojiPickerVisible(false);
        setDropdownOpen((prev) => !prev);
    }

    const toggleEmojiPicker = () => {
        setEmojiPickerVisible((prev) => !prev);
        setDropdownOpen(false);
    }

    const handleEmojiClick = (emoji) => {
        setMessage((prev) => prev + emoji.emoji);
        dispatch(setEmoji(emoji.emoji));
        setEmojiPickerVisible(false);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") sendMessage();
    };

    // Close emoji picker when clicking outside
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
        <div className={`fixed left-0 right-0 bg-[#0f212e] shadow-lg duration-300 ease-in-out ${openChat ? 'bottom-[3.20rem] z-[1000] top-[3.5rem]' : ''} flex flex-col`} >
            <div className="bg-[#0f212e] shadow-lg h-14 flex items-center justify-between px-4">
                <button
                    onClick={toggleDropdown}
                    className="flex items-center text-white text-sm"
                >
                    {selectedCountry.Icon && (
                        <img src={selectedCountry.Icon} alt={selectedCountry.countryName} className="h-5 w-5 mr-2" />
                    )}
                    Listor: {selectedCountry.countryName}
                    {dropdownOpen ? (
                        <ChevronUpIcon className="ml-2 h-5 w-5" />
                    ) : (
                        <ChevronDownIcon className="ml-2 h-5 w-5" />
                    )}
                </button>
                <IconButton
                    onClick={onCloseChat}
                    sx={{ color: "white" }}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            </div>
            {dropdownOpen && (
                <div className="relative">
                    <div ref={dropDownRef} className="absolute top-full shadow-lg left-9 mt-2 bg-white text-black font-medium rounded-sm py-2 z-10 w-max text-center">
                        {Country.map((item, index) => (
                            <div key={index} onClick={() => changeCountry(item.countryName)} className="cursor-pointer w-36 pl-2 py-2 bg-white hover:bg-[#b1bad3]">
                                <div className="flex items-center space-x-2">
                                    <img src={item.Icon} className="w-5" alt="Not Found" />
                                    <p>{item.countryName}</p>
                                </div>
                            </div>
                        ))}
                        <div className="tooltip-arrow w-2 h-3 bg-white rotate-45 absolute top-[-6px] left-1/2 "></div>
                    </div>
                </div>
            )}
            <div className="overflow-y-auto flex-grow px-4 h-96">
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

            <div className="bg-[#213743] py-2 px-2 relative ">
                <div className="flex items-center bg-[#0f212e] p-2 rounded-md">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="w-full p-1 bg-transparent border-0 text-white focus:outline-none"
                        placeholder="Type your message..."
                    />
                    <span className="cursor-pointer" onClick={toggleEmojiPicker}>
                        😊
                    </span>
                </div>

                <div className="flex items-center justify-end py-2">
                    <button onClick={sendMessage} className="bg-[#1fff20] text-black font-semibold text-sm px-7 py-2 rounded-sm">
                        Send
                    </button>

                </div>

                {emojiPickerVisible && (
                    <div ref={emojiPickerRef} className="absolute bottom-28 z-50">
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