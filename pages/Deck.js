import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_DECKDATA_REQUEST } from "../reducers/Deck";

import AppLayout from "./Components/AppLayout";
import ChartForm from "./Components/Chart/ChartForm";
import DeckCard from "./Components/Card/DeckCard";
import DateForm from "./Components/DatePicker/DatePicker";

const Deck = () => {
    const dispatch = useDispatch();
    const { deckData, deckDataLoading } = useSelector((state) => state.Deck);

    useEffect(() => {
        dispatch({
            type: LOAD_DECKDATA_REQUEST,
        });
    }, [deckDataLoading, deckData]);

    return (
        <>
            <AppLayout>
                <DateForm />
                <ChartForm item={deckData} />
                { deckData.data?.map((oneDeckData) => (
                    <DeckCard key={oneDeckData.id} oneDeckData={oneDeckData} />
                ))}
            </AppLayout>
        </>
    );
}

export default Deck;