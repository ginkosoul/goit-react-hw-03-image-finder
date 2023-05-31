import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Component } from 'react';

const size = 8;

export default class Searchbar extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };
  state = { query: '' };
  onInputChange = event => {
    this.setState({ query: event.target.value });
  };
  render() {
    const { onSearch, disable } = this.props;
    return (
      <header className="Searchbar">
        <form
          onSubmit={e => {
            e.preventDefault();
            onSearch(this.state.query);
          }}
          className="SearchForm"
        >
          <button
            type="submit"
            disabled={disable}
            className="SearchForm-button"
          >
            <BsSearch width={size} height={size} />
          </button>

          <input
            onChange={this.onInputChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
