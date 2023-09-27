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
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = props => {
    const { title, onPress } = props;
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
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
    buttonText: {
        color: "black",
        textAlign: "center",
        fontSize: 16,
    },
});
