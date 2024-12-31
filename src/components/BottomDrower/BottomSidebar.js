import { useState } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom"; // Assuming navigate is from react-router
import casino from "../../assets/img/casino.png";
import casino1 from "../../assets/img/casino1.jpg";
import sports from "../../assets/img/sports.png";
import sports1 from "../../assets/img/sports1.png";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { setAnchorEl } from "../../features/auth/authSlice";
import PropTypes from "prop-types";
import Wallet from "../../views/Profile/Wallet";
import Vault from "../../views/Profile/Vault";
import Vip from "../../views/Profile/Vip";
import Statistic from "../../views/Profile/Statistic";
import LogoutDialog from "../../views/Profile/Logout";
import Notification from "../../views/Profile/Notification";

const BottomDrawer = ({ isOpen, items, handleDrowerOpen, dropdownVisible, setDropdownVisible, openMenubar }) => {
    const [searchValue, setSearchValue] = useState("");
    const [casinoClicked, setCasinoClicked] = useState(false);
    const [sportsClicked, setSportsClicked] = useState(false);
    const [profilePopupOpen, setProfilePopupOpen] = useState({
        isWalletOpen: false,
        isVaultOpen: false,
        isVipOpen: false,
        isStatistic: false,
        isNotification: false,
        isLogoutDialog: false
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleDropdown = (index) => {
        if (!isOpen) handleDrowerOpen();
        setDropdownVisible(dropdownVisible === index ? null : index);
    };

    const handleItemClick = (path) => {
        handleDrowerOpen(); // Close the drawer
        // setDropdownVisible(null); // Close the dropdown
        navigate(path); // Navigate to the specified path
    };

    const handleCasinoClick = () => {
        setCasinoClicked((prev) => !prev);
        setSportsClicked(false);
        navigate("/casino/home");
    };

    const handleSportsClick = () => {
        setSportsClicked((prevState) => !prevState);
        setCasinoClicked(false);
        navigate("/ComeSoon");
    };

    const firstGroup = ["Dashboard", "Favourites", "Recent", "My Bets"];
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

    const navLink = (name, icon, badge, indent = false, index, path) => (
        <li key={index} className={`flex items-center font-semibold ${name === "Games" ? "border-b-2 w-full border-[#2F4553] p-1.5" : ""}`}>
            <div className="text-white px-1 ">
                {icon ? <>{icon}</> : indent && <span className="nav-icon"></span>}
            </div>
            <span className={`ml-1 ${openMenubar ? "block" : "hidden"}`}>{name}</span>
            {badge && (
                <span style={{ color: badge.color }} className={`ml-1 ${openMenubar ? "block" : "hidden"}`}>
                    {badge.text}
                </span>
            )}
        </li>
    );
    const navItem = (item, index, indent = false) => {
        const { name, badge, icon, dropdown, ...rest } = item;
        if (dropdown && name === "Profile") {
            return (
                <div key={index} className="flex flex-col items-start pl-1 font-semibold hover:bg-[#213743]">
                    <div onClick={() => toggleDropdown(index)} className="flex items-center cursor-pointer border-b-2 border-[#2F4553] w-full pb-2 hover:bg-[#2F4553]">
                        {icon && <span>{icon}</span>}
                        {openMenubar && <span className="ml-2">{name}</span>}
                        {dropdownVisible === index ? (
                            <ChevronDownIcon className={`ml-auto ${openMenubar ? "h-5 w-5" : "h-8 w-8"}`} />
                        ) : <ChevronRightIcon className={`ml-auto ${openMenubar ? "h-5 w-5" : "h-8 w-8"}`} />
                    }
                    </div>
                    {dropdownVisible === index && (
                        <div className="ml-2 bg-[#213743] text-white rounded-md mt-1">
                            {dropdown.map((dropdownItem, idx) => (
                                <div
                                    key={idx}
                                    className="block w-full px-4 py-2 hover:bg-[#2F4553] transition-colors rounded-md cursor-pointer"
                                    onClick={() => handleItemClick(dropdownItem.to)} // Close dropdown on item click
                                >
                                    {dropdownItem.name === "Setting" ? (
                                        <Link to={dropdownItem.to} className="flex items-center">
                                            {dropdownItem.icon && <span className="mr-2 inline-block">{dropdownItem.icon}</span>}
                                            <span>{dropdownItem.name}</span>
                                        </Link>
                                    ) : dropdownItem.name === "Notification" ? (
                                        <button
                                            data-menu-type="notifications"
                                            onClick={(event) => {
                                                dispatch(setAnchorEl(event.currentTarget));
                                                setDropdownVisible(null); // Close dropdown on notification click
                                            }}
                                            className="flex items-center"
                                        >
                                            {dropdownItem.icon && <span className="mr-2 inline-block">{dropdownItem.icon}</span>}
                                            <span>{dropdownItem.name}</span>
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                setProfilePopupOpen((prev) => ({
                                                    ...prev,
                                                    isWalletOpen: dropdownItem.name === "Wallet",
                                                    isVaultOpen: dropdownItem.name === "Vault",
                                                    isVipOpen: dropdownItem.name === "VIP",
                                                    isStatistic: dropdownItem.name === "Statistics",
                                                    isLogoutDialog: dropdownItem.name === "Logout",
                                                    isNotification: dropdownItem.name === "Notification",
                                                }));
                                                setDropdownVisible(null); // Close dropdown on item click
                                            }}
                                            className="flex items-center"
                                        >
                                            {dropdownItem.icon && <span className="mr-2 inline-block">{dropdownItem.icon}</span>}
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
                    <Link {...(rest.to && { as: NavLink })} {...rest} onClick={() => handleItemClick(rest.to)}>
                        {navLink(name, icon, badge, indent, index)}
                    </Link>
                ) : (
                    navLink(name, icon, badge, indent, index)
                )}
            </div>
        );
    };

    const renderGroup = (groupItems, groupName) => (
        <div key={groupName} className="bg-[#213743] mb-2 rounded-sm p-1 mx-1.5">
            <ul>
                {items
                    .filter((item) => groupItems.includes(item.name))
                    .map((item, index) => navItem(item, index))}
            </ul>
        </div>
    );

    return (
        <div className={`fixed left-0 right-0 bg-[#0f212e] shadow-lg p-4 transition-all duration-300 ease-in-out ${isOpen ? 'bottom-[3.65rem] z-[1000] top-[3.5rem]' : ''} flex flex-col`} >
            <div className="flex items-center">
                <input
                    className="border-2 rounded-full w-full py-2 px-10 bg-[#0f212e] border-[#213743] hover:border-[#1b3d50] focus:outline-[#1b3d50]"
                    name="search"
                    type="text"
                    placeholder="Search your game"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <div className="absolute left-7 cursor-pointer text-[#b1bad3]">
                    <SearchIcon />
                </div>
            </div>
            <div className="py-4 flex justify-center space-x-5">
                <button onClick={handleCasinoClick} className="text-white relative min-w-[5rem] min-h-[3rem] max-h-[5rem] flex justify-end bg-cover bg-[position:0_-15px] aspect-[3.5/1] group">
                    <img src={casino1} className={`h-full w-full rounded absolute transition-opacity duration-300 group-hover:opacity-100 ${casinoClicked ? "opacity-0" : "opacity-100"}`} alt="Casino Default" />
                    <img src={casino} alt="Casino Active" className={`h-full w-full rounded absolute transition-opacity duration-300 group-hover:opacity-100 ${casinoClicked ? "opacity-100" : "opacity-0"} group-hover:opacity-100`} />
                    <span className={`absolute inset-0 flex justify-center items-center text-sm font-bold ${isOpen ? "block" : "hidden"}`}>CASINO</span>
                </button>
                <button onClick={handleSportsClick} className="text-white relative min-w-[5rem] min-h-[3rem] max-h-[5rem] flex justify-end bg-cover bg-[position:0_-15px] aspect-[3.5/1] group">
                    <img src={sports} alt="Sports Default" className={`h-full w-full rounded absolute transition-opacity duration-300 group-hover:opacity-100 ${sportsClicked ? "opacity-0" : "opacity-100 hover:opacity-0"} group-hover:opacity-100`} />
                    <img src={sports1} className={`h-full w-full rounded absolute transition-opacity duration-300 group-hover:opacity-100 ${sportsClicked ? "opacity-100" : "opacity-0 hover:opacity-100"}`} alt="Sports Active" />
                    <span className={`absolute inset-0 flex justify-center items-center text-sm font-bold ${isOpen ? "block" : "hidden"}`}>SPORTS</span>
                </button>
            </div>
            <div className="overflow-y-auto abc flex-grow">
                {renderGroup(firstGroup, "First Group")}
                {renderGroup(secondGroup, "Second Group")}
                {renderGroup(thirdGroup, "Third Group")}
                {profilePopupOpen.isWalletOpen && <Wallet closeWallet={() => setProfilePopupOpen({ ...profilePopupOpen, isWalletOpen: false })} />}
                {profilePopupOpen.isVaultOpen && <Vault closeVault={() => setProfilePopupOpen({ ...profilePopupOpen, isVaultOpen: false })} />}
                {profilePopupOpen.isVipOpen && <Vip closeVip={() => setProfilePopupOpen({ ...profilePopupOpen, isVipOpen: false })} />}
                {profilePopupOpen.isStatistic && <Statistic closeStatistic={() => setProfilePopupOpen({ ...profilePopupOpen, isStatistic: false })} />}
                {profilePopupOpen.isLogoutDialog && <LogoutDialog closeLogoutDialog={() => setProfilePopupOpen({ ...profilePopupOpen, isLogoutDialog: false })} />}
                {profilePopupOpen.isNotification && <Notification closeNotification={() => setProfilePopupOpen({ ...profilePopupOpen, isNotification: false })} />}
            </div>
        </div>
    );
};

// BottomDrawer.propTypes = {
//     items: PropTypes.arrayOf(
//         PropTypes.shape({
//             name: PropTypes.string.isRequired,
//             icon: PropTypes.node,
//             badge: PropTypes.shape({
//                 color: PropTypes.string,
//                 text: PropTypes.string,
//             }),
//             dropdown: PropTypes.arrayOf(
//                 PropTypes.shape({
//                     name: PropTypes.string,
//                     to: PropTypes.string,
//                     icon: PropTypes.node,
//                 })
//             ),
//         })
//     ).isRequired,
//     openMenubar: PropTypes.bool.isRequired,
//     isOpen: PropTypes.bool.isRequired,
//     handleDrowerOpen: PropTypes.func.isRequired,
//     dropdownVisible: PropTypes.number,
//     setDropdownVisible: PropTypes.func.isRequired,
// };

export default BottomDrawer;