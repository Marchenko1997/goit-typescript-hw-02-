import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export type Image = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  author: {
    name: string;
    username: string;
  };
  likes: number;
  description?: string;
};

type ImageGalleryProps = {
  images: Image[]; 
  openModal: (url: string, description?: string) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  const hasImages = images.length > 0;

  return (
    hasImages && (
      <div>
        <ul className={css.gallery}>
          {images.map((image) => (
            <li key={image.id} className={css.galleryitem}>
              <ImageCard
                imageUrl={image.urls.small}
                altText={image.description || ''}
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

export default ImageGallery;
