import PropTypes from 'prop-types';

export default function Modal({ largeImageURL, tags, onModalClose }) {
  return (
    <div onClick={onModalClose} className="Overlay">
      <div className="Modal">
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
}
Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
  onModalClose: PropTypes.func.isRequired,
};
