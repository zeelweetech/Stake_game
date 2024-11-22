import React from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export const SidebarNav = ({ items, openMenubar }) => {
  const navLink = (name, icon, badge, indent = false, index) => {
    return (
      <>
        <li key={index} className="flex items-center">
          <div className="text-white">
            {icon ? (
              <>{index % 2 === 0 ? icon : icon}</>
            ) : (
              indent && (
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>
              )
            )}
          </div>  
          <span className={`ml-4 ${openMenubar ? "block" : "hidden"}`}>
            {name && name}
          </span>
          {badge && (
            <span
              color={badge.color}
              className={`ml-4 ${openMenubar ? "block" : "hidden"}`}
            >
              {badge.text}
            </span>
          )}
        </li>
      </>
    );
  };

  const navItem = (item, index, indent = false) => {
    const { component, name, badge, icon, ...rest } = item;
    return (
      <div as="div" key={index} className="flex items-center p-2 pl-4">
        {rest.to || rest.href ? (
          <>
            <Link {...(rest.to && { as: NavLink })} {...rest}>
              {navLink(name, icon, badge, indent, index)}
            </Link>
          </>
        ) : (
          navLink(name, icon, badge, indent)
        )}
      </div>
    );
  };

  const navGroup = (item, index) => {
    const { component, name, icon, items, to, ...rest } = item;
    const Component = component;
    return (
      <div compact as="div" key={index} toggler={navLink(name, icon)} {...rest}>
        {item.items?.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index, true)
        )}
      </div>
    );
  };

  return (
    <div>
      {items &&
        items.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index)
        )}
    </div>
  );
};

SidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};
