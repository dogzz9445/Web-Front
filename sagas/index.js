import { all, fork } from "redux-saga/effects";
import axios from "axios";

import ChartSaga from "./ChartSaga";

// caxios.defaults.baseURL = "https://memoryboost.kr/";
axios.defaults.baseURL = "";
axios.defaults.withCredentials = true;

export default function* rootSaga() {
    yield all([fork(ChartSaga)]);
}
