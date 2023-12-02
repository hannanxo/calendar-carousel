import { createStyles } from "antd-style";

const useStyles = createStyles(({ css, token }) => ({
  styledCollapse: css`
    > .ant-collapse-item .ant-collapse-header,
    .ant-collapse-content-box {
      display: flex;
      justify-content: center;
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
    max-width: 1200px;

    @media screen and (max-width: 1400px) {
      max-width: 700px;
    }

    @media screen and (max-width: 800px) {
      max-width: 330px;
    }

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

  cardEnabledContainer: css`
    :hover {
      cursor: pointer;
      transform: scale(1.02);
    }
  `,

  dateBlock: css`
    padding: 4px 10px;
    margin-bottom: 8px;
    background: ${token.colorPrimary || "red"};
    color: ${token.colorPrimaryText || "#fff"};
    border-radius: ${token.borderRadius || "4px"};
  `,

  dateBlockDisabled: css`
    padding: 4px 10px;
    margin-bottom: 8px;
    background: ${token.colorError || "grey"};
    color: ${token.colorErrorText || "#fff"};
    border-radius: 4px;
  `,
  dateBlockHolidayDisabled: css`
    padding: 4px 10px;
    margin-bottom: 8px;
    background: ${token.colorWarning || "green"};
    color: ${token.colorWarningText || "#fff"};
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

  timePicker: css`
    .ant-picker-now-btn {
      background-color: green !important;
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
