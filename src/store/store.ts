import { configureStore } from '@reduxjs/toolkit';
import { addDataReducersEurasianAgroexpress } from './EurasianAgroexpress/Reducers';
import { addDataReducers } from './Home/Reducers';
import { addDataReducersMagistral } from './Magistral/Reducers';
import { addDataReducersNorthSouth } from './NorthSouth/Reducers';
import { addDataReducersTerminals } from './Terminals/Reducers';

const store = configureStore({
  reducer: {
    addData: addDataReducers,
    addDataTerminals: addDataReducersTerminals,
    addDataMagistral: addDataReducersMagistral,
    addDataNorthSouth: addDataReducersNorthSouth,
    addDataEurasianAgroexpress: addDataReducersEurasianAgroexpress,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
