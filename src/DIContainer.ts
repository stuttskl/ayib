import { Container } from "inversify";
import IAuthService from "./services/AuthService";
import AuthService from "./services/AuthService";
import { TYPES } from "./Types";
import BookService, { IBookService } from "./services/BookService";
import { BookParser, IBookParser } from "./models/BookParser";
import { IUserParser, UserParser } from "./models/UserParser";
import BooksAPIService, { IBooksAPIService } from "./services/BooksAPIService";

const _container = new Container();

_container
    .bind<IAuthService>(TYPES.IAuthService)
    .to(AuthService)
    .inSingletonScope();
_container
    .bind<IBookService>(TYPES.IBookService)
    .to(BookService)
    .inSingletonScope();
_container
    .bind<IBookParser>(TYPES.IBookParser)
    .to(BookParser)
    .inSingletonScope();
_container
    .bind<IUserParser>(TYPES.IUserParser)
    .to(UserParser)
    .inSingletonScope();
_container
    .bind<IBooksAPIService>(TYPES.IBooksAPIService)
    .to(BooksAPIService)
    .inSingletonScope();

export const container = _container;
