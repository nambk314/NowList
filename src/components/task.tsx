import React, { useState } from 'react';
import { 
    Text, 
    View, 
    TouchableOpacity, 
    TextInput,
} from 'react-native';
import styles from './styles';

const Task = ( props: { index: number, task: string, onEdit: any } ) => {
    const [task, setTask] = useState(props.task);
    const [done, setDone] = useState(false);
    const [edit, setEdit] = useState(false);
    const [lastTap, setLastTap] = useState(0);
    const [firstTap, setFirstTap] = useState(false);

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
        if ((now - lastTap) < DELAY) {
            setDone(true);
        } else {
           // if (!edit) setEdit(true);
        }
        setLastTap(now);
    }

    const uneditable = () => {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={handleTaps}>
                        <Text style={textStyle()}>
                            {task}
                        </Text>
                </TouchableOpacity>
            </View>
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