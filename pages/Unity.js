import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";

import { PageHeader, Skeleton, Switch, Card, Avatar } from 'antd';

import AppLayout from "./Components/AppLayout";

const { Meta } = Card;

// export default class Unity extends Component {
//     render() {
//         return (
//             <View>
//                 <Text> textInComponent </Text>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({})

const Unity = () => {
    const [isLoading, setIsLoading] = useState(true);


    return (
        <>
            <AppLayout>
                <PageHeader 
                    className="site-page-header"
                    onBack={() => null}
                    title="Title"
                    subTitle="This is a subtitle" />
                Unitysdf
            </AppLayout>
        </>
    );
}

export default Unity;
