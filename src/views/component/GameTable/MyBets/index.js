import React, { useEffect, useState } from "react";
import Loader from "../../Loader";
import Columns from "./columns";
import { DataGrid } from "@mui/x-data-grid";
import { getMyBets } from "../../../../services/GameServices";
import { useParams } from "react-router-dom";
import { decodedToken } from "../../../../resources/utility";
import { format } from "date-fns";
import { useSelector } from "react-redux";

const MyBets = () => {
  const { userId } = useParams();
  const [betsData, setBetsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const decoded = decodedToken();
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState(null);
  const { isChatOpen } = useSelector((state) => state.chat);
  const { isBetslipOpen } = useSelector((state) => state.betslip);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    getMyBetsdata();
  }, [paginationModel.page, paginationModel.pageSize, userId]);

  const getMyBetsdata = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getMyBets({
        userId: decoded?.userId,
        page: paginationModel.page + 1,
        pageSize: paginationModel.pageSize,
      });
      
      if (!response) {
        throw new Error('No response received');
      }
      
      setBetsData(response?.response || []);
      setTotalCount(response?.pagination?.totalBets || 0);
    } catch (error) {
      console.error("Failed to fetch bets: ", error);
      setError(error.message || "Failed to fetch bets. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setPaginationModel(prev => ({
      ...prev,
      page: newPage - 1
    }));
  };

  const totalPages = Math.ceil(totalCount / paginationModel.pageSize);

  const getResponsiveColumns = () => {
    const columns = Columns();
    
    // For mobile screens
    if (windowWidth <= 768) {
      return columns.filter(col => 
        ['gameName','winAmount'].includes(col.field)
      );
    }
    
    // For 1024px screens with drawer open
    if (windowWidth <= 1024 && (isChatOpen || isBetslipOpen)) {
      return columns.filter(col => 
        ['gameName', 'winAmount'].includes(col.field)
      );
    }
    
    // Default: show all columns
    return columns;
  };

  const getGridHeight = () => {
    const baseHeight = 400;
    const rowHeight = 52;
    const headerHeight = 56;
    const paginationHeight = 56;
    
    const contentHeight = Math.min(
      baseHeight,
      headerHeight + (rowHeight * Math.min(betsData.length, paginationModel.pageSize)) + paginationHeight
    );
    
    return contentHeight;
  };

  const getContainerClass = () => {
    if (windowWidth <= 768) {
      return isChatOpen || isBetslipOpen ? 'w-[90%]' : 'w-full';
    }
    return 'container';
  };

  const rows = betsData.map((bet) => ({
    id: bet.id,
    gameName: bet?.game?.gameName || "-",
    userName: bet?.user?.userName || "-",
    betTime: bet?.betTime ? format(new Date(bet.betTime), "hh:mm a") : "-",
    betAmount: bet?.betAmount || "-",
    multiplier: bet?.multiplier || "-",
    winAmount: bet?.winAmount || "-",
  }));

  return (
    <div className={`${getContainerClass()} mx-auto`}>
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <Loader />
        </div>
      ) : error ? (
        <div className="text-center text-red-500 p-4 bg-red-100 rounded-md mt-4">
          <p className="font-medium">Error</p>
          <p className="text-sm">{error}</p>
          <button 
            onClick={getMyBetsdata}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Retry
          </button>
        </div>
      ) : betsData.length === 0 ? (
        <div className="text-center text-white p-8 bg-[#213743] rounded-md mt-4">
          <p className="text-lg">No Bets Found</p>
          <p className="text-sm text-gray-400 mt-2">Place your first bet to see it here</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="rounded-lg overflow-hidden bg-[#1a2c38] shadow-lg overflow-y-hidden touch-scroll transform translate-z-0 scrollbar-thin">
            <DataGrid
              rows={rows}
              columns={getResponsiveColumns()}
              loading={loading}
              rowCount={totalCount}
              paginationModel={paginationModel}
              paginationMode="server"
              onPaginationModelChange={setPaginationModel}
              pageSizeOptions={[10, 20]}
              getRowClassName={(params) =>
                params.indexRelativeToCurrentPage % 2 === 0
                  ? "bg-[#213743] hover:bg-[#2c4757]"
                  : "bg-[#1a2c38] hover:bg-[#2c4757]"
              }
              autoHeight
              disableColumnMenu
              disableColumnFilter
              disableColumnSelector
              disableDensitySelector
              hideFooterSelectedRowCount
              sx={{
                border: "none",
                color: "#b1bad3",
                minHeight: getGridHeight(),
                "& .MuiDataGrid-cell": {
                  border: "none",
                  padding: windowWidth <= 1024 && (isChatOpen || isBetslipOpen) 
                    ? "8px 12px"
                    : "8px 16px",
                },
                "& .MuiDataGrid-columnHeader": {
                  backgroundColor: "#213743",
                  color: "white",
                  fontWeight: "bold",
                  border: "none",
                },
                "& .MuiDataGrid-footerContainer": {
                  borderTop: "1px solid #2c4757",
                  backgroundColor: "#213743",
                },
                "& .MuiTablePagination-root": {
                  color: "white",
                },
                "& .MuiTablePagination-selectIcon": {
                  color: "white",
                },
                "& .MuiIconButton-root": {
                  color: "white",
                },
                "& .MuiDataGrid-virtualScroller::-webkit-scrollbar": {
                  width: "8px",
                  height: "8px",
                },
                "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track": {
                  background: "#1a2c38",
                },
                "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb": {
                  background: "#2c4757",
                  borderRadius: "4px",
                },
                "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover": {
                  background: "#3a5a6d",
                },
              }}
            />
          </div>
          
          {/* Pagination Controls */}
          <div className="flex justify-center items-center space-x-4 py-4">
            <button
              onClick={() => handlePageChange(paginationModel.page)}
              disabled={paginationModel.page === 0}
              className={`text-gray-500
                ${paginationModel.page === 0
                  
                }`}
            >
              Previous
            </button>
            
            {/* <span className="text-[#b1bad3]">
              Page {paginationModel.page + 1} of {totalPages}
            </span>
             */}
            <button
              onClick={() => handlePageChange(paginationModel.page + 2)}
              disabled={paginationModel.page >= totalPages - 1}
              className={`text-gray-500
                ${paginationModel.page >= totalPages - 1
                  
                }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBets;