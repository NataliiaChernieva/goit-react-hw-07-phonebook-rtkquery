import { createSlice } from '@reduxjs/toolkit'

const itemsSlice=createSlice({
  name: 'items',
  initialState: JSON.parse(localStorage.getItem('contactList')) ?? [],
  reducers: {
     addContact:  (state,action)=>[action.payload,...state],
     deleteContact: (state, action)=> state.filter((contact) => contact.id !== action.payload),
  }
});

export const {addContact, deleteContact} = itemsSlice.actions;
export default itemsSlice.reducer;