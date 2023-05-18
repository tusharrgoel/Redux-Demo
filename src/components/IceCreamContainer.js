import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer() {
  const [icecreamno, seticecreamno] = useState();
  const numofIceCream = useSelector((state) => state.iceCream.numofIceCream);
  const dispatch = useDispatch();

  return (
    <div>
      <h2> Number of IceCream: {numofIceCream}</h2>
      <input
        type="text"
        value={icecreamno}
        onChange={(e) => seticecreamno(e.target.value)}
      />
      <button onClick={() => dispatch(buyIceCream(icecreamno))}>
        Buy IceCream{" "}
      </button>
    </div>
  );
}

export default IceCreamContainer;
