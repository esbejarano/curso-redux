import React from 'react';
import './../../../assets/css/progress-bar.css';

function ProgressBar(props) {
    return (
        <div className="ProgressBar">
            <input 
                type="range" 
                min={0} 
                max={props.duration} 
                step={1}
                value={props.currentTime} 
                onChange={props.handleProgressChange}
            />
        </div>
    );
}
export default ProgressBar;