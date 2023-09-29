import React from "react";
import {
    Text,
    Button,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
} from "react-native";

export interface BookProps {
    id: string;
    title: string;
    authors: string[];
    description: string;
    imgUrl: string;
    onPress: () => void;
}

export const Book: React.FC<BookProps> = props => {
    const { id, title, authors, imgUrl, description, onPress } = props;
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} key={id}>
            <Image
                style={styles.logo}
                source={{
                    uri: "https" + imgUrl.substr(4), // todo: fix this
                }}
            />
            <Text style={styles.buttonText}>{title}</Text>
            <Text style={styles.buttonText}>{authors}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#F1D6AB",
        borderRadius: 5,
        padding: 15,
        margin: 15,
    },
    buttonText: {
        color: "black",
        textAlign: "center",
        fontSize: 16,
    },
    logo: {
        width: 80,
        height: 100,
    },
});
