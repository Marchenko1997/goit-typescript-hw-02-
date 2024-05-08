import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import { fetchImages, ImageData } from './articles-api';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { animateScroll as scroll } from 'react-scroll';

type AppProps = {};

const App: React.FC<AppProps> = () => {
  const [images, setImages] = useState<ImageData[]>([]); 
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMoreImages, setHasMoreImages] = useState<boolean>(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>('');
  const [selectedImageAlt, setSelectedImageAlt] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (query) {
      fetchImagesData(query, page);
    }
  }, [query, page]);

  const fetchImagesData = async (topic: string, pageNumber: number) => {
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
    } catch (error: unknown) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (topic: string) => {
    setQuery(topic);
    setPage(1); 
  };

  const handleLoadMore = async () => {
    setPage((prevPage) => prevPage + 1);
    scroll.scrollToBottom({
      smooth: true,
      duration: 500,
      offset: Infinity,
    });
  };

  const openModal = (imageUrl: string, altText: string) => {
    setSelectedImageUrl(imageUrl);
    setSelectedImageAlt(altText);
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
        altText={selectedImageAlt}
      />
      <LoadMoreBtn onLoadMore={handleLoadMore} hasMoreImages={hasMoreImages} />
    </div>
  );
};

export default App;
