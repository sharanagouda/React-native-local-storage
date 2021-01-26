import  axios from 'axios';
import { BASE_URL } from '../utilities'


export const Action = {
    GET_MOVIES : 'fetch_movies',
    ADD_TO_WISHLIST: 'add_to_wishlist',
    REMOVE_FROM_WISHLIST: 'remove_from_wishlist',
    ON_ERROR: 'on_error'
}

export const QUOTES_AVAILABLE = 'QUOTES_AVAILABLE';
export const ADD_QUOTE = 'ADD_QUOTE';
export const UPDATE_QUOTE = 'UPDATE_QUOTE';
export const DELETE_QUOTE = 'DELETE_QUOTE';

// Get Quotes
export const addQuotes = (quotes) => ({
    type: QUOTES_AVAILABLE,
    data: {quotes}
});

// Add Quote - CREATE (C)
export const addQuote = (quote) => ({
    type: ADD_QUOTE,
    data: {quote}
});

// Update Quote - UPDATE (U)
export const updateQuote = (quote) => ({
    type: UPDATE_QUOTE,
    data: {quote}
});

// Delete Quote - DELETE (D)
export const deleteQuote = (id) => ({
    type: DELETE_QUOTE,
    data: {id}
});

export const fetchMovies = () => {

    try{
        return async(dispatch) => {

             const response = await axios.get(`${BASE_URL}/watch/movie`);
            
             console.log(response);
            if(response.data){
                dispatch({
                    type: Action.GET_MOVIES,
                    payload: response.data
                })
    
            }else{
                //throw error
                dispatch({
                    type: Action.ON_ERROR,
                    payload: 'Unable to fetch movies'
                })
    
            }
    
        }

    }catch(err){
        //throw error
        dispatch({
            type: Action.ON_ERROR,
            payload: 'Unable to fetch movies'
        }) 
    }


}


export const addToWishList = (movie) => (dispatch) => {

    dispatch({
        type: Action.ADD_TO_WISHLIST,
        payload: movie
    })

}


export const removeFromWishlist = (movie) => (dispatch) => {

    dispatch({
        type: Action.REMOVE_FROM_WISHLIST,
        payload: movie
    })

}