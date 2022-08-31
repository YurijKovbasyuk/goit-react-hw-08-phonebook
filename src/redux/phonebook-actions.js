import { createAction } from '@reduxjs/toolkit';

export const setContacts = createAction('phonebook/setcontacts');
export const setFilter = createAction('phonebook/setfilter');
export const deleteContacts = createAction('phonebook/deletecontact');
export const addContacts = createAction('phonebook/addcontacts');
export const setToken = createAction('phonebook/settoken');
