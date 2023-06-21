import { Component } from 'react';

import fetchPixabay from './helpers/fetchPixabay';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';

import { AppStyled } from './App.styled';

class App extends Component {
  state = {
    searchValue: '',
    pageNumber: 1,
    imgArray: [],
    loadMore: false,
    loading: false,
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { searchValue, pageNumber } = this.state;
    if (
      prevState.searchValue !== searchValue ||
      prevState.pageNumber !== pageNumber
    ) {
      this.setState({ loading: true });
      setTimeout(() => {
        fetchPixabay(searchValue, pageNumber)
          .then(response =>
            this.setState(state => ({
              imgArray: [...state.imgArray, ...response.data.hits],
              loadMore: pageNumber < Math.ceil(response.data.totalHits / 12),
            }))
          )
          .catch(() => {
            alert('Ooops!!!');
          })
          .finally(() => {
            this.setState({ loading: false });
          });
      }, 1000);
    }
  };

  onClickButtonMore = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
  };

  onSubmitHandler = searchValue => {
    this.setState({
      searchValue,
      pageNumber: 1,
      imgArray: [],
      loadMore: false,
    });
  };

  onResetPage = () => {
    this.setState({ pageNumber: 1 });
  };

  render() {
    const { loadMore, imgArray, loading } = this.state;
    return (
      <AppStyled>
        <Searchbar onSubmitHandler={this.onSubmitHandler} />
        {loading && <Loader />}
        <ImageGallery imgArray={imgArray} />

        {loadMore && <Button onClick={this.onClickButtonMore} />}
      </AppStyled>
    );
  }
}
export default App;
