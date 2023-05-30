import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';

const size = 8;

const Searchbar = ({ onSubmit, onChange }) => (
  <header className="Searchbar">
    <form onSubmit={onSubmit} className="SearchForm">
      <button type="submit" className="SearchForm-button">
        <BsSearch width={size} height={size} />
      </button>

      <input
        onChange={onChange}
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Searchbar;
