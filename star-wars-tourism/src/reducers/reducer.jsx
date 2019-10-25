import { 
    GET_DESTINATION,
    GOT_DESTINATION,
    GET_DESTINATION_FAILED    
    } from '../actions/index'

const initialState = {
    planet: null,
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