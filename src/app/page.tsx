"use client";

import React from "react";
import Calendar from "../containers/Calendar";
import dayjs from "dayjs";

const HomePage: React.FC = () => {
  // example callback function for offDays
  const customOffDays = (date: dayjs.Dayjs) => {
    return date.day() === 2 || date.day() === 3;
  };

  const holidays = [dayjs("01-01-2023"), dayjs("01-02-2023")];

  // example callback function for holidays
  const checkIfHoliday = (date: dayjs.Dayjs) => {
    return holidays.some((holiday) => holiday.isSame(date, "day"));
  };

  return (
    <React.Fragment>
      <div style={{ height: "100vh", margin: 0, padding: 0 }}>
        <Calendar
          dateRange={[dayjs("01-01-2023"), dayjs("01-30-2023")]}
          offDays={customOffDays}
          holidays={checkIfHoliday}
          onDateChange={(date) =>
            console.log("Selected Date:", date.format("MMMM DD, YYYY"))
          }
          onTimeChange={(time) =>
            console.log("Selected Time:", time?.format("hh:mm a"))
          }
          onDurationChange={(duration) => console.log("Duration:", duration)}
        />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
