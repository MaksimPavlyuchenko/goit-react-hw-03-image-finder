import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import fetchPixabay from 'components/helpers/fetchPixabay';

import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';

import { ImageGalleryStyled } from './ImageGallery.styled';

class ImageGallery extends Component {
  state = {
    arrayImage: [],
    error: null,
    status: 'idle',
    numberPage: 1,
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { searchValue } = this.props.searchData;
    const prevSearchValue = prevProps.searchData.searchValue;

    if (prevSearchValue !== searchValue) {
      this.setState(state => ({
        status: 'pending',
        numberPage: state.numberPage + 1,
      }));

      try {
        fetchPixabay(searchValue, 1).then(response =>
          this.setState({
            arrayImage: response.data.hits,
            status: 'resolved',
          })
        );
      } catch (error) {
        this.setState({ status: 'rejected' });
      }
    }
  };

  onClickButtonHandler = () => {
    const { numberPage } = this.state;
    const { searchValue } = this.props.searchData;
    try {
      fetchPixabay(searchValue, numberPage).then(response =>
        this.setState(state => ({
          arrayImage: [...state.arrayImage, ...response.data.hits],
          status: 'resolved',
        }))
      );
    } catch (error) {
      this.setState({ status: 'rejected' });
    }

    this.setState(state => ({
      numberPage: state.numberPage + 1,
    }));
  };

  onResetPage = () => {
    this.setState({ numberPage: 2 });
  };

  render() {
    const { arrayImage, error, status } = this.state;
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <p>Whoops, something went wrong: {error.message}</p>;
    }
    if (status === 'resolved') {
      return (
        <>
          <ImageGalleryStyled>
            {arrayImage.map(({ id, webformatURL, largeImageURL }) => {
              return (
                <ImageGalleryItem
                  key={id}
                  smallFormat={webformatURL}
                  largeFormat={largeImageURL}
                  onReset={this.onResetPage}
                />
              );
            })}
          </ImageGalleryStyled>
          <Button onClick={this.onClickButtonHandler} />
        </>
      );
    }
  }
}
export default ImageGallery;
