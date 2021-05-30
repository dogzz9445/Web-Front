import React, { uesEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_CHARTDATA_REQUEST } from "../reducers/Chart";
import Chart from "./Components/Chart/Chart";

const ChartIndex = () => {
    const { chartData } = useSelector((state) => state.Chart);
    const dispatch = useDispatch();

    uesEffect(() => {
        dispatch({
            type: LOAD_CHARTDATA_REQUEST,
        });
    });

    return (
        <>
            <AppLayout>
                {chartData.map((chart) => (
                    <Chart key={chart.id} chart={chart} />
                ))}
            </AppLayout>
        </>
    );
};

export default ChartIndex;
