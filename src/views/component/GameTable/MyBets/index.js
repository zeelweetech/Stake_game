import React, { useEffect, useState } from "react";
import Loader from "../../Loader";
import Columns from "./columns";
import { DataGrid } from "@mui/x-data-grid";
import { getMyBets } from "../../../../services/GameServices";
import { useParams } from "react-router-dom";
import { decodedToken } from "../../../../resources/utility";
import { format } from "date-fns";

const MyBets = () => {
  const { userId } = useParams();
  const [betsData, setBetsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const decoded = decodedToken();
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMyBetsdata();
  }, [paginationModel.page, paginationModel.pageSize, userId]);

  const getMyBetsdata = async () => {
    setLoading(true);
    setError(null); // Reset error state before fetching
    try {
      const response = await getMyBets({
        userId: decoded?.userId,
        page: paginationModel.page + 1,
        pageSize: paginationModel.pageSize,
      });
      setBetsData(response?.response || []);
      setTotalCount(response?.pagination?.totalBets || 0);
    } catch (error) {
      console.error("Failed to fetch bets: ", error);
      setError("Failed to fetch bets. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const rows = betsData.map((bet) => ({
    id: bet.id, // Use bet.id as the unique identifier
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
      ) : betsData.length === 0 ? (
        <div className="text-center text-white text-lg mt-4">No Data Found</div>
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
      )}
    </div>
  );
};

export default MyBets;