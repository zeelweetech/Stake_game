import React from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import HistoryIcon from "@mui/icons-material/History";
import { BiSolidNotepad } from "react-icons/bi";
import Person2Icon from "@mui/icons-material/Person2";
import { TbCherryFilled } from "react-icons/tb";
import { BsFire } from "react-icons/bs";
import Filter7Icon from "@mui/icons-material/Filter7";
import { FaGift } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";
import { BsBookmarkStarFill } from "react-icons/bs";
import LogoutIcon from "@mui/icons-material/Logout";

const nav = [
  {
    name: "Dashboard",
    to: "/dashboard",
    icon: <InboxIcon />,
    badge: {
      color: "info",
    },
  },
  {
    name: "Favourites",
    // to: "/",
    icon: <StarBorderIcon />,
    badge: {
      color: "info",
    },
  },
  {
    name: "Recent",
    // to: "/",
    icon: <HistoryIcon />,
    badge: {
      color: "info",
    },
  },
  {
    name: "My Bets",
    // to: "/",
    icon: <BiSolidNotepad size={24} />,
    badge: {
      color: "info",
    },
  },
  {
    name: "Games",
    // to: "/",
    badge: {
      color: "info",
    },
  },
  {
    name: "Lobby",
    to: "/Lobby",
    icon: <TbCherryFilled size={24}/>,
    badge: {
      color: "info",
    },
  },
  {
    name: "Listor Originals",
    to: "/StackOriginals",
    icon: <BsFire size={24}/>,
    badge: {
      color: "info",
    },
  },
  {
    name: "Slots",
    to: "/slots",
    icon: <Filter7Icon size={10}/>,
    badge: {
      color: "info",
    },
  },
  {
    name: "Live Casino",
    to: "/LiveCasion",
    icon: <InboxIcon />,
    badge: {
      color: "info",
    },
  },
  {
    name: "Game Shows",
    to: "/GameShows",
    icon: <FaGift size={20}/>,
    badge: {
      color: "info",
    },
  },
  {
    name: "Listor Exclusives",
    to: "/Exclusives",
    icon: <BsBookmarkStarFill size={20}/>,
    badge: {
      color: "info",
    },
  },
  {
    name: "New Releases",
    to: "/NewReleases",
    icon: <IoIosRocket size={20}/>,
    badge: {
      color: "info",
    },
  },
  {
    name: "Profile",
    // to: "/",
    icon: <Person2Icon />,
    badge: {
      color: "info",
    },
  },
  {
    name: "Logout",
    to: "/logout",
    icon: <LogoutIcon />,
    badge: {
      color: "info",
    },
  }
];

export default nav;
