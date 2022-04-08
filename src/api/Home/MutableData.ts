import axios from 'axios';

export interface IData {
  id: number,
  content: {
    rendered: string,
    protected: boolean,
  },
  excerpt: {
    rendered: string,
    protected: boolean,
  }
}

const MutableData = async (): Promise<IData> => {
  const response = await axios.get<IData>('https://ruzholding.de/wp-json/wp/v2/posts/1');
  
  return response.data;
};

export default MutableData;
