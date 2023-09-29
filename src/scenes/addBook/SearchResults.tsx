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
import { Book as BookItem, BookProps } from "../../ui-kit/Book";

const Item = ({
    id,
    title,
    authors,
    description,
    imgUrl,
    onPress,
}: BookProps) => (
    <BookItem
        title={title}
        authors={authors}
        description={description}
        onPress={onPress}
        imgUrl={imgUrl}
        id={id}
    />
);

interface SearchResultsScreenProps {
    results: Book[];
}

const SearchResultsScreen = (props: SearchResultsScreenProps) => {
    const [selectedId, setSelectedId] = useState<string>();

    const renderListItem = ({ item }: { item: BookProps }) => {
        return (
            <Item
                id={item.id}
                title={item.title}
                authors={item.authors}
                description={item.description}
                imgUrl={item.imgUrl}
                onPress={() => setSelectedId(item.id)}
            />
        );
    };

    return (
        <>
            <SafeAreaView>
                <FlatList
                    data={props.results as []} // todo: fix
                    renderItem={renderListItem}
                    keyExtractor={item => item.id}
                    extraData={selectedId}
                />
            </SafeAreaView>
        </>
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

export default SearchResultsScreen;
