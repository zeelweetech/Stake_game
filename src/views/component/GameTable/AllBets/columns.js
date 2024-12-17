const Columns = () => {
    const columns = [
      {
        field: "gameName",
        headerName: "Game",
        width: 162.3,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "userName",
        headerName: "User",
        width: 230,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "betTime",
        headerName: "Time",
        width: 190,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "betAmount",
        headerName: "Amount",
        width: 195,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "multiplier",
        headerName: "Multiplier",
        width: 185,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "winAmount",
        headerName: "Result",
        width: 190,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
    ]
    return columns
  }
  
  export default Columns