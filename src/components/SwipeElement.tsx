import React from 'react';
import { View, Text } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const SwipeElement = (props : any) => {

    const RightActions = () => {
        return (
            <View>
                <Text>Edit</Text>
            </View>
        )
    }
    return (
        <Swipeable
            renderRightActions = {RightActions}
        >
            {props.children}
        </Swipeable>
    )
}

export default SwipeElement;