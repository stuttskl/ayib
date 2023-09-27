import { injectable } from "inversify";
import firestore from "@react-native-firebase/firestore";
import Book from "../models/Book";
import { BookParser } from "../models/BookParser";

export interface IBookService {
    addBook(title: string, author: string): Promise<void>;
    getBooks(): Promise<Book[]>;
}

@injectable()
export default class BookService implements IBookService {
    private db = firestore();
    private booksCollection = "books";

    addBook(title: string, author: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.db
                .collection(this.booksCollection)
                .add({
                    title: title,
                    author: author,
                })
                .then(() => {
                    console.log("Book added!");
                    resolve();
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    getBooks(): Promise<Book[]> {
        return new Promise((resolve, reject) => {
            this.db
                .collection(this.booksCollection)
                .get()
                .then(querySnapshot => {
                    // TODO: add better data / err handling
                    let books: Book[] = [];
                    const parser = new BookParser();

                    querySnapshot.forEach(documentSnapshot => {
                        const book = parser.parse(
                            documentSnapshot.id,
                            documentSnapshot.data()
                        );
                        books.push(book);
                    });
                    resolve(books);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}
