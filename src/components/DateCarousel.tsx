/*
 This component handles the display of dates and incorporates logic for disabled dates and holidays. 
*/

import React, { RefObject } from "react";
import { Carousel } from "antd";
import dayjs from "dayjs";
import useStyles from "../hooks/useStyles";
import { CarouselRef } from "antd/es/carousel";
import { SampleNextArrow, SamplePrevArrow } from "./CarouselArrows";

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const DateCarousel: React.FC<any> = ({
  datesToShow,
  offDays,
  holidays,
  handleSelectDate,
  numCardsToShow,
  cardsToScroll,
  slider,
}: {
  datesToShow: dayjs.Dayjs[] | undefined;
  offDays: (date: dayjs.Dayjs) => boolean;
  holidays: (date: dayjs.Dayjs) => boolean;
  handleSelectDate: (date: dayjs.Dayjs) => void;
  numCardsToShow: number;
  cardsToScroll: number;
  slider: RefObject<CarouselRef>;
}) => {
  const { styles } = useStyles();

  return (
    <div className={styles.dateCarouselContainer}>
      <Carousel
        className={styles.carouselArrows}
        ref={slider}
        dots={false}
        adaptiveHeight={true}
        infinite={false}
        slidesToShow={numCardsToShow}
        slidesToScroll={cardsToScroll}
        swipeToSlide
        arrows
        {...settings}
      >
        {datesToShow?.map((date, index) => {
          const isHoliday = holidays(date);
          const isOffDay = offDays(date);
          let dateClassName = isOffDay
            ? styles.dateBlockDisabled
            : isHoliday
            ? styles.dateBlockHolidayDisabled
            : styles.dateBlock;

          let cardClassName =
            !isOffDay && !isHoliday ? styles.cardEnabledContainer : "";

          return (
            <div
              className={cardClassName}
              key={index}
              onClick={() => !isOffDay && !isHoliday && handleSelectDate(date)}
            >
              <div className={dateClassName}>{date.format("MMMM")}</div>
              <div className={styles.dayText}>{date.format("DD")}</div>
              <div className={styles.weekdayText}>{date.format("dddd")}</div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default DateCarousel;
