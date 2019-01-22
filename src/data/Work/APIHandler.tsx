import axios from 'axios'

export default class WorkAPI {

    static async getAllWork(){
        let url = WorkAPIRoutes.workBase;
        await axios.get(url);
    }

    static async getWork(workId:string){
        let url = WorkAPIRoutes.getWorkById(workId);
        await axios.get(url);
    }

    static async workOnUploadProgress(workId:string, data:any, onUploadProgress?:(progressEvent:any) => void){
        let url = WorkAPIRoutes.getWorkById(workId);
        await axios({ method:'post', url, data, onUploadProgress});
    }

}

export class WorkAPIRoutes {

    static base = '/api/work';

    static get workBase(){
        return `${WorkAPIRoutes.base}`
    }

    static getWorkById(workId:string){
        return `${WorkAPIRoutes.workBase}/${workId}`
    }

}