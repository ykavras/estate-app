import React from "react";
import { Svg, G, Line } from "react-native-svg";

export default function Menu(props) {
  return (
    <Svg {...props} viewBox="0 0 22 18">
      <G id="Group_2" transform="translate(-687.5 -1070.5)" data-name="Group 2">
        <Line
          id="Line_2"
          fill="none"
          stroke="#616161"
          strokeLinecap="round"
          strokeWidth="2"
          transform="translate(691.5 1071.5)"
          x2="14"
          data-name="Line 2"
        />
        <Line
          id="Line_3"
          fill="none"
          stroke="#616161"
          strokeLinecap="round"
          strokeWidth="2"
          transform="translate(688.5 1079.5)"
          x2="20"
          data-name="Line 3"
        />
        <Line
          id="Line_4"
          fill="none"
          stroke="#616161"
          strokeLinecap="round"
          strokeWidth="2"
          transform="translate(691.5 1087.5)"
          x2="14"
          data-name="Line 4"
        />
      </G>
    </Svg>
  );
}
