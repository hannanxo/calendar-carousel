/*
 Integrates all components (DateCarousel, DurationPicker, TimePicker) and uses hooks for state management.
 It also handles the date generation logic using the utils.
*/

import React from "react";
import DateCarousel from "../components/DateCarousel";
import DurationPicker from "../components/DurationPicker";
import useStyles from "../hooks/useStyles";
import { Collapse, TimePicker } from "antd";
import { CarouselRef } from "antd/es/carousel";
import dayjs from "dayjs";
import { useRef } from "react";
import useCarouselData from "../hooks/useCalendarData";
import { formatDate, formatTime } from "../utils/FormatUtils";
import { generateDatesToShow } from "../utils/DatesUtils";

const { Panel } = Collapse;

const Calendar = ({
  numCardsToShow = 3,
  cardsToScroll = 1,
  dateRange = [dayjs(), dayjs().add(29, "day")],
  offDays = (date: dayjs.Dayjs) => false,
  holidays = (date: dayjs.Dayjs) => false,
  timeFormat = "hh:mm a",
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
  dateRange?: [dayjs.Dayjs, dayjs.Dayjs];
  offDays?: (date: dayjs.Dayjs) => boolean;
  holidays?: (date: dayjs.Dayjs) => boolean;
  timeFormat?: string;
  durationStep?: number;
  onDateChange?: (date: dayjs.Dayjs) => void;
  onTimeChange?: (time: dayjs.Dayjs | null) => void;
  onDurationChange?: (duration: number) => void;
}) => {
  const {
    duration,
    handleDurationChange,
    selectedDate,
    handleSelectDate,
    selectedTime,
    handleSelectTime,
  } = useCarouselData(onDateChange, onTimeChange, timeFormat, onDurationChange);
  const { styles } = useStyles();

  const slider = useRef<CarouselRef>(null);

  const datesToShow = generateDatesToShow(dateRange);

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
          offDays={offDays}
          holidays={holidays}
          handleSelectDate={handleSelectDate}
          numCardsToShow={numCardsToShow}
          cardsToScroll={cardsToScroll}
          slider={slider}
        />
      </Panel>
      <Panel header="Time" key="2" extra={formatTime(selectedTime, timeFormat)}>
        <TimePicker
          format={timeFormat}
          style={{ minWidth: "100%", maxWidth: "100%" }}
          value={selectedTime ? dayjs(selectedTime, timeFormat) : null}
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

export default Calendar;
