import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_DECKDATA_REQUEST } from "../reducers/Deck";

import { Layout, Typography, Row, Col } from "antd";
const { Title } = Typography;

import AppLayout from "./Components/AppLayout";
import ChartForm from "./Components/Chart/ChartForm";
import DeckCard from "./Components/Card/DeckCard";
import DateForm from "./Components/DatePicker/DatePicker";

const Deck = () => {
    const dispatch = useDispatch();
    const { deckData, deckDataLoading } = useSelector((state) => state.Deck);
    const { isInitialized, setIsInitialized } = useState(false);

    useEffect(() => {
        isInitialized ? null : () => {
            dispatch({
                type: LOAD_DECKDATA_REQUEST,
            });
            setIsInitialized(true);
        };
        const timeout = setTimeout(() => {
            dispatch({
                type: LOAD_DECKDATA_REQUEST,
            });
        }, 3600000);
        return () => {
            clearTimeout(timeout);
        };
    }, [deckDataLoading, deckData]);

    return (
        <>
            <AppLayout>
                <Layout>
                    <Layout>
                        <Row justify="space-around">
                            <Col span={4} />
                            <Col span={14} style={{textAlign: "center", verticalAlign: "center"}}>
                                <Title style={{fontFamily:"NanumSquareB"}} level={2}>
                                    나눔스퀘어 테스트
                                </Title>
                            </Col>
                            <Col span={4} style={{textAlign: "right"}}>
                                <DateForm style={{alignSelf: 'flex-end'}}/>
                            </Col>
                        </Row>
                        <ChartForm deckData={deckData}/>
                    </Layout>
                    { deckData.data?.map((oneDeckData) => (
                        <DeckCard key={oneDeckData.id} oneDeckData={oneDeckData} />
                    ))}
                </Layout>
            </AppLayout>
        </>
    );
}

export default Deck;