import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './../../../assets/css/media.css';

class Media extends PureComponent {

    state = {
        author: this.props.author
    }    
    
    constructor(props) {
        super(props);
    }

    handleOpenModal = event => {
        this.props.handleOpenModal(this.props);
    }


    render() {
        return (
            <div className="Media" onClick={this.handleOpenModal}>
                <div className="Media-cover">
                    <img
                        src={ this.props.cover }
                        className="Media-image"
                        width={260}
                        height={160}
                    />
                    <h3 className="Media-title">{ this.props.title }</h3>
                    <p className="Media-author">{ this.state.author }</p>
                </div>
            </div>
        )
    }

}

Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio'])
};

export default Media;