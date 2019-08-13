import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/root-reducer';

export default (props) => {
  const { children, initialState = {} } = props;
  const middlewares = [thunk];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }
  
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );

  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          {children}
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}