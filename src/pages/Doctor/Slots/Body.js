import { Button, Card } from "@mui/material";
import DateTimePicker from "react-datetime-picker";
import { useState } from "react";

const Body = ({ _this }) => {
  return (
    <form onSubmit={_this.handleSubmit}>
      <Card>
        <div className="flex justify-center gap-5">
          <input
            type="datetime-local"
            onChange={_this.handleChange}
            value={_this.selectedTime}
          />

          <Button type="submit">Add</Button>
        </div>
      </Card>
    </form>
  );
};

export default Body;
