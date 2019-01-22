import {CreateWorkResponseArgs, UpdateWorkResponseArgs, DeleteWorkResponseArgs, QueryWorkResponseArgs} from "./Types";
import firebase from 'firebase';
import AppStore from "../App/Store";

export default class WorkConsumer {

    static onCreateOne(data:CreateWorkResponseArgs){

    }

    static onUpdateOne(data:UpdateWorkResponseArgs){

    }

    static onDeleteOne(data:DeleteWorkResponseArgs){

    }

    static onQueryOne(data:QueryWorkResponseArgs){

    }

    static onRealtimeUpdate(querySnapshot:firebase.firestore.QuerySnapshot){
        if (querySnapshot.empty) return null;
        let docs = querySnapshot.docs.map(doc => doc.data());

        AppStore.work.setMultiple(docs as any);
    }
    static onReceiveFirestoreError(error:Error){

    }

}