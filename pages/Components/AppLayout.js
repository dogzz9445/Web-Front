import React from "react";
import Link from "next/link";

import Navigation from "./Navigation/index";

import styled from "@emotion/styled";

import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
    return (
        <>
            <Header className="header">
                <Navigation />
            </Header>
            <Content >
                <Layout style={{ padding: '12px 0' }}>
                    {children}
                </Layout>
            </Content>
            <Footer style={{ fontSize:6, textAlign: 'center', padding: '0' }}>
                ⓒ 
                <Link href="https://github.com/dogzz9445">
                    <a> Dongmin Jang</a>
                </Link> rights reserved, 별도의 언급이 없다면 이 사이트에 공개된 사진들은 크리에이티브 커먼즈 [저작자표시-비영리 2.0 대한민국 라이선스]에 따라 이용할 수 있습니다.
                <br/>
            </Footer>
        </>
    );
};

export default AppLayout;
