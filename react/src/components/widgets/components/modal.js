import React from 'react';
import './../../../../assets/css/modal.css';

function Modal(props) {
    return (
        <div className="Modal">
            {props.children}
            <button onClick={props.handleClickClose} className="Modal-close" />
        </div>
    );
}

export default Modal;