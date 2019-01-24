import {SingleHeaderItem} from "../../common/Header/types";
import {BrowserRoutes} from "../../../data/Routers/BrowserRouter";
import * as Icon from "react-feather";
import React, {Component} from "react";
import Header from "../../common/Header/Header";
import {RouteComponentProps, withRouter} from "react-router";

export const MAIN_HEADER_ITEMS:SingleHeaderItem[] = [
    {redirect: 'https://github.com/davonbarnette', label:'github', icon:(color:string)=><Icon.GitHub color={color} size={18}/>},
    {redirect: 'https://www.linkedin.com/in/davon-barnette-bb73b2156/', label:'linkedin', icon:(color:string)=><Icon.Linkedin color={color} size={18}/>},
    {redirect: 'mailto:davonbarnette@gmail.com', sameWindow:true, label:'email', icon:(color:string)=><Icon.Mail color={color} size={18}/>},
];

interface AppHeaderProps extends RouteComponentProps {

}

class AppHeader extends Component<AppHeaderProps, any> {

    render(){
        return <Header headerItems={MAIN_HEADER_ITEMS}/>
    }
}

export default withRouter(AppHeader);
