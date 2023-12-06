import React, { useState } from "react";
import { useAuth } from "../../../components/auth/auth";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
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
  const [searchParams, setSearchParams] = useSearchParams();
  const doctor_id = searchParams.get("doctor");
  const slot_id = searchParams.get("slot");
  const navigate = useNavigate();
  const redirectPath = location.state?.path || "/";

  const getLogin = async () => {
    await axios({
      method: "post",
      url: `${Config.API_URL}/patient/login`,
      data: user,
    })
      .then((res) => {
        if (res?.data?.error) {
          return toast.error(res?.data?.error);
        }
        auth.patientLogin(res.data);
        navigate(`${redirectPath}?doctor=${doctor_id}&slot=${slot_id}`, {
          replace: true,
        });
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
