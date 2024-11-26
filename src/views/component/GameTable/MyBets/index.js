import React, { useEffect, useState } from "react";
import Loader from "../../Loader";
import Columns from "./columns";
import { DataGrid } from "@mui/x-data-grid";
import { getMyBets } from "../../../../services/GameServices";
import { useParams } from "react-router-dom";
import { decodedToken } from "../../../../resources/utility";

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

  console.log("mybets id=========", decoded?.userId);
  
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
      console.log("getMyBets response", response);
      setBetsData(response?.response || []);
      setTotalCount(response?.pagination?.totalBets);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch users: ", error);
      setLoading(false);
    }
  };

  const rows = betsData.map((bet) => ({
    id: bet?.id,
    gameName: bet?.game?.gameName ? bet?.game?.gameName : "-",
    userName: bet?.user?.userName ? bet?.user?.userName : "-",
    betTime: bet?.betTime ? bet?.betTime : "-",
    betAmount: bet?.betAmount ? bet?.betAmount : "-",
    multiplier: bet?.multiplier ? bet?.multiplier : "-",
    winAmount: bet?.winAmount ? bet?.winAmount : "-",
  }));

  return (
    <>
      <div>
        <div className="py-2 mt-4">
          {loading ? (
            <Loader />
          ) : betsData.length === 0 ? (
            <div className="text-center text-white text-lg mt-4">
              No Data Found
            </div>
          ) : (
            <div>
              <div className="flex justify-center item-center">
                <div>
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
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyBets;
