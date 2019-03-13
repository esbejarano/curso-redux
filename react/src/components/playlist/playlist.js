import React from 'react';
import Media from './media';
import './../../../assets/css/playlist.css';

function Playlist(props){
    const playlist = props.playlist;
    return (
        <div className="Playlist">
            {
                playlist.map((item) => {
                    return <Media {...item} key={item.id} handleOpenModal={props.handleOpenModal} />;
                })
            }
        </div>
    );

}

export default Playlist;