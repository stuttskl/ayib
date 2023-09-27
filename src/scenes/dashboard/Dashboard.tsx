import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
} from "react-native";
import { IBookService } from "../../services/BookService";
import { container } from "../../DIContainer";
import { TYPES } from "../../Types";
import Book from "../../models/Book";

type ItemProps = {
    item: Book;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
    <TouchableOpacity
        onPress={onPress}
        style={[styles.item, { backgroundColor }]}>
        <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
        <Text style={[styles.title, { color: textColor }]}>{item.author}</Text>
    </TouchableOpacity>
);

const DashboardScreen = () => {
    const bookService: IBookService = container.get<IBookService>(
        TYPES.IBookService
    );

    useEffect(() => {
        bookService.getBooks().then(books => {
            setBooks(books);
        });
    }, []);

    const [selectedId, setSelectedId] = useState<string>();
    const [books, setBooks] = useState<Book[]>([]);

    const renderItem = ({ item }: { item: Book }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? "white" : "black";

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={books}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default DashboardScreen;
