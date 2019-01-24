import React, {Component} from 'react';
import {observer} from "mobx-react";
import {RouteComponentProps, withRouter} from "react-router";

import './styles.scss';

import AppStore from "../../../../data/App/Store";
import {Flex} from "../../../common/Flex/Flex";
import {Scrollable} from "../../../common/Scrollable/Scrollable";
import ContentHeader from "./ContentHeader";
import ProjectPage from "../ProjectPage/ProjectPage";


interface WorkPageProps extends RouteComponentProps<{workId:string}> {

}

class WorkPage extends Component<WorkPageProps, any> {

    get content(){
        const {workId } = this.props.match.params;
        let work = AppStore.work.getById(workId);
        if (!work) return null;

        return (
            <Flex className='work-content' flexDirection='column'>
                {/*<ContentHeader workId={workId}/>*/}
                <Scrollable scrollY>
                    {/*<Switch>*/}
                        {/*/!**/}
                            {/*Some Router Content...*/}
                        {/**!/*/}
                    {/*</Switch>*/}
                    <ProjectPage projectId={workId}/>

                </Scrollable>
            </Flex>
        )
    }

    render(){
        if (!AppStore.work) return null;
        const {workId } = this.props.match.params;

        return(
            <section className='work-page'>
                {this.content}
            </section>
        )
    }
}

export default withRouter(observer(WorkPage));