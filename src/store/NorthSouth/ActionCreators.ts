import { createAsyncThunk } from '@reduxjs/toolkit';
import GetDataNorthSouth from '../../api/NorthSouth/GetNorthSouthData';
import DataActionTypeNorthSouth from './ActionType';

export const getDataNorthSouthCreator = createAsyncThunk(DataActionTypeNorthSouth.GetNothSouth,() => {
  return GetDataNorthSouth();
});