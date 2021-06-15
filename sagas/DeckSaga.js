import axios from "axios";
import { all, call, fork, put, takeEvery, takeLatest, throttle } from "redux-saga/effects";
import {
    LOAD_DECKDATA_FAILURE,
    LOAD_DECKDATA_REQUEST,
    LOAD_DECKDATA_SUCCESS,
} from "../reducers/Deck";

function loadDeckDataAPI() {
    return axios.get(`/api/analyzed/decks`);
    // axios.get(`/search-asyn?keyword=amd`);
}

function* loadDeckData(action) {
    try {
        const result = yield call(loadDeckDataAPI, action.data);
        
        yield put({
            type: LOAD_DECKDATA_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: LOAD_DECKDATA_FAILURE,
            error: err.response,
        });
    }
}

function* watchLoadDeck() {
    yield takeLatest(LOAD_DECKDATA_REQUEST, loadDeckData);
}

export default function* deckSaga() {
    yield all([fork(watchLoadDeck)]);
}
