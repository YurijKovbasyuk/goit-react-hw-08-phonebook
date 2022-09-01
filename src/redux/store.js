import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { loginReducer } from './Auth/loginApi';
import { contactsApi } from './Contacts/rtk';
import contactsReducer from './Contacts/phonebook-reducer';
import user from './Auth/user';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
  [loginReducer.reducerPath]: loginReducer.reducer,
  user,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware),
});

let persistor = persistStore(store);

const exp = { store, persistor };

export default exp;
