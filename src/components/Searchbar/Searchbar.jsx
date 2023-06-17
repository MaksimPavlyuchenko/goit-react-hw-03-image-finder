import { Component } from 'react';

import {
  SearchBarStyled,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
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
    this.props.onSubmit(this.state.searchValue);
    this.setState({ searchValue: '' });
  };

  render() {
    return (
      <SearchBarStyled>
        <SearchForm onSubmit={this.onSubmitHandler}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <input
            className="input"
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
