import { createReducer } from '@reduxjs/toolkit';
import { IData } from '../../api/Home/MutableData';
import { getDataTerminalsCreator } from './ActionCreator';

export interface IDataStateTerminals {
  itemsTerminal?: IData;
};

const initialState: IDataStateTerminals | undefined = {
  itemsTerminal: undefined
};

export const addDataReducersTerminals = createReducer(initialState, (builder) => {
  builder.addCase(getDataTerminalsCreator.fulfilled, (state, action) => {
    state.itemsTerminal= action.payload;
  });
});
