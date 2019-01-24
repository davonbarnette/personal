import React, {Component} from 'react';
import {observer} from "mobx-react";
import * as Icon from 'react-feather';

import './styles.scss';
import Button from "../../common/Button/Button";
import AppStore from "../../../data/App/Store";
import ProjectCard from "./ProjectCard/ProjectCard";
import BrowserRouter, {BrowserRoutes} from "../../../data/Routers/BrowserRouter";
import {Scrollable} from "../../common/Scrollable/Scrollable";

import {
    CSSSVG,
    ExpressSVG,
    FirebaseSVG, HTMLSVG, JSSVG,
    MobXSVG,
    MongoDBSVG,
    NodeSVG, PythonSVG,
    ReactSVG,
    ReduxSVG, SassSVG, TSSVG
} from "../../../global/managers/SVGManager";
import {Flex} from "../../common/Flex/Flex";
import AppActions from "../../../data/App/Actions";

interface HomePageProps {

}

const fields = [
    {label:'Degree', value:'Bachelor of Science in Biology'},
    {label:'Graduated from', value:'Georgia State University'},
    {label:'Frontend Proficiencies', value:'JS /HTML / CSS / SASS, React / MobX / Redux'},
    {label:'Backend Proficiencies', value:'Node.js, MongoDB, Express, Firebase, PostgreSQL'},
];

const FRONTEND = {
    JAVASCRIPT: {
        icon: <JSSVG/>,
        name: 'JavaScript'
    },
    HTML: {
        icon: <HTMLSVG/>,
        name: 'HTML'
    },
    CSS: {
        icon: <CSSSVG/>,
        name: 'CSS'
    },
    REACT: {
        icon: <ReactSVG/>,
        name: 'React'
    },
    REDUX: {
        icon: <ReduxSVG/>,
        name: 'Redux'
    },
};

const BACKEND = {
    NODEJS: {
        icon: <NodeSVG/>,
        name: 'Node.js'
    },
    PYTHON: {
        icon: <PythonSVG/>,
        name: 'Python'
    },
    FIREBASE: {
        icon: <FirebaseSVG/>,
        name: 'Firebase'
    },
    EXPRESS: {
        icon: <ExpressSVG/>,
        name: 'Express'
    },
    MONGO: {
        icon: <MongoDBSVG/>,
        name: 'MongoDB'
    },
};


class HomePage extends Component<HomePageProps, any> {

    get titleBackground(){
        return `url("https://www.dropbox.com/s/9dntic2phc3xnxn/DSC_5470.jpg?raw=1")`
    }
    get projects(){
        let projects = AppStore.work.all;
        if (!projects || projects.length === 0) return null;

        return projects.map(project => <ProjectCard key={project.id} workId={project.id}/>)
    }
    getIcons(object:any){
        let animationDelay = 1;
        let incrementDelay = 0.1;

        return Object.keys(object).map(key => {
            let value = object[key];
            animationDelay += incrementDelay;
            return <SingleIcon key={value.name} data={value} animationDelay={animationDelay}/>
        });
	}
	onDownloadPDFClick = () => {
        AppActions.downloadResume();
    };

