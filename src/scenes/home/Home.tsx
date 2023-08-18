import * as React from "react";
import { Button, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../foundation/types";
import auth from "@react-native-firebase/auth";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export const HomeScreen = ({ navigation }: Props) => {
    const handleSignOut = () => {
        auth()
            .signOut()
            .then(() => console.log("User signed out!"));
    };

    return (
        <View>
            <Text>A Year In Books</Text>
            <Button
                title="Go to dashboard"
                onPress={() => navigation.navigate("Dashboard")}
            />
            <Button
                title="Go to signUp"
                onPress={() => navigation.navigate("SignUp")}
            />
            <Button title="Sign me out" onPress={handleSignOut} />
        </View>
    );
};
