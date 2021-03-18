import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Add from '../components/Add';
import Task from '../components/Task';


function Now() {
  return (
        <View style={styles.container}>
            <Add></Add>
            <Task task="Test Task"></Task>
            <Task task="Test Task 2"></Task>
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