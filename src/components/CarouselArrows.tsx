import React from "react";
import { theme } from "antd";

const { useToken } = theme;

export const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  const { token } = useToken();

  return (
    <div
      className={className}
      style={{
        ...style,
        color: token.colorPrimary,
        fontSize: "25px",
        marginRight: "0px",
      }}
      onClick={onClick}
    ></div>
  );
};

export const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  const { token } = useToken();

  return (
    <div
      className={className}
      style={{
        ...style,
        color: token.colorPrimary,
        fontSize: "25px",
        marginLeft: "0px",
      }}
      onClick={onClick}
    ></div>
  );
};
