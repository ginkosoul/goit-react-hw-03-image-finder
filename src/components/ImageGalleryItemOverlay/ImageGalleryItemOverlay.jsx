import formatNumber from 'helpers/formatNumber';
import css from 'components/ImageGalleryItemOverlay/ImageGalleryItemOverlay.module.css';
import PropTypes from 'prop-types';
import {
  BsFillHeartFill,
  BsEyeFill,
  BsFillChatFill,
  BsFillCloudArrowDownFill,
} from 'react-icons/bs';

const iconSize = 16;

export default function ImageOverlay({ likes, views, downloads, comments }) {
  return (
    <div className={css.overlay}>
      <BsFillHeartFill width={iconSize} height={iconSize} fill="white" />
      <BsEyeFill width={iconSize} height={iconSize} fill="white" />
      <BsFillChatFill width={iconSize} height={iconSize} fill="white" />
      <BsFillCloudArrowDownFill
        width={iconSize}
        height={iconSize}
        fill="white"
      />
      <p>{formatNumber(likes)}</p>
      <p>{formatNumber(views)}</p>
      <p>{formatNumber(downloads)}</p>
      <p>{formatNumber(comments)}</p>
    </div>
  );
}

ImageOverlay.propTypes = {
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
};
