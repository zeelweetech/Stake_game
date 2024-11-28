import React, { useEffect, useState } from "react";
import "../../../../App.css";
import Loader from "../../Loader";
import Columns from "./columns";
import { DataGrid } from "@mui/x-data-grid";
import {getBigWins } from "../../../../services/GameServices";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

const BigWins = () => {
  const {id} = useParams()
  const [betsData, setBetsData] = useState([]);
  const [loading, setLoading] = useState(false)
  // console.log("bigwins id==========", id);
  

  useEffect(() => {
    getBigWinsdata();
  }, [id]);

  const getBigWinsdata = async () => {
    try {
      const response = await getBigWins({
        id
      });
      // console.log("getAllBets response", response);
      setBetsData(response || []);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch users: ", error);
      setLoading(false);
    }
  };

  const rows = betsData.map((bet, index) => ({
    id: bet?.id,
    rank: index + 1,
    userName: bet?.user?.userName ? bet?.user?.userName : "-",
    betTime: bet?.betTime ? format(new Date(bet.betTime), "hh:mm a") : "-",
    betAmount: bet?.betAmount ? bet?.betAmount : "-",
    multiplier: bet?.multiplier ? bet?.multiplier : "-",
    winAmount: bet?.winAmount ? bet?.winAmount : "-",
  }));

  return (
    <>
      <div>
        <div className="py-2 xl:ml-16 md:mt-3 md:-ml-5 ml-2">
          {loading ? (
            <Loader />
          ) : (
            <div>
              <div className="flex justify-center item-center">
                <div>
                  <DataGrid
                    rows={rows}
                    columns={Columns()}
                    loading={loading}
                    paginationMode="server"
                    getRowClassName={(params) =>
                      params.indexRelativeToCurrentPage % 2 === 0 ? "row-dark" : "row-light"
                    }
                    sx={{
                      width: "99.93%",
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
                      // Add responsive styles here
                      "@media (max-width: 425px)": {
                        marginRight: "20px",
                        width: "42%",
                        fontSize: "0.8rem", 
                        overflowX: "auto", 
                        "& .MuiDataGrid-cell": {
                          whiteSpace: "nowrap", 
                        },
                        "& .MuiDataGrid-footerContainer": {
                          fontSize: "0.7rem", 
                        },
                      },
                      "@media (max-width: 375px)": {
                        width: "20%",
                        fontSize: "0.8rem", 
                        overflowX: "auto", 
                        "& .MuiDataGrid-cell": {
                          whiteSpace: "nowrap", 
                        },
                        "& .MuiDataGrid-footerContainer": {
                          fontSize: "0.7rem", 
                        },
                      },
                      // "@media (max-width: 320px)": {
                      //   width: "32.5%",
                      //   fontSize: "0.7rem",
                      //   "& .MuiDataGrid-cell": {
                      //     whiteSpace: "nowrap",
                      //   },
                      // },
                      // "@media (max-width: 414px)": {
                      //   marginRight : "10%",
                      //   width: "44.5%",
                      //   fontSize: "0.8rem", // Adjust font size for smaller screens
                      //   overflowX: "auto", // Enable horizontal scrolling
                      //   "& .MuiDataGrid-cell": {
                      //     whiteSpace: "nowrap", // Prevent content overflow
                      //   },
                      //   "& .MuiDataGrid-footerContainer": {
                      //     fontSize: "0.7rem", // Adjust footer text size
                      //   },
                      // },
                      // "@media (max-width: 390px)": {
                      //   marginRight : "10%",
                      //   width: "41.5%",
                      //   fontSize: "0.8rem", // Adjust font size for smaller screens
                      //   overflowX: "auto", // Enable horizontal scrolling
                      //   "& .MuiDataGrid-cell": {
                      //     whiteSpace: "nowrap", // Prevent content overflow
                      //   },
                      //   "& .MuiDataGrid-footerContainer": {
                      //     fontSize: "0.7rem", // Adjust footer text size
                      //   },
                      // },
                      // "@media (max-width: 430px)": {
                      //   marginRight : "10%",
                      //   width: "46%",
                      //   fontSize: "0.8rem", // Adjust font size for smaller screens
                      //   overflowX: "auto", // Enable horizontal scrolling
                      //   "& .MuiDataGrid-cell": {
                      //     whiteSpace: "nowrap", // Prevent content overflow
                      //   },
                      //   "& .MuiDataGrid-footerContainer": {
                      //     fontSize: "0.7rem", // Adjust footer text size
                      //   },
                      // },
                      // "@media (max-width: 412px)": {
                      //   marginRight : "10%",
                      //   width: "44.2%",
                      //   fontSize: "0.8rem", // Adjust font size for smaller screens
                      //   overflowX: "auto", // Enable horizontal scrolling
                      //   "& .MuiDataGrid-cell": {
                      //     whiteSpace: "nowrap", // Prevent content overflow
                      //   },
                      //   "& .MuiDataGrid-footerContainer": {
                      //     fontSize: "0.7rem", // Adjust footer text size
                      //   },
                      // },
                      // "@media (max-width: 360px)": {
                      //   marginRight : "10%",
                      //   width: "37.5%",
                      //   fontSize: "0.8rem", // Adjust font size for smaller screens
                      //   overflowX: "auto", // Enable horizontal scrolling
                      //   "& .MuiDataGrid-cell": {
                      //     whiteSpace: "nowrap", // Prevent content overflow
                      //   },
                      //   "& .MuiDataGrid-footerContainer": {
                      //     fontSize: "0.7rem", // Adjust footer text size
                      //   },
                      // },
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BigWins;
