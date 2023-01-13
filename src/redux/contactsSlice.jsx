import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    removeId(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});
export const { add, removeId } = contactsSlice.actions;
export const contactssReducer = contactsSlice.reducer;
