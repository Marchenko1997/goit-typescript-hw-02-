// ImageCard.jsx
import PropTypes from 'prop-types';
import css from './ImageCard.module.css'

const ImageCard = ({ imageUrl, altText, author, likes, description, onClick }) => {
  return (
    <div onClick={onClick} className={css.cardcontainer}>
      <img src={imageUrl} alt={altText} className={css.card}/>
      <div className={css.imagedetails}>
        <p className={css.moredetails}> <b> 👤Author: </b>{author.name} ({author.username})</p> 
        <p className={css.moredetails}> <b>💗Likes:</b> {likes}</p> 
        <p className={css.moredetails}> <b>💬Description:</b> {description}</p> 
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
