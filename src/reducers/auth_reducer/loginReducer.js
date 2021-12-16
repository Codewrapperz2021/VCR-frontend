import {LOGIN} from '../../actions/action';
const initState={
    UserData:{}
}

export default function loginReducer(state=initState,action){
    switch(action.type){
        case LOGIN:
            return {
                // ...state,      
                UserData:action.payload,state
            }
                default:
                    return state
    }
}
