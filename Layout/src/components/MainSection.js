import React from 'react';
import EventBoard from './EventBoard';
import VideoContainer from './VideoContainer';
import HeaderWrapper from './HeaderWrapper';

const MainSection = props => {

    return (
        <div className="main-section pb-4">
            {/* <VideoContainer video={"https://www.youtube.com/embed/zpOULjyy-n8?rel=0"}/>
            <EventBoard/> */}
            <HeaderWrapper/>
        </div>
    )
}
export default MainSection