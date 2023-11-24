import { DataGrid } from "@material-ui/data-grid";
import { Tooltip } from "@material-ui/core";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "serialNumber",
    headerName: "Serial Number",
    width: 300,
    editable: true,
    tooltipMessage:"Serial Number"
  },
  {
    field: "needsAttention",
    headerName: "Needs Attention",
    width: 300,
    editable: true,
    tooltipMessage:"Needs Attention"
  },
  {
    field: "connectedBN",
    headerName: "Connected BN",
    width: 300,
    editable: true,
    tooltipMessage:"Connection BN"
  }
];

const rows = [
  {
    id: 1,
    serialNumber:"SF15F220000235",
    needsAttention:"yes",
    connectedBN:"BN-Java-west"
  },
  {
    id: 2,
    serialNumber:"SF15F220000236",
    needsAttention:"yes",
    connectedBN:"BN-Java-west"
  },
  {
    id: 3,
    serialNumber:"SF15F220000237",
    needsAttention:"Yes",
    connectedBN:"BN-Java-west"
  },
  {
    id: 4,
    serialNumber:"SF15F220000238",
    needsAttention:"No",
    connectedBN:"BN-Java-west"
  },
  {
    id: 5,
    serialNumber:"SF15F220000239",
    needsAttention:"No",
    connectedBN:"BN-Java-west"
  },
];

const HeaderWithButton = ({ column }) => (
    <div style={{ display: "flex", alignItems: "center" ,justifyContent:"space-between"}}>
      <div>{column.headerName}</div>
      <Tooltip title={column.tooltipMessage}>
            <HelpOutlineIcon fontSize="small"></HelpOutlineIcon>
      </Tooltip>
    </div>
  );

export default function DataGridComponent() {
  return (
        <div className="testC" style={{ height: 400, width: "100%"}}>
        <DataGrid
            style={{ border: "1px solid black" }}
            rows={rows}
            columns={columns.map((column) => ({
                ...column,
                renderHeader: (params) => (
                <HeaderWithButton column={params.colDef} />
                ),
            }))}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
            autoHeight
            disableColumnMenu
        />
        </div>
  );
}
