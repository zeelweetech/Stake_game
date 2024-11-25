const Columns = () => {
    const columns = [
      {
        field: "id",
        headerName: "Rank",
        width: 210,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "betAmount",
        headerName: "User",
        width: 230,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "winAmount",
        headerName: "Date",
        width: 213.7,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "cashOutAt",
        headerName: "Amount",
        width: 220,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "betTime",
        headerName: "Multiplier",
        width: 280,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "betTime",
        headerName: "Winnigs",
        width: 280,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
    ]
    return columns
  }
  
  export default Columns