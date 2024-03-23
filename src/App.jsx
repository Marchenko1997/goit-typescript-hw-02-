import { useState, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import { fetchImages } from "./articles-api";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMoreImages, setHasMoreImages] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query) {
      fetchImagesData(query, page);
    }
  }, [query, page]);

  const fetchImagesData = async (topic, pageNumber) => {
    try {
      setLoading(true);
      const fetchedImages = await fetchImages(topic, pageNumber);
      if (pageNumber === 1) {
        setImages(fetchedImages);
      } else {
        setImages((prevImages) => [...prevImages, ...fetchedImages]);
      }
      setHasMoreImages(fetchedImages.length > 0);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (topic) => {
    setQuery(topic);
    setPage(1);
  };

  const handleLoadMore = async () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <p>Error: {error.message}</p>}
      <ImageGallery images={images} openModal={openModal} />
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        imageUrl={selectedImageUrl}
      />
      <LoadMoreBtn onLoadMore={handleLoadMore} hasMoreImages={hasMoreImages} />
    </div>
  );
}

export default App;
