import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home_page from './sceen/Home_page';
import Information from './sceen/Information';
import Done from './sceen/Done';
const Stack = createNativeStackNavigator();
const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Home_page" screenOptions = {{headerShown: false}}>
                <Stack.Screen name='Home_page' component={Home_page}></Stack.Screen>
                <Stack.Screen name='Information' component={Information}></Stack.Screen>
                <Stack.Screen name='Done' component={Done}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
