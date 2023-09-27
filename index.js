/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "../ayib/src/App";
import { name as appName } from "./app.json";
import { firebase } from "@react-native-firebase/app";
import "reflect-metadata"; // this line solved the issue w/ inversify

const firebaseConfig = {
    apiKey: "AIzaSyAKX_5Mhfe5JoXI_VqLqP6sOyK-T0jA51k",
    authDomain: "ayib-7d6a9.firebaseapp.com",
    projectId: "ayib-7d6a9",
    storageBucket: "ayib-7d6a9.appspot.com",
    messagingSenderId: "831534212242",
    appId: "1:831534212242:web:538c2560b83b71e019724b",
    measurementId: "G-N8983J042K",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => App);
