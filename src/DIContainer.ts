import { Container } from "inversify";
import IAuthService from "./services/AuthService";
import AuthService from "./services/AuthService";
import { TYPES } from "./Types";

const _container = new Container();

_container
    .bind<IAuthService>(TYPES.IAuthService)
    .to(AuthService)
    .inSingletonScope();

export const container = _container;
