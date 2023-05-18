import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyChocolate } from "../redux";

function ChocolateContainer() {
  const numOfChocolate = useSelector((state) => state.chocolate.numOfChocolate);
  const dispatch = useDispatch();

  return (
    <div>
      <h2> Number of Chocolate: {numOfChocolate}</h2>
      <button onClick={() => dispatch(buyChocolate())}>Buy Chocolate </button>
    </div>
  );
}

export default ChocolateContainer;
