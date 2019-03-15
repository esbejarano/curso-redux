import { createStore } from 'redux';
import * as CONSTS from './../../constants/actions';

function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(_form);
    const title = data.get('title');
    store.dispatch({
        type: CONSTS.ADD_SONG,
        payload: {
            title: title 
        }
    });
    
}

const _form = document.getElementById('form');
_form.addEventListener('submit', handleSubmit);

const initialState = [
    {"title": "Despacito"},
    {"title": "One more time"},
    {"title": "Echame la culpa"}
];

const store = createStore(
    (state) => state,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);