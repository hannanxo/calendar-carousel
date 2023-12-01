/*
 Provides essential date generation function.
*/

import dayjs from "dayjs";

export const generateDatesToShow = (dateRange?: [dayjs.Dayjs, dayjs.Dayjs]) => {
  if (dateRange && dateRange.length === 2) {
    const [start, end] = dateRange;

    // Check if the start date is before the end date
    if (start.isBefore(end)) {
      let dates = [];
      let current = start;

      while (current.isBefore(end) || current.isSame(end, "day")) {
        dates.push(current.clone());
        current = current.add(1, "day");
      }
      return dates;
    } else {
      // Fallback if the start date is not before the end date
      console.warn("Invalid date range: Start date is not before end date.");
      return [...Array(30)].map((_, i) => dayjs().add(i, "day"));
    }
  } else {
    // Fallback if no date range is provided
    return [...Array(30)].map((_, i) => dayjs().add(i, "day"));
  }
};
