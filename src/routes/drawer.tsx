// import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import NowStack from './NowStack';
import ArchiveStack from './ArchiveStack';
import { ListContextProvider } from '../context/ListContext';

const RootDrawerNavigator = () => {

    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <ListContextProvider>
                <Drawer.Navigator initialRouteName="Now">
                    <Drawer.Screen name="Now" component={NowStack} />
                    <Drawer.Screen name="Archive" component={ArchiveStack} />
                </Drawer.Navigator>
            </ListContextProvider>
            
        </NavigationContainer>
    )
}

export default RootDrawerNavigator;