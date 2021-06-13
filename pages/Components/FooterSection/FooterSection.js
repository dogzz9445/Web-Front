import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterContainer = styled.div`
`;

const FooterSection = () => {
    return (
        <>
            <FooterContainer>
                <Footer style={{textAlign: "center"}}>
                    ⓒ TeamZone rights reserved, 별도의 언급이 없다면 이 사이트에 공개된 사진들은 크리에이티브 커먼즈 [저작자표시-비영리 2.0 대한민국 라이선스]에 따라 이용할 수 있습니다.
                    <br/>
                    <Link href="http://dev-won.com">
                        <a> Yoonwon Lee</a>
                    </Link>
                    <br/>
                    Dongmin Jang
                </Footer>
            </FooterContainer>
        </>
    );
};

export default FooterSection;
