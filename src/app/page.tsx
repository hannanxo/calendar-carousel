"use client";

import React from "react";
import Calendar from "../containers/Calendar.container";
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
      <Calendar
        dateRange={[dayjs("01-01-2023"), dayjs("01-30-2023")]}
        offDays={customOffDays}
        holidays={checkIfHoliday}
      />
    </React.Fragment>
  );
};

export default HomePage;
