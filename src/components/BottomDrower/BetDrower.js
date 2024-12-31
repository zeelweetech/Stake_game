import { useEffect, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IoTrophy } from "react-icons/io5";
import { ReactComponent as MyBets } from "../../../src/assets/svg/MyBets.svg";
import { ReactComponent as Races } from "../../../src/assets/svg/Races.svg";
import { DataGrid } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import Statistic from "../../../src/assets/svg/Statistic.svg"
import { getAllBets, getMyBets } from "../../services/GameServices";
import { logDOM } from "@testing-library/react";
import { LuListTodo } from "react-icons/lu";
import { decodedToken } from "../../resources/utility";

const BetDrower = ({ openDrower, onClose }) => {
    const [selectedView, setSelectedView] = useState("My Bets");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [betsData, setBetsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalCount, setTotalCount] = useState(0);
    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 10,
    });
    // const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const { userId } = useParams();
    const decoded = decodedToken();

    useEffect(() => {
        getMyBetsdata();
        getAllBetsdata();
    }, [paginationModel?.page, paginationModel?.pageSize, userId]);



    const getAllBetsdata = async () => {
        try {
            const response = await getAllBets({
                userId: decoded?.userId,
                page: paginationModel?.page + 1,
                pageSize: paginationModel?.pageSize,
            });
            // console.log("llllllllllll",response);
            setBetsData(response?.BetList || []);
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch users: ", error);
            setLoading(false);
        }
    };


    const getMyBetsdata = async () => {
        try {
            const response = await getMyBets({
                userId: decoded?.userId,
                page: paginationModel?.page + 1,
                pageSize: paginationModel?.pageSize,
            }); // console.log("mmmmmmmmmmm", response);
            setBetsData(response?.response || []);
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch users: ", error);
            setLoading(false);
        }
    };

    const handleViewChange = (view) => {
        setSelectedView(view);
        setDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const highRoller = (
        <IoTrophy className="w-4 h-4 text-white mr-2" />
    );

    const rows = betsData.map((bet) => ({
        id: bet ? bet.id : <LuListTodo />,
        gameName: bet?.game?.gameName || "-",
        winAmount: bet?.winAmount || "-",
    }));
    const MyBetColumns = () => {
        const columns = [
            {
                field: "gameName",
                headerName: "Game",
                width: 220,
                headerClassName: "column-header",
                cellClassName: "column-cell",
            },
            {
                field: "winAmount",
                headerName: "Payout",
                width: 220,
                headerClassName: "column-header",
                cellClassName: "column-cell",
            },
        ]
        return columns
    }
    const allBetRows = betsData.map((bet) => ({
        id: bet?.id,
        gameName: bet?.game?.gameName || "-",
        winAmount: bet?.winAmount || "-",
    }));
    const AllBetColumns = () => {
        const columns = [
            {
                field: "gameName",
                headerName: "Game",
                width: 220,
                headerClassName: "column-header",
                cellClassName: "column-cell",
            },
            {
                field: "winAmount",
                headerName: "PayOut",
                width: 220,
                headerClassName: "column-header",
                cellClassName: "column-cell",
            },
        ]
        return columns
    }

    return (
        <div className={`fixed left-0 h-[28rem] right-0 bg-[#0f212e] shadow-lg transition-all duration-300 ease-in-out ${openDrower ? 'bottom-[3.65rem] z-[1000]' : '-bottom-full z-0'}`} >
            <div className="flex justify-between px-3 items-center bg-[#0f212e] shadow-lg h-12 relative">
            <button
                    onClick={toggleDropdown}
                    className="inline-flex items-center w-full bg-[#0f212e] px-3 py-3 text-sm font-medium text-white"
                >
                    {selectedView === "My Bets" ? <MyBets className="w-4 h-4 text-white mr-2" /> :
                        selectedView === "All Bets" ? <MyBets className="w-4 h-4 text-white mr-2" /> :
                            selectedView === "High Rollers" ? highRoller :
                                selectedView === "Races" ? <Races className="w-4 h-4 text-white mr-2" /> : null}
                    <span className="ml-2">{selectedView}</span>
                    {dropdownOpen ? (
                        <ChevronDownIcon className="ml-2 h-5 w-5" />
                    ) : (
                        <ChevronUpIcon className="ml-2 h-5 w-5" />
                    )}
                </button>

                {dropdownOpen && (
                    <div className="absolute top-full shadow-lg left-16 bg-white text-black font-medium rounded-sm z-10 w-max text-center">
                        <button
                            onClick={() => handleViewChange("My Bets")}
                            className={`text-gray-700 block py-2 px-4 text-sm ${selectedView === "My Bets" && "font-bold"}`}
                        >
                            My Bets
                        </button>
                        <button
                            onClick={() => handleViewChange("All Bets")}
                            className={`text-gray-700 block py-2 px-4 text-sm ${selectedView === "All Bets" && "font-bold"}`}
                        >
                            All Bets
                        </button>
                        <button
                            onClick={() => handleViewChange("High Rollers")}
                            className={`text-gray-700 block py-2 px-4 text-sm ${selectedView === "High Rollers" && "font-bold"}`}
                        >
                            High Rollers
                        </button>
                        <button
                            onClick={() => handleViewChange("Races")}
                            className={`text-gray-700 block py-2 px-4 text-sm ${selectedView === "Races" && "font-bold"}`}
                        >
                            Races
                        </button>
                        <div className="tooltip-arrow w-2 h-3 bg-white rotate-45 absolute top-[-6px] left-14 "></div>

                    </div>
                )}
                <IconButton
                    onClick={onClose}
                    sx={{ color: "white", position: "absolute", top: 8, right: 8 }}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            </div>
             <div className="overflow-y-auto h-[24.5rem]">
                {selectedView === "My Bets" ? (
                    <div>
                        <div className="overflow-x-auto md:overflow-x-hidden scrollbar-thin">
                            <DataGrid
                                rows={rows}
                                columns={MyBetColumns()}
                                loading={loading}
                                rowCount={totalCount}
                                pagination={false}
                                hideFooterPagination={true}
                                sx={{
                                    border: "none",
                                    color: "#b1bad3",
                                    "& .MuiDataGrid-cell": {
                                        border: "none",
                                    },
                                    "& .MuiDataGrid-columnHeader": {
                                        borderBottom: "none",
                                        borderTop: "none",
                                    },
                                    "& .MuiDataGrid-footerContainer": {
                                        borderTop: "none",
                                        color: "white",
                                    },
                                }}
                            />

                        </div>
                    </div>
                ) : selectedView === "All Bets" ? (
                    <div>
                        <div className="overflow-x-auto md:overflow-x-hidden scrollbar-thin">
                            <DataGrid
                                rows={allBetRows}
                                columns={AllBetColumns()}
                                loading={loading}
                                rowCount={totalCount}
                                pagination={false}
                                hideFooterPagination={true}
                                sx={{
                                    border: "none",
                                    color: "#b1bad3",
                                    "& .MuiDataGrid-cell": {
                                        border: "none",
                                    },
                                    "& .MuiDataGrid-columnHeader": {
                                        borderBottom: "none",
                                        borderTop: "none",
                                    },
                                    "& .MuiDataGrid-footerContainer": {
                                        borderTop: "none",
                                        color: "white",
                                    },
                                }}
                            />

                        </div>
                    </div>
                ) : selectedView === "High Rollers" ? (
                    // When high roller data is available, the table data should change; currently, all bet data is being used.
                    <div>
                        <div className="overflow-x-auto md:overflow-x-hidden scrollbar-thin">
                            <DataGrid
                                rows={rows}
                                columns={AllBetColumns()}
                                loading={loading}
                                rowCount={totalCount}
                                pagination={false}
                                hideFooterPagination={true}
                                sx={{
                                    border: "none",
                                    color: "#b1bad3",
                                    "& .MuiDataGrid-cell": {
                                        border: "none",
                                    },
                                    "& .MuiDataGrid-columnHeader": {
                                        borderBottom: "none",
                                        borderTop: "none",
                                    },
                                    "& .MuiDataGrid-footerContainer": {
                                        borderTop: "none",
                                        color: "white",
                                    },
                                }}
                            />

                        </div>
                    </div>
                ) : selectedView === "Races" ? (
                    <div className="flex justify-center">
                        <div>
                            <div className="flex justify-center">
                                <img src={Statistic} alt="Statistic" sx={{ fontSize: "120px", color: "#b1bad3" }} />
                            </div>
                            <p>No Trophies Data available.</p>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default BetDrower;




