import { injectable } from "inversify";
import Book from "../models/Book";

export interface IBooksAPIService {
    search(): Promise<Book[]>;
    searchByTitle(title: string): Promise<Book[]>;
}

@injectable()
export default class BooksAPIService implements IBooksAPIService {
    private baseUrl = `https://www.googleapis.com/books/v1/volumes?`;
    private url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:"Haruki+Murakami"&key=${process.env.GOOGLE_BOOKS_API_KEY}`;

    search(): Promise<Book[]> {
        return new Promise((resolve, reject) => {
            fetch(this.url)
                .then(response => {
                    return response.json();
                })
                .then(result => {
                    if (!result) {
                        throw new Error("no results");
                    }
                    let results: Book[] = [];
                    result["items"].forEach((res: any) => {
                        // todo: dont grab so much stuff from here
                        let book = new Book(
                            res.id,
                            res.volumeInfo.title,
                            res.volumeInfo.authors,
                            res.volumeInfo.imageLinks.smallThumbnail
                        );
                        results.push(book);
                    });
                    resolve(results);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    searchByTitle(title: string): Promise<Book[]> {
        return new Promise((resolve, reject) => {
            let url =
                this.baseUrl +
                `q=intitle:` +
                title +
                `&key=` +
                `${process.env.GOOGLE_BOOKS_API_KEY}`;
            console.log(url);
            fetch(url)
                .then(response => {
                    return response.json();
                })
                .then(result => {
                    if (!result) {
                        throw new Error("no results");
                    }
                    let results: Book[] = [];
                    result["items"].forEach((res: any) => {
                        let book = new Book(
                            res.id,
                            res.volumeInfo.title,
                            res.volumeInfo.authors,
                            res.volumeInfo.imageLinks.smallThumbnail
                        );
                        results.push(book);
                    });
                    resolve(results);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}
