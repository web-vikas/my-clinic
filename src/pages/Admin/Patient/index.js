import React, { useState } from "react";
import { DashboardContainer } from "../DashboardContainer";
import Body from "./Body";
import axios from "axios";
const Index = () => {
  const [isPatientModelOpened, setIsPatientModelOpened] = useState(false);
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
      "http://localhost:5000/v1/patient/new-patient",
      patientFormData
    );
    console.log(data);
    // Close the modal after submission
    // setIsPatientModelOpened(false);
  };
  return (
    <DashboardContainer>
      <Body
        _this={{
          isPatientModelOpened,
          setIsPatientModelOpened,
          patientFormData,
          setPatientFormData,
          handlePatientChange,
          handlePatientSubmit,
        }}
      />
    </DashboardContainer>
  );
};

export default Index;
