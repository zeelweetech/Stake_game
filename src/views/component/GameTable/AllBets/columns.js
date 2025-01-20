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
      field: "userName",
      headerName: "User",
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
      headerName: "Amount",
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
      headerName: "PayOut",
      flex: 1,
      headerClassName: "column-header",
      cellClassName: "column-cell",
    },
  ]
  return columns
}

export default Columns