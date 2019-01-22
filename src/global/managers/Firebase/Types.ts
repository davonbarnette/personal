import firebase from 'firebase';

export interface FirestoreAuthType {
    apiKey:string,
    authDomain:string,
    projectId:string,
}

export interface QueryType {
    field:string,
    operator:firebase.firestore.WhereFilterOp,
    search:any,
}

export interface FirestoreRoutingType {
    storeProp:string,
    docId:string,
    onUpdate:(snapshot:firebase.firestore.QuerySnapshot)=>void,
    onError:(error:Error)=>void,
}
