import React, {Component} from 'react';
import {observer} from "mobx-react";
import cx from 'classnames';
import * as Icon from 'react-feather';

import './styles.scss';

import BrowserRouter, {BrowserRoutes} from "../../../../data/Routers/BrowserRouter";
import AppStore from "../../../../data/App/Store";

interface WorkListItemProps {
    workId:string,
    selected?:boolean,
}

class WorkListItem extends Component<WorkListItemProps, any> {

    onWorkListItemClick = () => {
        const {workId, selected } = this.props;
        if (!selected) BrowserRouter.push(BrowserRoutes.getWorkById(workId));
    };

    render(){
        const {workId, selected } = this.props;
        let work = AppStore.work.getById(workId);
        if (!work) return null;

        return (
            <div className={cx('work-list-item', { unselected: !selected, selected })} onClick={this.onWorkListItemClick}>
                <div className='name'>{work.name}</div>
                {selected && <Icon.ChevronRight className='arrow-right' size={18}/>}
            </div>
        )
    }
}

export default observer(WorkListItem);