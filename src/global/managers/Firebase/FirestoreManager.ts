import firebase from 'firebase';
import {FirestoreAuthType} from "./Types";

export default class FirestoreManager {

    db:firebase.firestore.Firestore;

    constructor(auth:FirestoreAuthType){
        firebase.initializeApp(auth);
        this.db = firebase.firestore();
    }
}