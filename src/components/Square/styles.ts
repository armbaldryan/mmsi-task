import styled, { css } from "styled-components";

const getPositions = ({ top, left }: any): any => {
  return css`
    top: ${top}px;
    left: ${left}px;
  `;
};
export const SquareBox = styled.div<any>`
  position: absolute;
  ${getPositions};
  width: ${process.env.REACT_APP_SQUARE_SIZE}px;
  height: ${process.env.REACT_APP_SQUARE_SIZE}px;
  background: red;
`;
