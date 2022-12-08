import "./DataTable.css";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Data from './Data.json';


const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "queue_name", headerName: "Queue Name", width: 200 },
  { field: "mail_id", headerName: "Mail ID", width: 200 },
  {
    field: "time",
    headerName: "Arrival Time (ms)",
    width: 175,
    editable: true
  },
  {
    field: "size",
    headerName: "Message size",
    width: 150,
    editable: true
  },
  {
    field: "sender",
    headerName: "Sender",
    width: 250,
    editable: true
  },
  {
    field: "recipient",
    headerName: "Recipient",
    width: 250,
    editable: true
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    editable: true
  }  
];

const rows = Data.data
console.log(rows)

export default function DataTable() {
  return (
    <div className="DataTable">
      <h2>Mail in Queue</h2>
      <Box sx={{ height: 500, width: "100%", }}>
        <DataGrid 
          rows={rows}
          columns={columns}
          disableSelectionOnClick
          disableColumnMenu
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </div>
  );
}