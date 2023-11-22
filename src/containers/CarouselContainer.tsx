import DateCarousel from "@/components/DateCarousel";
import DurationPicker from "@/components/DurationPicker";
import useStyles from "@/hooks/useStyles";
import { Collapse, TimePicker } from "antd";
import dayjs from "dayjs";
import { SetStateAction, useState } from "react";

const { Panel } = Collapse;

const ContentContainer = () => {
  const { styles } = useStyles();
  const [duration, setDuration] = useState(120);
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleDurationChange = (increment: number) => {
    setDuration((prevDuration) => Math.max(0, prevDuration + increment));
  };

  const datesToShow = [...Array(3)].map((_, i) => selectedDate.clone().add(i, "day"));

  const handleSelectDate = (date: SetStateAction<dayjs.Dayjs>) => {
    setSelectedDate(date);
  };

  // for showing the selected date or time on the uncollapsed bar. pass it to the extra prop on panels
  const setDate = () => {};
  const setTime = () => {};

  return (
    <Collapse className={styles.styledCollapse} bordered={false} defaultActiveKey={["1"]} ghost expandIconPosition="end">
      <Panel header="Date" key="1">
        <DateCarousel datesToShow={datesToShow} handleSelectDate={handleSelectDate} selectedDate={selectedDate} />
      </Panel>
      <Panel header="Time" key="2">
        <TimePicker format="HH:mm" style={{ width: "300px" }} />
      </Panel>
      <Panel header="Duration" showArrow={false} collapsible="icon" extra={<DurationPicker duration={duration} handleDurationChange={handleDurationChange} />} key="3"></Panel>
    </Collapse>
  );
};

export default ContentContainer;
