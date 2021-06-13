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
                console.log("요청");
                break;
            case LOAD_DECKDATA_SUCCESS:
                draft.deckDataDone = true;
                draft.deckDataLoading = false;
                /* 추후 불러오는 부분 수정해야함. */
                draft.deckData = draft.deckData.concat(action.data);
                console.log(action.data);
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
