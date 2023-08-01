import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../src/components/HomeScreen';
import ProfileScreen from '../src/components/ProfileScreen';

type RootStackParamList = {
  Home: undefined;
  Profile: {name: string; route: string};
  Feed: {sort: 'latest' | 'top'} | undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const MyStack = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Welcome'}}
      />
      <RootStack.Screen name="Profile" component={ProfileScreen} />
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
