import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import User from "../models/User";
import { injectable } from "inversify";

export interface IAuthService {
    signUp(email: string, password: string): Promise<User>;
    logIn(
        email: string,
        password: string
    ): Promise<FirebaseAuthTypes.UserCredential>;
    logOut(): Promise<void>;
    getCurrentUser(): FirebaseAuthTypes.User | null;
}

@injectable()
export default class AuthService implements IAuthService {
    private auth: FirebaseAuthTypes.Module;
    private db = firestore();

    constructor() {
        this.auth = auth();
    }

    async signUp(email: string, password: string): Promise<User> {
        try {
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
                    console.log("User added!");
                })
                .catch(error => {
                    throw new Error(error.message);
                });

            console.log("Document created with ID:", user.uid);
            return user;
        } catch (error) {
            console.error("Error creating user:", error);
            throw error; // Rethrow the error to handle it where the signUp function is called
        }
    }

    async logIn(
        email: string,
        password: string
    ): Promise<FirebaseAuthTypes.UserCredential> {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    async logOut(): Promise<void> {
        return this.auth.signOut();
    }

    // Get the current user
    getCurrentUser(): FirebaseAuthTypes.User | null {
        return this.auth.currentUser;
    }
}
