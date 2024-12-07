import React, { useState } from "react";
import { Divider, Tooltip } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import stackCarshLogo from "../../assets/svg/stackCarshLogo.svg";
import { Link } from "react-router-dom";

function GameFooter() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className="py-4 px-4 w-full bg-[#0f212e] rounded-b-lg">
      <div className="flex justify-between items-center">
        <div className="space-x-9 text-[#b1bad3] relative">
          <Tooltip
            title="Game Settings"
            placement="top"
            className="hover:text-white hover:cursor-pointer"
          >
            <SettingsIcon fontSize="small" onClick={toggleSettings} />
          </Tooltip>
          <Tooltip
            title="Enable Theatre Mode"
            placement="top"
            className="hover:text-white hover:cursor-pointer"
          >
            <CheckBoxOutlineBlankIcon fontSize="small" />
          </Tooltip>
          <Tooltip
            title="Open Live Status"
            placement="top"
            className="hover:text-white hover:cursor-pointer"
          >
            <LegendToggleIcon fontSize="small" />
          </Tooltip>
          <Tooltip
            title="Favourite Game"
            placement="top"
            className="hover:text-white hover:cursor-pointer"
          >
            <StarOutlineIcon fontSize="small" />
          </Tooltip>
          <Divider
            flexItem
            orientation="vertical"
            sx={{ backgroundColor: "black" }}
          />
        </div>
        <div>
          <span className="text-[#b1bad3]/50 text-4xl font-extrabold italic font-sans hidden sm:block w-16 sm:w-24 md:w-28">
            Listor
          </span>
        </div>
        <div>
          <Link className="text-[#b1bad3] hover:text-white">Fairness</Link>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isSettingsOpen && (
        // <div className="relative mt-2">
        //   <div className="absolute z-10 -left-10 bg-white rounded shadow-lg ring-1 ring-black ring-opacity-5 w-32">
        //     {/* Volume Slider */}
        //     <div className="px-2 py-2 flex items-center space-x-3">
        //       <svg
        //         className="w-5 h-5 text-blue-500"
        //         fill="currentColor"
        //         viewBox="0 0 64 64"
        //       >
        //         <path d="M0 20.8v22.4h16L35.2 56V8L16 20.8H0ZM41.6 9.6v8C49.552 17.6 56 24.048 56 32s-6.448 14.4-14.4 14.4v8C53.972 54.4 64 44.372 64 32 64 19.628 53.972 9.6 41.6 9.6ZM41.574 24a8 8 0 0 1 0 16V24Z" />
        //       </svg>
        //       <input
        //         type="range"
        //         min="0"
        //         max="100"
        //         className="w-full focus:outline-none"
        //       />
        //     </div>

        //     {/* Menu Items */}
        //     <ul>
        //       <li className="flex items-center px-2 py-2 hover:bg-gray-400 cursor-pointer">
        //         <svg
        //           className="w-4 h-4 text-[#2F4553]"
        //           fill="currentColor"
        //           viewBox="0 0 64 64"
        //         >
        //           <path d="M31.986 0v23.28H52.12L31.986 64V37.814H11.88L31.986 0Z" />
        //         </svg>
        //         <span className="ml-3 text-gray-700 hover:text-black text-base font-semibold">Instant Bet</span>
        //       </li>
        //       <li className="flex items-center px-2 py-2 hover:bg-gray-400 cursor-pointer">
        //         <svg
        //           className="w-4 h-4 text-[#2F4553]"
        //           fill="currentColor"
        //           viewBox="0 0 64 64"
        //         >
        //           <path d="M29.176 20.932c-1.778 3.154-2.824 6.922-2.824 10.936s1.048 7.784 2.882 11.05l-.058-.114c-.844.23-1.816.366-2.818.376h-.006c-6.238 0-11.294-5.056-11.294-11.294s5.056-11.294 11.294-11.294h.04c.988 0 1.948.124 2.864.356l-.08-.018v.002ZM9.036 24.47c-.958 2.182-1.514 4.724-1.514 7.398 0 2.674.558 5.216 1.562 7.518l-.048-.122a10.297 10.297 0 0 1-1.54-.002l.034.002a7.53 7.53 0 0 1 0-15.06c.566.056 1.078.15 1.576.28l-.07-.016v.002Zm39.906 22.588c-8.316 0-15.058-6.742-15.058-15.058 0-8.316 6.742-15.058 15.058-15.058C57.258 16.942 64 23.684 64 32c-.064 8.216-6.696 14.862-14.9 14.946h-.008l-.15.112Z" />
        //         </svg>
        //         <span className="ml-3 text-gray-700 hover:text-black text-base font-semibold">Animations</span>
        //       </li>
        //       <li className="flex items-center px-2 py-2 hover:bg-gray-400 cursor-pointer">
        //         <svg
        //           className="w-4 h-4 text-[#2F4553]"
        //           fill="currentColor"
        //           viewBox="0 0 64 64"
        //         >
        //           <path d="M7.36 42.39c1-12.78 14.728-25.29 17.926-29.976 2.778-4.206 1.719-9.203.83-11.4a.78.78 0 0 1 .893-1h-.004c13.889 2.918 14.588 13.48 14.168 18.206-.42 4.726.42 7.913 3.478 7.224 3.057-.69 2.028-8.443 2.028-8.443s14.039 16.676 8.893 33.073c-2.588 8.574-9.033 12.19-14.449 13.89-.28.14-.56-.14-.56-.55.7-2.638 2.509-4.726 3.058-7.644 1.12-4.796-3.327-9.213-6.624-11.71-2.063-1.538-3.386-3.97-3.386-6.712 0-.127.002-.255.008-.381v.018c0-.28-.42-.42-.55-.28a90.106 90.106 0 0 1-6.652 7.202l-.022.022c-5.136 5.696-7.784 12.09-3.197 19.175.14.28-.14.69-.41.56C11.387 60.596 6.67 51.973 7.36 42.39Z" />
        //         </svg>
        //         <span className="ml-3 text-gray-700 hover:text-black text-base font-semibold">Max Bet</span>
        //       </li>
        //      <li className="flex items-center px-2 py-2 hover:bg-gray-400 cursor-pointer">
        //         <svg
        //           className="w-4 h-4 text-[#2F4553]"
        //           fill="currentColor"
        //           viewBox="0 0 64 64"
        //         >
        //           <path d="M22.8 8.547h36.774c0 .028.026.054.026.054h-.016a6.75 6.75 0 0 0-6.384 6.586v33.04l-.002-.02a6.8 6.8 0 0 1-6.786 7.246 6.8 6.8 0 0 1-6.786-7.226v-3.094H16V15.347a6.8 6.8 0 0 1 6.8-6.8Zm-.828 27.894h15.494V31.8H21.972v4.64Zm.002-12.4h24.8V19.4h-24.8v4.64Zm38.052-13.574h-.052A3.974 3.974 0 0 0 56 14.44v6.426h8V14.44a3.974 3.974 0 0 0-3.974-3.974ZM36.8 48.256H0a6.8 6.8 0 0 0 6.8 6.8h34.026c-2.694 0-4.026-3.04-4.026-6.8Z" />
        //         </svg>
        //         <span className="ml-3 text-gray-700 hover:text-black text-base font-semibold">Game Info</span>
        //       </li>
        //     <li className="flex items-center px-2 py-2 hover:bg-gray-400 cursor-pointer">
        //         <svg
        //           className="w-4 h-4 text-[#2F4553]"
        //           fill="currentColor"
        //           viewBox="0 0 64 64"
        //         >
        //           <path d="M61.14 10.668H2.852A2.85 2.85 0 0 0 0 13.518v37.146a2.667 2.667 0 0 0 2.668 2.668h58.664A2.667 2.667 0 0 0 64 50.665V13.519a2.85 2.85 0 0 0-2.852-2.851h-.008ZM35.086 17.81h6.187v5.332h-6.187V17.81Zm0 11.495h6.187v5.332h-6.187v-5.332ZM22.715 17.811h6.187v5.332h-6.187V17.81Zm0 11.495h6.187v5.332h-6.187v-5.332ZM10.367 17.811h6.188v5.332h-6.188V17.81Zm0 11.495h6.188v5.332h-6.188v-5.332Zm43.254 16.88H10.37v-5.332h43.25v5.331Zm0-11.496h-6.188v-5.36h6.188v5.36Zm0-11.463h-6.188v-5.332h6.188v5.332Z" />
        //         </svg>
        //         <span className="ml-3 text-gray-700 hover:text-black text-base font-semibold">Hotkeys</span>
        //       </li>
        //     </ul>
        //   </div>
        // </div>
        <div className="relative mt-2">
  <div className="absolute z-10 xl:-left-10 lg:-left-10 md:xl:-left-10 md:-left-10 -left-[1.5rem] bg-white rounded shadow-lg ring-1 ring-black ring-opacity-5 w-32 md:w-32 lg:w-32 ">
    {/* Volume Slider */}
    <div className="px-2 py-2 flex items-center space-x-3">
      <svg
        className="w-5 h-5 text-blue-500"
        fill="currentColor"
        viewBox="0 0 64 64"
      >
        <path d="M0 20.8v22.4h16L35.2 56V8L16 20.8H0ZM41.6 9.6v8C49.552 17.6 56 24.048 56 32s-6.448 14.4-14.4 14.4v8C53.972 54.4 64 44.372 64 32 64 19.628 53.972 9.6 41.6 9.6ZM41.574 24a8 8 0 0 1 0 16V24Z" />
      </svg>
      <input
        type="range"
        min="0"
        max="100"
        className="w-full focus:outline-none"
      />
    </div>

    {/* Menu Items */}
    <ul className="space-y-2">
      <li className="flex items-center px-2 py-2 hover:bg-gray-400 cursor-pointer">
        <svg
          className="w-4 h-4 text-[#2F4553]"
          fill="currentColor"
          viewBox="0 0 64 64"
        >
          <path d="M31.986 0v23.28H52.12L31.986 64V37.814H11.88L31.986 0Z" />
        </svg>
        <span className="ml-3 text-gray-700 hover:text-black text-base font-semibold">Instant Bet</span>
      </li>
      <li className="flex items-center px-2 py-2 hover:bg-gray-400 cursor-pointer">
        <svg
          className="w-4 h-4 text-[#2F4553]"
          fill="currentColor"
          viewBox="0 0 64 64"
        >
          <path d="M29.176 20.932c-1.778 3.154-2.824 6.922-2.824 10.936s1.048 7.784 2.882 11.05l-.058-.114c-.844.23-1.816.366-2.818.376h-.006c-6.238 0-11.294-5.056-11.294-11.294s5.056-11.294 11.294-11.294h.04c.988 0 1.948.124 2.864.356l-.08-.018v.002ZM9.036 24.47c-.958 2.182-1.514 4.724-1.514 7.398 0 2.674.558 5.216 1.562 7.518l-.048-.122a10.297 10.297 0 0 1-1.54-.002l.034.002a7.53 7.53 0 0 1 0-15.06c.566.056 1.078.15 1.576.28l-.07-.016v.002Zm39.906 22.588c-8.316 0-15.058-6.742-15.058-15.058 0-8.316 6.742-15.058 15.058-15.058C57.258 16.942 64 23.684 64 32c-.064 8.216-6.696 14.862-14.9 14.946h-.008l-.15.112Z" />
        </svg>
        <span className="ml-3 text-gray-700 hover:text-black text-base font-semibold">Animations</span>
      </li>
      <li className="flex items-center px-2 py-2 hover:bg-gray-400 cursor-pointer">
        <svg
          className="w-4 h-4 text-[#2F4553]"
          fill="currentColor"
          viewBox="0 0 64 64"
        >
          <path d="M7.36 42.39c1-12.78 14.728-25.29 17.926-29.976 2.778-4.206 1.719-9.203.83-11.4a.78.78 0 0 1 .893-1h-.004c13.889 2.918 14.588 13.48 14.168 18.206-.42 4.726.42 7.913 3.478 7.224 3.057-.69 2.028-8.443 2.028-8.443s14.039 16.676 8.893 33.073c-2.588 8.574-9.033 12.19-14.449 13.89-.28.14-.56-.14-.56-.55.7-2.638 2.509-4.726 3.058-7.644 1.12-4.796-3.327-9.213-6.624-11.71-2.063-1.538-3.386-3.97-3.386-6.712 0-.127.002-.255.008-.381v.018c0-.28-.42-.42-.55-.28a90.106 90.106 0 0 1-6.652 7.202l-.022.022c-5.136 5.696-7.784 12.09-3.197 19.175.14.28-.14.69-.41.56C11.387 60.596 6.67 51.973 7.36 42.39Z" />
        </svg>
        <span className="ml-3 text-gray-700 hover:text-black text-base font-semibold">Max Bet</span>
      </li>
      <li className="flex items-center px-2 py-2 hover:bg-gray-400 cursor-pointer">
        <svg
          className="w-4 h-4 text-[#2F4553]"
          fill="currentColor"
          viewBox="0 0 64 64"
        >
          <path d="M22.8 8.547h36.774c0 .028.026.054.026.054h-.016a6.75 6.75 0 0 0-6.384 6.586v33.04l-.002-.02a6.8 6.8 0 0 1-6.786 7.246 6.8 6.8 0 0 1-6.786-7.226v-3.094H16V15.347a6.8 6.8 0 0 1 6.8-6.8Zm-.828 27.894h15.494V31.8H21.972v4.64Zm.002-12.4h24.8V19.4h-24.8v4.64Zm38.052-13.574h-.052A3.974 3.974 0 0 0 56 14.44v6.426h8V14.44a3.974 3.974 0 0 0-3.974-3.974ZM36.8 48.256H0a6.8 6.8 0 0 0 6.8 6.8h34.026c-2.694 0-4.026-3.04-4.026-6.8Z" />
        </svg>
        <span className="ml-3 text-gray-700 hover:text-black text-base font-semibold">Game Info</span>
      </li>
      <li className="flex items-center px-2 py-2 hover:bg-gray-400 cursor-pointer">
        <svg
          className="w-4 h-4 text-[#2F4553]"
          fill="currentColor"
          viewBox="0 0 64 64"
        >
          <path d="M61.14 10.668H2.852A2.85 2.85 0 0 0 0 13.518v37.146a2.667 2.667 0 0 0 2.668 2.668h58.664A2.667 2.667 0 0 0 64 50.665V13.519a2.85 2.85 0 0 0-2.852-2.851h-.008ZM35.086 17.81h6.187v5.332h-6.187V17.81Zm0 11.495h6.187v5.332h-6.187v-5.332ZM22.715 17.811h6.187v5.332h-6.187V17.81Zm0 11.495h6.187v5.332h-6.187v-5.332ZM10.367 17.811h6.188v5.332h-6.188V17.81Zm0 11.495h6.188v5.332h-6.188v-5.332Zm43.254 16.88H10.37v-5.332h43.25v5.331Zm0-11.496h-6.188v-5.36h6.188v5.36Zm0-11.463h-6.188v-5.332h6.188v5.332Z" />
        </svg>
        <span className="ml-3 text-gray-700 hover:text-black text-base font-semibold">Hotkeys</span>
      </li>
    </ul>
  </div>
</div>

      )}
    </div>
  );
}

export default GameFooter;
