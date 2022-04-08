import { createAsyncThunk } from '@reduxjs/toolkit';
import GetDataMagistral from '../../api/Magistral/GetDataMagistral';
import DataActionTypeMagistral from './ActionType';

export const getDataMagistralCreator = createAsyncThunk(DataActionTypeMagistral.GetMagistral,() => {
  return GetDataMagistral();
});