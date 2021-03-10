import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Task from '../components/Task';


function Now() {
  return (
        <View >
            <Task task="Test Task"></Task>
        </View>
  );
}

const style = StyleSheet.create({
    style: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
});

export default Now;