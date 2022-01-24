import loginReducer from "./auth_reducer/loginReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
        loginReducer,
})
export default rootReducer