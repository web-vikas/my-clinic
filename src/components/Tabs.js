import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AppointmentTabs = ({ data, doc }) => {
  return (
    <Tabs>
      <TabList>
        {data?.map((day) => (
          <Tab key={day?.date}>{day?.date}</Tab>
        ))}
      </TabList>

      {data?.map((day) => (
        <TabPanel key={day?.date}>
          <div className="flex gap-2 flex-wrap">
            {day?.appointments?.map((appointment) => (
              <Link
                key={appointment?._id}
                style={{
                  backgroundColor: !appointment?.booked ? "green" : "red",
                  pointerEvents: appointment?.booked ? "none" : "all",
                }}
                className="rounded"
                to={`/confirm-booking?doctor=${doc}&slot=${appointment?._id}`}
              >
                <strong className="p-3  text-white ">
                  {new Date(appointment?.time).getHours() | "00"}:
                  {new Date(appointment?.time).getMinutes() | "00"}
                </strong>
              </Link>
            ))}
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default AppointmentTabs;
