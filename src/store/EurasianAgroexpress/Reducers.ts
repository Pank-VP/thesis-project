import { createReducer } from '@reduxjs/toolkit';
import { IData } from '../../api/Home/MutableData';
import { getDataEurasianAgroexpressCreator } from './ActionCreator';

export interface IDataStateEurasianAgroexpress {
  itemsEurasianAgroexpress?: IData;
};

const initialState: IDataStateEurasianAgroexpress | undefined = {
  itemsEurasianAgroexpress: undefined
};

export const addDataReducersEurasianAgroexpress = createReducer(initialState, (builder) => {
  builder.addCase(getDataEurasianAgroexpressCreator.fulfilled, (state, action) => {
    state.itemsEurasianAgroexpress= action.payload;
  });
});
