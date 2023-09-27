import Book from "./Book";

export default class User {
    uid: string;
    email: string;
    library: Book[];

    constructor(uid: string, email: string, library: Book[]) {
        this.uid = uid;
        this.email = email;
        this.library = library;
    }
}
