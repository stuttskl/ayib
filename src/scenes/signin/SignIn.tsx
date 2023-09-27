import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { PrimaryButton } from "../../ui-kit/PrimaryButton";
import { IAuthService } from "../../services/AuthService";
import { container } from "../../DIContainer";
import { TYPES } from "../../Types";

export const SignInScreen = () => {
    const authService: IAuthService = container.get<IAuthService>(
        TYPES.IAuthService
    );

    const [email, onChangeEmail] = useState<string>("");
    const [password, onChangePassword] = useState<string>("");

    const handleSignIn = async () => {
        authService
            .logIn(email, password)
            .then(() => {
                console.log("Successfully signed you in!");
            })
            .catch(error => {
                console.error("Error signing you in: ", error);
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
            <PrimaryButton title={"Sign In"} onPress={handleSignIn} />
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
