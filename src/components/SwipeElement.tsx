import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import styles from './styles';
import { NowContext } from '../context/ListContext';
import { NOW } from '../constant';

const SwipeElement = (props : { taskIndex: number, type: string }) => {
    const { deleteTask, moveNowToArchive, moveArchiveToNow } = React.useContext(NowContext);
    const swipeableRef= useRef(null);
    
    const RightActions = () => {
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.buttonDelete}
                    onPress={() => {
                        deleteTask(props.taskIndex);
                        closeSwipeable();
                    }}
                >
                    <Text style={styles.textDelete}>Delete</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={styles.buttonArchive}
                    onPress={() => {
                        if (props.type === NOW) {
                            moveNowToArchive(props.taskIndex);
                        } else {
                            moveArchiveToNow(props.taskIndex);
                        }
                        
                        closeSwipeable();
                    }}
                >
                    <Text style={styles.textDelete}>
                        {
                          props.type === NOW ? 'Archive' : 'Now'
                        }
                    </Text>
                </TouchableOpacity>
            </View>
            
            
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