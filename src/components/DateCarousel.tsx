import React from "react";
import { Carousel } from "antd";
import dayjs from "dayjs";
import useStyles from "@/hooks/useStyles";

const DateCarousel = ({ datesToShow, handleSelectDate, selectedDate }: { datesToShow: dayjs.Dayjs[]; handleSelectDate: (date: any) => void; selectedDate: dayjs.Dayjs }) => {
  const { styles } = useStyles();

  return (
    <div className={styles.dateCarouselContainer}>
      <Carousel dots={false} adaptiveHeight={true} infinite={true} slidesToShow={3} arrows={true}>
        {datesToShow.map((date, index) => (
          <div className={styles.dateItem} key={index} onClick={() => handleSelectDate(date)}>
            <div className={styles.dateBlock}>{date.format("MMMM")}</div>
            <div className={styles.dayText}>{date.format("DD")}</div>
            <div className={styles.weekdayText}>{date.format("dddd")}</div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DateCarousel;
