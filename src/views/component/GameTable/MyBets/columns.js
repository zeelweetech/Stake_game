const Columns = () => {
  const columns = [
    {
      field: "gameName",
      headerName: "Game",
      width: 150,
      headerClassName: "column-header",
      cellClassName: "column-cell",
    },
    {
      field: "id",
      headerName: "Bet ID",
      width: 150,
      headerClassName: "column-header",
      cellClassName: "column-cell",
    },
    {
      field: "betTime",
      headerName: "Time",
      width: 150,
      headerClassName: "column-header",
      cellClassName: "column-cell",
    },
    {
      field: "betAmount",
      headerName: "Bet Amount",
      width: 150,
      headerClassName: "column-header",
      cellClassName: "column-cell",
    },
    {
      field: "multiplier",
      headerName: "Multiplier",
      width: 150,
      headerClassName: "column-header",
      cellClassName: "column-cell",
    },
    {
      field: "winAmount",
      headerName: "Payout",
      width: 150,
      headerClassName: "column-header",
      cellClassName: "column-cell",
    },
  ];
  return columns;
};

export default Columns;