import { 
    GET_DESTINATION,
    GOT_DESTINATION,
    GET_DESTINATION_FAILED    
    } from '../actions/index'

export const initialState = {
    //if you are expecting an array, you can't list the initialState as null.
    planet: [],
    isLoading: false,
    error: null
}

export function reducer(state=initialState, action) {
    switch(action.type) {
        case GET_DESTINATION:
            return {
            ...state,
            isLoading: true
        }

        case GOT_DESTINATION: 
        return {
            ...state,
            planet: action.payload,
            isLoading: false
        }

        case GET_DESTINATION_FAILED:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        
        default: 
            return state;
    }
}