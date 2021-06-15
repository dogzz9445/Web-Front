import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Menu } from 'antd';
import { 
    LineChartOutlined, 
    UserSwitchOutlined, 
    PlaySquareOutlined, 
    FormOutlined, 
    RightSquareOutlined, 
    AppstoreOutlined
} from '@ant-design/icons';

const NavSection = styled.div`
    position: fixed;
    width: 100%;
`;
const NavContainer = styled.div`
    display: flex;
    width: 100%;
    position: fixed;
    top: 0;
    align-items: center;
`;
const MenuLogo = styled.div`
    border: 1px solid blue;
    width: 30%;
    font-size: 20pt;
    @media (maxw-width: 360px) {
        font-size: 14pt;
        width: 20%;
    }
`;
const MenuItem = styled.div`
    border: 1px solid green;
    width: 100%;
    text-align: center;
    display: flex;
    & a {
        margin: 10px;
        font-size: 20pt;
    }
    @media (max-width: 360px) {
        width: 80%;
        & a {
            margin: 4px;
            font-size: 14pt;
        }
    }
`;
const ToggleSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
const ToggleMenu = styled.div`
    bottom: 0px;
    width: 100%;
`;

const Navigation = () => {
    return (
        <>
            <Menu style={{width:"100%", fontFamily:"NanumSquareR"}} theme="dark" mode="horizontal">
                <Menu.Item key="Home">
                    <a>TAWeb</a>
                </Menu.Item>
                <Menu.Item key="Analyze" icon={<LineChartOutlined />}>
                    <Link href="/">
                        <a>덱 분석</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="Personalization" icon={<UserSwitchOutlined />}>
                    <Link href="/Personalization">
                        <a>개인 분석</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="VideoYT" icon={<PlaySquareOutlined/>}>
                    <Link href="/VideoYT">
                        <a>동영상</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="Board" icon={<FormOutlined />}>
                    <Link href="/Board">
                        <a>게시판</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="Contact" icon={<AppstoreOutlined />}>
                    <Link href="/Contact">
                        <a>문의</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="Test" icon={<RightSquareOutlined />}>
                    <Link href="/Test">
                        <a>TEST</a>
                    </Link>
                </Menu.Item>
            </Menu>
        </>
    );
}

export default Navigation;
