import DateCarousel from "@/components/DateCarousel";
import DurationPicker from "@/components/DurationPicker";
import useStyles from "@/hooks/useStyles";
import { Collapse, TimePicker } from "antd";
import { CarouselRef } from "antd/es/carousel";
import dayjs from "dayjs";
import { useRef } from "react";
import useCarouselData from "@/hooks/useCalendar";
import { formatDate, formatTime } from "@/utils/FormatUtils";

const { Panel } = Collapse;

const CarouselContainer = ({
  numCardsToShow = 3,
  cardsToScroll = 1,
  dateRange = 30,
  disabledDates = ["Friday", "Saturday", "Sunday"],
  timeFormat = 24,
  durationStep = 30,
  onDateChange = (date: dayjs.Dayjs) => {
    return;
  },
  onTimeChange = (time: dayjs.Dayjs | null) => {
    return;
  },
  onDurationChange = (duration: number) => {
    return;
  },
}: {
  numCardsToShow?: number;
  cardsToScroll?: number;
  dateRange?: number;
  disabledDates?: string[];
  timeFormat?: number;
  durationStep?: number;
  onDateChange?: (date: dayjs.Dayjs) => void;
  onTimeChange?: (time: dayjs.Dayjs | null) => void;
  onDurationChange?: (duration: number) => void;
}) => {
  const {
    duration,
    setDuration,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
  } = useCarouselData();
  const { styles } = useStyles();

  const slider = useRef<CarouselRef>(null);

  // can also use a dynamic range approach
  const datesToShow = [...Array(dateRange)].map((_, i) =>
    dayjs().clone().add(i, "day")
  );
  const timePickerFormat = timeFormat === 12 ? "hh:mm a" : "HH:mm";

  const handleSelectDate = (date: dayjs.Dayjs) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  const handleSelectTime = (time: dayjs.Dayjs | null, timeString: string) => {
    const newTime = time ? dayjs(timeString, timePickerFormat) : null;
    setSelectedTime(newTime);
    onTimeChange(newTime); // Calling the callback prop
  };

  const handleDurationChange = (increment: number) => {
    const newDuration = Math.max(0, duration + increment);
    setDuration(newDuration);
    onDurationChange(newDuration);
  };

  return (
    <Collapse
      className={styles.styledCollapse}
      bordered={false}
      defaultActiveKey={["0"]}
      ghost
      expandIconPosition="end"
    >
      <Panel header="Date" key="1" extra={formatDate(selectedDate)}>
        <DateCarousel
          datesToShow={datesToShow}
          disabledDates={disabledDates}
          handleSelectDate={handleSelectDate}
          numCardsToShow={numCardsToShow}
          cardsToScroll={cardsToScroll}
          slider={slider}
        />
      </Panel>
      <Panel
        header="Time"
        key="2"
        extra={formatTime(selectedTime, timePickerFormat)}
      >
        <TimePicker
          format={timePickerFormat}
          style={{ minWidth: "100%", maxWidth: "100%" }}
          value={selectedTime ? dayjs(selectedTime, timePickerFormat) : null}
          onChange={handleSelectTime}
        />
      </Panel>
      <Panel
        header="Duration"
        showArrow={false}
        collapsible="icon"
        extra={
          <DurationPicker
            duration={duration}
            durationStep={durationStep}
            handleDurationChange={handleDurationChange}
          />
        }
        key="3"
      />
    </Collapse>
  );
};

export default CarouselContainer;
