The `calendar-carousel` is a reusable calendar component that gives emphasis on the selected date, time, and duration. Below is a detailed list of how to use it in your project:

# Table of Contents:
1- Installation.

2- API Reference.

## Installation:
There are going to be two parts for installation:

### 1- For just using the component:

If you just want to use the component in your react project simply install its npm package using:


```bash
npm i calendar-carousel
```

Now import it in the file you want using `import Calender from "calendar-carousel" `. Now you can call the container and get the default style and behavior of the
calendar. To know how you can change the behavior using props refer to the props section.

### 2- For installing the environment that the component was made in:

In case you want to customize or add more features or just get an understanding of how it works. Simply download fork the branch and run:

```bash
npm run dev
# or
yarn dev
```

This will install the required modules to run it. You'll now see the structure of a `NEXTjs` project. Which is the env this component was made in. You can play around with code or even contribute to it by adding more features to the existing calendar component.

## API Reference:
The `Calendar` component provides a flexible and customizable calendar view with carousel functionality. Below is the API reference for the component's props.

| Prop Name       | Type                                | Default Value                 | Description                                                    |
|-----------------|-------------------------------------|-------------------------------|----------------------------------------------------------------|
| `numCardsToShow`| `number`                            | `3`                           | Number of date cards to show in the carousel at a time.        |
| `cardsToScroll` | `number`                            | `1`                           | Number of date cards to scroll in one swipe/scroll action.     |
| `dateRange`     | `[string, string]` or `undefined`   | `["", ""]`                    | Date range for the calendar to show. Format: ["MM-DD-YYYY", "MM-DD-YYYY"]. If not provided, defaults to today + 29 days. |
| `offDays`       | `string[]`                          | `["Friday", "Saturday", "Sunday"]` | Days of the week to be marked as off days and disabled.         |
| `holidays`      | `(date: dayjs.Dayjs) => boolean`    | `() => false`                 | A function to determine if a specific date is a holiday and should be disabled. |
| `timeFormat`    | `string`                            | `"hh:mm a"`                   | Format for the time picker. Can be `"hh:mm a"` for 12-hour format or `"HH:mm"` for 24-hour format. |
| `durationStep`  | `number`                            | `30`                          | Step size for duration changes, in minutes.                    |
| `onDateChange`  | `(date: dayjs.Dayjs) => void`       | `() => {}`                    | Callback function when a date is selected.                     |
| `onTimeChange`  | `(time: dayjs.Dayjs \| null) => void` | `() => {}`                  | Callback function when a time is selected or changed.          |
| `onDurationChange` | `(duration: number) => void`     | `() => {}`                    | Callback function when the duration is changed.                |

### Usage Example

```jsx
import React from 'react';
import CalendarCarousel from 'calendar-carousel';

const MyComponent = () => {
  return (
    <CalendarCarousel
      numCardsToShow={5}
      cardsToScroll={2}
      dateRange={["01-01-2023", "01-31-2023"]}
      offDays={["Sunday"]}
      holidays={(date) => date.format("MM-DD") === "01-01"}
      timeFormat="HH:mm"
      durationStep={15}
      onDateChange={(date) => console.log("Selected Date:", date.format("MMMM DD, YYYY"))}
      onTimeChange={(time) => console.log("Selected Time:", time?.format("HH:mm"))}
      onDurationChange={(duration) => console.log("Duration:", duration)}
    />
  );
};

export default MyComponent;
