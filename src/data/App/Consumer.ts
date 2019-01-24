import firebase from "firebase";
import AppStore from "./Store";

export default class AppConsumer {

    static onWorkLocationsUpdate(querySnapshot:firebase.firestore.QuerySnapshot){
        if (querySnapshot.empty) return null;
        let docs = querySnapshot.docs.map(doc => doc.data());

        AppStore.assetLocations.setMultiple(docs as any);
    }

    static onReceiveFirestoreError(error:Error){

    }

}