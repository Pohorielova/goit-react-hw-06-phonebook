import { createSlice } from '@reduxjs/toolkit';

const InitialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

const appSlice = createSlice({
  name: 'phonebook',
  initialState: InitialState,
  reducers: {
    add(state, action) {
      state.contacts.items.push(action.payload);
    },
    remove(state, action) {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter(state, action) {
      state.contacts.filter = action.payload;
    },
  },
});
export const { add, remove, setFilter } = appSlice.actions;
export const appReducer = appSlice.reducer;
