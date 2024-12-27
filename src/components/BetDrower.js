import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IoTrophy } from "react-icons/io5";
import { ReactComponent as MyBets } from "../assets/svg/MyBets.svg";
import { ReactComponent as Races } from "../assets/svg/Races.svg";
import { LuListTodo } from "react-icons/lu";
import { DataGrid } from "@mui/x-data-grid";
import Columns from "../../src/views/component/GameTable/MyBets/columns";
import { format } from "date-fns";

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
        gameName: bet?.game?.gameName ? bet?.game?.gameName : "-",
        userName: bet?.user?.userName ? bet?.user?.userName : "-",
        betTime: bet?.betTime ? format(new Date(bet.betTime), "hh:mm a") : "-",
        betAmount: bet?.betAmount ? bet?.betAmount : "-",
        multiplier: bet?.multiplier ? bet?.multiplier : "-",
        winAmount: bet?.winAmount ? bet?.winAmount : "-",
    }));

    return (
        <div className={`fixed h-[28rem] left-0 right-0 bg-[#0f212e] shadow-lg transition-all duration-300 ease-in-out ${openDrower ? 'bottom-[3.65rem] z-[1000]' : '-bottom-full z-0'}`} >
            <div className="bg-[#0f212e] shadow-lg h-12">
                <IconButton
                    onClick={onClose}
                    sx={{ color: "white", position: "absolute", top: 8, right: 8 }}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
                <button
                    onClick={toggleDropdown}
                    className="inline-flex justify-start w-full bg-[#0f212e] px-3 py-3 text-sm font-medium text-white"
                >
                    {selectedView === "My Bets" ? <MyBets className="w-4 h-4 text-white mr-2" /> :
                        selectedView === "All Bets" ? <MyBets className="w-4 h-4 text-white mr-2" /> :
                            selectedView === "High Rollers" ? highRoller :
                                selectedView === "Races" ? <Races className="w-4 h-4 text-white mr-2" /> : null}
                    <span className="ml-2">{selectedView}</span>
                    {dropdownOpen ? (
                        <ChevronDownIcon className=" ml-2 h-5 w-5" />
                    ) : (
                        <ChevronUpIcon className="ml-2 h-5 w-5" />
                    )}
                </button>

                {dropdownOpen && (
                    <div className="relative">
                        <div className="absolute top-full shadow-lg left-14 mt-2 bg-white text-black font-medium rounded-sm px-4 py-2 z-10 w-max text-center">
                            <button
                                onClick={() => handleViewChange("My Bets")}
                                className={`text-gray-700 block py-1 text-sm ${selectedView === "My Bets" && "font-bold"}`}
                            >
                                My Bets
                            </button>
                            <button
                                onClick={() => handleViewChange("All Bets")}
                                className={`text-gray-700 block py-1 text-sm ${selectedView === "All Bets" && "font-bold"}`}
                            >
                                All Bets
                            </button>
                            <button
                                onClick={() => handleViewChange("High Rollers")}
                                className={`text-gray-700 block py-1 text-sm ${selectedView === "High Rollers" && "font-bold"}`}
                            >
                                High Rollers
                            </button>
                            <button
                                onClick={() => handleViewChange("Races")}
                                className={`text-gray-700 block py-1 text-sm ${selectedView === "Races" && "font-bold"}`}
                            >
                                Races
                            </button>
                            <div className="tooltip-arrow w-2 h-3 bg-white rotate-45 absolute top-[-6px] left-1/2 "></div>
                        </div>
                    </div>
                )}
            </div>
            <div className="overflow-y-auto">
                {selectedView === "My Bets" ? (
                    <div>
                        <div className="overflow-x-auto md:overflow-x-hidden scrollbar-thin">
                            <DataGrid
                                rows={rows}
                                columns={Columns()}
                                loading={loading}
                                rowCount={totalCount}
                                paginationModel={paginationModel}
                                paginationMode="server"
                                onPaginationModelChange={setPaginationModel}
                                pageSizeOptions={[10, 20]}
                                getRowClassName={(params) =>
                                    params.indexRelativeToCurrentPage % 2 === 0
                                        ? "row-dark"
                                        : "row-light"
                                }
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
                                        borderBottom: "none",
                                        color: "white",
                                    },
                                    "& .MuiTablePagination-root": {
                                        color: "white",
                                    },
                                    "& .MuiTablePagination-selectIcon": {
                                        color: "white",
                                    },
                                    overflowY: "hidden",
                                    width: "100%",
                                    height: "auto", // Allow height to adjust based on content
                                }}
                            />
                            
                        </div>
                    </div>
                ) : selectedView === "All Bets" ? (
                    <div>
                        hello
                    </div>
                ) : selectedView === "High Rollers" ? (
                    <div>
                        how r u
                    </div>
                ) : selectedView === "Races" ? (
                    <div>
                        kkkkkkkkk
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default BetDrower;