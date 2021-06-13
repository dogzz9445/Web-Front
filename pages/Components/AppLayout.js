import React from "react";

import Navigation from "./Navigation/index";
import FooterSection from "./FooterSection/FooterSection";

import styled from "@emotion/styled";

const Content = styled.div`
    height: 100%;
    margin-top: 120px;
`;

const AppLayout = ({ children }) => {
    return (
        <>
            <Navigation />
            <Content>{children}</Content>
            <FooterSection />
        </>
    );
};

export default AppLayout;
