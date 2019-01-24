import AppStore from "./Store";

export default class AppActions {

    static openFixedComponent(type:string, id:string){
        (AppStore as any)[type] = id;
    }

    static closeFixedComponent(type:string){
        (AppStore as any)[type] = undefined;
    }

    static downloadResume(){
        let downloadLink = document.createElement("a");

        let resumeLocation = AppStore.assetLocations.getById('resume');
        if (resumeLocation) {
            downloadLink.href = resumeLocation.url;
            downloadLink.download = 'davon_barnette_resume_2019.pdf';

            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        }
    }

    static redirect(url:string, blank = true) {
        let link = document.createElement("a");
        link.href = url;
        if (blank) link.target = '_blank';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

}