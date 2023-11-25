/*
 This component handles the display of dates and incorporates logic for disabled dates and holidays. 
*/

import React, { RefObject } from "react";
import { Carousel } from "antd";
import dayjs from "dayjs";
import useStyles from "@/hooks/useStyles";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { CarouselRef } from "antd/es/carousel";
import { isDateDisabled } from "@/utils/DatesUtils";

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
      <Carousel
        ref={slider}
        dots={false}
        adaptiveHeight={true}
        infinite={false}
        slidesToShow={numCardsToShow}
        arrows={true}
        slidesToScroll={cardsToScroll}
        swipeToSlide
      >
        {datesToShow?.map((date, index) => {
          const isHoliday = holidays(date);
          return (
            <div
              className={styles.cardContainer}
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
      <div
        style={{
          padding: "8px",
        }}
      >
        <LeftOutlined
          onClick={() => (slider.current ? slider.current.prev() : null)}
          style={{ marginRight: "8px" }}
          className={styles.carouselControl}
        />
        <RightOutlined
          onClick={() => (slider.current ? slider.current.next() : null)}
          className={styles.carouselControl}
        />
      </div>
    </div>
  );
};

export default DateCarousel;
