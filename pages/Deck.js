import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_DECKDATA_REQUEST } from "../reducers/Deck";

import AppLayout from "./Components/AppLayout";
import ChartForm from "./Components/Chart/ChartForm";

const Deck = () => {
    const dispatch = useDispatch();
    const { deckData, deckDataLoading } = useSelector((state) => state.Deck);

    useEffect(() => {
        console.log("Hi");
        dispatch({
            type: LOAD_DECKDATA_REQUEST,
        });
    }, [deckDataLoading, deckData]);

    return (
        <>
            <AppLayout>
                <ChartForm key={item.data.toString()} item={item} />
                <DeckCardForm>
                    {deckData.map((item) => (
                        <DeckCard key={item.data.toString()} item={item} />
                    ))}
                </DeckCardForm>
            </AppLayout>
        </>
    );
}

export default Deck;