import { BUY_CAKE } from "./CakeTypes";

export const buyCake = (cakeno = 0 ) => {
  return {
    type: BUY_CAKE,
    payload :cakeno
  };
};
