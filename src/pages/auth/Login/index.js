import React, { useState } from "react";
import { useAuth } from "../../../components/auth/auth";
import { useNavigate, useLocation } from "react-router-dom";
import Body from "./Body";
const Index = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const redirectPath = location.state?.path || "/doctor";
  const handelLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };
  return (
    <Body
      props={{
        user,
        setUser,
        handelLogin,
      }}
    />
  );
};

export default Index;
