import boredApi from "../apis/boredApi";
import currencyApi from "../apis/currencyApi";
import cocktailsApi from "../apis/cocktailsApi";
import deckApi from "../apis/deckOfCards";

export const findActivity = () => async dispatch => {
    const response = await boredApi.get("activity");
    dispatch({type: "BORED",payload: response.data});
};

export const buyBTC = () => async dispatch => {
    const response = await currencyApi.get("buy");
    dispatch({type: "BUY_BTC",payload: response.data});
};

export const fetchCocktails = name => async dispatch => {
    const cocktailName = name.name;
    const response = await cocktailsApi.get(`search.php?s=${cocktailName}`);
    dispatch({type: "FETCH_COCKTAILS",payload: response.data});
};

export const fetchDeck = () => async dispatch => {
    // Draws all the new deck of cards and stores it
    const response = await deckApi.get("?count=52"); 
    dispatch({type: "FETCH_DECK",payload: response.data});
};

export const increaseValue = () => {return {type: "INCREASE"}};

export const resetValue = () => {return {type: "RESET_VALUE"}};

export const setHand = images => {
    return {
        type: "SET_HAND",
        payload: images
    }
};