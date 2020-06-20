import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { moveSquare } from "../actions/squarePosition.action";
import { SquarePositionType } from "../../types";

const initialState: SquarePositionType = {
  top: 50,
  left: 50,
};

const getLeftPosition = (type: string, value: number): number => {
  if (type === "left" && value !== 0) {
    return value - 10;
  }
  if (type === "right" && value !== 100) {
    return value + 10;
  }
  return value;
};

const getTopPosition = (type: string, value: number): number => {
  if (type === "top" && value !== 0) {
    return value - 10;
  }
  if (type === "bottom" && value !== 100) {
    return value + 10;
  }
  return value;
};

const getSquarePositions = (
  state: SquarePositionType,
  action: PayloadAction<string>
): SquarePositionType => {
  return {
    top: getTopPosition(action.payload, state.top),
    left: getLeftPosition(action.payload, state.left),
  };
};

const squarePositionReducer = createReducer(initialState, {
  [moveSquare]: getSquarePositions,
});

export default squarePositionReducer;
