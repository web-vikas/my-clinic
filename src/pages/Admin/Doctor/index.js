import React, { useState } from "react";
import { DashboardContainer } from "../DashboardContainer";
import Body from "./Body";
import axios from "axios";
const Index = () => {
  const [isDoctorModelOpened, setIsDoctorModelOpened] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    specialist: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Add your form submission logic here

    const data = await axios.post(
      "http://localhost:5000/v1/doctor/new-doctor",
      formData
    );

    console.log("Form submitted:", data);
  };

  return (
    <DashboardContainer>
      <Body
        _this={{
          isDoctorModelOpened,
          setIsDoctorModelOpened,
          formData,
          setFormData,
          handleChange,
          handleSubmit,
        }}
      />
    </DashboardContainer>
  );
};

export default Index;
