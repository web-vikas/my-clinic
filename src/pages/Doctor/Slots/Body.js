import { Button, Card } from "@mui/material";
import DateTimePicker from "react-datetime-picker";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
const Body = ({ _this }) => {
  const columns = [
    { field: "_id", headerName: "id", width: 300 },
    {
      field: "booked",
      headerName: "Status",
      width: 150,
      editable: true,
      renderCell: (params) => (params.value ? "Booked" : "Free"),
    },
    {
      field: "time",
      headerName: "Time",
      width: 150,
      editable: true,
      renderCell: (params) => Date(params),
    },
  ];

  return (
    <>
      <h6 className="font-bold text-xl my-3">Slots</h6>
      <form onSubmit={_this.handleSubmit}>
        <Card className="p-2 my-3">
          <div className="flex justify-start gap-5">
            <input
              className="border-2 p-1 rounded"
              type="datetime-local"
              onChange={_this.handleChange}
              value={_this.selectedTime}
            />

            <Button variant="contained" color="primary" type="submit">Add</Button>
          </div>
        </Card>
      </form>

      <Card>
        <DataGrid
          rows={_this?.tableData}
          getRowId={(row) => row?._id}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5]}
        />
      </Card>
    </>
  );
};

export default Body;
