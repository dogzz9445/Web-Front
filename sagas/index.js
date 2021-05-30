import { all, fork } from "redux-saga/effects";
import axios from "axios";
import ChartSaga from "./ChartSaga";

// axios.defaults.baseURL = "192.168.114.187:8000";
// axios.defaults.withCredentials = true;

export default function* rootSaga() {
    yield all([fork(ChartSaga)]);
}
