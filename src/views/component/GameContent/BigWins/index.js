import React, { useEffect, useState } from "react";
import "../../../../App.css";
import Loader from "../../Loader";
import Columns from "./columns";
import { DataGrid } from "@mui/x-data-grid";
import {getBigWins } from "../../../../services/GameServices";
import { useParams } from "react-router-dom";

const BigWins = () => {
  const {id} = useParams()
  const [betsData, setBetsData] = useState([]);
  const [loading, setLoading] = useState(false)
  console.log("bigwins id==========", id);
  

  useEffect(() => {
    getBigWinsdata();
  }, [id]);

  const getBigWinsdata = async () => {
    try {
      const response = await getBigWins({
        id
      });
      console.log("getAllBets response", response);
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
    betTime: bet?.betTime ? bet?.betTime : "-",
    betAmount: bet?.betAmount ? bet?.betAmount : "-",
    multiplier: bet?.multiplier ? bet?.multiplier : "-",
    winAmount: bet?.winAmount ? bet?.winAmount : "-",
  }));

  return (
    <>
      <div>
        <div className=" py-2 mt-5">
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
