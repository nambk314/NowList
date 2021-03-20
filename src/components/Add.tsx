import React, { useState } from 'react';
import { 
    Text, 
    View, 
    TouchableOpacity, 
    StyleSheet,
    TextInput,
    Button,
} from 'react-native';
import styles from './styles';
import { FONT_SIZE } from '../constant';


const Add = (props : { onAdd : any }) => {
  const [text, setText] = useState('');
  const handlePress = () => {
    props.onAdd(text);
    setText('');
  }
  return (
      <View style={styles.container}>
        <TextInput
          style={styles.text}
          placeholder="Add new task"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
        <TouchableOpacity
          style={styles.buttonAdd}
          onPress={handlePress}
        >
          <Text style={styles.textAdd}>Add</Text>
        </TouchableOpacity>
      </View>
    
  );
}

export default Add;