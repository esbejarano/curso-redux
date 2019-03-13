import React from 'react';
import { render } from 'react-dom';
import Playlist from './src/components/playlist/playlist';
import data from './src/api.json';

const homeContainer = document.getElementById('home-container');

render( <Playlist data={data}/>, homeContainer );
