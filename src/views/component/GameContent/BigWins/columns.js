const Columns = () => {
    const columns = [
      {
        field: "rank",
        headerName: "Rank",
        width: 130,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "userName",
        headerName: "User",
        width: 130,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "betTime",
        headerName: "Date",
        width: 130,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "betAmount",
        headerName: "Amount",
        width: 130,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "multiplier",
        headerName: "Multiplier",
        width: 130,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "winAmount",
        headerName: "Winnigs",
        width: 130,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
    ]
    return columns
  }
  
  export default Columns