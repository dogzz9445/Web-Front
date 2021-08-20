import { all, fork } from "redux-saga/effects";
import axios from "axios";

import DeckSaga from "./DeckSaga";

// caxios.defaults.baseURL = "https://memoryboost.kr/";
axios.defaults.baseURL = "http://tzfamilyreact.duckdns.org/";
axios.defaults.withCredentials = true;

export default function* rootSaga() {
    yield all([fork(DeckSaga)]);
}
