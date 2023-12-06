import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import Config from "../../config";
import { FaClinicMedical } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";
import AppointmentTabs from "../../components/Tabs";
import { useAuth } from "../../components/auth/auth";
import { MdEmail, MdCall } from "react-icons/md";
import { Button } from "@mui/material";
import { IoMdTime } from "react-icons/io";
import { BsCalendar2Date } from "react-icons/bs";
import { toast } from "react-toastify";
const ConfirmBooking = () => {
  const auth = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const doctor_id = searchParams.get("doctor");
  const slot_id = searchParams.get("slot");
  const patient_id = auth?.patient?._id;
  const [data, setData] = useState(null);
  const [slotData, setSlotData] = useState(null);
  const [patientData, setPatientData] = useState(null);
  const navigate = useNavigate();

  const init = () => {
    axios({
      method: "get",
      url: `${Config.API_URL}/doctor/get-doctor?doctor_id=${doctor_id}`,
    })
      .then((res) => {
        setData(res?.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    axios({
      method: "get",
      url: `${Config.API_URL}/patient/view-slot?_id=${slot_id}`,
    })
      .then((res) => {
        setSlotData(res?.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    axios({
      method: "get",
      url: `${Config.API_URL}/patient/get-patient-details?_id=${patient_id}`,
    })
      .then((res) => {
        setPatientData(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (doctor_id) {
      init();
    }
  }, [doctor_id]);

  const handelSubmit = () => {
    axios({
      method: "post",
      url: `${Config.API_URL}/patient/new-appointment`,
      data: {
        doctor_id: doctor_id,
        slot_id: slot_id,
        patient_id: patient_id,
      },
    })
      .then((res) => {
        if (res) {
          toast.success("Booking Confirm");
          navigate("/", { replace: true });
        } else {
          return toast.error(res?.data?.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <section>
        <div className="mx-auto  max-w-screen-lg p-10 border-2 ">
          <div className="  flex items-center gap-6">
            <div>
              <img
                className="w-[80px] md:w-[100px]"
                src="https://www.leadsindiajh.org/wp-content/uploads/2019/06/health.png"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-[18px] md:text-2xl font-bold font-serif">
                {data?.name}
              </h1>
              <p className="text-[14px]">{data?.specialist}</p>
              <button className="mt-2 text-[13px] border border-blue-500 py-1 px-2 font-bold text-blue-500 hover:underline transition-all">
                VIEW PROFILE
              </button>
            </div>
          </div>
          <hr className="mt-8" />
          <h2 className="text-lg font-semibold mt-8 ">Appointment Summary</h2>
          <div className="py-10 flex max-sm:flex-col justify-between">
            <div className="flex gap-4">
              <FaClinicMedical className="text-2xl text-green-500" />
              <div className="">
                <h1 className="text-xl font-bold font-serif">
                  In-Clinic Consultation
                </h1>
                <p className="text-[14px] font-semibold text-green-500">
                  Fees approx ₹ 500
                </p>
                <p className="text-purple-500 text-[12px] font-semibold">
                  (pay at clinic)
                </p>
              </div>
            </div>
            <div className=" max-md:my-8">
              <div className="flex gap-2 items-center">
                <BsCalendar2Date className="text-2xl text-green-500" />
                <p>{new Date(slotData?.time).toDateString()}</p>
              </div>
              <div className="flex gap-2 items-center mt-4">
                <IoMdTime className="text-2xl text-green-500" />
                <p>{new Date(slotData?.time).toTimeString()}</p>
              </div>
            </div>
          </div>
          <h2 className="text-lg font-semibold mt-8 ">Patient Details</h2>
          <div className="py-10 flex max-sm:flex-col justify-between">
            <div className="flex gap-4">
              <div className="">
                <h1 className="text-xl font-bold font-serif">
                  {patientData?.name}
                </h1>
                <p className="text-[14px] font-semibold text-green-500">
                  {patientData?.gender?.toUpperCase()}
                </p>
              </div>
            </div>
            <div className=" max-md:my-8">
              <div className="flex gap-2 items-center">
                <MdCall className="text-2xl text-green-500" />
                <p> {patientData?.phone}</p>
              </div>
              <div className="flex gap-2 items-center mt-4">
                <MdEmail className="text-2xl text-green-500" />
                <p> {patientData?.email}</p>
              </div>
            </div>
          </div>
          <div>
            <Button
              onClick={handelSubmit}
              variant="contained"
              color="secondary"
            >
              Confirm Booking
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConfirmBooking;
