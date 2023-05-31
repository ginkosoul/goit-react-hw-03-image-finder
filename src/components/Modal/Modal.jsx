import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  static propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
    onModalClose: PropTypes.func.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.closeModalOnEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalOnEsc);
  }
  closeModalOnEsc = e => {
    if (e.code === 'Escape') {
      this.props.onModalClose();
    }
  };
  render() {
    const { onModalClose, largeImageURL, tags } = this.props;
    return (
      <div onClick={onModalClose} className="Overlay">
        <div className="Modal">
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}
