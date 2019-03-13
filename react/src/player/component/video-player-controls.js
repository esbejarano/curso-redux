import React from 'react';
import './../../../assets/css/video-player.controls.css';


function VideoPlayerControl(props) {
    return (
        <div className="VideoPlayerControls">
            {props.children}
        </div>
    );
}

export default VideoPlayerControl;