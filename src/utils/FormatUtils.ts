import dayjs from "dayjs";

export const formatTime = (time: dayjs.Dayjs | null, format: string) => {
  if (!time) return "No time selected";
  return time.format(format);
};

export const formatDate = (date: dayjs.Dayjs) => {
  if (date.format("MMMM DD, YYYY") === dayjs().format("MMMM DD, YYYY"))
    return "Today";
  else return date.format("MMMM DD, YYYY");
};

export const isDateDisabled = (date: dayjs.Dayjs, disabledDates: string[]) => {
  return disabledDates.includes(date.format("dddd"));
};
