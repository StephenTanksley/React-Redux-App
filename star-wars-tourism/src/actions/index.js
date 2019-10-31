//axios
import axios from 'axios'

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
        axios.get('https:swapi.co/api/planets/')
        .then(response => {
            dispatch({ type: GOT_DESTINATION, payload: response.data.results})
        })
        .catch(error => {
            dispatch({ type: GET_DESTINATION_FAILED, payload: error})
        })
    }
}