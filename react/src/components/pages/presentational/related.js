import React from 'react';
import logo from './../../../../assets/images/logo.png';
import './../../../../assets/css/related.css';


function Related(props) {
    return (
        <div className='Related'>
            <img src={logo} width={250} />
            <br />
            <ul>
            {
                props.relateds.map(
                    (item) => {
                        return (
                            <li className="Related-text">
                                {item}
                            </li>
                        )
                    }
                )
                
            }
            </ul>
        </div>
        
    );
}

export default Related;