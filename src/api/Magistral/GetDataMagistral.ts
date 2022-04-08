import axios from 'axios';
import { IData } from '../Home/MutableData';

const GetDataMagistral = async (): Promise<IData> => {
  const response = await axios.get<IData>('https://ruzholding.de/wp-json/wp/v2/posts/77');
  
  return response.data;
};

export default GetDataMagistral;
