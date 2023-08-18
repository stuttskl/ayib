import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, TextInput } from "react-native";
import auth from "@react-native-firebase/auth";

export const SignInScreen = () => {
    const [email, onChangeEmail] = useState<string>("");
    const [password, onChangePassword] = useState<string>("");

    const handleSignIn = async () => {
        try {
            const userCredential = await auth().signInWithEmailAndPassword(
                email,
                password
            );
            console.log("User signed in:", userCredential.user.uid);
        } catch (error) {
            console.error("Sign-in error:", error);
        }
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
            <Button title={"Sign In"} onPress={handleSignIn} />
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
