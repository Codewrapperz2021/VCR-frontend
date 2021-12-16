import { createStore } from "redux";
import loginReducer from "./reducers/auth_reducer/loginReducer";
import rootReducer from "./reducers/rootReducer";
const store = createStore(loginReducer)
export default {store};
