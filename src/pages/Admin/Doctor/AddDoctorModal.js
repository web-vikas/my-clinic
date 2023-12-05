import React from "react";
import { Modal, Typography, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { MdClose } from "react-icons/md";
const AddDoctorModal = ({ _this }) => {
  return (
    <Modal
      open={_this.isDoctorModelOpened}
      onClose={() => _this.setIsDoctorModelOpened(false)}
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
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Black shadow
          p: 2,
          borderRadius: 2,
        }}
      >
        <div className="flex justify-between p-2 border-b-2 mb-4">
          <p className="font-semibold text-xl">Add Doctor</p>
          <button
            onClick={() => _this.setIsDoctorModelOpened(false)}
            variant="contained"
          >
            <MdClose size={24} />
          </button>
        </div>
        <div>
          <form onSubmit={_this.handleSubmit} className="flex gap-4 flex-col">
            <div className="flex gap-2">
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                className="mb-4"
                value={_this.formData.name}
                onChange={_this.handleChange("name")}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                className="mb-4"
                value={_this.formData.email}
                onChange={_this.handleChange("email")}
              />
            </div>
            <div className="flex gap-2">
              <TextField
                fullWidth
                label="Phone"
                variant="outlined"
                className="mb-4"
                value={_this.formData.phone}
                onChange={_this.handleChange("phone")}
              />
              <TextField
                fullWidth
                label="Specialization"
                variant="outlined"
                value={_this.formData.specialist}
                onChange={_this.handleChange("specialist")}
              />
            </div>
            <div className="flex gap-2">
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                className="mb-4"
                value={_this.formData.password}
                onChange={_this.handleChange("password")}
              />
              <TextField
                fullWidth
                label="Confirm Password"
                variant="outlined"
                type="password"
                className="mb-4"
                value={_this.formData.confirm_password}
                onChange={_this.handleChange("confirm_password")}
              />
            </div>
            <TextField
              fullWidth
              label="Clinic Address"
              variant="outlined"
              multiline
              rows={3}
              className="mb-4"
              value={_this.formData.address}
              onChange={_this.handleChange("address")}
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </Box>
    </Modal>
  );
};

export default AddDoctorModal;
