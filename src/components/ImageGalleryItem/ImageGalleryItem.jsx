import { Component } from 'react';
import { ImageGalleryItemStyled, Image } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';
class ImageGalleryItem extends Component {
  state = { isShow: false };

  toggleModal = () => {
    this.setState(({ isShow }) => ({
      isShow: !isShow,
    }));
  };

  render() {
    const { webFormat, largeFormat } = this.props;

    return (
      <ImageGalleryItemStyled onClick={this.toggleModal}>
        <Image src={webFormat} />
        {this.state.isShow && (
          <Modal onClose={this.toggleModal}>
            {' '}
            <img src={largeFormat} alt="" />
          </Modal>
        )}
      </ImageGalleryItemStyled>
    );
  }
}
export default ImageGalleryItem;
