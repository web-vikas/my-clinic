import React, { useEffect, useState } from "react";
import { useAuth } from "../../../components/auth/auth";
import { useNavigate } from "react-router-dom";
import { DashboardContainer } from "../DashboardContainer";
import axios from "axios";
import Config from "../../../config";
import Body from "./Body";
const Index = () => {
  const auth = useAuth();
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    axios({
      method: "get",
      url: `${Config.API_URL}/doctor/view-appointments?doctor_id=${auth?.user?._id}`,
    })
      .then((res) => {
        console.log(res);
        setTableData(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <DashboardContainer>
      <Body
        _this={{
          tableData,
        }}
      />
    </DashboardContainer>
  );
};

export default Index;
