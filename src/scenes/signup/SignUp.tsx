import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, TextInput } from "react-native";
import auth from "@react-native-firebase/auth";

export const SignUpScreen = () => {
    const [email, onChangeEmail] = useState<string>("");
    const [password, onChangePassword] = useState<string>("");

    const createAccount = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log("User account created & signed in!");
            })
            .catch(error => {
                if (error.code === "auth/email-already-in-use") {
                    console.log("That email address is already in use!");
                }

                if (error.code === "auth/invalid-email") {
                    console.log("That email address is invalid!");
                }

                console.error(error);
            });
    };

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="email"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                secureTextEntry={true}
                placeholder="password"
                autoCapitalize="none"
            />
            <Button title={"Sign Up"} onPress={createAccount} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
