export const boredReducer = (state = {},action) => {
    switch(action.type) {
        case "BORED":
            return action.payload;
        default:
            return state;
    };
};

export const currencyReducer = (state = {},action) => {
    switch(action.type) {
        case "BUY_BTC":
            return action.payload;
        default:
            return state;
    };
};

export const cocktailsReducer = (state = {},action) => {
    switch(action.type) {
        case "FETCH_COCKTAILS":
            return action.payload;
        default:
            return state;
    };
};

export const deckReducer = (state = {counter: 0,hand: null},action) => {
    switch(action.type) {
        case "FETCH_DECK":
            return {...state,newDeck: action.payload};
        case "INCREASE":
            return {...state,counter: state.counter + 1};
        case "RESET_VALUE":
            return {...state,counter: 0};
        case "SET_HAND":
            return {...state,hand: action.payload};
        default: 
            return state;
    };
};