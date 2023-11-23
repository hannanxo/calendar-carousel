import React, { RefObject } from "react";
import { Carousel } from "antd";
import dayjs from "dayjs";
import useStyles from "@/hooks/useStyles";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { CarouselRef } from "antd/es/carousel";
import { isDateDisabled } from "@/utils/FormatUtils";

const DateCarousel = ({
  datesToShow,
  offDays,
  holidays,
  handleSelectDate,
  numCardsToShow,
  cardsToScroll,
  slider,
}: {
  datesToShow: dayjs.Dayjs[];
  offDays: string[];
  holidays: (date: dayjs.Dayjs) => boolean;
  handleSelectDate: (date: dayjs.Dayjs) => void;
  numCardsToShow: number;
  cardsToScroll: number;
  slider: RefObject<CarouselRef>;
}) => {
  const { styles } = useStyles();

  return (
    <div className={styles.dateCarouselContainer}>
      <LeftOutlined
        onClick={() => (slider.current ? slider.current.prev() : null)}
        className={styles.carouselControlLeft}
      />
      <Carousel
        ref={slider}
        dots={false}
        adaptiveHeight={true}
        infinite={false}
        slidesToShow={numCardsToShow}
        arrows={false}
        slidesToScroll={cardsToScroll}
        swipeToSlide
      >
        {datesToShow.map((date, index) => {
          const isHoliday = holidays(date);
          return (
            <div
              key={index}
              onClick={() =>
                !isDateDisabled(date, offDays) &&
                !isHoliday &&
                handleSelectDate(date)
              }
            >
              {isDateDisabled(date, offDays) && (
                <div className={styles.dateBlockDisabled}>
                  {date.format("MMMM")}
                </div>
              )}
              {!isDateDisabled(date, offDays) && !isHoliday && (
                <div className={styles.dateBlock}>{date.format("MMMM")}</div>
              )}

              {isHoliday && (
                <div className={styles.dateBlockHolidayDisabled}>
                  {date.format("MMMM")}
                </div>
              )}
              <div className={styles.dayText}>{date.format("DD")}</div>
              <div className={styles.weekdayText}>{date.format("dddd")}</div>
            </div>
          );
        })}
      </Carousel>
      <RightOutlined
        onClick={() => (slider.current ? slider.current.next() : null)}
        className={styles.carouselControlRight}
      />
    </div>
  );
};

export default DateCarousel;
