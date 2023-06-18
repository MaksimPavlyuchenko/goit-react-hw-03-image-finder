import { Component } from 'react';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import fetchPixabay from 'components/helpers/fetchPixabay';

import { ImageGalleryStyled } from './ImageGallery.styled';

class ImageGallery extends Component {
  state = {
    arrayImage: [],
  };
  async componentDidUpdate(prevProps) {
    const {
      searchData: { searchValue },
    } = this.props;
    if (prevProps !== this.props) {
      const arrayImage = await fetchPixabay(searchValue);
      this.setState({ arrayImage });
    }
  }

  render() {
    const { arrayImage } = this.state;
    return (
      <ImageGalleryStyled>
        {arrayImage.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              webFormat={webformatURL}
              largeFormat={largeImageURL}
            />
          );
        })}
      </ImageGalleryStyled>
    );
  }
}
export default ImageGallery;
