import axios from "axios";

const accessKey = "e1Aww9Xz-HYCWbJlnhbo9mQqNyKMxYiS2j19EiIHlz0";
const baseUrl = "https://api.unsplash.com/";

const instance = axios.create({
  baseURL: baseUrl, 
});

export async function fetchImages(
  topic,
  page,
  perPage = 20,
  width = 200,
  height = 200
) {
  try {
    const response = await instance.get("search/photos", {
      params: {
        client_id: accessKey,
        query: topic,
        page: page,
        per_page: perPage,
        w: width,
        h: height,
      },
    });

    const data = response.data;

    const modifiedData = data.results.map((image) => ({
      id: image.id,
      urls: {
        small: image.urls.small,
        regular: image.urls.regular,
      },
      author: {
        name: image.user.name,
        username: image.user.username,
      },
      likes: image.likes,
      description: image.alt_description || image.description,
    }));

    return modifiedData;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
}
