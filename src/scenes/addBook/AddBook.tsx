import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import { PrimaryButton } from "../../ui-kit/PrimaryButton";
import { container } from "../../DIContainer";
import { TYPES } from "../../Types";
import SearchResultsScreen from "./SearchResults";
import { IBooksAPIService } from "../../services/BooksAPIService";
import Book from "../../models/Book";
// import { GOOGLE_BOOKS_API_KEY } from "@babel/preset-env";

export const AddBookScreen = () => {
    const booksAPIService: IBooksAPIService = container.get<IBooksAPIService>(
        TYPES.IBooksAPIService
    );
    const [titleQuery, setTitleQuery] = useState<string>("");
    const [searchCompleted, setSearchCompled] = useState<boolean>(false);
    const [books, setBooks] = useState<Book[]>([]);
    const [primaryButtonDisabled, setPrimaryButtonDisabled] =
        useState<boolean>(true);

    const handleSearchPress = () => {
        booksAPIService.searchByTitle(titleQuery).then(result => {
            setBooks(result);
            setSearchCompled(true);
        });
    };

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={setTitleQuery}
                value={titleQuery}
                placeholder="Search By Title"
                autoCapitalize="none"
            />
            <PrimaryButton
                title={"Search"}
                onPress={handleSearchPress}
                disabled={primaryButtonDisabled}
            />
            {searchCompleted && <SearchResultsScreen results={books} />}
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
