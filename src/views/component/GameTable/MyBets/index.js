import React, { useEffect, useState } from "react";
import Loader from "../../Loader";
import Columns from "./columns";
import { DataGrid } from "@mui/x-data-grid";
import { getMyBets } from "../../../../services/GameServices";
import { useParams } from "react-router-dom";
import { decodedToken } from "../../../../resources/utility";
import { format } from "date-fns";
import { LuListTodo } from "react-icons/lu";
const MyBets = () => {
  const { userId } = useParams();
  const [betsData, setBetsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const decoded = decodedToken();
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    getMyBetsdata();
  }, [paginationModel?.page, paginationModel?.pageSize, userId]);

  const getMyBetsdata = async () => {
    try {
      const response = await getMyBets({
        userId: decoded?.userId,
        page: paginationModel?.page + 1,
        pageSize: paginationModel?.pageSize,
      });
      setBetsData(response?.response || []);
      setTotalCount(response?.pagination?.totalBets);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch users: ", error);
      setLoading(false);
    }
  };

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
    <>
      <div>
        {loading ? (
          <Loader />
        ) : betsData.length === 0 ? (
          <div className="text-center text-white text-lg mt-4">No Data Found</div>
        ) : (
          <div>
            <div style={{ width: '100%', overflowX: 'auto' }}>
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
                  width: "100%",  // Make the grid take full width of the container
                }}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyBets;

