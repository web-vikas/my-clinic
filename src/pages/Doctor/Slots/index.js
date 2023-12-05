import { useEffect, useState } from "react";
import { useAuth } from "../../../components/auth/auth";
import { useNavigate } from "react-router-dom";
import { DashboardContainer } from "../DashboardContainer";
import Body from "./Body";
import axios from "axios";
import Config from "../../../config";
const Index = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const auth = useAuth();
  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    setSelectedTime(e.target.value);
  };
  // ?doctor_id=${auth?.user?._id}

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      url: `${Config.API_URL}/doctor/new-slot`,
      data: { doctor_id: auth?.user?._id, time: selectedTime },
    })
      .then((res) => {
        setSelectedTime(null);
        init();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    init();
  }, []);

  const init = () => {
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
  };

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
