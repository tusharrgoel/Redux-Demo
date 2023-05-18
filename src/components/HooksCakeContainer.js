import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
    const[cakeno,setcakeno] = useState();
  const numOfCakes = useSelector(state => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2> Number of Cakes: {numOfCakes}</h2>
      <input type = "text" value = {cakeno} onChange={e => setcakeno(e.target.value)} />
      <button onClick={()=>dispatch(buyCake(cakeno))}>Buy cake </button>
    </div>
  );
}

export default HooksCakeContainer;
