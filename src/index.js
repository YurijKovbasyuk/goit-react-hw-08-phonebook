import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import store from 'redux/redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store.store}>
			<PersistGate loading={null} persistor={store.persistor}>
				<BrowserRouter basename='/goit-react-hw-08-phonebook'>
					<App />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
);
