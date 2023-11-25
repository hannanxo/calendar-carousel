"use client";

import React from "react";
import CalendarContainer from "@/containers/CalendarContainer";
// import dayjs from "dayjs";

const HomePage: React.FC = () => {
  // const holidays = ["12-25-2023", "01-01-2024"];
  // const holidays = "12-25-2023";

  // custom callback function
  // const checkIfHoliday = (date: dayjs.Dayjs) => {
  //   return holidays.includes(date.format("MM-DD-YYYY"));
  // };

  return (
    <React.Fragment>
      <CalendarContainer
        // cardsToScroll={1}
        // numCardsToShow={5}
        // offDays={["Friday"]}
        // dateRange={["12-25-2023", "01-01-2024"]}
        // timeFormat="hh:mm a"
        // durationStep={60}
        onDateChange={(date) =>
          console.log("Date", date.format("MMMM DD, YYYY"))
        }
        onTimeChange={(time) => console.log("Time", time?.format("hh:mm a"))}
        onDurationChange={(duration) => console.log("Duration", duration)}
        // holidays={checkIfHoliday}
      />
    </React.Fragment>
  );
};

export default HomePage;
