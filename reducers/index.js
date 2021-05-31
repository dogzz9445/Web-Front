import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import Chart from "./Chart";

const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload;
        default: {
            const combineReducer = combineReducers({
                Chart,
            });
            return combineReducer(state, action);
        }
    }
};

export default rootReducer;
