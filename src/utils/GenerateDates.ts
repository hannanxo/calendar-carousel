import dayjs from "dayjs";

export const generateDatesToShow = (
  datesCount?: number,
  dateRange?: [string, string]
) => {
  if (dateRange && dateRange.length === 2) {
    const [startDate, endDate] = dateRange;
    let start = dayjs(startDate);
    let end = dayjs(endDate);

    // Check if both start and end dates are valid
    if (start.isValid() && end.isValid() && start.isBefore(end)) {
      let dates = [];
      while (start.isBefore(end) || start.isSame(end, "day")) {
        dates.push(start.clone());
        start = start.add(1, "day");
      }
      return dates;
    }
  }

  // Fallback to datesCount if range is not valid
  return [...Array(datesCount || 30)].map((_, i) => dayjs().add(i, "day"));
};
