import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Archive from "../screens/Archive";
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../components/Header';
import {HEADER_COLOR} from '../constant';

const Stack = createStackNavigator();
const ArchiveStack = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions = {{
            headerStyle: {
                backgroundColor: HEADER_COLOR,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}>
        <Stack.Screen name="Archive" component={Archive} options={{
            title: "Archive",
            headerLeft: () => (
                <Icon.Button 
                    name="ios-menu" 
                    size={25}
                    backgroundColor = {HEADER_COLOR}
                    onPress={() => {navigation.openDrawer()}}>
                </Icon.Button>
            ),
        }} />
        </Stack.Navigator>
    )
}
export default ArchiveStack;