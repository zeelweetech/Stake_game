import React, { useEffect, useState } from "react";
import "../../../../App.css";
import Loader from "../../Loader";
import Columns from "./columns";
import { DataGrid } from "@mui/x-data-grid";
import { getAllBets } from "../../../../services/GameServices";
import { format } from "date-fns";

const AllBets = () => {
  const [betsData, setBetsData] = useState([]);
  const [loading, setLoading] = useState(true); // Set loading to true initially
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    getAllBetsdata();
  }, [paginationModel.page, paginationModel.pageSize]);

  const getAllBetsdata = async () => {
    setLoading(true); // Set loading to true when fetching data
    setError(null); // Reset error state before fetching
    try {
      const response = await getAllBets({
        page: paginationModel.page + 1,
        pageSize: paginationModel.pageSize,
      });
      setBetsData(response?.BetList || []);
      setTotalCount(response?.pagination?.totalBets);
    } catch (error) {
      console.error("Failed to fetch bets: ", error);
      setError("Failed to fetch bets. Please try again later."); // Set error message
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  const rows = betsData.map((bet) => ({
    id: bet?.id,
    gameName: bet?.game?.gameName || "-",
    userName: bet?.user?.userName || "-",
    betTime: bet?.betTime ? format(new Date(bet.betTime), "hh:mm a") : "-",
    betAmount: bet?.betAmount || "-",
    multiplier: bet?.multiplier || "-",
    winAmount: bet?.winAmount || "-",
  }));

  return (
    <div className="container justify-center mx-auto">
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="text-center text-red-500 text-lg mt-4">{error}</div>
      ) : (
        <div className="overflow-x-auto">
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
            autoHeight
            sx={{
              border: "none",
              color: "#b1bad3",
              "& .MuiDataGrid-root": {
                minWidth: "320px",
                maxWidth: "1200px",
              },
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
            }}
          />
        </div>
      )}
    </div>
  );
};

export default AllBets;