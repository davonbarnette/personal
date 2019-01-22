import { createBrowserHistory } from 'history';

/*
 * The browser router class creates an instance of BrowserHistory so we can track the browser's history in a single-page
 * application. Only use this if you are using React as a single-page app. This allows the user to use the native back
 * button or forward buttons as if they were on a regular application. This is closely tied to React Router v4, so check
 * documentation at https://github.com/ReactTraining/react-router for more details. You'll see this instantiated in
 * App.tsx in RR4's <Router/> component.
 *
 */

class BrowserRouterClass {
    history:any;

    constructor(){
        this.history = createBrowserHistory();
    }

    push(url:string){
        this.history.push(url);
    }

}

const BrowserRouter = new BrowserRouterClass();
export default BrowserRouter;

/*
 * Use this class to statically type the exact browser routes you'd like to handle. If your route uses a param, make
 * make sure to use the "exampleByIdParam" route. It acts as a catch-all, so it will route to your component whether
 * or not you have the ID param in the url.
 */

export class BrowserRoutes {

    static BASE = '';

    /* Data Type Route Chunks */

    static WORK = 'work';
    static WORK_PARAM = 'workId';

    static ABOUT = 'about';

    static BLOG = 'blog';

    static PORTFOLIO = 'portfolio';
    static PORTFOLIO_PARAM = 'portfolioId';

    static ACCOUNT = 'account';
    static DEBUGGER = 'debugger';

    static get debugger(){
        return `${BrowserRoutes.BASE}/${BrowserRoutes.DEBUGGER}`;
    }

    static get home(){
        return BrowserRoutes.BASE;
    }

    /* Data Type Static Routes */
    static get work(){
        return `${BrowserRoutes.BASE}/${BrowserRoutes.WORK}`;
    }
    static get workByIdParam(){
        // pre-pending a ":" tells React Router that we are considering that option a parameter. Appending a "?" tells
        // it that parameter is optional.

        return `${BrowserRoutes.work}/:${BrowserRoutes.WORK_PARAM}?`;
    }
    static getWorkById(workId:string){
        return `${BrowserRoutes.BASE}/${BrowserRoutes.WORK}/${workId}`;
    }
    static get blog(){
        return `${BrowserRoutes.BASE}/${BrowserRoutes.BLOG}`;
    }
    static get about(){
        return `${BrowserRoutes.BASE}/${BrowserRoutes.ABOUT}`;
    }

    static get account(){
        return `${BrowserRoutes.BASE}/${BrowserRoutes.ACCOUNT}`
    }
}
