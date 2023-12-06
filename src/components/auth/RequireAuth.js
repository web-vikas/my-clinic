import React from "react";
import { useAuth } from "./auth";
import { Navigate, useLocation, useSearchParams } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();
  if (!auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};
export const RequirePatientAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const doctor_id = searchParams.get("doctor");
  const slot_id = searchParams.get("slot");
  if (!auth.patient) {
    return (
      <Navigate
        to={`/patient/login?doctor=${doctor_id}&slot=${slot_id}`}
        state={{ path: location.pathname }}
      />
    );
  }
  return children;
};
