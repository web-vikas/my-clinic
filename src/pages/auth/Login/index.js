import React, { useState } from "react";
import { useAuth } from "../../../components/auth/auth";
import { useNavigate, useLocation } from "react-router-dom";
import Body from "./Body";
import axios from "axios";
import Config from "../../../config";
import { toast } from "react-toastify";
const Index = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const redirectPath = location.state?.path || "/doctor";

  const getLogin = async () => {
    await axios({
      method: "post",
      url: `${Config.API_URL}/auth/login`,
      data: user,
    })
      .then((res) => {
        console.log(res.data);
        if (res?.data?.error) {
          return toast.error(res?.data?.error);
        }
        auth.login(res.data);
        navigate(redirectPath, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelLogin = (e) => {
    e.preventDefault();
    getLogin();
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
