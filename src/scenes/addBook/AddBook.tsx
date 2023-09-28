import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import { PrimaryButton } from "../../ui-kit/PrimaryButton";
import { container } from "../../DIContainer";
import { TYPES } from "../../Types";
import { IBookService } from "../../services/BookService";

export const AddBookScreen = () => {
    const bookService: IBookService = container.get<IBookService>(
        TYPES.IBookService
    );
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");

    const handleAddBookPress = () => {
        bookService.addBook(title, author);
    };

    return (
        <SafeAreaView>
            <Text>Title</Text>
            <TextInput
                style={styles.input}
                onChangeText={setTitle}
                value={title}
                placeholder="title"
                autoCapitalize="none"
            />
            <Text>Author</Text>
            <TextInput
                style={styles.input}
                onChangeText={setAuthor}
                value={author}
                placeholder="author"
                autoCapitalize="none"
            />
            <PrimaryButton title={"Add Book"} onPress={handleAddBookPress} />
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
