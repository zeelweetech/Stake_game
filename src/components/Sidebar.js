import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/Inbox";

function Sidebar({ openMenubar, handleDrawerToggle }) {
  return (
    <div>
      <div className="p-[1.18rem] shadow-2xl shadow-black">
        <button onClick={handleDrawerToggle} className="text-white">
          <MenuIcon />
        </button>
      </div>
      <div className="mt-8">
        <ul className="space-y-2">
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <li key={text} className="flex items-center p-2 pl-4">
              <div className="text-white">
                {index % 2 === 0 ? <InboxIcon /> : <EmailIcon />}
              </div>
              <span className={`ml-4 ${openMenubar ? "block" : "hidden"}`}>
                {text}
              </span>
            </li>
          ))}
        </ul>
        <ul className="mt-4 space-y-2">
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <li key={text} className="flex items-center p-2 pl-4">
              <div className="text-white">
                {index % 2 === 0 ? <InboxIcon /> : <EmailIcon />}
              </div>
              <span className={`ml-4 ${openMenubar ? "block" : "hidden"}`}>
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
