import React, {Component} from 'react';
import {observer} from "mobx-react";

import './styles.scss';

import AppStore from "../../../../data/App/Store";
import ResponsiveVideo from "../../../common/ResponsiveVideo/ResponsiveVideo";
import {EmbedType} from "../../../../data/Work/Types";


interface ProjectPageProps {
    projectId:string,
}

class ProjectPage extends Component<ProjectPageProps, any> {

    get project(){
        const {projectId} = this.props;
        return AppStore.work.getById(projectId);
    }
    get time(){
        const { start_date, end_date } = this.project!;
        return `${start_date} - ${end_date}`;
    }
    get embeds(){
        const { embeds } = this.project!;
        if (!embeds || embeds.length === 0) return null;
        return embeds.map((embed:EmbedType, index:number) => {
            const { type, url } = embed;
            let props:any = {
                key:index,
                className:'project-embed-container',
                videoContainerClassName:'project-embed-video'
            };
            if (type ==='video') props.video = url;
            else if (type === 'image') props.frame = url;
            return <ResponsiveVideo {...props}/>;
        })
    }

    render(){
        if (!AppStore.work || !this.project) return null;
        return(
            <section className='project-page'>
                <div className='dates'>{this.time}</div>
                <div className='description'>
                    {this.project.description}
                </div>
                <div className='embeds'>
                    {this.embeds}
                </div>
            </section>
        )
    }
}

export default observer(ProjectPage);