import React from "react";
import { FruitsSvgProps } from "./types";

export const AppleSVG = (props: FruitsSvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      height="36"
      width="36"
      aria-label={!props.isInaccessible ? "apple" : ""}
    >
      <path d="M224 112c-8.8 0-16-7.2-16-16V80c0-44.2 35.8-80 80-80h16c8.8 0 16 7.2 16 16v16c0 44.2-35.8 80-80 80zM0 288c0-76.3 35.7-160 112-160 27.3 0 59.7 10.3 82.7 19.3 18.8 7.3 39.9 7.3 58.7 0 22.9-8.9 55.4-19.3 82.7-19.3 76.3 0 112 83.7 112 160 0 128-80 224-160 224-16.5 0-38.1-6.6-51.5-11.3-8.1-2.8-16.9-2.8-25 0-13.4 4.7-35 11.3-51.5 11.3C80 512 0 416 0 288" />
    </svg>
  );
};
