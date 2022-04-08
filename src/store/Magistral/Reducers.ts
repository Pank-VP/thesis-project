import { createReducer } from '@reduxjs/toolkit';
import { IData } from '../../api/Home/MutableData';
import { getDataMagistralCreator } from './ActionCreators';

export interface IDataStateMagistral {
  itemsMagistral?: IData;
};

const initialState: IDataStateMagistral | undefined = {
  itemsMagistral: undefined
};

export const addDataReducersMagistral = createReducer(initialState, (builder) => {
  builder.addCase(getDataMagistralCreator.fulfilled, (state, action) => {
    state.itemsMagistral= action.payload;
  });
});
