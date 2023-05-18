import { BUY_CHOCOLATE } from "./chocolateType";
const initialState = {
  numOfChocolate: 30,
};

const chocolateReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CHOCOLATE:
      return {
        ...state,
        numOfChocolate: state.numOfChocolate - action.payload,
      };

    default:
      return state;
  }
};
export default chocolateReducer;
