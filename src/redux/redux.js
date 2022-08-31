import contactsReducer from './phonebook-reducer';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { contactsApi } from '../redux/rtk';
import user from './user';
import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import { loginReducer } from '../redux/loginApi';

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
