"use client";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import React from "react";

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Calendar Carousel</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
