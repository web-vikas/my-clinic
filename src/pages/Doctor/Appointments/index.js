import React from "react";
import { useAuth } from "../../../components/auth/auth";
import { useNavigate } from "react-router-dom";
import { DashboardContainer } from "../DashboardContainer";
const Index = () => {
  return (
    <DashboardContainer>
      <div>Doctor Appointments</div>
    </DashboardContainer>
  );
};

export default Index;
