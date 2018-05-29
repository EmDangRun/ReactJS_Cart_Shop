import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardPage from './pages/CardPage/cardpage';
import registerServiceWorker from './registerServiceWorker';
import { createStore ,applyMiddleware} from 'redux';
import appReducers from './reducers/index';
import { Provider } from 'react-redux';
import thunk  from 'redux-thunk';
const store = createStore(
	appReducers,
	applyMiddleware(thunk)
)

ReactDOM.render(
	<Provider store = {store}>
			<CardPage />
	</Provider>,
	 document.getElementById('root')
);
registerServiceWorker();
