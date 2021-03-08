import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';

  import {
      SafeAreaView,
  } from 'react-native-safe-area-context'

  import {
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
import { Header, LockButton, Task } from '../components/Index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Now from './Now'
import Archive from './Archive'
import NavigationDrawerStructure from '../components/NavigationDrawer'
// To improve Android application speed: https://reactnative.dev/docs/hermes
// declare const global: {HermesInternal: null | {}};
const Stack = createStackNavigator();
const ConfigureOption = (name:string) => ({
    title: name,
    headerTintColor: '#fff',
    headerStyle: {
        backgroundColor: '#D7BE69',
    },
})

const MainScreen = () => {
    return (
        <>
        <StatusBar barStyle="light-content" />
            <NavigationContainer>
                <Stack.Navigator>
                <Stack.Screen
                    name="Now"
                    component={Now}
                    options={ConfigureOption('Now')}
                />
                <Stack.Screen
                    name="Archive"
                    component={Archive}
                    options={ConfigureOption('Archive')}
                />
                </Stack.Navigator>
            </NavigationContainer>
    </>
    )
}

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });
  
export default MainScreen;