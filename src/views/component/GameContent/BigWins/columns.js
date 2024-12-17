const Columns = () => {
    const columns = [
      {
        field: "rank",
        headerName: "Rank",
        width: 150,
        // flex: 1,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "userName",
        headerName: "User",
        width: 180,
        // flex: 1,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "betTime",
        headerName: "Date",
        width: 180,
        // flex: 1,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "betAmount",
        headerName: "Amount",
        width: 250,
        // flex: 1,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "multiplier",
        headerName: "Multiplier",
        width: 180,
        // flex: 1,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "winAmount",
        headerName: "Winnigs",
        width: 180.1,
        // flex: 1,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
    ]
    return columns
  }
  
  export default Columns