import {QueryType} from "./Types";
import firebase, {Unsubscribe} from 'firebase';
import Logs from "../Logs";

export default class FirestoreCollectionManager<T> {

    collectionId:string;
    collection:firebase.firestore.CollectionReference;
    unsubscribe?:Unsubscribe;

    constructor(db:firebase.firestore.Firestore, collectionId:string, onUpdate:(snapshot:firebase.firestore.QuerySnapshot)=>void, onError:(error:Error)=>void){
        this.collection = db.collection(collectionId);
        this.collectionId = collectionId;
        this.unsubscribe = this.subscribeToListener(onUpdate, onError);
    }

    async query(queries:QueryType[]):Promise<T>{
        let collection:any = this.collection;
        queries.forEach(query => {
            const {field, operator, search} = query;
            collection = collection.where(field, operator, search);
        });
        return await collection.get();
    }

    private subscribeToListener(onUpdate:(snapshot:firebase.firestore.QuerySnapshot)=>void, onError:(error:Error)=>void){
        let onUpdateInternal = (snapshot:firebase.firestore.QuerySnapshot)=> {
            Logs.reaction('Firestore snapshot', this.collectionId, snapshot);
            onUpdate(snapshot);
        };
        return this.collection.onSnapshot(onUpdateInternal, onError);
    }

    unsubscribeFromListener(){
        if (this.unsubscribe) this.unsubscribe();
    }

}