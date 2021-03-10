import React from 'react';
import { 
    Text, 
    View, 
    TouchableOpacity, 
    StyleSheet,
} from 'react-native';

const Task = ( props: { task: String } ) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.text}>
                    This is a task
                </Text>
            </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      height: 80,
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
      fontSize: 18,
      marginVertical: 30,
      marginHorizontal: 30,
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