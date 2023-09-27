import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../foundation/types";
import auth from "@react-native-firebase/auth";
import { PrimaryButton } from "../../ui-kit/PrimaryButton";

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

            <PrimaryButton
                title={"Add a book"}
                onPress={() => navigation.navigate("AddBook")}
            />
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
