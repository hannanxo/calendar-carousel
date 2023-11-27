import { render, fireEvent } from "@testing-library/react";
import CalendarContainer from "../src/containers/Calendar";
import dayjs from "dayjs";

describe("CalendarContainer - DateCarousel", () => {
  it("renders the specified date range after expanding the panel", () => {
    const startDate = "01-01-2023";
    const endDate = "01-03-2023";
    const { getByText } = render(
      <CalendarContainer dateRange={[startDate, endDate]} />
    );

    const datePanelHeader = getByText("Date");
    fireEvent.click(datePanelHeader);

    expect(getByText("01")).toBeInTheDocument();
    expect(getByText("03")).toBeInTheDocument();
  });

  it("renders the default dates (from today to next 29 days) when nothing is passed", () => {
    const today = dayjs().format("DD").toString();
    const dayIn29Days = dayjs().add(29, "day").format("DD").toString();

    const { getByText } = render(<CalendarContainer />);

    const datePanelHeader = getByText("Date");
    fireEvent.click(datePanelHeader);

    expect(getByText(today)).toBeInTheDocument();
    expect(getByText(dayIn29Days)).toBeInTheDocument();
  });
});

describe("CalendarContainer - DurationPicker", () => {
  it("increments duration when increment button is clicked", () => {
    const { getByTestId, getByText } = render(<CalendarContainer />);
    const incrementButton = getByTestId("increment-duration");

    fireEvent.click(incrementButton);
    expect(getByText(/0:30/)).toBeInTheDocument();
  });

  it("decrements duration when decrement button is clicked", () => {
    const { getByTestId, getByText } = render(<CalendarContainer />);
    const decrementButton = getByTestId("decrement-duration");

    fireEvent.click(decrementButton);
    expect(getByText(/0:00/)).toBeInTheDocument();
  });
});
