/*
 Manages the states related to date, time, and duration. 
*/

import dayjs from "dayjs";
import { useState } from "react";

const useCalendarData = (
  onDateChange: (date: dayjs.Dayjs) => void,
  onTimeChange: (time: dayjs.Dayjs | null) => void,
  timeFormat: string,
  onDurationChange: (duration: number) => void
) => {
  const [duration, setDuration] = useState(0);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState<dayjs.Dayjs | null>(null);

  const handleSelectDate = (date: dayjs.Dayjs) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  const handleSelectTime = (time: dayjs.Dayjs | null, timeString: string) => {
    const newTime = time ? dayjs(timeString, timeFormat) : null;
    setSelectedTime(newTime);
    onTimeChange(newTime);
  };

  const handleDurationChange = (increment: number) => {
    const newDuration = Math.max(0, duration + increment);
    setDuration(newDuration);
    onDurationChange(newDuration);
  };

  return {
    duration,
    handleDurationChange,
    selectedDate,
    handleSelectDate,
    selectedTime,
    handleSelectTime,
  };
};

export default useCalendarData;
