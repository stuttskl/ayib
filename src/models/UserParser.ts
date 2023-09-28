import User from "./User";
import { injectable } from "inversify";

export interface IUserParser {
    parse(documentId: string, data: { [key: string]: any }): User;
}

@injectable()
export class UserParser implements IUserParser {
    parse(documentId: string, data: { [key: string]: any }): User {
        return new User(data.uid, data.email, data.library);
    }
}
