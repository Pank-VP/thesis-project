import { createAsyncThunk } from '@reduxjs/toolkit';
import MutableData from '../../api/Home/MutableData';
import DataActionType from './ActionType';

export const getDataHome = createAsyncThunk(DataActionType.Get,() => {
  return MutableData();
});
