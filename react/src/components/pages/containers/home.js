import React, {Component} from 'react';
import HomeLayout from './../presentational/home-layout';
import Categories from './../../categories/containers/categories';
import Related from './../presentational/related';
import ModalContainer from './../../widgets/containers/modalcontainer';
import Modal from './../../widgets/components/modal';
import HandleError from './../../error/containers/handle-error';
import VideoPlayer from '../../../player/containers/video-player';

class Home extends Component {
    state = {
        modalVisible: false,
        handleError: false
    };

    handleClickCloseModal = (event) => {
        this.setState({
            modalVisible: false
        });
    }

    handleOpenModal = (media) => {
        this.setState({
            modalVisible: true,
            media: media
        });
    }

    render() {
        return (
            <HandleError>
                <HomeLayout>
                    <Related relateds={this.props.data.relateds} />
                    <Categories 
                        categories={this.props.data.categories}
                        handleOpenModal={this.handleOpenModal} />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal
                                handleClickClose = {this.handleClickCloseModal}
                            >
                                <VideoPlayer 
                                    autoplay={true} 
                                    src={this.state.media.src} 
                                    title={this.state.media.title} 
                                />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        );
    }
}

export default Home;