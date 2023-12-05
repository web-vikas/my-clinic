import { Card } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const Body = ({ _this }) => {
  const columns = [
    { field: "_id", headerName: "id", width: 200 },
    {
      field: "time",
      headerName: "Time",
      width: 220,
      editable: false,
      renderCell: (params) => Date(params?.row?.slot_data?.time),
    },
    {
      field: "booked",
      headerName: "Patient Name",
      width: 150,
      editable: true,
      renderCell: (params) => params?.row?.patient_data?.name,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
      renderCell: (params) => params?.row?.patient_data?.email,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
      editable: true,
      renderCell: (params) => params?.row?.patient_data?.phone,
    },
    {
      field: "Age",
      headerName: "Age",
      width: 150,
      editable: true,
      renderCell: (params) => params?.row?.patient_data?.age,
    },
    {
      field: "Gender",
      headerName: "Gender",
      width: 150,
      editable: true,
      renderCell: (params) => params?.row?.patient_data?.gender?.toUpperCase(),
    },
  ];
  return (
    <div>
      <h6 className="font-bold text-xl my-3">Appointments</h6>
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
    </div>
  );
};

export default Body;
