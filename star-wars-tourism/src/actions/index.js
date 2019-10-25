//axios

import axios from 'axios'

//actions

//initial API call
export const GET_DESTINATION = "GET_DESTINATION"

//got the data
export const GOT_DESTINATION = "GOT_DESTINATION"

//ran into an error
export const GET_DESTINATION_FAILED = "GET_DESTINATION_FAILED"

// export const BAD_FEELING = "BAD_FEELING" //maybe a random destination picker.

export const getItinerary = () => {
    return (dispatch) => {
        dispatch({ type: GET_DESTINATION})
        axios.get('http swapi.co/api/planets/1/')
        .then(response => {
            dispatch({ type: GOT_DESTINATION, payload: response.data})
        })
        .catch(error => {
            dispatch({ type: GET_DESTINATION_FAILED, payload: error})
        })
    }
}