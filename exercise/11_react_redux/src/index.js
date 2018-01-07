import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';

import reducer from './reducers';
// import { getAllProducts } from './actions';
import App from './components/App';

const store = createStore(reducer);

// store.dispatch(getAllProducts());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
