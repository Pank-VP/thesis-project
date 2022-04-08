import { createReducer } from '@reduxjs/toolkit';
import { IData } from '../../api/Home/MutableData';
import { getDataHome } from './ActionCreator';

export interface IDataState {
  items?: IData;
};

const initialState: IDataState | undefined = {
  items: undefined
};

export const addDataReducers = createReducer(initialState, (builder) => {
  builder.addCase(getDataHome.fulfilled, (state, action) => {
    state.items = action.payload;
  });
});
