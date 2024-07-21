import { createSlice } from "@reduxjs/toolkit"; 
import { nanoid } from "nanoid"; 

const contactsSlice = createSlice({ 
    name: "contacts",
    initialState: {    
        items: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ]}, 
    reducers: {
        addContact: {
            reducer(state, action) {                
                state.items.push(action.payload); // Add new contact

                console.log("addContact > state: ", state); 
                console.log("addContact > action: ", action);
                console.log("addContact > action.payload: ", action.payload);
            },
            prepare(contact) {
                return {
                    payload: {
                        ...contact,
                        id: nanoid(),
                    }
                }
            }
        },
        deleteContact(state, action) {
            console.log("deleteContact > action:", action); 
            state.items = state.items.filter(contact => contact.id !== action.payload); 
        }
    }
});

export const { addContact, deleteContact } = contactsSlice.actions; // Actions export

export const selectContacts = state => state.contacts.items; // Contacts selector
console.log("<<<selectContacts = state => state.contacts.items>>>", selectContacts)

export default contactsSlice.reducer; // Reducer export
