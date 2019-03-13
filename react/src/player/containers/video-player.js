import React, {Component} from 'react';
import VideoPlayerLayout from './../component/video-player-layout';
import Video from '../component/video';
import Title from '../component/title';
import PlayPause from '../component/play-pause';
import Timer from '../component/timer';
import Controls from '../component/video-player-controls';
import ProgressBar from '../component/process-bar';
import Spinner from '../component/spinner';
import Volume from '../component/volume';
import FullScreen from '../component/full-screen';

class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false,
        volume: 1
    }

    togglePlay = (event) => {
        this.setState({
            pause: !this.state.pause
        });
    }

    componentDidMount() {
        this.setState({
            pause: (!this.props.autoplay)
        });
    }

    leftPad(number) {
        const pad = '00';
        return pad.substring(0, pad.length - number.length) + number;
    }
    
    formattedTime(secs) {
        const minutes = parseInt(secs / 60, 10);
        const seconds = parseInt(secs % 60 , 10);
        
        return `${this.leftPad(minutes.toString())} : ${this.leftPad(seconds.toString())}`;
    }

    handleLoadedMetadata = event => {
        this.video = event.target;
        this.setState({
            duration: this.formattedTime(this.video.duration)
        });
    }

    handleTimeUpdate = event => {
        this.setState({
            currentTime: this.formattedTime(this.video.currentTime)
        });
    }

    handleProgressChange = event => {
        this.video.currentTime = event.target.value;
        this.setState({
            currentTime: event.target.value
        });
    }

    onSeeking = envent => {
        this.setState({
            loading: true
        });
    }

    onSeeked = envent => {
        this.setState({
            loading: false
        });
    }

    handleVolumeChange = event => {
        this.video.volume = event.target.value;
        this.setState({
            volume: this.video.volume
        });
    }

    handleVolumeMute = event => {
        const volume = this.video.volume;
        this.video.volume = volume > 0 ? 0 : 1;
        this.setState({
            volume: this.video.volume
        });
    }

    handleFullScreen = event => {
        if (!document.fullscreen) {
            this.player.webkitRequestFullScreen();
        } else {
            document.exitFullscreen();
        }
    }

    setRef = element => {
        this.player = element;
    }

    render (){
        return (
            <VideoPlayerLayout setRef={this.setRef}>
                <Title title={this.props.title}></Title>
                <Controls>
                    <PlayPause pause={this.state.pause} handleClick={this.togglePlay} />
                    <Timer duration={this.state.duration} currentTime={this.state.currentTime} />
                    <ProgressBar duration={this.state.duration} currentTime={this.state.currentTime} handleProgressChange={this.handleProgressChange}/>
                    <Volume handleVolumeChange={this.handleVolumeChange} handleVolumeMute={this.handleVolumeMute} value={this.state.volume} />
                    <FullScreen handleFullScreen={this.handleFullScreen} />
                </Controls>
                <Spinner loading={this.state.loading} />
                <Video
                    autoplay={this.props.autoplay}
                    pause={this.state.pause}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    onSeeking={this.onSeeking}
                    onSeeked={this.onSeeked}
                    src={this.props.src}
                >
                </Video>
            </VideoPlayerLayout>
        );
    }
}

export default VideoPlayer;