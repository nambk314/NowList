import React, { useEffect, useState } from 'react';
import { 
    Text, 
    View, 
    TouchableOpacity, 
    TextInput,
} from 'react-native';
import SwipeElement from './SwipeElement';
import styles from './styles';
import { NOW } from '../constant';

const Task = ( props: { index: number, task: any, onEdit: any } ) => {
    const [task, setTask] = useState(props.task.content);
    const [done, setDone] = useState(props.task.done);
    const [edit, setEdit] = useState(false);
    //Handle double tap
    const [lastTap, setLastTap] = useState(0);
    const [firstTap, setFirstTap] = useState(true);
    const [timer, setTimer] = useState(undefined);

    useEffect(() => {
        setTask(props.task.content);
        setDone(props.task.done);
    },[props.task])

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
                props.onEdit(props.index, {
                    content: task,
                    done: true,
                })
            } 
        }
        setLastTap(now);
    }

    const uneditable = () => {
        console.log(`test task: ${task}`)
        return (
            <SwipeElement taskIndex={props.index} type={NOW}>
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
        const taskObj = {
            content: task, 
            done,
        }
        props.onEdit(props.index, taskObj);
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