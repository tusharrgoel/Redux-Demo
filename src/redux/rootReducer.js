import { combineReducers } from "redux";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import cakeReducer from "./cakes/CakeReducer";
import chocolateReducer from "./chocolate/chocolateReducer";

const rootReducer = combineReducers({
    cake :cakeReducer,
    iceCream:iceCreamReducer,
    chocolate:chocolateReducer,
})
export default rootReducer;