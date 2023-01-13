import { configureStore } from '@reduxjs/toolkit';
import { contactssReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactssReducer,
    filters: filterReducer,
  },
});
