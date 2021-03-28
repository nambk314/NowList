import React, { useState } from 'react';
import { 
    Text, 
    View, 
    TouchableOpacity, 
    TextInput,
} from 'react-native';
import SwipeElement from './SwipeElement';
import styles from './styles';

const Task = ( props: { index: number, task: string, onEdit: any } ) => {
    const [task, setTask] = useState(props.task);
    const [done, setDone] = useState(false);
    const [edit, setEdit] = useState(false);
    //Handle double tap
    const [lastTap, setLastTap] = useState(0);
    const [firstTap, setFirstTap] = useState(true);
    const [timer, setTimer] = useState(undefined);

    //Handle style for when the elements are done
    const textStyle = () => {
        const status : {}[] = [styles.text];
        if (done) {
            status.push(
                {
                    textDecorationLine: "line-through",
                }
            )
        }
        return status;
    };

    const handleTaps = () => {
        const now = Date.now();
        const DELAY = 300;
        //Currently doesn't work together yet for dCLick and sClick
        setFirstTap(!firstTap);
        //Only editable if the task is not done
        if (firstTap && !done) {
            setTimer(setTimeout(() => {
                setEdit(true);
                setFirstTap(true);
            }, DELAY));
        } else {
            if ((now - lastTap) < DELAY) {
                timer && clearTimeout(timer);
                setDone(true);
            } 
        }
        setLastTap(now);
    }

    const uneditable = () => {
        return (
            <SwipeElement>
                <View style={styles.container}>
                    <TouchableOpacity onPress={handleTaps}>
                            <Text style={textStyle()}>
                                {task}
                            </Text>
                    </TouchableOpacity>
                </View>
            </SwipeElement>
            
        )
    }
    // Set edit to fasle then send edit action
    const handleEditPress = () => {
        setEdit(false);
        console.log(`test: ${props.index} and ${task}`)
        props.onEdit(props.index, task);
    }
    const editable = () => {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.text}
                    placeholder="Add new task"
                    onChangeText={task => setTask(task)}
                    defaultValue={task}
                />
                <TouchableOpacity
                    style={styles.buttonAdd}
                    onPress={handleEditPress}
                >
                <Text style={styles.textAdd}>Edit</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View>
            {edit ? editable() : uneditable()} 
        </View>
         
    )
}
export default Task;