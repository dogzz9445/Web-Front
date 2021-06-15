import React from "react";

import Navigation from "./Navigation/index";
import FooterSection from "./FooterSection/FooterSection";

import styled from "@emotion/styled";

import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
    return (
        <>
            <Header className="header">
                <Navigation />
            </Header>
            <Content style={{ padding: '0 50px '}}>
                <Layout className="site-layout-background" style={{ padding: '12px 0' }}>
                    {children}
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                <FooterSection />
            </Footer>
        </>
    );
};

export default AppLayout;
