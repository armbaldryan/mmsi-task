import React from "react";
import { useDispatch } from "react-redux";
import { moveSquare } from "../../store/actions/squarePosition.action";
import { ButtonBox } from "./styles";

function Button({ type }: { type: string }) {
  const dispatch = useDispatch();
  let interval: number = 0;

  const clickHandler = (newType: string): void => {
    interval = setInterval(() => {
      dispatch(moveSquare(newType));
    }, 20);
  };

  const mouseUpHandler = (): void => clearInterval(interval);

  return (
    <ButtonBox
      onMouseDown={(): void => clickHandler(type)}
      onMouseUp={mouseUpHandler}
    />
  );
}

export default Button;
