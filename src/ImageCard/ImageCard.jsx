// ImageCard.jsx
import PropTypes from 'prop-types';

const ImageCard = ({ imageUrl, altText, author, likes, description, onClick }) => {
  return (
    <div onClick={onClick}>
      <img src={imageUrl} alt={altText} />
      <div>
        <p>Author: {author.name} ({author.username})</p> 
        <p>Likes: {likes}</p> 
        <p>Description: {description}</p> 
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  likes: PropTypes.number.isRequired,
  description: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default ImageCard;
