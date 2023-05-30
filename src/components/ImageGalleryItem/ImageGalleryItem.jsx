import ImageOverlay from 'components/ImageGalleryItemOverlay/ImageGalleryItemOverlay';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({
  id,
  webformatURL,
  tags,
  likes,
  views,
  downloads,
  comments,
  onClick,
}) {
  return (
    <li className="ImageGalleryItem" id={id} onClick={onClick}>
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
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
