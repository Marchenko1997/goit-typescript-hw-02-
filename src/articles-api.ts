import axios, { AxiosResponse } from 'axios';

const accessKey: string = 'e1Aww9Xz-HYCWbJlnhbo9mQqNyKMxYiS2j19EiIHlz0';
const baseUrl: string = 'https://api.unsplash.com/';

const instance = axios.create({
  baseURL: baseUrl,
});

export type ImageData = {
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
  description: string;
};

export type FetchImagesResponse = {
  results: ImageData[]; 
};

export async function fetchImages(
  topic: string,
  page: number,
  perPage: number = 20,
  width: number = 200,
  height: number = 200
): Promise<ImageData[]> {
  try {
    const response: AxiosResponse<FetchImagesResponse> = await instance.get('search/photos', {
      params: {
        client_id: accessKey,
        query: topic,
        page: page,
        per_page: perPage,
        w: width,
        h: height,
      },
    });

    const data: FetchImagesResponse = response.data;

    const modifiedData: ImageData[] = data.results.map((image) => ({
      id: image.id,
      urls: {
        small: image.urls.small,
        regular: image.urls.regular,
      },
      author: image.author ? { 
        name: image.author.name || '', 
        username: image.author.username || '', 
      } : { name: '', username: '' },
      likes: image.likes,
      description: image.description || '',
    }));
    

    return modifiedData;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
