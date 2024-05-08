// fetchImages.ts
import axios, { AxiosResponse } from "axios";
import ImageData from "./ImageData";

const accessKey: string = "e1Aww9Xz-HYCWbJlnhbo9mQqNyKMxYiS2j19EiIHlz0";
const baseUrl: string = "https://api.unsplash.com/";

const instance = axios.create({
  baseURL: baseUrl,
});

type FetchImagesResponse = {
  data: {
    results: Array<{
      id: string;
      urls: {
        small: string;
        regular: string;
      };
      user: {
        name: string;
        username: string;
      };
      likes: number;
      alt_description?: string;
      description?: string;
    }>;
  };
};


export async function fetchImages(
  topic: string,
  page: number,
  perPage: number = 20,
  width: number = 200,
  height: number = 200
): Promise<ImageData[]> {
  try {
    const response: AxiosResponse<FetchImagesResponse> = await instance.get(
      "search/photos",
      {
        params: {
          client_id: accessKey,
          query: topic,
          page: page,
          per_page: perPage,
          w: width,
          h: height,
        },
      }
    );

    const data: FetchImagesResponse = response.data;

    const modifiedData: ImageData[] = data.results.map((image) => ({
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
      description: image.alt_description || image.description || "",
    }));

    return modifiedData;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
}
