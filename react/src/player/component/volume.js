import React from 'react';
import VolumeIcon from '../../components/icons/volume';
import './../../../assets/css/volume.css';

function Volume(props){
    return (
        <button className="Volume">
            <div onClick={props.handleVolumeMute}>
                <VolumeIcon color="white" size={25} />
            </div>
            <div className="Volume-range">
                <input 
                    type="range" 
                    min={0}
                    max={1}
                    step={0.1}
                    value={props.value}
                    onChange={
                        props.handleVolumeChange
                    }
                />
            </div>
        </button>
    );
}

export default Volume;