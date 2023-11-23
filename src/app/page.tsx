"use client";

import React from "react";
import CarouselContainer from "@/containers/CarouselContainer";

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <CarouselContainer
        onDateChange={(date) => console.log(date.format("MMMM DD, YYYY"))}
        onTimeChange={(time) => console.log(time?.format("hh:mm a"))}
        onDurationChange={(duration) => console.log(duration)}
      />
    </React.Fragment>
  );
};

export default HomePage;
