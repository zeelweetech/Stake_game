import React from "react";
import { Divider, Tooltip } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import stackCarshLogo from "../../../assets/svg/stackCarshLogo.svg";
import { Link } from "react-router-dom";

function CrashGameFooter() {
  return (
    <div className="py-5 px-4 w-full bg-[#0f212e]">
      <div className="flex justify-between items-center">
        <div className="space-x-9 text-[#b1bad3]">
          <Tooltip title="Game Settings" placement="top" className="hover:text-white hover:cursor-pointer">
            <SettingsIcon fontSize="small"/>
          </Tooltip>
          <Tooltip title="Enable Theatre Mode" placement="top" className="hover:text-white hover:cursor-pointer">
            <CheckBoxOutlineBlankIcon fontSize="small"/>
          </Tooltip>
          <Tooltip title="Open Live Status" placement="top" className="hover:text-white hover:cursor-pointer">
            <LegendToggleIcon fontSize="small"/>
          </Tooltip>
          <Tooltip title="Favourite Game" placement="top" className="hover:text-white hover:cursor-pointer">
            <StarOutlineIcon fontSize="small"/>
          </Tooltip>
          <Divider
            flexItem
            orientation="vertical"
            sx={{ backgroundColor: "black" }}
          />
        </div>
        <div>
          <img src={stackCarshLogo} alt="Not Found" />
        </div>
        <div>
          <Link className="text-[#b1bad3] hover:text-white">Fairness</Link>
        </div>
      </div>
    </div>
  );
}

export default CrashGameFooter;
