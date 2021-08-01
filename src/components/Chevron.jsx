import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  fill: #b3c53f;
  height: 8px;
`;

const Chevron = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72.5 10">
      <g>
        <line
          y1="5"
          x2="72"
          y2="5"
          fill="none"
          stroke="#b3c53f"
          stroke-miterlimit="10"
        />
        <path
          d="M63,9.5C63,5,72,5,72,5S63,5,63,.5"
          fill="none"
          stroke="#b3c53f"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </Svg>
  );
};

export default Chevron;
