import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_CHARTDATA_REQUEST } from "../reducers/Chart";

import AppLayout from "./Components/AppLayout";

const Test = () => {
    const { chartData, chartDataLoading } = useSelector((state) => state.Chart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: LOAD_CHARTDATA_REQUEST,
        });
    }, [chartData, chartDataLoading]);
    return (
        <>
            <AppLayout>
                <div>asd</div>
                <div>{chartData}</div>
            </AppLayout>
        </>
    );
};

export default Test;
