// import React from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";

// export const SidebarNav = ({ items, openMenubar }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//     window.location.reload();
//   };

//   const navLink = (name, icon, badge, indent = false, index) => {
//     return (
//       <>
//         <div>
//           <li
//             key={index}
//             className={`flex items-center 

//             ${
//               name === "Games"
//                 ? "border-b-2 bg-[#213743] p-1.5 rounded-md w-40"
//                 : ""
//             }
//             ${
//               name === "Logout" ? "bg-[#213743] p-1.5 rounded-md w-40 ml-4" : ""
//             }`}
//             onClick={name === "Logout" ? handleLogout : undefined}
//           >
//             <div className="text-white">
//               {icon ? (
//                 <>{index % 2 === 0 ? icon : icon}</>
//               ) : (
//                 indent && (
//                   <span className="nav-icon">
//                     <span className="nav-icon-bullet"></span>
//                   </span>
//                 )
//               )}
//             </div>
//             <span className={`ml-4 ${openMenubar ? "block" : "hidden"}`}>
//               {name && name}
//             </span>
//             {badge && (
//               <span
//                 color={badge.color}
//                 className={`ml-4 ${openMenubar ? "block" : "hidden"}`}
//               >
//                 {badge.text}
//               </span>
//             )}
//           </li>
//         </div>
//       </>
//     );
//   };

//   // ${
//   //   name === "Favourites" ||
//   //   name === "Recent" ||
//   //   name === "My Bets" ||
//   //   name === "Lobby" ||
//   //   name === "Listor Originals" ||
//   //   name === "Slot" ||
//   //   name === "Live Casino" ||
//   //   name === "Game Shows" ||
//   //   name === "Listor Exclusives" ||
//   //   name === "Profile" ||
//   //   name === "New Releases"
//   //     ? "bg-[#213743] p-1.5 rounded-md w-40"
//   //     : ""
//   // }

//   const navItem = (item, index, indent = false) => {
//     const { component, name, badge, icon, ...rest } = item;
//     if (name === "Logout") {
//       return navLink(name, icon, badge, indent, index);
//     }
//     return (
//       <div as="div" key={index} className="flex items-center p-2 pl-4">
//         {rest.to || rest.href ? (
//           <>
//             <Link {...(rest.to && { as: NavLink })} {...rest}>
//               {navLink(name, icon, badge, indent, index)}
//             </Link>
//           </>
//         ) : (
//           navLink(name, icon, badge, indent)
//         )}
//       </div>
//     );
//   };

//   const navGroup = (item, index) => {
//     const { component, name, icon, items, to, ...rest } = item;
//     const Component = component;
//     return (
//       <div compact as="div" key={index} toggler={navLink(name, icon)} {...rest}>
//         {item.items?.map((item, index) =>
//           item.items ? navGroup(item, index) : navItem(item, index, true)
//         )}
//       </div>
//     );
//   };

//   return (
//     <div>
//       {items &&
//         items.map((item, index) =>
//           item.items ? navGroup(item, index) : navItem(item, index)
//         )}
//     </div>
//   );
// };

// SidebarNav.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.any).isRequired,
// };
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const SidebarNav = ({ items, openMenubar }) => {
  // const [openWallet, setOpenWallet] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(null); // Track which dropdown is open
  const navigate = useNavigate();
  const [popupVisible, setPopupVisible] = useState(null);  // Track which item has a popup


  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  const handlePopupToggle = (itemName) => {
    setPopupVisible(popupVisible === itemName ? null : itemName);  // Toggle popup visibility
  };

  const toggleDropdown = (index) => {
    // Toggle visibility for the clicked dropdown
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  const navLink = (name, icon, badge, indent = false, index) => {
    return (
      <li
        key={index}
        className={`flex items-center
          ${name === "Games"
            ? "border-b-2 bg-[#213743] p-1.5 rounded-md w-40"
            : ""
          }
          ${name === "Logout" ? "bg-[#213743] p-1.5 rounded-md w-40 ml-4" : ""
          }`}
        onClick={name === "Logout" ? handleLogout : undefined}
      >
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
    );
  };

  const navItem = (item, index, indent = false) => {
    const { component, name, badge, icon, dropdown, ...rest } = item;
    
  if (dropdown) {
    return (
      <div key={index} className="flex flex-col items-start p-2 pl-4">
        <div
          onClick={() => toggleDropdown(index)}
          className="flex items-center cursor-pointer"
        >
          {icon && <div>{icon}</div>}
          <span className={`ml-10 ${openMenubar ? "block" : "hidden"}`}>{name}</span>
        </div>
        {dropdownVisible === index && (
          <div className="ml-2 bg-[#213743] text-white rounded-md p-2 mt-2">
            {dropdown.map((dropdownItem, idx) => (
              <Link
                key={idx}
                to={dropdownItem.to}
                className="block px-4 py-2 hover:bg-[#0f212e] transition-colors"
                onClick={dropdownItem.action === "logout" ? handleLogout : undefined}
                >
                  {dropdownItem.icon && <span className="mr-2 inline-block">{dropdownItem.icon}</span>}
                  <span>{dropdownItem.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
    return (
      <div as="div" key={index} className="flex items-center p-2 pl-4">
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
