import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App'
<<<<<<< HEAD
import manageUsers from './reducers/manageUsers'

// add imports and code
=======
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import manageUsers from './reducers/manageUsers'

const store = createStore(manageUsers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
>>>>>>> 2a4fb8b26118886ad8021deb0876656f0a83bb41

const store = createStore(manageUsers)

ReactDOM.render(
<<<<<<< HEAD
  // add imports and code
    <Provider store={store}>
        <App />
    </Provider>
  // add imports and code
=======
  <Provider store={store}>
    <App />
  </Provider>
>>>>>>> 2a4fb8b26118886ad8021deb0876656f0a83bb41
  ,
  document.getElementById('root')
);
