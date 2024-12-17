import React, { useEffect, useState } from "react";
import "../../../../App.css";
import Loader from "../../Loader";
import Columns from "./columns";
import { DataGrid } from "@mui/x-data-grid";
import { getBigWins } from "../../../../services/GameServices";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

const BigWins = () => {
  const { id } = useParams()
  const [betsData, setBetsData] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getBigWinsdata();
  }, [id]);

  const getBigWinsdata = async () => {
    try {
      const response = await getBigWins({
        id
      });
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
        <div>
          {loading ? (
            <Loader />
          ) : (
            <div>
              <div className="pt-4">
                <DataGrid
                  rows={rows}
                  columns={Columns()}
                  loading={loading}
                  paginationMode="server"
                  getRowClassName={(params) =>
                    params.indexRelativeToCurrentPage % 2 === 0 ? "row-dark" : "row-light"
                  }
                  sx={{
                    // width: "99.93%",
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
                    // "@media (max-width: 768px)": {
                    //   width: "45%",
                    // },
                    // "@media (width: 320px)": {
                    //   width: "35%",
                    // },
                    // "@media (width: 375px)": {
                    //   width: "42.8%",
                    // },
                    // "@media (width: 425px)": {
                    //   width: "49.7%",
                    // },
                    // "@media (width: 768px)": {
                    //   width: "86.2%",
                    // },
                    // "@media (width: 1024px)": {
                    //   width: "100%",
                    // },
                    // "@media (width: 1260px)": {
                    //   width: "90%",
                    // },
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BigWins;
