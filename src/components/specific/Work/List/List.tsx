import React, {Component} from 'react';
import {observer} from "mobx-react";

import './styles.scss';

import ItemsList from "../../../common/ItemsList/ItemsList";
import {ItemsListItemType} from "../../../common/ItemsList/Types";
import AppActions from "../../../../data/App/Actions";
import {FIXED_COMPONENT_TYPES, MODALS_BY_ID} from "../../../../data/App/Types";
import AppStore from "../../../../data/App/Store";
import {WorkType} from "../../../../data/Work/Types";
import WorkListItem from "./ListItem";

interface WorkListProps{
    workId?:string
    className?:string,
}

class WorkList extends Component<WorkListProps> {

    onAddClick = () => {
        AppActions.openFixedComponent(FIXED_COMPONENT_TYPES.MODAL, "")
    };

    get items(){
        let works = AppStore.work.all;
        if (!works) return undefined;

        return works.map((work:WorkType, index:number) => {
            const { id, name } = work;
            let selected = this.props.workId === id;
            return {
                key:id,
                value:name,
                component: <WorkListItem key={id} workId={id} selected={selected}/>,
            } as ItemsListItemType;
        });
    }

    render(){
        return <ItemsList itemName='Work' onAddClick={this.onAddClick} items={this.items}/>
    }
}

export default observer(WorkList);