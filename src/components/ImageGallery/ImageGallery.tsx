// ImageGallery.jsx

import PropTypes from 'prop-types';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css'

const ImageGallery = ({ images, openModal }) => {
  const hasImages = images.length > 0;

  return (
    hasImages && (
      <div  >
      <ul className={css.gallery} >
        {images.map((image, index) => (
          <li key={index} className={css.galleryitem}>
            <ImageCard
              imageUrl={image.urls.small}
              altText={image.description}
              author={image.author}
              likes={image.likes}
              description={image.description}
              onClick={() => openModal(image.urls.regular, image.description)} 
            />
          </li>
        ))}
      </ul>
      </div>
    )
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      urls: PropTypes.shape({
        small: PropTypes.string.isRequired,
        regular: PropTypes.string.isRequired
      }).isRequired,
      author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
      }),
      likes: PropTypes.number.isRequired,
      description: PropTypes.string
    })
  ).isRequired,
  openModal: PropTypes.func.isRequired // Проп валидация для openModal
};

export default ImageGallery;
