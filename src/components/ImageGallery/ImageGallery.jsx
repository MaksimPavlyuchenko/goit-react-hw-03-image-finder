import { Component } from 'react';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import { ImageGalleryStyled } from './ImageGallery.styled';

class ImageGallery extends Component {
  render() {
    return (
      <ImageGalleryStyled>
        <ImageGalleryItem />
      </ImageGalleryStyled>
    );
  }
}
export default ImageGallery;
