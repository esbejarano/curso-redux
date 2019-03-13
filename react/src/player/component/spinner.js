import React from 'react';
import './../../../assets/css/spinner.css';


function Spinner(props) {
    if (!props.loading) {
        return null;
    }
    return (
        <div className="Spinner">
            <span>Cargando ...</span>
        </div>
    );
}

export default Spinner;