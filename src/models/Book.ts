export default class Book {
    id: string;
    title: string;
    author: string;
    imgUrl?: string;

    constructor(id: string, title: string, author: string, imgUrl: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.imgUrl = imgUrl;
    }
}
