import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux'
import reducer from './reducers'
import * as actions from './actions/index.js'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as readableApi from './utils/api-tool.js'

const store = createStore(
	reducer,
	//if redux devtools exist in window, invoke redux devtools
	window.__REDUX_DEVTOOLS__EXTENSION__ && window.__REDUX__DEVTOOLS__EXTENSION__()
)

console.log('STATE',store.getState())

store.dispatch(actions.newPost({title: "My first post", 
								body: "test 123", 
								author: "Dan Cohen", 
								category: "Udacity"}))

console.log('NEWSTATE',store.getState())

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
