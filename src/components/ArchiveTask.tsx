import React, { useEffect, useState } from 'react';
import { 
    Text, 
    View, 
    TouchableOpacity, 
    TextInput,
} from 'react-native';
import SwipeElement from './SwipeElement';
import styles from './styles';
import { ARCHIVE } from '../constant';

const ArchiveTask = ( props: { index: number, task: any, onEdit: any } ) => {
    const [task, setTask] = useState(props.task.content);

    useEffect(() => {
        setTask(props.task.content);
    },[props.task])

    // const uneditable = () => {
    //     console.log(`test task: ${task}`)
    //     return (
    //         <SwipeElement taskIndex={props.index} type={ARCHIVE}>
    //             <View style={styles.container}>
    //                 <TouchableOpacity onPress={() => {}}>
    //                         <Text>
    //                             {task}
    //                         </Text>
    //                 </TouchableOpacity>
    //             </View>
    //         </SwipeElement>
            
    //     )
    // }
    // // Set edit to fasle then send edit action
    // const handleEditPress = () => {
    //     setEdit(false);
    //     console.log(`test: ${props.index} and ${task}`)
    //     props.onEdit(props.index, task);
    // }
    // const editable = () => {
    //     return (
    //         <View style={styles.container}>
    //             <TextInput
    //                 style={styles.text}
    //                 placeholder="Add new task"
    //                 onChangeText={task => setTask(task)}
    //                 defaultValue={task}
    //             />
    //             <TouchableOpacity
    //                 style={styles.buttonAdd}
    //                 onPress={handleEditPress}
    //             >
    //             <Text style={styles.textAdd}>Edit</Text>
    //             </TouchableOpacity>
    //         </View>
    //     )
    // }

    return (
        <View>
            <SwipeElement taskIndex={props.index} type={ARCHIVE}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => {}}>
                            <Text style={styles.text}>
                                {task}
                            </Text>
                    </TouchableOpacity>
                </View>
            </SwipeElement>
        </View>
         
    )
}
export default ArchiveTask;