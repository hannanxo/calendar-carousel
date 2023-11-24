/*
 Handles the duration selection logic.
*/

import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

const DurationPicker = ({
  duration,
  handleDurationChange,
  durationStep,
}: {
  duration: number;
  handleDurationChange: (increment: number) => void;
  durationStep: number;
}) => {
  return (
    <React.Fragment>
      <Button
        icon={<MinusOutlined />}
        style={{ borderRadius: "20px" }}
        onClick={() => handleDurationChange(-durationStep)}
      />
      <span style={{ margin: "20px" }}>
        {" "}
        {`${Math.floor(duration / 60)}:${(duration % 60)
          .toString()
          .padStart(2, "0")}`}
      </span>
      <Button
        icon={<PlusOutlined />}
        style={{ borderRadius: "20px" }}
        onClick={() => handleDurationChange(durationStep)}
      />
    </React.Fragment>
  );
};

export default DurationPicker;
