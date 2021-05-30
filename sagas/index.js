import { all, fork } from "redux-saga/effects";
import axios from "axios";
import ChartSaga from "./ChartSaga";

axios.defaults.baseURL =
    "http://ec2-3-35-22-64.ap-northeast-2.compute.amazonaws.com:8000/api/analyzed/recent/";
axios.defaults.withCredentials = true;

export default function* rootSaga() {
    yield all([fork(ChartSaga)]);
}
