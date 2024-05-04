import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.contacts.items;
export const selectNameFilter = (state) => state.filters.filters.name;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);