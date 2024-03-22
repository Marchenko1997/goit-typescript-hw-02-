import PropTypes from 'prop-types';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images }) => {
  const hasImages = images.length > 0;

  return (
    hasImages && (
        <ul>
        {images.map((image, index) => (
          <li key={index}>
            <ImageCard
              imageUrl={image.urls.small}
              altText={image.description}
              author={image.author} 
              likes={image.likes}
              description={image.description} 
            />
          </li>
        ))}
      </ul>
      
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
  ).isRequired
};

export default ImageGallery;