    render(){
        return(
            <Scrollable scrollY className='home-page'>
                <div className='home-page-content'>
                    <div className='full-width'>
                        <section className='hero'>
                            <div className='left'>
                                <div className='descriptor'>Austin, TX</div>
                                <h2 className='title'>UI/UX Designer & Full Stack Engineer</h2>
                                <h3 className='subtitle'>Currently designing and developing applications for OsmosisAI,
                                    a company centered around Vision AI for enterprise.
                                </h3>
                            </div>
                            <div className='right' style={{backgroundImage: this.titleBackground}}/>

                        </section>
                    </div>
                    <div className='full-width'>
                        <div className='bg-skewed'/>
                        <section className='popular-work'>
                            <div className='heading-section-item light'>
                                <h2 className='title'>Featured Work</h2>
                                <h3 className='subtitle' style={{marginBottom:48}}>
                                    Here are some of my recent works. Click on the images to get a deeper dive into how I approached these projects, or what my responsibilities were.
                                </h3>
                            </div>
                            <ul className='flex-wrapped-2'>
                                {this.projects}
                            </ul>
                        </section>
                    </div>
                    <div className='full-width margin'>
                        <section className='heading-section-item'>
                            <div className='descriptor'>A little</div>
                                <h2 className='title'>About Me</h2>
                                <h3 className='subtitle'></h3>
                            <Button enabled={true} onClick={this.onDownloadPDFClick}>
                                <Flex alignItems='center'><Icon.DownloadCloud style={{marginRight:12}}/>DOWNLOAD .PDF RESUME</Flex>
                            </Button>
                        </section>
                        <section className='flex-wrapped-2'>
                            <div className='item'>
                                <div className='cell'>
                                    <Flex alignItems='center'>
                                        <Icon.Book size={22} color='#3a3a3a' style={{marginRight:12}}/>
                                        <h3>Education</h3>
                                    </Flex>
                                    <p><strong>BS in Biology, Georgia State University</strong>. I originally planned to be a doctor, but after shadowing doctors and finally getting a full grasp of what I'd be diving into, I decided that I'd follow my more immediate passions, design and development.</p>
                                </div>
                                <div className='cell'>
                                    <Flex alignItems='center'>
                                        <Icon.Briefcase color='#3a3a3a' style={{marginRight:12}}/>
                                        <h3>Work Experience</h3>
                                    </Flex>
                                    <p><strong>SkillCapped (2014-2017) | OsmosisAI (2018-now)</strong>. Lead Designer & Full Stack Engineering. I've been in charge of concept (UI/UX) all the way up to execution (React/Node). This is most likely where I bring the most value - I understand both roles, and can reason through how they should connect.</p>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='cell'>
                                    <Flex alignItems='center'>
                                        <Icon.Code color='#3a3a3a' style={{marginRight:12}}/>
                                        <h3>Full Stack Engineering</h3>
                                    </Flex>
                                    <p><strong>JavaScript | Python | HTML | CSS</strong>. I can create any application from the ground up, from design, to backend, to frontend, and understand how all those concepts tie together. Historically, I've been a one-man-show, for projects and both of my jobs.</p>
                                </div>
                                <div className='cell'>
                                    <Flex alignItems='center'>
                                        <Icon.Grid color='#3a3a3a' style={{marginRight:12}}/>
                                        <h3>Design</h3>
                                    </Flex>
                                    <p><strong>Adobe Suite CC</strong>. I started off creating YouTube videos, using Premiere, After Effects, and Photoshop. This gave me the background I needed to create meaningful user experiences, beautiful animations, and pixel perfect design.</p>
                                </div>
                            </div>
                        </section>
                        <section className='techs'>
                            <div className='type'>
                                <div className='title'>Recent Frontend Tech</div>
                                <div className='icons'>{this.getIcons(FRONTEND)}</div>
                            </div>
                            <div className='type'>
                                <div className='title'>Recent Backend Tech</div>
                                <div className='icons'>{this.getIcons(BACKEND)}</div>
                            </div>
                        </section>
                    </div>
                    <div className='full-width dark'>
                        <section className='popular-work'>
                            <div className='heading-section-item light'>
                                <h2 className='title'>Want to get in touch?</h2>
                                <h3 className='subtitle' style={{marginBottom:48}}>
                                    Shoot me an e-mail or fill out a contact form and I'll get back to you as soon as possible!
                                </h3>
                                <Button enabled={true} onClick={() => BrowserRouter.push(BrowserRoutes.work)}>
                                    ME@DAVONBARNETTE.COM
                                </Button>
                            </div>
                        </section>
                    </div>
                </div>
            </Scrollable>
        )
    }
}

export default observer(HomePage);

const SingleIcon = observer((props:{data:any, animationDelay:number})=>{
    return (
		<div className='single-icon'>
			<div className='icon'>{props.data.icon}</div>
			<div className='text'>{props.data.name}</div>
		</div>
    );
});