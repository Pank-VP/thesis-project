import axios from 'axios';
import { IData } from '../Home/MutableData';

const GetDataTerminals = async (): Promise<IData> => {
  const response = await axios.get<IData>('https://ruzholding.de/wp-json/wp/v2/posts/8');
  
  return response.data;
};

export default GetDataTerminals;
