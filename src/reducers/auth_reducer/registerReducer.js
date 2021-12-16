const initState={
    name:'',
    email:'',
    password:''
}

const registerReducer=(state=initState,action)=>{
    switch(action.type){
        case 'name':
            return {
                ...state,
                email:action.payload
            }
        case 'email':
            return {
                ...state,
                email:action.payload
            }
            case 'password':
                return {
                    ...state,
                    password:action.payload
                }
                default:
                    return state
    }
}
export default  registerReducer;