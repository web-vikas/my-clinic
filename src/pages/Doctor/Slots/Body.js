import { Button, Card } from "@mui/material";
import DateTimePicker from "react-datetime-picker";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const Body = ({ _this }) => {
  console.log(_this);
  const columns = [
    { field: "_id", headerName: "id", width: 300 },
    {
      field: "booked",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "time",
      headerName: "Time",
      width: 150,
      editable: true,
    },
  ];

  return (
    <>
      <form onSubmit={_this.handleSubmit}>
        <Card>
          <div className="flex justify-center gap-5">
            <input
              type="datetime-local"
              onChange={_this.handleChange}
              value={_this.selectedTime}
            />

            <Button type="submit">Add</Button>
          </div>
        </Card>
      </form>

      <Card>
        <DataGrid
          rows={_this?.tableData}
          getRowId={(row, i) => row._id}
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
