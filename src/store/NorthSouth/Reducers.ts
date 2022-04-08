import { createReducer } from '@reduxjs/toolkit';
import { IData } from '../../api/Home/MutableData';
import { getDataNorthSouthCreator } from './ActionCreators';

export interface IDataStateNorthSouth {
  itemsNorthSouth?: IData;
};

const initialState: IDataStateNorthSouth | undefined = {
  itemsNorthSouth: undefined
};

export const addDataReducersNorthSouth = createReducer(initialState, (builder) => {
  builder.addCase(getDataNorthSouthCreator.fulfilled, (state, action) => {
    state.itemsNorthSouth= action.payload;
  });
});