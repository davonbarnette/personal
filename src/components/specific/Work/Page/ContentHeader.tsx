import React, {Component} from 'react';
import {observer} from "mobx-react";

import './styles.scss';

import Tabs from "./Tabs";
import AppStore from "../../../../data/App/Store";
import {Flex} from "../../../common/Flex/Flex";

interface WorkContentHeaderProps {
    workId:string,
}

class WorkContentHeader extends Component<WorkContentHeaderProps, any> {

    render(){
        if (!AppStore.work) return null;
        const {workId } = this.props;
        if (!workId) return null;
        let work = AppStore.work.getById(workId);
        if (!work) return null;
        return(
            <Flex className='work-content-header'>
                <section className='header'>
                    <div className='header-content'>
                        <div className='left'>
                            <div className='work-name'>{work.name}</div>
                        </div>
                        <div className='right'>

                        </div>
                    </div>
                </section>
                <section className='tabs-container'>
                    <Tabs className='work-header-tabs' workId={workId}/>
                </section>
            </Flex>
        )
    }
}

export default observer(WorkContentHeader);