import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import fetchPixabay from 'components/helpers/fetchPixabay';
import Loader from 'components/Loader/Loader';

import { ImageGalleryStyled } from './ImageGallery.styled';

class ImageGallery extends Component {
  state = {
    arrayImage: [],
    error: null,
    isLoading: false,
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { searchValue } = this.props.searchData;
    const prevSearchValue = prevProps.searchData.searchValue;

    if (prevSearchValue !== searchValue) {
      this.setState({ isLoading: true });
      try {
        fetchPixabay(searchValue).then(response =>
          this.setState({ arrayImage: response.data.hits })
        );
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  };

  render() {
    const { arrayImage, isLoading, error } = this.state;

    return (
      <ImageGalleryStyled>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <Loader />}
        {arrayImage.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              smallFormat={webformatURL}
              largeFormat={largeImageURL}
            />
          );
        })}
      </ImageGalleryStyled>
    );
  }
}
export default ImageGallery;
