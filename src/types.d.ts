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

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_SQUARE_SIZE: string;
    }
  }
}

declare var process: {
  env: {
    REACT_APP_SQUARE_SIZE: string;
  };
};

// export const REACT_APP_NOT_SECRET_CODE: string = process.env
//   .REACT_APP_NOT_SECRET_CODE as string;
