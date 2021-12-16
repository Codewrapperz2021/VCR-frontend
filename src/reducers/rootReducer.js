import registerReducer from "./auth_reducer/registerReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
        register:registerReducer,
})
export default rootReducer