import { authConstants } from "../actions/constants"

const initState = {
    name: 'Riz'
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                ...action.payload
            }
            break;
        default:
            break;

    }
    return state;
}