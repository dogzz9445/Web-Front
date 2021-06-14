import Produce from "../util/produce";

export const initialState = {
    deckData: [],
    deckDataLoading: false,
    deckDataDone: false,
    deckDataError: null,
};

export const LOAD_DECKDATA_REQUEST = "LOAD_DECKDATA_REQUEST";
export const LOAD_DECKDATA_SUCCESS = "LOAD_DECKDATA_SUCCESS";
export const LOAD_DECKDATA_FAILURE = "LOAD_DECKDATA_FAILURE";

const reducer = (state = initialState, action) =>
    Produce(state, (draft) => {
        switch (action.type) {
            case LOAD_DECKDATA_REQUEST:
                draft.deckDataDone = false;
                draft.deckDataLoading = true;
                draft.deckDataError = null;
                break;
            case LOAD_DECKDATA_SUCCESS:
                draft.deckDataDone = true;
                draft.deckDataLoading = false;
                draft.deckData = action.data;
                break;
            case LOAD_DECKDATA_FAILURE:
                draft.deckDataLoading = false;
                draft.deckDataError = action.error;
                break;
            default:
                break;
        }
    });

export default reducer;
