import { Component } from 'react';
import { ReactComponent as MyIcon } from '../search.svg';

import {
  SearchBarStyled,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchInput,
} from './Searchbar.styled';

class SearchBar extends Component {
  state = {
    searchValue: '',
  };

  onChangeHandler = e => {
    const searchValue = e.target.value;
    this.setState({ searchValue });
  };

  onSubmitHandler = evt => {
    evt.preventDefault();
    if (this.state.searchValue.trim() === '') {
      alert('Bad request');
      return;
    }
    this.props.onSubmit(this.state);

    this.setState({
      searchValue: '',
    });
  };

  render() {
    return (
      <SearchBarStyled>
        <SearchForm onSubmit={this.onSubmitHandler}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>
              <MyIcon />
            </SearchFormButtonLabel>
          </SearchFormButton>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchValue}
            onChange={this.onChangeHandler}
          />
        </SearchForm>
      </SearchBarStyled>
    );
  }
}
export default SearchBar;
