import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AppointmentTabs = ({ data }) => {
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
              <button
                key={appointment?._id}
                style={{
                  backgroundColor: appointment?.booked ? "green" : "red",
                }}
                className="rounded"
              >
                <strong className="p-3  text-white ">
                  {new Date(appointment?.time).getHours() | "00"}:
                  {new Date(appointment?.time).getMinutes() | "00"}
                </strong>
              </button>
            ))}
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default AppointmentTabs;
