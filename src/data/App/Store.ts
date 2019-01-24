import {decorate, observable} from "mobx";
import {BaseMapManager} from "../../global/managers/BaseMapManager";
import {WorkType} from "../Work/Types";
import FirestoreManager from "../../global/managers/Firebase/FirestoreManager";
import {FirestoreAuthType} from "../../global/managers/Firebase/Types";
import FirestoreDataManager from "../../global/managers/Firebase/FirestoreDataManager";
import {FIRESTORE_ROUTING} from "../Routers/FirestoreRouting";
import {AssetLocationType} from "./Types";

class AppStoreClass {

    /* Data Types */
	work: BaseMapManager<string, WorkType> = new BaseMapManager("id");
	FS_work?: FirestoreDataManager<WorkType>;

	assetLocations:BaseMapManager<string, AssetLocationType> = new BaseMapManager('id');
	FS_assetLocations?: FirestoreDataManager<AssetLocationType>;

	firestore: FirestoreManager;
    drawer?:    string;
    modal?:     string;

    constructor(){
        let firestoreAuth:FirestoreAuthType = {
            apiKey:process.env.REACT_APP_FIREBASE_API_KEY!,
            authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN!,
            projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID!,
        };
        this.firestore = new FirestoreManager(firestoreAuth);
        this.registerFirestoreListeners();

    }

    initialize(){
        //Delete this when you actually initialize, this is just for testing:ExampleActions.createOne('Testing');
    }

    registerFirestoreListeners(){
       FIRESTORE_ROUTING.forEach(route => {
           const {storeProp, docId, onError, onUpdate} = route;
           (this as any)[storeProp] = new FirestoreDataManager(this.firestore.db, docId, onUpdate, onError);
       })
    }

}

decorate(AppStoreClass,{
    /* Data Decorators */
	work:       observable,

    drawer:     observable,
    modal:      observable,
});

const AppStore = new AppStoreClass();
export default AppStore;