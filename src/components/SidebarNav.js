import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Wallet from "../views/Profile/Wallet";
import Vault from "../views/Profile/Vault";
import Vip from "../views/Profile/Vip";
import Statistic from "../views/Profile/Statistic";
import LogoutDialog from "../views/Profile/Logout";
import { useDispatch } from "react-redux";
import { setAnchorEl } from "../features/auth/authSlice";
import Notification from "../views/Profile/Notification";

export const SidebarNav = ({ items, openMenubar, toggleSidebar, dropdownVisible, setDropdownVisible }) => {
  const [profilePopupOpen, setProfilePopupOpen] = useState({
    isWalletOpen: false,
    isVaultOpen: false,
    isVipOpen: false,
    isStatistic: false,
    isNotification: false,
    isLogoutDialog: false
  });
  const dispatch = useDispatch();

  const toggleDropdown = (index) => {
    if (!openMenubar) toggleSidebar();
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  const firstGroup = ["Dashboard", "Favourites", "Recent", "My Bets"]
  // const Games = ["Games"]
  const secondGroup = [
    "Games",
    "Lobby",
    "Listor Originals",
    "Slots",
    "Live Casino",
    "Game Shows",
    "Listor Exclusives",
    "New Releases",
  ];
  const thirdGroup = ["Profile"];

  // firstGroup and secondGroup 
  const navLink = (name, icon, badge, indent = false, index) => (
    <li
      key={index}
      className={`flex items-center font-semibold ${name === "Games"
        ? "border-b-2 w-full  border-[#2F4553] p-1.5 "
        : ""
        }`}
    >
      <div className="text-white px-1 ">
        {icon ? <>{icon}</> : indent && <span className="nav-icon"></span>}
      </div>
      <span className={`ml-1 ${openMenubar ? "block" : "hidden"}`}>{name}</span>
      {badge && (
        <span
          style={{ color: badge.color }}
          className={`ml-1 ${openMenubar ? "block" : "hidden"}`}
        >
          {badge.text}
        </span>
      )}
    </li>
  );

  // thirdGroup profile view
  const navItem = (item, index, indent = false) => {
    const { name, badge, icon, dropdown, ...rest } = item;
    if (dropdown && name === "Profile") {
      return (
        <div
          key={index}
          className="flex flex-col items-start pl-1 font-semibold hover:bg-[#213743]"
        >
          <div
            onClick={() => toggleDropdown(index)}
            className="flex items-center cursor-pointer border-b-2 border-[#2F4553] w-full pb-2 hover:bg-[#2F4553]"
          >
            {/* Profile Icon */}
            {icon && (
              <span>
                {icon}
              </span>
            )}

            {/* Profile Text (only shown when sidebar is open) */}
            {openMenubar && (
              <span className="ml-2 ">{name}</span>
            )}

            {/* Dropdown Icon */}
            {dropdownVisible === index ? (
              <ChevronDownIcon
                className={`ml-auto ${openMenubar ? "h-5 w-5" : "h-8 w-8"
                  } `}
              />
            ) : (
              <ChevronRightIcon
                className={`ml-auto ${openMenubar ? "h-5 w-5" : "h-8 w-8"
                  } `}
              />
            )}
          </div>

          {/* Dropdown Menu */}
          {dropdownVisible === index && (
            <div className="ml-2 bg-[#213743] text-white rounded-md mt-1">
              {dropdown.map((dropdownItem, idx) => (
                <div
                  key={idx}
                  className="block w-full px-4 py-2 hover:bg-[#2F4553] transition-colors rounded-md cursor-pointer"
                >
                  {dropdownItem.name === "Setting" ? (
                    <Link to={dropdownItem.to} className="flex items-center">
                      {dropdownItem.icon && (
                        <span className="mr-2 inline-block">
                          {dropdownItem.icon}
                        </span>
                      )}
                      <span>{dropdownItem.name}</span>
                    </Link>
                  ) : dropdownItem.name === "Notification" ? (
                    <button
                      data-menu-type="notifications"
                      onClick={(event) => dispatch(setAnchorEl(event.currentTarget))}
                      className="flex items-center"
                    >
                      {dropdownItem.icon && (
                        <span className="mr-2 inline-block">{dropdownItem.icon}</span>
                      )}
                      <span>{dropdownItem.name}</span>
                    </button>
                  ) : (
                    <button onClick={() => {
                      setProfilePopupOpen((prev) => ({
                        ...prev,
                        isWalletOpen: dropdownItem.name === "Wallet",
                        isVaultOpen: dropdownItem.name === "Vault",
                        isVipOpen: dropdownItem.name === "VIP",
                        isStatistic: dropdownItem.name === "Statistics",
                        isLogoutDialog: dropdownItem.name === "Logout",
                        isNotification: dropdownItem.name === "Notification",
                      }))
                    }} className="flex items-center">
                      {dropdownItem.icon && (
                        <span className="mr-2 inline-block">
                          {dropdownItem.icon}
                        </span>
                      )}
                      <span>{dropdownItem.name}</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }
    return (
      <div key={index} className="flex items-center p-2 px-0 hover:bg-[#2F4553] w-full ">
        {rest.to || rest.href ? (
          <Link {...(rest.to && { as: NavLink })} {...rest}>
            {navLink(name, icon, badge, indent, index)}
          </Link>
        ) : (
          navLink(name, icon, badge, indent, index)
        )}
      </div>
    );
  };

  const renderGroup = (groupItems, groupName) => (
    <div key={groupName} className="bg-[#213743] mb-2 rounded-sm p-1 mx-1.5  ">
      <ul>
        {items
          .filter((item) => groupItems.includes(item.name))
          .map((item, index) => navItem(item, index))}
      </ul>
    </div>
  );

  return (
    <div>
      {renderGroup(firstGroup, "First Group")}
      {/* {renderGroup(Games, "Games")} */}
      {renderGroup(secondGroup, "Second Group")}
      {renderGroup(thirdGroup, "Third Group")}
      {profilePopupOpen.isWalletOpen && <Wallet closeWallet={() => setProfilePopupOpen({ ...profilePopupOpen, isWalletOpen: false })} />}
      {profilePopupOpen.isVaultOpen && <Vault closeVault={() => setProfilePopupOpen({ ...profilePopupOpen, isVaultOpen: false })} />}
      {profilePopupOpen.isVipOpen && <Vip closeVip={() => setProfilePopupOpen({ ...profilePopupOpen, isVipOpen: false })} />}
      {profilePopupOpen.isStatistic && <Statistic closeStatistic={() => setProfilePopupOpen({ ...profilePopupOpen, isStatistic: false })} />}
      {profilePopupOpen.isLogoutDialog && <LogoutDialog closeLogoutDialog={() => setProfilePopupOpen({ ...profilePopupOpen, isLogoutDialog: false })} />}
      {profilePopupOpen.isNotification && <Notification closeNotification={() => setProfilePopupOpen({ ...profilePopupOpen, isNotification: false })} />}
    </div>
  );
};

SidebarNav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.node,
      badge: PropTypes.shape({
        color: PropTypes.string,
        text: PropTypes.string,
      }),
      dropdown: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          to: PropTypes.string,
          icon: PropTypes.node,
        })
      ),
    })
  ).isRequired,
  openMenubar: PropTypes.bool.isRequired,
};
