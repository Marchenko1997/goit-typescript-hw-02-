import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import { useState } from "react";
import { fetchImages } from './articles-api';
import Loader  from './Loader/Loader';
import {fetchMoreImages} from './articles-api';
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
      setHasMoreImages (true);
      const fetchedImages = await fetchImages(topic);
      setImages(fetchedImages);
    } catch (error) {
      setError(error);
    }finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async (topic) => {
    try{
      const newImages = await fetchMoreImages(topic);
      setImages(prevImages => [...prevImages, ...newImages]);
      if(newImages.length === 0) {
        setHasMoreImages(false);
      }
    } catch (error){
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
