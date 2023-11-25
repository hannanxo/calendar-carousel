import dayjs from "dayjs";
import { generateDatesToShow, isDateDisabled } from "../src/utils/DatesUtils";

const defaultDateValue = 30;

describe("generateDatesToShow", () => {
  it("should generate a range of dates", () => {
    const startDate = "01-01-2023";
    const endDate = "01-05-2023";
    const dates = generateDatesToShow([startDate, endDate]);

    if (!dates) {
      throw new Error("dates is undefined");
    }

    expect(dates.length).toBe(5);
    expect(dates[0].format("MM-DD-YYYY")).toBe(startDate);
    expect(dates[4].format("MM-DD-YYYY")).toBe("01-05-2023");
  });

  it("returns the default date range value for invalid date range", () => {
    const startDate = "2023-01-10";
    const endDate = "2023-01-05";
    const dates = generateDatesToShow([startDate, endDate]);

    if (!dates) {
      throw new Error("dates is undefined");
    }
    expect(dates.length).toBe(defaultDateValue);
  });

  it("returns default dates when date range is empty", () => {
    const dates = generateDatesToShow(["", ""]);
    if (!dates) {
      throw new Error("dates is undefined");
    }
    expect(dates.length).toBe(defaultDateValue);
  });

  it("returns default dates when date range is undefined", () => {
    const dates = generateDatesToShow(undefined);
    if (!dates) {
      throw new Error("dates is undefined");
    }
    expect(dates.length).toBe(defaultDateValue);
  });

  it("returns default date when start and end dates are the same", () => {
    const singleDate = "2023-01-01";
    const dates = generateDatesToShow([singleDate, singleDate]);
    expect(dates.length).toBe(defaultDateValue);
  });

  it("handles different date formats gracefully", () => {
    const startDate = "01/01/2023";
    const endDate = "01/05/2023";
    const dates = generateDatesToShow([startDate, endDate]);
    expect(dates.length).toBe(5);
  });
});

describe("isDateDisabled", () => {
  it("identifies a date as disabled if it falls on a specified off day", () => {
    const offDays = ["Friday", "Saturday"];
    const date = dayjs("2023-01-06");
    expect(isDateDisabled(date, offDays)).toBe(true);
  });

  it("does not disable a date that does not fall on an off day", () => {
    const offDays = ["Friday", "Saturday"];
    const date = dayjs("2023-01-05");
    expect(isDateDisabled(date, offDays)).toBe(false);
  });

  it("does not disable any dates if offDays array is empty", () => {
    const offDays: string[] = [];
    const date = dayjs("2023-01-06");
    expect(isDateDisabled(date, offDays)).toBe(false);
  });

  it("handles invalid dates gracefully", () => {
    const offDays = ["Friday", "Saturday"];
    const date = dayjs("invalid-date");
    expect(isDateDisabled(date, offDays)).toBe(false);
  });

  it("works correctly with different date formats", () => {
    const offDays = ["Monday"];
    const date = dayjs("2023-01-02");
    expect(isDateDisabled(date, offDays)).toBe(true);
  });

  it("disables all dates when all days are off days", () => {
    const offDays = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const date = dayjs("2023-01-01");
    expect(isDateDisabled(date, offDays)).toBe(true);
  });
});
