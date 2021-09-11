import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { boredReducer } from "./reducers";
import { currencyReducer } from "./reducers";
import { cocktailsReducer } from "./reducers";
import { deckReducer } from "./reducers";

export default combineReducers({
    bored: boredReducer,
    currency: currencyReducer,
    cocktails: cocktailsReducer,
    deck: deckReducer,
    form: formReducer
})