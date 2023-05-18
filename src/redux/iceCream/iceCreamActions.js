import { BUY_ICECREAM } from "./iceCreamtype";

export const buyIceCream = (no = 0) => {
  return {
    type: BUY_ICECREAM,
    payload:no
  };
};
