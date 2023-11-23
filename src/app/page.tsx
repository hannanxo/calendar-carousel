"use client";

import React from "react";
import CarouselContainer from "@/containers/CarouselContainer";

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <CarouselContainer
        onDateChange={(date) =>
          console.log("Date", date.format("MMMM DD, YYYY"))
        }
        onTimeChange={(time) => console.log("Time", time?.format("hh:mm a"))}
        onDurationChange={(duration) => console.log("Duration", duration)}
      />
    </React.Fragment>
  );
};

export default HomePage;
