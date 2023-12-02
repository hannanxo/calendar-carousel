import dayjs from "dayjs";
import { generateDatesToShow } from "../src/utils/DatesUtils";

const defaultDateValue = 30;

describe("generateDatesToShow", () => {
  it("should generate a range of dates", () => {
    const startDate = dayjs("2023-01-01");
    const endDate = dayjs("2023-01-05");
    const dates = generateDatesToShow([startDate, endDate]);

    expect(dates.length).toBe(5);
    expect(dates[0].format("MM-DD-YYYY")).toBe("01-01-2023");
    expect(dates[4].format("MM-DD-YYYY")).toBe("01-05-2023");
  });

  it("returns the default date range value for invalid date range", () => {
    const startDate = dayjs("2023-01-10");
    const endDate = dayjs("2023-01-05");
    const dates = generateDatesToShow([startDate, endDate]);

    expect(dates.length).toBe(defaultDateValue);
  });

  it("returns default dates when date range is empty", () => {
    const dates = generateDatesToShow([dayjs(), dayjs()]);
    expect(dates.length).toBe(defaultDateValue);
  });

  it("returns default dates when date range is undefined", () => {
    const dates = generateDatesToShow(undefined);
    expect(dates.length).toBe(defaultDateValue);
  });

  it("returns default date when start and end dates are the same", () => {
    const singleDate = dayjs("2023-01-01");
    const dates = generateDatesToShow([singleDate, singleDate]);
    expect(dates.length).toBe(defaultDateValue);
  });

  it("handles different date formats gracefully", () => {
    const startDate = dayjs("01/01/2023");
    const endDate = dayjs("01/05/2023");
    const dates = generateDatesToShow([startDate, endDate]);
    expect(dates.length).toBe(5);
  });
});
