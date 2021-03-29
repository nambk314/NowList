import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import styles from './styles';
import { NowContext } from '../context/ListContext';

const SwipeElement = (props : { taskIndex: number }) => {
    const { deleteTask } = React.useContext(NowContext);
    const swipeableRef= useRef(null);
    
    const RightActions = () => {
        return (
            <TouchableOpacity 
                style={styles.buttonDelete}
                onPress={() => {
                    deleteTask(props.taskIndex);
                    closeSwipeable();
                }}
            >
                <Text style={styles.textDelete}>Delete</Text>
            </TouchableOpacity>
        )
    }
    const closeSwipeable = () => {
        swipeableRef.current.close();
    }
    return (
        <Swipeable
            ref={swipeableRef}
            renderRightActions = {RightActions}
        >
            {props.children}
        </Swipeable>
    )
}

export default SwipeElement;