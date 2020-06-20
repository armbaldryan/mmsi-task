import { createSelector } from "@reduxjs/toolkit";
import { SquarePositionType, MiddleBoxSizeType } from "../../types";
import { RootState } from "../";

export const getSquarePosition = (state: RootState): SquarePositionType =>
  state.squarePosition;

export const getMiddleBoxSize = (state: RootState): MiddleBoxSizeType | null =>
  state.middleBoxSize;

export const getPosition = createSelector(
  [getMiddleBoxSize, getSquarePosition],
  (boxSize, position) => ({
    top: Math.floor(
      boxSize
        ? ((boxSize.height - Number(process.env.REACT_APP_SQUARE_SIZE)) / 100) *
            position.top
        : 0
    ),
    left: Math.floor(
      boxSize
        ? ((boxSize.width - Number(process.env.REACT_APP_SQUARE_SIZE)) / 100) *
            position.left
        : 0
    ),
  })
);

/**
 * @todo I need to write all 4 phases after
 * which I need to stop dispatching actions
 */
// export const getDisabled = createSelector(
//   [getMiddleBoxSize, getPosition],
//   (boxSize, position) => ({
//     disabledTop: boxSize && boxSize.disabledValues.top === position.top,
//   })
// );
