The `calendar-carousel` is a reusable calendar component that emphasizes the selected date, time, and duration. Below is a detailed list of how to use it in your project:

[![npm](https://img.shields.io/npm/v/calendar-carousel.svg?style=flat-square)](https://www.npmjs.com/package/calendar-carousel)


# Table of Contents:

1- Installation.

2- API Reference.

3- Usage Example.

## Installation:

Running the following command to install the package:

```bash
npm i calendar-carousel
```

Now import it in the file you want using `import Calendar from "calendar-carousel" `. Now you can call the container and get the default style and behavior of the
calendar. To know how to change the behavior using props refer to the API section.

## API Reference:

The `Calendar` component provides a flexible and customizable calendar view with carousel functionality. Below is the API reference for the component's props.

| Prop Name          | Type                                  | Default Value                       | Description                                                                                                                                               |
| ------------------ | ------------------------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `numCardsToShow`   | `number`                              | `3`                                 | Number of date cards to show in the carousel at a time.                                                                                                   |
| `cardsToScroll`    | `number`                              | `1`                                 | Number of date cards to scroll in one swipe/scroll action.                                                                                                |
| `dateRange`        | `[dayjs.Dayjs, dayjs.Dayjs]`          | `[dayjs(), dayjs().add(29, "day")]` | Date range for the calendar to show. Format should be a valid dayjs date for the start and end ranges. If not provided, defaults to today + 29 days. |
| `offDays`          | `(date: dayjs.Dayjs)`                 | `() => false`                       | A user provided custom function to determine if a specific date is a off day and should be disabled.                                                      |
| `holidays`         | `(date: dayjs.Dayjs) => boolean`      | `() => false`                       | A user provided custom function to determine if a specific date is a holiday and should be disabled.                                                      |
| `timeFormat`       | `string`                              | `"hh:mm a"`                         | Format for the time picker. Can be `"hh:mm a"` for 12-hour format or `"HH:mm"` for 24-hour format.                                                        |
| `durationStep`     | `number`                              | `30`                                | Step size for duration changes, in seconds by default.                                                                                                    |
| `onDateChange`     | `(date: dayjs.Dayjs) => void`         | `() => {}`                          | Callback function when a date is selected.                                                                                                                |
| `onTimeChange`     | `(time: dayjs.Dayjs \| null) => void` | `() => {}`                          | Callback function when a time is selected or changed.                                                                                                     |
| `onDurationChange` | `(duration: number) => void`          | `() => {}`                          | Callback function when the duration is changed.                                                                                                           |

## Customize Design with Tokens:

The `calendar-carousel` supports custom design tokens allowing you to tailor the appearance to match your application's theme. Below is a table listing the tokens you can use to customize various aspects of the calendar's UI.

| Token Name            | Description                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------ |
| `colorPrimary`        | Background color for enabled date cards, arrows, buttons click & focus on time picker etc. |
| `colorPrimaryText`    | Text color for enabled date cards.                                                         |
| `colorWarning`        | Background color for holiday-disabled date cards.                                          |
| `colorWarningText`    | Text color for holiday-disabled date cards.                                                |
| `colorError`          | Background color for off-day disabled date cards.                                          |
| `colorErrorText`      | Text color for off-day disabled date cards.                                                |
| `borderRadius`        | Border radius for date cards.                                                              |
| `controlItemBgActive` | Background color for active control items (time picker).                                   |

### Light and Dark Mode:

Some antd components (mainly the collapse) used don't adhere to the darkAlgorithm properly for that purpose you can modify the `ConfigProvider from antd` and use the component tokens to customize them for dark/light themes:

```jsx
<ConfigProvider
  theme={{
    components: {
      Collapse: {
        headerBg: darkTheme ? "black" : "",
      },
      DatePicker: {
        cellHoverBg: token.colorPrimary,
      },
    },
    algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token,
  }}
>
  {children}
</ConfigProvider>
```

E.g., here I am setting black color from my Collapse Panels in case of darkmode.
For more details on how to further customize it refer to the components api's.

## Usage Example:

```jsx
import React from "react";
import Calendar from "calendar-carousel";

const MyComponent = () => {
  // example callback function for offDays
  const customOffDays = (date: dayjs.Dayjs) => {
    return date.day() === 2 || date.day() === 3;
  };

  const holidays = [dayjs("01-01-2023"), dayjs("01-02-2023")];

  // example callback function for holidays
  const checkIfHoliday = (date: dayjs.Dayjs) => {
    return holidays.some((holiday) => holiday.isSame(date, "day"));
  };

  return (
    <Calendar
      numCardsToShow={5}
      cardsToScroll={2}
      dateRange={[dayjs("01-01-2023"), dayjs("01-30-2023")]}
      offDays={customOffDays}
      holidays={checkIfHoliday}
      timeFormat="HH:mm a"
      durationStep={15}
      onDateChange={(date) =>
        console.log("Selected Date:", date.format("MMMM DD, YYYY"))
      }
      onTimeChange={(time) =>
        console.log("Selected Time:", time?.format("HH:mm"))
      }
      onDurationChange={(duration) => console.log("Duration:", duration)}
    />
  );
};

export default MyComponent;
```
