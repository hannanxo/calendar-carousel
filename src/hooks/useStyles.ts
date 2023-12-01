import { createStyles } from "antd-style";

const useStyles = createStyles(({ css, token }) => ({
  styledCollapse: css`
    .ant-collapse-header,
    .ant-collapse-content-box {
      padding: 0;
    }

    .ant-picker {
      width: 100%;
    }

    .ant-collapse-arrow {
      right: 0;
    }
  `,

  dateCarouselContainer: css`
    .ant-carousel .slick-slide {
      text-align: center;
      padding: 10px;
      background: transparent;
      overflow: hidden;
    }

    .ant-carousel .slick-track {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  `,

  cardContainer: css`
    max-width: 350px;
    :hover {
      box-shadow: 1px 8px 8px #f4f4f4;
      -webkit-transition: box-shadow 0.1s ease-in;
    }
  `,

  dateBlock: css`
    padding: 4px 10px;
    margin-bottom: 8px;
    background: #f5222d;
    color: #fff;
    border-radius: 4px;
  `,

  dateBlockDisabled: css`
    padding: 4px 10px;
    margin-bottom: 8px;
    background: grey;
    color: #fff;
    border-radius: 4px;
  `,
  dateBlockHolidayDisabled: css`
    padding: 4px 10px;
    margin-bottom: 8px;
    background: green;
    color: #fff;
    border-radius: 4px;
  `,
  dayText: css`
    font-size: 24px;
    font-weight: bold;
  `,

  weekdayText: css`
    font-size: 16px;
    margin-bottom: 10px;
  `,
  setButton: css`
    button.slick-arrow button.slick-next {
      background: red;
    }
  `,

  carouselArrows: css`
    .ant-carousel {
      .slick-next {
        &::before {
          content: "";
        }
      }
      .slick-prev {
        &::before {
          content: "";
        }
      }
    }
  `,
}));

export default useStyles;
