import React, {Component} from 'react';
import BrowserRouter from "../../../data/Routers/BrowserRouter";
import {RouteComponentProps, withRouter} from "react-router";
import cx from 'classnames';
import * as Icon from 'react-feather';

import './styles.scss';

import {SingleHeaderItem} from "./types";
import {Flex} from "../Flex/Flex";

interface NavButtonProps {
    onClick:(e:MouseEvent)=>void,
    label:string,
    selected:boolean,
    icon?:any,
}

const NavButton = (props:NavButtonProps) => {
    const { onClick, label, selected, icon } = props;
    let color = selected ? '#5d84e4' : '#cccccc';

    let className = cx('navigate-to', { selected });
    let containerArgs = { className, onClick };
    return (
        <span {...containerArgs as any} >
            {icon ? icon(color) : null}
            {/*<div className='text'>{label}</div>*/}
        </span>
    )
};

interface HeaderProps extends RouteComponentProps {
    headerItems:SingleHeaderItem[]
}

class Header extends Component<HeaderProps, any> {

    get navItems() {

        const {headerItems} = this.props;

        return headerItems.map((item:SingleHeaderItem, key:number) => {
            const { path, label, icon, redirect } = item;

            let onClick = (e:MouseEvent) => {
                e.stopPropagation();
                if (redirect) {
                    let link = document.createElement("a");
                    link.href = redirect;
                    link.target = '_blank';

                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
                else if (path) BrowserRouter.push(path);
            };
            let selected = path ? this.props.location.pathname.startsWith(path) : false;
            let args = {key, onClick, selected, icon, label, redirect};

            return <NavButton {...args}/>
        })
    }

    render(){
        return(
            <section className='header-component'>
                <section className='header-component-content'>
                    <Flex className='left-nav'>
                        <span className='second'>davon</span><span>barnette</span>
                    </Flex>
                    <Flex className='right-nav' flexDirection='row' justifyContent='flex-end' alignItems='center'>
                        <div className='full-text-nav'>{this.navItems}</div>
                        <Icon.Menu className='hamburger-nav'/>
                    </Flex>
                </section>
            </section>

        )
    }
}

export default withRouter(Header);