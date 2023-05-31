import ImageOverlay from 'components/ImageGalleryItemOverlay/ImageGalleryItemOverlay';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  downloads,
  comments,
  onClick,
}) {
  return (
    <li
      className="ImageGalleryItem"
      onClick={e => {
        e.preventDefault();
        onClick({ largeImageURL, tags });
      }}
    >
      <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
      <ImageOverlay
        likes={likes}
        views={views}
        downloads={downloads}
        comments={comments}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
