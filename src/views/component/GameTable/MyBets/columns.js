const Columns = () => {
    const columns = [
      {
        field: "gameName",
        headerName: "Game",
        width: 160,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "id",
        headerName: "Bet ID",
        width: 250,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },

      {
        field: "betTime",
        headerName: "Time",
        width: 185,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
      {
        field: "betAmount",
        headerName: "Bet Amount",
        width: 185,
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
        headerName: "Payout",
        width: 187,
        headerClassName: "column-header",
        cellClassName: "column-cell",
      },
    ]
    return columns
  }
  
  export default Columns