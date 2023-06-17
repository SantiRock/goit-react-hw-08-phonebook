import { createSlice } from "@reduxjs/toolkit";
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
    },
})

//export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

/*
const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
       addContact : {
            reducer(state, action) {
            
                for (let contact of state) {
                    if(contact.name.toLowerCase() === action.payload.name.toLowerCase()) {
                        //setMessage(name + ' is already in contacts')
                        alert(action.payload.name + ' is already in contacts')
                        return 
                    }
                }
                state.push(action.payload);
            },
            prepare(personObject) {
                return {
                    payload: {
                        name: personObject.name,
                        number: personObject.number,
                        id: nanoid(),
                    },
                };
            },
        },
       deleteContact(state, action) {
        const index = state.findIndex(contact => contact.id === action.payload);
        state.splice(index, 1);
       },
    },
})*/