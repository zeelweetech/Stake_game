const Columns = () => {
    const columns = [
      {
        field: "gameName",
        headerName: "Game",
        width: 130,
        // flex: 1,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "userName",
        headerName: "User",
        width: 130,
        // flex: 1,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "betTime",
        headerName: "Time",
        width: 160,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "betAmount",
        headerName: "Amount",
        width: 160,
        // flex: 1,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "multiplier",
        headerName: "Multiplier",
        width: 160,
        // flex: 1,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "winAmount",
        headerName: "Result",
        width: 160,
        // flex: 1,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
    ]
    return columns
  }
  
  export default Columns