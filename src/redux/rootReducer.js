import { combineReducers } from "redux";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import cakeReducer from "./cakes/CakeReducer";
import chocolateReducer from "./chocolate/chocolateReducer";
import Reducer from "./user/userReducer";

const rootReducer = combineReducers({
    cake :cakeReducer,
    iceCream:iceCreamReducer,
    chocolate:chocolateReducer,
    user:Reducer,
})
export default rootReducer;