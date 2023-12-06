import React, { useState } from "react";
import Body from "./Body";
import axios from "axios";
import Config from "../../../config";
import { toast } from "react-toastify";
import { useNavigate, useNavigation } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [patientFormData, setPatientFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    phone: "",
    age: "",
    gender: "",
  });

  // Function to handle changes in the patient form fields
  const handlePatientChange = (field) => (event) => {
    setPatientFormData({
      ...patientFormData,
      [field]: event.target.value,
    });
  };

  // Function to handle patient form submission
  const handlePatientSubmit = async (event) => {
    event.preventDefault();
    // Add logic for handling the submission (e.g., API call, form validation)
    const data = await axios.post(
      `${Config.API_URL}/patient/new-patient`,
      patientFormData
    );
    if (data) {
      toast.success("Registration Success");
      navigate("/", { replace: true });
    } else {
      return toast.error("Registration Failed");
    }
  };
  return (
    <Body
      _this={{
        patientFormData,
        setPatientFormData,
        handlePatientChange,
        handlePatientSubmit,
      }}
    />
  );
};

export default Index;
