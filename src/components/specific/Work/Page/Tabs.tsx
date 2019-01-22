import React, {Component} from 'react';
import {observer} from "mobx-react";
import * as Icon from 'react-feather';
import './styles.scss';
import {RouteComponentProps, withRouter} from "react-router";
import Tabs from "../../../common/Tabs/Tabs";
import {SingleTab} from "../../../common/Tabs/types";
import BrowserRouter, {BrowserRoutes} from "../../../../data/Routers/BrowserRouter";

interface WorkTabsProps extends RouteComponentProps{
    workId:string
    className?:string,
}

class WorkTabs extends Component<WorkTabsProps> {
    render(){
        const {workId, location, className } = this.props;
        const { pathname } = location;
        return <Tabs tabs={TabsObject(workId, pathname)} className={className}/>
    }
}

export default withRouter(observer(WorkTabs));

const TabsObject = (workId:string,pathname:string):SingleTab[] => {
    return [
        {
            label: 'Work Tab',
            icon: (color: string) => <Icon.Image color={color} size={18}/>,
            onClick: (e: MouseEvent) => {
                e.stopPropagation();
                BrowserRouter.push(BrowserRoutes.work);
            },
            selected: pathname.indexOf(BrowserRoutes.work) !== -1
        },
    ]
};