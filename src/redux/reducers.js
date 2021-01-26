import { Action, QUOTES_AVAILABLE, ADD_QUOTE, UPDATE_QUOTE, DELETE_QUOTE } from './actions'


const initialState = {
    movies: [],
    wishlist: [],
    users: [],
    quotes: []
}


export default function(state = initialState, action){

    switch(action.type){

        case Action.GET_MOVIES: 
            return {
                ...state,
                movies: action.payload
            }
        case Action.ADD_TO_WISHLIST: 
            return {
                ...state,
                wishlist:[...state.wishlist, action.payload]
            }
        case Action.REMOVE_FROM_WISHLIST: 
            return {
                ...state,
                wishlist: state.wishlist.filter((movie) => movie._id !== action.payload._id)
            }
            case ADD_QUOTE:
                let { quote } = action.data;
    
                //clone the current state
                let clone = JSON.parse(JSON.stringify(state.quotes));
    
                clone.unshift(quote); //add the new quote to the top
    
                return {...state, quotes: clone};
    
            case QUOTES_AVAILABLE:
                let { quotes } = action.data;
    
                return {...state, quotes};
    
            case UPDATE_QUOTE:{
                let { quote } = action.data;
    
                //clone the current state
                let clone = JSON.parse(JSON.stringify(state.quotes));
    
                //check if bookmark already exist
                const index = clone.findIndex((obj) => obj.id === quote.id);
    
                //if the quote is in the array, update the quote
                if (index !== -1) clone[index] = quote;
    
                return {...state, quotes: clone};
            }
    
            case DELETE_QUOTE:{
                let { id } = action.data;
    
                //clone the current state
                let clone = JSON.parse(JSON.stringify(state.quotes));
    
                //check if quote already exist
                const index = clone.findIndex((obj) => obj.id === id);
    
                //if the quote is in the array, remove the quote
                if (index !== -1) clone.splice(index, 1);
    
                return {...state, quotes: clone};
            }
        default:
            return state
    }


}