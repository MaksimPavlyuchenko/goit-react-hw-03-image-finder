import { Component } from 'react';

import SearchBar from './Searchbar/Searchbar';

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
      </AppStyled>
    );
  }
}
export default App;
