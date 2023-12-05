import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Card } from "@mui/material";
import { FaPlus } from "react-icons/fa6";
import AddPatientModal from "./AddPatientModal ";
const Body = ({ _this }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  return (
    <div>
      <Card className="p-5 mb-2 flex justify-between items-center">
        <h5 className="font-bold text-3xl">Patient List</h5>
        <button
          onClick={() => _this.setIsPatientModelOpened(true)}
          className="bg-blue-700 text-white font-semibold px-5 rounded py-1 flex gap-2 items-center"
        >
          <FaPlus />
          Add
        </button>
      </Card>
      <Card className="p-2">
        <DataGrid
          rows={rows}
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
      <AddPatientModal _this={_this} />
    </div>
  );
};

export default Body;
