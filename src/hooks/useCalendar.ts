import { useState } from "react";
import dayjs from "dayjs";

const useCarouselData = () => {
  const [duration, setDuration] = useState(0);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState<dayjs.Dayjs | null>(null);

  return {
    duration,
    setDuration,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
  };
};

export default useCarouselData;
