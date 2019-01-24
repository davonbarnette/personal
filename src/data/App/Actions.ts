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
        downloadLink.href = 'https://www.dropbox.com/s/l0y2nnsggmr9gzp/resume_1_22_19.pdf?raw=1';
        downloadLink.download = 'davon_barnette_resume_2019.pdf';

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    static redirect(url:string) {
        let link = document.createElement("a");
        link.href = url;
        link.target = '_blank';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

}