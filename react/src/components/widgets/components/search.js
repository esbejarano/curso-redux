import React from 'react';
import './../../../../assets/css/search.css';

function Search(props) {
    return (
        <form className="Search" onSubmit={props.handleSubmit}>
            <input 
                type="text" 
                ref={props.setRef}
                id="search" 
                name="search" 
                className="Search-input" 
                placeholder="Busca tu video favorito" 
                defaultValue={"Luis Fonsi"}
                onChange={props.handleInputChange}
            />
        </form>
    );
}

export default Search;