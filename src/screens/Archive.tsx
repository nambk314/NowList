import * as React from 'react';
import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Add from '../components/Add';
import Task from '../components/Task';
import { NowContext } from '../context/ListContext';


function Archive() {

    const { state, addTask, editTask } = React.useContext(NowContext);

    const taskLists = state.archive.map((task, index)=> {
        return (<Task key={index} index={index} task={task} onEdit={editTask}></Task>)
    })
    return (
        <View style={styles.container}>
            {taskLists}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        flexDirection: 'column'
    }
});

export default Archive;