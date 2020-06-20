import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import squarePositionReducer from "./reducers/squarePosition.reducer";
import middleBoxSizeReducer from "./reducers/boxSize.reducer";

export const store = configureStore({
  reducer: {
    squarePosition: squarePositionReducer,
    middleBoxSize: middleBoxSizeReducer,
  },
  middleware: [...getDefaultMiddleware()],
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
