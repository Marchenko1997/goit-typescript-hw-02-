const accessKey = 'e1Aww9Xz-HYCWbJlnhbo9mQqNyKMxYiS2j19EiIHlz0';
const baseUrl = 'https://api.unsplash.com/';

export async function fetchImages(topic, width = 200, height = 200) {
  try {
    const response = await fetch(`${baseUrl}photos?client_id=${accessKey}&query=${topic}&w=${width}&h=${height}`);
    const data = await response.json();

    const modifiedData = data.map(image => ({
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