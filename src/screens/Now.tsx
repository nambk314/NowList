import * as React from 'react';
import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Add from '../components/Add';
import Task from '../components/Task';
import { NowContext } from '../context/ListContext';


function Now() {

    const { state, addTask, editTask } = React.useContext(NowContext);

    const taskLists = state.now.map((task, index)=> {
        console.log(`test list ${task}`);
        return (<Task key={index} index={index} task={task} onEdit={editTask}></Task>)
    })
    console.log(`test state ${JSON.stringify(state)}`);
    return (
        <View style={styles.container}>
            <Add onAdd={addTask}></Add>
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

export default Now;