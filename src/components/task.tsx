import React, { useState } from 'react';
import { 
    Text, 
    View, 
    TouchableOpacity, 
    StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FONT_SIZE } from '../constant';

const Task = ( props: { task: String } ) => {
    const [task, setTask] = useState('');
    return (
        <View style={ {flex: 1} }>
            <View style={styles.container}>
                <TouchableOpacity>
                    <Text style={styles.text}>
                        This is a task
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    container: {
      height: 4*FONT_SIZE,
      borderBottomColor: '#bbb',
      borderStyle: 'solid',
      borderBottomWidth: StyleSheet.hairlineWidth,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      //backgroundColor: 'red',
    },
    text: {
      flex: 5,
      fontWeight: '400',
      fontSize: FONT_SIZE,
      marginVertical: 1.5*FONT_SIZE,
      marginHorizontal: 1.5*FONT_SIZE,
      width: 'auto',
      alignSelf: 'center',
    },
    circle: {
      width: 30,
      height: 30,
      borderRadius: 15,
      borderColor: 'blue',
      borderWidth: 2,
      marginRight: 20,
      marginLeft: 20,
    },
  });
export default Task;