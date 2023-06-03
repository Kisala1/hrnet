import { configureStore } from '@reduxjs/toolkit';
import LocalStorageSlice from '../feature/localStorageReducer';

export const store = configureStore({ reducer: { data: LocalStorageSlice } });
