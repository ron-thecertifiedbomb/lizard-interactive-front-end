/* eslint-disable import/no-unused-modules, import/extensions */
'use client'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counterSlice';
import productReducer from '../slices/productSlice'; 
import connectionReducer from '../slices/connectionSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  product: productReducer, 
  connection: connectionReducer, 
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

