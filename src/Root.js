import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/root-reducer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faBars,
  faSyncAlt,
  faUserCircle,
  faEdit,
  faSignOutAlt,
  faSignInAlt,
  faHome,
  faCalendar,
  faCalendarDay,
  faCalendarWeek,
  faEllipsisV,
  faCalendarPlus,
  faHatWizard,
  faMoon,
  faSun,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

export default (props) => {
  const { children, initialState = {} } = props;
  const middlewares = [thunk];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }
  
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
  );

  const persistor = persistStore(store);

  library.add(
    faBars,
    faSyncAlt,
    faUserCircle,
    faEdit,
    faSignOutAlt,
    faSignInAlt,
    faHome,
    faCalendar,
    faCalendarDay,
    faCalendarWeek,
    faEllipsisV,
    faCalendarPlus,
    faHatWizard,
    faMoon,
    faSun,
    faChevronLeft
  );

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