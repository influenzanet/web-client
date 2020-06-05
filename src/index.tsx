import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import store from './store';
import './i18n';
import { setDefaultAccessTokenHeader } from './api/instances/auth-api-instance';

if (store.getState().api.accessToken) {
  setDefaultAccessTokenHeader(store.getState().api.accessToken);
}

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback="loading">
      <App />
    </Suspense>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
