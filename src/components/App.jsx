import { Component } from 'react';

import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
// import Modal from './Modal/Modal';

import { AppStyled } from './App.styled';

class App extends Component {
  state = {
    searchValue: '',
  };
  onSubmitHendler = searchValue => {
    this.setState({ searchValue });
  };
  render() {
    return (
      <AppStyled>
        <SearchBar onSubmit={this.onSubmitHendler} />
        <ImageGallery searchData={this.state.searchValue} />
        <Button />
        <Loader />
        {/* <Modal /> */}
      </AppStyled>
    );
  }
}
export default App;
