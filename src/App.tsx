import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './scenes/home/Home';
import ProfileScreen from './scenes/profile/Profile';
import DashboardScreen from './scenes/dashboard/Dashboard';

type RootStackParamList = {
    Home: undefined;
    Profile: undefined;
    Dashboard: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParamList>();

const MyStack = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="Home"
                component={HomeScreen}
                options={{title: 'ayib'}}
            />
            <RootStack.Screen name="Profile" component={ProfileScreen} />
            <RootStack.Screen name="Dashboard" component={DashboardScreen} />
        </RootStack.Navigator>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
};

export default App;
