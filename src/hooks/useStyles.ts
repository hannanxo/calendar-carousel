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
      justify-content: center;
      justify-content: space-around;
    }

    .slick-slide {
      width: 100px !important;
    }
  `,

  dateItem: css`
    flex: 0 0 auto; // Enable flex items to be aligned without stretching
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 8px; // Add some space between the items
  `,

  dateBlock: css`
    padding: 4px 10px;
    margin-bottom: 8px;
    background: #f5222d;
    color: #fff;
    border-radius: 4px;
  `,

  dayText: css`
    font-size: 24px;
    font-weight: bold;
  `,

  weekdayText: css`
    font-size: 16px;
  `,
}));

export default useStyles;
