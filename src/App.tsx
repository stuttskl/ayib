import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import auth from "@react-native-firebase/auth";
import { View } from "react-native";
import { RootStackParamList } from "./foundation/types";
import { SignInScreen } from "./scenes/signin/SignIn";
import { SignUpScreen } from "./scenes/signup/SignUp";
import { HomeScreen } from "./scenes/home/Home";
import DashboardScreen from "./scenes/dashboard/Dashboard";
import { ContainerProvider } from "./ContainerProvider";
import { container } from "./DIContainer";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const MyStack = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "ayib" }}
            />
            <RootStack.Screen name="Dashboard" component={DashboardScreen} />
            <RootStack.Screen name="SignUp" component={SignUpScreen} />
        </RootStack.Navigator>
    );
};

const App = () => {
    const [initializing, setInitializing] = useState<Boolean>(true);
    const [user, setUser] = useState();

    const onAuthStateChanged = (user: any) => {
        setUser(user);
        if (initializing) setInitializing(false);
    };

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if (initializing) return null;
    if (!user) {
        return (
            <View>
                <SignUpScreen />
                <SignInScreen />
            </View>
        );
    }

    return (
        <ContainerProvider container={container}>
            <NavigationContainer>
                <MyStack />
            </NavigationContainer>
        </ContainerProvider>
    );
};

export default App;
