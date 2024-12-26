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
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { FaWallet } from "react-icons/fa";
import { PiVaultFill } from "react-icons/pi";
import { MdEmojiEvents } from "react-icons/md";
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import { LuListTodo } from "react-icons/lu";
import { MdSettings } from "react-icons/md";


const ICON_SIZE = 18;

const nav = [
  {
    name: "Dashboard",
    to: "/dashboard",
    icon: <InboxIcon style={{ fontSize: ICON_SIZE }} />,
    badge: {
      color: "info",
    },
  },
  {
    name: "Favourites",
    to: "/favourites",
    icon: <StarBorderIcon style={{ fontSize: ICON_SIZE }} />,
    badge: {
      color: "info",
    },
  },
  {
    name: "Recent",
    to: "/recent",
    icon: <HistoryIcon style={{ fontSize: ICON_SIZE }} />,
    badge: {
      color: "info",
    },
  },
  {
    name: "My Bets",
    to: "/myBet",
    icon: <BiSolidNotepad size={ICON_SIZE} />,
    badge: {
      color: "info",
    },
  },
  {
    name: "Games",
    badge: {
      color: "info",
    },
  },
  {
    name: "Lobby",
    to: "/Lobby",
    icon: <TbCherryFilled size={ICON_SIZE} />,
    badge: {
      color: "info",
    },
  },
  {
    name: "Listor Originals",
    to: "/StackOriginals",
    icon: <BsFire size={ICON_SIZE} />,
    badge: {
      color: "info",
    },
  },
  {
    name: "Slots",
    to: "/slots",
    icon: <Filter7Icon style={{ fontSize: ICON_SIZE }} />,
    badge: {
      color: "info",
    },
  },
  {
    name: "Live Casino",
    to: "/LiveCasion",
    icon: <InboxIcon style={{ fontSize: ICON_SIZE }} />,
    badge: {
      color: "info",
    },
  },
  {
    name: "Game Shows",
    to: "/GameShows",
    icon: <FaGift size={ICON_SIZE} />,
    badge: {
      color: "info",
    },
  },
  {
    name: "Listor Exclusives",
    to: "/Exclusives",
    icon: <BsBookmarkStarFill size={ICON_SIZE} />,
    badge: {
      color: "info",
    },
  },
  {
    name: "New Releases",
    to: "/NewReleases",
    icon: <IoIosRocket size={ICON_SIZE} />,
    badge: {
      color: "info",
    },
  },
  {
    name: "Profile",
    icon: <Person2Icon style={{ fontSize: ICON_SIZE }} />,
    dropdownIcon: <ChevronDownIcon style={{ fontSize: ICON_SIZE }} />,
    badge: {
      color: "info",
    },
    dropdown: [
      {
        name: "Wallet",
        to: "/wallet",
        icon: <FaWallet size={ICON_SIZE} />,
      },
      {
        name: "Vault",
        to: "/vault",
        icon: <PiVaultFill size={ICON_SIZE} />,
      },
      {
        name: "VIP",
        to: "/vip",
        icon: <MdEmojiEvents size={ICON_SIZE} />,
      },
      {
        name: "Statistics",
        to: "/statistics",
        icon: <LegendToggleIcon style={{ fontSize: ICON_SIZE }} />,
      },
      {
        name: "Notification",
        to: "/notification",
        icon: <LuListTodo size={ICON_SIZE} />,
      },
      {
        name: "Setting",
        to: "/setting",
        icon: <MdSettings size={ICON_SIZE} />,
      },
      {
        name: "Logout",
        to: "/logout",
        icon: <LogoutIcon style={{ fontSize: ICON_SIZE }} />,
        badge: {
          color: "info",
        },
      },
    ],
  },
];

export default nav;
