export interface SquarePositionType {
  top: number;
  left: number;
}

export type MiddleBoxSizeType = {
  width: number;
  height: number;
  disabledValues: DisabledValuesType;
};

export interface DisabledValuesType {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

declare var process: {
  env: {
    REACT_APP_SQUARE_SIZE: string;
  };
};
