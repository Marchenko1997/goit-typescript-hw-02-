import PropTypes from "prop-types";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {

  const hasImages = images.length > 0;

  return (
   
    hasImages && (
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <div>
            <ImageCard imageUrl={image.urls.small} altText={image.description} />
            </div>
          </li>
        ))}
      </ul>
    )
  );
};


ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        urls: PropTypes.shape({
          small: PropTypes.string.isRequired
        }),
        description: PropTypes.string.isRequired
      })
    ).isRequired,
  };
  
export default ImageGallery;
