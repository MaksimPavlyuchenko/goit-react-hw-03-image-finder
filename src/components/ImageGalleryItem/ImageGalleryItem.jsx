import { Component } from 'react';
import { ImageGalleryItemStyled, Image } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  render() {
    const { smallFormat } = this.props;
    return (
      <ImageGalleryItemStyled>
        <Image src={smallFormat} alt="" />
      </ImageGalleryItemStyled>
    );
  }
}
export default ImageGalleryItem;
