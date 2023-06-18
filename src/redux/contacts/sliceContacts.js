import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "redux/auth/operations";
import { fetchContacts, addContact, deleteContact } from "./operations";

// Primer estado ----

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null
};

// Handlers ----

const handlePending = state => {
    state.isLoading = true;
};
  
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

// Slice -----

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.rejected]: handleRejected,
        [fetchContacts.fulfilled](state, action) {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload;
        },
        [addContact.pending]: handlePending,
        [addContact.rejected]: handleRejected,
        [addContact.fulfilled](state, action) {
          state.isLoading = false;
          state.error = null;
          state.items.push(action.payload);
        },
        [deleteContact.pending]: handlePending,
        [deleteContact.rejected]: handleRejected,
        [deleteContact.fulfilled](state, action) {
          state.isLoading = false;
          state.error = null;
          const index = state.items.findIndex(
            task => task.id === action.payload.id
          );
          state.items.splice(index, 1);
        },
        [logOut.fulfilled](state) {
            state.items = [];
            state.error = null;
            state.isLoading = false;
        }   
    },
});

export const contactsReducer = contactsSlice.reducer;
