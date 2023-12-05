import { useState } from "react";
import { useAuth } from "../../../components/auth/auth";
import { useNavigate } from "react-router-dom";
import { DashboardContainer } from "../DashboardContainer";
import Body from "./Body";
const Index = () => {
  const [selectedTime, setSelectedTime] = useState();

  const handleChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <DashboardContainer>
      <Body
        _this={{ selectedTime, setSelectedTime, handleChange, handleSubmit }}
      />
    </DashboardContainer>
  );
};

export default Index;
