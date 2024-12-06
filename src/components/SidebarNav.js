import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export const SidebarNav = ({ items, openMenubar }) => {
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const toggleDropdown = (index) => {
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

  const navLink = (name, icon, badge, indent = false, index) => (
    <li
      key={index}
      className={`flex items-center font-semibold ${name === "Games"
        ? "border-b-2 w-full  border-[#2F4553] p-1.5 "
        : ""
      }`}
    >
      <div className="text-white">
        {icon ? <>{icon}</> : indent && <span className="nav-icon"></span>}
      </div>
      <span className={`ml-2 ${openMenubar ? "block" : "hidden"}`}>{name}</span>
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

  const navItem = (item, index, indent = false) => {
    const { name, badge, icon, dropdown, ...rest } = item;

    if (dropdown) {
      return (
        <div key={index} className="flex flex-col items-start p-2 pl-1 font-semibold"> {/* Adjust padding-left */}
          <div
            onClick={() => toggleDropdown(index)}
            className="flex items-center cursor-pointer border-b-2 border-[#2F4553] w-full pb-2" // Adding the gray border
          >
            {icon && <div>{icon}</div>}
            <span className={`ml-2 ${openMenubar ? "block" : "hidden"}`}>
              {name}
            </span>
            <ChevronDownIcon
              className={`h-5 w-5 ml-2 text-gray-400 ${openMenubar ? "block" : "hidden"}`}
            />
          </div>
          <hr />
          {dropdownVisible === index && (
            <div className="ml-2 bg-[#213743] text-white rounded-md p-2 mt-2">
              {dropdown.map((dropdownItem, idx) => (
                <Link
                  key={idx}
                  to={dropdownItem.to}
                  className="block px-4 py-2 hover:bg-[#0f212e] transition-colors"
                >
                  {dropdownItem.icon && (
                    <span className="mr-2 inline-block">
                      {dropdownItem.icon}
                    </span>
                  )}
                  <span>{dropdownItem.name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <div key={index} className="flex items-center p-2 pl-1"> 
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
    <div key={groupName} className="bg-[#213743] mb-2 rounded-sm p-2 mx-1.5">
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
