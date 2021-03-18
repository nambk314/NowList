import React, { useState } from 'react';
import { 
    Text, 
    View, 
    TouchableOpacity, 
} from 'react-native';
import styles from './styles';

const Task = ( props: { task: String } ) => {
    const [task, setTask] = useState(props.task);
    return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Text style={styles.text}>
                        {task}
                    </Text>
                </TouchableOpacity>
            </View>
    )
}
export default Task;