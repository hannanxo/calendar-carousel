/*
 Handles the duration selection logic.
*/

import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import React from "react";

const { Text } = Typography;

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
        data-testid="decrement-duration"
        icon={<MinusOutlined />}
        style={{ borderRadius: "20px" }}
        onClick={() => handleDurationChange(-durationStep)}
      />
      <Text style={{ margin: "20px" }}>
        {" "}
        {`${Math.floor(duration / 60)}:${(duration % 60)
          .toString()
          .padStart(2, "0")}`}
      </Text>
      <Button
        data-testid="increment-duration"
        icon={<PlusOutlined />}
        style={{ borderRadius: "20px" }}
        onClick={() => handleDurationChange(durationStep)}
      />
    </React.Fragment>
  );
};

export default DurationPicker;
