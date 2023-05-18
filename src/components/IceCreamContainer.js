import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer () {
  const numofIceCream = useSelector(state => state.iceCream.numofIceCream);
  const dispatch = useDispatch();

  return (
    <div>
      <h2> Number of IceCream: {numofIceCream}</h2>
      <button onClick={()=>dispatch(buyIceCream())}>Buy IceCream </button>
    </div>
  );
}

export default IceCreamContainer;
