import React from "react";

export const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "black",
        fontSize: "25px",
        marginRight: "15px",
      }}
      onClick={onClick}
    ></div>
  );
};

export const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "black",
        fontSize: "25px",
        marginLeft: "15px",
      }}
      onClick={onClick}
    ></div>
  );
};
