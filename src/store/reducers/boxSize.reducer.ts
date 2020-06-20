import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import { setMiddleBoxSize } from "../actions/boxSize.action";
import { MiddleBoxSizeType } from "../../types";

const initialState: MiddleBoxSizeType = {
  width: 0,
  height: 0,
  disabledValues: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
};

const getBoxSize = (
  state: MiddleBoxSizeType,
  action: PayloadAction<MiddleBoxSizeType>
): MiddleBoxSizeType => ({
  width: action.payload.width,
  height: action.payload.height,
  disabledValues: {
    top: 0,
    left: 0,
    bottom: action.payload.height - Number(process.env.REACT_APP_SQUARE_SIZE),
    right: action.payload.width - Number(process.env.REACT_APP_SQUARE_SIZE),
  },
});

const middleBoxSizeReducer = createReducer(initialState, {
  [setMiddleBoxSize]: getBoxSize,
});

export default middleBoxSizeReducer;
