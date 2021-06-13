import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import Deck from "./Deck";

const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload;
        default: {
            const combineReducer = combineReducers({
                Deck,
            });
            return combineReducer(state, action);
        }
    }
};

export default rootReducer;
