// ImageCard.jsx
import css from './ImageCard.module.css'

type Author = {
  name: string;
  username: string;
}

type ImageCardProps = {
  imageUrl: string;
  altText: string;
  author: Author;
  likes: number; 
  description?: string;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, altText, author, likes, description, onClick }) => {
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



export default ImageCard;
