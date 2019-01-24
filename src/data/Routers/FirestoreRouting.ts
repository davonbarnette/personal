import WorkConsumer from "../Work/Consumer";
import {FirestoreRoutingType} from "../../global/managers/Firebase/Types";
import AppConsumer from "../App/Consumer";

export const FIRESTORE_ROUTING:FirestoreRoutingType[] = [

    { storeProp:'FS_work', docId:'projects', onUpdate: WorkConsumer.onRealtimeUpdate, onError: WorkConsumer.onReceiveFirestoreError, },
    { storeProp:'FS_assetLocations', docId:'asset_locations', onUpdate: AppConsumer.onWorkLocationsUpdate, onError: AppConsumer.onReceiveFirestoreError, }

];