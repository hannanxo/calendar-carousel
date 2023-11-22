import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

const DurationPicker = ({ duration, handleDurationChange }: { duration: number; handleDurationChange: (increment: number) => void }) => {
  return (
    <>
      <Button
        icon={<MinusOutlined />}
        style={{ borderRadius: "20px" }}
        onClick={() => handleDurationChange(-30)} // Decrement by 30 secs
      />
      <span style={{ margin: "20px" }}> {`${Math.floor(duration / 60)}:${(duration % 60).toString().padStart(2, "0")}`}</span>
      <Button
        icon={<PlusOutlined />}
        style={{ borderRadius: "20px" }}
        onClick={() => handleDurationChange(30)} // Increment by 30 secs
      />
    </>
  );
};

export default DurationPicker;
