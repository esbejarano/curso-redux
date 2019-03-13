import React from 'react';
import '../../../../assets/css/home-layout.css';

function HomeLayout(props) {
    return (
        <section className="HomeLayout">
            {props.children}
        </section>
    );
}

export default HomeLayout;