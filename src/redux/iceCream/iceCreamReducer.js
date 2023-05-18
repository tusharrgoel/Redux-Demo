import { BUY_ICECREAM } from "./iceCreamtype";

const initialState = {
  numofIceCream: 20,
};
const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numofIceCream: state.numofIceCream - action.payload };

    default:
      return state;
  }
};

export default iceCreamReducer;
