import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Node } from "react-native-reanimated";
import Icon from 'react-native-vector-icons/Ionicons'
import Now from "../screens/Now";
import Header from '../components/Header';
import { HEADER_COLOR } from '../constant';

const Stack = createStackNavigator();
const NowStack = ({ navigation }) => {
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
            <Stack.Screen name="Now" component={Now} options={{
                title: "Now",
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
export default NowStack;