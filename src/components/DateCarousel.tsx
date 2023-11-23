import React, { RefObject } from "react";
import { Carousel } from "antd";
import dayjs from "dayjs";
import useStyles from "@/hooks/useStyles";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { CarouselRef } from "antd/es/carousel";
import { isDateDisabled } from "@/utils/FormatUtils";

const DateCarousel = ({
  datesToShow,
  disabledDates,
  handleSelectDate,
  numCardsToShow,
  cardsToScroll,
  slider,
}: {
  datesToShow: dayjs.Dayjs[];
  disabledDates: string[];
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
        {datesToShow.map((date, index) => (
          <div>
            <div
              className={styles.dateItem}
              key={index}
              onClick={() =>
                !isDateDisabled(date, disabledDates) && handleSelectDate(date)
              }
            >
              {isDateDisabled(date, disabledDates) && (
                <div className={styles.dateBlockDisabled}>
                  {date.format("MMMM")}
                </div>
              )}
              {!isDateDisabled(date, disabledDates) && (
                <div className={styles.dateBlock}>{date.format("MMMM")}</div>
              )}
              <div className={styles.dayText}>{date.format("DD")}</div>
              <div className={styles.weekdayText}>{date.format("dddd")}</div>
            </div>
          </div>
        ))}
      </Carousel>
      <RightOutlined
        onClick={() => (slider.current ? slider.current.next() : null)}
        className={styles.carouselControlRight}
      />
    </div>
  );
};

export default DateCarousel;
