import { useState } from "react";
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import { fetchImages, fetchMoreImages } from './articles-api';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';

function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMoreImages, setHasMoreImages] = useState(false);

  const handleSearch = async (topic) => {
    try {
      setImages([]);
      setError(null);
      setLoading(true);
      const fetchedImages = await fetchImages(topic);
      setImages(fetchedImages);
      setHasMoreImages(true); 
      if (fetchedImages.length === 0) {
        setHasMoreImages(false); 
        setError(new Error('No results were found for your request!'));
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async (topic) => {
    try {
      const newImages = await fetchMoreImages(topic);
      setImages(prevImages => [...prevImages, ...newImages]);
      if (newImages.length === 0) {
        setHasMoreImages(false); 
        
      }
    } catch (error) {
      console.error('Error loading more images:', error);
    }
  }

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <p>Error: {error.message}</p>}
      <ImageGallery images={images} />
      <LoadMoreBtn onLoadMore={handleLoadMore} hasMoreImages={hasMoreImages} />
    </div>
  );
}

export default App;
