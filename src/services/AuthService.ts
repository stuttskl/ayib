import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import User from "../models/User";
import { injectable } from "inversify";

export interface IAuthService {
    signUp(email: string, password: string): Promise<User>;
    logIn(email: string, password: string): Promise<void>;
    logOut(): Promise<void>;
}

@injectable()
export default class AuthService implements IAuthService {
    private auth: FirebaseAuthTypes.Module;
    private db = firestore();

    constructor() {
        this.auth = auth();
    }

    async signUp(email: string, password: string): Promise<User> {
        return new Promise(async (resolve, reject) => {
            const userCredential =
                await this.auth.createUserWithEmailAndPassword(email, password);
            const user = new User(
                userCredential.user.uid,
                userCredential.user.email!,
                []
            );

            this.db
                .collection("users")
                .doc(user.uid)
                .set({
                    email: user.email,
                    library: [],
                })
                .then(() => {
                    resolve(user);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    logIn(email: string, password: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.auth
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    resolve();
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    logOut(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.auth
                .signOut()
                .then(() => {
                    resolve();
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}
