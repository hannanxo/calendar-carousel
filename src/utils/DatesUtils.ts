/*
 Provides essential date generation and disabling functions.
*/

import dayjs from "dayjs";

export const generateDatesToShow = (
  dateRange?: [string, string] | undefined
) => {
  if (dateRange && dateRange.length === 2) {
    const [startDate, endDate] = dateRange;
    let start = dayjs(startDate);
    let end = dayjs(endDate);

    if (start.isValid() && end.isValid() && start.isBefore(end)) {
      let dates = [];
      while (start.isBefore(end) || start.isSame(end, "day")) {
        dates.push(start.clone());
        start = start.add(1, "day");
      }
      return dates;
    } else {
      return [...Array(30)].map((_, i) => dayjs().clone().add(i, "day"));
    }
  } else {
    return [...Array(30)].map((_, i) => dayjs().clone().add(i, "day"));
  }
};

export const isDateDisabled = (date: dayjs.Dayjs, disabledDates: string[]) => {
  return disabledDates.includes(date.format("dddd"));
};
