import React, {Component} from 'react';
import './styles.scss';
import {Redirect, Route, RouteComponentProps, Switch, withRouter} from "react-router";
import AppStore from "../../../data/App/Store";
import {BrowserRoutes} from "../../../data/Routers/BrowserRouter";
import {Flex} from "../../common/Flex/Flex";
import ModalRouter from "../FixedComponentsRouters/ModalRouter";
import SocketDebugger from "../../common/Debugger/SocketDebugger";
import DrawerRouter from "../FixedComponentsRouters/DrawerRouter";
import AppHeader from "./AppHeader";
import HomePage from '../Home/Home';

/* App Imports */
import WorkPage from "../Work/Page/Page"

AppStore.initialize();

class App extends Component<RouteComponentProps, any> {

    render() {

        return (
            <Flex className='app' flexDirection='column'>
                <AppHeader />
                <Switch>
                    /* Data Routes */
                    <Route path={BrowserRoutes.workByIdParam} component={WorkPage}/>
                    <Route exact path={BrowserRoutes.home} component={HomePage}/>
                    <Route exact path={BrowserRoutes.about} component={HomePage}/>
                    <Route exact path={BrowserRoutes.blog} component={HomePage}/>


                    <Route exact path={BrowserRoutes.debugger} component={SocketDebugger}/>
                    <Redirect to={BrowserRoutes.home}/>
                </Switch>
                <ModalRouter/>
                <DrawerRouter/>
            </Flex>
        );
    }
}

export default withRouter(App);
