import React from "react";
import { Modal, Typography, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { MdClose } from "react-icons/md";

const AddPatientModal = ({ _this }) => {
  return (
    <Modal
      open={_this.isPatientModelOpened}
      onClose={() => _this.setIsPatientModelOpened(false)}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: 700,
          bgcolor: "white",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          p: 2,
          borderRadius: 2,
        }}
      >
        <div className="flex justify-between p-2 border-b-2 mb-4">
          <p className="font-semibold text-xl">Add Patient</p>
          <button
            onClick={() => _this.setIsPatientModelOpened(false)}
            variant="contained"
          >
            <MdClose size={24} />
          </button>
        </div>
        <div>
          <form
            onSubmit={_this.handlePatientSubmit}
            className="grid grid-cols-2 gap-4"
          >
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              className="mb-4"
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
            </div>
          </form>
        </div>
      </Box>
    </Modal>
  );
};

export default AddPatientModal;
