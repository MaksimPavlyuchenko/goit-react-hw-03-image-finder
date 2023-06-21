import { Component } from 'react';
import { ImageGalleryItemStyled, Image } from './ImageGalleryItem.styled';

import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    isShow: false,
  };
  onOpenModal = () => {
    this.setState({ isShow: true });
  };
  onCloseModal = () => {
    this.setState({ isShow: false });
  };

  render() {
    const { smallFormat, largeFormat } = this.props;
    const { isShow } = this.state;

    return (
      <ImageGalleryItemStyled onClick={this.onOpenModal}>
        <Image src={smallFormat} alt="" />
        {isShow && (
          <Modal largeFormat={largeFormat} onClose={this.onCloseModal} />
        )}
      </ImageGalleryItemStyled>
    );
  }
}
export default ImageGalleryItem;

ImageGalleryItem.propsTypes = {
  smallFormat: PropTypes.string.isRequired,
  largeFormat: PropTypes.string.isRequired,
};
