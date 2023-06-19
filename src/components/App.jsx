import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

import { AppStyled } from './App.styled';

class App extends Component {
  state = {
    searchValue: '',
  };

  onSubmitHendler = searchValue => {
    this.setState({ searchValue });
  };

  render() {
    const { searchValue } = this.state;

    return (
      <AppStyled>
        <SearchBar onSubmit={this.onSubmitHendler} />
        <ImageGallery searchData={searchValue} />
        <Button />
        <ToastContainer autoClose={3000} position="top-center" />
      </AppStyled>
    );
  }
}
export default App;
