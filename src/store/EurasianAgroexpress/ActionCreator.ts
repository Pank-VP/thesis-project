import { createAsyncThunk } from '@reduxjs/toolkit';
import GetDataEurasianAgroexpress from '../../api/EurasianAgroexpress/GetEurasianAgroexpressData';
import DataActionTypeEurasianAgroexpress from './ActionType';

export const getDataEurasianAgroexpressCreator = createAsyncThunk(DataActionTypeEurasianAgroexpress.GetEurasianAgroexpress,() => {
  return GetDataEurasianAgroexpress();
});
