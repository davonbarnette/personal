import React, {Component} from 'react';
import {observer} from "mobx-react";

import './styles.scss';

import BrowserRouter, {BrowserRoutes} from "../../../../data/Routers/BrowserRouter";
import AppStore from "../../../../data/App/Store";

interface ProjectCardProps {
    workId:string
}

class ProjectCard extends Component<ProjectCardProps, any> {

    get project(){
        const { workId } = this.props;
        return AppStore.work.getById(workId);
    }
    get backgroundImage(){
        if (!this.project) return undefined;
        return this.project.banner;
    }

    onProjectCardClick = () => {
        if (!this.project) return;
        BrowserRouter.push(BrowserRoutes.getWorkById(this.project.id));
    };

    render(){
        if (!this.project) return null;

        return (
            <li className='project-card'>
                <img className='project-card-image' src={this.backgroundImage} onClick={this.onProjectCardClick}/>
            </li>

        )
    }
}

export default observer(ProjectCard);