import React, { useEffect, useState } from "react";
import "../../../../App.css";
import Loader from "../../Loader";
import Columns from "./columns";
import { DataGrid } from "@mui/x-data-grid";
import { getAllBets } from "../../../../services/GameServices";
import { format } from "date-fns";

const AllBets = () => {
  const [betsData, setBetsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    getAllBetsdata();
  }, [paginationModel?.page, paginationModel?.pageSize]);

  const getAllBetsdata = async () => {
    try {
      const response = await getAllBets({
        page: paginationModel?.page + 1,
        pageSize: paginationModel?.pageSize,
      });
      setBetsData(response?.BetList || []);
      setTotalCount(response?.pagination?.totalBets);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch users: ", error);
      setLoading(false);
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
    <div className="flex justify-center w-full">
      {loading ? (
        <Loader />
      ) : (
        <div className="overflow-x-auto w-full max-w-[1200px]">
          <div style={{ width: "100%", overflowX: "auto" }} className="overflow-x-auto md:overflow-x-hidden scrollbar-thin">
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
        </div>
      )}
    </div>
  );
};

export default AllBets;
