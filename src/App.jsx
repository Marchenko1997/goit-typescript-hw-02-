import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import { useState } from "react";
import { fetchImages } from './articles-api';
import Loader  from './Loader/Loader';




function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (topic) => {
    try {
      setImages([]);
      setError(null);
      setLoading(true);
      const fetchedImages = await fetchImages(topic);
      setImages(fetchedImages);
    } catch (error) {
      setError(error);
    }finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <p>Error: {error.message}</p>}
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
