import { formatDate, formatTime } from "../src/utils/FormatUtils";
import dayjs from "dayjs";

describe("formatTime", () => {
  it("formats time correctly in 12-hour format", () => {
    const time = dayjs("2023-01-01T14:30");
    const formattedTime = formatTime(time, "hh:mm a");
    expect(formattedTime).toBe("02:30 pm");
  });

  it("formats time correctly in 24-hour format", () => {
    const time = dayjs("2023-01-01T14:30");
    const formattedTime = formatTime(time, "HH:mm");
    expect(formattedTime).toBe("14:30");
  });

  it("returns a specific string for null time", () => {
    const formattedTime = formatTime(null, "hh:mm a");
    expect(formattedTime).toBe("No time selected");
  });
});

describe("formatDate", () => {
  it("formats today's date as today", () => {
    const today = dayjs();
    const formattedDate = formatDate(today);
    expect(formattedDate).toBe("Today");
  });

  it("formats a specific date correctly", () => {
    const specificDate = dayjs("2023-01-02");
    const formattedDate = formatDate(specificDate);
    expect(formattedDate).toBe("January 02, 2023");
  });
});
