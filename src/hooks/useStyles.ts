import { createStyles } from "antd-style";

const useStyles = createStyles(({ css }) => ({
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
      width: 650px !important;
    }
  `,

  dateItem: css`
    // flex: 0 0 auto; // Enable flex items to be aligned without stretching
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
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
  dayText: css`
    font-size: 24px;
    font-weight: bold;
  `,

  weekdayText: css`
    font-size: 16px;
  `,

  carouselControlLeft: css`
    position: absolute;
    left: 10px; // Adjust as needed
    top: 14%;
    transform: translateY(-50%);
    z-index: 2;
    cursor: pointer;
    color: #f5222d; // Use your theme color
    // Add more styles as needed for size, background, etc.
  `,

  carouselControlRight: css`
    position: absolute;
    right: 10px; // Adjust as needed
    top: 14%;
    transform: translateY(-50%);
    z-index: 2;
    cursor: pointer;
    color: #f5222d; // Use your theme color
    // Add more styles as needed for size, background, etc.
  `,
}));

export default useStyles;
