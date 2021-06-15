import React from "react";
import {css} from "@emotion/react"
import { Card, Space, Typography, Image } from "antd";

const DeckCard = ({oneDeckData}) => {

    return (
        <Card 
            style={{ marginTop: 7, marginLeft: 10, marginRight: 10}}
            size="small" hoverable="true" >
            <Card
                title={"승률: " + oneDeckData.win_rate.toString() + "%  순방률: " + oneDeckData.defense_rate?.toString() + "%" } 
                size="small" type="inner">
                <Space direction="horizontal">
                    {oneDeckData.champions.map((oneChampion) => (
                        <Space width="50" direction="vertical" key={oneChampion.toString()}>
                            <Image 
                                width={50} 
                                alt={oneChampion.toString()} 
                                src={"http://localhost:3000/assets/champions/" + oneChampion.toString() + ".png"} />
                            <Typography style={{ fontSize: "13px", fontFamily: "NanumSquareR" }}>{oneChampion.toString()}</Typography>
                        </Space>
                    ))}
                </Space>
            </Card>
            <Card size="small" type="inner">
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
