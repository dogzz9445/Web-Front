import React from "react";
import {css} from "@emotion/react"
import { Card, Space, Typography, Image } from "antd";

const TextChampion = ({ children, ...props }) => (
    <Typography style={css`
        @font-face {
            font-family: 'NanumSquareB';
            font-style: normal;
            color: green,
            src: local(''), url('http://localhost:3000/fonts/NanumSquareB.ttf') format('truetype');
        }
    `} {...props}>
        {children}
    </Typography>
)

const DeckCard = ({oneDeckData}) => {

    return (
        <Card 
            title={"승률: " + oneDeckData.win_rate.toString() + "%"} 
            style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
            hoverable="true" >
            <Card type="inner">
                <Space direction="horizontal">
                    {oneDeckData.champions.map((oneChampion) => (
                        <Space width="50" direction="vertical" key={oneChampion.toString()}>
                            <Image 
                                width={50} 
                                alt={oneChampion.toString()} 
                                src={"http://localhost:3000/assets/champions/" + oneChampion.toString() + ".png"} />
                            <Typography style={{ fontSize: "13px", fontFamily: "NanumSquareB" }}>{oneChampion.toString()}</Typography>
                        </Space>
                    ))}
                </Space>
            </Card>
            <Card type="inner">
                <Space direction="horizontal">
                    {oneDeckData.traits.map((oneTrait) => (
                        <Space width="50" direction="vertical" key={oneTrait.toString()}>
                            <Image 
                                width={50} 
                                alt={oneTrait.toString()} 
                                src={"http://localhost:3000/assets/traits/" + oneTrait.toString() + ".png"} />
                            <Typography style={{ fontSize: "13px", fontFamily: "NanumSquareB" }}>{oneTrait.toString()}</Typography>
                        </Space>
                    ))}
                </Space>
            </Card>
        </Card>
    )
}

export default DeckCard;
