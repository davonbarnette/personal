import React, {Component} from 'react';
import './styles.scss';
import {observer} from "mobx-react";
import cx from 'classnames';

interface ResponsiveVideoProps{
    frame?:string,
    className?:string,
    videoContainerClassName?:string,
    video?:string,
}


@observer
class ResponsiveVideo extends Component<ResponsiveVideoProps, any> {

    get content(){
        const { frame, video } = this.props;
        if (frame) return <img className='image' src={frame}/>;
        else if (video) return <video className='image' src={video} autoPlay playsInline loop muted/>
    }

    render() {
        const { className, videoContainerClassName, frame, video } = this.props;
        if (!frame && !video) return null;

        return (
            <div className={cx('responsive-video ', className || '')}>
                <div className={cx('video-container ', videoContainerClassName  || '')}>
                    {this.content}
                </div>
            </div>
        )
    }
}

export default ResponsiveVideo;