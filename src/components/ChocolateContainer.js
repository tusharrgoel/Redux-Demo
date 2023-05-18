import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyChocolate } from "../redux";

function ChocolateContainer() {
    const[chocolateno,setchocolateno] = useState();
  const numOfChocolate = useSelector((state) => state.chocolate.numOfChocolate);
  const dispatch = useDispatch();

  return (
    <div>
      <h2> Number of Chocolate: {numOfChocolate}</h2>
      <input type = "text" value = {chocolateno} onChange={e => setchocolateno(e.target.value)} />
      <button onClick={() => dispatch(buyChocolate(chocolateno))}>Buy Chocolate </button>
    </div>
  );
}

export default ChocolateContainer;
