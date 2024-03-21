
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import { useState } from "react";
import { fetchImages } from './articles-api';

function App() {

  const[images, setImages] = useState ([]);
  const [error, setError] = useState(null);


  const handleSearch = async (topic) => {
    try{
   setImages([]);
   const fetchedImages = await fetchImages(topic);
   setImages(fetchedImages);

    } catch (error) {
     setError(error)
    }
   
  
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <p>Error: {error.message}</p>}
      <ImageGallery images={images}/>
    </div>
  );
}

export default App;
