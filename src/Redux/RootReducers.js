import { combineReducers } from "redux";
import ThemeReducer from "./Theme/ThemeReducer";
import CartReducer from './Cart/CartReducer';
import LogOutReducer from "./LogOut/LogOutReducer";
import LogOutNavRed from "./LogOut/LogOutNavRed";
export const RootReducer = combineReducers({
    Theme: ThemeReducer,
    Cart: CartReducer,
    LogOut: LogOutReducer,
    LogOutNav: LogOutNavRed
})