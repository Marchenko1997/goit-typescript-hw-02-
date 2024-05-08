// ImageData.ts
type ImageData = {
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
    description: string|null;
  };
  
  export default ImageData;
  