import React, { useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Menu } from 'antd';
import { 
    LineChartOutlined, 
    UserSwitchOutlined, 
    PlaySquareOutlined, 
    FormOutlined, 
    AppstoreOutlined,
    HomeOutlined,
    HomeFilled
} from '@ant-design/icons';

const Navigation = () => {
    const [selectedMenu, setSelectedMenu] = useState({currentKey: "Deck"});

    const handleClick = e => {
        this.setState({currentKey : e.key});
    }

    return (
        <>
            <Menu style={{width:"100%", fontSize:15, fontFamily:"NotoSansKR-Regular"}} theme="white" mode="horizontal">
                <Menu.Item key="Home" icon={<HomeFilled />}>
                    <a>TAWeb</a>
                </Menu.Item>
                <Menu.Item key="Unity" icon={<LineChartOutlined />}>
                    <Link href="/Unity">
                        <a>유니티</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="Analyze" icon={<LineChartOutlined />}>
                    <Link href="/Deck">
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
            </Menu>
        </>
    );
}

export default Navigation;
