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
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaWallet } from "react-icons/fa";
import { PiVaultFill } from "react-icons/pi";
import { MdEmojiEvents } from "react-icons/md";
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import { LuListTodo } from "react-icons/lu";
import { MdSettings } from "react-icons/md";


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
    to: "/myBet",
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
    icon: <TbCherryFilled size={24} />,
    badge: {
      color: "info",
    },
  },
  {
    name: "Listor Originals",
    to: "/StackOriginals",
    icon: <BsFire size={24} />,
    badge: {
      color: "info",
    },
  },
  {
    name: "Slots",
    to: "/slots",
    icon: <Filter7Icon size={10} />,
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
    icon: <FaGift size={20} />,
    badge: {
      color: "info",
    },
  },
  {
    name: "Listor Exclusives",
    to: "/Exclusives",
    icon: <BsBookmarkStarFill size={20} />,
    badge: {
      color: "info",
    },
  },
  {
    name: "New Releases",
    to: "/NewReleases",
    icon: <IoIosRocket size={20} />,
    badge: {
      color: "info",
    },
  },

  {
    name: "Profile",
    icon: <Person2Icon className="h-5 w-5 text-gray-400" />,
    dropdownIcon: <ChevronDownIcon className="h-5 w-5 ml-2 text-gray-400" />,

    badge: {
      color: "info",
    },
    dropdown: [
      {
        name: "Wallet",
        to: "/wallet",
        icon: <FaWallet size={15} className="mr-2" />,
      },
      {
        name: "Vault",
        to: "/vault",
        icon: <PiVaultFill size={18} className="mr-2" />,
      },
      {
        name: "VIP",
        to: "/vip",
        icon: <MdEmojiEvents size={18} className="mr-2" />,
      },
      {
        name: "Statistics",
        to: "/statistics",
        icon: <LegendToggleIcon size={18} className="mr-0" />,
      },
      {
        name: "Notification",
        to: "/notification",
        icon: <LuListTodo size={18} className="mr-1" />,
        // Uncomment if you want to add a specific action
        // action: () => handleMenuOpen(),
      },
      {
        name: "Setting",
        to: "/setting",
        icon: <MdSettings size={18} className="mr-1" />,
      },
      {
        name: "Logout",
        to: "/logout",
        icon: <LogoutIcon />,
        badge: {
          color: "info",
        },
      },
    ],
  }
]
  

export default nav;