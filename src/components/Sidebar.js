import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/Inbox";
import nav from "../nav";
import { SidebarNav } from "./SidebarNav";
import { useNavigate } from "react-router-dom";

function Sidebar({ openMenubar, handleDrawerToggle }) {
  const navigate = useNavigate();

  return (
    <div
      className={`h-full ${openMenubar ? "block" : "hidden md:block"} 
      ${openMenubar && "md:text-white"} 
       md:bg-none`} 
    >
      <div className="p-4 shadow-2xl shadow-black">
        <div className="flex items-center">
          <button onClick={handleDrawerToggle} className="text-white mr-4">
            <MenuIcon />
          </button>
          <button onClick={() => navigate("/casino/home")} className="text-white">
            CASINO
          </button>
        </div>
      </div>

      <div className="mt-8">
        <ul className="space-y-2 rounded-md">
          <SidebarNav items={nav} openMenubar={openMenubar} />
          {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <li key={text} className="flex items-center p-2 pl-4 space-x-4">
              <div className="text-white flex items-center justify-center "> 
                {index % 2 === 0 ? <InboxIcon /> : <EmailIcon />}
              </div>
              <span className={`ml-4 ${openMenubar ? "block" : "hidden md:block"}`}>
                {text}
              </span>
            </li>
          ))} */}
        </ul>

        {/* <ul className="mt-4 space-y-2 rounded-md">
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <li key={text} className="flex items-center p-2 pl-4 space-x-4">
              <div className="text-white flex items-center justify-center "> 
                {index % 2 === 0 ? <InboxIcon /> : <EmailIcon />}
              </div>
              <span className={`ml-4 ${openMenubar ? "block" : "hidden md:block"}`}>
                {text}
              </span>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

export default Sidebar;
