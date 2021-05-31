import axios from "axios";
import { all, call, fork, put, takeLatest, thottle } from "redux-saga/effects";
import {
    LOAD_CHARTDATA_FAILURE,
    LOAD_CHARTDATA_REQUEST,
    LOAD_CHARTDATA_SCCUESS,
} from "../reducers/Chart";

function loadChartDataAPI() {
    return axios.get(`/api/analyzed/recent/`);
}

function* loadChartData(action) {
    try {
        const result = yield call(loadChartDataAPI, action.data);

        yield put({
            type: LOAD_CHARTDATA_SCCUESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: LOAD_CHARTDATA_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchLoadChart() {
    yield takeLatest(LOAD_CHARTDATA_REQUEST, loadChartData);
}

export default function* chartSaga() {
    yield all([fork(watchLoadChart)]);
}
