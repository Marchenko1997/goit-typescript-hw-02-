import axios from 'axios';

const accessKey = 'e1Aww9Xz-HYCWbJlnhbo9mQqNyKMxYiS2j19EiIHlz0';
const baseUrl = 'https://api.unsplash.com/';

export async function fetchImages(topic, width = 200, height = 200) {
  try {
    const response = await axios.get(`${baseUrl}search/photos`, {
      params: {
        client_id: accessKey,
        query: topic,
        page: 1,
        per_page: 10,
        w: width,
        h: height
      }
    });

    const data = response.data;

    const modifiedData = data.results.map(image => ({
      id: image.id,
      urls: {
        small: image.urls.small,
        regular: image.urls.regular
      },
      author: {
        name: image.user.name,
        username: image.user.username,
      },
      likes: image.likes,
      description: image.alt_description || image.description
    }));

    return modifiedData;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
export async function fetchMoreImages(topic, page = 1, perPage = 10, width = 200, height = 200) {
    try {
      const response = await axios.get(`${baseUrl}search/photos`, {
        params: {
          client_id: accessKey,
          query: topic,
          page: page,
          per_page: perPage,
          w: width,
          h: height
        }
      });
  
      const data = response.data;
  
      const modifiedData = data.results.map(image => ({
        id: image.id,
        urls: {
          small: image.urls.small,
          regular: image.urls.regular
        },
        author: {
          name: image.user.name,
          username: image.user.username,
        },
        likes: image.likes,
        description: image.alt_description || image.description
      }));
  
      return modifiedData;
    } catch (error) {
      console.error('Error fetching more images:', error);
      throw error;
    }
  }
