import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";

import { Skeleton, Switch, Card, Avatar } from 'antd';

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
                Unitysdf
            </AppLayout>
        </>
    );
}

export default Unity;
