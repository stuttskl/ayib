import Book from "./Book";
import { injectable } from "inversify";

export interface IBookParser {
    parse(documentId: string, data: { [key: string]: any }): Book;
}

@injectable()
export class BookParser implements IBookParser {
    parse(documentId: string, data: { [key: string]: any }): Book {
        return new Book(data.uid, data.title, data.author);
    }
}
