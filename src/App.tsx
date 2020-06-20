import React, { useRef, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import Square from "./components/Square";
import Button from "./components/Button";
import { setMiddleBoxSize } from "./store/actions/boxSize.action";
import { AppContainer, Row, EmptyBox, Board, Column } from "./styles";

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
      <Row grow={1}>
        <Column grow={1}>
          <EmptyBox />
        </Column>
        <Column grow={3}>
          <Button type="top" />
        </Column>
        <Column grow={1}>
          <EmptyBox />
        </Column>
      </Row>
      <Row grow={3}>
        <Column grow={1}>
          <Button type="left" />
        </Column>
        <Column grow={3}>
          <Board ref={ref}>
            <Square />
          </Board>
        </Column>
        <Column grow={1}>
          <Button type="right" />
        </Column>
      </Row>
      <Row grow={1}>
        <Column grow={1}>
          <EmptyBox />
        </Column>
        <Column grow={3}>
          <Button type="bottom" />
        </Column>
        <Column grow={1}>
          <EmptyBox />
        </Column>
      </Row>
    </AppContainer>
  );
}

export default App;
