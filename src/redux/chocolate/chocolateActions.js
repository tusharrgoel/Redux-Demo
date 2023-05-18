import { BUY_CHOCOLATE } from "./chocolateType";

export const buyChocolate = (no =0) => {
  return {
    type: BUY_CHOCOLATE,
    payload:no
  };
};
