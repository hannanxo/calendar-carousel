"use client";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import React from "react";
import * as darkTheme from "../ant-tokens/dark.json";
import * as lightTheme from "../ant-tokens/light.json";
import { ConfigProvider, theme } from "antd";

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const token = lightTheme;
  return (
    <html lang="en">
      <head>
        <title>Calendar Carousel</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </head>
      <body style={{ padding: 0, margin: 0 }}>
        <StyledComponentsRegistry>
          <ConfigProvider
            theme={{
              components: {
                Collapse: {
                  headerBg: token === darkTheme ? "black" : "",
                },
                DatePicker: {
                  cellHoverBg: token.colorPrimary,
                },
              },
              algorithm: token
                ? theme.defaultAlgorithm
                : theme.defaultAlgorithm,
              token,
            }}
          >
            {children}
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
