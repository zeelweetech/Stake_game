const Columns = () => {
  const columns = [
    {
      field: "gameName",
      headerName: "Game",
      flex: 1, 
      headerClassName: "column-header",
      cellClassName: "column-cell",
    },
    {
      field: "id",
      headerName: "Bet ID",
      flex: 1, 
      headerClassName: "column-header",
      cellClassName: "column-cell",
    },
    {
      field: "betTime",
      headerName: "Time",
      flex: 1, 
      headerClassName: "column-header",
      cellClassName: "column-cell",
    },
    {
      field: "betAmount",
      headerName: "Bet Amount",
      flex: 1, 
      headerClassName: "column-header",
      cellClassName: "column-cell",
    },
    {
      field: "multiplier",
      headerName: "Multiplier",
      flex: 1, 
      headerClassName: "column-header",
      cellClassName: "column-cell",
    },
    {
      field: "winAmount",
      headerName: "Payout",
      flex: 1, 
      headerClassName: "column-header",
      cellClassName: "column-cell",
    },
  ];
  return columns;
};

export default Columns;