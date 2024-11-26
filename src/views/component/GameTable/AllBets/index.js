import React, { useEffect, useState } from "react";
import "../../../../App.css"
import Loader from "../../Loader";
import Columns from "./columns";
import { DataGrid } from "@mui/x-data-grid";
import { getAllBets } from "../../../../services/GameServices";

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
        // console.log("getAllBets response", response);
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
        <div className="pt-5">
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
                    rowCount={totalCount}
                    paginationModel={paginationModel}
                    paginationMode="server"
                    onPaginationModelChange={setPaginationModel}
                    pageSizeOptions={[10, 20]}
                    // onRowClick={handleUserData}
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

export default AllBets;
