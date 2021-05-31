import Produce from "../util/produce";

export const initialState = {
    chartData: [],
    chartDataLoading: false,
    chartDataDone: false,
    chartDataError: null,
};

export const LOAD_CHARTDATA_REQUEST = "LOAD_CHARTDATA_REQUEST";
export const LOAD_CHARTDATA_SUCCESS = "LOAD_CHARTDATA_SUCCESS";
export const LOAD_CHARTDATA_FAILURE = "LOAD_CHARTDATA_FAILURE";

const reducer = (state = initialState, action) =>
    Produce(state, (draft) => {
        switch (action.type) {
            case LOAD_CHARTDATA_REQUEST:
                draft.chartDataDone = false;
                draft.chartDataLoading = true;
                draft.chartDataError = null;
                console.log("요청");
                break;
            case LOAD_CHARTDATA_SUCCESS:
                draft.chartDataDone = true;
                draft.chartDataLoading = false;
                /* 추후 불러오는 부분 수정해야함. */
                draft.chartData = draft.chartData.concat(action.data);
                console.log(action.data);
                break;
            case LOAD_CHARTDATA_FAILURE:
                draft.chartDataLoading = false;
                draft.chartDataError = action.error;
                break;
            default:
                break;
        }
    });

export default reducer;
