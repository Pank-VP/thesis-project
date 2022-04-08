import { createAsyncThunk } from '@reduxjs/toolkit';
import GetDataTerminals from '../../api/Terminals/GetDataTerminals';
import DataActionTypeTerminals from './ActionType';

export const getDataTerminalsCreator = createAsyncThunk(DataActionTypeTerminals.GetTerminals,() => {
  return GetDataTerminals();
});
