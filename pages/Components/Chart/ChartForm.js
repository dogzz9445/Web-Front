import React from "react";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";

import styled from "@emotion/styled";
import randomColor from "randomcolor";

const ChartContainer = styled.div`
    height: 500px;
    margin: 16px;
`;

const Chart = ({ deckData }) => {
    var iterDate = new Date(deckData.info?.start_time);
    const labelDates = [];
    for (var i = 0; i < 7; i++){
        labelDates.push(iterDate.toLocaleDateString());
        iterDate.setDate(iterDate.getDate() + 1);
    }
    const data = {
        labels: labelDates,
        datasets: deckData.data?.map((item, idx) => {
            return {
                label: item['id'] + 1,
                data: item['daily_win_rate'],
                // chartData && chartData.class_coverage,
                lineTension: 0.4,
                fill: false,
                // backgroundColor: "rgba(15, 107, 255, 0.1)",
                cubicInterpolationMode: 'monotone',
                borderColor: randomColor(),
            }
        }),
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };
    const legend = {
        display: false,
        labels: {
            fontColor: "black",
        },
        position: "top", //label를 넣어주지 않으면 position이 먹히지 않음
    };

    return (
        <>
            <ChartContainer>
                <Line data={data} legend={legend} options={options} />
            </ChartContainer>
        </>
    );
};

export default Chart;
