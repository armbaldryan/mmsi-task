import React, { useRef, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import Square from "./components/Square";
import Button from "./components/Button";
import { setMiddleBoxSize } from "./store/actions/boxSize.action";
import { AppContainer, Middle, EmptyBox, Board, Box } from "./styles";

function App() {
  const ref: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (ref && ref.current) {
      dispatch(setMiddleBoxSize(ref.current.getBoundingClientRect().toJSON()));
    }
  }, [dispatch, ref]);

  return (
    <AppContainer>
      <Box grow={1}>
        <Middle grow={1}>
          <EmptyBox />
        </Middle>
        <Middle grow={3}>
          <Button type="top" />
        </Middle>
        <Middle grow={1}>
          <EmptyBox />
        </Middle>
      </Box>
      <Box grow={3}>
        <Middle grow={1}>
          <Button type="left" />
        </Middle>
        <Middle grow={3}>
          <Board ref={ref}>
            <Square />
          </Board>
        </Middle>
        <Middle grow={1}>
          <Button type="right" />
        </Middle>
      </Box>
      <Box grow={1}>
        <Middle grow={1}>
          <EmptyBox />
        </Middle>
        <Middle grow={3}>
          <Button type="bottom" />
        </Middle>
        <Middle grow={1}>
          <EmptyBox />
        </Middle>
      </Box>
    </AppContainer>
  );
}

export default App;
