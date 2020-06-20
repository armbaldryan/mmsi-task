import React from "react";
import { useSelector } from "react-redux";
import { getPosition } from "../../store/selectors";
import { SquareBox } from "./styles";

function Square() {
  const position = useSelector(getPosition);

  return <SquareBox top={position.top} left={position.left} />;
}

export default Square;
