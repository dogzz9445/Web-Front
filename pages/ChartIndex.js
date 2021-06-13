import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_CHARTDATA_REQUEST } from "../reducers/Chart";

import AppLayout from "./Components/AppLayout";
import ChartForm from "./Components/Chart/ChartForm";

// TODO:
// Use this when insert chart
// function a11yProps(index) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }

const ChartIndex = () => {
    const dispatch = useDispatch();
    const { chartData, chartDataLoading } = useSelector((state) => state.Chart);

    useEffect(() => {
        console.log("Hi");
        dispatch({
            type: LOAD_CHARTDATA_REQUEST,
        });
    }, [chartDataLoading, chartData]);

    return (
        <>
            <AppLayout>
                {chartData.map((item) => (
                    <ChartForm key={item.data.toString()} item={item} />
                ))}
            </AppLayout>
        </>
    );
};

export default ChartIndex;
