import { Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Body = ({ _this }) => {
  return (
    <section className="bg-gray-50  dark:bg-blue-100 h-screen p-2">
      <div className="border-2 rounded shadow-md p-4">
        <h2 className="my-7 font-extrabold text-3xl">Register New Patient</h2>{" "}
        <form
          onSubmit={_this.handlePatientSubmit}
          className="grid  grid-cols-1 md:grid-cols-2 gap-4"
        >
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            className="mb-4 text-white"
            value={_this.patientFormData.name}
            onChange={_this.handlePatientChange("name")}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            className="mb-4"
            value={_this.patientFormData.email}
            onChange={_this.handlePatientChange("email")}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            className="mb-4"
            value={_this.patientFormData.password}
            onChange={_this.handlePatientChange("password")}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            variant="outlined"
            type="password"
            className="mb-4"
            value={_this.patientFormData.confirm_password}
            onChange={_this.handlePatientChange("confirm_password")}
          />
          <TextField
            fullWidth
            label="Phone"
            variant="outlined"
            className="mb-4"
            value={_this.patientFormData.phone}
            onChange={_this.handlePatientChange("phone")}
          />
          <TextField
            fullWidth
            label="Age"
            variant="outlined"
            type="number"
            className="mb-4"
            value={_this.patientFormData.age}
            onChange={_this.handlePatientChange("age")}
          />
          <TextField
            fullWidth
            label="Gender"
            variant="outlined"
            className="mb-4"
            value={_this.patientFormData.gender}
            onChange={_this.handlePatientChange("gender")}
          />
          <div></div>
          <div>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <p className="text-sm font-light text-gray-700 dark:text-gray-700 my-6">
              Already have an account .{" "}
              <Link
                to="/patient/login"
                className="font-medium text-blue-600 hover:underline dark:text-blue"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Body;
