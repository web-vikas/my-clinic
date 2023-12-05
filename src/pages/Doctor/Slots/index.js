import { useEffect, useState } from "react";
import { useAuth } from "../../../components/auth/auth";
import { useNavigate } from "react-router-dom";
import { DashboardContainer } from "../DashboardContainer";
import Body from "./Body";
import axios from "axios";
import Config from "../../../config";
const Index = () => {
  const [selectedTime, setSelectedTime] = useState();
  const auth = useAuth();
  const [tableData, setTableData] = useState([]);

  console.log("auth", auth.user);

  const handleChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `${Config.API_URL}/doctor/view-slots?doctor_id=${auth?.user?._id}`,
    })
      .then((res) => {
        console.log(res);
        setTableData(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <DashboardContainer>
      <Body
        _this={{
          selectedTime,
          setSelectedTime,
          handleChange,
          handleSubmit,
          tableData,
        }}
      />
    </DashboardContainer>
  );
};

export default Index;
