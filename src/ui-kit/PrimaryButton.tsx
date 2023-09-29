import React from "react";
import {
    Text,
    Button,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";

interface PrimaryButtonProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = props => {
    const { title, onPress, disabled } = props;
    return (
        <TouchableOpacity
            style={disabled ? styles.buttonDisabled : styles.button}
            onPress={onPress}
            disabled={disabled}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#E3B04B",
        borderRadius: 10,
        padding: 15,
        margin: 15,
    },
    buttonDisabled: {
        backgroundColor: "#b0afac",
        borderRadius: 10,
        padding: 15,
        margin: 15,
    },
    buttonText: {
        color: "black",
        textAlign: "center",
        fontSize: 16,
    },
});
