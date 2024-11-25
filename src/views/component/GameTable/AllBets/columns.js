const Columns = () => {
    const columns = [
      {
        field: "gameName",
        headerName: "Game",
        width: 170,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "userName",
        headerName: "User",
        width: 170,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "betTime",
        headerName: "Time",
        width: 200,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "betAmount",
        headerName: "Amount",
        width: 170,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "multiplier",
        headerName: "Multiplier",
        width: 170,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "winAmount",
        headerName: "Result",
        width: 170,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
    ]
    return columns
  }
  
  export default Columns