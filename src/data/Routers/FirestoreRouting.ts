import WorkConsumer from "../Work/Consumer";
import {FirestoreRoutingType} from "../../global/managers/Firebase/Types";

export const FIRESTORE_ROUTING:FirestoreRoutingType[] = [

    { storeProp:'workFS', docId:'projects', onUpdate: WorkConsumer.onRealtimeUpdate, onError: WorkConsumer.onReceiveFirestoreError, }

];